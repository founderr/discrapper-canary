"use strict";
n.r(t);
var i = n("759843"),
  a = n("913144"),
  l = n("271938"),
  s = n("49111");
(0, i.analyticsTrackingStoreMaker)({
  dispatcher: a.default,
  actionHandler: {
    CONNECTION_OPEN: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
    OVERLAY_INITIALIZE: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
    CURRENT_USER_UPDATE: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
    CONNECTION_CLOSED: () => i.AnalyticsActionHandlers.handleConnectionClosed(),
    FINGERPRINT: () => i.AnalyticsActionHandlers.handleFingerprint(),
    TRACK: e => i.AnalyticsActionHandlers.handleTrack(e)
  },
  TRACKING_URL: s.Endpoints.TRACK,
  waitFor: [l.default],
  getFingerprint: l.default.getFingerprint
})