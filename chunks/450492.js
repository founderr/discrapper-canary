"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var l = a("37983"),
  s = a("884691"),
  r = a("77078"),
  n = a("252744"),
  i = a("685665"),
  o = a("108486"),
  u = a("946964"),
  c = a("978679"),
  d = a("177586"),
  f = a("843455"),
  m = a("782340"),
  C = a("691164");
let E = {
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
var h = e => {
  let {
    product: t,
    returnRef: a,
    onSuccess: h,
    tooltipDelay: p,
    isGiftEasterEggEnabled: g,
    disableCustomColor: T = !1
  } = e, {
    analyticsLocations: L
  } = (0, i.default)(), x = s.useRef(null), b = (0, n.default)(x), {
    buttonColors: v
  } = (0, d.default)(t.styles), S = null == v || T ? void 0 : {
    background: v.secondary.toHslString(),
    color: v.text.toHslString()
  }, I = T || (null == v ? void 0 : v.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
  return (0, l.jsx)(r.Tooltip, {
    text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: p,
    children: e => (0, l.jsx)(r.Button, {
      ...e,
      buttonRef: x,
      style: S,
      className: C.giftButton,
      color: T ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
      look: r.Button.Looks.FILLED,
      size: r.ButtonSizes.ICON,
      innerClassName: C.giftButtonInner,
      "aria-label": m.default.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, u.default)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: L,
          returnRef: a,
          onClose: null != h ? e => {
            e && h()
          } : void 0
        })
      },
      children: g ? (0, l.jsx)(o.SeasonalGiftIcon, {
        hovered: b,
        isContentDismissed: !0,
        themeOverride: I,
        boxColors: E
      }) : (0, l.jsx)(c.default, {
        width: 24,
        height: 24
      })
    })
  })
}