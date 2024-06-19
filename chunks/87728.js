n.d(t, {
  Z: function() {
    return i
  }
}), n(47120);
var l = n(470079);

function i() {
  var e;
  let [t, n] = l.useState((e = window.innerWidth < 1132, e));
  return l.useEffect(() => {
    function e() {
      n(window.innerWidth < 1132)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [n]), t
}