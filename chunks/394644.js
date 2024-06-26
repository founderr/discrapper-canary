t.d(s, {
  Gj: function() {
    return v
  },
  Pt: function() {
    return Z
  },
  VO: function() {
    return j
  },
  ji: function() {
    return G
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
  c = t(924557),
  d = t(706140),
  _ = t(592204),
  E = t(610697),
  u = t(631885),
  T = t(223639),
  S = t(160913),
  I = t(725727),
  N = t(977156),
  C = t(237292),
  m = t(314897),
  A = t(283595),
  O = t(663389),
  g = t(594174),
  h = t(202527),
  R = t(620163),
  p = t(295545),
  x = t(168308),
  M = t(839469),
  D = t(726985),
  f = t(46140),
  L = t(689938);

function P(e) {
  let s = [{
      header: L.Z.Messages.USER_SETTINGS,
      settings: [D.s6.ACCOUNT, D.s6.GAMES, D.s6.PROFILE_CUSTOMIZATION, D.s6.PRIVACY_AND_SAFETY, D.s6.PRIVACY_FAMILY_CENTER, D.s6.AUTHORIZED_APPS, D.s6.SESSIONS, D.s6.CONNECTIONS, D.s6.CLIPS, D.s6.FRIEND_REQUESTS]
    }, {
      header: L.Z.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [D.s6.PREMIUM, D.s6.GUILD_BOOSTING, D.s6.SUBSCRIPTIONS, D.s6.GIFT_INVENTORY, D.s6.BILLING]
    }, {
      header: L.Z.Messages.APP_SETTINGS,
      divider: !0,
      settings: [D.s6.APPEARANCE, D.s6.ACCESSIBILITY, D.s6.VOICE_AND_VIDEO, D.s6.POGGERMODE, D.s6.CHAT, D.s6.NOTIFICATIONS, D.s6.KEYBINDS, D.s6.LANGUAGE, D.s6.WINDOW_SETTINGS, D.s6.LINUX_SETTINGS, D.s6.STREAMER_MODE, D.s6.SPEED_TEST, D.s6.SETTINGS_ADVANCED]
    }, {
      divider: !0,
      settings: [D.s6.CHANGELOG, D.s6.MERCHANDISE, D.s6.HYPESQUAD, D.s6.EXPERIMENTS, D.s6.DEVELOPER_OPTIONS, D.s6.HOTSPOT_OPTIONS, D.s6.DISMISSIBLE_CONTENT_OPTIONS, D.s6.PAYMENT_FLOW_MODALS, D.s6.DESIGN_SYSTEMS, D.s6.TEXT_PLAYGROUND, D.s6.TEXT_COMPONENTS, D.s6.PROFILE_EFFECTS_PREVIEW_TOOL, D.s6.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [D.s6.LOGOUT]
    }, {
      divider: !0,
      settings: [D.s6.SOCIAL_LINKS, D.s6.CLIENT_DEBUG_INFO]
    }],
    t = {
      header: L.Z.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [D.s6.ACTIVITY_PRIVACY, D.s6.REGISTERED_GAMES, D.s6.OVERLAY]
    };
  return e ? s : s.toSpliced(3, 0, t)
}

function Z() {
  var e, s;
  let t = (0, I.YO)().length,
    n = (0, S.U)(),
    r = (0, a.e7)([O.Z], () => O.Z.getProps().impressionSource),
    M = (0, u.gU)(),
    D = (0, x.bC)(),
    L = (0, c.Go)(),
    [P] = (0, d.c)(L ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []),
    Z = "useGenerateUserSettingsSections";
  (0, o.j)({
    location: Z + " auto on",
    autoTrackExposure: !0
  }), (0, o.j)({
    location: Z + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: v
  } = h.b.useExperiment({
    location: "settings"
  }), b = (0, p.eA)({
    location: "settings"
  }), j = (0, _.Xo)({
    location: "settings"
  }), U = null !== (s = null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== s && s, B = (0, C.y0)({
    location: "settings"
  }), G = (0, l.Q)(), F = (0, N.Zy)({
    location: f.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
  }), {
    enabled: V
  } = T.Z.useExperiment({
    location: "UserSettingsInventory"
  }, {
    autoTrackExposure: !0
  }), y = (0, a.e7)([A.Z], () => A.Z.hasLibraryApplication()), Y = (0, a.e7)([m.default], () => m.default.hasTOTPEnabled()), H = (0, E.Z)();
  return (0, R.i)({
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: n,
    impressionSource: r,
    numOfPendingFamilyRequests: M,
    isOverlaySupported: D,
    isClipsBetaTagShowing: P === i.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: v,
    isUserSettingsSearchEnabled: b,
    isKeywordFilteringEnabled: j,
    isStaff: U,
    isInappropriateConversationWarningEnabled: B,
    paymentsBlocked: G,
    isEligibleForQuests: F,
    showGiftNitro: V,
    isStricterMessageRequestsEnabled: H,
    hasLibraryApplication: y,
    hasTOTPEnabled: Y
  })
}

function v(e) {
  let {
    searchResults: s
  } = (0, M.E)(), t = Z();
  if (!(0, p.eA)({
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

function b(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 ? arguments[3] : void 0,
    a = [],
    i = B(s),
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
          return null == n || (s = e, t = n, a = o, s === D.s6.SEARCH_NO_RESULTS && 0 === t.size || a.has(s) || t.has(s))
        },
        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
      })
    }))
  }), a
}

function j() {
  let e = Z(),
    {
      shouldMergeGameSettings: s
    } = h.b.useExperiment({
      location: "settings"
    }),
    t = n.useMemo(() => P(s), [s]);
  return n.useMemo(() => b(t, e), [t, e])
}

function U(e) {
  let s = Z(),
    t = function() {
      let {
        shouldMergeGameSettings: e
      } = h.b.useExperiment({
        location: "settings"
      }), s = P(e);
      return n.useMemo(() => [{
        header: L.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
        settings: [...s.map(e => {
          let {
            settings: s
          } = e;
          return s
        }).flat(1), D.s6.SEARCH_NO_RESULTS]
      }], [s])
    }(),
    a = (0, p.c3)({
      location: "settings"
    });
  return n.useMemo(() => b(t, s, a, new Set(e)), [t, s, a, e])
}

function B(e) {
  return new Map(Object.entries(e).filter(e => {
    let [s, t] = e;
    return t.section !== r.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate())
  }))
}

function G(e) {
  return Array.from(B(e).entries()).map(e => {
    let [s, t] = e;
    return [s, t.searchableTitles]
  })
}