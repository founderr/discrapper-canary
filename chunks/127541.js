n.d(t, {
  Z: function() {
    return i
  }
}), n(47120);
var s = n(470079);

function i(e) {
  let [t, n] = s.useState(0), i = s.useCallback(() => {
    let t = window.innerWidth;
    for (let s of e) {
      let [e, i] = s;
      if (t >= e) {
        n(i);
        return
      }
    }
  }, [e]);
  return s.useEffect(() => {
    i()
  }, [i]), s.useEffect(() => (window.addEventListener("resize", i), () => {
    window.removeEventListener("resize", i)
  })), t
}