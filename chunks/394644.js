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
    return O
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
  I = s("839469"),
  g = s("726985"),
  N = s("689938");

function h() {
  return [{
    header: N.default.Messages.USER_SETTINGS,
    settings: [g.WebSetting.SEARCH_BAR, g.WebSetting.ACCOUNT, g.WebSetting.GAMES, g.WebSetting.PROFILE_CUSTOMIZATION, g.WebSetting.PRIVACY_AND_SAFETY, g.WebSetting.PRIVACY_FAMILY_CENTER, g.WebSetting.AUTHORIZED_APPS, g.WebSetting.SESSIONS, g.WebSetting.CONNECTIONS, g.WebSetting.CLIPS, g.WebSetting.FRIEND_REQUESTS]
  }, {
    header: N.default.Messages.BILLING_SETTINGS,
    divider: !0,
    settings: [g.WebSetting.PREMIUM, g.WebSetting.GUILD_BOOSTING, g.WebSetting.SUBSCRIPTIONS, g.WebSetting.GIFT_INVENTORY, g.WebSetting.BILLING]
  }, {
    header: N.default.Messages.APP_SETTINGS,
    divider: !0,
    settings: [g.WebSetting.APPEARANCE, g.WebSetting.ACCESSIBILITY, g.WebSetting.VOICE_AND_VIDEO, g.WebSetting.POGGERMODE, g.WebSetting.CHAT, g.WebSetting.NOTIFICATIONS, g.WebSetting.KEYBINDS, g.WebSetting.LANGUAGE, g.WebSetting.WINDOW_SETTINGS, g.WebSetting.LINUX_SETTINGS, g.WebSetting.STREAMER_MODE, g.WebSetting.SPEED_TEST, g.WebSetting.SETTINGS_ADVANCED]
  }, {
    header: N.default.Messages.ACTIVITY_SETTINGS,
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

function C() {
  let e = (0, S.useUnseenOutboundPromotions)().length,
    t = (0, c.useIsPrepaidPaymentPastDue)(),
    s = (0, n.useStateFromStores)([E.default], () => E.default.getProps().impressionSource),
    a = (0, u.usePendingRequestCount)(),
    i = (0, m.useShouldShowOverlaySettings)(),
    I = (0, o.useEnableClips)(),
    [g] = (0, d.useGetDismissibleContent)(I ? [l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
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
    isClipsBetaTagShowing: g === l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: h,
    isUserSettingsSearchEnabled: C
  })
}

function O(e) {
  let {
    searchResults: t
  } = (0, I.useSettingSearchResults)(), s = C(), a = s[e], n = Object.fromEntries(Object.entries(s).filter(e => {
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

function A(e, t, s) {
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
          return null == s || (t = e, a = s, l = n, t === g.WebSetting.SEARCH_BAR || t === g.WebSetting.SEARCH_NO_RESULTS && 0 === a.size || l.has(t) || a.has(t))
        },
        searchFilterCount: (null == s ? void 0 : s.has(e)) ? void 0 : n.get(e)
      })
    }))
  }), a
}

function p() {
  let e = C(),
    t = a.useMemo(() => h(), []);
  return a.useMemo(() => A(t, e), [t, e])
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
  return a.useMemo(() => A(s, t, new Set(e)), [s, t, e])
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