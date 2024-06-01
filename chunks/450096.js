"use strict";
n.r(t), n.d(t, {
  usePlaceholderImage: function() {
    return a
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var i = n("470079"),
  r = n("153832");
let s = new Worker(new URL(n.p + n.u("77459"), n.b));

function a(e, t, n) {
  let a = n && 1 === t && null != e,
    [o, l] = i.useState(void 0);
  return i.useEffect(() => {
    let t = !1;
    if (a) {
      var n;
      (n = e, new Promise(e => {
        let t = (0, r.v4)(),
          i = n => {
            let {
              data: {
                id: r,
                png: a
              }
            } = n;
            t === r && (e(a), s.removeEventListener("message", i))
          };
        s.addEventListener("message", i), s.postMessage({
          id: t,
          placeholderData: n
        })
      })).then(e => {
        !t && l(e)
      })
    }
    return () => {
      t = !0
    }
  }, [e, a]), o
}