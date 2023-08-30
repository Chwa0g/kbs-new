"use strict";

(function () {
  var appLinkClick = function appLinkClick() {
    var $btn = document.querySelector(".application-download-links .open-btn");
    var $appLinks = document.querySelector(".application-download-links .app-links");
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $appLinks.classList.toggle("on");
    });
  };

  // 어사이드 스크롤
  var asideScroll = function asideScroll() {
    var lastScrollTop = 0;
    $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        $(".top-btn").hide();
        $("aside").hide();
      } else {
        $(".top-btn").show();
        $("aside").show();
      }
      lastScrollTop = st;
    });
  };

  // 어사이드 공유
  var asideShare = function asideShare() {
    var $btn = document.querySelector(".aside-btn.share-btn");
    var $closeBtn = document.querySelector(".popup.share-menu .close-btn");
    var $popup = document.querySelector(".popup.share-menu");
    var $dim = document.querySelector(".dim");
    $btn.addEventListener("click", function () {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
    });
    $closeBtn.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
    $dim.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  // 어사이드 텍스트 메뉴
  var asideTxt = function asideTxt() {
    var $offBtn = document.querySelector(".aside-btn.txt-btn");
    var $onBtn = document.querySelector(".aside-btns .btn-menu-list .txt-btn");
    var $btnMenu = document.querySelector(".aside-btns-list .btn-menu");
    $offBtn.addEventListener("click", function () {
      $offBtn.classList.add("off");
      $btnMenu.classList.add("on");
    });
    $onBtn.addEventListener("click", function () {
      $btnMenu.classList.remove("on");
      $offBtn.classList.remove("off");
    });

    // 텍스트 메뉴 클릭
    $(".common-btn.large-btn").off("click").on("click", function () {
      $("body *").each(function () {
        $(this).css("font-size", "");
        var size = Number($(this).css("font-size").replace("px", "")) + 1;
        if (size > 1) {
          $(this).css("font-size", size + "px");
        }
      });
      $btnMenu.classList.remove("on");
      $offBtn.classList.remove("off");
    });
    $(".common-btn.normal-btn").off("click").on("click", function () {
      $("body *").each(function () {
        $(this).css("font-size", "");
      });
      $btnMenu.classList.remove("on");
      $offBtn.classList.remove("off");
    });
    $(".common-btn.small-btn").off("click").on("click", function () {
      $("body *").each(function () {
        $(this).css("font-size", "");
        var size = Number($(this).css("font-size").replace("px", "")) - 1;
        $(this).css("font-size", size + "px");
      });
      $btnMenu.classList.remove("on");
      $offBtn.classList.remove("off");
    });
  };

  // 탑 버튼
  var topBtn = function topBtn() {
    var $btn = document.querySelector(".top-btn");
    $btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  };

  // 다크모드
  var asideDark = function asideDark() {
    var $btn = document.querySelector(".aside-btn.dark-btn");
    var $body = document.querySelector("body");
    $btn.addEventListener("click", function () {
      $body.classList.toggle("dark");
    });
  };
  var init = function init() {
    appLinkClick();
    asideScroll();
    asideShare();
    asideTxt();
    topBtn();
    asideDark();
  };
  window.addEventListener("load", function () {
    init();
  });
})();