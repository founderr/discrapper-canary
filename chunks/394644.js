"use strict";
s.r(t), s.d(t, {
  getSearchableSettingTitles: function() {
    return O
  },
  useDefaultUserSettingsSections: function() {
    return p
  },
  useGenerateUserSettingsSections: function() {
    return h
  },
  useSearchUserSettingsSections: function() {
    return A
  }
}), s("536091"), s("47120"), s("653041");
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
  _ = s("620163"),
  f = s("295545"),
  m = s("168308"),
  g = s("726985"),
  I = s("689938");

function N() {
  return [{
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
    settings: [g.WebSetting.CHANGELOG, g.WebSetting.MERCHANDISE, g.WebSetting.HYPESQUAD, g.WebSetting.EXPERIMENTS, g.WebSetting.DEVELOPER_OPTIONS, g.WebSetting.HOTSPOT_OPTIONS, g.WebSetting.DISMISSIBLE_CONTENT_OPTIONS, g.WebSetting.PAYMENT_FLOW_MODALS, g.WebSetting.DESIGN_SYSTEMS, g.WebSetting.TEXT_PLAYGROUND, g.WebSetting.TEXT_COMPONENTS, g.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL, g.WebSetting.QUEST_PREVIEW_TOOL]
  }, {
    divider: !0,
    settings: [g.WebSetting.LOGOUT]
  }, {
    divider: !0,
    settings: [g.WebSetting.SOCIAL_LINKS, g.WebSetting.CLIENT_DEBUG_INFO]
  }, {
    settings: [g.WebSetting.SEARCH_NO_RESULTS]
  }]
}

function h() {
  let e = (0, S.useUnseenOutboundPromotions)().length,
    t = (0, c.useIsPrepaidPaymentPastDue)(),
    s = (0, n.useStateFromStores)([E.default], () => E.default.getProps().impressionSource),
    a = (0, u.usePendingRequestCount)(),
    i = (0, m.useShouldShowOverlaySettings)(),
    g = (0, o.useEnableClips)(),
    [I] = (0, d.useGetDismissibleContent)(g ? [l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    N = "useGenerateUserSettingsSections";
  (0, r.useTriggerDebuggingAA)({
    location: N + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: N + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: h
  } = T.GameSettingsMergeExperiment.useExperiment({
    location: "settings"
  }), C = (0, f.useIsEligibleForUserSettingsSearchDesktop)({
    location: "settings"
  });
  return (0, _.getConfig)({
    unseenGiftCount: e,
    showPrepaidPaymentPastDueWarning: t,
    impressionSource: s,
    numOfPendingFamilyRequests: a,
    isOverlaySupported: i,
    isClipsBetaTagShowing: I === l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: h,
    isUserSettingsSearchEnabled: C
  })
}

function C(e, t, s) {
  let a = [],
    n = function(e, t) {
      let s = new Map;
      return null != t && t.forEach(t => {
        let a = e[t].parent;
        if (null != a) {
          var n;
          let e = null !== (n = s.get(a)) && void 0 !== n ? n : 0;
          s.set(a, e + 1)
        }
      }), s
    }(t, s);
  return e.forEach(e => {
    0 !== e.settings.length && (!0 === e.divider && a.push({
      section: i.SectionTypes.DIVIDER
    }), null != e.header && a.push({
      section: i.SectionTypes.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      a.push({
        ...t[e],
        tabPredicate: () => {
          var t, a, l;
          return null == s || (t = e, a = s, l = n, t === g.WebSetting.SEARCH_BAR || t === g.WebSetting.SEARCH_NO_RESULTS && 0 === a.size || l.has(t) || a.has(t))
        },
        searchFilterCount: (null == s ? void 0 : s.has(e)) ? void 0 : n.get(e)
      })
    }))
  }), a
}

function p() {
  let e = h(),
    t = a.useMemo(() => N(), []);
  return a.useMemo(() => C(t, e), [t, e])
}

function A(e) {
  let t = h(),
    s = a.useMemo(() => (function() {
      let e = N();
      return [{
        header: I.default.Messages.USER_SETTINGS,
        settings: e.map(e => {
          let {
            settings: t
          } = e;
          return t
        }).flat(1)
      }]
    })(), []);
  return a.useMemo(() => C(s, t, new Set(e)), [s, t, e])
}

function O(e) {
  return Object.entries(e).filter(e => {
    let [t, s] = e;
    return s.section !== i.SectionTypes.CUSTOM && null != s.searchableTitle
  }).map(e => {
    let [t, {
      searchableTitle: s
    }] = e;
    return [t, s]
  })
}