"use strict";
var n = t(735250),
  a = t(470079),
  r = t(481060),
  i = t(727637),
  l = t(906732),
  o = t(241553),
  c = t(333867),
  u = t(884697),
  d = t(231338),
  C = t(689938),
  f = t(521746);
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
s.Z = e => {
  let {
    product: s,
    returnRef: t,
    onSuccess: p,
    tooltipDelay: g,
    isGiftEasterEggEnabled: m,
    disableCustomColor: x = !1
  } = e, {
    analyticsLocations: h
  } = (0, l.ZP)(), I = a.useRef(null), _ = (0, i.Z)(I), T = x ? d.BR.DARK : d.BR.LIGHT;
  return (0, u.x6)(s) ? null : (0, n.jsx)(r.Tooltip, {
    text: C.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: g,
    children: e => (0, n.jsx)(r.Button, {
      ...e,
      buttonRef: I,
      className: f.giftButton,
      color: x ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
      look: r.Button.Looks.FILLED,
      size: r.ButtonSizes.ICON,
      innerClassName: f.giftButtonInner,
      "aria-label": C.Z.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: s.skuId,
          isGift: !0,
          analyticsLocations: h,
          returnRef: t,
          onClose: null != p ? e => {
            e && p()
          } : void 0
        })
      },
      children: m ? (0, n.jsx)(o.e, {
        hovered: _,
        isContentDismissed: !0,
        themeOverride: T,
        boxColors: E
      }) : (0, n.jsx)(r.GiftIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  })
}