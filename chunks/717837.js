"use strict";
e.exports = function(e) {
  return (e = String(e || ""), o.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
};
var n = "֑-߿יִ-﷽ﹰ-ﻼ",
  i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
  o = RegExp("^[^" + i + "]*[" + n + "]"),
  a = RegExp("^[^" + n + "]*[" + i + "]")