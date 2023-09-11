(() => {
  // 노치수정완료
  // 수직 롤링 함수
  const verticalRollingFn = (swiper) => {
    const retrunValue = new Swiper(swiper, {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    return retrunValue;
  };

  // 속보 롤링 event
  const breakingNewsRolling = () => {
    var breakingNewsSwiper = verticalRollingFn(".breaking-news-swiper");
  };

  // 속보 클릭
  const breakingNewsClick = () => {
    const $btn = document.querySelector(".breaking-news.rolling .arrow-btn");
    const $history = document.querySelector(".breaking-news-history-wrapper");

    if ($btn) {
      $btn.addEventListener("click", () => {
        $btn.classList.toggle("on");
        $history.classList.toggle("on");
      });
    }
  };

  // 재난 알림 롤링 event
  var disasterSwiper;
  const disasterRolling = () => {
    disasterSwiper = verticalRollingFn(".disaster-rolling-swiper");
  };
  // 재난 알림 펼침 클릭 event
  const disasterClick = () => {
    $(".disaster-rolling-message .arrow-btn")
      .off("click")
      .on("click", function () {
        if ($(this).hasClass("on")) {
          disasterRolling();
          $(".disaster-rolling-message").removeClass("open");
          $(this).removeClass("on");
          $(".rolling-message").each(function (index, el) {
            $(el).removeClass("open");
          });
        } else {
          disasterSwiper.destroy();
          $(".disaster-rolling-list").removeAttr("style");
          $(".disaster-rolling-message").addClass("open");
          $(this).addClass("on");
          $(".rolling-message").each(function (index, el) {
            $(el).addClass("open");
          });
        }
      });
  };

  // 헤더고정
  const headerSticky = () => {
    var $topMenu = $(".top-menu");
    var point = $topMenu.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        $topMenu.addClass("sticky");
        $(".top-quick-menu-wrapper").addClass("sticky");
      } else {
        $topMenu.removeClass("sticky");
        $(".top-quick-menu-wrapper").removeClass("sticky");
      }
    });
  };

  // 서치메뉴 On, Off
  const searchMenuOnOff = () => {
    const $btn = document.querySelector(".search-hamburger .search-btn");
    const $searchMenu = document.querySelector("#header .search-menu");
    const $closeBtn = document.querySelector(
      ".search-input-keywords .close-btn"
    );
    const $body = document.querySelector("body");

    $btn.addEventListener("click", () => {
      $searchMenu.classList.add("on");
      $body.classList.add("hidden");
    });

    $closeBtn.addEventListener("click", () => {
      $searchMenu.classList.remove("on");
      $body.classList.remove("hidden");
    });
  };

  // 서치 인풋 포커스
  const searchFocus = () => {
    const $searchMenu = document.querySelector("#header .search-menu");
    const $input = document.querySelector(".search-box .search-input");
    const $recommend = document.querySelector(".search-box .recommend-search");
    const $recommendBtn = document.querySelector(
      ".recommend-search-list .recommend-word"
    );

    $input.addEventListener("focus", () => {
      $input.classList.add("on");
      $recommend.classList.add("on");
    });

    $searchMenu.addEventListener("click", (e) => {
      const target = e.target;

      if (target !== $input && target !== $recommendBtn) {
        $input.classList.remove("on");
        $recommend.classList.remove("on");
      }
    });
  };

  // 햄버거메뉴 On, Off
  const hamburgerMenuOnOff = () => {
    const $btn = document.querySelector(".search-hamburger .hamburger-btn");
    const $hamburgerMenu = document.querySelector("#header .hamburger-menu");
    const $closeBtn = document.querySelector(
      ".ham-top-menu .setting-close .close-btn"
    );
    const $body = document.querySelector("body");

    $btn.addEventListener("click", () => {
      $hamburgerMenu.classList.add("on");
      $body.classList.add("hidden");
    });

    $closeBtn.addEventListener("click", () => {
      $hamburgerMenu.classList.remove("on");
      $body.classList.remove("hidden");
    });
  };

  // 햄버거풀메뉴
  const fullMenu = () => {
    const $btns = document.querySelectorAll(
      ".hamburger-menu .full-menu .full-menu-list .common-btn"
    );

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        const $menu = $btn.nextElementSibling;
        $btn.classList.toggle("on");
        $menu.classList.toggle("on");
      });
    });
  };

  // 다크모드
  const darkMode = () => {
    const $btn = document.querySelector(".login-signup .common-btn.dark-mode");
    const $txt = document.querySelector(
      ".login-signup .common-btn.dark-mode .txt"
    );
    const $body = document.querySelector("body");

    $btn.addEventListener("click", () => {
      $body.classList.toggle("dark");

      if ($body.classList.contains("dark")) {
        $txt.innerText = "라이트모드";
      } else {
        $txt.innerText = "다크모드";
      }
    });
  };

  const premiumkMenu = () => {
    const $btn = document.querySelector("#header .premiumk-button");
    const $menu = document.querySelector("#header .premiumk-menu");
    const $dim = document.querySelector(".dim");
    const $closeButton = document.querySelector(
      "#header .premiumk-menu .close-button"
    );

    if ($btn) {
      $btn.addEventListener("click", () => {
        $menu.classList.toggle("on");
        $dim.classList.toggle("on");
        $dim.classList.toggle("index-change");
      });
      $closeButton.addEventListener("click", () => {
        $menu.classList.remove("on");
        $dim.classList.remove("on");
        $dim.classList.remove("index-change");
      });
      $dim.addEventListener("click", () => {
        $menu.classList.remove("on");
        $dim.classList.remove("on");
        $dim.classList.remove("index-change");
      });
    }
  };

  const init = () => {
    breakingNewsRolling();
    breakingNewsClick();
    disasterRolling();
    disasterClick();
    headerSticky();
    searchMenuOnOff();
    searchFocus();
    hamburgerMenuOnOff();
    fullMenu();
    darkMode();
    premiumkMenu();
  };

  window.addEventListener("load", () => {
    init();
  });
})();
