n.d(s, {
  Z: function() {
return x;
  }
});
var i = n(735250),
  l = n(470079),
  o = n(120356),
  t = n.n(o),
  r = n(442837),
  a = n(481060),
  d = n(717881),
  c = n(387903),
  u = n(906732),
  _ = n(199902),
  I = n(158776),
  E = n(785717),
  f = n(221292),
  m = n(981631),
  S = n(501649),
  Z = n(735393);

function x(e) {
  let {
user: s,
type: n,
showActions: o,
onClose: x
  } = e, v = (0, r.e7)([_.Z], () => null != _.Z.getAnyStreamForUser(s.id)), h = (0, r.e7)([I.Z], () => I.Z.getActivities(s.id)), T = l.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), p = l.useMemo(() => v ? T.find(e => e.type === m.IIU.PLAYING) : null, [
T,
v
  ]), g = l.useMemo(() => T.filter(e => e !== p), [
p,
T
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: C
  } = (0, u.ZP)(), {
context: j,
trackUserProfileAction: A
  } = (0, E.KZ)(), O = {
location: {
  page: m.ZY5.USER_PROFILE,
  section: m.jXE.PROFILE_MODAL
}
  };
  return (0, i.jsxs)(a.ScrollerThin, {
className: Z.listScroller,
fade: !0,
children: [
  v ? (0, i.jsx)(d.Z, {
    type: n,
    user: s,
    source: C,
    className: S.userProfileActivity,
    showChannelDetails: n === c.Y.SIMPLIFIED_PROFILE,
    activity: p,
    actionColor: S.actionColor,
    analyticsParams: O,
    showActions: o,
    onClose: x,
    onAction: () => {
      A({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
        activityType: m.IIU.STREAMING,
        activityName: null == p ? void 0 : p.name,
        activityPlatform: null == p ? void 0 : p.platform,
        activitySessionId: null == p ? void 0 : p.session_id,
        applicationId: null == p ? void 0 : p.application_id,
        analyticsLocations: N,
        ...j
      });
    }
  }) : null,
  g.map(e => (0, i.jsx)(d.Z, {
    type: n,
    activity: e,
    user: s,
    useStoreStream: !1,
    source: C,
    className: t()(S.userProfileActivity, n === c.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
    showChannelDetails: n === c.Y.SIMPLIFIED_PROFILE,
    actionColor: S.actionColor,
    analyticsParams: O,
    showActions: o,
    onClose: x,
    onAction: () => {
      A({
        action: 'JOIN_ACTIVITY'
      }), (0, f.Ac)({
        activityType: e.type,
        activityName: e.name,
        activityPlatform: e.platform,
        activitySessionId: e.session_id,
        applicationId: e.application_id,
        analyticsLocations: N,
        ...j
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}