"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var s = n("470079");
let l = !1,
  a = new Set;

function i(e) {
  e !== l && (l = e, a.forEach(e => e(l)))
}

function r() {
  let [e, t] = s.useState(l);
  return s.useEffect(() => {
    let e = e => {
      t(e)
    };
    return a.add(e), () => {
      a.delete(e)
    }
  }, []), e
}
window.addEventListener("keydown", e => {
  i(e.shiftKey)
}), window.addEventListener("keyup", e => {
  i(e.shiftKey)
}), window.addEventListener("mousemove", e => {
  i(e.shiftKey)
}), window.addEventListener("blur", () => {
  i(!1)
})