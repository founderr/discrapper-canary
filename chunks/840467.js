"use strict";
n.r(t), n.d(t, {
  useReadableSecureFramesCode: function() {
    return a
  }
});
var r = n("470079"),
  s = n("250683"),
  u = n("253135");

function a(e) {
  let {
    codeBase64: t,
    chunkSize: n,
    desiredLength: a
  } = e;
  return r.useMemo(() => {
    if (null == t) return null;
    let e = s.toByteArray(t),
      r = (0, u.generateDisplayableCode)(e, a, n);
    if (null == r) return null;
    let l = RegExp(".{1,".concat(n, "}"), "g"),
      o = r.match(l);
    return null == o ? null : Array.from(o)
  }, [n, t, a])
}