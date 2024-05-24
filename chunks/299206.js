"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("512722"),
  s = n.n(r),
  a = n("481060"),
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
    showWithoutDeveloperMode: c,
    focusedClassName: E
  } = e, I = o.DeveloperMode.useSetting();
  if (__OVERLAY__ || !(c || I) || !u.SUPPORTS_COPY || null == t) return null;
  let T = "devmode-copy-id-".concat(t);
  return (0, i.jsx)(a.MenuItem, {
    id: T,
    label: n,
    action: function(e) {
      let n = null != d && e.shiftKey ? d : t;
      s()(null != n, "cannot copy null text"), (0, u.copy)(n), null == r || r()
    },
    icon: l.default,
    showIconFirst: _,
    focusedClassName: E
  }, T)
}