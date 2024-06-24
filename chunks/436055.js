t.d(n, {
  E: function() {
    return s
  }
});
var r = t(470079),
  o = t(250683),
  u = t(253135);

function s(e) {
  let {
    codeBase64: n,
    chunkSize: t,
    desiredLength: s
  } = e;
  return r.useMemo(() => {
    if (null == n) return null;
    let e = o.toByteArray(n),
      r = (0, u.D)(e, s, t);
    if (null == r) return null;
    let l = RegExp(".{1,".concat(t, "}"), "g"),
      i = r.match(l);
    return null == i ? null : Array.from(i)
  }, [t, n, s])
}