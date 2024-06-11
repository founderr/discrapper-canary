"use strict";
s.r(t), s.d(t, {
  getSearchableSettingsTitles: function() {
    return j
  },
  useDefaultUserSettingsSections: function() {
    return b
  },
  useGenerateUserSettingsSections: function() {
    return x
  },
  useSearchUserSettingsSections: function() {
    return v
  },
  useViewableSettingsFilterFromSearch: function() {
    return L
  }
}), s("639576"), s("536091"), s("47120"), s("653041");
var a = s("470079"),
  n = s("442837"),
  i = s("704215"),
  l = s("493544"),
  r = s("634894"),
  o = s("211242"),
  d = s("924557"),
  u = s("706140"),
  c = s("592204"),
  S = s("631885"),
  E = s("223639"),
  T = s("160913"),
  _ = s("725727"),
  I = s("977156"),
  N = s("237292"),
  g = s("663389"),
  f = s("594174"),
  m = s("202527"),
  A = s("620163"),
  C = s("295545"),
  O = s("168308"),
  h = s("839469"),
  R = s("726985"),
  p = s("46140"),
  M = s("689938");

function D(e) {
  let t = [{
      header: M.default.Messages.USER_SETTINGS,
      settings: [R.WebSetting.SEARCH_BAR, R.WebSetting.ACCOUNT, R.WebSetting.GAMES, R.WebSetting.PROFILE_CUSTOMIZATION, R.WebSetting.PRIVACY_AND_SAFETY, R.WebSetting.PRIVACY_FAMILY_CENTER, R.WebSetting.AUTHORIZED_APPS, R.WebSetting.SESSIONS, R.WebSetting.CONNECTIONS, R.WebSetting.CLIPS, R.WebSetting.FRIEND_REQUESTS]
    }, {
      header: M.default.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [R.WebSetting.PREMIUM, R.WebSetting.GUILD_BOOSTING, R.WebSetting.SUBSCRIPTIONS, R.WebSetting.GIFT_INVENTORY, R.WebSetting.BILLING]
    }, {
      header: M.default.Messages.APP_SETTINGS,
      divider: !0,
      settings: [R.WebSetting.APPEARANCE, R.WebSetting.ACCESSIBILITY, R.WebSetting.VOICE_AND_VIDEO, R.WebSetting.POGGERMODE, R.WebSetting.CHAT, R.WebSetting.NOTIFICATIONS, R.WebSetting.KEYBINDS, R.WebSetting.LANGUAGE, R.WebSetting.WINDOW_SETTINGS, R.WebSetting.LINUX_SETTINGS, R.WebSetting.STREAMER_MODE, R.WebSetting.SPEED_TEST, R.WebSetting.SETTINGS_ADVANCED]
    }, {
      divider: !0,
      settings: [R.WebSetting.CHANGELOG, R.WebSetting.MERCHANDISE, R.WebSetting.HYPESQUAD, R.WebSetting.EXPERIMENTS, R.WebSetting.DEVELOPER_OPTIONS, R.WebSetting.HOTSPOT_OPTIONS, R.WebSetting.DISMISSIBLE_CONTENT_OPTIONS, R.WebSetting.PAYMENT_FLOW_MODALS, R.WebSetting.DESIGN_SYSTEMS, R.WebSetting.TEXT_PLAYGROUND, R.WebSetting.TEXT_COMPONENTS, R.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL, R.WebSetting.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [R.WebSetting.LOGOUT]
    }, {
      divider: !0,
      settings: [R.WebSetting.SOCIAL_LINKS, R.WebSetting.CLIENT_DEBUG_INFO]
    }],
    s = {
      header: M.default.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [R.WebSetting.ACTIVITY_PRIVACY, R.WebSetting.REGISTERED_GAMES, R.WebSetting.OVERLAY]
    };
  return e ? t : t.toSpliced(3, 0, s)
}

function x() {
  var e, t;
  let s = (0, _.useUnseenOutboundPromotions)().length,
    a = (0, T.useIsPrepaidPaymentPastDue)(),
    l = (0, n.useStateFromStores)([g.default], () => g.default.getProps().impressionSource),
    h = (0, S.usePendingRequestCount)(),
    R = (0, O.useShouldShowOverlaySettings)(),
    M = (0, d.useEnableClips)(),
    [D] = (0, u.useGetDismissibleContent)(M ? [i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    x = "useGenerateUserSettingsSections";
  (0, r.useTriggerDebuggingAA)({
    location: x + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: x + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: L
  } = m.GameSettingsMergeExperiment.useExperiment({
    location: "settings"
  }), P = (0, C.useIsEligibleForUserSettingsSearchDesktop)({
    location: "settings"
  }), b = (0, c.useIsEligibleForKeywordFiltering)({
    location: "settings"
  }), v = null !== (t = null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t, U = (0, N.useIsEligibleForInappropriateConversationWarning)({
    location: "settings"
  }), j = (0, o.useBlockedPaymentsConfig)(), G = (0, I.useIsEligibleForQuests)({
    location: p.QuestsExperimentLocations.USER_SETTINGS_SEARCH_GIFT_INVENTORY
  }), {
    enabled: F
  } = E.default.useExperiment({
    location: "UserSettingsInventory"
  }, {
    autoTrackExposure: !0
  });
  return (0, A.getConfig)({
    unseenGiftCount: s,
    showPrepaidPaymentPastDueWarning: a,
    impressionSource: l,
    numOfPendingFamilyRequests: h,
    isOverlaySupported: R,
    isClipsBetaTagShowing: D === i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: L,
    isUserSettingsSearchEnabled: P,
    isKeywordFilteringEnabled: b,
    isStaff: v,
    isInappropriateConversationWarningEnabled: U,
    paymentsBlocked: j,
    isEligibleForQuests: G,
    showGiftNitro: F
  })
}

function L(e) {
  let {
    searchResults: t
  } = (0, h.useSettingSearchResults)(), s = x();
  if (!(0, C.useIsEligibleForUserSettingsSearchDesktop)({
      location: "settings"
    })) return new Set;
  let a = s[e],
    n = Object.fromEntries(Object.entries(s).filter(e => {
      let [t, s] = e;
      return s.section === a.section
    })),
    i = Object.fromEntries(Object.entries(n).filter(e => {
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
    })),
    l = new Set,
    r = e => {
      let t = n[e];
      if (null == t) return;
      l.add(e);
      let s = t.parent;
      null != s && r(s)
    },
    o = e => {
      for (let t of (l.add(e), Object.entries(i).filter(t => {
          let [s, a] = t;
          return a === e
        }).map(e => {
          let [t] = e;
          return t
        }))) o(t)
    };
  for (let e of t.filter(e => e in n))
    if (!l.has(e)) {
      if (null != n[e].element && null == n[e].parent) {
        l.clear();
        break
      }
      Object.values(i).includes(e) && o(e), r(e)
    } return l
}

function P(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = arguments.length > 3 ? arguments[3] : void 0,
    n = [],
    i = U(t),
    r = function(e, t) {
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
    }(t, new Set(Array.from(null != a ? a : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (!0 === e.divider && n.push({
      section: l.SectionTypes.DIVIDER
    }), null != e.header && n.push({
      section: l.SectionTypes.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      n.push({
        ...t[e],
        tabPredicate: () => {
          var t, s, n;
          return null == a || (t = e, s = a, n = r, t === R.WebSetting.SEARCH_BAR || t === R.WebSetting.SEARCH_NO_RESULTS && 0 === s.size || n.has(t) || s.has(t))
        },
        searchFilterCount: !s || (null == a ? void 0 : a.has(e)) ? void 0 : r.get(e)
      })
    }))
  }), n
}

function b() {
  let e = x(),
    {
      shouldMergeGameSettings: t
    } = m.GameSettingsMergeExperiment.useExperiment({
      location: "settings"
    }),
    s = a.useMemo(() => D(t), [t]);
  return a.useMemo(() => P(s, e), [s, e])
}

function v(e) {
  let t = x(),
    s = function() {
      let {
        shouldMergeGameSettings: e
      } = m.GameSettingsMergeExperiment.useExperiment({
        location: "settings"
      }), t = D(e);
      return a.useMemo(() => [{
        header: M.default.Messages.USER_SETTINGS,
        settings: [...t.map(e => {
          let {
            settings: t
          } = e;
          return t
        }).flat(1), R.WebSetting.SEARCH_NO_RESULTS]
      }], [t])
    }(),
    n = (0, C.useIsEligibleForUserSettingsSearchDesktopWithCount)({
      location: "settings"
    });
  return a.useMemo(() => P(s, t, n, new Set(e)), [s, t, n, e])
}

function U(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, s] = e;
    return s.section !== l.SectionTypes.CUSTOM && null != s.searchableTitle && (null == s.predicate || s.predicate())
  }))
}

function j(e) {
  return Array.from(U(e).entries()).map(e => {
    let [t, s] = e;
    return [t, s.searchableTitle]
  })
}