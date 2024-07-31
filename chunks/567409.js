a.d(s, {
  Z: function() {
return u;
  }
}), a(47120);
var n = a(470079),
  l = a(392711),
  r = a.n(l),
  t = a(876215),
  i = a(442837),
  E = a(146282),
  o = a(897674),
  c = a(709054),
  _ = a(206583);
let I = new Set([t.s.PLAYED_GAME]),
  A = e => I.has(e.content_type);

function u() {
  let e = (0, o.Z)(_.YN.GAME_PROFILE_FEED),
s = (0, o.Z)(_.YN.GLOBAL_FEED),
a = n.useMemo(() => r()(s).unionBy(e, e => e.id).filter(A).orderBy(e => c.default.extractTimestamp(e.id), 'desc').uniqWith((e, s) => e.author_id === s.author_id && e.extra.application_id === s.extra.application_id).value(), [
  e,
  s
]);
  return {
requestId: (0, i.e7)([E.Z], () => E.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
entries: a
  };
}