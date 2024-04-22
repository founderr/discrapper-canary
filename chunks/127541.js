"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
}), a("47120");
var n = a("470079");

function s(e) {
  let [t, a] = n.useState(0), s = n.useCallback(() => {
    let t = window.innerWidth;
    for (let n of e) {
      let [e, s] = n;
      if (t >= e) {
        a(s);
        return
      }
    }
  }, [e]);
  return n.useEffect(() => {
    s()
  }, [s]), n.useEffect(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s)
  })), t
}