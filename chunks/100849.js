i.d(s, {
  Z: function() {
return Z;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(120356),
  o = i.n(t),
  a = i(442837),
  r = i(481060),
  d = i(387903),
  c = i(906732),
  u = i(199902),
  I = i(158776),
  _ = i(785717),
  f = i(221292),
  m = i(989964),
  E = i(981631),
  x = i(711298),
  v = i(431776);

function Z(e) {
  let {
user: s,
type: i,
showActions: t,
onClose: Z
  } = e, S = (0, a.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(s.id)), h = (0, a.e7)([I.Z], () => I.Z.getActivities(s.id)), p = l.useMemo(() => h.filter(e => e.type !== E.IIU.CUSTOM_STATUS), [h]), j = l.useMemo(() => S ? p.find(e => e.type === E.IIU.PLAYING) : null, [
p,
S
  ]), T = l.useMemo(() => p.filter(e => e !== j), [
j,
p
  ]), {
analyticsLocations: g,
newestAnalyticsLocation: N
  } = (0, c.ZP)(), {
trackUserProfileAction: C,
...A
  } = (0, _.KZ)(), L = {
location: {
  page: E.ZY5.USER_PROFILE,
  section: E.jXE.PROFILE_MODAL
}
  };
  return (0, n.jsxs)(r.ScrollerThin, {
className: v.listScroller,
fade: !0,
children: [
  S ? (0, n.jsx)(m.Z, {
    location: 'UserProfileActivity',
    type: i,
    user: s,
    source: N,
    className: x.userProfileActivity,
    showChannelDetails: i === d.Y.SIMPLIFIED_PROFILE,
    activity: j,
    actionColor: x.actionColor,
    analyticsParams: L,
    showActions: t,
    onClose: Z,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
        activityType: E.IIU.STREAMING,
        activityName: null == j ? void 0 : j.name,
        activityPlatform: null == j ? void 0 : j.platform,
        activitySessionId: null == j ? void 0 : j.session_id,
        applicationId: null == j ? void 0 : j.application_id,
        analyticsLocations: g,
        ...A
      });
    }
  }) : null,
  T.map(e => (0, n.jsx)(m.Z, {
    location: 'UserProfileActivity',
    type: i,
    activity: e,
    user: s,
    useStoreStream: !1,
    source: N,
    className: o()(x.userProfileActivity, i === d.Y.SIMPLIFIED_PROFILE && x.simplifiedProfileActivity),
    showChannelDetails: i === d.Y.SIMPLIFIED_PROFILE,
    actionColor: x.actionColor,
    analyticsParams: L,
    showActions: t,
    onClose: Z,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
        activityType: e.type,
        activityName: e.name,
        activityPlatform: e.platform,
        activitySessionId: e.session_id,
        applicationId: e.application_id,
        analyticsLocations: g,
        ...A
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}