"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120), n(653041);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(857192),
  a = n(517100),
  l = n(594174),
  u = n(153850),
  _ = n(231338),
  c = n(75798);

function d() {
  var e;
  let t = (0, r.e7)([o.default], () => o.default.isIdleStatusIndicatorEnabled),
    n = (0, r.e7)([l.default], () => {
      var e, t;
      return null !== (t = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
    }),
    [d, E] = (0, r.Wu)([a.Z], () => [a.Z.isIdle(), a.Z.isAFK()]),
    I = [];
  return !d && !E && I.push("ACTIVE"), d && I.push("IDLE"), E && I.push("AFK"), n && t ? (0, i.jsx)(u.ZP, {
    children: (0, i.jsxs)("div", {
      className: c.container,
      children: [(0, i.jsxs)("div", {
        className: c.status,
        children: [(0, i.jsx)(s.Status, {
          status: I.includes("ACTIVE") ? _.Sk.ONLINE : _.Sk.IDLE,
          className: c.statusIndicator
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: "IDLE STATUS:"
        }), (0, i.jsx)("div", {
          className: c.statusText,
          children: (0, i.jsx)(s.Text, {
            variant: "text-md/bold",
            children: I.join(" + ")
          })
        })]
      }), d && (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        children: ["Idle since:", " ", new Date(null !== (e = a.Z.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
          year: "numeric",
          day: "numeric",
          month: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })]
      })]
    })
  }) : null
}