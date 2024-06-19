n.d(o, {
  Z: function() {
    return r
  }
});

function r(l, o) {
  if (l.score === o.score) {
    var n, r, i, t, e, u;
    let O = null !== (t = null !== (i = l.sortable) && void 0 !== i ? i : null === (n = l.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== t ? t : "",
      c = null !== (u = null !== (e = l.sortable) && void 0 !== e ? e : null === (r = o.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== u ? u : "";
    if (O < c) return -1;
    if (O > c) return 1
  }
  return o.score - l.score
}