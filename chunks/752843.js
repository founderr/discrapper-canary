"use strict";
n.r(e), n.d(e, {
  SubscriptionTag: function() {
    return d
  },
  Tag: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("628028"),
  l = n("220427"),
  a = n("777207"),
  s = n("330711"),
  o = n("305967");
let u = {
  width: 12,
  height: 12
};

function d(t) {
  let {
    type: e
  } = t;
  return (0, i.jsx)(c, {
    icon: "user" === e ? (0, i.jsx)(l.UserIcon, {
      ...u,
      color: "var(--text-positive)"
    }) : (0, i.jsx)(r.ServerIcon, {
      ...u,
      color: "var(--text-brand)"
    }),
    text: "user" === e ? s.default.Messages.Storefront.USER_SUBSCRIPTION : s.default.Messages.Storefront.SERVER_SUBSCRIPTION
  })
}

function c(t) {
  let {
    icon: e,
    text: n
  } = t;
  return (0, i.jsxs)("div", {
    className: o.container,
    children: [e, (0, i.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-sm/medium",
      children: n
    })]
  })
}