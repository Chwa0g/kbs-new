(() => {
  // 셀렉트 메뉴 클릭 event
  const selectClick = () => {
    const $btns = document.querySelectorAll(".footer-select-btn");
    const $dim = document.querySelector(".dim");
    let $onBtn;
    let $onLink;

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        const $commonSelectLinks = $btn.nextElementSibling;
        $onBtn = $btn;
        $onLink = $commonSelectLinks;
        $btn.classList.toggle("on");
        $commonSelectLinks.classList.toggle("on");
        $dim.classList.toggle("transparent");
        $dim.classList.toggle("on");
      });
    });

    $dim.addEventListener("click", () => {
      $dim.classList.remove("on");
      $dim.classList.remove("on");

      if ($onBtn && $onLink) {
        $onBtn.classList.remove("on");
        $onLink.classList.remove("on");
      }
    });
  };

  // 사이드 메뉴 공유 메뉴 클릭 event
  const asideShareClick = () => {
    const $btn = document.querySelector(".aside-btns-list .share-btn");
    const $closeBtn = document.querySelector(".share-menu .close-btn");
    const $dim = document.querySelector(".dim");
    const $menu = document.querySelector(".share-menu");
    const $nav = document.querySelector(".header-nav-wrapper");

    $btn.addEventListener("click", () => {
      $dim.classList.toggle("on");
      $menu.classList.toggle("on");
      $nav.classList.toggle("index-change");
    });

    $closeBtn.addEventListener("click", () => {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });

    $dim.addEventListener("click", () => {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });
  };

  // 사이드 메뉴 텍스트 메뉴 클릭 event
  const asideTxtClick = () => {
    const $btn = document.querySelector(".aside-btns-list .txt-btn");
    const $txtIcon = document.querySelector(
      ".aside-btns-list .txt-btn .txt-icon"
    );
    const $btnTxt = document.querySelector(
      ".aside-btns-list .txt-btn .common-btn-txt"
    );
    const $menu = document.querySelector(".aside-btns-list .txt-menu");

    // 텍스트 메뉴 펼침
    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
    });

    // 텍스트 메뉴 클릭
    $(".txt-menu-btn.large")
      .off("click")
      .on("click", function () {
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
    $(".txt-menu-btn.normal")
      .off("click")
      .on("click", function () {
        if (!$txtIcon.classList.contains("normal")) {
          $("body *").each(function () {
            $(this).css("font-size", "");
          });
          $txtIcon.className = "txt-icon normal";
          $btnTxt.innerText = "기본";
        }
        $menu.classList.remove("on");
      });
    $(".txt-menu-btn.small")
      .off("click")
      .on("click", function () {
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
  const asideDarkClick = () => {
    const $btn = document.querySelector(".dark-btn");
    const $btnTxt = document.querySelector(".dark-btn .common-btn-txt");
    const $body = document.querySelector("body");

    $btn.addEventListener("click", () => {
      $body.classList.toggle("dark");
      if ($body.classList.contains("dark")) {
        $btnTxt.innerHTML = `라이트<br />모드`;
      } else {
        $btnTxt.innerHTML = `다크<br />모드`;
      }
    });
  };

  // 사이드 메뉴 위치 세팅
  const setAsidePosition = () => {
    const $aside = document.querySelector(".aside");
    const $contents = document.querySelector("#contents");
    const $headerNav = document.querySelector(".header-nav");
    const top = $contents.getBoundingClientRect().top;
    const left = $headerNav.getBoundingClientRect().left;

    $aside.style.top = `${top}px`;
    $aside.style.left = `${left - 98}px`;
  };

  // 사이드 메뉴 댓글 클릭
  const asideCommentClick = () => {
    const $btn = document.querySelector(".aside-btns-list .comment-btn");

    if ($btn) {
      const $commentArea = document.querySelector(".comment-area");

      $btn.addEventListener("click", () => {
        $commentArea.scrollIntoView({ behavior: "smooth" });
      });
    }
  };

  // 사이드 메뉴 좋아요 클릭
  const asideLikeClick = () => {
    const $btn = document.querySelector(".aside-btns-list .like-btn");

    if ($btn) {
      const $openMenu = document.querySelector(".like-menu.open-menu");

      $btn.addEventListener("click", () => {
        $btn.classList.toggle("on");
        $openMenu.classList.toggle("on");
      });
    }
  };

  // 사이드 오픈 메뉴 클릭
  const asideOpenMenuClick = () => {
    const $btns = document.querySelectorAll(".open-menu-btn");

    $btns.forEach(($btn) => {
      const $openMenu = $btn.parentElement.parentElement;
      const $asideBtn = $openMenu.previousElementSibling;
      $btn.addEventListener("click", () => {
        $openMenu.classList.remove("on");
        $asideBtn.classList.remove("on");
      });
    });
  };

  // 스크롤시 어사이드 고정 event
  const asideFixed = () => {
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
  const topBtnClick = () => {
    const $btn = document.querySelector("#footer .top-btn");

    $btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const init = () => {
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

  window.addEventListener("load", () => {
    init();
  });

  window.addEventListener("resize", () => {
    setAsidePosition();
  });
})();
