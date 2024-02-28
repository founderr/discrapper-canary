"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var i = n("627445"),
  l = n.n(i),
  r = n("77078"),
  a = n("845579"),
  u = n("662255"),
  o = n("306160");

function c(e) {
  let {
    id: t,
    label: n,
    onSuccess: i,
    shiftId: c,
    showIconFirst: d
  } = e, f = a.DeveloperMode.useSetting();
  if (__OVERLAY__ || !f || !o.SUPPORTS_COPY || null == t) return null;
  let h = "devmode-copy-id-".concat(t);
  return (0, s.jsx)(r.MenuItem, {
    id: h,
    label: n,
    action: function(e) {
      let n = null != c && e.shiftKey ? c : t;
      l(null != n, "cannot copy null text"), (0, o.copy)(n), null == i || i()
    },
    icon: u.default,
    showIconFirst: d
  }, h)
}