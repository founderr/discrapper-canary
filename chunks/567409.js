s.d(a, {
  Z: function() {
return u;
  }
}), s(47120);
var n = s(470079),
  t = s(392711),
  r = s.n(t),
  l = s(876215),
  i = s(442837),
  c = s(146282),
  E = s(897674),
  o = s(709054),
  _ = s(206583);
let I = new Set([l.s.PLAYED_GAME]),
  d = e => I.has(e.content_type);

function u() {
  let e = (0, E.Z)(_.YN.GAME_PROFILE_FEED),
a = (0, E.Z)(_.YN.GLOBAL_FEED),
s = n.useMemo(() => r()(a).unionBy(e, e => e.id).filter(d).orderBy(e => o.default.extractTimestamp(e.id), 'desc').uniqWith((e, a) => e.author_id === a.author_id && e.extra.application_id === a.extra.application_id).value(), [
  e,
  a
]);
  return {
requestId: (0, i.e7)([c.Z], () => c.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
entries: s
  };
}