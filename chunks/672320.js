"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var s = n("793030"),
  l = n("286758");

function i(e) {
  var t, n, i, r;
  let {
    quest: o
  } = e;
  return (0, a.jsxs)("div", {
    className: l.container,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: null == o ? void 0 : null === (t = o.config) || void 0 === t ? void 0 : t.messages.gamePublisher
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: null == o ? void 0 : null === (n = o.config) || void 0 === n ? void 0 : n.messages.gameTitle
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: null == o ? void 0 : null === (i = o.config) || void 0 === i ? void 0 : i.expiresAt
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: "enrolled? ".concat((null == o ? void 0 : null === (r = o.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null)
    })]
  })
}