s.d(a, {
  Z: function() {
return I;
  }
}), s(47120);
var n = s(470079),
  t = s(392711),
  l = s.n(t),
  r = s(876215),
  i = s(442837),
  o = s(146282),
  c = s(897674),
  E = s(709054),
  _ = s(206583);
let d = new Set([r.s.PLAYED_GAME]),
  u = e => d.has(e.content_type);

function I() {
  let e = (0, c.Z)(_.YN.GAME_PROFILE_FEED),
a = (0, c.Z)(_.YN.GLOBAL_FEED),
s = n.useMemo(() => l()(a).unionBy(e, e => e.id).filter(u).orderBy(e => E.default.extractTimestamp(e.id), 'desc').uniqWith((e, a) => e.author_id === a.author_id && e.extra.application_id === a.extra.application_id).value(), [
  e,
  a
]);
  return {
requestId: (0, i.e7)([o.Z], () => o.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
entries: s
  };
}