"use strict";

(function () {
  // 셀렉트 메뉴 클릭 event
  var selectClick = function selectClick() {
    var $btns = document.querySelectorAll(".footer-select-btn");
    var $dim = document.querySelector(".dim");
    var $onBtn = void 0;
    var $onLink = void 0;
    $btns.forEach(function ($btn) {
      $btn.addEventListener("click", function () {
        var $commonSelectLinks = $btn.nextElementSibling;
        $onBtn = $btn;
        $onLink = $commonSelectLinks;
        $btn.classList.toggle("on");
        $commonSelectLinks.classList.toggle("on");
        $dim.classList.toggle("transparent");
        $dim.classList.toggle("on");
      });
    });
    $dim.addEventListener("click", function () {
      $dim.classList.remove("on");
      $dim.classList.remove("on");
      if ($onBtn && $onLink) {
        $onBtn.classList.remove("on");
        $onLink.classList.remove("on");
      }
    });
  };

  // 사이드 메뉴 공유 메뉴 클릭 event
  var asideShareClick = function asideShareClick() {
    var $btn = document.querySelector(".aside-btns-list .share-btn");
    var $closeBtn = document.querySelector(".share-menu .close-btn");
    var $dim = document.querySelector(".dim");
    var $menu = document.querySelector(".share-menu");
    var $nav = document.querySelector(".header-nav-wrapper");
    $btn.addEventListener("click", function () {
      $dim.classList.toggle("on");
      $menu.classList.toggle("on");
      $nav.classList.toggle("index-change");
    });
    $closeBtn.addEventListener("click", function () {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });
    $dim.addEventListener("click", function () {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });
  };

  // 사이드 메뉴 텍스트 메뉴 클릭 event
  var asideTxtClick = function asideTxtClick() {
    var $btn = document.querySelector(".aside-btns-list .txt-btn");
    var $txtIcon = document.querySelector(".aside-btns-list .txt-btn .txt-icon");
    var $btnTxt = document.querySelector(".aside-btns-list .txt-btn .common-btn-txt");
    var $menu = document.querySelector(".aside-btns-list .txt-menu");

    // 텍스트 메뉴 펼침
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
    });

    // 텍스트 메뉴 클릭
    $(".txt-menu-btn.large").off("click").on("click", function () {
      if (!$txtIcon.classList.contains("large")) {
        $("body *").each(function () {
          $(this).css("font-size", "");
          var size = Number($(this).css("font-size").replace("px", "")) + 1;
          if (size > 1) {
            $(this).css("font-size", size + "px");
          }
        });
        $txtIcon.className = "txt-icon large";
        $btnTxt.innerText = "확대";
      }
      $menu.classList.remove("on");
    });
    $(".txt-menu-btn.normal").off("click").on("click", function () {
      if (!$txtIcon.classList.contains("normal")) {
        $("body *").each(function () {
          $(this).css("font-size", "");
        });
        $txtIcon.className = "txt-icon normal";
        $btnTxt.innerText = "기본";
      }
      $menu.classList.remove("on");
    });
    $(".txt-menu-btn.small").off("click").on("click", function () {
      if (!$txtIcon.classList.contains("small")) {
        $("body *").each(function () {
          $(this).css("font-size", "");
          var size = Number($(this).css("font-size").replace("px", "")) - 1;
          $(this).css("font-size", size + "px");
        });
        $txtIcon.className = "txt-icon small";
        $btnTxt.innerText = "축소";
      }
      $menu.classList.remove("on");
    });
  };

  // 사이드 메뉴 다크 클릭 event
  var asideDarkClick = function asideDarkClick() {
    var $btn = document.querySelector(".dark-btn");
    var $btnTxt = document.querySelector(".dark-btn .common-btn-txt");
    var $body = document.querySelector("body");
    $btn.addEventListener("click", function () {
      $body.classList.toggle("dark");
      if ($body.classList.contains("dark")) {
        $btnTxt.innerHTML = "\uB77C\uC774\uD2B8<br />\uBAA8\uB4DC";
      } else {
        $btnTxt.innerHTML = "\uB2E4\uD06C<br />\uBAA8\uB4DC";
      }
    });
  };

  // 사이드 메뉴 위치 세팅
  var setAsidePosition = function setAsidePosition() {
    var $aside = document.querySelector(".aside");
    var $contents = document.querySelector("#contents");
    var $headerNav = document.querySelector(".header-nav");
    var top = $contents.getBoundingClientRect().top;
    var left = $headerNav.getBoundingClientRect().left;
    $aside.style.top = top + "px";
    $aside.style.left = left - 98 + "px";
  };

  // 사이드 메뉴 댓글 클릭
  var asideCommentClick = function asideCommentClick() {
    var $btn = document.querySelector(".aside-btns-list .comment-btn");
    if ($btn) {
      var $commentArea = document.querySelector(".comment-area");
      $btn.addEventListener("click", function () {
        $commentArea.scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  };

  // 사이드 메뉴 좋아요 클릭
  var asideLikeClick = function asideLikeClick() {
    var $btn = document.querySelector(".aside-btns-list .like-btn");
    if ($btn) {
      var $openMenu = document.querySelector(".like-menu.open-menu");
      $btn.addEventListener("click", function () {
        $btn.classList.toggle("on");
        $openMenu.classList.toggle("on");
      });
    }
  };

  // 사이드 오픈 메뉴 클릭
  var asideOpenMenuClick = function asideOpenMenuClick() {
    var $btns = document.querySelectorAll(".open-menu-btn");
    $btns.forEach(function ($btn) {
      var $openMenu = $btn.parentElement.parentElement;
      var $asideBtn = $openMenu.previousElementSibling;
      $btn.addEventListener("click", function () {
        $openMenu.classList.remove("on");
        $asideBtn.classList.remove("on");
      });
    });
  };

  // 스크롤시 어사이드 고정 event
  var asideFixed = function asideFixed() {
    var $aside = $(".aside");
    var $contents = $("#contents");
    var point = $contents.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        $aside.addClass("fixed");
      } else if ($(window).scrollTop() <= point) {
        $aside.removeClass("fixed");
      }
    });
  };

  // 탑버튼 클릭
  var topBtnClick = function topBtnClick() {
    var $btn = document.querySelector("#footer .top-btn");
    $btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  };
  var init = function init() {
    selectClick();
    asideShareClick();
    asideTxtClick();
    asideDarkClick();
    setAsidePosition();
    asideFixed();
    asideCommentClick();
    asideLikeClick();
    asideOpenMenuClick();
    topBtnClick();
  };
  window.addEventListener("load", function () {
    init();
  });
  window.addEventListener("resize", function () {
    setAsidePosition();
  });
})();