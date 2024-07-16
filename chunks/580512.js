n.d(t, {
  Z: function() {
return I;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(717881),
  l = n(906732),
  u = n(199902),
  c = n(158776),
  d = n(594174),
  _ = n(785717),
  E = n(221292),
  f = n(910128),
  h = n(989964),
  p = n(981631),
  m = n(755380);

function I(e) {
  let {
user: t,
guild: n,
channelId: i,
onClose: I
  } = e, {
analyticsLocations: T,
newestAnalyticsLocation: g
  } = (0, l.ZP)(), {
trackUserProfileAction: S,
...A
  } = (0, _.KZ)(), N = (0, s.e7)([d.default], () => d.default.getCurrentUser()), {
messageCtaEnabled: v
  } = (0, f.l)({
location: 'BiteSizeProfileActivitySection'
  }), {
isApplicationStreaming: O,
activity: R
  } = (0, s.cj)([
u.Z,
c.Z
  ], () => {
let e = null != u.Z.getAnyStreamForUser(t.id);
return {
  isApplicationStreaming: e,
  activity: e ? c.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === p.IIU.PLAYING;
  }) : c.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== p.IIU.CUSTOM_STATUS;
  })
};
  });
  return (0, r.jsx)(h.Z, {
location: 'BiteSizeProfileActivitySection',
type: o.P.BITE_SIZE_POPOUT,
activity: R,
className: m.activity,
source: g,
user: t,
guildId: null == n ? void 0 : n.id,
channelId: i,
onGameProfileOpened: I,
onAction: () => {
  S({
    action: 'JOIN_ACTIVITY'
  }), (0, E.Ac)({
    activityType: O ? p.IIU.STREAMING : null == R ? void 0 : R.type,
    activityName: null == R ? void 0 : R.name,
    activityPlatform: null == R ? void 0 : R.platform,
    activitySessionId: null == R ? void 0 : R.session_id,
    applicationId: null == R ? void 0 : R.application_id,
    analyticsLocations: T,
    ...A
  }), null == I || I();
},
showActions: t.id !== (null == N ? void 0 : N.id),
actionColor: a()(m.buttonColor, v ? m.engagementExpButtonColor : void 0),
showChannelDetails: !0
  });
}