"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("47120");
var a = s("442837"),
  n = s("524437"),
  l = s("634894"),
  i = s("924557"),
  r = s("706140"),
  o = s("246208"),
  d = s("386346"),
  u = s("641826"),
  c = s("631885"),
  S = s("160913"),
  E = s("725727"),
  T = s("663389"),
  f = s("202022");

function m() {
  let e = (0, E.useUnseenOutboundPromotions)().length,
    t = (0, S.useIsPrepaidPaymentPastDue)(),
    s = (0, a.useStateFromStores)([T.default], () => T.default.getProps().impressionSource),
    m = (0, c.usePendingRequestCount)(),
    _ = (0, i.useEnableClips)(),
    [g] = (0, r.useGetDismissibleContent)(_ ? [n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    h = (0, a.useStateFromStores)([d.default], () => d.default.tempShowLootboxSettings),
    N = (0, u.useShouldShowMainLootboxEntrypoint)("user_settings"),
    {
      allowOpeningLootboxes: I
    } = o.default.useExperiment({
      location: "user_settings"
    }, {
      autoTrackExposure: !1
    }),
    p = "useGenerateUserSettingsSections";
  return (0, l.useTriggerDebuggingAA)({
    location: p + " auto on",
    autoTrackExposure: !0
  }), (0, l.useTriggerDebuggingAA)({
    location: p + " auto off",
    autoTrackExposure: !1
  }), (0, f.default)({
    unseenGiftCount: e,
    showPrepaidPaymentPastDueWarning: t,
    impressionSource: s,
    numOfPendingFamilyRequests: m,
    isClipsBetaTagShowing: g === n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    isLootboxesTabShowing: h || N,
    isLootboxesEnabled: I
  })
}