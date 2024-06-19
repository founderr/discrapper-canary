n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var l = n(470079),
  i = n(876215),
  s = n(442837),
  a = n(146282),
  r = n(219634),
  o = n(520951),
  c = n(897674),
  u = n(206583);
let d = new Set([i.s.PLAYED_GAME, i.s.WATCHED_MEDIA, i.s.TOP_GAME, i.s.TOP_ARTIST, i.s.LISTENED_SESSION]);

function h(e) {
  let t = (0, c.Z)(u.YN.GLOBAL_FEED);
  t = (0, r.Z)({
    entries: t,
    channelId: e
  }), t = l.useMemo(() => null == t ? void 0 : t.filter(e => d.has(e.content_type)), [t]);
  let {
    entries: n,
    filteredIds: i
  } = (0, o.Z)(t);
  return t = n, {
    requestId: (0, s.e7)([a.Z], () => a.Z.getFeedRequestId(u.YN.GLOBAL_FEED)),
    entries: t,
    impressionCappedEntryIds: i
  }
}