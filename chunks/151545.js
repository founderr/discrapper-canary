n.d(t, {
  Z: function() {
return A;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(512722),
  s = n.n(a),
  o = n(442837),
  l = n(620662),
  u = n(812206),
  c = n(835473),
  d = n(574176),
  _ = n(952164),
  E = n(199902),
  f = n(592125),
  h = n(430824),
  p = n(496675),
  m = n(594174),
  I = n(979651),
  T = n(626135),
  g = n(409057),
  S = n(981631);

function A(e) {
  let {
activity: t,
user: n,
useStoreStream: a = !0,
...A
  } = e, N = (0, o.e7)([m.default], () => m.default.getCurrentUser());
  s()(null != N, 'BiteSizeActivitySection current user null');
  let v = (0, o.e7)([
  I.Z,
  f.Z
], () => {
  var e;
  return f.Z.getChannel(null === (e = I.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
}),
{
  enableHangStatus: O
} = d.n.useExperiment({
  guildId: null == v ? void 0 : v.guild_id,
  location: 'UserProfileActivityCardWrapper'
}, {
  autoTrackExposure: !1
}),
R = (0, o.e7)([E.Z], () => a ? E.Z.getAnyStreamForUser(n.id) : null),
C = O && p.Z.can(S.Plq.CONNECT, v),
y = (null == t ? void 0 : t.type) === S.IIU.HANG_STATUS && C ? v : null,
D = (0, o.e7)([
  h.Z,
  I.Z,
  f.Z
], () => {
  var e, r;
  return (0, l.Z)(t, S.xjy.EMBEDDED) ? h.Z.getGuild(null === (e = f.Z.getChannel(null === (r = I.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === r ? void 0 : r.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != y ? h.Z.getGuild(y.getGuildId()) : null;
}),
L = (0, o.e7)([h.Z], () => null != R ? h.Z.getGuild(R.guildId) : null);
  (0, c.q)(null == t ? void 0 : t.application_id);
  let b = (0, o.e7)([u.Z], () => (null == t ? void 0 : t.application_id) != null ? u.Z.getApplication(t.application_id) : (null == t ? void 0 : t.name) != null ? u.Z.getApplicationByName(t.name) : null);
  return (i.useEffect(() => {
(null == t ? void 0 : t.type) === S.IIU.HANG_STATUS && C && T.default.track(S.rMx.VIEW_HANG_STATUS, {
  source: 'UserProfilePopout',
  guild_id: null == y ? void 0 : y.guild_id,
  channel_id: null == y ? void 0 : y.id
});
  }, [
null == t ? void 0 : t.type,
C,
y
  ]), (null == t ? void 0 : t.type) !== S.IIU.HANG_STATUS || C) ? (0, r.jsx)(g.Z, {
...A,
activity: t,
user: n,
currentUser: N,
application: b,
activityGuild: null != D ? D : L,
channel: v,
onOpenSpotifyTrack: _.aG,
onOpenSpotifyArtist: _.d$,
onOpenSpotifyAlbum: _.Z5
  }) : null;
}