s.d(l, {
  Z: function() {
    return d
  }
}), s(47120);
var n = s(470079),
  a = s(876215),
  t = s(442837),
  i = s(146282),
  o = s(897674),
  r = s(206583);
let c = new Set([a.s.PLAYED_GAME]);

function d() {
  let e = (0, o.Z)(r.YN.GLOBAL_FEED);
  return e = n.useMemo(() => null == e ? void 0 : e.filter(e => c.has(e.content_type)), [e]), {
    requestId: (0, t.e7)([i.Z], () => i.Z.getFeedRequestId(r.YN.GLOBAL_FEED)),
    entries: e
  }
}