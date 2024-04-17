"use strict";
n.r(t), n.d(t, {
  CardDetails: function() {
    return u
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("789978"),
  s = n("727075"),
  a = n("349361"),
  o = n("777207"),
  d = n("330711"),
  c = n("960016");

function u(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: u,
    title: f,
    onClose: h,
    tag: m,
    FallbackIcon: p
  } = e, S = r.useRef(null), [g, x] = r.useState(!0), v = null != u ? {
    "--custom-background-url": "url(".concat(u.toString(), ")")
  } : void 0, C = () => {
    var e;
    (null === (e = S.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? x(!1) : x(!0)
  };
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsxs)("div", {
      className: c.header,
      children: [(0, i.jsx)("div", {
        className: c.headerBackground,
        style: v
      }), (0, i.jsxs)("div", {
        className: c.headerTop,
        children: [(0, i.jsx)("div", {
          children: m
        }), (0, i.jsx)(l.FocusRing, {
          children: (0, i.jsx)("button", {
            onClick: h,
            className: c.closeBtn,
            type: "button",
            children: (0, i.jsx)(s.CloseSmallIcon, {
              height: 24,
              width: 24,
              color: "var(--header-primary)"
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: c.headerImage,
        children: null != u ? (0, i.jsx)("img", {
          src: u.toString(),
          alt: ""
        }) : (0, i.jsx)(p, {
          color: "var(--text-muted)",
          height: 96,
          width: 96
        })
      })]
    }), (0, i.jsxs)(a.AdvancedScrollerThin, {
      className: c.scroll,
      fade: !0,
      ref: e => {
        null != e && (S.current = e, C())
      },
      onScroll: C,
      children: [(0, i.jsx)("br", {}), (0, i.jsxs)("div", {
        className: c.scrollContent,
        children: [(0, i.jsx)(o.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: f
        }), (null != n && "" !== n || null != t) && (0, i.jsxs)("div", {
          className: c.details,
          children: [(0, i.jsx)(o.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: d.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(o.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            className: c.description,
            children: n
          }), null != t && (0, i.jsxs)("div", {
            className: c.benefits,
            children: [(0, i.jsx)(o.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: d.default.Messages.Storefront.BENEFITS_TITLE
            }), t]
          })]
        })]
      })]
    }), (0, i.jsx)("div", {
      className: c.containerScrollGradient,
      "data-shown": g
    })]
  })
}