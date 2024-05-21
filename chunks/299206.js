"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("512722"),
  a = n.n(r),
  s = n("481060"),
  o = n("695346"),
  l = n("754424"),
  u = n("572004");

function d(e) {
  let {
    id: t,
    label: n,
    onSuccess: r,
    shiftId: d,
    showIconFirst: _,
    showWithoutDeveloperMode: c
  } = e, E = o.DeveloperMode.useSetting();
  if (__OVERLAY__ || !(c || E) || !u.SUPPORTS_COPY || null == t) return null;
  let I = "devmode-copy-id-".concat(t);
  return (0, i.jsx)(s.MenuItem, {
    id: I,
    label: n,
    action: function(e) {
      let n = null != d && e.shiftKey ? d : t;
      a()(null != n, "cannot copy null text"), (0, u.copy)(n), null == r || r()
    },
    icon: l.default,
    showIconFirst: _
  }, I)
}