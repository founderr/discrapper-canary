"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var l = n("884691");

function a() {
  var e;
  let [t, n] = l.useState((e = window.innerWidth < 1132, e));
  return l.useEffect(() => {
    function e() {
      n(window.innerWidth < 1132)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [n]), t
}