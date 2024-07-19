s.d(n, {
  Z: function() {
return v;
  }
});
var i = s(735250),
  l = s(470079),
  o = s(120356),
  t = s.n(o),
  r = s(442837),
  a = s(481060),
  d = s(387903),
  c = s(906732),
  u = s(199902),
  I = s(158776),
  _ = s(785717),
  f = s(221292),
  E = s(989964),
  m = s(981631),
  S = s(501649),
  Z = s(735393);

function v(e) {
  let {
user: n,
type: s,
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
  return (0, i.jsxs)(a.ScrollerThin, {
className: Z.listScroller,
fade: !0,
children: [
  x ? (0, i.jsx)(E.Z, {
    location: 'UserProfileActivity',
    type: s,
    user: n,
    source: C,
    className: S.userProfileActivity,
    showChannelDetails: s === d.Y.SIMPLIFIED_PROFILE,
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
  g.map(e => (0, i.jsx)(E.Z, {
    location: 'UserProfileActivity',
    type: s,
    activity: e,
    user: n,
    useStoreStream: !1,
    source: C,
    className: t()(S.userProfileActivity, s === d.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
    showChannelDetails: s === d.Y.SIMPLIFIED_PROFILE,
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