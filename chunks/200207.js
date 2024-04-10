"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("557533"),
  s = n.n(r),
  a = n("789978"),
  l = n("790472"),
  o = n("777207"),
  c = n("431674"),
  d = n("956169");

function u(e) {
  let {
    title: t,
    description: n,
    headerImage: r,
    onDetails: u,
    onPurchase: f,
    PurchaseButton: h,
    availabilityLabel: m
  } = e;
  return (0, i.jsx)(a.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: s()(c.wrapper, d.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != u ? u() : null != f && f()
      },
      children: [(0, i.jsx)("div", {
        className: c.cardHeaderImg,
        style: null != r ? {
          backgroundImage: null != r ? "url(".concat(r.toString(), ")") : void 0
        } : void 0,
        children: null == r && (0, i.jsx)(l.TicketIcon, {
          color: "white",
          height: 80,
          width: 80
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