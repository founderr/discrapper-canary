n.d(i, {
  Z: function() {
return x;
  }
});
var s = n(735250),
  l = n(470079),
  o = n(120356),
  t = n.n(o),
  r = n(442837),
  a = n(481060),
  d = n(387903),
  c = n(906732),
  u = n(199902),
  I = n(158776),
  f = n(785717),
  _ = n(221292),
  E = n(989964),
  m = n(981631),
  S = n(501649),
  Z = n(735393);

function x(e) {
  let {
user: i,
type: n,
showActions: o,
onClose: x
  } = e, v = (0, r.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(i.id)), h = (0, r.e7)([I.Z], () => I.Z.getActivities(i.id)), p = l.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), T = l.useMemo(() => v ? p.find(e => e.type === m.IIU.PLAYING) : null, [
p,
v
  ]), g = l.useMemo(() => p.filter(e => e !== T), [
T,
p
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: C
  } = (0, c.ZP)(), {
trackUserProfileAction: j,
...A
  } = (0, f.KZ)(), U = {
location: {
  page: m.ZY5.USER_PROFILE,
  section: m.jXE.PROFILE_MODAL
}
  };
  return (0, s.jsxs)(a.ScrollerThin, {
className: Z.listScroller,
fade: !0,
children: [
  v ? (0, s.jsx)(E.Z, {
    location: 'UserProfileActivity',
    type: n,
    user: i,
    source: C,
    className: S.userProfileActivity,
    showChannelDetails: n === d.Y.SIMPLIFIED_PROFILE,
    activity: T,
    actionColor: S.actionColor,
    analyticsParams: U,
    showActions: o,
    onGameProfileOpened: x,
    onAction: () => {
      j({
        action: 'JOIN_ACTIVITY'
      }), (0, _.Ac)({
        activityType: m.IIU.STREAMING,
        activityName: null == T ? void 0 : T.name,
        activityPlatform: null == T ? void 0 : T.platform,
        activitySessionId: null == T ? void 0 : T.session_id,
        applicationId: null == T ? void 0 : T.application_id,
        analyticsLocations: N,
        ...A
      });
    }
  }) : null,
  g.map(e => (0, s.jsx)(E.Z, {
    location: 'UserProfileActivity',
    type: n,
    activity: e,
    user: i,
    useStoreStream: !1,
    source: C,
    className: t()(S.userProfileActivity, n === d.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
    showChannelDetails: n === d.Y.SIMPLIFIED_PROFILE,
    actionColor: S.actionColor,
    analyticsParams: U,
    showActions: o,
    onGameProfileOpened: x,
    onAction: () => {
      j({
        action: 'JOIN_ACTIVITY'
      }), (0, _.Ac)({
        activityType: e.type,
        activityName: e.name,
        activityPlatform: e.platform,
        activitySessionId: e.session_id,
        applicationId: e.application_id,
        analyticsLocations: N,
        ...A
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}