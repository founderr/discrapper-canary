n.d(t, {
  E: function() {
    return s
  }
});
var r = n(470079),
  o = n(250683),
  l = n(253135);

function s(e) {
  let {
    codeBase64: t,
    chunkSize: n,
    desiredLength: s
  } = e;
  return r.useMemo(() => {
    if (null == t) return null;
    let e = o.toByteArray(t),
      r = (0, l.D)(e, s, n);
    if (null == r) return null;
    let i = RegExp(".{1,".concat(n, "}"), "g"),
      u = r.match(i);
    return null == u ? null : Array.from(u)
  }, [n, t, s])
}