"use strict";
t.r(a), t.d(a, {
  useScreenDimensions: function() {
    return s
  }
}), t("47120");
var i = t("470079");

function s() {
  var e, a;
  let [t, s] = i.useState({
    width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
    height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080
  });
  return i.useLayoutEffect(() => {
    function e() {
      let e = window.innerWidth;
      s({
        width: e,
        height: window.innerHeight
      })
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), t
}