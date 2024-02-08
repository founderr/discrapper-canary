"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var o = n("77078"),
  u = n("845579"),
  i = n("662255"),
  a = n("306160");

function l(e) {
  let {
    id: t,
    label: n,
    onSuccess: l,
    shiftId: s,
    showIconFirst: d
  } = e, T = u.DeveloperMode.useSetting();
  if (__OVERLAY__ || !T || !a.SUPPORTS_COPY) return null;
  let E = "devmode-copy-id-".concat(t);
  return (0, r.jsx)(o.MenuItem, {
    id: E,
    label: n,
    action: function(e) {
      let n = null != s && e.shiftKey ? s : t;
      (0, a.copy)(n), null == l || l()
    },
    icon: i.default,
    showIconFirst: d
  }, E)
}