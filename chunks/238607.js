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
  I = n(906732),
  T = n(835473),
  g = n(592745),
  S = n(592125),
  A = n(757266),
  N = n(650774),
  v = n(430824),
  O = n(283595),
  R = n(496675),
  C = n(699516),
  y = n(944486),
  D = n(979651),
  L = n(181106),
  b = n(417363),
  M = n(358085),
  P = n(804739),
  U = n(652853),
  w = n(475413),
  x = n(228168),
  G = n(981631),
  k = n(701488),
  B = n(689938);

function F(e) {
  let {
user: t,
currentUser: n,
activity: F,
onAction: V,
onClose: H
  } = e, {
analyticsLocations: Z,
newestAnalyticsLocation: Y
  } = (0, I.ZP)(), {
profileType: j
  } = (0, U.z)(), [W] = (0, T.Z)([null == F ? void 0 : F.application_id]), K = (0, p.Z)(F), z = null == F ? void 0 : F.application_id, q = null == F ? void 0 : F.session_id, Q = (0, f.Z)({
activity: F,
userId: t.id,
channelId: void 0
  }), X = (0, a.e7)([
O.Z,
g.Z,
b.Z,
A.Z
  ], () => null != z && (0, P.t)({
applicationId: z,
LibraryApplicationStore: O.Z,
LaunchableGameStore: g.Z,
DispatchApplicationStore: b.Z,
ConnectedAppsStore: A.Z
  })) || K, $ = (0, a.e7)([d.ZP], () => [...d.ZP.getSelfEmbeddedActivities().values()].some(e => {
let {
  applicationId: t,
  channelId: n
} = e;
return t === z && n === Q;
  })), J = (0, a.e7)([L.Z], () => null != z && L.Z.getState(z, G.mFx.JOIN) === G.OcF.LOADING), ee = (0, a.e7)([
S.Z,
v.Z,
N.Z,
C.Z,
y.Z,
D.Z,
R.Z
  ], () => (0, E.Z)({
user: t,
activity: F,
application: W,
channelId: Q,
currentUser: n,
isEmbedded: K,
ChannelStore: S.Z,
GuildStore: v.Z,
GuildMemberCountStore: N.Z,
RelationshipStore: C.Z,
SelectedChannelStore: y.Z,
VoiceStateStore: D.Z,
PermissionStore: R.Z
  })), [et, en] = i.useState(!1), er = !ee || et || $ || M.isPlatformEmbedded && !X;
  if (null == z || !(0, h.Z)(F, G.xjy.JOIN) && !K)
return null;
  let ei = async () => {
if (K && ee && null != Q && null != z && await (0, _.Z)({
    applicationId: z,
    activityChannelId: Q,
    locationObject: {
      page: G.ZY5.USER_PROFILE
    },
    analyticsLocations: Z
  })) {
  null == H || H();
  return;
}
if (ee && null != z && null != q) {
  var e;
  await l.Z.join({
    userId: t.id,
    sessionId: q,
    applicationId: z,
    channelId: y.Z.getVoiceChannelId(),
    messageId: null,
    intent: k.Ws.PLAY,
    embedded: K
  }), (0, m.Z)({
    type: G.q5t.JOIN,
    userId: t.id,
    partyId: null == F ? void 0 : null === (e = F.party) || void 0 === e ? void 0 : e.id,
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
  }, ea = () => t.id === n.id ? B.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : M.isPlatformEmbedded && !X && null != F ? B.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
name: F.name
  }) : null;
  return K ? (0, r.jsx)(s.Tooltip, {
text: ea(),
children: e => (0, r.jsx)(w.tG, {
  ...e,
  icon: s.ActivitiesIcon,
  text: B.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY,
  disabled: er,
  submitting: J,
  themeColor: j === x.y0.FULL_SIZE ? 'secondary' : 'primary',
  fullWidth: !0,
  onClick: () => {
    null == V || V({
      action: 'PRESS_JOIN_BUTTON'
    }), ei();
  }
})
  }) : (0, r.jsx)(s.Tooltip, {
text: ea(),
children: e => (0, r.jsx)(w.tG, {
  ...e,
  icon: s.GameControllerIcon,
  text: ee ? B.Z.Messages.JOIN : B.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
  disabled: er,
  submitting: J,
  themeColor: j === x.y0.FULL_SIZE ? 'secondary' : 'primary',
  fullWidth: !0,
  onClick: () => {
    null == V || V({
      action: 'PRESS_ASK_TO_JOIN_BUTTON'
    }), ei();
  }
})
  });
}