t.d(s, {
  Gj: function() {
    return Z
  },
  Pt: function() {
    return P
  },
  VO: function() {
    return j
  },
  ji: function() {
    return B
  },
  q8: function() {
    return v
  }
}), t(639576), t(536091), t(47120), t(653041);
var n = t(470079),
  i = t(442837),
  a = t(704215),
  l = t(493544),
  r = t(634894),
  o = t(211242),
  c = t(924557),
  E = t(706140),
  d = t(592204),
  _ = t(610697),
  T = t(631885),
  S = t(223639),
  u = t(160913),
  I = t(725727),
  N = t(977156),
  A = t(237292),
  C = t(663389),
  O = t(594174),
  m = t(202527),
  h = t(620163),
  g = t(295545),
  R = t(168308),
  M = t(839469),
  x = t(726985),
  p = t(46140),
  D = t(689938);

function L(e) {
  let s = [{
      header: D.Z.Messages.USER_SETTINGS,
      settings: [x.s6.SEARCH_BAR, x.s6.ACCOUNT, x.s6.GAMES, x.s6.PROFILE_CUSTOMIZATION, x.s6.PRIVACY_AND_SAFETY, x.s6.PRIVACY_FAMILY_CENTER, x.s6.AUTHORIZED_APPS, x.s6.SESSIONS, x.s6.CONNECTIONS, x.s6.CLIPS, x.s6.FRIEND_REQUESTS]
    }, {
      header: D.Z.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [x.s6.PREMIUM, x.s6.GUILD_BOOSTING, x.s6.SUBSCRIPTIONS, x.s6.GIFT_INVENTORY, x.s6.BILLING]
    }, {
      header: D.Z.Messages.APP_SETTINGS,
      divider: !0,
      settings: [x.s6.APPEARANCE, x.s6.ACCESSIBILITY, x.s6.VOICE_AND_VIDEO, x.s6.POGGERMODE, x.s6.CHAT, x.s6.NOTIFICATIONS, x.s6.KEYBINDS, x.s6.LANGUAGE, x.s6.WINDOW_SETTINGS, x.s6.LINUX_SETTINGS, x.s6.STREAMER_MODE, x.s6.SPEED_TEST, x.s6.SETTINGS_ADVANCED]
    }, {
      divider: !0,
      settings: [x.s6.CHANGELOG, x.s6.MERCHANDISE, x.s6.HYPESQUAD, x.s6.EXPERIMENTS, x.s6.DEVELOPER_OPTIONS, x.s6.HOTSPOT_OPTIONS, x.s6.DISMISSIBLE_CONTENT_OPTIONS, x.s6.PAYMENT_FLOW_MODALS, x.s6.DESIGN_SYSTEMS, x.s6.TEXT_PLAYGROUND, x.s6.TEXT_COMPONENTS, x.s6.PROFILE_EFFECTS_PREVIEW_TOOL, x.s6.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [x.s6.LOGOUT]
    }, {
      divider: !0,
      settings: [x.s6.SOCIAL_LINKS, x.s6.CLIENT_DEBUG_INFO]
    }],
    t = {
      header: D.Z.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [x.s6.ACTIVITY_PRIVACY, x.s6.REGISTERED_GAMES, x.s6.OVERLAY]
    };
  return e ? s : s.toSpliced(3, 0, t)
}

function P() {
  var e, s;
  let t = (0, I.YO)().length,
    n = (0, u.U)(),
    l = (0, i.e7)([C.Z], () => C.Z.getProps().impressionSource),
    M = (0, T.gU)(),
    x = (0, R.bC)(),
    D = (0, c.Go)(),
    [L] = (0, E.c)(D ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
    P = "useGenerateUserSettingsSections";
  (0, r.j)({
    location: P + " auto on",
    autoTrackExposure: !0
  }), (0, r.j)({
    location: P + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: Z
  } = m.b.useExperiment({
    location: "settings"
  }), f = (0, g.eA)({
    location: "settings"
  }), j = (0, d.Xo)({
    location: "settings"
  }), v = null !== (s = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== s && s, U = (0, A.y0)({
    location: "settings"
  }), B = (0, o.Q)(), b = (0, N.Zy)({
    location: p.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
  }), {
    enabled: G
  } = S.Z.useExperiment({
    location: "UserSettingsInventory"
  }, {
    autoTrackExposure: !0
  }), F = (0, _.Z)();
  return (0, h.i)({
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: n,
    impressionSource: l,
    numOfPendingFamilyRequests: M,
    isOverlaySupported: x,
    isClipsBetaTagShowing: L === a.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: Z,
    isUserSettingsSearchEnabled: f,
    isKeywordFilteringEnabled: j,
    isStaff: v,
    isInappropriateConversationWarningEnabled: U,
    paymentsBlocked: B,
    isEligibleForQuests: b,
    showGiftNitro: G,
    isStricterMessageRequestsEnabled: F
  })
}

function Z(e) {
  let {
    searchResults: s
  } = (0, M.E)(), t = P();
  if (!(0, g.eA)({
      location: "settings"
    })) return new Set;
  let n = t[e],
    i = Object.fromEntries(Object.entries(t).filter(e => {
      let [s, t] = e;
      return t.section === n.section
    })),
    a = Object.fromEntries(Object.entries(i).filter(e => {
      let [s, {
        parent: t,
        section: i
      }] = e;
      return null != t && i === n.section
    }).map(e => {
      let [s, {
        parent: t
      }] = e;
      return [s, t]
    })),
    l = new Set,
    r = e => {
      let s = i[e];
      if (null == s) return;
      l.add(e);
      let t = s.parent;
      null != t && r(t)
    },
    o = e => {
      for (let s of (l.add(e), Object.entries(a).filter(s => {
          let [t, n] = s;
          return n === e
        }).map(e => {
          let [s] = e;
          return s
        }))) o(s)
    };
  for (let e of s.filter(e => e in i))
    if (!l.has(e)) {
      if (null != i[e].element && null == i[e].parent) {
        l.clear();
        break
      }
      Object.values(a).includes(e) && o(e), r(e)
    } return l
}

function f(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 ? arguments[3] : void 0,
    i = [],
    a = U(s),
    r = function(e, s) {
      let t = new Map;
      return null != s && s.forEach(s => {
        let n = e[s].parent;
        for (; null != n && null != e[n].parent;) n = e[n].parent;
        if (null != n) {
          var i;
          let e = null !== (i = t.get(n)) && void 0 !== i ? i : 0;
          t.set(n, e + 1)
        }
      }), t
    }(s, new Set(Array.from(null != n ? n : []).filter(e => a.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (!0 === e.divider && i.push({
      section: l.ID.DIVIDER
    }), null != e.header && i.push({
      section: l.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      i.push({
        ...s[e],
        tabPredicate: () => {
          var s, t, i;
          return null == n || (s = e, t = n, i = r, s === x.s6.SEARCH_BAR || s === x.s6.SEARCH_NO_RESULTS && 0 === t.size || i.has(s) || t.has(s))
        },
        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : r.get(e)
      })
    }))
  }), i
}

function j() {
  let e = P(),
    {
      shouldMergeGameSettings: s
    } = m.b.useExperiment({
      location: "settings"
    }),
    t = n.useMemo(() => L(s), [s]);
  return n.useMemo(() => f(t, e), [t, e])
}

function v(e) {
  let s = P(),
    t = function() {
      let {
        shouldMergeGameSettings: e
      } = m.b.useExperiment({
        location: "settings"
      }), s = L(e);
      return n.useMemo(() => [{
        header: D.Z.Messages.USER_SETTINGS,
        settings: [...s.map(e => {
          let {
            settings: s
          } = e;
          return s
        }).flat(1), x.s6.SEARCH_NO_RESULTS]
      }], [s])
    }(),
    i = (0, g.c3)({
      location: "settings"
    });
  return n.useMemo(() => f(t, s, i, new Set(e)), [t, s, i, e])
}

function U(e) {
  return new Map(Object.entries(e).filter(e => {
    let [s, t] = e;
    return t.section !== l.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate())
  }))
}

function B(e) {
  return Array.from(U(e).entries()).map(e => {
    let [s, t] = e;
    return [s, t.searchableTitles]
  })
}