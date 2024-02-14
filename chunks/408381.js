"use strict";
r.r(t), r.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return d
  },
  getAssetSizeByHeight: function() {
    return f
  },
  getBackgroundGradient: function() {
    return E
  },
  getConfettiSprites: function() {
    return S
  },
  CollectiblesDCToDisplayOptions: function() {
    return h
  }
});
var n, a = r("635058"),
  u = r("151426"),
  i = r("20606"),
  s = r("867805"),
  l = r("547630"),
  o = r("172858"),
  c = r("782340");
let d = 1060,
  f = e => e * (0, l.default)(),
  E = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: r,
        secondary: n
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(n.toHslString(), ")")
  },
  m = o.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
  p = {
    ["".concat(a.CollectiblesCategorySkuId.FANTASY)]: [r("655029"), r("290216")],
    ["".concat(a.CollectiblesCategorySkuId.ANIME)]: [r("597704"), r("714293")],
    ["".concat(a.CollectiblesCategorySkuId.BREAKFAST)]: [r("286642"), r("94646")],
    ["".concat(a.CollectiblesCategorySkuId.HALLOWEEN)]: [r("638538"), r("861485")],
    ["".concat(a.CollectiblesCategorySkuId.FALL)]: [r("740683"), r("489847")],
    ["".concat(a.CollectiblesCategorySkuId.WINTER)]: [r("770704"), r("165057")],
    ["".concat(a.CollectiblesCategorySkuId.MONSTERS)]: [r("330825"), r("125221")],
    ["".concat(a.CollectiblesCategorySkuId.CYBERPUNK)]: [r("424869"), r("714293")],
    ["".concat(a.CollectiblesCategorySkuId.LUNAR_NEW_YEAR)]: [r("424869"), r("714293")]
  },
  S = e => {
    var t;
    return null == e ? m : null !== (t = p[e]) && void 0 !== t ? t : m
  },
  h = {
    [u.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE]: {
      tooltipText: () => c.default.Messages.COLLECTIBLES_CYBERPUNK_COACHMARK_TITLE
    },
    [u.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]: {
      tooltipText: () => c.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
      tooltipEmojiName: null === (n = s.default.getByName("dragon")) || void 0 === n ? void 0 : n.surrogates,
      badgeColor: i.default.STATUS_DANGER_BACKGROUND
    }
  }