"use strict";
n.r(t);
var i = n("735250");
n("470079");
var l = n("393586"),
  s = n("481060"),
  a = n("37234"),
  r = n("100527"),
  u = n("906732"),
  o = n("703656"),
  c = n("335131"),
  d = n("981631"),
  m = n("689938"),
  p = n("711958");
t.default = e => {
  let {
    onClose: t
  } = e, {
    analyticsLocations: n
  } = (0, u.default)(), f = () => {
    t(), (0, o.transitionTo)(d.Routes.COLLECTIBLES_SHOP), (0, c.openCollectiblesShop)({
      openInLayer: !1,
      analyticsSource: r.default.PREMIUM_PAYMENT_MODAL,
      analyticsLocations: n
    }), (0, a.popLayer)()
  };
  return (0, i.jsxs)("div", {
    className: p.container,
    children: [(0, i.jsx)("div", {
      className: p.iconBackground,
      children: (0, i.jsx)(l.ShopIcon, {
        width: 20,
        height: 20,
        color: s.tokens.colors.WHITE
      })
    }), (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      children: m.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
        checkItOut: e => (0, i.jsx)(s.Clickable, {
          className: p.link,
          onClick: f,
          children: e
        })
      })
    })]
  })
}