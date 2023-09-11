function news_contents_decorate() {
  console.log("1232143125");
  var section_map = {
    "[앵커]": {
      section_color: "#4664e6",
      div_color: "#f7fbff",
      div_background: "rgb(18 18 55 / 4%)",
      font_color: "#121237",
      icon_name: "[앵커]",
      class: "anchor",
      // ak1
    },
    "[질문]": {
      section_color: "#4664e6",
      div_color: "#f7fbff",
      div_background: "rgb(18 18 55 / 4%)",
      font_color: "#121237",
      icon_name: "[질문]",
      class: "question",
      // ak2
    },
    "[기자]": {
      section_color: "#db9655",
      div_color: "#fefcfb",
      div_background: "rgb(0 128 204 / 4%)",
      font_color: "#0080CC",
      icon_name: "[기자]",
      class: "reporter",
      // ak3
    },
    "[리포트]": {
      section_color: "#db9655",
      div_color: "#fefcfb",
      div_background: "rgb(0 128 204 / 4%)",
      font_color: "#0080CC",
      icon_name: "[리포트]",
      class: "report",
      // ak4
    },
    "[답변]": {
      section_color: "#db9655",
      div_color: "#fefcfb",
      div_background: "rgb(0 128 204 / 4%)",
      font_color: "#0080CC",
      icon_name: "[답변]",
      class: "answer",
      // ak5
    },
  };

  // split
  var list = [{ section: "전체", contents: $("#cont_newstext").html() }];

  for (var s in section_map) {
    list = news_contents_split_by_word(list, s);
  }

  // decorate
  var decorated_html = list[0].contents;
  for (var a = 1; a < list.length; a++) {
    var obj = list[a];
    var map = section_map[obj.section];

    decorated_html +=
      '<div class="' +
      map.class +
      '" style="background-color: ' +
      map.div_color +
      ";padding: 10px 23px 15px; margin : 0px 0px 28px; font-family: Noto Sans Light;background:" +
      map.div_background +
      ';line-height: 30px">';
    decorated_html +=
      '<span class="' +
      map.class +
      '" style="font-size: 17px; font-family: Noto Sans Bold;color: ' +
      map.font_color +
      ';">' +
      map.icon_name +
      "</span>";

    decorated_html += obj.contents + "</div>";
  }

  $("#cont_newstext").html(decorated_html);
}
