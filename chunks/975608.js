"use strict";
n.r(t), n("411104");
var u = n("470079"),
  i = n("960048");
t.default = (e, t, n, l, s) => {
  let a = (0, u.useRef)(!1);
  (0, u.useEffect)(() => {
    if (t && !a.current) {
      a.current = !0;
      let t = setTimeout(() => {
        let t = Error("".concat(e, " is taking too long to load."));
        i.default.setExtra({
          loadingState: l,
          loadingTimeSeconds: n
        }), i.default.captureException(t, {
          ...s,
          tags: {
            ...null == s ? void 0 : s.tags
          }
        })
      }, 1e3 * n);
      return () => {
        clearTimeout(t)
      }
    }
  }, [t, n])
}