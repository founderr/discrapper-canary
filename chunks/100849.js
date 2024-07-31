i.d(s, {
  Z: function() {
return S;
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
  f = i(158776),
  _ = i(785717),
  m = i(221292),
  E = i(981631),
  v = i(501649),
  x = i(735393);

function S(e) {
  let {
user: s,
type: i,
showActions: t,
onClose: S
  } = e, Z = (0, a.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(s.id)), h = (0, a.e7)([f.Z], () => f.Z.getActivities(s.id)), p = l.useMemo(() => h.filter(e => e.type !== E.IIU.CUSTOM_STATUS), [h]), g = l.useMemo(() => Z ? p.find(e => e.type === E.IIU.PLAYING) : null, [
p,
Z
  ]), T = l.useMemo(() => p.filter(e => e !== g), [
g,
p
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: j
  } = (0, u.ZP)(), {
trackUserProfileAction: C,
...A
  } = (0, _.KZ)(), M = {
location: {
  page: E.ZY5.USER_PROFILE,
  section: E.jXE.PROFILE_MODAL
}
  };
  return (0, n.jsxs)(r.ScrollerThin, {
className: x.listScroller,
fade: !0,
children: [
  Z ? (0, n.jsx)(d.Z, {
    type: i,
    user: s,
    source: j,
    className: v.userProfileActivity,
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    activity: g,
    actionColor: v.actionColor,
    analyticsParams: M,
    showActions: t,
    onClose: S,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, m.Ac)({
        activityType: E.IIU.STREAMING,
        activityName: null == g ? void 0 : g.name,
        activityPlatform: null == g ? void 0 : g.platform,
        activitySessionId: null == g ? void 0 : g.session_id,
        applicationId: null == g ? void 0 : g.application_id,
        analyticsLocations: N,
        ...A
      });
    }
  }) : null,
  T.map(e => (0, n.jsx)(d.Z, {
    type: i,
    activity: e,
    user: s,
    useStoreStream: !1,
    source: j,
    className: o()(v.userProfileActivity, i === c.Y.SIMPLIFIED_PROFILE && v.simplifiedProfileActivity),
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    actionColor: v.actionColor,
    analyticsParams: M,
    showActions: t,
    onClose: S,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, m.Ac)({
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