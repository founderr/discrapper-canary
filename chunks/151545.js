n.d(t, {
  Z: function() {
return v;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(512722),
  s = n.n(a),
  o = n(442837),
  l = n(620662),
  u = n(503438),
  c = n(812206),
  d = n(835473),
  _ = n(574176),
  E = n(952164),
  f = n(199902),
  h = n(592125),
  p = n(430824),
  m = n(496675),
  I = n(594174),
  T = n(979651),
  g = n(626135),
  S = n(409057),
  A = n(128277),
  N = n(981631);

function v(e) {
  let {
activity: t,
user: n,
useStoreStream: a = !0,
...v
  } = e, O = (0, o.e7)([I.default], () => I.default.getCurrentUser());
  s()(null != O, 'BiteSizeActivitySection current user null');
  let R = (0, o.e7)([
  T.Z,
  h.Z
], () => {
  var e;
  return h.Z.getChannel(null === (e = T.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
}),
{
  enableHangStatus: C
} = _.n.useExperiment({
  guildId: null == R ? void 0 : R.guild_id,
  location: 'UserProfileActivityCardWrapper'
}, {
  autoTrackExposure: !1
}),
y = (0, o.e7)([f.Z], () => a ? f.Z.getAnyStreamForUser(n.id) : null),
D = C && m.Z.can(N.Plq.CONNECT, R),
L = (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS && D ? R : null,
b = (0, o.e7)([
  p.Z,
  T.Z,
  h.Z
], () => {
  var e, r;
  return (0, l.Z)(t, N.xjy.EMBEDDED) ? p.Z.getGuild(null === (e = h.Z.getChannel(null === (r = T.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === r ? void 0 : r.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != L ? p.Z.getGuild(L.getGuildId()) : null;
}),
M = (0, o.e7)([p.Z], () => null != y ? p.Z.getGuild(y.guildId) : null);
  (0, d.q)(null == t ? void 0 : t.application_id);
  let P = (0, o.e7)([c.Z], () => (null == t ? void 0 : t.application_id) != null ? c.Z.getApplication(t.application_id) : (null == t ? void 0 : t.name) != null ? c.Z.getApplicationByName(t.name) : null);
  return (i.useEffect(() => {
(null == t ? void 0 : t.type) === N.IIU.HANG_STATUS && D && g.default.track(N.rMx.VIEW_HANG_STATUS, {
  source: 'UserProfilePopout',
  guild_id: null == L ? void 0 : L.guild_id,
  channel_id: null == L ? void 0 : L.id
});
  }, [
null == t ? void 0 : t.type,
D,
L
  ]), (null == t ? void 0 : t.type) !== N.IIU.HANG_STATUS || D) ? (0, u.Z)(t) ? (0, r.jsx)(A.Z, {
...v,
activity: t,
user: n,
currentUser: O,
activityGuild: b,
channel: R,
onOpenSpotifyTrack: E.aG,
onOpenSpotifyArtist: E.d$,
onOpenSpotifyAlbum: E.Z5
  }) : (0, r.jsx)(S.Z, {
...v,
activity: t,
user: n,
currentUser: O,
application: P,
activityGuild: null != b ? b : M,
channel: R
  }) : null;
}