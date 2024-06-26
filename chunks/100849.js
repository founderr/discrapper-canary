i.d(n, {
  Z: function() {
    return v
  }
});
var t = i(735250),
  s = i(470079),
  o = i(120356),
  l = i.n(o),
  a = i(442837),
  r = i(481060),
  d = i(717881),
  c = i(906732),
  u = i(199902),
  I = i(158776),
  f = i(543595),
  E = i(785717),
  _ = i(221292),
  Z = i(981631),
  S = i(110957),
  m = i(667589);

function v(e) {
  let {
    user: n,
    type: i,
    showActions: o,
    onClose: v
  } = e, x = (0, a.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(n.id)), h = (0, a.e7)([I.Z], () => I.Z.getActivities(n.id)), g = s.useMemo(() => h.filter(e => e.type !== Z.IIU.CUSTOM_STATUS), [h]), N = s.useMemo(() => x ? g.find(e => e.type === Z.IIU.PLAYING) : null, [g, x]), p = s.useMemo(() => g.filter(e => e !== N), [N, g]), {
    analyticsLocations: T,
    newestAnalyticsLocation: C
  } = (0, c.ZP)(), {
    trackUserProfileAction: R,
    ...A
  } = (0, E.KZ)(), j = {
    location: {
      page: Z.ZY5.USER_PROFILE,
      section: Z.jXE.PROFILE_MODAL
    }
  };
  return (0, t.jsxs)(r.ScrollerThin, {
    className: m.listScroller,
    fade: !0,
    children: [x ? (0, t.jsx)(d.Z, {
      type: i,
      user: n,
      source: C,
      className: S.userProfileActivity,
      showChannelDetails: i === f.Y.SIMPLIFIED_PROFILE,
      activity: N,
      actionColor: S.actionColor,
      analyticsParams: j,
      showActions: o,
      onOpenGameProfile: v,
      onAction: () => {
        R({
          action: "JOIN_ACTIVITY"
        }), (0, _.Ac)({
          activityType: Z.IIU.STREAMING,
          activityName: null == N ? void 0 : N.name,
          activityPlatform: null == N ? void 0 : N.platform,
          activitySessionId: null == N ? void 0 : N.session_id,
          applicationId: null == N ? void 0 : N.application_id,
          analyticsLocations: T,
          ...A
        })
      }
    }) : null, p.map(e => (0, t.jsx)(d.Z, {
      type: i,
      activity: e,
      user: n,
      useStoreStream: !1,
      source: C,
      className: l()(S.userProfileActivity, i === f.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
      showChannelDetails: i === f.Y.SIMPLIFIED_PROFILE,
      actionColor: S.actionColor,
      analyticsParams: j,
      showActions: o,
      onOpenGameProfile: v,
      onAction: () => {
        R({
          action: "JOIN_ACTIVITY"
        }), (0, _.Ac)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: T,
          ...A
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}