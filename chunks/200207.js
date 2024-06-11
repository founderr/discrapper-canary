"use strict";
i.r(t), i.d(t, {
  ProductCard: function() {
    return c
  }
});
var n = i("735250");
i("470079");
var l = i("557533"),
  s = i.n(l),
  a = i("789978"),
  r = i("790472"),
  o = i("777207"),
  d = i("145626"),
  u = i("863885");

function c(e) {
  let {
    title: t,
    description: i,
    headerImage: l,
    onDetails: c,
    onPurchase: p,
    PurchaseButton: f,
    availabilityLabel: m
  } = e;
  return (0, n.jsx)(a.FocusRing, {
    children: (0, n.jsxs)("div", {
      className: s()(d.wrapper, u.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != c ? c() : null != p && p()
      },
      children: [(0, n.jsx)("div", {
        className: d.cardHeaderImg,
        style: null != l ? {
          backgroundImage: null != l ? "url(".concat(l.toString(), ")") : void 0
        } : void 0,
        children: null == l && (0, n.jsx)(r.TicketIcon, {
          color: "white",
          height: 80,
          width: 80
        })
      }), (0, n.jsxs)("div", {
        className: d.details,
        children: [(0, n.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: t
        }), null != i && (0, n.jsx)(o.Text, {
          className: d.description,
          color: "text-muted",
          variant: "text-sm/normal",
          children: i
        })]
      }), null != f && (0, n.jsxs)("div", {
        className: d.footer,
        children: [(0, n.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: m
        }), (0, n.jsx)(f, {
          onClick: e => {
            e.stopPropagation(), null == p || p()
          }
        })]
      })]
    })
  })
}