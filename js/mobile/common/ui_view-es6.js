(() => {
  const swiperFn = (slide, indicator) => {
    const rtValue = new Swiper(slide, {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      pagination: {
        el: indicator,
      },
    });

    return rtValue;
  };

  const viewSeriesSwiper = () => {
    var recommendNews = swiperFn(
      ".view-series-swiper",
      ".view-series-indicator"
    );
  };

  const viewLikeClick = () => {
    const $btns = document.querySelectorAll(".view-like .common-button");

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        $btn.classList.toggle("on");
      });
    });
  };

  // 헤더고정
  const headerSticky = () => {
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

  const progress = () => {
    const $status = document.querySelector(".progress-bar .status");
    const $headline = document.querySelector(".view-headline");
    const $article = document.querySelector(".view-article");
    const top = window.scrollY + $headline.getBoundingClientRect().top;
    const bottom = window.scrollY + $article.getBoundingClientRect().bottom;
    const totalScroll = bottom - top;
    let currentScroll;
    let progressWidth;

    window.addEventListener("scroll", () => {
      currentScroll = window.scrollY - top;
      progressWidth = (currentScroll / totalScroll) * 100;
      if (progressWidth < 0) {
        progressWidth = 0;
      }
      $status.style.width = `${progressWidth}%`;
    });
  };

  const ttsPopup = () => {
    const $btn = document.querySelector(".tts-btn");
    const $popup = document.querySelector(".tts-popup");
    const $dim = document.querySelector(".dim");
    const $checkBtn = document.querySelector(".tts-popup .check-btn");

    $btn.addEventListener("click", () => {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
      $btn.classList.toggle("on");
    });

    $checkBtn.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $btn.classList.remove("on");
    });

    $dim.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $btn.classList.remove("on");
    });
  };

  const summaryPopup = () => {
    const $btn = document.querySelector(".summary-btn");
    const $popup = document.querySelector(".summary-popup");
    const $dim = document.querySelector(".dim");
    const $closeBtn = document.querySelector(".summary-popup .close-btn");

    $btn.addEventListener("click", () => {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
    });

    $dim.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });

    $closeBtn.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  const playerSettingPopup = () => {
    const $checkBtn = document.querySelector(
      ".player-setting-popup .primary-btn"
    );
    const $popup = document.querySelector(".player-setting-popup");
    const $dim = document.querySelector(".dim");

    $checkBtn.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  const init = () => {
    viewSeriesSwiper();
    viewLikeClick();
    headerSticky();
    ttsPopup();
    summaryPopup();
    playerSettingPopup();
  };

  window.addEventListener("load", () => {
    init();
  });
  window.addEventListener("scroll", () => {
    progress();
  });
})();
