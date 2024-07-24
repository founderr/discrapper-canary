n.d(t, {
  Z: function() {
return h;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(717881),
  o = n(906732),
  l = n(785717),
  u = n(221292),
  c = n(910128),
  d = n(929498),
  _ = n(989964),
  E = n(981631),
  f = n(755380);

function h(e) {
  let {
user: t,
guild: n,
channelId: i,
onClose: h
  } = e, {
analyticsLocations: p,
newestAnalyticsLocation: m
  } = (0, o.ZP)(), {
trackUserProfileAction: I,
...T
  } = (0, l.KZ)(), {
messageCtaEnabled: g
  } = (0, c.l)({
location: 'BiteSizeProfileActivitySection'
  }), {
featured: S,
isApplicationStreaming: A
  } = (0, d.Z)(t.id);
  return null != S || A ? (0, r.jsx)(_.Z, {
location: 'BiteSizeProfileActivitySection',
type: s.P.BITE_SIZE_POPOUT,
activity: S,
className: f.activity,
source: m,
user: t,
guildId: null == n ? void 0 : n.id,
channelId: i,
onClose: h,
onAction: () => {
  I({
    action: 'JOIN_ACTIVITY'
  }), (0, u.Ac)({
    activityType: A ? E.IIU.STREAMING : null == S ? void 0 : S.type,
    activityName: null == S ? void 0 : S.name,
    activityPlatform: null == S ? void 0 : S.platform,
    activitySessionId: null == S ? void 0 : S.session_id,
    applicationId: null == S ? void 0 : S.application_id,
    analyticsLocations: p,
    ...T
  }), null == h || h();
},
actionColor: a()(f.buttonColor, g ? f.engagementExpButtonColor : void 0),
showChannelDetails: !0
  }) : null;
}