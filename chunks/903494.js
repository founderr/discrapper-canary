"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var r = n("422244"),
  a = n("77078"),
  l = n("54239"),
  i = n("812204"),
  u = n("685665"),
  c = n("393414"),
  o = n("21526"),
  d = n("49111"),
  f = n("782340"),
  m = n("24171"),
  _ = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, u.default)(), _ = () => {
      t(), (0, c.transitionTo)(d.Routes.COLLECTIBLES_SHOP), (0, o.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: i.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      }), (0, l.popLayer)()
    };
    return (0, s.jsxs)("div", {
      className: m.container,
      children: [(0, s.jsx)("div", {
        className: m.iconBackground,
        children: (0, s.jsx)(r.ShopIcon, {
          width: 20,
          height: 20,
          color: a.tokens.colors.WHITE
        })
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: f.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(a.Clickable, {
            className: m.link,
            onClick: _,
            children: e
          })
        })
      })]
    })
  }