"use strict";

(function () {
  // 슬라이드 함수
  var slideFn = function slideFn(view, slide, pagination, nextBtn, prevBtn) {
    var retrunValue = new Swiper(slide, {
      slidesPerView: view,
      spaceBetween: 24,
      slidesPerGroup: view,
      loopFillGroupWithBlank: true,
      loop: true,
      pagination: {
        el: pagination,
        type: "fraction"
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
    return retrunValue;
  };

  // 내비게이션 없는 슬라이드 함수
  var noNaviSlideFn = function noNaviSlideFn(view, slide, pagination) {
    var retrunValue = new Swiper(slide, {
      slidesPerView: view,
      spaceBetween: 24,
      slidesPerGroup: view,
      loopFillGroupWithBlank: true,
      loop: true,
      pagination: {
        el: pagination,
        type: "fraction"
      }
    });
    return retrunValue;
  };

  // 시리즈 슬라이드
  var seriesSlide = function seriesSlide() {
    if ($(".view-series-slide .swiper-slide").length > 4) {
      var newsNine = slideFn(4, ".view-series-slide", ".view-series-pagination", ".view-series-next", ".view-series-previous");
    } else if ($(".view-series-swiper .swiper-slide").length <= 4) {
      var newsNine = noNaviSlideFn(4, ".view-series-slide", ".view-series-pagination");
    }
  };

  // 좋아요 클릭
  var likeClick = function likeClick() {
    var $btns = document.querySelectorAll(".positive-btn");
    $btns.forEach(function ($btn) {
      $btn.addEventListener("click", function () {
        $btn.classList.toggle("on");
      });
    });
  };

  // 요약 팝업
  var summaryPopup = function summaryPopup() {
    var $btn = document.querySelector(".summary-btn");
    var $closeBtn = document.querySelector(".summary-popup .close-btn");
    var $popup = document.querySelector(".summary-popup");
    var $dim = document.querySelector(".dim");
    var $nav = document.querySelector(".header-nav-wrapper");
    $btn.addEventListener("click", function () {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
      $nav.classList.toggle("index-change");
    });
    $closeBtn.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $nav.classList.remove("index-change");
    });
    $dim.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $nav.classList.remove("index-change");
    });
  };
  var ttsClick = function ttsClick() {
    var $btn = document.querySelector(".tts-btn");
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
    });
  };

  // 요약 팝업
  // const ttsPopup = () => {
  //   const $btn = document.querySelector(".tts-btn");
  //   const $closeBtn = document.querySelector(".tts-popup .close-btn");
  //   const $popup = document.querySelector(".tts-popup");
  //   const $dim = document.querySelector(".dim");
  //   const $nav = document.querySelector(".header-nav-wrapper");

  //   $btn.addEventListener("click", () => {
  //     $btn.classList.toggle("on");
  //     $popup.classList.toggle("on");
  //     $dim.classList.toggle("on");
  //     $nav.classList.toggle("index-change");
  //   });

  //   $closeBtn.addEventListener("click", () => {
  //     $btn.classList.remove("on");
  //     $popup.classList.remove("on");
  //     $dim.classList.remove("on");
  //     $nav.classList.remove("index-change");
  //   });

  //   $dim.addEventListener("click", () => {
  //     $btn.classList.remove("on");
  //     $popup.classList.remove("on");
  //     $dim.classList.remove("on");
  //     $nav.classList.remove("index-change");
  //   });
  // };

  var progressBar = function progressBar() {
    var $progressBar = document.querySelector(".progress-bar");
    var $article = document.querySelector(".view-article");
    var $headLine = document.querySelector(".view-headline");
    var top = window.scrollY + $headLine.getBoundingClientRect().top;
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
      $progressBar.style.width = progressWidth + "%";
    });
  };

  // 스크롤시 네비게이션 메뉴 기사제목 나오기
  var navArticleTitle = function navArticleTitle() {
    var menuBar = $(".header-nav-wrapper");
    var point = menuBar.offset().top;
    var navLinks = $(".nav-menu .nav-links");
    var hashTagLinks = $(".header-nav .hashtag-links");
    var articleTitle = $(".nav-menu .article-title");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        navLinks.addClass("off");
        hashTagLinks.addClass("off");
        articleTitle.addClass("on");
      } else {
        navLinks.removeClass("off");
        hashTagLinks.removeClass("off");
        articleTitle.removeClass("on");
      }
    });
  };
  var init = function init() {
    likeClick();
    seriesSlide();
    summaryPopup();
    navArticleTitle();
    ttsClick();
  };
  window.addEventListener("load", function () {
    init();
  });
  window.addEventListener("scroll", function () {
    progressBar();
  });
})();