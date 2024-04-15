"use strict";
n.r(t);
var a = n("470079");
t.default = () => {
  let e = a.useRef(!0);
  return a.useEffect(() => () => {
    e.current = !1
  }, []), a.useCallback(() => e.current, [])
}