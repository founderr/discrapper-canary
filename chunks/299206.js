"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  s = n.n(r),
  o = n(481060),
  a = n(695346),
  l = n(572004);

function u(e) {
  let {
    id: t,
    label: n,
    onSuccess: r,
    shiftId: u,
    showIconFirst: _,
    showWithoutDeveloperMode: c,
    focusedClassName: d
  } = e, E = a.Sb.useSetting();
  if (__OVERLAY__ || !(c || E) || !l.wS || null == t) return null;
  let I = "devmode-copy-id-".concat(t);
  return (0, i.jsx)(o.MenuItem, {
    id: I,
    label: n,
    action: function(e) {
      let n = null != u && e.shiftKey ? u : t;
      s()(null != n, "cannot copy null text"), (0, l.JG)(n), null == r || r()
    },
    icon: o.IdIcon,
    showIconFirst: _,
    focusedClassName: d
  }, I)
}