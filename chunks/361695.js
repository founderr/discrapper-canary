"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("442837"),
  n = s("524437"),
  l = s("634894"),
  i = s("924557"),
  r = s("706140"),
  o = s("386346"),
  d = s("641826"),
  u = s("631885"),
  c = s("160913"),
  S = s("725727"),
  E = s("663389"),
  T = s("202022");

function f() {
  let e = (0, S.useUnseenOutboundPromotions)().length,
    t = (0, c.useIsPrepaidPaymentPastDue)(),
    s = (0, a.useStateFromStores)([E.default], () => E.default.getProps().impressionSource),
    f = (0, u.usePendingRequestCount)(),
    m = (0, i.useEnableClips)(),
    [_] = (0, r.useGetDismissibleContent)(m ? [n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    g = (0, a.useStateFromStores)([o.default], () => o.default.tempShowLootboxSettings),
    h = (0, d.useShouldShowMainLootboxEntrypoint)("user_settings"),
    N = "useGenerateUserSettingsSections";
  return (0, l.useTriggerDebuggingAA)({
    location: N + " auto on",
    autoTrackExposure: !0
  }), (0, l.useTriggerDebuggingAA)({
    location: N + " auto off",
    autoTrackExposure: !1
  }), (0, T.default)({
    unseenGiftCount: e,
    showPrepaidPaymentPastDueWarning: t,
    impressionSource: s,
    numOfPendingFamilyRequests: f,
    isClipsBetaTagShowing: _ === n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    isLootboxesShowing: g || h
  })
}