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
  var viewSeriesSwiper = function viewSeriesSwiper() {
    var recommendNews = swiperFn(".view-series-swiper", ".view-series-indicator");
  };
  var viewLikeClick = function viewLikeClick() {
    var $btns = document.querySelectorAll(".view-like .common-button");
    $btns.forEach(function ($btn) {
      $btn.addEventListener("click", function () {
        $btn.classList.toggle("on");
      });
    });
  };

  // 헤더고정
  var headerSticky = function headerSticky() {
    var $topMenu = $(".top-menu");
    var point = $topMenu.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        $(".progress-bar").addClass("sticky");
      } else {
        $topMenu.removeClass("sticky");
        $(".progress-bar").removeClass("sticky");
      }
    });
  };
  var progress = function progress() {
    var $status = document.querySelector(".progress-bar .status");
    var $headline = document.querySelector(".view-headline");
    var $article = document.querySelector(".view-article");
    var top = window.scrollY + $headline.getBoundingClientRect().top;
    var bottom = window.scrollY + $article.getBoundingClientRect().bottom;
    var totalScroll = bottom - top;
    var currentScroll = void 0;
    var progressWidth = void 0;
    window.addEventListener("scroll", function () {
      currentScroll = window.scrollY - top;
      progressWidth = currentScroll / totalScroll * 100;
      if (progressWidth < 0) {
        progressWidth = 0;
      }
      $status.style.width = progressWidth + "%";
    });
  };
  var ttsPopup = function ttsPopup() {
    var $btn = document.querySelector(".tts-btn");
    var $popup = document.querySelector(".tts-popup");
    var $dim = document.querySelector(".dim");
    var $checkBtn = document.querySelector(".tts-popup .check-btn");
    $btn.addEventListener("click", function () {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
      $btn.classList.toggle("on");
    });
    $checkBtn.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $btn.classList.remove("on");
    });
    $dim.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $btn.classList.remove("on");
    });
  };
  var summaryPopup = function summaryPopup() {
    var $btn = document.querySelector(".summary-btn");
    var $popup = document.querySelector(".summary-popup");
    var $dim = document.querySelector(".dim");
    var $closeBtn = document.querySelector(".summary-popup .close-btn");
    $btn.addEventListener("click", function () {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
    });
    $dim.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
    $closeBtn.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
  };
  var playerSettingPopup = function playerSettingPopup() {
    var $checkBtn = document.querySelector(".player-setting-popup .primary-btn");
    var $popup = document.querySelector(".player-setting-popup");
    var $dim = document.querySelector(".dim");
    $checkBtn.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
  };
  var init = function init() {
    viewSeriesSwiper();
    viewLikeClick();
    headerSticky();
    ttsPopup();
    summaryPopup();
    playerSettingPopup();
  };
  window.addEventListener("load", function () {
    init();
  });
  window.addEventListener("scroll", function () {
    progress();
  });
})();