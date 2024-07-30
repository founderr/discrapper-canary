n.d(i, {
  Z: function() {
return Z;
  }
});
var s = n(735250),
  l = n(470079),
  t = n(120356),
  o = n.n(t),
  a = n(442837),
  r = n(481060),
  d = n(717881),
  c = n(387903),
  u = n(906732),
  I = n(199902),
  _ = n(158776),
  f = n(785717),
  m = n(221292),
  E = n(981631),
  x = n(501649),
  v = n(735393);

function Z(e) {
  let {
user: i,
type: n,
showActions: t,
onClose: Z
  } = e, h = (0, a.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(i.id)), S = (0, a.e7)([_.Z], () => _.Z.getActivities(i.id)), p = l.useMemo(() => S.filter(e => e.type !== E.IIU.CUSTOM_STATUS), [S]), g = l.useMemo(() => h ? p.find(e => e.type === E.IIU.PLAYING) : null, [
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
    type: n,
    user: i,
    source: N,
    className: x.userProfileActivity,
    showChannelDetails: n === c.Y.SIMPLIFIED_PROFILE,
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
    type: n,
    activity: e,
    user: i,
    useStoreStream: !1,
    source: N,
    className: o()(x.userProfileActivity, n === c.Y.SIMPLIFIED_PROFILE && x.simplifiedProfileActivity),
    showChannelDetails: n === c.Y.SIMPLIFIED_PROFILE,
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