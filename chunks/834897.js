"use strict";
n.r(e), n.d(e, {
  default: function() {
    return l
  }
}), n("222007");
var i = n("884691");

function l(t) {
  let [e, n] = (0, i.useState)(() => window.matchMedia(t).matches);
  return (0, i.useEffect)(() => {
    let e = window.matchMedia(t),
      i = t => {
        n(null == t ? void 0 : t.matches)
      };
    return i(e), e.addListener(i), () => e.removeListener(i)
  }, [t]), e
}