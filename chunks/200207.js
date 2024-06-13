"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var l = n("557533"),
  a = n.n(l),
  r = n("789978"),
  s = n("790472"),
  o = n("777207"),
  u = n("145626"),
  d = n("863885");

function c(e) {
  let {
    title: t,
    description: n,
    headerImage: l,
    onDetails: c,
    onPurchase: p,
    PurchaseButton: f,
    availabilityLabel: S
  } = e;
  return (0, i.jsx)(r.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: a()(u.wrapper, d.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != c ? c() : null != p && p()
      },
      children: [(0, i.jsx)("div", {
        className: u.cardHeaderImg,
        style: null != l ? {
          backgroundImage: null != l ? "url(".concat(l.toString(), ")") : void 0
        } : void 0,
        children: null == l && (0, i.jsx)(s.TicketIcon, {
          color: "white",
          height: 80,
          width: 80
        })
      }), (0, i.jsxs)("div", {
        className: u.details,
        children: [(0, i.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: t
        }), null != n && (0, i.jsx)(o.Text, {
          className: u.description,
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), null != f && (0, i.jsxs)("div", {
        className: u.footer,
        children: [(0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: S
        }), (0, i.jsx)(f, {
          onClick: e => {
            e.stopPropagation(), null == p || p()
          }
        })]
      })]
    })
  })
}