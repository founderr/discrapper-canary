"use strict";
n.d(t, {
  j: function() {
    return a
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(607070),
  o = n(451478);
let a = (e, t) => {
  let n = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
    a = (0, r.e7)([o.Z], () => o.Z.isFocused()),
    [l, u] = i.useState(!1),
    _ = i.useRef(null);
  return i.useEffect(() => {
    clearTimeout(_.current), _.current = null;
    let i = !n && !t,
      r = a && (e || i);
    r && n ? _.current = window.setTimeout(() => {
      u(!0)
    }, 1e3) : u(r)
  }, [a, e, n, t]), i.useEffect(() => () => clearTimeout(_.current), []), {
    canAnimate: l
  }
}