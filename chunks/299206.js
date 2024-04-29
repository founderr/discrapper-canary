"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var i = n("512722"),
  l = n.n(i),
  r = n("481060"),
  a = n("695346"),
  u = n("754424"),
  o = n("572004");

function c(e) {
  let {
    id: t,
    label: n,
    onSuccess: i,
    shiftId: c,
    showIconFirst: d,
    showWithoutDeveloperMode: f
  } = e, p = a.DeveloperMode.useSetting();
  if (__OVERLAY__ || !(f || p) || !o.SUPPORTS_COPY || null == t) return null;
  let I = "devmode-copy-id-".concat(t);
  return (0, s.jsx)(r.MenuItem, {
    id: I,
    label: n,
    action: function(e) {
      let n = null != c && e.shiftKey ? c : t;
      l()(null != n, "cannot copy null text"), (0, o.copy)(n), null == i || i()
    },
    icon: u.default,
    showIconFirst: d
  }, I)
}