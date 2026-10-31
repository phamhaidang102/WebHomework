/* =====================================================
   LOGIC DÙNG CHUNG - ABC TOURS
   Phụ thuộc: jQuery, assets/js/data.js (nạp TRƯỚC file này)
   Cung cấp:
     ABC.getTours(), ABC.getTourById(id), ABC.formatVND(n)
     ABC.getCurrentUser(), ABC.logout()
   Tự động dựng Navbar vào <header id="site-header"></header>
   và Footer vào <footer id="site-footer"></footer>
   ===================================================== */
var ABC = (function ($) {
  "use strict";

  var KEYS = { tours: "abc_tours", user: "currentUser", search: "abc_search" };

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

  /* ----- Dữ liệu tour ----- */
  function seedTours() {
    // Nạp lại dữ liệu mẫu khi chưa có hoặc khi ABC_DATA_VERSION (data.js) thay đổi
    if (typeof ABC_SAMPLE_TOURS === "undefined") { return; }
    var ver = String(typeof ABC_DATA_VERSION !== "undefined" ? ABC_DATA_VERSION : 1);
    if (!read(KEYS.tours, null) || localStorage.getItem("abc_tours_v") !== ver) {
      write(KEYS.tours, ABC_SAMPLE_TOURS);
      localStorage.setItem("abc_tours_v", ver);
    }
  }
  function getTours() { return read(KEYS.tours, []); }
  function getTourById(id) {
    return getTours().filter(function (t) { return t.id === id; })[0] || null;
  }
  function formatVND(n) {
    return Number(n).toLocaleString("vi-VN") + "đ";
  }

  /* ----- Phiên đăng nhập ----- */
  function getCurrentUser() { return read(KEYS.user, null); }
  function logout() { localStorage.removeItem(KEYS.user); window.location.href = "index.html"; }

  /* ----- Navbar & Footer ----- */
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
      : '<li class="nav-item"><a class="' + cls("login") + '" href="login.html"' + cur("login") + ">Đăng nhập</a></li>" +
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
        "</div></div></nav>"
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
  }

  $(function () { seedTours(); mountLayout(); });

  return {
    KEYS: KEYS, read: read, write: write,
    getTours: getTours, getTourById: getTourById, formatVND: formatVND,
    getCurrentUser: getCurrentUser, logout: logout
  };
})(jQuery);
