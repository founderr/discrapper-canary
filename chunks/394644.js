"use strict";
s.r(t), s.d(t, {
  getSearchableSettingTitles: function() {
    return x
  },
  useDefaultUserSettingsSections: function() {
    return O
  },
  useGenerateUserSettingsSections: function() {
    return C
  },
  useSearchUserSettingsSections: function() {
    return R
  },
  useViewableSettingsFilterFromSearch: function() {
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
  g = s("839469"),
  I = s("726985"),
  N = s("689938");

function h() {
  return [{
    header: N.default.Messages.USER_SETTINGS,
    settings: [I.WebSetting.SEARCH_BAR, I.WebSetting.ACCOUNT, I.WebSetting.GAMES, I.WebSetting.PROFILE_CUSTOMIZATION, I.WebSetting.PRIVACY_AND_SAFETY, I.WebSetting.PRIVACY_FAMILY_CENTER, I.WebSetting.AUTHORIZED_APPS, I.WebSetting.SESSIONS, I.WebSetting.CONNECTIONS, I.WebSetting.CLIPS, I.WebSetting.FRIEND_REQUESTS]
  }, {
    header: N.default.Messages.BILLING_SETTINGS,
    divider: !0,
    settings: [I.WebSetting.PREMIUM, I.WebSetting.GUILD_BOOSTING, I.WebSetting.SUBSCRIPTIONS, I.WebSetting.GIFT_INVENTORY, I.WebSetting.BILLING]
  }, {
    header: N.default.Messages.APP_SETTINGS,
    divider: !0,
    settings: [I.WebSetting.APPEARANCE, I.WebSetting.ACCESSIBILITY, I.WebSetting.VOICE_AND_VIDEO, I.WebSetting.POGGERMODE, I.WebSetting.CHAT, I.WebSetting.NOTIFICATIONS, I.WebSetting.KEYBINDS, I.WebSetting.LANGUAGE, I.WebSetting.WINDOW_SETTINGS, I.WebSetting.LINUX_SETTINGS, I.WebSetting.STREAMER_MODE, I.WebSetting.SPEED_TEST, I.WebSetting.SETTINGS_ADVANCED]
  }, {
    header: N.default.Messages.ACTIVITY_SETTINGS,
    divider: !0,
    settings: [I.WebSetting.ACTIVITY_PRIVACY, I.WebSetting.REGISTERED_GAMES, I.WebSetting.OVERLAY]
  }, {
    divider: !0,
    settings: [I.WebSetting.CHANGELOG, I.WebSetting.MERCHANDISE, I.WebSetting.HYPESQUAD, I.WebSetting.EXPERIMENTS, I.WebSetting.DEVELOPER_OPTIONS, I.WebSetting.HOTSPOT_OPTIONS, I.WebSetting.DISMISSIBLE_CONTENT_OPTIONS, I.WebSetting.PAYMENT_FLOW_MODALS, I.WebSetting.DESIGN_SYSTEMS, I.WebSetting.TEXT_PLAYGROUND, I.WebSetting.TEXT_COMPONENTS, I.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL, I.WebSetting.QUEST_PREVIEW_TOOL]
  }, {
    divider: !0,
    settings: [I.WebSetting.LOGOUT]
  }, {
    divider: !0,
    settings: [I.WebSetting.SOCIAL_LINKS, I.WebSetting.CLIENT_DEBUG_INFO]
  }, {
    settings: [I.WebSetting.SEARCH_NO_RESULTS]
  }]
}

function C() {
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

function A(e) {
  let {
    searchResults: t
  } = (0, g.useSettingSearchResults)(), s = C(), a = s[e], n = Object.fromEntries(Object.entries(s).filter(e => {
    let [t, {
      parent: s,
      section: n
    }] = e;
    return null != s && n === a.section
  }).map(e => {
    let [t, {
      parent: s
    }] = e;
    return [t, s]
  })), l = new Set, i = e => {
    if (l.has(e)) return;
    l.add(e);
    let t = s[e].parent;
    t && i(t)
  }, r = e => {
    if (!l.has(e))
      for (let t of (l.add(e), Object.entries(n).filter(t => {
          let [s, a] = t;
          return a === e
        }).map(e => {
          let [t] = e;
          return t
        }))) r(t)
  };
  for (let e of t)
    if (null != s[e].element && null == s[e].parent) {
      l.clear();
      break
    } else Object.values(n).includes(e) && r(e), i(e);
  return l
}

function p(e, t, s) {
  let a = [],
    n = function(e, t) {
      let s = new Map;
      return null != t && t.forEach(t => {
        let a = e[t].parent;
        for (; null != a && null != e[a].parent;) a = e[a].parent;
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
          return null == s || (t = e, a = s, l = n, t === I.WebSetting.SEARCH_BAR || t === I.WebSetting.SEARCH_NO_RESULTS && 0 === a.size || l.has(t) || a.has(t))
        },
        searchFilterCount: (null == s ? void 0 : s.has(e)) ? void 0 : n.get(e)
      })
    }))
  }), a
}

function O() {
  let e = C(),
    t = a.useMemo(() => h(), []);
  return a.useMemo(() => p(t, e), [t, e])
}

function R(e) {
  let t = C(),
    s = a.useMemo(() => (function() {
      let e = h();
      return [{
        header: N.default.Messages.USER_SETTINGS,
        settings: e.map(e => {
          let {
            settings: t
          } = e;
          return t
        }).flat(1)
      }]
    })(), []);
  return a.useMemo(() => p(s, t, new Set(e)), [s, t, e])
}

function x(e) {
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