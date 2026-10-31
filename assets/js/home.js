/* =====================================================
   LOGIC TRANG CHỦ (index.html) - Đăng
   - Hiển thị tour nổi bật từ localStorage
   - Form tìm kiếm: lưu tiêu chí vào localStorage rồi chuyển sang tours.html
   ===================================================== */
(function ($) {
  "use strict";

  function escapeHtml(s) { return $("<div>").text(s).html(); }

  function cardHtml(t) {
    var oldPrice = t.oldPrice ? "<del>" + ABC.formatVND(t.oldPrice) + "</del>" : "";
    var sale = "";
    if (t.oldPrice) {
      sale = '<span class="badge-sale">-' + Math.round((1 - t.price / t.oldPrice) * 100) + "%</span>";
    }
    return (
      '<div class="col-3"><article class="tour-card">' +
        '<a class="thumb" href="tour-detail.html?id=' + t.id + '" tabindex="-1" aria-hidden="true">' +
          '<img src="' + t.image + '" alt="" loading="lazy">' + sale + "</a>" +
        '<div class="body">' +
          '<h3><a class="text-decoration-none text-reset stretched-link" href="tour-detail.html?id=' + t.id + '">' + escapeHtml(t.name) + "</a></h3>" +
          '<div class="meta">' + t.days + " ngày " + t.nights + " đêm</div>" +
          '<div class="rating"><span class="star" aria-hidden="true">★</span> ' + t.rating + " <span class=\"text-muted\">(" + t.reviews + " đánh giá)</span></div>" +
          '<div class="price">' + ABC.formatVND(t.price) + oldPrice + "</div>" +
        "</div></article></div>"
    );
  }

  function renderFeatured() {
    var featured = ABC.getTours().filter(function (t) { return t.featured; }).slice(0, 4);
    var $box = $("#featured-tours");
    if (!featured.length) {
      $("#featured-empty").text("Hiện chưa có tour nổi bật.");
      return;
    }
    $box.html(featured.map(cardHtml).join(""));
  }

  function initSearch() {
    var today = new Date();
    var iso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    $("#s-date").attr("min", iso);

    $("#search-form").on("submit", function (e) {
      e.preventDefault();
      var criteria = {
        dest: $.trim($("#s-dest").val()),
        date: $("#s-date").val(),
        people: Number($("#s-people").val())
      };
      ABC.write(ABC.KEYS.search, criteria);
      var q = criteria.dest ? "?q=" + encodeURIComponent(criteria.dest) : "";
      window.location.href = "tours.html" + q;
    });
  }

  $(function () { renderFeatured(); initSearch(); });
})(jQuery);
