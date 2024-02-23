"use strict";
n.r(t), n.d(t, {
  SubscriptionBenefits: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var r = n("15542"),
  a = n("733527"),
  s = n("502026"),
  l = n("792788"),
  o = n("145852");

function c(e) {
  let {
    benefits: t,
    includeDescription: n = !1,
    maxBenefits: c = 3,
    onDetails: u
  } = e, d = Number.isFinite(c) ? t.slice(0, c) : t;
  return (0, i.jsxs)("div", {
    className: o.container,
    children: [(0, i.jsxs)("div", {
      className: o.list,
      children: [(0, i.jsx)(s.Text, {
        color: "header-secondary",
        variant: "eyebrow",
        children: l.default.Messages.Storefront.BENEFITS_TITLE
      }), d.map(e => (0, i.jsxs)("div", {
        className: o.benefit,
        children: [(0, i.jsx)("div", {
          children: e.icon
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(s.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: e.title
          }), n && (0, i.jsx)(s.Text, {
            color: "interactive-normal",
            variant: "text-sm/medium",
            children: e.description
          })]
        })]
      }, e.id))]
    }), null != u && (0, i.jsx)(r.FocusRing, {
      children: (0, i.jsx)("button", {
        className: o.button,
        onClick: u,
        type: "button",
        children: (0, i.jsxs)(s.Text, {
          className: o.details,
          color: "text-link",
          variant: "text-sm/semibold",
          children: [l.default.Messages.Storefront.SEE_FULL_BENEFITS, (0, i.jsx)(a.ArrowSmallRightIcon, {
            color: "var(--blue-345)",
            height: 16,
            width: 16
          })]
        })
      })
    })]
  })
}