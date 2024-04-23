"use strict";
n.r(t), n.d(t, {
  CardDetails: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("789978"),
  l = n("727075"),
  s = n("777207"),
  a = n("541822"),
  o = n("330711"),
  c = n("960016");

function d(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: d,
    title: u,
    onClose: f,
    tag: m,
    FallbackIcon: p
  } = e, h = null != d ? {
    "--custom-background-url": "url(".concat(d.toString(), ")")
  } : void 0;
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsxs)("div", {
      className: c.header,
      children: [(0, i.jsx)("div", {
        className: c.headerBackground,
        style: h
      }), (0, i.jsxs)("div", {
        className: c.headerTop,
        children: [(0, i.jsx)("div", {
          children: m
        }), (0, i.jsx)(r.FocusRing, {
          children: (0, i.jsx)("button", {
            onClick: f,
            className: c.closeBtn,
            type: "button",
            children: (0, i.jsx)(l.CloseSmallIcon, {
              height: 24,
              width: 24,
              color: "var(--header-primary)"
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: c.headerImage,
        children: null != d ? (0, i.jsx)("img", {
          src: d.toString(),
          alt: ""
        }) : (0, i.jsx)(p, {
          color: "var(--text-muted)",
          height: 96,
          width: 96
        })
      })]
    }), (0, i.jsxs)(a.default, {
      className: c.scroll,
      children: [(0, i.jsx)("br", {}), (0, i.jsxs)("div", {
        className: c.scrollContent,
        children: [(0, i.jsx)(s.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: u
        }), (null != n && "" !== n || null != t) && (0, i.jsxs)("div", {
          className: c.details,
          children: [(0, i.jsx)(s.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: o.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(s.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            className: c.description,
            children: n
          }), null != t && (0, i.jsxs)("div", {
            className: c.benefits,
            children: [(0, i.jsx)(s.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: o.default.Messages.Storefront.BENEFITS_TITLE
            }), t]
          })]
        })]
      })]
    })]
  })
}