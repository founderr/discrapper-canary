n.d(i, {
  Z: function() {
return h;
  }
});
var s = n(735250),
  l = n(470079),
  t = n(120356),
  o = n.n(t),
  a = n(442837),
  r = n(481060),
  d = n(387903),
  c = n(906732),
  u = n(199902),
  I = n(158776),
  _ = n(785717),
  f = n(221292),
  m = n(989964),
  E = n(981631),
  x = n(501649),
  v = n(735393);

function h(e) {
  let {
user: i,
type: n,
showActions: t,
onClose: h
  } = e, S = (0, a.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(i.id)), Z = (0, a.e7)([I.Z], () => I.Z.getActivities(i.id)), p = l.useMemo(() => Z.filter(e => e.type !== E.IIU.CUSTOM_STATUS), [Z]), g = l.useMemo(() => S ? p.find(e => e.type === E.IIU.PLAYING) : null, [
p,
S
  ]), j = l.useMemo(() => p.filter(e => e !== g), [
g,
p
  ]), {
analyticsLocations: T,
newestAnalyticsLocation: N
  } = (0, c.ZP)(), {
trackUserProfileAction: C,
...A
  } = (0, _.KZ)(), R = {
location: {
  page: E.ZY5.USER_PROFILE,
  section: E.jXE.PROFILE_MODAL
}
  };
  return (0, s.jsxs)(r.ScrollerThin, {
className: v.listScroller,
fade: !0,
children: [
  S ? (0, s.jsx)(m.Z, {
    location: 'UserProfileActivity',
    type: n,
    user: i,
    source: N,
    className: x.userProfileActivity,
    showChannelDetails: n === d.Y.SIMPLIFIED_PROFILE,
    activity: g,
    actionColor: x.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: h,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
        activityType: E.IIU.STREAMING,
        activityName: null == g ? void 0 : g.name,
        activityPlatform: null == g ? void 0 : g.platform,
        activitySessionId: null == g ? void 0 : g.session_id,
        applicationId: null == g ? void 0 : g.application_id,
        analyticsLocations: T,
        ...A
      });
    }
  }) : null,
  j.map(e => (0, s.jsx)(m.Z, {
    location: 'UserProfileActivity',
    type: n,
    activity: e,
    user: i,
    useStoreStream: !1,
    source: N,
    className: o()(x.userProfileActivity, n === d.Y.SIMPLIFIED_PROFILE && x.simplifiedProfileActivity),
    showChannelDetails: n === d.Y.SIMPLIFIED_PROFILE,
    actionColor: x.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: h,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
        activityType: e.type,
        activityName: e.name,
        activityPlatform: e.platform,
        activitySessionId: e.session_id,
        applicationId: e.application_id,
        analyticsLocations: T,
        ...A
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}