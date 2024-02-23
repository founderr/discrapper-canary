"use strict";
n.r(t), n.d(t, {
  SubscriptionCard: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("300036"),
  a = n("502026"),
  s = n("571883"),
  l = n("484687");

function o(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: o,
    purchaseButton: c,
    subscriptionType: d,
    title: u
  } = e;
  return (0, i.jsxs)("div", {
    className: l.container,
    children: [(0, i.jsxs)("div", {
      className: l.card,
      children: [null != d && (0, i.jsx)(s.default, {
        tagType: d
      }), (0, i.jsxs)("div", {
        className: l.body,
        children: [(0, i.jsx)(a.Text, {
          tag: "div",
          variant: "heading-lg/semibold",
          children: u
        }), (0, i.jsx)("div", {
          className: l.image,
          children: null != o ? (0, i.jsx)("img", {
            src: o.toString(),
            alt: ""
          }) : (0, i.jsx)(r.TicketIcon, {
            color: "white",
            height: 48,
            width: 48
          })
        }), c, (0, i.jsx)(a.Text, {
          className: l.description,
          color: "text-normal",
          variant: "text-sm/medium",
          children: n
        })]
      })]
    }), null != t && (0, i.jsx)("div", {
      className: l.benefits,
      children: t
    })]
  })
}