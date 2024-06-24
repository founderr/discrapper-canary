n.d(l, {
  Z: function() {
    return x
  }
}), n(47120);
var s = n(470079),
  a = n(392711),
  t = n.n(a),
  i = n(876215),
  r = n(442837),
  o = n(146282),
  c = n(897674),
  d = n(709054),
  u = n(206583);
let m = new Set([i.s.PLAYED_GAME]),
  h = e => m.has(e.content_type);

function x() {
  let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
    l = (0, c.Z)(u.YN.GLOBAL_FEED),
    n = s.useMemo(() => t()(l).unionBy(e, e => e.id).filter(h).orderBy(e => d.default.extractTimestamp(e.id), "desc").uniqWith((e, l) => e.author_id === l.author_id && e.extra.application_id === l.extra.application_id).value(), [e, l]);
  return {
    requestId: (0, r.e7)([o.Z], () => o.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)),
    entries: n
  }
}