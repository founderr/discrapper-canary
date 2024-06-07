"use strict";
s.r(t), s.d(t, {
  getSearchableSettingsTitles: function() {
    return P
  },
  useDefaultUserSettingsSections: function() {
    return x
  },
  useGenerateUserSettingsSections: function() {
    return p
  },
  useSearchUserSettingsSections: function() {
    return D
  },
  useViewableSettingsFilterFromSearch: function() {
    return R
  }
}), s("639576"), s("536091"), s("47120"), s("653041");
var a = s("470079"),
  n = s("442837"),
  l = s("704215"),
  i = s("493544"),
  r = s("634894"),
  o = s("924557"),
  d = s("706140"),
  u = s("592204"),
  c = s("631885"),
  S = s("160913"),
  E = s("725727"),
  T = s("237292"),
  _ = s("663389"),
  I = s("594174"),
  N = s("202527"),
  g = s("620163"),
  f = s("295545"),
  m = s("168308"),
  C = s("839469"),
  A = s("726985"),
  h = s("689938");

function O(e) {
  let t = [{
      header: h.default.Messages.USER_SETTINGS,
      settings: [A.WebSetting.SEARCH_BAR, A.WebSetting.ACCOUNT, A.WebSetting.GAMES, A.WebSetting.PROFILE_CUSTOMIZATION, A.WebSetting.PRIVACY_AND_SAFETY, A.WebSetting.PRIVACY_FAMILY_CENTER, A.WebSetting.AUTHORIZED_APPS, A.WebSetting.SESSIONS, A.WebSetting.CONNECTIONS, A.WebSetting.CLIPS, A.WebSetting.FRIEND_REQUESTS]
    }, {
      header: h.default.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [A.WebSetting.PREMIUM, A.WebSetting.GUILD_BOOSTING, A.WebSetting.SUBSCRIPTIONS, A.WebSetting.GIFT_INVENTORY, A.WebSetting.BILLING]
    }, {
      header: h.default.Messages.APP_SETTINGS,
      divider: !0,
      settings: [A.WebSetting.APPEARANCE, A.WebSetting.ACCESSIBILITY, A.WebSetting.VOICE_AND_VIDEO, A.WebSetting.POGGERMODE, A.WebSetting.CHAT, A.WebSetting.NOTIFICATIONS, A.WebSetting.KEYBINDS, A.WebSetting.LANGUAGE, A.WebSetting.WINDOW_SETTINGS, A.WebSetting.LINUX_SETTINGS, A.WebSetting.STREAMER_MODE, A.WebSetting.SPEED_TEST, A.WebSetting.SETTINGS_ADVANCED]
    }, {
      divider: !0,
      settings: [A.WebSetting.CHANGELOG, A.WebSetting.MERCHANDISE, A.WebSetting.HYPESQUAD, A.WebSetting.EXPERIMENTS, A.WebSetting.DEVELOPER_OPTIONS, A.WebSetting.HOTSPOT_OPTIONS, A.WebSetting.DISMISSIBLE_CONTENT_OPTIONS, A.WebSetting.PAYMENT_FLOW_MODALS, A.WebSetting.DESIGN_SYSTEMS, A.WebSetting.TEXT_PLAYGROUND, A.WebSetting.TEXT_COMPONENTS, A.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL, A.WebSetting.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [A.WebSetting.LOGOUT]
    }, {
      divider: !0,
      settings: [A.WebSetting.SOCIAL_LINKS, A.WebSetting.CLIENT_DEBUG_INFO]
    }],
    s = {
      header: h.default.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [A.WebSetting.ACTIVITY_PRIVACY, A.WebSetting.REGISTERED_GAMES, A.WebSetting.OVERLAY]
    };
  return e ? t : t.toSpliced(3, 0, s)
}

function p() {
  var e, t;
  let s = (0, E.useUnseenOutboundPromotions)().length,
    a = (0, S.useIsPrepaidPaymentPastDue)(),
    i = (0, n.useStateFromStores)([_.default], () => _.default.getProps().impressionSource),
    C = (0, c.usePendingRequestCount)(),
    A = (0, m.useShouldShowOverlaySettings)(),
    h = (0, o.useEnableClips)(),
    [O] = (0, d.useGetDismissibleContent)(h ? [l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    p = "useGenerateUserSettingsSections";
  (0, r.useTriggerDebuggingAA)({
    location: p + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: p + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: R
  } = N.GameSettingsMergeExperiment.useExperiment({
    location: "settings"
  }), M = (0, f.useIsEligibleForUserSettingsSearchDesktop)({
    location: "settings"
  }), x = (0, u.useIsEligibleForKeywordFiltering)({
    location: "settings"
  }), D = (t = !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()), t), L = (0, T.useIsEligibleForInappropriateConversationWarning)({
    location: "settings"
  });
  return (0, g.getConfig)({
    unseenGiftCount: s,
    showPrepaidPaymentPastDueWarning: a,
    impressionSource: i,
    numOfPendingFamilyRequests: C,
    isOverlaySupported: A,
    isClipsBetaTagShowing: O === l.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: R,
    isUserSettingsSearchEnabled: M,
    isKeywordFilteringEnabled: x,
    isStaff: D,
    isInappropriateConversationWarningEnabled: L
  })
}

function R(e) {
  let {
    searchResults: t
  } = (0, C.useSettingSearchResults)(), s = p();
  if (!(0, f.useIsEligibleForUserSettingsSearchDesktop)({
      location: "settings"
    })) return new Set;
  let a = s[e],
    n = Object.fromEntries(Object.entries(s).filter(e => {
      let [t, s] = e;
      return s.section === a.section
    })),
    l = Object.fromEntries(Object.entries(n).filter(e => {
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
    i = new Set,
    r = e => {
      if (i.has(e)) return;
      let t = n[e];
      if (null == t) return;
      i.add(e);
      let s = t.parent;
      null != s && r(s)
    },
    o = e => {
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

function M(e, t, s) {
  let a = [],
    n = L(t),
    l = function(e, t) {
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
    }(t, new Set(Array.from(null != s ? s : []).filter(e => n.has(e))));
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
          var t, a, n;
          return null == s || (t = e, a = s, n = l, t === A.WebSetting.SEARCH_BAR || t === A.WebSetting.SEARCH_NO_RESULTS && 0 === a.size || n.has(t) || a.has(t))
        },
        searchFilterCount: (null == s ? void 0 : s.has(e)) ? void 0 : l.get(e)
      })
    }))
  }), a
}

function x() {
  let e = p(),
    {
      shouldMergeGameSettings: t
    } = N.GameSettingsMergeExperiment.useExperiment({
      location: "settings"
    }),
    s = a.useMemo(() => O(t), [t]);
  return a.useMemo(() => M(s, e), [s, e])
}

function D(e) {
  let t = p(),
    s = function() {
      let {
        shouldMergeGameSettings: e
      } = N.GameSettingsMergeExperiment.useExperiment({
        location: "settings"
      }), t = O(e);
      return a.useMemo(() => [{
        header: h.default.Messages.USER_SETTINGS,
        settings: [...t.map(e => {
          let {
            settings: t
          } = e;
          return t
        }).flat(1), A.WebSetting.SEARCH_NO_RESULTS]
      }], [t])
    }();
  return a.useMemo(() => M(s, t, new Set(e)), [s, t, e])
}

function L(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, s] = e;
    return s.section !== i.SectionTypes.CUSTOM && null != s.searchableTitle && (null == s.predicate || s.predicate())
  }))
}

function P(e) {
  return Array.from(L(e).entries()).map(e => {
    let [t, s] = e;
    return [t, s.searchableTitle]
  })
}