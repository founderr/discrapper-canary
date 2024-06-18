"use strict";
var n = t(735250),
  a = t(470079),
  r = t(481060),
  l = t(727637),
  i = t(906732),
  o = t(241553),
  c = t(333867),
  u = t(884697),
  d = t(231338),
  C = t(689938),
  E = t(46309);
let f = {
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
    onSuccess: m,
    tooltipDelay: p,
    isGiftEasterEggEnabled: g,
    disableCustomColor: h = !1
  } = e, {
    analyticsLocations: I
  } = (0, i.ZP)(), _ = a.useRef(null), x = (0, l.Z)(_), T = h ? d.BR.DARK : d.BR.LIGHT;
  return (0, u.x6)(s) ? null : (0, n.jsx)(r.Tooltip, {
    text: C.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: p,
    children: e => (0, n.jsx)(r.Button, {
      ...e,
      buttonRef: _,
      className: E.giftButton,
      color: h ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
      look: r.Button.Looks.FILLED,
      size: r.ButtonSizes.ICON,
      innerClassName: E.giftButtonInner,
      "aria-label": C.Z.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: s.skuId,
          isGift: !0,
          analyticsLocations: I,
          returnRef: t,
          onClose: null != m ? e => {
            e && m()
          } : void 0
        })
      },
      children: g ? (0, n.jsx)(o.e, {
        hovered: x,
        isContentDismissed: !0,
        themeOverride: T,
        boxColors: f
      }) : (0, n.jsx)(r.GiftIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  })
}