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
      settings: [_.WebSetting.ACCOUNT, _.WebSetting.GAMES, _.WebSetting.PROFILE_CUSTOMIZATION, _.WebSetting.PRIVACY_AND_SAFETY, _.WebSetting.FAMILY_CENTER, _.WebSetting.AUTHORIZED_APPS, _.WebSetting.SESSIONS, _.WebSetting.CONNECTIONS, _.WebSetting.CLIPS, _.WebSetting.FRIEND_REQUESTS]
    }, {
      header: g.default.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [_.WebSetting.PREMIUM, _.WebSetting.GUILD_BOOSTING, _.WebSetting.SUBSCRIPTIONS, _.WebSetting.GIFT_INVENTORY, _.WebSetting.BILLING]
    }, {
      header: g.default.Messages.APP_SETTINGS,
      divider: !0,
      settings: [_.WebSetting.APPEARANCE, _.WebSetting.ACCESSIBILITY, _.WebSetting.VOICE_AND_VIDEO, _.WebSetting.POGGERMODE, _.WebSetting.CHAT, _.WebSetting.NOTIFICATIONS, _.WebSetting.KEYBINDS, _.WebSetting.LANGUAGE, _.WebSetting.WINDOW_SETTINGS, _.WebSetting.LINUX_SETTINGS, _.WebSetting.STREAMER_MODE, _.WebSetting.SPEED_TEST, _.WebSetting.SETTINGS_ADVANCED]
    }, {
      header: g.default.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [_.WebSetting.ACTIVITY_PRIVACY, _.WebSetting.REGISTERED_GAMES, _.WebSetting.OVERLAY]
    }, {
      divider: !0,
      settings: [_.WebSetting.CHANGELOG, _.WebSetting.MERCHANDISE, _.WebSetting.HYPESQUAD, _.WebSetting.EXPERIMENTS, _.WebSetting.DEVELOPER_OPTIONS, _.WebSetting.HOTSPOT_OPTIONS, _.WebSetting.DISMISSIBLE_CONTENT_OPTIONS, _.WebSetting.PAYMENT_FLOW_MODALS, _.WebSetting.TEXT_PLAYGROUND, _.WebSetting.TEXT_COMPONENTS, _.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL, _.WebSetting.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [_.WebSetting.LOGOUT]
    }, {
      divider: !0,
      settings: [_.WebSetting.SOCIAL_LINKS, _.WebSetting.CLIENT_DEBUG_INFO]
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