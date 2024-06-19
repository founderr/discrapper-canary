n.d(t, {
  q: function() {
    return s
  }
}), n(47120);
var l = n(709054),
  i = n(765104);

function s(e, t) {
  var n;
  let s = null !== (n = i.Z.summaries(e)) && void 0 !== n ? n : [],
    a = 0;
  for (let e of s) l.default.compare(e.endId, t) > 0 && (a += 1);
  return a
}