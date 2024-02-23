"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var r = n("15542"),
  a = n("733527"),
  s = n("700052"),
  l = n("502026"),
  o = n("792788"),
  c = n("370621");

function d(e) {
  let {
    description: t,
    headerBackground: n,
    imgSrc: d,
    onDetails: u,
    purchaseButton: f,
    title: h
  } = e;
  return (0, i.jsxs)("div", {
    className: c.productCard,
    children: [(0, i.jsx)("div", {
      className: c.cardHeaderImg,
      style: null != n || null != d ? {
        backgroundImage: (null != n ? "url(".concat(n.toString(), ")") : void 0) || (null != d ? "url(".concat(d.toString(), ")") : void 0)
      } : void 0,
      children: null != d ? (0, i.jsx)("img", {
        src: d.toString(),
        alt: ""
      }) : (0, i.jsx)(s.BadgeIcon, {
        color: "white",
        height: 128,
        width: 128
      })
    }), (0, i.jsxs)("div", {
      className: c.details,
      children: [(0, i.jsx)(l.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: h
      }), (0, i.jsx)(l.Text, {
        className: c.description,
        color: "text-muted",
        variant: "text-sm/normal",
        children: t
      })]
    }), f && (0, i.jsxs)("div", {
      className: c.footer,
      children: [null != u ? (0, i.jsx)(r.FocusRing, {
        children: (0, i.jsx)("button", {
          className: c.button,
          onClick: u,
          type: "button",
          children: (0, i.jsxs)(l.Text, {
            className: c.cta,
            color: "text-link",
            variant: "text-sm/semibold",
            children: [o.default.Messages.Storefront.SEE_MORE_DETAILS, (0, i.jsx)(a.ArrowSmallRightIcon, {
              color: "var(--blue-345)",
              height: 16,
              width: 16
            })]
          })
        })
      }) : (0, i.jsx)("div", {}), f]
    })]
  })
}