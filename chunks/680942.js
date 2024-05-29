"use strict";
a.r(t);
var l = a("735250"),
  s = a("470079"),
  r = a("481060"),
  n = a("727637"),
  i = a("906732"),
  o = a("241553"),
  c = a("333867"),
  u = a("559629"),
  d = a("884697"),
  f = a("231338"),
  C = a("689938"),
  m = a("46309");
let p = {
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
    isGiftEasterEggEnabled: h,
    disableCustomColor: b = !1
  } = e, {
    analyticsLocations: x
  } = (0, i.default)(), v = s.useRef(null), S = (0, n.default)(v), I = b ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
  return (0, d.isBundleProduct)(t) ? null : (0, l.jsx)(r.Tooltip, {
    text: C.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: E,
    children: e => (0, l.jsx)(r.Button, {
      ...e,
      buttonRef: v,
      className: m.giftButton,
      color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
      look: r.Button.Looks.FILLED,
      size: r.ButtonSizes.ICON,
      innerClassName: m.giftButtonInner,
      "aria-label": C.default.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, c.default)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: x,
          returnRef: a,
          onClose: null != g ? e => {
            e && g()
          } : void 0
        })
      },
      children: h ? (0, l.jsx)(o.SeasonalGiftIcon, {
        hovered: S,
        isContentDismissed: !0,
        themeOverride: I,
        boxColors: p
      }) : (0, l.jsx)(u.default, {
        width: 24,
        height: 24
      })
    })
  })
}