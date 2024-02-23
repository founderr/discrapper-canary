"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
});
var s = n("37983"),
  u = n("884691"),
  o = n("550410");

function i(t) {
  let {
    children: e
  } = t, {
    preventIdle: n,
    allowIdle: i
  } = (0, o.usePreventIdle)("popup");
  return u.useEffect(() => (n(), () => i()), [i, n]), (0, s.jsx)(s.Fragment, {
    children: e
  })
}