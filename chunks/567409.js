n.d(l, {
  Z: function() {
    return d
  }
}), n(47120);
var s = n(470079),
  t = n(876215),
  a = n(442837),
  i = n(146282),
  r = n(897674),
  o = n(206583);
let c = new Set([t.s.PLAYED_GAME]);

function d() {
  let e = (0, r.Z)(o.YN.GLOBAL_FEED);
  return e = s.useMemo(() => null == e ? void 0 : e.filter(e => c.has(e.content_type)), [e]), {
    requestId: (0, a.e7)([i.Z], () => i.Z.getFeedRequestId(o.YN.GLOBAL_FEED)),
    entries: e
  }
}