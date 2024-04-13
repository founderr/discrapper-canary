"use strict";
r.r(t), r.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return n
  },
  getAssetSizeByHeight: function() {
    return l
  },
  getBackgroundGradient: function() {
    return s
  },
  getConfettiSprites: function() {
    return u
  }
});
var o = r("180650"),
  a = r("921948");
let n = 1060,
  l = e => e * (0, a.default)(),
  s = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: r,
        secondary: o
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(o.toHslString(), ")")
  },
  i = [r("241371"), r("448509")],
  c = {
    ["".concat(o.CollectiblesCategorySkuId.FANTASY)]: [r("709393"), r("646584")],
    ["".concat(o.CollectiblesCategorySkuId.ANIME)]: [r("647387"), r("448509")],
    ["".concat(o.CollectiblesCategorySkuId.BREAKFAST)]: [r("289901"), r("402344")],
    ["".concat(o.CollectiblesCategorySkuId.HALLOWEEN)]: [r("292006"), r("799718")],
    ["".concat(o.CollectiblesCategorySkuId.FALL)]: [r("432170"), r("15888")],
    ["".concat(o.CollectiblesCategorySkuId.WINTER)]: [r("304088"), r("774694")],
    ["".concat(o.CollectiblesCategorySkuId.MONSTERS)]: [r("16724"), r("441506")]
  },
  u = e => {
    var t;
    return null == e ? i : null !== (t = c[e]) && void 0 !== t ? t : i
  }