"use strict";
s.r(t), s.d(t, {
  getSearchableSettingTitles: function() {
    return A
  },
  useDefaultUserSettingsSections: function() {
    return p
  },
  useGenerateUserSettingsSections: function() {
    return h
  },
  useSearchUserSettingsSections: function() {
    return C
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
  _ = s("295545"),
  m = s("168308"),
  g = s("726985"),
  I = s("689938");

function h() {
  let e = (0, S.useUnseenOutboundPromotions)().length,
    t = (0, c.useIsPrepaidPaymentPastDue)(),
    s = (0, n.useStateFromStores)([E.default], () => E.default.getProps().impressionSource),
    a = (0, u.usePendingRequestCount)(),
    i = (0, m.useShouldShowOverlaySettings)(),
    g = (0, o.useEnableClips)(),
    [I] = (0, d.useGetDismissibleContent)(g ? [l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    h = "useGenerateUserSettingsSections";
  (0, r.useTriggerDebuggingAA)({
    location: h + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: h + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: N
  } = T.GameSettingsMergeExperiment.useExperiment({
    location: "settings"
  }), p = (0, _.useIsEligibleForUserSettingsSearchDesktop)({
    location: "settings"
  });
  return (0, f.getConfig)({
    unseenGiftCount: e,
    showPrepaidPaymentPastDueWarning: t,
    impressionSource: s,
    numOfPendingFamilyRequests: a,
    isOverlaySupported: i,
    isClipsBetaTagShowing: I === l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: N,
    isUserSettingsSearchEnabled: p
  })
}

function N(e, t) {
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
}

function p() {
  let e = h(),
    t = a.useMemo(() => [{
      header: I.default.Messages.USER_SETTINGS,
      settings: [g.WebSetting.SEARCH_BAR, g.WebSetting.ACCOUNT, g.WebSetting.GAMES, g.WebSetting.PROFILE_CUSTOMIZATION, g.WebSetting.PRIVACY_AND_SAFETY, g.WebSetting.FAMILY_CENTER, g.WebSetting.AUTHORIZED_APPS, g.WebSetting.SESSIONS, g.WebSetting.CONNECTIONS, g.WebSetting.CLIPS, g.WebSetting.FRIEND_REQUESTS]
    }, {
      header: I.default.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [g.WebSetting.PREMIUM, g.WebSetting.GUILD_BOOSTING, g.WebSetting.SUBSCRIPTIONS, g.WebSetting.GIFT_INVENTORY, g.WebSetting.BILLING]
    }, {
      header: I.default.Messages.APP_SETTINGS,
      divider: !0,
      settings: [g.WebSetting.APPEARANCE, g.WebSetting.ACCESSIBILITY, g.WebSetting.VOICE_AND_VIDEO, g.WebSetting.POGGERMODE, g.WebSetting.CHAT, g.WebSetting.NOTIFICATIONS, g.WebSetting.KEYBINDS, g.WebSetting.LANGUAGE, g.WebSetting.WINDOW_SETTINGS, g.WebSetting.LINUX_SETTINGS, g.WebSetting.STREAMER_MODE, g.WebSetting.SPEED_TEST, g.WebSetting.SETTINGS_ADVANCED]
    }, {
      header: I.default.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [g.WebSetting.ACTIVITY_PRIVACY, g.WebSetting.REGISTERED_GAMES, g.WebSetting.OVERLAY]
    }, {
      divider: !0,
      settings: [g.WebSetting.CHANGELOG, g.WebSetting.MERCHANDISE, g.WebSetting.HYPESQUAD, g.WebSetting.EXPERIMENTS, g.WebSetting.DEVELOPER_OPTIONS, g.WebSetting.HOTSPOT_OPTIONS, g.WebSetting.DISMISSIBLE_CONTENT_OPTIONS, g.WebSetting.PAYMENT_FLOW_MODALS, g.WebSetting.TEXT_PLAYGROUND, g.WebSetting.TEXT_COMPONENTS, g.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL, g.WebSetting.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [g.WebSetting.LOGOUT]
    }, {
      divider: !0,
      settings: [g.WebSetting.SOCIAL_LINKS, g.WebSetting.CLIENT_DEBUG_INFO]
    }], []);
  return a.useMemo(() => N(t, e), [t, e])
}

function C(e) {
  let t = h();
  return a.useMemo(() => N([{
    header: I.default.Messages.USER_SETTINGS,
    settings: [g.WebSetting.SEARCH_BAR, ...e]
  }], t), [e, t])
}

function A(e) {
  return Object.entries(e).filter(e => {
    let [t, s] = e;
    return s.section !== i.SectionTypes.CUSTOM
  }).map(e => {
    let [t, {
      section: s
    }] = e;
    return [t, s]
  })
}