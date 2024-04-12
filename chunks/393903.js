"use strict";
n.r(t), n.d(t, {
  useResizeObserver: function() {
    return r
  }
});
var a = n("470079"),
  l = n("863840"),
  s = n("889711");
let i = {};

function r(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    r = (0, a.useRef)(null),
    o = (0, l.default)(null != t ? t : i),
    u = (0, a.useRef)(null);
  return (0, a.useLayoutEffect)(() => {
    if (!n) return;
    null == u.current && (u.current = (0, s.getResizeObserver)(o.current));
    let t = r.current,
      a = u.current;
    null != t && null != a && (0, s.watch)(o.current, t, e)
  }, [n, e]), (0, a.useEffect)(() => {
    if (!n) return;
    let e = r.current,
      t = u.current,
      a = o.current;
    if (null != e && null != t) return () => {
      (0, s.unwatch)(a, e)
    }
  }, [n, t]), r
}