"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  r = s("77078"),
  o = s("463848"),
  n = s("373469"),
  u = s("824563"),
  d = s("765698"),
  c = s("453649"),
  f = s("49111"),
  S = s("251300"),
  m = s("155502");

function E(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([n.default], () => null != n.default.getAnyStreamForUser(t.id)), E = (0, i.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), T = l.useMemo(() => E.filter(e => e.type !== f.ActivityTypes.CUSTOM_STATUS), [E]), p = l.useMemo(() => s ? T.find(e => e.type === f.ActivityTypes.PLAYING) : null, [T, s]), x = l.useMemo(() => T.filter(e => e !== p), [p, T]), N = (0, c.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), h = null != N && !s, {
    showVoiceActivityInProfile: v
  } = d.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: h
  }), A = {
    location: {
      page: f.AnalyticsPages.USER_PROFILE,
      section: f.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, a.jsxs)(r.ScrollerThin, {
    className: m.listScroller,
    fade: !0,
    children: [v && h ? (0, a.jsx)("div", {
      className: S.voiceActivity,
      children: (0, a.jsx)(c.default, {
        ...N,
        color: S.actionColor
      })
    }) : null, s ? (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: S.userProfileActivity,
      activity: p,
      actionColor: S.actionColor,
      analyticsParams: A
    }) : null, x.map(e => (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: S.userProfileActivity,
      actionColor: S.actionColor,
      analyticsParams: A
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}