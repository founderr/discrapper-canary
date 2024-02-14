"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("550410");

function i(e) {
  let {
    children: t
  } = e, {
    preventIdle: n,
    allowIdle: i
  } = (0, s.usePreventIdle)("popup");
  return a.useEffect(() => (n(), () => i()), [i, n]), (0, l.jsx)(l.Fragment, {
    children: t
  })
}