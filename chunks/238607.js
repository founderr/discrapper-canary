n.d(t, {
  Z: function() {
return F;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(278323),
  l = n(224706),
  u = n(287734),
  c = n(566620),
  d = n(317381),
  _ = n(638880),
  E = n(255621),
  f = n(452634),
  h = n(620662),
  p = n(841784),
  m = n(275920),
  I = n(952561),
  T = n(513202),
  g = n(906732),
  S = n(835473),
  A = n(592745),
  N = n(592125),
  v = n(757266),
  O = n(650774),
  R = n(430824),
  C = n(283595),
  y = n(496675),
  D = n(699516),
  L = n(944486),
  b = n(979651),
  M = n(181106),
  P = n(417363),
  U = n(358085),
  w = n(804739),
  x = n(475413),
  G = n(981631),
  k = n(701488),
  B = n(689938);

function F(e) {
  let {
user: t,
currentUser: n,
activity: F,
onClick: V,
onClose: H
  } = e, {
analyticsLocations: Z,
newestAnalyticsLocation: Y
  } = (0, g.ZP)(), [j] = (0, S.Z)([null == F ? void 0 : F.application_id]), W = (0, I.Z)(), K = (0, p.Z)(F), z = null == F ? void 0 : F.application_id, q = null == F ? void 0 : F.session_id, Q = (0, f.Z)({
activity: F,
userId: t.id,
channelId: void 0
  }), X = (0, a.e7)([
C.Z,
A.Z,
P.Z,
v.Z
  ], () => null != z && (0, w.t)({
applicationId: z,
LibraryApplicationStore: C.Z,
LaunchableGameStore: A.Z,
DispatchApplicationStore: P.Z,
ConnectedAppsStore: v.Z
  })) || K, $ = (0, a.e7)([d.ZP], () => [...d.ZP.getSelfEmbeddedActivities().values()].some(e => {
let {
  applicationId: t,
  channelId: n
} = e;
return t === z && n === Q;
  })), J = (0, a.e7)([M.Z], () => null != z && M.Z.getState(z, G.mFx.JOIN) === G.OcF.LOADING), ee = (0, a.e7)([
N.Z,
R.Z,
O.Z,
D.Z,
L.Z,
b.Z,
y.Z
  ], () => (0, E.Z)({
user: t,
activity: F,
application: j,
channelId: Q,
currentUser: n,
isEmbedded: K,
ChannelStore: N.Z,
GuildStore: R.Z,
GuildMemberCountStore: O.Z,
RelationshipStore: D.Z,
SelectedChannelStore: L.Z,
VoiceStateStore: b.Z,
PermissionStore: y.Z
  })), [et, en] = i.useState(!1);
  if (null == z || !(0, h.Z)(F, G.xjy.JOIN) && !K)
return null;
  let er = async e => {
if (null == V || V(e), K && ee && null != Q && null != z && await (0, _.Z)({
    applicationId: z,
    activityChannelId: Q,
    currentEmbeddedApplication: W,
    embeddedActivitiesManager: T.Z,
    locationObject: {
      page: G.ZY5.USER_PROFILE
    },
    analyticsLocations: Z
  })) {
  null == H || H();
  return;
}
if (ee && null != z && null != q) {
  var n;
  await l.Z.join({
    userId: t.id,
    sessionId: q,
    applicationId: z,
    channelId: L.Z.getVoiceChannelId(),
    messageId: null,
    intent: k.Ws.PLAY,
    embedded: K
  }), (0, m.Z)({
    type: G.q5t.JOIN,
    userId: t.id,
    partyId: null == F ? void 0 : null === (n = F.party) || void 0 === n ? void 0 : n.id,
    applicationId: z,
    analyticsLocations: Z
  });
}
if (en(!0), null != Q && null != z)
  return c.pu({
    channelId: Q,
    applicationId: z,
    userId: t.id,
    location: Y
  });
if (null != F) {
  let e = await o.Z.sendActivityInviteUser({
    type: G.mFx.JOIN_REQUEST,
    userId: t.id,
    activity: F,
    location: G.Sbl.PROFILE_POPOUT
  });
  null != e && u.default.selectPrivateChannel(e.id);
}
  }, ei = () => {
let e = !ee || et || $ || U.isPlatformEmbedded && !X;
return K ? (0, r.jsx)(x.tG, {
  icon: s.ActivitiesIcon,
  text: B.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY,
  disabled: e,
  submitting: J,
  color: s.Button.Colors.GREEN,
  fullWidth: !0,
  onClick: er
}) : ee ? (0, r.jsx)(x.tG, {
  icon: s.GameControllerIcon,
  text: B.Z.Messages.JOIN,
  disabled: e,
  color: s.Button.Colors.GREEN,
  submitting: J,
  fullWidth: !0,
  onClick: er
}) : (0, r.jsx)(x.tG, {
  icon: s.GameControllerIcon,
  text: B.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
  disabled: e,
  submitting: J,
  fullWidth: !0,
  onClick: er
});
  };
  return t.id === n.id ? (0, r.jsx)(s.TooltipContainer, {
text: B.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF,
children: ei()
  }) : U.isPlatformEmbedded && !X && null != F ? (0, r.jsx)(s.TooltipContainer, {
text: B.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
  name: F.name
}),
children: ei()
  }) : ei();
}