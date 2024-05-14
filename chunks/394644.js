"use strict";
s.r(t), s.d(t, {
  useDefaultUserSettingsSections: function() {
    return I
  }
}), s("47120"), s("653041");
var a = s("470079"),
  n = s("442837"),
  l = s("524437"),
  i = s("493544"),
  r = s("634894"),
  o = s("924557"),
  d = s("706140"),
  u = s("631885"),
  c = s("160913"),
  S = s("725727"),
  E = s("663389"),
  T = s("202527"),
  f = s("620163"),
  m = s("168308"),
  _ = s("726985"),
  g = s("689938");

function I() {
  let e = function() {
      let e = (0, S.useUnseenOutboundPromotions)().length,
        t = (0, c.useIsPrepaidPaymentPastDue)(),
        s = (0, n.useStateFromStores)([E.default], () => E.default.getProps().impressionSource),
        a = (0, u.usePendingRequestCount)(),
        i = (0, m.useShouldShowOverlaySettings)(),
        _ = (0, o.useEnableClips)(),
        [g] = (0, d.useGetDismissibleContent)(_ ? [l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
        I = "useGenerateUserSettingsSections";
      (0, r.useTriggerDebuggingAA)({
        location: I + " auto on",
        autoTrackExposure: !0
      }), (0, r.useTriggerDebuggingAA)({
        location: I + " auto off",
        autoTrackExposure: !1
      });
      let {
        shouldMergeGameSettings: h
      } = T.GameSettingsMergeExperiment.useExperiment({
        location: "settings"
      });
      return (0, f.getConfig)({
        unseenGiftCount: e,
        showPrepaidPaymentPastDueWarning: t,
        impressionSource: s,
        numOfPendingFamilyRequests: a,
        isOverlaySupported: i,
        isClipsBetaTagShowing: g === l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: h
      })
    }(),
    t = a.useMemo(() => [{
      header: g.default.Messages.USER_SETTINGS,
      settings: [_.Setting.ACCOUNT, _.Setting.GAMES, _.Setting.PROFILE_CUSTOMIZATION, _.Setting.PRIVACY_AND_SAFETY, _.Setting.FAMILY_CENTER, _.Setting.AUTHORIZED_APPS, _.Setting.SESSIONS, _.Setting.CONNECTIONS, _.Setting.CLIPS, _.Setting.FRIEND_REQUESTS]
    }, {
      header: g.default.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [_.Setting.PREMIUM, _.Setting.GUILD_BOOSTING, _.Setting.SUBSCRIPTIONS, _.Setting.GIFT_INVENTORY, _.Setting.BILLING]
    }, {
      header: g.default.Messages.APP_SETTINGS,
      divider: !0,
      settings: [_.Setting.APPEARANCE, _.Setting.ACCESSIBILITY, _.Setting.VOICE_AND_VIDEO, _.Setting.POGGERMODE, _.Setting.CHAT, _.Setting.NOTIFICATIONS, _.Setting.KEYBINDS, _.Setting.LANGUAGE, _.Setting.WINDOW_SETTINGS, _.Setting.LINUX_SETTINGS, _.Setting.STREAMER_MODE, _.Setting.SPEED_TEST, _.Setting.SETTINGS_ADVANCED]
    }, {
      header: g.default.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [_.Setting.ACTIVITY_PRIVACY, _.Setting.REGISTERED_GAMES, _.Setting.OVERLAY]
    }, {
      divider: !0,
      settings: [_.Setting.CHANGELOG, _.Setting.MERCHANDISE, _.Setting.HYPESQUAD, _.Setting.EXPERIMENTS, _.Setting.DEVELOPER_OPTIONS, _.Setting.HOTSPOT_OPTIONS, _.Setting.DISMISSIBLE_CONTENT_OPTIONS, _.Setting.PAYMENT_FLOW_MODALS, _.Setting.TEXT_PLAYGROUND, _.Setting.TEXT_COMPONENTS, _.Setting.PROFILE_EFFECTS_PREVIEW_TOOL, _.Setting.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [_.Setting.LOGOUT]
    }, {
      divider: !0,
      settings: [_.Setting.SOCIAL_LINKS, _.Setting.CLIENT_DEBUG_INFO]
    }], []);
  return a.useMemo(() => (function(e, t) {
    let s = [];
    return e.forEach(e => {
      0 !== e.settings.length && (!0 === e.divider && s.push({
        section: i.SectionTypes.DIVIDER
      }), null != e.header && s.push({
        section: i.SectionTypes.HEADER,
        label: e.header
      }), e.settings.forEach(e => {
        s.push(t[e])
      }))
    }), s
  })(t, e), [t, e])
}