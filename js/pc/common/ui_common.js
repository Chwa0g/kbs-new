"use strict";

(function () {
  // 탭 클릭
  var tabClick = function tabClick() {
    $(".tab-btn").off("click").on("click", function () {
      var id = $(this).closest(".tab-btns").data("tab-contents");
      var index = $(this).closest(".tab-btns-list").index();
      $(this).closest(".tab-btns-list").siblings().removeClass("on");
      $(this).closest(".tab-btns-list").addClass("on");
      $("#" + id).find(".tab-contents-list").hide();
      $("#" + id).find(".tab-contents-list").eq(index).show();
    });
  };

  // 사이드 메뉴 위치 세팅
  var setAsidePosition = function setAsidePosition() {
    var $aside = document.querySelector(".aside");
    var $contents = document.querySelector("#contents");
    var top = window.scrollY + $contents.getBoundingClientRect().top;
    $aside.style.top = top + 24 + "px";
  };
  var init = function init() {
    tabClick();
    setAsidePosition();
  };
  window.addEventListener("load", function () {
    init();
  });
})();