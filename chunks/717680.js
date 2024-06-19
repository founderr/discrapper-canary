n.d(t, {
  Z: function() {
    return r
  }
}), n(47120);
var s = n(470079);
let i = !1,
  l = new Set;

function a(e) {
  e !== i && (i = e, l.forEach(e => e(i)))
}

function r() {
  let [e, t] = s.useState(i);
  return s.useEffect(() => {
    let e = e => {
      t(e)
    };
    return l.add(e), () => {
      l.delete(e)
    }
  }, []), e
}
window.addEventListener("keydown", e => {
  a(e.shiftKey)
}), window.addEventListener("keyup", e => {
  a(e.shiftKey)
}), window.addEventListener("mousemove", e => {
  a(e.shiftKey)
}), window.addEventListener("blur", () => {
  a(!1)
})