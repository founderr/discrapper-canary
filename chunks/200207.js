"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var s = n("557533"),
  l = n.n(s),
  a = n("789978"),
  r = n("368072"),
  o = n("777207"),
  c = n("431674"),
  d = n("956169");

function u(e) {
  let {
    title: t,
    description: n,
    headerImage: s,
    onDetails: u,
    onPurchase: f,
    PurchaseButton: h,
    availabilityLabel: m
  } = e;
  return (0, i.jsx)(a.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: l()(c.wrapper, d.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != u ? u() : null != f && f()
      },
      children: [(0, i.jsx)("div", {
        className: c.cardHeaderImg,
        style: null != s ? {
          backgroundImage: null != s ? "url(".concat(s.toString(), ")") : void 0
        } : void 0,
        children: null == s && (0, i.jsx)(r.BadgeIcon, {
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
      }), null != h && (0, i.jsxs)("div", {
        className: c.footer,
        children: [(0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: m
        }), (0, i.jsx)(h, {
          onClick: e => {
            e.stopPropagation(), null == f || f()
          }
        })]
      })]
    })
  })
}