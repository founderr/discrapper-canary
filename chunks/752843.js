"use strict";
n.r(t), n.d(t, {
  SubscriptionTag: function() {
    return d
  },
  Tag: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var s = n("628028"),
  a = n("220427"),
  l = n("777207"),
  r = n("330711"),
  o = n("381585");
let c = {
  width: 12,
  height: 12
};

function d(e) {
  let {
    type: t
  } = e;
  return (0, i.jsx)(u, {
    icon: "user" === t ? (0, i.jsx)(a.UserIcon, {
      ...c,
      color: "var(--text-positive)"
    }) : (0, i.jsx)(s.ServerIcon, {
      ...c,
      color: "var(--text-brand)"
    }),
    text: "user" === t ? r.default.Messages.Storefront.USER_SUBSCRIPTION : r.default.Messages.Storefront.SERVER_SUBSCRIPTION
  })
}

function u(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, i.jsxs)("div", {
    className: o.container,
    children: [t, (0, i.jsx)(l.Text, {
      color: "interactive-normal",
      variant: "text-sm/medium",
      children: n
    })]
  })
}