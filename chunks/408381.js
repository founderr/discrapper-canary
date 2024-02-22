"use strict";
r.r(t), r.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return u
  },
  getAssetSizeByHeight: function() {
    return i
  },
  getBackgroundGradient: function() {
    return l
  },
  getConfettiSprites: function() {
    return c
  }
});
var a = r("635058"),
  n = r("547630");
let u = 1060,
  i = e => e * (0, n.default)(),
  l = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: r,
        secondary: a
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(a.toHslString(), ")")
  },
  s = [r("424869"), r("714293")],
  o = {
    ["".concat(a.CollectiblesCategorySkuId.FANTASY)]: [r("655029"), r("290216")],
    ["".concat(a.CollectiblesCategorySkuId.ANIME)]: [r("597704"), r("714293")],
    ["".concat(a.CollectiblesCategorySkuId.BREAKFAST)]: [r("286642"), r("94646")],
    ["".concat(a.CollectiblesCategorySkuId.HALLOWEEN)]: [r("638538"), r("861485")],
    ["".concat(a.CollectiblesCategorySkuId.FALL)]: [r("740683"), r("489847")],
    ["".concat(a.CollectiblesCategorySkuId.WINTER)]: [r("770704"), r("165057")],
    ["".concat(a.CollectiblesCategorySkuId.MONSTERS)]: [r("330825"), r("125221")]
  },
  c = e => {
    var t;
    return null == e ? s : null !== (t = o[e]) && void 0 !== t ? t : s
  }