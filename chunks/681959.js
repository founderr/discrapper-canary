"use strict";
n.r(t), n.d(t, {
  ProductDetails: function() {
    return l
  }
});
var i = n("37983");
n("884691");
var r = n("502026"),
  a = n("792788"),
  s = n("562235");

function l(e) {
  let {
    description: t,
    headerImage: n,
    imgSrc: l,
    title: o
  } = e, c = null != n ? "url(".concat(n.toString(), ")") : "";
  return (0, i.jsxs)("div", {
    className: s.container,
    children: [(0, i.jsxs)("div", {
      className: s.header,
      children: [(0, i.jsx)("div", {
        className: s.background,
        style: {
          backgroundImage: c
        }
      }), (0, i.jsx)("div", {
        className: s.blur
      }), null != l && (0, i.jsx)("div", {
        className: s.image,
        children: (0, i.jsx)("img", {
          src: l.toString(),
          alt: ""
        })
      })]
    }), (0, i.jsxs)("div", {
      className: s.content,
      children: [(0, i.jsx)(r.Text, {
        color: "header-primary",
        tag: "div",
        variant: "heading-xl/semibold",
        children: o
      }), null != t && "" !== t && (0, i.jsxs)("div", {
        className: s.details,
        children: [(0, i.jsx)(r.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-lg/semibold",
          children: a.default.Messages.Storefront.PRODUCT_DETAILS
        }), (0, i.jsx)(r.Text, {
          color: "interactive-active",
          variant: "text-md/normal",
          children: t
        })]
      })]
    })]
  })
}