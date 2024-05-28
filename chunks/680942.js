"use strict";
a.r(t);
var s = a("735250"),
  r = a("470079"),
  n = a("481060"),
  l = a("727637"),
  o = a("906732"),
  i = a("241553"),
  c = a("333867"),
  u = a("559629"),
  d = a("884697"),
  f = a("231338"),
  C = a("689938"),
  p = a("46309");
let m = {
  dark: [{
    box: "#FFF19E",
    ribbon: "#FF484B"
  }, {
    box: "#17B5E2",
    ribbon: "#FFFFFF"
  }, {
    box: "#FFE1A6",
    ribbon: "#C29CFF"
  }, {
    box: "#60DA81",
    ribbon: "#FFF597"
  }, {
    box: "#E4578A",
    ribbon: "#BEC4FF"
  }, {
    box: "#AFE0FC",
    ribbon: "#FF9356"
  }, {
    box: "#DB6D6D",
    ribbon: "#67DA9C"
  }],
  light: [{
    box: "#FFF19E",
    ribbon: "#FF484B"
  }, {
    box: "#025D90",
    ribbon: "#70FFF8"
  }, {
    box: "#C29CFF",
    ribbon: "#255FA3"
  }, {
    box: "#6AC082",
    ribbon: "#DED052"
  }, {
    box: "#AC448B",
    ribbon: "#4845B8"
  }, {
    box: "#175B82",
    ribbon: "#F9D249"
  }, {
    box: "#B54141",
    ribbon: "#026530"
  }]
};
t.default = e => {
  let {
    product: t,
    returnRef: a,
    onSuccess: g,
    tooltipDelay: E,
    isGiftEasterEggEnabled: b,
    disableCustomColor: h = !1
  } = e, {
    analyticsLocations: S
  } = (0, o.default)(), T = r.useRef(null), v = (0, l.default)(T), y = h ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
  return (0, d.isBundleProduct)(t) ? null : (0, s.jsx)(n.Tooltip, {
    text: C.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: E,
    children: e => (0, s.jsx)(n.Button, {
      ...e,
      buttonRef: T,
      className: p.giftButton,
      color: h ? n.ButtonColors.BRAND : n.ButtonColors.CUSTOM,
      look: n.Button.Looks.FILLED,
      size: n.ButtonSizes.ICON,
      innerClassName: p.giftButtonInner,
      "aria-label": C.default.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, c.default)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: S,
          returnRef: a,
          onClose: null != g ? e => {
            e && g()
          } : void 0
        })
      },
      children: b ? (0, s.jsx)(i.SeasonalGiftIcon, {
        hovered: v,
        isContentDismissed: !0,
        themeOverride: y,
        boxColors: m
      }) : (0, s.jsx)(u.default, {
        width: 24,
        height: 24
      })
    })
  })
}