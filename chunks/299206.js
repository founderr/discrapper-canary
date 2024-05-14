"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("735250");
n("470079");
var a = n("512722"),
  i = n.n(a),
  s = n("481060"),
  o = n("695346"),
  u = n("754424"),
  l = n("572004");

function d(e) {
  let {
    id: t,
    label: n,
    onSuccess: a,
    shiftId: d,
    showIconFirst: E,
    showWithoutDeveloperMode: c
  } = e, f = o.DeveloperMode.useSetting();
  if (__OVERLAY__ || !(c || f) || !l.SUPPORTS_COPY || null == t) return null;
  let T = "devmode-copy-id-".concat(t);
  return (0, r.jsx)(s.MenuItem, {
    id: T,
    label: n,
    action: function(e) {
      let n = null != d && e.shiftKey ? d : t;
      i()(null != n, "cannot copy null text"), (0, l.copy)(n), null == a || a()
    },
    icon: u.default,
    showIconFirst: E
  }, T)
}