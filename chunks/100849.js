i.d(n, {
  Z: function() {
return v;
  }
});
var s = i(735250),
  l = i(470079),
  o = i(120356),
  t = i.n(o),
  r = i(442837),
  a = i(481060),
  d = i(387903),
  c = i(906732),
  u = i(199902),
  I = i(158776),
  _ = i(785717),
  f = i(221292),
  E = i(989964),
  m = i(981631),
  S = i(711298),
  Z = i(431776);

function v(e) {
  let {
user: n,
type: i,
showActions: o,
onClose: v
  } = e, x = (0, r.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(n.id)), h = (0, r.e7)([I.Z], () => I.Z.getActivities(n.id)), p = l.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), T = l.useMemo(() => x ? p.find(e => e.type === m.IIU.PLAYING) : null, [
p,
x
  ]), g = l.useMemo(() => p.filter(e => e !== T), [
T,
p
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: C
  } = (0, c.ZP)(), {
trackUserProfileAction: j,
...A
  } = (0, _.KZ)(), O = {
location: {
  page: m.ZY5.USER_PROFILE,
  section: m.jXE.PROFILE_MODAL
}
  };
  return (0, s.jsxs)(a.ScrollerThin, {
className: Z.listScroller,
fade: !0,
children: [
  x ? (0, s.jsx)(E.Z, {
    location: 'UserProfileActivity',
    type: i,
    user: n,
    source: C,
    className: S.userProfileActivity,
    showChannelDetails: i === d.Y.SIMPLIFIED_PROFILE,
    activity: T,
    actionColor: S.actionColor,
    analyticsParams: O,
    showActions: o,
    onClose: v,
    onAction: () => {
      j({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
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
    type: i,
    activity: e,
    user: n,
    useStoreStream: !1,
    source: C,
    className: t()(S.userProfileActivity, i === d.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
    showChannelDetails: i === d.Y.SIMPLIFIED_PROFILE,
    actionColor: S.actionColor,
    analyticsParams: O,
    showActions: o,
    onClose: v,
    onAction: () => {
      j({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
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