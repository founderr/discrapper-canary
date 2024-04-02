"use strict";
n.r(t), n.d(t, {
  CardDetails: function() {
    return f
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  r = n("789978"),
  s = n("727075"),
  a = n("790472"),
  o = n("349361"),
  c = n("777207"),
  d = n("330711"),
  u = n("960016");

function f(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: f,
    title: m,
    onClose: h,
    tag: x
  } = e, v = l.useRef(null), [p, g] = l.useState(!0), j = null != f ? {
    "--custom-background-url": "url(".concat(f.toString(), ")")
  } : void 0, C = () => {
    var e;
    (null === (e = v.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? g(!1) : g(!0)
  };
  return (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsxs)("div", {
      className: u.header,
      children: [(0, i.jsx)("div", {
        className: u.headerBackground,
        style: j
      }), (0, i.jsxs)("div", {
        className: u.headerTop,
        children: [(0, i.jsx)("div", {
          children: x
        }), (0, i.jsx)(r.FocusRing, {
          children: (0, i.jsx)("button", {
            onClick: h,
            className: u.closeBtn,
            type: "button",
            children: (0, i.jsx)(s.CloseSmallIcon, {
              height: 24,
              width: 24,
              color: "var(--white)"
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: u.headerImage,
        children: null != f ? (0, i.jsx)("img", {
          src: f.toString(),
          alt: ""
        }) : (0, i.jsx)(a.TicketIcon, {
          color: "white",
          height: 96,
          width: 96
        })
      })]
    }), (0, i.jsxs)(o.AdvancedScrollerThin, {
      className: u.scroll,
      fade: !0,
      ref: e => {
        null != e && (v.current = e, C())
      },
      onScroll: C,
      children: [(0, i.jsx)("br", {}), (0, i.jsxs)("div", {
        className: u.scrollContent,
        children: [(0, i.jsx)(c.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: m
        }), (null != n && "" !== n || null != t) && (0, i.jsxs)("div", {
          className: u.details,
          children: [(0, i.jsx)(c.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: d.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(c.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: n
          }), null != t && (0, i.jsxs)("div", {
            className: u.benefits,
            children: [(0, i.jsx)(c.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: d.default.Messages.Storefront.BENEFITS_TITLE
            }), t]
          })]
        })]
      })]
    }), (0, i.jsx)("div", {
      className: u.containerScrollGradient,
      "data-shown": p
    })]
  })
}