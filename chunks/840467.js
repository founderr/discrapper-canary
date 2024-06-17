"use strict";
n.r(t), n.d(t, {
  useReadableSecureFramesCode: function() {
    return a
  }
}), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("863942"), n("642549");
var r = n("470079"),
  s = n("253135");

function a(e) {
  let {
    rawCode: t,
    chunkSize: n,
    desiredLength: a
  } = e;
  return r.useMemo(() => {
    if (null == t) return null;
    let e = Uint8Array.from(atob(t), e => e.charCodeAt(0)),
      r = (0, s.generateDisplayableCode)(e, a, n);
    if (null == r) return null;
    let u = RegExp(".{1,".concat(n, "}"), "g"),
      l = r.match(u);
    return null == l ? null : Array.from(l)
  }, [n, a, t])
}