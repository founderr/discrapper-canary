"use strict";
n.r(t), n.d(t, {
  SubscriptionDetails: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var r = n("300036"),
  a = n("229913"),
  s = n("502026"),
  l = n("571883"),
  o = n("792788"),
  c = n("376554");

function d(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: d,
    subscriptionType: u,
    title: f
  } = e, h = null != d ? "url(".concat(d.toString(), ")") : "";
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsxs)("div", {
      className: c.header,
      children: [(0, i.jsx)("div", {
        className: c.background,
        style: {
          backgroundImage: h
        }
      }), (0, i.jsx)("div", {
        className: c.blur
      }), null != u && (0, i.jsx)("div", {
        className: c.tag,
        children: (0, i.jsx)(l.default, {
          tagType: u
        })
      }), (0, i.jsx)("div", {
        className: c.image,
        children: null != d ? (0, i.jsx)("img", {
          src: d.toString(),
          alt: ""
        }) : (0, i.jsx)(r.TicketIcon, {
          color: "white",
          height: 96,
          width: 96
        })
      })]
    }), (0, i.jsx)("div", {
      className: c.scrollContainer,
      children: (0, i.jsxs)(a.ScrollerThin, {
        className: c.scroll,
        fade: !0,
        children: [(0, i.jsx)(s.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: f
        }), (0, i.jsxs)("div", {
          className: c.details,
          children: [(0, i.jsx)(s.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: o.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(s.Text, {
            color: "interactive-active",
            variant: "text-md/normal",
            children: n
          }), null != t && (0, i.jsx)("div", {
            children: t
          })]
        })]
      })
    })]
  })
}