"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("618158");

function i(e) {
  let {
    children: t
  } = e, {
    preventIdle: n,
    allowIdle: i
  } = (0, a.usePreventIdle)("popup");
  return l.useEffect(() => (n(), () => i()), [i, n]), (0, s.jsx)(s.Fragment, {
    children: t
  })
}