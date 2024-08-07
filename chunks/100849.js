i.d(s, {
  Z: function() {
return x;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(120356),
  o = i.n(t),
  a = i(442837),
  r = i(481060),
  d = i(717881),
  c = i(387903),
  u = i(906732),
  I = i(199902),
  _ = i(158776),
  f = i(785717),
  E = i(221292),
  m = i(981631),
  v = i(501649),
  S = i(735393);

function x(e) {
  let {
user: s,
type: i,
showActions: t,
onClose: x
  } = e, Z = (0, a.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(s.id)), p = (0, a.e7)([_.Z], () => _.Z.getActivities(s.id)), h = l.useMemo(() => p.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [p]), T = l.useMemo(() => Z ? h.find(e => e.type === m.IIU.PLAYING) : null, [
h,
Z
  ]), g = l.useMemo(() => h.filter(e => e !== T), [
T,
h
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: j
  } = (0, u.ZP)(), {
context: C,
trackUserProfileAction: A
  } = (0, f.KZ)(), R = {
location: {
  page: m.ZY5.USER_PROFILE,
  section: m.jXE.PROFILE_MODAL
}
  };
  return (0, n.jsxs)(r.ScrollerThin, {
className: S.listScroller,
fade: !0,
children: [
  Z ? (0, n.jsx)(d.Z, {
    type: i,
    user: s,
    source: j,
    className: v.userProfileActivity,
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    activity: T,
    actionColor: v.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: x,
    onAction: () => {
      A({
        action: 'JOIN_ACTIVITY'
      }), (0, E.Ac)({
        activityType: m.IIU.STREAMING,
        activityName: null == T ? void 0 : T.name,
        activityPlatform: null == T ? void 0 : T.platform,
        activitySessionId: null == T ? void 0 : T.session_id,
        applicationId: null == T ? void 0 : T.application_id,
        analyticsLocations: N,
        ...C
      });
    }
  }) : null,
  g.map(e => (0, n.jsx)(d.Z, {
    type: i,
    activity: e,
    user: s,
    useStoreStream: !1,
    source: j,
    className: o()(v.userProfileActivity, i === c.Y.SIMPLIFIED_PROFILE && v.simplifiedProfileActivity),
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    actionColor: v.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: x,
    onAction: () => {
      A({
        action: 'JOIN_ACTIVITY'
      }), (0, E.Ac)({
        activityType: e.type,
        activityName: e.name,
        activityPlatform: e.platform,
        activitySessionId: e.session_id,
        applicationId: e.application_id,
        analyticsLocations: N,
        ...C
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}