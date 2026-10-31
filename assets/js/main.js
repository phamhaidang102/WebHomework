/* =====================================================
   LOGIC DÙNG CHUNG - ABC TOURS
   Phụ thuộc: jQuery, Bootstrap 5 Bundle, assets/js/data.js (nạp TRƯỚC file này)
   Cung cấp:
     - Tour: ABC.getTours(), ABC.getTourById(id), ABC.formatVND(n)
     - Auth: ABC.getCurrentUser(), ABC.getUsers(), ABC.saveUser(u), ABC.login(id, pw), ABC.logout()
     - Đơn hàng: ABC.getOrders(), ABC.getOrderByCode(code), ABC.saveOrder(order),
                 ABC.updateOrderStatus(code, status, extra), ABC.calcRefund(order)
   Tự động dựng Navbar + Modal Đăng nhập nhanh vào <header id="site-header"></header>
   và Footer vào <footer id="site-footer"></footer>
   ===================================================== */
var ABC = (function ($) {
  "use strict";

  var KEYS = {
    tours: "abc_tours",
    users: "abc_users",
    user: "currentUser",
    orders: "abc_orders",
    draftBooking: "abc_draft_booking",
    search: "abc_search"
  };

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ----- Dữ liệu tour & đơn mẫu ----- */
  function seedData() {
    var ver = String(typeof ABC_DATA_VERSION !== "undefined" ? ABC_DATA_VERSION : 1);
    if (typeof ABC_SAMPLE_TOURS !== "undefined") {
      if (!read(KEYS.tours, null) || localStorage.getItem("abc_tours_v") !== ver) {
        write(KEYS.tours, ABC_SAMPLE_TOURS);
        try { localStorage.setItem("abc_tours_v", ver); } catch (e) {}
      }
    }
    if (typeof ABC_SAMPLE_ORDERS !== "undefined") {
      var existingOrders = read(KEYS.orders, null);
      if (!existingOrders || !existingOrders.length) {
        write(KEYS.orders, ABC_SAMPLE_ORDERS);
      }
    }
  }
  function getTours() { return read(KEYS.tours, typeof ABC_SAMPLE_TOURS !== "undefined" ? ABC_SAMPLE_TOURS : []); }
  function getTourById(id) {
    return getTours().filter(function (t) { return t.id === id || t.code === id; })[0] || null;
  }
  function formatVND(n) {
    return Number(n || 0).toLocaleString("vi-VN") + "đ";
  }

  /* ----- Phiên đăng nhập & Tài khoản (Khánh nhỏ - SV2) ----- */
  function getUsers() { return read(KEYS.users, []); }
  function saveUser(userObj) {
    var list = getUsers();
    list.push(userObj);
    write(KEYS.users, list);
  }
  function getCurrentUser() { return read(KEYS.user, null); }
  function login(identifier, password) {
    var idClean = $.trim(String(identifier || "")).toLowerCase();
    var users = getUsers();
    var found = null;
    for (var i = 0; i < users.length; i++) {
      var u = users[i];
      var mail = String(u.email || "").toLowerCase();
      var phone = String(u.phone || "").toLowerCase();
      var uname = String(u.username || "").toLowerCase();
      if ((mail === idClean || phone === idClean || uname === idClean) && u.password === password) {
        found = u;
        break;
      }
    }
    if (!found && idClean === "demo@abctours.vn" && password === "Abc@1234") {
      found = { fullName: "Khách hàng Demo", email: "demo@abctours.vn", phone: "0901234567", cccd: "079204001234" };
    }
    if (found) {
      var sessionUser = {
        fullName: found.fullName || found.name || "Thành viên",
        email: found.email || "",
        phone: found.phone || "",
        cccd: found.cccd || ""
      };
      write(KEYS.user, sessionUser);
      return { ok: true, user: sessionUser };
    }
    return { ok: false, message: "Email/Số điện thoại hoặc mật khẩu không chính xác." };
  }
  function logout() {
    try { localStorage.removeItem(KEYS.user); } catch (e) {}
    window.location.href = "index.html";
  }

  /* ----- Đơn đặt tour & Hoàn tiền (Khánh Duy SV5 & Quốc Duy SV6) ----- */
  function getOrders() { return read(KEYS.orders, typeof ABC_SAMPLE_ORDERS !== "undefined" ? ABC_SAMPLE_ORDERS : []); }
  function getOrderByCode(code) {
    var clean = $.trim(String(code || "")).toUpperCase();
    return getOrders().filter(function (o) {
      return String(o.orderCode || o.orderId || "").toUpperCase() === clean;
    })[0] || null;
  }
  function saveOrder(order) {
    var list = getOrders();
    list.unshift(order);
    write(KEYS.orders, list);
    return order;
  }
  function updateOrderStatus(code, status, extra) {
    var clean = $.trim(String(code || "")).toUpperCase();
    var list = getOrders();
    var updated = null;
    for (var i = 0; i < list.length; i++) {
      if (String(list[i].orderCode || list[i].orderId || "").toUpperCase() === clean) {
        list[i].status = status;
        if (extra && typeof extra === "object") {
          for (var k in extra) {
            if (Object.prototype.hasOwnProperty.call(extra, k)) { list[i][k] = extra[k]; }
          }
        }
        updated = list[i];
        break;
      }
    }
    write(KEYS.orders, list);
    return updated;
  }
  function calcRefund(order, nowDate) {
    if (!order) { return { hoursLeft: 0, percent: 0, refundAmount: 0, reason: "Không tìm thấy đơn tour" }; }
    var now = nowDate ? new Date(nowDate) : new Date();
    var dep = new Date(order.departureDate);
    var hoursLeft = (dep.getTime() - now.getTime()) / 3600000;
    var percent = 0;
    var reason = "Hủy dưới 12 giờ trước giờ khởi hành: không hỗ trợ hoàn tiền (0%).";
    if (hoursLeft >= 24) {
      percent = 70;
      reason = "Hủy trước giờ khởi hành từ 24 giờ trở lên: hoàn 70% tổng giá trị đơn.";
    } else if (hoursLeft >= 12) {
      percent = 50;
      reason = "Hủy trước giờ khởi hành từ 12 giờ đến dưới 24 giờ: hoàn 50% tổng giá trị đơn.";
    }
    var refundAmount = Math.round((Number(order.totalPrice || 0) * percent) / 100);
    return {
      hoursLeft: Math.round(hoursLeft * 10) / 10,
      percent: percent,
      refundAmount: refundAmount,
      reason: reason
    };
  }

  /* ----- Navbar, Quick Login Modal & Footer ----- */
  function navbarHtml(active) {
    var user = getCurrentUser();
    function cls(page) { return "nav-link" + (active === page ? " active" : ""); }
    function cur(page) { return active === page ? ' aria-current="page"' : ""; }

    var account = user
      ? '<li class="nav-item dropdown">' +
          '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Xin chào, ' +
          $("<div>").text(user.fullName || user.email || "bạn").html() + "</a>" +
          '<ul class="dropdown-menu dropdown-menu-end">' +
            '<li><a class="dropdown-item" href="my-bookings.html">Đơn đặt tour của tôi</a></li>' +
            '<li><a class="dropdown-item" href="cancel-refund.html">Hủy tour &amp; hoàn tiền</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><button type="button" class="dropdown-item" id="btn-logout">Đăng xuất</button></li>' +
          "</ul></li>"
      : '<li class="nav-item"><a class="' + cls("login") + '" href="login.html"' + cur("login") + '>Đăng nhập</a></li>' +
        '<li class="nav-item ms-lg-1"><button type="button" class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#quickLoginModal">Đăng nhập nhanh</button></li>' +
        '<li class="nav-item ms-lg-2"><a class="btn btn-abc" href="register.html">Đăng ký</a></li>';

    return (
      '<nav class="navbar navbar-expand-lg abc-navbar" aria-label="Điều hướng chính"><div class="container">' +
        '<a class="navbar-brand" href="index.html"><span class="brand-mark" aria-hidden="true">✈</span>ABC TOURS</a>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Mở menu">' +
          '<span class="navbar-toggler-icon"></span></button>' +
        '<div class="collapse navbar-collapse" id="mainNav">' +
          '<ul class="navbar-nav me-auto">' +
            '<li class="nav-item"><a class="' + cls("home") + '" href="index.html"' + cur("home") + ">Trang chủ</a></li>" +
            '<li class="nav-item dropdown"><a class="' + cls("tours") + ' dropdown-toggle" href="tours.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tour</a>' +
              '<ul class="dropdown-menu">' +
                '<li><a class="dropdown-item" href="tours.html">Tất cả tour</a></li>' +
                '<li><a class="dropdown-item" href="tours.html?scope=domestic">Tour trong nước</a></li>' +
                '<li><a class="dropdown-item" href="tours.html?scope=international">Tour nước ngoài</a></li>' +
                '<li><a class="dropdown-item" href="tours.html?type=premium">Tour cao cấp</a></li>' +
                '<li><a class="dropdown-item" href="tours.html?type=mice">Tour M.I.C.E</a></li>' +
              "</ul></li>" +
            '<li class="nav-item"><a class="nav-link" href="tours.html?sale=1">Khuyến mãi</a></li>' +
            '<li class="nav-item dropdown"><a class="' + cls("support") + ' dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hỗ trợ</a>' +
              '<ul class="dropdown-menu">' +
                '<li><a class="dropdown-item" href="about.html">Giới thiệu</a></li>' +
                '<li><a class="dropdown-item" href="my-bookings.html">Tra cứu đơn tour</a></li>' +
                '<li><a class="dropdown-item" href="cancel-refund.html">Hủy tour &amp; hoàn tiền</a></li>' +
                '<li><a class="dropdown-item" href="sitemap.html">Sơ đồ website</a></li>' +
              "</ul></li>" +
          "</ul>" +
          '<ul class="navbar-nav align-items-lg-center">' + account + "</ul>" +
        "</div></div></nav>" +
      '<div class="modal fade" id="quickLoginModal" tabindex="-1" aria-labelledby="quickLoginTitle" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered">' +
          '<div class="modal-content">' +
            '<div class="modal-header">' +
              '<h2 class="modal-title h5 mb-0" id="quickLoginTitle">Đăng nhập tài khoản ABC Tours</h2>' +
              '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>' +
            '</div>' +
            '<div class="modal-body">' +
              '<form id="quick-login-form" novalidate>' +
                '<div class="mb-3">' +
                  '<label for="ql-identifier" class="form-label">Email hoặc Số điện thoại</label>' +
                  '<input type="text" class="form-control" id="ql-identifier" name="identifier" placeholder="Ví dụ: demo@abctours.vn hoặc 0901234567" required>' +
                '</div>' +
                '<div class="mb-3">' +
                  '<label for="ql-password" class="form-label">Mật khẩu</label>' +
                  '<input type="password" class="form-control" id="ql-password" name="password" placeholder="Nhập mật khẩu (Demo: Abc@1234)" required>' +
                '</div>' +
                '<div class="alert alert-danger py-2 d-none" id="ql-error" role="alert"></div>' +
                '<div class="d-grid gap-2">' +
                  '<button type="submit" class="btn btn-abc">Đăng nhập</button>' +
                '</div>' +
              '</form>' +
            '</div>' +
            '<div class="modal-footer justify-content-between small">' +
              '<span>Chưa có tài khoản? <a href="register.html">Đăng ký ngay</a></span>' +
              '<a href="login.html">Mở trang Đăng nhập đầy đủ</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function footerHtml() {
    return (
      '<div class="container"><div class="row g-4">' +
        '<div class="col-4"><p class="brand-line">✈ ABC TOURS</p>' +
          "<p>Đồng hành cùng bạn trên mọi hành trình.<br>Hotline: <a href=\"tel:19001234\">1900 1234</a><br>Email: <a href=\"mailto:support@abctours.vn\">support@abctours.vn</a></p></div>" +
        '<div class="col-2"><h2>Khám phá</h2><ul>' +
          '<li><a href="tours.html?scope=domestic">Tour trong nước</a></li>' +
          '<li><a href="tours.html?scope=international">Tour nước ngoài</a></li>' +
          '<li><a href="tours.html?type=premium">Tour cao cấp</a></li>' +
          '<li><a href="tours.html?type=mice">Tour M.I.C.E</a></li></ul></div>' +
        '<div class="col-3"><h2>Hỗ trợ khách hàng</h2><ul>' +
          '<li><a href="my-bookings.html">Tra cứu đơn tour</a></li>' +
          '<li><a href="cancel-refund.html">Chính sách hủy &amp; hoàn tiền</a></li>' +
          '<li><a href="about.html">Về chúng tôi</a></li>' +
          '<li><a href="sitemap.html">Sơ đồ website</a></li></ul></div>' +
        '<div class="col-3"><h2>Tài khoản</h2><ul>' +
          '<li><a href="login.html">Đăng nhập</a></li>' +
          '<li><a href="register.html">Đăng ký thành viên</a></li>' +
          '<li><a href="admin.html">Khu vực quản trị</a></li></ul></div>' +
      '</div><p class="copyright mb-0">© 2026 ABC Tours - Bài tập lớn môn Hệ thống và Công nghệ Web (IUH). Website mang tính học tập, không có giao dịch thật.</p></div>'
    );
  }

  function mountLayout() {
    var active = $("body").data("page");
    $("#site-header").html(navbarHtml(active));
    $("#site-footer").addClass("abc-footer").html(footerHtml());
    $(document).on("click", "#btn-logout", logout);
    $(document).on("submit", "#quick-login-form", function (e) {
      e.preventDefault();
      var idVal = $("#ql-identifier").val();
      var pwVal = $("#ql-password").val();
      var res = login(idVal, pwVal);
      if (res.ok) {
        window.location.reload();
      } else {
        $("#ql-error").text(res.message).removeClass("d-none");
      }
    });
  }

  $(function () { seedData(); mountLayout(); });

  return {
    KEYS: KEYS, read: read, write: write,
    getTours: getTours, getTourById: getTourById, formatVND: formatVND,
    getUsers: getUsers, saveUser: saveUser, getCurrentUser: getCurrentUser, login: login, logout: logout,
    getOrders: getOrders, getOrderByCode: getOrderByCode, saveOrder: saveOrder,
    updateOrderStatus: updateOrderStatus, calcRefund: calcRefund
  };
})(jQuery);
