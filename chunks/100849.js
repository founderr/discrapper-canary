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
  d = s(717881),
  c = s(387903),
  u = s(906732),
  I = s(199902),
  _ = s(158776),
  f = s(785717),
  E = s(221292),
  m = s(981631),
  S = s(501649),
  Z = s(735393);

function v(e) {
  let {
user: n,
type: s,
showActions: o,
onClose: v
  } = e, x = (0, r.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(n.id)), h = (0, r.e7)([_.Z], () => _.Z.getActivities(n.id)), T = l.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), p = l.useMemo(() => x ? T.find(e => e.type === m.IIU.PLAYING) : null, [
T,
x
  ]), g = l.useMemo(() => T.filter(e => e !== p), [
p,
T
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: C
  } = (0, u.ZP)(), {
context: j,
trackUserProfileAction: A
  } = (0, f.KZ)(), O = {
location: {
  page: m.ZY5.USER_PROFILE,
  section: m.jXE.PROFILE_MODAL
}
  };
  return (0, i.jsxs)(a.ScrollerThin, {
className: Z.listScroller,
fade: !0,
children: [
  x ? (0, i.jsx)(d.Z, {
    type: s,
    user: n,
    source: C,
    className: S.userProfileActivity,
    showChannelDetails: s === c.Y.SIMPLIFIED_PROFILE,
    activity: p,
    actionColor: S.actionColor,
    analyticsParams: O,
    showActions: o,
    onClose: v,
    onAction: () => {
      A({
        action: 'JOIN_ACTIVITY'
      }), (0, E.Ac)({
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
    type: s,
    activity: e,
    user: n,
    useStoreStream: !1,
    source: C,
    className: t()(S.userProfileActivity, s === c.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
    showChannelDetails: s === c.Y.SIMPLIFIED_PROFILE,
    actionColor: S.actionColor,
    analyticsParams: O,
    showActions: o,
    onClose: v,
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
        ...j
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}