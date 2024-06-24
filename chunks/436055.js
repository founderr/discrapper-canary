t.d(n, {
  E: function() {
    return l
  }
});
var r = t(470079),
  o = t(250683),
  u = t(253135);

function l(e) {
  let {
    codeBase64: n,
    chunkSize: t,
    desiredLength: l
  } = e;
  return r.useMemo(() => {
    if (null == n) return null;
    let e = o.toByteArray(n),
      r = (0, u.D)(e, l, t);
    if (null == r) return null;
    let s = RegExp(".{1,".concat(t, "}"), "g"),
      i = r.match(s);
    return null == i ? null : Array.from(i)
  }, [t, n, l])
}