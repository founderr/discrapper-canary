n.d(t, {
  Z: function() {
return L;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(726542),
  o = n(620662),
  l = n(841784),
  u = n(503438),
  c = n(802856),
  d = n(420660),
  _ = n(606925),
  E = n(719216),
  f = n(429589),
  h = n(276149),
  p = n(636245),
  m = n(697761),
  I = n(611459),
  T = n(757182),
  g = n(910424),
  S = n(750154),
  A = n(199902),
  N = n(592125),
  v = n(979651),
  O = n(374129),
  R = n(639351),
  C = n(652853),
  y = n(228168),
  D = n(981631);

function L(e) {
  let {
activity: t,
user: n,
currentUser: L,
onAction: b,
color: M = a.Button.Colors.PRIMARY,
look: P = a.Button.Looks.FILLED
  } = e, {
profileType: U
  } = (0, C.z)(), w = U === y.y0.FULL_SIZE, x = (0, i.e7)([
v.Z,
N.Z
  ], () => {
var e;
return (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS ? N.Z.getChannel(null === (e = v.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null;
  }), G = (0, i.e7)([A.Z], () => A.Z.getAnyStreamForUser(n.id)), k = (0, l.Z)(t);
  if ((null == t ? void 0 : t.buttons) != null && (null == t ? void 0 : t.buttons.length) >= 1)
return (0, r.jsx)(E.Z, {
  user: n,
  color: M,
  look: P,
  activity: t,
  onAction: b
}, 'custom-activity-button');
  if ((0, c.Z)(t))
return (0, r.jsx)(_.Z, {
  platform: s.Z.get(D.ABu.XBOX),
  look: P,
  color: M,
  onAction: b,
  Icon: R.Z
}, 'ConnectPlatformActivityButton');
  if ((null == t ? void 0 : t.platform) === D.M7m.PS4 || (null == t ? void 0 : t.platform) === D.M7m.PS5)
return (0, r.jsx)(_.Z, {
  look: P,
  color: M,
  platform: s.Z.get(D.ABu.PLAYSTATION),
  onAction: b,
  Icon: O.Z
}, 'ConnectPlatformActivityButton');
  if ((0, u.Z)(t))
return (0, r.jsx)(I.Z, {
  activity: t,
  user: n,
  look: P,
  color: M,
  onAction: b
}, 'spotify-activity-play-button');
  if (null != G)
return (0, r.jsx)(g.Z, {
  isCurrentUser: L.id === n.id,
  color: M,
  look: P,
  applicationStream: G,
  onAction: b
}, 'watch-button');
  if (null != x)
return (0, r.jsx)(h.Z, {
  color: M,
  look: P,
  hangStatusChannel: x,
  onAction: b
}, 'hang-status-button');
  if ((0, S.dS)(t)) {
let e = (0, S.rq)(t);
return null == e ? null : (0, r.jsx)(p.Z, {
  guildId: e.guildId,
  channelId: e.channelId,
  color: M,
  look: P,
  isProfile: w,
  onAction: b
}, e.channelId);
  }
  return (0, d.Z)(t) ? (0, r.jsx)(T.Z, {
activity: t,
color: M,
look: P,
onAction: b
  }, 'watch-button') : (0, o.Z)(t, D.xjy.JOIN) || k ? (0, r.jsx)(f.Z, {
activity: t,
user: n,
color: M,
look: P,
isEmbedded: k,
onAction: b
  }, 'join-activity-button') : (0, o.Z)(t, D.xjy.INSTANCE) ? (0, r.jsx)(m.Z, {
activity: t,
user: n,
color: M,
look: P,
onAction: b
  }, 'notify-button') : null;
}