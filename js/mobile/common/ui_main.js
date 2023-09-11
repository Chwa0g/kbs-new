"use strict";

(function () {
  var swiperFn = function swiperFn(slide, indicator) {
    var rtValue = new Swiper(slide, {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      pagination: {
        el: indicator
      }
    });
    return rtValue;
  };
  var recommendNewsSwiper = function recommendNewsSwiper() {
    var recommendNews = swiperFn(".recommend-news-swiper", ".recommend-news-indicator");
  };
  var newsNineSwiper = function newsNineSwiper() {
    var newsNine = swiperFn(".news-9-swiper", ".news-9-indicator");
  };
  var kShortsSwiper = function kShortsSwiper() {
    var kShorts = swiperFn(".k-shorts-swiper", ".k-shorts-indicator");
  };
  var youtubeLiveSwiper = function youtubeLiveSwiper() {
    var youtubeLive = swiperFn(".youtube-live-swiper", ".youtube-live-indicator");
  };
  var tabClick = function tabClick() {
    $(".tab-btn").off("click").on("click", function () {
      var id = $(this).closest(".tab-btns").data("tab-contents");
      var index = $(this).closest(".tab-btns-list").index();
      $(this).closest(".tab-btns-list").siblings().removeClass("on");
      $(this).closest(".tab-btns-list").addClass("on");
      $("#" + id).find(".tab-contents-list").hide();
      $("#" + id).find(".tab-contents-list").eq(index).show();
    });
  };
  var init = function init() {
    recommendNewsSwiper();
    newsNineSwiper();
    kShortsSwiper();
    youtubeLiveSwiper();
    tabClick();
  };
  window.addEventListener("load", function () {
    init();
  });
})();