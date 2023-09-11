"use strict";

(function () {
  // 속보 롤링 클릭 event
  var breakingNewsClick = function breakingNewsClick() {
    var $btn = document.querySelector(".breaking-news.rolling .arrow-btn");
    var $history = document.querySelector(".breaking-news-history-wrapper");
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $history.classList.toggle("on");
      setAsidePos();
    });
  };

  // 수직 롤링 함수
  var verticalRollingFn = function verticalRollingFn(swiper) {
    var retrunValue = new Swiper(swiper, {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
    return retrunValue;
  };

  // 날씨 롤링 event
  var weatherRolling = function weatherRolling() {
    var weatherSwiper = verticalRollingFn(".weather");
  };

  // 재난 알림 롤링 event
  var disasterSwiper;
  var disasterRolling = function disasterRolling() {
    disasterSwiper = verticalRollingFn(".disaster-rolling-swiper");
  };

  // 속보 롤링 event
  var breakingNewsRolling = function breakingNewsRolling() {
    var breakingNewsSwiper = verticalRollingFn(".breaking-news-swiper");
  };
  // 재난 알림 펼침 클릭 event
  var disasterClick = function disasterClick() {
    $(".disaster-rolling .arrow-btn").off("click").on("click", function () {
      if ($(this).hasClass("on")) {
        disasterRolling();
        $(".disaster-rolling").removeClass("open");
        $(this).removeClass("on");
        $(".rolling-message").each(function (index, el) {
          $(el).removeClass("open");
        });
        $(".rolling-message .caution").each(function (index, el) {
          $(el).removeClass("off");
        });
      } else {
        disasterSwiper.destroy();
        $(".disaster-rolling-list").removeAttr("style");
        $(".disaster-rolling").addClass("open");
        $(this).addClass("on");
        $(".rolling-message").each(function (index, el) {
          $(el).addClass("open");
        });
        $(".rolling-message .caution").each(function (index, el) {
          $(el).addClass("off");
        });
        if ($(".disaster-rolling .swiper-wrapper").height() > 414) {
          $(".disaster-rolling-swiper").addClass("overflow-y");
        }
      }
      setAsidePos();
    });
  };

  // KBS WORLD 클릭 event
  var worldSelect = function worldSelect() {
    var $menu = document.querySelector("#header .foreign-site-links");
    var $btn = document.querySelector("#header .kbs-world-select-btn");
    var $dim = document.querySelector(".dim");
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
      $dim.classList.toggle("transparent");
      $dim.classList.toggle("on");
    });
  };

  // 햄버거 버튼 클릭 event
  var hamburgerClick = function hamburgerClick() {
    var $btn = document.querySelector(".hamburger-btn");
    var $navMenu = document.querySelector(".header-nav");
    var $fullMenu = document.querySelector(".full-menu-wrapper");
    var $navLinks = document.querySelectorAll(".nav-link");
    var $commonMenues = document.querySelectorAll(".common-menu");
    var $dim = document.querySelector(".dim");
    $btn.addEventListener("click", function () {
      if ($btn.classList.contains("on")) {
        $btn.classList.remove("on");
        $navMenu.classList.remove("on");
        $fullMenu.classList.remove("on");
        $dim.classList.remove("on");
        $navLinks.forEach(function ($navLink) {
          $navLink.classList.remove("on");
        });
        $commonMenues.forEach(function ($commonMenu) {
          $commonMenu.classList.remove("on");
        });
      } else if (!$btn.classList.contains("on")) {
        $btn.classList.add("on");
        $navMenu.classList.add("on");
        $fullMenu.classList.add("on");
        $dim.classList.add("on");
      }
    });
  };

  // 네비게이션 메뉴 클릭 event
  var navMenuClick = function navMenuClick() {
    var menuNames = ["분야별", "TV 뉴스", "프리미엄K", "시사", "지역"];
    var $navLinks = document.querySelectorAll(".nav-link");
    var $fullMenu = document.querySelector(".full-menu-wrapper");
    var $dim = document.querySelector(".dim");
    var $fullMenuNames = document.querySelectorAll(".full-menu-heading");
    var $hamburgerBtn = document.querySelector(".hamburger-btn");
    var $onNavLink = void 0;
    $navLinks.forEach(function ($navLink) {
      $navLink.addEventListener("click", function () {
        var menuName = $navLink.innerText;
        if (menuNames.includes(menuName)) {
          if ($onNavLink) {
            $onNavLink.classList.remove("on");
          }
          if (!$hamburgerBtn.classList.contains("on")) {
            $hamburgerBtn.classList.add("on");
          }
          $navLink.classList.add("on");
          $onNavLink = $navLink;
          $fullMenuNames.forEach(function ($fullMenuName) {
            var fullMenuName = $fullMenuName.innerText;
            var $commonMenu = $fullMenuName.parentElement.parentElement;
            $commonMenu.classList.remove("on");
            if (fullMenuName === menuName) {
              $commonMenu.classList.add("on");
            }
          });
        }
        if (!$fullMenu.classList.contains("on")) {
          $fullMenu.classList.add("on");
          $dim.classList.add("on");
        }
      });
    });
  };

  // 서치 버튼 클릭 event
  var searchClick = function searchClick() {
    var $btn = document.querySelector(".hamburger-search-btns .search-btn");
    var $closeBtn = document.querySelector(".search .close-btn");
    var $hamburgerBtn = document.querySelector(".hamburger-btn");
    var $fullMenu = document.querySelector(".full-menu-wrapper");
    var $navLinks = document.querySelectorAll(".nav-link");
    var $commonMenues = document.querySelectorAll(".full-menu .common-menu");
    var $searchMenu = document.querySelector(".search-most-view");
    var $dim = document.querySelector(".dim");
    $btn.addEventListener("click", function () {
      if ($fullMenu.classList.contains("on")) {
        $fullMenu.classList.remove("on");
      }
      if ($hamburgerBtn.classList.contains("on")) {
        $hamburgerBtn.classList.remove("on");
      }
      $navLinks.forEach(function ($navLink) {
        $navLink.classList.remove("on");
      });
      $commonMenues.forEach(function ($commonMenu) {
        $commonMenu.classList.remove("on");
      });
      $searchMenu.classList.add("on");
      $dim.classList.add("on");
    });
    $closeBtn.addEventListener("click", function () {
      $searchMenu.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  // 스크롤시 네비게이션 메뉴 고정 event
  var navFixed = function navFixed() {
    var menuBar = $(".header-nav-wrapper");
    var navLogo = $(".nav-menu .nav-logo");
    var point = menuBar.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        menuBar.addClass("fixed");
        navLogo.addClass("on");
      } else {
        menuBar.removeClass("fixed");
        navLogo.removeClass("on");
      }
    });
  };

  // 딤 화면 클릭 event
  var dimClick = function dimClick() {
    var $dim = document.querySelector(".dim");
    var $searchMenu = document.querySelector(".search-most-view");
    var $nav = document.querySelector(".header-nav");
    var $hamburgerBtn = document.querySelector(".hamburger-btn");
    var $fullMenu = document.querySelector(".full-menu-wrapper");
    var $navLinks = document.querySelectorAll(".nav-link");
    var $commonMenues = document.querySelectorAll(".common-menu");
    var $worldSelectBtn = document.querySelector(".kbs-world-select-btn");
    var $foreignSiteMenu = document.querySelector(".foreign-site-links");
    $dim.addEventListener("click", function () {
      $dim.classList.remove("on");
      $searchMenu.classList.remove("on");
      $nav.classList.remove("on");
      $hamburgerBtn.classList.remove("on");
      $fullMenu.classList.remove("on");
      $navLinks.forEach(function ($navLink) {
        $navLink.classList.remove("on");
      });
      $commonMenues.forEach(function ($commonMenu) {
        $commonMenu.classList.remove("on");
      });
      $worldSelectBtn.classList.remove("on");
      $foreignSiteMenu.classList.remove("on");
      if ($dim.classList.contains("transparent")) {
        $dim.classList.remove("transparent");
      }
    });
  };

  // 추천 검색어
  var recommendSearch = function recommendSearch() {
    var $input = document.querySelector(".header-nav-wrapper .search-box .search-box-input");
    var $recommend = document.querySelector(".recommend-search");
    var $wrapper = document.querySelector(".search-most-view");
    var $dim = document.querySelector(".dim");
    $input.addEventListener("focus", function () {
      $recommend.classList.add("on");
      $input.classList.add("focus");
    });
    $wrapper.addEventListener("click", function (e) {
      var target = e.target;
      if (target !== $input) {
        $recommend.classList.remove("on");
        $input.classList.remove("focus");
      }
    });
    $dim.addEventListener("click", function () {
      $recommend.classList.remove("on");
      $input.classList.remove("focus");
    });
  };

  // 어사이드 포지션 설정
  var setAsidePos = function setAsidePos() {
    var $aside = document.querySelector("#footer .aside");
    var $iframe = document.querySelector("#contents .iframe-area");
    var $headLine = document.querySelector("#contents .box.head-line");
    if ($headLine) {
      if ($iframe) {
        var top = window.scrollY + $iframe.getBoundingClientRect().top;
        $aside.style.top = top + "px";
      } else if (!$iframe) {
        var _top = window.scrollY + $headLine.getBoundingClientRect().top;
        $aside.style.top = _top + "px";
      }
    }
  };

  // 초기 함수
  var init = function init() {
    breakingNewsClick();
    weatherRolling();
    disasterRolling();
    worldSelect();
    hamburgerClick();
    navMenuClick();
    navFixed();
    searchClick();
    dimClick();
    disasterClick();
    breakingNewsRolling();
    recommendSearch();
  };
  window.addEventListener("load", function () {
    init();
  });
})();