(() => {
  // 슬라이드 함수
  const slideFn = (view, slide, pagination, nextBtn, prevBtn) => {
    const retrunValue = new Swiper(slide, {
      slidesPerView: view,
      spaceBetween: 24,
      slidesPerGroup: view,
      loopFillGroupWithBlank: true,
      loop: true,
      pagination: {
        el: pagination,
        type: "fraction",
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });

    return retrunValue;
  };

  // 내비게이션 없는 슬라이드 함수
  const noNaviSlideFn = (view, slide, pagination) => {
    const retrunValue = new Swiper(slide, {
      slidesPerView: view,
      spaceBetween: 24,
      slidesPerGroup: view,
      loopFillGroupWithBlank: true,
      loop: true,
      pagination: {
        el: pagination,
        type: "fraction",
      },
    });

    return retrunValue;
  };

  // 시리즈 슬라이드
  const seriesSlide = () => {
    if ($(".view-series-slide .swiper-slide").length > 4) {
      var newsNine = slideFn(
        4,
        ".view-series-slide",
        ".view-series-pagination",
        ".view-series-next",
        ".view-series-previous"
      );
    } else if ($(".view-series-swiper .swiper-slide").length <= 4) {
      var newsNine = noNaviSlideFn(
        4,
        ".view-series-slide",
        ".view-series-pagination"
      );
    }
  };

  // 좋아요 클릭
  const likeClick = () => {
    const $btns = document.querySelectorAll(".positive-btn");

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        $btn.classList.toggle("on");
      });
    });
  };

  // 요약 팝업
  const summaryPopup = () => {
    const $btn = document.querySelector(".summary-btn");
    const $closeBtn = document.querySelector(".summary-popup .close-btn");
    const $popup = document.querySelector(".summary-popup");
    const $dim = document.querySelector(".dim");
    const $nav = document.querySelector(".header-nav-wrapper");

    $btn.addEventListener("click", () => {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
      $nav.classList.toggle("index-change");
    });

    $closeBtn.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $nav.classList.remove("index-change");
    });

    $dim.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $nav.classList.remove("index-change");
    });
  };

  // 사이드 메뉴 위치 세팅
  const setAsidePosition = () => {
    const $aside = document.querySelector(".aside");
    const $contents = document.querySelector("#contents");
    const top = window.scrollY + $contents.getBoundingClientRect().top;

    $aside.style.top = `${top + 24}px`;
  };

  const progressBar = () => {
    const $progressBar = document.querySelector(".progress-bar");
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    $progressBar.style.width = scrolled + "%";
  };

  // 스크롤시 네비게이션 메뉴 기사제목 나오기
  const navArticleTitle = () => {
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

  const init = () => {
    likeClick();
    seriesSlide();
    summaryPopup();
    setAsidePosition();
    navArticleTitle();
  };

  window.addEventListener("load", () => {
    init();
  });
  window.addEventListener("scroll", () => {
    progressBar();
  });
})();
