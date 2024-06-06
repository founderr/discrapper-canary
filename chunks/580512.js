"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  s = n("717881"),
  a = n("906732"),
  o = n("199902"),
  l = n("158776"),
  u = n("594174"),
  d = n("785717"),
  _ = n("221292"),
  c = n("981631"),
  E = n("10268");

function I(e) {
  let {
    user: t,
    guild: n,
    channelId: I,
    onClose: T
  } = e, {
    analyticsLocations: f,
    newestAnalyticsLocation: S
  } = (0, a.default)(), {
    trackUserProfileAction: h,
    ...A
  } = (0, d.useUserProfileAnalyticsContext)(), m = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), {
    isApplicationStreaming: N,
    activity: p
  } = (0, r.useStateFromStoresObject)([o.default, l.default], () => {
    let e = null != o.default.getAnyStreamForUser(t.id);
    return {
      isApplicationStreaming: e,
      activity: e ? l.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === c.ActivityTypes.PLAYING
      }) : l.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t !== c.ActivityTypes.CUSTOM_STATUS
      })
    }
  });
  return (0, i.jsx)(s.default, {
    type: s.UserActivityTypes.BITE_SIZE_POPOUT,
    activity: p,
    className: E.activity,
    source: S,
    user: t,
    guildId: null == n ? void 0 : n.id,
    channelId: I,
    onOpenGameProfile: T,
    onAction: () => {
      h({
        action: "JOIN_ACTIVITY"
      }), (0, _.trackUserProfileActivityJoined)({
        activityType: N ? c.ActivityTypes.STREAMING : null == p ? void 0 : p.type,
        activityName: null == p ? void 0 : p.name,
        activityPlatform: null == p ? void 0 : p.platform,
        activitySessionId: null == p ? void 0 : p.session_id,
        applicationId: null == p ? void 0 : p.application_id,
        analyticsLocations: f,
        ...A
      }), null == T || T()
    },
    showActions: t.id !== (null == m ? void 0 : m.id),
    actionColor: E.buttonColor,
    showChannelDetails: !0
  })
}