"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i, r, l = n("37983"),
  a = n("884691"),
  o = n("382133"),
  s = n("333693"),
  u = n("618991"),
  c = n("782340"),
  d = n("843963");
let f = {
  width: 20,
  height: 20,
  color: "white"
};

function h(e) {
  let {
    app: t
  } = e, [n, i] = a.useState(0);
  return (0, l.jsx)("div", {
    className: d.wrapper,
    children: (0, l.jsxs)("div", {
      className: d.tabs,
      children: [(0, l.jsx)(o.default, {
        icon: (0, l.jsx)(s.BadgeIcon, {
          ...f
        }),
        title: c.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
        body: c.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
          appName: t.name
        }),
        disabled: !1,
        selected: 0 === n,
        onClick: () => {
          i(0)
        }
      }), (0, l.jsx)(o.default, {
        icon: (0, l.jsx)(u.TicketIcon, {
          ...f
        }),
        title: c.default.Messages.STOREFRONT_APP_PRODUCTS,
        body: c.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
          appName: t.name
        }),
        disabled: !0,
        selected: 1 === n,
        onClick: () => {
          i(1)
        }
      })]
    })
  })
}(r = i || (i = {}))[r.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", r[r.PRODUCTS = 1] = "PRODUCTS"