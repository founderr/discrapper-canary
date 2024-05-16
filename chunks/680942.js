"use strict";
l.r(t);
var a = l("735250"),
  s = l("470079"),
  r = l("481060"),
  n = l("727637"),
  i = l("906732"),
  o = l("241553"),
  u = l("333867"),
  c = l("559629"),
  d = l("231338"),
  f = l("689938"),
  C = l("46309");
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
    returnRef: l,
    onSuccess: p,
    tooltipDelay: E,
    isGiftEasterEggEnabled: h,
    disableCustomColor: g = !1
  } = e, {
    analyticsLocations: x
  } = (0, i.default)(), b = s.useRef(null), T = (0, n.default)(b), L = g ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT;
  return (0, a.jsx)(r.Tooltip, {
    text: f.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: E,
    children: e => (0, a.jsx)(r.Button, {
      ...e,
      buttonRef: b,
      className: C.giftButton,
      color: g ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
      look: r.Button.Looks.FILLED,
      size: r.ButtonSizes.ICON,
      innerClassName: C.giftButtonInner,
      "aria-label": f.default.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, u.default)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: x,
          returnRef: l,
          onClose: null != p ? e => {
            e && p()
          } : void 0
        })
      },
      children: h ? (0, a.jsx)(o.SeasonalGiftIcon, {
        hovered: T,
        isContentDismissed: !0,
        themeOverride: L,
        boxColors: m
      }) : (0, a.jsx)(c.default, {
        width: 24,
        height: 24
      })
    })
  })
}