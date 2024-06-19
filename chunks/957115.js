a.d(n, {
  B: function() {
    return t
  }
}), a(653041);
var s = a(392711),
  l = a.n(s);
let t = (e, n) => {
  let a = l().shuffle(e),
    s = a.findIndex(e => e.value === n);
  if (s > -1) {
    let e = a[s];
    a.splice(s, 1), a.push(e)
  }
  return a
}