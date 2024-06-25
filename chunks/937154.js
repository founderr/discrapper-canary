n.d(t, {
  Z: function() {
    return i
  }
}), n(47120);
var r = n(470079);

function s() {
  return "undefined" == typeof document || "visible" === document.visibilityState
}

function i() {
  let [e, t] = (0, r.useState)(s());
  return (0, r.useEffect)(() => {
    function e() {
      t(s())
    }
    return window.addEventListener("visibilitychange", e), () => {
      window.removeEventListener("visibilitychange", e)
    }
  }, [t]), e
}