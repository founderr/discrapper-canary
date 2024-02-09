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
    return p
  },
  CollectiblesDCToDisplayOptions: function() {
    return _
  }
});
var a, s = r("635058"),
  n = r("151426"),
  i = r("20606"),
  l = r("867805"),
  u = r("547630"),
  o = r("172858"),
  c = r("782340");
let d = 1060,
  f = e => e * (0, u.default)(),
  E = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: r,
        secondary: a
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(a.toHslString(), ")")
  },
  m = o.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
  C = {
    ["".concat(s.CollectiblesCategorySkuId.FANTASY)]: [r("655029"), r("290216")],
    ["".concat(s.CollectiblesCategorySkuId.ANIME)]: [r("597704"), r("714293")],
    ["".concat(s.CollectiblesCategorySkuId.BREAKFAST)]: [r("286642"), r("94646")],
    ["".concat(s.CollectiblesCategorySkuId.HALLOWEEN)]: [r("638538"), r("861485")],
    ["".concat(s.CollectiblesCategorySkuId.FALL)]: [r("740683"), r("489847")],
    ["".concat(s.CollectiblesCategorySkuId.WINTER)]: [r("770704"), r("165057")],
    ["".concat(s.CollectiblesCategorySkuId.MONSTERS)]: [r("330825"), r("125221")],
    ["".concat(s.CollectiblesCategorySkuId.CYBERPUNK)]: [r("424869"), r("714293")],
    ["".concat(s.CollectiblesCategorySkuId.LUNAR_NEW_YEAR)]: [r("424869"), r("714293")]
  },
  p = e => {
    var t;
    return null == e ? m : null !== (t = C[e]) && void 0 !== t ? t : m
  },
  _ = {
    [n.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE]: {
      tooltipText: () => c.default.Messages.COLLECTIBLES_CYBERPUNK_COACHMARK_TITLE
    },
    [n.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]: {
      tooltipText: () => c.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
      tooltipEmojiName: null === (a = l.default.getByName("dragon")) || void 0 === a ? void 0 : a.surrogates,
      badgeColor: i.default.STATUS_DANGER_BACKGROUND
    }
  }