"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var i = n("512722"),
  r = n.n(i),
  s = n("481060"),
  o = n("695346"),
  u = n("754424"),
  l = n("572004");

function d(e) {
  let {
    id: t,
    label: n,
    onSuccess: i,
    shiftId: d,
    showIconFirst: c
  } = e, E = o.DeveloperMode.useSetting();
  if (__OVERLAY__ || !E || !l.SUPPORTS_COPY || null == t) return null;
  let T = "devmode-copy-id-".concat(t);
  return (0, a.jsx)(s.MenuItem, {
    id: T,
    label: n,
    action: function(e) {
      let n = null != d && e.shiftKey ? d : t;
      r()(null != n, "cannot copy null text"), (0, l.copy)(n), null == i || i()
    },
    icon: u.default,
    showIconFirst: c
  }, T)
}