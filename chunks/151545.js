n.d(t, {
  Z: function() {
return S;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(512722),
  s = n.n(a),
  o = n(442837),
  l = n(620662),
  u = n(812206),
  c = n(574176),
  d = n(952164),
  _ = n(199902),
  E = n(592125),
  f = n(430824),
  h = n(496675),
  p = n(594174),
  m = n(979651),
  I = n(626135),
  T = n(409057),
  g = n(981631);

function S(e) {
  let {
activity: t,
user: n,
useStoreStream: a = !0,
...S
  } = e, A = (0, o.e7)([p.default], () => p.default.getCurrentUser());
  s()(null != A, 'BiteSizeActivitySection current user null');
  let N = (0, o.e7)([
  m.Z,
  E.Z
], () => {
  var e;
  return E.Z.getChannel(null === (e = m.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
}),
{
  enableHangStatus: v
} = c.n.useExperiment({
  guildId: null == N ? void 0 : N.guild_id,
  location: 'UserProfileActivityCardWrapper'
}, {
  autoTrackExposure: !1
}),
O = (0, o.e7)([_.Z], () => a ? _.Z.getAnyStreamForUser(n.id) : null),
R = v && h.Z.can(g.Plq.CONNECT, N),
C = (null == t ? void 0 : t.type) === g.IIU.HANG_STATUS && R ? N : null,
y = (0, o.e7)([
  f.Z,
  m.Z,
  E.Z
], () => {
  var e, r;
  return (0, l.Z)(t, g.xjy.EMBEDDED) ? f.Z.getGuild(null === (e = E.Z.getChannel(null === (r = m.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === r ? void 0 : r.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != C ? f.Z.getGuild(C.getGuildId()) : null;
}),
D = (0, o.e7)([f.Z], () => null != O ? f.Z.getGuild(O.guildId) : null),
L = (0, o.e7)([u.Z], () => {
  if (null != t)
    return null != t.application_id ? u.Z.getApplication(t.application_id) : u.Z.getApplicationByName(t.name);
  return null;
});
  return (i.useEffect(() => {
(null == t ? void 0 : t.type) === g.IIU.HANG_STATUS && R && I.default.track(g.rMx.VIEW_HANG_STATUS, {
  source: 'UserProfilePopout',
  guild_id: null == C ? void 0 : C.guild_id,
  channel_id: null == C ? void 0 : C.id
});
  }, [
null == t ? void 0 : t.type,
R,
C
  ]), (null == t ? void 0 : t.type) !== g.IIU.HANG_STATUS || R) ? (0, r.jsx)(T.Z, {
...S,
activity: t,
user: n,
currentUser: A,
application: L,
activityGuild: null != y ? y : D,
channel: N,
onOpenSpotifyTrack: d.aG,
onOpenSpotifyArtist: d.d$,
onOpenSpotifyAlbum: d.Z5
  }) : null;
}