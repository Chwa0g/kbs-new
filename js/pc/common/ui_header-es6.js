(() => {
  // 속보 롤링 클릭 event
  const breakingNewsClick = () => {
    const $btn = document.querySelector(".breaking-news.rolling .arrow-btn");
    const $history = document.querySelector(".breaking-news-history-wrapper");

    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $history.classList.toggle("on");
      setAsidePos();
    });
  };

  // 수직 롤링 함수
  const verticalRollingFn = (swiper) => {
    const retrunValue = new Swiper(swiper, {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    return retrunValue;
  };

  // 날씨 롤링 event
  const weatherRolling = () => {
    var weatherSwiper = verticalRollingFn(".weather");
  };

  // 재난 알림 롤링 event
  var disasterSwiper;
  const disasterRolling = () => {
    disasterSwiper = verticalRollingFn(".disaster-rolling-swiper");
  };

  // 속보 롤링 event
  const breakingNewsRolling = () => {
    var breakingNewsSwiper = verticalRollingFn(".breaking-news-swiper");
  };
  // 재난 알림 펼침 클릭 event
  const disasterClick = () => {
    $(".disaster-rolling .arrow-btn")
      .off("click")
      .on("click", function () {
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
  const worldSelect = () => {
    const $menu = document.querySelector("#header .foreign-site-links");
    const $btn = document.querySelector("#header .kbs-world-select-btn");
    const $dim = document.querySelector(".dim");

    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
      $dim.classList.toggle("transparent");
      $dim.classList.toggle("on");
    });
  };

  // 햄버거 버튼 클릭 event
  const hamburgerClick = () => {
    const $btn = document.querySelector(".hamburger-btn");
    const $navMenu = document.querySelector(".header-nav");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $navLinks = document.querySelectorAll(".nav-link");
    const $commonMenues = document.querySelectorAll(".common-menu");
    const $dim = document.querySelector(".dim");

    $btn.addEventListener("click", () => {
      if ($btn.classList.contains("on")) {
        $btn.classList.remove("on");
        $navMenu.classList.remove("on");
        $fullMenu.classList.remove("on");
        $dim.classList.remove("on");
        $navLinks.forEach(($navLink) => {
          $navLink.classList.remove("on");
        });
        $commonMenues.forEach(($commonMenu) => {
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
  const navMenuClick = () => {
    const menuNames = ["분야별", "TV 뉴스", "프리미엄K", "시사", "지역"];
    const $navLinks = document.querySelectorAll(".nav-link");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $dim = document.querySelector(".dim");
    const $fullMenuNames = document.querySelectorAll(".full-menu-heading");
    const $hamburgerBtn = document.querySelector(".hamburger-btn");
    let $onNavLink;

    $navLinks.forEach(($navLink) => {
      $navLink.addEventListener("click", () => {
        const menuName = $navLink.innerText;
        if (menuNames.includes(menuName)) {
          if ($onNavLink) {
            $onNavLink.classList.remove("on");
          }

          if (!$hamburgerBtn.classList.contains("on")) {
            $hamburgerBtn.classList.add("on");
          }

          $navLink.classList.add("on");
          $onNavLink = $navLink;

          $fullMenuNames.forEach(($fullMenuName) => {
            const fullMenuName = $fullMenuName.innerText;
            const $commonMenu = $fullMenuName.parentElement.parentElement;
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
  const searchClick = () => {
    const $btn = document.querySelector(".hamburger-search-btns .search-btn");
    const $closeBtn = document.querySelector(".search .close-btn");
    const $hamburgerBtn = document.querySelector(".hamburger-btn");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $navLinks = document.querySelectorAll(".nav-link");
    const $commonMenues = document.querySelectorAll(".full-menu .common-menu");
    const $searchMenu = document.querySelector(".search-most-view");
    const $dim = document.querySelector(".dim");

    $btn.addEventListener("click", () => {
      if ($fullMenu.classList.contains("on")) {
        $fullMenu.classList.remove("on");
      }

      if ($hamburgerBtn.classList.contains("on")) {
        $hamburgerBtn.classList.remove("on");
      }

      $navLinks.forEach(($navLink) => {
        $navLink.classList.remove("on");
      });
      $commonMenues.forEach(($commonMenu) => {
        $commonMenu.classList.remove("on");
      });

      $searchMenu.classList.add("on");
      $dim.classList.add("on");
    });

    $closeBtn.addEventListener("click", () => {
      $searchMenu.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  // 스크롤시 네비게이션 메뉴 고정 event
  const navFixed = () => {
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
  const dimClick = () => {
    const $dim = document.querySelector(".dim");
    const $searchMenu = document.querySelector(".search-most-view");
    const $nav = document.querySelector(".header-nav");
    const $hamburgerBtn = document.querySelector(".hamburger-btn");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $navLinks = document.querySelectorAll(".nav-link");
    const $commonMenues = document.querySelectorAll(".common-menu");
    const $worldSelectBtn = document.querySelector(".kbs-world-select-btn");
    const $foreignSiteMenu = document.querySelector(".foreign-site-links");

    $dim.addEventListener("click", () => {
      $dim.classList.remove("on");
      $searchMenu.classList.remove("on");
      $nav.classList.remove("on");
      $hamburgerBtn.classList.remove("on");
      $fullMenu.classList.remove("on");
      $navLinks.forEach(($navLink) => {
        $navLink.classList.remove("on");
      });
      $commonMenues.forEach(($commonMenu) => {
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
  const recommendSearch = () => {
    const $input = document.querySelector(
      ".header-nav-wrapper .search-box .search-box-input"
    );
    const $recommend = document.querySelector(".recommend-search");
    const $wrapper = document.querySelector(".search-most-view");
    const $dim = document.querySelector(".dim");

    $input.addEventListener("focus", () => {
      $recommend.classList.add("on");
      $input.classList.add("focus");
    });

    $wrapper.addEventListener("click", (e) => {
      const target = e.target;

      if (target !== $input) {
        $recommend.classList.remove("on");
        $input.classList.remove("focus");
      }
    });

    $dim.addEventListener("click", () => {
      $recommend.classList.remove("on");
      $input.classList.remove("focus");
    });
  };

  // 어사이드 포지션 설정
  const setAsidePos = () => {
    const $aside = document.querySelector("#footer .aside");
    const $iframe = document.querySelector("#contents .iframe-area");
    const $headLine = document.querySelector("#contents .box.head-line");

    if ($headLine) {
      if ($iframe) {
        const top = window.scrollY + $iframe.getBoundingClientRect().top;
        $aside.style.top = `${top}px`;
      } else if (!$iframe) {
        const top = window.scrollY + $headLine.getBoundingClientRect().top;
        $aside.style.top = `${top}px`;
      }
    }
  };

  // 초기 함수
  const init = () => {
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

  window.addEventListener("load", () => {
    init();
  });
})();
