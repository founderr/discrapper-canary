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
  i = n("206230"),
  u = n("812204"),
  o = n("685665"),
  d = n("21526"),
  c = n("393414"),
  _ = n("49111"),
  f = n("782340"),
  I = n("526380"),
  E = n("34125"),
  m = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, o.default)(), m = (0, r.default)([i.default], () => i.default.useReducedMotion), S = (0, a.useSpring)({
      immediate: m,
      delay: 800,
      from: {
        transform: "translate(0, -100%)"
      },
      to: {
        transform: "translate(0, 0)"
      }
    }), P = () => {
      t(), (0, c.transitionTo)(_.Routes.COLLECTIBLES_SHOP), (0, d.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      })
    };
    return (0, s.jsxs)(a.animated.div, {
      style: S,
      className: I.container,
      children: [(0, s.jsx)("img", {
        className: I.image,
        src: E,
        alt: ""
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: f.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(l.Clickable, {
            className: I.link,
            onClick: P,
            children: e
          }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
        })
      })]
    })
  }