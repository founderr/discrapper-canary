t.d(n, {
  E: function() {
    return l
  }
});
var r = t(470079),
  o = t(250683),
  s = t(253135);

function l(e) {
  let {
    codeBase64: n,
    chunkSize: t,
    desiredLength: l
  } = e;
  return r.useMemo(() => {
    if (null == n) return null;
    let e = o.toByteArray(n),
      r = (0, s.D)(e, l, t);
    if (null == r) return null;
    let u = RegExp(".{1,".concat(t, "}"), "g"),
      i = r.match(u);
    return null == i ? null : Array.from(i)
  }, [t, n, l])
}