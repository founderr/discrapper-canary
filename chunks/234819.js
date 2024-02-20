"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007"), n("424973");
var i = n("37983");
n("884691");
var a = n("446674"),
  l = n("77078"),
  s = n("313915"),
  r = n("603699"),
  o = n("697218"),
  u = n("983782"),
  d = n("843455"),
  c = n("619774");

function f() {
  var e;
  let t = (0, a.useStateFromStores)([s.default], () => s.default.isIdleStatusIndicatorEnabled),
    n = (0, a.useStateFromStores)([o.default], () => {
      var e, t;
      return null !== (t = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
    }),
    [f, E] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.isIdle(), r.default.isAFK()]),
    h = [];
  return !f && !E && h.push("ACTIVE"), f && h.push("IDLE"), E && h.push("AFK"), n && t ? (0, i.jsx)(u.default, {
    children: (0, i.jsxs)("div", {
      className: c.container,
      children: [(0, i.jsxs)("div", {
        className: c.status,
        children: [(0, i.jsx)(l.Status, {
          status: h.includes("ACTIVE") ? d.StatusTypes.ONLINE : d.StatusTypes.IDLE,
          className: c.statusIndicator
        }), (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          children: "IDLE STATUS:"
        }), (0, i.jsx)("div", {
          className: c.statusText,
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/bold",
            children: h.join(" + ")
          })
        })]
      }), f && (0, i.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Idle since:", " ", new Date(null !== (e = r.default.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
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