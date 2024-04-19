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
var r = n("628028"),
  l = n("220427"),
  s = n("777207"),
  a = n("330711"),
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
    icon: "user" === t ? (0, i.jsx)(l.UserIcon, {
      ...c,
      color: "var(--text-positive)"
    }) : (0, i.jsx)(r.ServerIcon, {
      ...c,
      color: "var(--text-brand)"
    }),
    text: "user" === t ? a.default.Messages.Storefront.USER_SUBSCRIPTION : a.default.Messages.Storefront.SERVER_SUBSCRIPTION
  })
}

function u(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, i.jsxs)("div", {
    className: o.container,
    children: [t, (0, i.jsx)(s.Text, {
      color: "interactive-normal",
      variant: "text-sm/medium",
      children: n
    })]
  })
}