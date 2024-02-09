"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("884691");
let i = e => {
  e.effects.forEach(e => {
    let {
      src: t
    } = e, n = document.createElement("link");
    n.rel = "prefetch", n.href = t, document.body.appendChild(n)
  })
};
var a = e => {
  l.useEffect(() => {
    i(e)
  }, [e])
}