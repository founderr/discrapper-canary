"use strict";
t.r(a), t.d(a, {
  useTwoWayLinkModalSlideManager: function() {
    return i
  }
}), t("47120");
var n = t("470079"),
  s = t("110924"),
  l = t("626135"),
  r = t("798930"),
  o = t("981631");

function i(e, a) {
  let [t, i] = n.useState(r.TwoWayLinkModalSlideTypes.LANDING), c = (0, s.default)(t), [d, u] = n.useState(null), [N, h] = n.useState(null), x = n.useCallback(() => {
    switch (t) {
      case r.TwoWayLinkModalSlideTypes.LANDING:
        i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT);
        break;
      case r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
        i(r.TwoWayLinkModalSlideTypes.SUCCESS);
        break;
      case r.TwoWayLinkModalSlideTypes.ERROR:
        i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT)
    }
  }, [t]), m = n.useCallback(() => {
    u(null), i(r.TwoWayLinkModalSlideTypes.ERROR)
  }, []), C = n.useCallback(e => {
    u(e), i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING)
  }, []), T = n.useCallback(e => {
    u(null), h(e), i(r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT)
  }, []);
  return n.useEffect(() => {
    t !== c && l.default.track(o.AnalyticEvents.ACCOUNT_LINK_STEP, {
      location_stack: e,
      previous_step: c,
      current_step: t,
      platform_type: a
    })
  }, [t, c, e, a]), {
    slide: t,
    gotoNext: x,
    gotoError: m,
    handleWaitingForConnection: C,
    handleAuthToken: T,
    expectedCallbackState: d,
    callbackData: N
  }
}