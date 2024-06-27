t.d(s, {
  Gj: function() {
    return b
  },
  Pt: function() {
    return v
  },
  VO: function() {
    return B
  },
  ji: function() {
    return F
  },
  q8: function() {
    return U
  }
}), t(639576), t(536091), t(47120), t(653041);
var n = t(470079),
  a = t(442837),
  i = t(704215),
  r = t(493544),
  o = t(634894),
  l = t(211242),
  c = t(770471),
  d = t(924557),
  _ = t(706140),
  E = t(592204),
  u = t(610697),
  T = t(631885),
  S = t(223639),
  I = t(160913),
  N = t(725727),
  C = t(977156),
  m = t(237292),
  A = t(314897),
  g = t(283595),
  O = t(663389),
  h = t(594174),
  p = t(202527),
  R = t(620163),
  x = t(295545),
  M = t(168308),
  D = t(839469),
  f = t(726985),
  L = t(46140),
  P = t(689938);

function Z(e) {
  let s = [{
      header: P.Z.Messages.USER_SETTINGS,
      settings: [f.s6.ACCOUNT, f.s6.GAMES, f.s6.PROFILE_CUSTOMIZATION, f.s6.PRIVACY_AND_SAFETY, f.s6.PRIVACY_FAMILY_CENTER, f.s6.AUTHORIZED_APPS, f.s6.SESSIONS, f.s6.CONNECTIONS, f.s6.CLIPS, f.s6.FRIEND_REQUESTS]
    }, {
      header: P.Z.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [f.s6.PREMIUM, f.s6.GUILD_BOOSTING, f.s6.SUBSCRIPTIONS, f.s6.GIFT_INVENTORY, f.s6.BILLING]
    }, {
      header: P.Z.Messages.APP_SETTINGS,
      divider: !0,
      settings: [f.s6.APPEARANCE, f.s6.ACCESSIBILITY, f.s6.VOICE_AND_VIDEO, f.s6.POGGERMODE, f.s6.CHAT, f.s6.NOTIFICATIONS, f.s6.KEYBINDS, f.s6.LANGUAGE, f.s6.WINDOW_SETTINGS, f.s6.LINUX_SETTINGS, f.s6.STREAMER_MODE, f.s6.SPEED_TEST, f.s6.SETTINGS_ADVANCED]
    }, {
      divider: !0,
      settings: [f.s6.CHANGELOG, f.s6.MERCHANDISE, f.s6.HYPESQUAD, f.s6.EXPERIMENTS, f.s6.DEVELOPER_OPTIONS, f.s6.HOTSPOT_OPTIONS, f.s6.DISMISSIBLE_CONTENT_OPTIONS, f.s6.PAYMENT_FLOW_MODALS, f.s6.DESIGN_SYSTEMS, f.s6.TEXT_PLAYGROUND, f.s6.TEXT_COMPONENTS, f.s6.PROFILE_EFFECTS_PREVIEW_TOOL, f.s6.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [f.s6.LOGOUT]
    }, {
      divider: !0,
      settings: [f.s6.SOCIAL_LINKS, f.s6.CLIENT_DEBUG_INFO]
    }],
    t = {
      header: P.Z.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [f.s6.ACTIVITY_PRIVACY, f.s6.REGISTERED_GAMES, f.s6.OVERLAY]
    };
  return e ? s : s.toSpliced(3, 0, t)
}

function v() {
  var e, s;
  let t = (0, N.YO)().length,
    n = (0, I.U)(),
    r = (0, a.e7)([O.Z], () => O.Z.getProps().impressionSource),
    D = (0, T.gU)(),
    f = (0, M.bC)(),
    P = (0, d.Go)(),
    [Z] = (0, _.c)(P ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []),
    v = "useGenerateUserSettingsSections";
  (0, o.j)({
    location: v + " auto on",
    autoTrackExposure: !0
  }), (0, o.j)({
    location: v + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: b
  } = p.b.useExperiment({
    location: "settings"
  }), j = (0, x.eA)({
    location: "settings"
  }), B = (0, E.Xo)({
    location: "settings"
  }), U = null !== (s = null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== s && s, G = (0, m.y0)({
    location: "settings"
  }), F = (0, l.Q)(), V = (0, C.Zy)({
    location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
  }), {
    enabled: y
  } = S.Z.useExperiment({
    location: "UserSettingsInventory"
  }, {
    autoTrackExposure: !0
  }), Y = (0, a.e7)([g.Z], () => g.Z.hasLibraryApplication()), H = (0, a.e7)([A.default], () => A.default.hasTOTPEnabled()), {
    canBroadcast: k
  } = c.Z.useExperiment({
    location: "user_settings_activity_privacy"
  }, {
    autoTrackExposure: !0
  }), w = (0, u.Z)();
  return (0, R.i)({
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: n,
    impressionSource: r,
    numOfPendingFamilyRequests: D,
    isOverlaySupported: f,
    isClipsBetaTagShowing: Z === i.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: b,
    isUserSettingsSearchEnabled: j,
    isKeywordFilteringEnabled: B,
    isStaff: U,
    isInappropriateConversationWarningEnabled: G,
    paymentsBlocked: F,
    isEligibleForQuests: V,
    showGiftNitro: y,
    isStricterMessageRequestsEnabled: w,
    hasLibraryApplication: Y,
    hasTOTPEnabled: H,
    canBroadcastActivity: k
  })
}

function b(e) {
  let {
    searchResults: s
  } = (0, D.E)(), t = v();
  if (!(0, x.eA)({
      location: "settings"
    })) return new Set;
  let n = t[e],
    a = Object.fromEntries(Object.entries(t).filter(e => {
      let [s, t] = e;
      return t.section === n.section
    })),
    i = Object.fromEntries(Object.entries(a).filter(e => {
      let [s, {
        parent: t,
        section: a
      }] = e;
      return null != t && a === n.section
    }).map(e => {
      let [s, {
        parent: t
      }] = e;
      return [s, t]
    })),
    r = new Set,
    o = e => {
      let s = a[e];
      if (null == s) return;
      r.add(e);
      let t = s.parent;
      null != t && o(t)
    },
    l = e => {
      for (let s of (r.add(e), Object.entries(i).filter(s => {
          let [t, n] = s;
          return n === e
        }).map(e => {
          let [s] = e;
          return s
        }))) l(s)
    };
  for (let e of s.filter(e => e in a))
    if (!r.has(e)) {
      if (null != a[e].element && null == a[e].parent) {
        r.clear();
        break
      }
      Object.values(i).includes(e) && l(e), o(e)
    } return r
}

function j(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 ? arguments[3] : void 0,
    a = [],
    i = G(s),
    o = function(e, s) {
      let t = new Map;
      return null != s && s.forEach(s => {
        let n = e[s].parent;
        for (; null != n && null != e[n].parent;) n = e[n].parent;
        if (null != n) {
          var a;
          let e = null !== (a = t.get(n)) && void 0 !== a ? a : 0;
          t.set(n, e + 1)
        }
      }), t
    }(s, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (!0 === e.divider && a.push({
      section: r.ID.DIVIDER
    }), null != e.header && a.push({
      section: r.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      a.push({
        ...s[e],
        tabPredicate: () => {
          var s, t, a;
          return null == n || (s = e, t = n, a = o, s === f.s6.SEARCH_NO_RESULTS && 0 === t.size || a.has(s) || t.has(s))
        },
        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
      })
    }))
  }), a
}

function B() {
  let e = v(),
    {
      shouldMergeGameSettings: s
    } = p.b.useExperiment({
      location: "settings"
    }),
    t = n.useMemo(() => Z(s), [s]);
  return n.useMemo(() => j(t, e), [t, e])
}

function U(e) {
  let s = v(),
    t = function() {
      let {
        shouldMergeGameSettings: e
      } = p.b.useExperiment({
        location: "settings"
      }), s = Z(e);
      return n.useMemo(() => [{
        header: P.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
        settings: [...s.map(e => {
          let {
            settings: s
          } = e;
          return s
        }).flat(1), f.s6.SEARCH_NO_RESULTS]
      }], [s])
    }(),
    a = (0, x.c3)({
      location: "settings"
    });
  return n.useMemo(() => j(t, s, a, new Set(e)), [t, s, a, e])
}

function G(e) {
  return new Map(Object.entries(e).filter(e => {
    let [s, t] = e;
    return t.section !== r.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate())
  }))
}

function F(e) {
  return Array.from(G(e).entries()).map(e => {
    let [s, t] = e;
    return [s, t.searchableTitles]
  })
}