t.d(s, {
  Gj: function() {
    return P
  },
  Pt: function() {
    return L
  },
  VO: function() {
    return f
  },
  ji: function() {
    return U
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
  _ = t(631885),
  T = t(223639),
  S = t(160913),
  u = t(725727),
  I = t(977156),
  N = t(237292),
  A = t(663389),
  C = t(594174),
  O = t(202527),
  m = t(620163),
  h = t(295545),
  g = t(168308),
  R = t(839469),
  M = t(726985),
  x = t(46140),
  D = t(689938);

function p(e) {
  let s = [{
      header: D.Z.Messages.USER_SETTINGS,
      settings: [M.s6.SEARCH_BAR, M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.PRIVACY_AND_SAFETY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.AUTHORIZED_APPS, M.s6.SESSIONS, M.s6.CONNECTIONS, M.s6.CLIPS, M.s6.FRIEND_REQUESTS]
    }, {
      header: D.Z.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING]
    }, {
      header: D.Z.Messages.APP_SETTINGS,
      divider: !0,
      settings: [M.s6.APPEARANCE, M.s6.ACCESSIBILITY, M.s6.VOICE_AND_VIDEO, M.s6.POGGERMODE, M.s6.CHAT, M.s6.NOTIFICATIONS, M.s6.KEYBINDS, M.s6.LANGUAGE, M.s6.WINDOW_SETTINGS, M.s6.LINUX_SETTINGS, M.s6.STREAMER_MODE, M.s6.SPEED_TEST, M.s6.SETTINGS_ADVANCED]
    }, {
      divider: !0,
      settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE, M.s6.HYPESQUAD, M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS, M.s6.HOTSPOT_OPTIONS, M.s6.DISMISSIBLE_CONTENT_OPTIONS, M.s6.PAYMENT_FLOW_MODALS, M.s6.DESIGN_SYSTEMS, M.s6.TEXT_PLAYGROUND, M.s6.TEXT_COMPONENTS, M.s6.PROFILE_EFFECTS_PREVIEW_TOOL, M.s6.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [M.s6.LOGOUT]
    }, {
      divider: !0,
      settings: [M.s6.SOCIAL_LINKS, M.s6.CLIENT_DEBUG_INFO]
    }],
    t = {
      header: D.Z.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY]
    };
  return e ? s : s.toSpliced(3, 0, t)
}

function L() {
  var e, s;
  let t = (0, u.YO)().length,
    n = (0, S.U)(),
    l = (0, i.e7)([A.Z], () => A.Z.getProps().impressionSource),
    R = (0, _.gU)(),
    M = (0, g.bC)(),
    D = (0, c.Go)(),
    [p] = (0, E.c)(D ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
    L = "useGenerateUserSettingsSections";
  (0, r.j)({
    location: L + " auto on",
    autoTrackExposure: !0
  }), (0, r.j)({
    location: L + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: P
  } = O.b.useExperiment({
    location: "settings"
  }), Z = (0, h.eA)({
    location: "settings"
  }), f = (0, d.Xo)({
    location: "settings"
  }), v = null !== (s = null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== s && s, j = (0, N.y0)({
    location: "settings"
  }), U = (0, o.Q)(), B = (0, I.Zy)({
    location: x.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
  }), {
    enabled: b
  } = T.Z.useExperiment({
    location: "UserSettingsInventory"
  }, {
    autoTrackExposure: !0
  });
  return (0, m.i)({
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: n,
    impressionSource: l,
    numOfPendingFamilyRequests: R,
    isOverlaySupported: M,
    isClipsBetaTagShowing: p === a.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: P,
    isUserSettingsSearchEnabled: Z,
    isKeywordFilteringEnabled: f,
    isStaff: v,
    isInappropriateConversationWarningEnabled: j,
    paymentsBlocked: U,
    isEligibleForQuests: B,
    showGiftNitro: b
  })
}

function P(e) {
  let {
    searchResults: s
  } = (0, R.E)(), t = L();
  if (!(0, h.eA)({
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

function Z(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 ? arguments[3] : void 0,
    i = [],
    a = j(s),
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
          return null == n || (s = e, t = n, i = r, s === M.s6.SEARCH_BAR || s === M.s6.SEARCH_NO_RESULTS && 0 === t.size || i.has(s) || t.has(s))
        },
        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : r.get(e)
      })
    }))
  }), i
}

function f() {
  let e = L(),
    {
      shouldMergeGameSettings: s
    } = O.b.useExperiment({
      location: "settings"
    }),
    t = n.useMemo(() => p(s), [s]);
  return n.useMemo(() => Z(t, e), [t, e])
}

function v(e) {
  let s = L(),
    t = function() {
      let {
        shouldMergeGameSettings: e
      } = O.b.useExperiment({
        location: "settings"
      }), s = p(e);
      return n.useMemo(() => [{
        header: D.Z.Messages.USER_SETTINGS,
        settings: [...s.map(e => {
          let {
            settings: s
          } = e;
          return s
        }).flat(1), M.s6.SEARCH_NO_RESULTS]
      }], [s])
    }(),
    i = (0, h.c3)({
      location: "settings"
    });
  return n.useMemo(() => Z(t, s, i, new Set(e)), [t, s, i, e])
}

function j(e) {
  return new Map(Object.entries(e).filter(e => {
    let [s, t] = e;
    return t.section !== l.ID.CUSTOM && null != t.searchableTitle && (null == t.predicate || t.predicate())
  }))
}

function U(e) {
  return Array.from(j(e).entries()).map(e => {
    let [s, t] = e;
    return [s, t.searchableTitle]
  })
}