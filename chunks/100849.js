s.d(i, {
  Z: function() {
    return m
  }
});
var n = s(735250),
  l = s(470079),
  t = s(120356),
  o = s.n(t),
  r = s(442837),
  a = s(481060),
  d = s(717881),
  c = s(906732),
  u = s(199902),
  I = s(158776),
  E = s(543595),
  Z = s(785717),
  f = s(221292),
  _ = s(981631),
  S = s(110957),
  v = s(667589);

function m(e) {
  let {
    user: i,
    type: s,
    showActions: t,
    onClose: m
  } = e, x = (0, r.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(i.id)), h = (0, r.e7)([I.Z], () => I.Z.getActivities(i.id)), N = l.useMemo(() => h.filter(e => e.type !== _.IIU.CUSTOM_STATUS), [h]), g = l.useMemo(() => x ? N.find(e => e.type === _.IIU.PLAYING) : null, [N, x]), T = l.useMemo(() => N.filter(e => e !== g), [g, N]), {
    analyticsLocations: R,
    newestAnalyticsLocation: C
  } = (0, c.ZP)(), {
    trackUserProfileAction: A,
    ...M
  } = (0, Z.KZ)(), p = {
    location: {
      page: _.ZY5.USER_PROFILE,
      section: _.jXE.PROFILE_MODAL
    }
  };
  return (0, n.jsxs)(a.ScrollerThin, {
    className: v.listScroller,
    fade: !0,
    children: [x ? (0, n.jsx)(d.Z, {
      type: s,
      user: i,
      source: C,
      className: S.userProfileActivity,
      showChannelDetails: s === E.Y.SIMPLIFIED_PROFILE,
      activity: g,
      actionColor: S.actionColor,
      analyticsParams: p,
      showActions: t,
      onOpenGameProfile: m,
      onAction: () => {
        A({
          action: "JOIN_ACTIVITY"
        }), (0, f.Ac)({
          activityType: _.IIU.STREAMING,
          activityName: null == g ? void 0 : g.name,
          activityPlatform: null == g ? void 0 : g.platform,
          activitySessionId: null == g ? void 0 : g.session_id,
          applicationId: null == g ? void 0 : g.application_id,
          analyticsLocations: R,
          ...M
        })
      }
    }) : null, T.map(e => (0, n.jsx)(d.Z, {
      type: s,
      activity: e,
      user: i,
      useStoreStream: !1,
      source: C,
      className: o()(S.userProfileActivity, s === E.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
      showChannelDetails: s === E.Y.SIMPLIFIED_PROFILE,
      actionColor: S.actionColor,
      analyticsParams: p,
      showActions: t,
      onOpenGameProfile: m,
      onAction: () => {
        A({
          action: "JOIN_ACTIVITY"
        }), (0, f.Ac)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: R,
          ...M
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}