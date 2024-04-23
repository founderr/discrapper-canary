"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("47120");
var s = n("470079"),
  l = n("393238");

function a() {
  let {
    ref: e,
    width: t
  } = (0, l.default)(), [n, a] = s.useState();
  return s.useEffect(() => {
    null == n && null != t && a(t)
  }, [n, t]), [e, n]
}