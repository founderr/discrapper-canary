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
  c = n("330711"),
  d = n("960016");

function u(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: u,
    title: f,
    onClose: m,
    tag: h,
    FallbackIcon: p
  } = e, S = r.useRef(null), [v, g] = r.useState(!0), x = null != u ? {
    "--custom-background-url": "url(".concat(u.toString(), ")")
  } : void 0, T = () => {
    var e;
    (null === (e = S.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? g(!1) : g(!0)
  };
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsxs)("div", {
      className: d.header,
      children: [(0, i.jsx)("div", {
        className: d.headerBackground,
        style: x
      }), (0, i.jsxs)("div", {
        className: d.headerTop,
        children: [(0, i.jsx)("div", {
          children: h
        }), (0, i.jsx)(l.FocusRing, {
          children: (0, i.jsx)("button", {
            onClick: m,
            className: d.closeBtn,
            type: "button",
            children: (0, i.jsx)(s.CloseSmallIcon, {
              height: 24,
              width: 24,
              color: "var(--header-primary)"
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: d.headerImage,
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
      className: d.scroll,
      fade: !0,
      ref: e => {
        null != e && (S.current = e, T())
      },
      onScroll: T,
      children: [(0, i.jsx)("br", {}), (0, i.jsxs)("div", {
        className: d.scrollContent,
        children: [(0, i.jsx)(o.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: f
        }), (null != n && "" !== n || null != t) && (0, i.jsxs)("div", {
          className: d.details,
          children: [(0, i.jsx)(o.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: c.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(o.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            className: d.description,
            children: n
          }), null != t && (0, i.jsxs)("div", {
            className: d.benefits,
            children: [(0, i.jsx)(o.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: c.default.Messages.Storefront.BENEFITS_TITLE
            }), t]
          })]
        })]
      })]
    }), (0, i.jsx)("div", {
      className: d.containerScrollGradient,
      "data-shown": v
    })]
  })
}