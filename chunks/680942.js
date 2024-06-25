"use strict";
var n = s(735250),
  r = s(470079),
  a = s(481060),
  i = s(727637),
  l = s(906732),
  o = s(241553),
  c = s(333867),
  u = s(884697),
  d = s(231338),
  C = s(689938),
  f = s(521746);
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
t.Z = e => {
  let {
    product: t,
    returnRef: s,
    onSuccess: g,
    tooltipDelay: E,
    isGiftEasterEggEnabled: m,
    disableCustomColor: h = !1
  } = e, {
    analyticsLocations: x
  } = (0, l.ZP)(), I = r.useRef(null), _ = (0, i.Z)(I), T = h ? d.BR.DARK : d.BR.LIGHT;
  return (0, u.x6)(t) ? null : (0, n.jsx)(a.Tooltip, {
    text: C.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: E,
    children: e => (0, n.jsx)(a.Button, {
      ...e,
      buttonRef: I,
      className: f.giftButton,
      color: h ? a.ButtonColors.BRAND : a.ButtonColors.CUSTOM,
      look: a.Button.Looks.FILLED,
      size: a.ButtonSizes.ICON,
      innerClassName: f.giftButtonInner,
      "aria-label": C.Z.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: x,
          returnRef: s,
          onClose: null != g ? e => {
            e && g()
          } : void 0
        })
      },
      children: m ? (0, n.jsx)(o.e, {
        hovered: _,
        isContentDismissed: !0,
        themeOverride: T,
        boxColors: p
      }) : (0, n.jsx)(a.GiftIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  })
}