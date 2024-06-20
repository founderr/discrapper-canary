t.d(n, {
  E: function() {
    return u
  }
});
var r = t(470079),
  o = t(250683),
  s = t(253135);

function u(e) {
  let {
    codeBase64: n,
    chunkSize: t,
    desiredLength: u
  } = e;
  return r.useMemo(() => {
    if (null == n) return null;
    let e = o.toByteArray(n),
      r = (0, s.D)(e, u, t);
    if (null == r) return null;
    let l = RegExp(".{1,".concat(t, "}"), "g"),
      i = r.match(l);
    return null == i ? null : Array.from(i)
  }, [t, n, u])
}