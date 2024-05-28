"use strict";
n.r(t), n.d(t, {
  CardDetails: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("777207"),
  l = n("541822"),
  a = n("330711"),
  s = n("878106");

function o(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: o,
    title: u,
    tag: d,
    FallbackIcon: c
  } = e, f = null != o ? {
    "--custom-background-url": "url(".concat(o.toString(), ")")
  } : void 0;
  return (0, i.jsxs)("div", {
    className: s.container,
    children: [(0, i.jsxs)("div", {
      className: s.header,
      children: [(0, i.jsx)("div", {
        className: s.headerBackground,
        style: f
      }), (0, i.jsx)("div", {
        className: s.headerTop,
        children: (0, i.jsx)("div", {
          children: d
        })
      }), (0, i.jsx)("div", {
        className: s.headerImage,
        children: null != o ? (0, i.jsx)("img", {
          src: o.toString(),
          alt: ""
        }) : (0, i.jsx)(c, {
          color: "var(--text-muted)",
          height: 96,
          width: 96
        })
      })]
    }), (0, i.jsxs)(l.default, {
      className: s.scroll,
      children: [(0, i.jsx)("br", {}), (0, i.jsxs)("div", {
        className: s.scrollContent,
        children: [(0, i.jsx)(r.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: u
        }), (null != n && "" !== n || null != t) && (0, i.jsxs)("div", {
          className: s.details,
          children: [(0, i.jsx)(r.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: a.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(r.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            className: s.description,
            children: n
          }), null != t && (0, i.jsxs)("div", {
            className: s.benefits,
            children: [(0, i.jsx)(r.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: a.default.Messages.Storefront.BENEFITS_TITLE
            }), t]
          })]
        })]
      })]
    })]
  })
}