"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("557533"),
  l = n.n(r),
  s = n("789978"),
  a = n("790472"),
  o = n("777207"),
  u = n("145626"),
  d = n("863885");

function c(e) {
  let {
    title: t,
    description: n,
    headerImage: r,
    onDetails: c,
    onPurchase: f,
    PurchaseButton: p,
    availabilityLabel: m
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: l()(u.wrapper, d.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != c ? c() : null != f && f()
      },
      children: [(0, i.jsx)("div", {
        className: u.cardHeaderImg,
        style: null != r ? {
          backgroundImage: null != r ? "url(".concat(r.toString(), ")") : void 0
        } : void 0,
        children: null == r && (0, i.jsx)(a.TicketIcon, {
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
      }), null != p && (0, i.jsxs)("div", {
        className: u.footer,
        children: [(0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: m
        }), (0, i.jsx)(p, {
          onClick: e => {
            e.stopPropagation(), null == f || f()
          }
        })]
      })]
    })
  })
}