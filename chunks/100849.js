i.d(n, {
  Z: function() {
return Z;
  }
});
var s = i(735250),
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
  m = i(221292),
  E = i(981631),
  x = i(501649),
  v = i(735393);

function Z(e) {
  let {
user: n,
type: i,
showActions: t,
onClose: Z
  } = e, h = (0, a.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(n.id)), S = (0, a.e7)([_.Z], () => _.Z.getActivities(n.id)), p = l.useMemo(() => S.filter(e => e.type !== E.IIU.CUSTOM_STATUS), [S]), g = l.useMemo(() => h ? p.find(e => e.type === E.IIU.PLAYING) : null, [
p,
h
  ]), j = l.useMemo(() => p.filter(e => e !== g), [
g,
p
  ]), {
analyticsLocations: T,
newestAnalyticsLocation: N
  } = (0, u.ZP)(), {
trackUserProfileAction: C,
...A
  } = (0, f.KZ)(), y = {
location: {
  page: E.ZY5.USER_PROFILE,
  section: E.jXE.PROFILE_MODAL
}
  };
  return (0, s.jsxs)(r.ScrollerThin, {
className: v.listScroller,
fade: !0,
children: [
  h ? (0, s.jsx)(d.Z, {
    type: i,
    user: n,
    source: N,
    className: x.userProfileActivity,
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    activity: g,
    actionColor: x.actionColor,
    analyticsParams: y,
    showActions: t,
    onClose: Z,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, m.Ac)({
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
  j.map(e => (0, s.jsx)(d.Z, {
    type: i,
    activity: e,
    user: n,
    useStoreStream: !1,
    source: N,
    className: o()(x.userProfileActivity, i === c.Y.SIMPLIFIED_PROFILE && x.simplifiedProfileActivity),
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    actionColor: x.actionColor,
    analyticsParams: y,
    showActions: t,
    onClose: Z,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, m.Ac)({
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