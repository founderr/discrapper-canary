"use strict";
s.r(t), s.d(t, {
  getSearchableSettingTitles: function() {
    return x
  },
  useDefaultUserSettingsSections: function() {
    return p
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
  I = s("168308"),
  m = s("839469"),
  N = s("726985"),
  g = s("689938");

function h() {
  return [{
    header: g.default.Messages.USER_SETTINGS,
    settings: [N.WebSetting.SEARCH_BAR, N.WebSetting.ACCOUNT, N.WebSetting.GAMES, N.WebSetting.PROFILE_CUSTOMIZATION, N.WebSetting.PRIVACY_AND_SAFETY, N.WebSetting.PRIVACY_FAMILY_CENTER, N.WebSetting.AUTHORIZED_APPS, N.WebSetting.SESSIONS, N.WebSetting.CONNECTIONS, N.WebSetting.CLIPS, N.WebSetting.FRIEND_REQUESTS]
  }, {
    header: g.default.Messages.BILLING_SETTINGS,
    divider: !0,
    settings: [N.WebSetting.PREMIUM, N.WebSetting.GUILD_BOOSTING, N.WebSetting.SUBSCRIPTIONS, N.WebSetting.GIFT_INVENTORY, N.WebSetting.BILLING]
  }, {
    header: g.default.Messages.APP_SETTINGS,
    divider: !0,
    settings: [N.WebSetting.APPEARANCE, N.WebSetting.ACCESSIBILITY, N.WebSetting.VOICE_AND_VIDEO, N.WebSetting.POGGERMODE, N.WebSetting.CHAT, N.WebSetting.NOTIFICATIONS, N.WebSetting.KEYBINDS, N.WebSetting.LANGUAGE, N.WebSetting.WINDOW_SETTINGS, N.WebSetting.LINUX_SETTINGS, N.WebSetting.STREAMER_MODE, N.WebSetting.SPEED_TEST, N.WebSetting.SETTINGS_ADVANCED]
  }, {
    header: g.default.Messages.ACTIVITY_SETTINGS,
    divider: !0,
    settings: [N.WebSetting.ACTIVITY_PRIVACY, N.WebSetting.REGISTERED_GAMES, N.WebSetting.OVERLAY]
  }, {
    divider: !0,
    settings: [N.WebSetting.CHANGELOG, N.WebSetting.MERCHANDISE, N.WebSetting.HYPESQUAD, N.WebSetting.EXPERIMENTS, N.WebSetting.DEVELOPER_OPTIONS, N.WebSetting.HOTSPOT_OPTIONS, N.WebSetting.DISMISSIBLE_CONTENT_OPTIONS, N.WebSetting.PAYMENT_FLOW_MODALS, N.WebSetting.DESIGN_SYSTEMS, N.WebSetting.TEXT_PLAYGROUND, N.WebSetting.TEXT_COMPONENTS, N.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL, N.WebSetting.QUEST_PREVIEW_TOOL]
  }, {
    divider: !0,
    settings: [N.WebSetting.LOGOUT]
  }, {
    divider: !0,
    settings: [N.WebSetting.SOCIAL_LINKS, N.WebSetting.CLIENT_DEBUG_INFO]
  }]
}

function C() {
  let e = (0, S.useUnseenOutboundPromotions)().length,
    t = (0, c.useIsPrepaidPaymentPastDue)(),
    s = (0, n.useStateFromStores)([E.default], () => E.default.getProps().impressionSource),
    a = (0, u.usePendingRequestCount)(),
    i = (0, I.useShouldShowOverlaySettings)(),
    m = (0, o.useEnableClips)(),
    [N] = (0, d.useGetDismissibleContent)(m ? [l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    g = "useGenerateUserSettingsSections";
  (0, r.useTriggerDebuggingAA)({
    location: g + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: g + " auto off",
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
    isClipsBetaTagShowing: N === l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: h,
    isUserSettingsSearchEnabled: C
  })
}

function A(e) {
  let {
    searchResults: t
  } = (0, m.useSettingSearchResults)(), s = C(), a = s[e], n = Object.fromEntries(Object.entries(s).filter(e => {
    let [t, s] = e;
    return s.section === a.section
  })), l = Object.fromEntries(Object.entries(n).filter(e => {
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
  })), i = new Set, r = e => {
    if (i.has(e)) return;
    let t = n[e];
    if (null == t) return;
    i.add(e);
    let s = t.parent;
    null != s && r(s)
  }, o = e => {
    if (!i.has(e))
      for (let t of (i.add(e), Object.entries(l).filter(t => {
          let [s, a] = t;
          return a === e
        }).map(e => {
          let [t] = e;
          return t
        }))) o(t)
  };
  for (let e of t.filter(e => e in n))
    if (null != n[e].element && null == n[e].parent) {
      i.clear();
      break
    } else Object.values(l).includes(e) && o(e), r(e);
  return i
}

function O(e, t, s) {
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
          return null == s || (t = e, a = s, l = n, t === N.WebSetting.SEARCH_BAR || t === N.WebSetting.SEARCH_NO_RESULTS && 0 === a.size || l.has(t) || a.has(t))
        },
        searchFilterCount: (null == s ? void 0 : s.has(e)) ? void 0 : n.get(e)
      })
    }))
  }), a
}

function p() {
  let e = C(),
    t = a.useMemo(() => h(), []);
  return a.useMemo(() => O(t, e), [t, e])
}

function R(e) {
  let t = C(),
    s = a.useMemo(() => (function() {
      let e = h();
      return [{
        header: g.default.Messages.USER_SETTINGS,
        settings: [...e.map(e => {
          let {
            settings: t
          } = e;
          return t
        }).flat(1), N.WebSetting.SEARCH_NO_RESULTS]
      }]
    })(), []);
  return a.useMemo(() => O(s, t, new Set(e)), [s, t, e])
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