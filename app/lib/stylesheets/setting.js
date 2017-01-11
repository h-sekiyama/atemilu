const setSize = (baseSize, relativeSize, unit) => {
  relativeSize = relativeSize || 0;
  unit = unit == undefined ? "" : unit;
  return (baseSize + relativeSize) + unit;
}


const styles = {
  // Colors
  col_key: "#F5C11E",
  col_key_9: "#F6C734",
  col_key_8: "#F7CD4B",
  col_key_7: "#F8D361",
  col_key_6: "#F9DA78",
  col_key_5: "#FAE08E",
  col_key_4: "#FBE6A5",
  col_key_3: "#FCECBB",
  col_key_2: "#FDF3D2",
  col_key_1: "#FEF8E8",

  col_primary: "#F76220",
  col_primary_9: "#F77136",
  col_primary_8: "#F9814D",
  col_primary_7: "#F99162",
  col_primary_6: "#FAA179",
  col_primary_5: "#FBB08F",
  col_primary_4: "#FCC0A6",
  col_primary_3: "#FCCFBC",
  col_primary_2: "#FDE0D2",
  col_primary_1: "#FEEFE8",

  col_secondary: "#49B2D2",
  col_secondary_9: "#5BB9D6",
  col_secondary_8: "#6DC1DB",
  col_secondary_7: "#7FC9DF",
  col_secondary_6: "#92D1E4",
  col_secondary_5: "#A4D8E8",
  col_secondary_4: "#B6E0ED",
  col_secondary_3: "#C8E7F1",
  col_secondary_2: "#DBF0F6",
  col_secondary_1: "#ECF7FA",

  col_accent: "#46D6BD",
  col_accent_9: "#58DAC3",
  col_accent_8: "#6BDECA",
  col_accent_7: "#7DE2D0",
  col_accent_6: "#90E6D7",
  col_accent_5: "#A2EADE",
  col_accent_4: "#B5EFE5",
  col_accent_3: "#C7F2EB",
  col_accent_2: "#DAF7F2",
  col_accent_1: "#ECFAF8",

  col_black: "#000",
  col_white: "#fff",

  col_gray_6: "#333",
  col_gray_5: "#555",
  col_gray_4: "#666",
  col_gray_3: "#999",
  col_gray_2: "#ccc",
  col_gray_1: "#e9e9e9",
  col_gray_0: "#F4F4F4",

  col_alpha_6: "rgba(col_black,0.87)",
  col_alpha_5: "rgba(col_black,0.54)",
  col_alpha_4: "rgba(col_black,0.38)",
  col_alpha_3: "rgba(col_black,0.26)",
  col_alpha_2: "rgba(col_black,0.12)",
  col_alpha_1: "rgba(col_black,0.4)",

  col_attention: "#FF49A3",
  col_facebook: "#305097",
  col_highlight: "#46D6BD",

  color_base: "#fff",
  color_reversal: "#000",
  color_success: "inherit",
  color_warning: "inherit",
  color_error: "inherit",
  color_notice: "#e4dc88",
  color_up: "#ff9ab2",
  color_down: "#6fffa5",

  //static color
  col_white: "#fff",
  col_yellow: "#ffe400",
  col_red: "#ff0000",
  col_orange: "#ff8400",
  col_gray: "#9a9eb2",

  // Font
  font_family_body: '"ArialMT, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", ,sans"-serif',

  fsize_base: setSize(1.3, "rem"),
  fsize_small: setSize(1.3, -0.3, "rem"),
  fsize_large: setSize(1.3, 0.3, "rem"),
  fsize_x_small: setSize(1.3, -0.2, "rem"),
  fsize_x_large: setSize(1.3, 0.4, "rem"),
  fsize_xx_small: setSize(1.3, -0.4, "rem"),
  fsize_xx_large: setSize(1.3, 0.6, "rem"),
  fsize_xxx_large: setSize(1.3, 0.8, "rem"),

  lh_base: setSize(1.7),
  lh_small: setSize(1.7, -0.7),
  lh_large: setSize(1.7, 0.7),
  lh_x_small: setSize(1.7, -1),
  lh_x_large: setSize(1.7, 1),

  // Spaces

  space_base: "8px",

  // Width
  width_base: "1030px"


}


module.exports = styles