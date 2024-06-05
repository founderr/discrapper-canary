"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  r = s("727637"),
  i = s("906732"),
  o = s("241553"),
  u = s("333867"),
  c = s("559629"),
  d = s("884697"),
  f = s("231338"),
  C = s("689938"),
  E = s("46309");
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
    returnRef: s,
    onSuccess: m,
    tooltipDelay: g,
    isGiftEasterEggEnabled: h,
    disableCustomColor: S = !1
  } = e, {
    analyticsLocations: I
  } = (0, i.default)(), T = l.useRef(null), x = (0, r.default)(T), _ = S ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
  return (0, d.isBundleProduct)(t) ? null : (0, a.jsx)(n.Tooltip, {
    text: C.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: g,
    children: e => (0, a.jsx)(n.Button, {
      ...e,
      buttonRef: T,
      className: E.giftButton,
      color: S ? n.ButtonColors.BRAND : n.ButtonColors.CUSTOM,
      look: n.Button.Looks.FILLED,
      size: n.ButtonSizes.ICON,
      innerClassName: E.giftButtonInner,
      "aria-label": C.default.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, u.default)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: I,
          returnRef: s,
          onClose: null != m ? e => {
            e && m()
          } : void 0
        })
      },
      children: h ? (0, a.jsx)(o.SeasonalGiftIcon, {
        hovered: x,
        isContentDismissed: !0,
        themeOverride: _,
        boxColors: p
      }) : (0, a.jsx)(c.default, {
        width: 24,
        height: 24
      })
    })
  })
}