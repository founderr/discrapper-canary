n.d(i, {
  b: function() {
    return a
  }
}), n(47120);
var t = n(470079);

function a() {
  var e, i;
  let [n, a] = t.useState({
    width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
    height: null !== (i = window.innerHeight) && void 0 !== i ? i : 1080
  });
  return t.useLayoutEffect(() => {
    function e() {
      let e = window.innerWidth;
      a({
        width: e,
        height: window.innerHeight
      })
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), n
}