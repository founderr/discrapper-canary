i.d(n, {
  Z: function() {
    return v
  }
});
var l = i(735250),
  s = i(470079),
  t = i(120356),
  o = i.n(t),
  a = i(442837),
  r = i(481060),
  d = i(717881),
  u = i(906732),
  c = i(199902),
  I = i(158776),
  E = i(543595),
  f = i(785717),
  Z = i(221292),
  _ = i(981631),
  S = i(110957),
  m = i(667589);

function v(e) {
  let {
    user: n,
    type: i,
    showActions: t,
    onClose: v
  } = e, N = (0, a.e7)([c.Z], () => null != c.Z.getAnyStreamForUser(n.id)), x = (0, a.e7)([I.Z], () => I.Z.getActivities(n.id)), h = s.useMemo(() => x.filter(e => e.type !== _.IIU.CUSTOM_STATUS), [x]), g = s.useMemo(() => N ? h.find(e => e.type === _.IIU.PLAYING) : null, [h, N]), C = s.useMemo(() => h.filter(e => e !== g), [g, h]), {
    analyticsLocations: T,
    newestAnalyticsLocation: R
  } = (0, u.ZP)(), {
    trackUserProfileAction: A,
    ...M
  } = (0, f.KZ)(), j = {
    location: {
      page: _.ZY5.USER_PROFILE,
      section: _.jXE.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(r.ScrollerThin, {
    className: m.listScroller,
    fade: !0,
    children: [N ? (0, l.jsx)(d.Z, {
      type: i,
      user: n,
      source: R,
      className: S.userProfileActivity,
      showChannelDetails: i === E.Y.SIMPLIFIED_PROFILE,
      activity: g,
      actionColor: S.actionColor,
      analyticsParams: j,
      showActions: t,
      onOpenGameProfile: v,
      onAction: () => {
        A({
          action: "JOIN_ACTIVITY"
        }), (0, Z.Ac)({
          activityType: _.IIU.STREAMING,
          activityName: null == g ? void 0 : g.name,
          activityPlatform: null == g ? void 0 : g.platform,
          activitySessionId: null == g ? void 0 : g.session_id,
          applicationId: null == g ? void 0 : g.application_id,
          analyticsLocations: T,
          ...M
        })
      }
    }) : null, C.map(e => (0, l.jsx)(d.Z, {
      type: i,
      activity: e,
      user: n,
      useStoreStream: !1,
      source: R,
      className: o()(S.userProfileActivity, i === E.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
      showChannelDetails: i === E.Y.SIMPLIFIED_PROFILE,
      actionColor: S.actionColor,
      analyticsParams: j,
      showActions: t,
      onOpenGameProfile: v,
      onAction: () => {
        A({
          action: "JOIN_ACTIVITY"
        }), (0, Z.Ac)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: T,
          ...M
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}