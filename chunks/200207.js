"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var l = n("557533"),
  r = n.n(l),
  s = n("789978"),
  a = n("368072"),
  o = n("777207"),
  c = n("431674"),
  d = n("956169");

function u(e) {
  let {
    title: t,
    description: n,
    headerImage: l,
    onDetails: u,
    onPurchase: f,
    PurchaseButton: m,
    availabilityLabel: h
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: r()(c.wrapper, d.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != u ? u() : null != f && f()
      },
      children: [(0, i.jsx)("div", {
        className: c.cardHeaderImg,
        style: null != l ? {
          backgroundImage: null != l ? "url(".concat(l.toString(), ")") : void 0
        } : void 0,
        children: null == l && (0, i.jsx)(a.BadgeIcon, {
          color: "white",
          height: 128,
          width: 128
        })
      }), (0, i.jsxs)("div", {
        className: c.details,
        children: [(0, i.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: t
        }), null != n && (0, i.jsx)(o.Text, {
          className: c.description,
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), null != m && (0, i.jsxs)("div", {
        className: c.footer,
        children: [(0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: h
        }), (0, i.jsx)(m, {
          onClick: e => {
            e.stopPropagation(), null == f || f()
          }
        })]
      })]
    })
  })
}