n.d(t, {
  Z: function() {
return m;
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
  d = n(785717),
  _ = n(221292),
  E = n(910128),
  f = n(989964),
  h = n(981631),
  p = n(755380);

function m(e) {
  let {
user: t,
guild: n,
channelId: i,
onClose: m
  } = e, {
analyticsLocations: I,
newestAnalyticsLocation: T
  } = (0, l.ZP)(), {
trackUserProfileAction: g,
...S
  } = (0, d.KZ)(), {
messageCtaEnabled: A
  } = (0, E.l)({
location: 'BiteSizeProfileActivitySection'
  }), {
isApplicationStreaming: N,
activity: v
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
    return t === h.IIU.PLAYING;
  }) : c.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== h.IIU.CUSTOM_STATUS;
  })
};
  });
  return (0, r.jsx)(f.Z, {
location: 'BiteSizeProfileActivitySection',
type: o.P.BITE_SIZE_POPOUT,
activity: v,
className: p.activity,
source: T,
user: t,
guildId: null == n ? void 0 : n.id,
channelId: i,
onGameProfileOpened: m,
onAction: () => {
  g({
    action: 'JOIN_ACTIVITY'
  }), (0, _.Ac)({
    activityType: N ? h.IIU.STREAMING : null == v ? void 0 : v.type,
    activityName: null == v ? void 0 : v.name,
    activityPlatform: null == v ? void 0 : v.platform,
    activitySessionId: null == v ? void 0 : v.session_id,
    applicationId: null == v ? void 0 : v.application_id,
    analyticsLocations: I,
    ...S
  }), null == m || m();
},
actionColor: a()(p.buttonColor, A ? p.engagementExpButtonColor : void 0),
showChannelDetails: !0
  });
}