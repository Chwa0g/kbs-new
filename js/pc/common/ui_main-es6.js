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

  // 뉴스9 슬라이드
  const nineSlide = () => {
    if ($(".news-9-slide .swiper-slide").length > 4) {
      var newsNine = slideFn(
        4,
        ".news-9-slide",
        ".news-9-pagination",
        ".news-9-next",
        ".news-9-previous"
      );
    } else if ($(".news-9-slide .swiper-slide").length <= 4) {
      var newsNine = noNaviSlideFn(4, ".news-9-slide", ".news-9-pagination");
    }
  };

  // 주요영상 슬라이드
  const mainVideoSlide = () => {
    if ($(".main-video-slide .swiper-slide").length > 2) {
      var mainVideoSlide = slideFn(
        2,
        ".main-video-slide",
        ".main-video-pagination",
        ".main-video-next",
        ".main-video-previous"
      );
    } else if ($(".main-video-slide .swiper-slide").length <= 2) {
      var mainVideoSlide = noNaviSlideFn(
        2,
        ".main-video-slide",
        ".main-video-pagination"
      );
    }
  };

  // 유튜브 라이브 뉴스 슬라이드
  const youtubeLiveNewsSlide = () => {
    if ($(".youtube-live-news-slide .swiper-slide").length > 2) {
      var youtubeLive = slideFn(
        2,
        ".youtube-live-news-slide",
        ".youtube-live-news-pagination",
        ".youtube-live-news-next",
        ".youtube-live-news-previous"
      );
    } else if ($(".youtube-live-news-slide .swiper-slide").length <= 2) {
      var youtubeLive = noNaviSlideFn(
        2,
        ".youtube-live-news-slide",
        ".youtube-live-news-pagination"
      );
    }
  };

  // K-SHorts 슬라이드
  const kshortsSlide = () => {
    if ($(".k-shorts-slide .swiper-slide").length > 4) {
      var kShorts = slideFn(
        4,
        ".k-shorts-slide",
        ".k-shorts-pagination",
        ".k-shorts-next",
        ".k-shorts-previous"
      );
    } else if ($(".k-shorts-slide .swiper-slide").length <= 4) {
      var kShorts = noNaviSlideFn(4, ".k-shorts-slide", ".k-shorts-pagination");
    }
  };

  // PremiumK 슬라이드
  const premiumkSlide = () => {
    if ($(".crab-slide .swiper-slide").length > 4) {
      var crab = slideFn(
        4,
        ".crab-slide",
        ".crab-pagination",
        ".crab-next",
        ".crab-previous"
      );
    } else if ($(".crab-slide .swiper-slide").length <= 4) {
      var crab = noNaviSlideFn(4, ".crab-slide", ".crab-pagination");
    }

    if ($(".site-video-slide .swiper-slide").length > 4) {
      var siteVideo = slideFn(
        4,
        ".site-video-slide",
        ".site-video-pagination",
        ".site-video-next",
        ".site-video-previous"
      );
    } else if ($(".site-video-slide .swiper-slide").length <= 4) {
      var siteVideo = noNaviSlideFn(
        4,
        ".site-video-slide",
        ".site-video-pagination"
      );
    }

    if ($(".breaking-news-video-slide .swiper-slide").length > 4) {
      var breakingNews = slideFn(
        4,
        ".breaking-news-video-slide",
        ".breaking-news-video-pagination",
        ".breaking-news-video-next",
        ".breaking-news-video-previous"
      );
    } else if ($(".breaking-news-video-slide .swiper-slide").length <= 4) {
      var breakingNews = noNaviSlideFn(
        4,
        ".breaking-news-video-slide",
        ".breaking-news-video-pagination"
      );
    }
  };

  // 키워드롤
  const keywordRoll = () => {
    var keywordSwiper = new Swiper(".rolling-keyword", {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  };

  // 툴팁 클릭
  const tooltipClick = () => {
    const $btns = document.querySelectorAll(".tooltip-btn");
    const $closeBtns = document.querySelectorAll(".tooltip .close-btn");

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        const $tooptip = $btn.nextElementSibling;

        $tooptip.classList.toggle("on");
      });
    });

    $closeBtns.forEach(($closeBtn) => {
      $closeBtn.addEventListener("click", () => {
        const $tooptip = $closeBtn.parentElement;

        $tooptip.classList.remove("on");
      });
    });
  };

  // 라이브 섹션 클릭 event
  const liveClick = () => {
    const $btn = document.querySelector(".header-live .arrow-btn");
    const $aside = document.querySelector(".aside");

    if ($btn) {
      $btn.addEventListener("click", () => {
        const $headerLive = $btn.parentElement;
        $headerLive.classList.toggle("on");
        $aside.classList.toggle("position-change");
        setAsidePos();
      });
    }
  };

  // 어사이드 포지션 설정
  const setAsidePos = () => {
    const $aside = document.querySelector("#footer .aside");
    const $iframe = document.querySelector("#contents .iframe-area");
    const $headLine = document.querySelector("#contents .box.head-line");

    if ($iframe) {
      const top = window.scrollY + $iframe.getBoundingClientRect().top;
      $aside.style.top = `${top}px`;
    } else if (!$iframe) {
      const top = window.scrollY + $headLine.getBoundingClientRect().top;
      $aside.style.top = `${top}px`;
    }
  };

  const init = () => {
    nineSlide();
    mainVideoSlide();
    keywordRoll();
    tooltipClick();
    kshortsSlide();
    youtubeLiveNewsSlide();
    premiumkSlide();
    liveClick();
    setAsidePos();
  };

  window.addEventListener("load", () => {
    init();
  });
})();
