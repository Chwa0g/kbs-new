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

  const recommendNewsSwiper = () => {
    var recommendNews = swiperFn(
      ".recommend-news-swiper",
      ".recommend-news-indicator"
    );
  };

  const newsNineSwiper = () => {
    var newsNine = swiperFn(".news-9-swiper", ".news-9-indicator");
  };

  const kShortsSwiper = () => {
    var kShorts = swiperFn(".k-shorts-swiper", ".k-shorts-indicator");
  };

  const youtubeLiveSwiper = () => {
    var youtubeLive = swiperFn(
      ".youtube-live-swiper",
      ".youtube-live-indicator"
    );
  };

  const tabClick = () => {
    $(".tab-btn")
      .off("click")
      .on("click", function () {
        var id = $(this).closest(".tab-btns").data("tab-contents");
        var index = $(this).closest(".tab-btns-list").index();
        $(this).closest(".tab-btns-list").siblings().removeClass("on");
        $(this).closest(".tab-btns-list").addClass("on");
        $("#" + id)
          .find(".tab-contents-list")
          .hide();
        $("#" + id)
          .find(".tab-contents-list")
          .eq(index)
          .show();
      });
  };

  const init = () => {
    recommendNewsSwiper();
    newsNineSwiper();
    kShortsSwiper();
    youtubeLiveSwiper();
    tabClick();
  };

  window.addEventListener("load", () => {
    init();
  });
})();
