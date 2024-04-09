"use strict";
a.r(t);
var s = a("470079"),
  r = a("442837"),
  l = a("335131"),
  i = a("946134");
t.default = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = (0, r.useStateFromStores)([i.default], () => i.default.getIsProductNew(e.skuId)),
    o = s.useRef(!1);
  return s.useEffect(() => {
    !o.current && t && ((0, l.productDetailsClosed)(e), o.current = !0)
  }, [t, e]), a
}