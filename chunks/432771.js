n.d(t, {
  c: function() {
    return a
  }
});
var l = n(913527),
  i = n.n(l),
  s = n(709054);
let a = e => {
  let t = s.default.extractTimestamp(e);
  return !i()().isBefore(i()(t).add(i().duration(15, "days")))
}