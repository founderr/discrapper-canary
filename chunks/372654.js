"use strict";
a.r(t), a.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return n
  },
  getAssetSizeByHeight: function() {
    return o
  },
  getBackgroundGradient: function() {
    return l
  },
  getConfettiSprites: function() {
    return u
  }
});
var r = a("180650"),
  s = a("921948");
let n = 1060,
  o = e => e * (0, s.default)(),
  l = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: a,
        secondary: r
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(a.toHslString(), ", ").concat(r.toHslString(), ")")
  },
  i = [a("241371"), a("448509")],
  c = {
    ["".concat(r.CollectiblesCategorySkuId.FANTASY)]: [a("709393"), a("646584")],
    ["".concat(r.CollectiblesCategorySkuId.ANIME)]: [a("647387"), a("448509")],
    ["".concat(r.CollectiblesCategorySkuId.BREAKFAST)]: [a("289901"), a("402344")],
    ["".concat(r.CollectiblesCategorySkuId.HALLOWEEN)]: [a("292006"), a("799718")],
    ["".concat(r.CollectiblesCategorySkuId.FALL)]: [a("432170"), a("15888")],
    ["".concat(r.CollectiblesCategorySkuId.WINTER)]: [a("304088"), a("774694")],
    ["".concat(r.CollectiblesCategorySkuId.MONSTERS)]: [a("16724"), a("441506")]
  },
  u = e => {
    var t;
    return null == e ? i : null !== (t = c[e]) && void 0 !== t ? t : i
  }