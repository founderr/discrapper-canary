"use strict";
r.r(t), r.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return d
  },
  getAssetSizeByHeight: function() {
    return f
  },
  getLogoSize: function() {
    return E
  },
  getBackgroundGradient: function() {
    return _
  },
  getConfettiSprites: function() {
    return p
  },
  CollectiblesDCToDisplayOptions: function() {
    return m
  }
});
var n, a = r("151426"),
  i = r("635058"),
  s = r("20606"),
  u = r("867805"),
  o = r("547630"),
  l = r("172858"),
  c = r("782340");
let d = 1060,
  f = e => e * (0, o.default)(),
  E = e => 3.8 * e,
  _ = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: r,
        secondary: n
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(n.toHslString(), ")")
  },
  A = l.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
  I = {
    ["".concat(i.CollectiblesCategorySkuId.FANTASY)]: [r("655029"), r("290216")],
    ["".concat(i.CollectiblesCategorySkuId.ANIME)]: [r("597704"), r("714293")],
    ["".concat(i.CollectiblesCategorySkuId.BREAKFAST)]: [r("286642"), r("94646")],
    ["".concat(i.CollectiblesCategorySkuId.HALLOWEEN)]: [r("638538"), r("861485")],
    ["".concat(i.CollectiblesCategorySkuId.FALL)]: [r("740683"), r("489847")],
    ["".concat(i.CollectiblesCategorySkuId.WINTER)]: [r("770704"), r("165057")],
    ["".concat(i.CollectiblesCategorySkuId.MONSTERS)]: [r("330825"), r("125221")],
    ["".concat(i.CollectiblesCategorySkuId.CYBERPUNK)]: [r("424869"), r("714293")],
    ["".concat(i.CollectiblesCategorySkuId.LUNAR_NEW_YEAR)]: [r("424869"), r("714293")]
  },
  p = e => {
    var t;
    return null == e ? A : null !== (t = I[e]) && void 0 !== t ? t : A
  },
  m = {
    [a.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE]: {
      tooltipText: () => c.default.Messages.COLLECTIBLES_CYBERPUNK_COACHMARK_TITLE
    },
    [a.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]: {
      tooltipText: () => c.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
      tooltipEmojiName: null === (n = u.default.getByName("dragon")) || void 0 === n ? void 0 : n.surrogates,
      badgeColor: s.default.STATUS_DANGER_BACKGROUND
    }
  }