"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var a = n("907002"),
  r = n("65597"),
  l = n("77078"),
  i = n("54239"),
  u = n("206230"),
  o = n("812204"),
  d = n("685665"),
  c = n("21526"),
  _ = n("393414"),
  f = n("49111"),
  I = n("782340"),
  E = n("526380"),
  S = n("34125"),
  m = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, d.default)(), m = (0, r.default)([u.default], () => u.default.useReducedMotion), P = (0, a.useSpring)({
      immediate: m,
      delay: 800,
      from: {
        transform: "translate(0, -100%)"
      },
      to: {
        transform: "translate(0, 0)"
      }
    }), p = () => {
      t(), (0, _.transitionTo)(f.Routes.COLLECTIBLES_SHOP), (0, c.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: o.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      }), (0, i.popLayer)()
    };
    return (0, s.jsxs)(a.animated.div, {
      style: P,
      className: E.container,
      children: [(0, s.jsx)("img", {
        className: E.image,
        src: S,
        alt: ""
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: I.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(l.Clickable, {
            className: E.link,
            onClick: p,
            children: e
          }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
        })
      })]
    })
  }