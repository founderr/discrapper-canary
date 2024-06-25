t.d(s, {
  Gj: function() {
    return v
  },
  Pt: function() {
    return f
  },
  VO: function() {
    return U
  },
  ji: function() {
    return G
  },
  q8: function() {
    return B
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
  C = t(314897),
  O = t(283595),
  m = t(663389),
  h = t(594174),
  g = t(202527),
  R = t(620163),
  M = t(295545),
  x = t(168308),
  D = t(839469),
  p = t(726985),
  L = t(46140),
  P = t(689938);

function Z(e) {
  let s = [{
      header: P.Z.Messages.USER_SETTINGS,
      settings: [p.s6.SEARCH_BAR, p.s6.ACCOUNT, p.s6.GAMES, p.s6.PROFILE_CUSTOMIZATION, p.s6.PRIVACY_AND_SAFETY, p.s6.PRIVACY_FAMILY_CENTER, p.s6.AUTHORIZED_APPS, p.s6.SESSIONS, p.s6.CONNECTIONS, p.s6.CLIPS, p.s6.FRIEND_REQUESTS]
    }, {
      header: P.Z.Messages.BILLING_SETTINGS,
      divider: !0,
      settings: [p.s6.PREMIUM, p.s6.GUILD_BOOSTING, p.s6.SUBSCRIPTIONS, p.s6.GIFT_INVENTORY, p.s6.BILLING]
    }, {
      header: P.Z.Messages.APP_SETTINGS,
      divider: !0,
      settings: [p.s6.APPEARANCE, p.s6.ACCESSIBILITY, p.s6.VOICE_AND_VIDEO, p.s6.POGGERMODE, p.s6.CHAT, p.s6.NOTIFICATIONS, p.s6.KEYBINDS, p.s6.LANGUAGE, p.s6.WINDOW_SETTINGS, p.s6.LINUX_SETTINGS, p.s6.STREAMER_MODE, p.s6.SPEED_TEST, p.s6.SETTINGS_ADVANCED]
    }, {
      divider: !0,
      settings: [p.s6.CHANGELOG, p.s6.MERCHANDISE, p.s6.HYPESQUAD, p.s6.EXPERIMENTS, p.s6.DEVELOPER_OPTIONS, p.s6.HOTSPOT_OPTIONS, p.s6.DISMISSIBLE_CONTENT_OPTIONS, p.s6.PAYMENT_FLOW_MODALS, p.s6.DESIGN_SYSTEMS, p.s6.TEXT_PLAYGROUND, p.s6.TEXT_COMPONENTS, p.s6.PROFILE_EFFECTS_PREVIEW_TOOL, p.s6.QUEST_PREVIEW_TOOL]
    }, {
      divider: !0,
      settings: [p.s6.LOGOUT]
    }, {
      divider: !0,
      settings: [p.s6.SOCIAL_LINKS, p.s6.CLIENT_DEBUG_INFO]
    }],
    t = {
      header: P.Z.Messages.ACTIVITY_SETTINGS,
      divider: !0,
      settings: [p.s6.ACTIVITY_PRIVACY, p.s6.REGISTERED_GAMES, p.s6.OVERLAY]
    };
  return e ? s : s.toSpliced(3, 0, t)
}

function f() {
  var e, s;
  let t = (0, I.YO)().length,
    n = (0, u.U)(),
    l = (0, i.e7)([m.Z], () => m.Z.getProps().impressionSource),
    D = (0, T.gU)(),
    p = (0, x.bC)(),
    P = (0, c.Go)(),
    [Z] = (0, E.c)(P ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
    f = "useGenerateUserSettingsSections";
  (0, r.j)({
    location: f + " auto on",
    autoTrackExposure: !0
  }), (0, r.j)({
    location: f + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: v
  } = g.b.useExperiment({
    location: "settings"
  }), j = (0, M.eA)({
    location: "settings"
  }), U = (0, d.Xo)({
    location: "settings"
  }), B = null !== (s = null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== s && s, b = (0, A.y0)({
    location: "settings"
  }), G = (0, o.Q)(), F = (0, N.Zy)({
    location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
  }), {
    enabled: V
  } = S.Z.useExperiment({
    location: "UserSettingsInventory"
  }, {
    autoTrackExposure: !0
  }), y = (0, i.e7)([O.Z], () => O.Z.hasLibraryApplication()), Y = (0, i.e7)([C.default], () => C.default.hasTOTPEnabled()), H = (0, _.Z)();
  return (0, R.i)({
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: n,
    impressionSource: l,
    numOfPendingFamilyRequests: D,
    isOverlaySupported: p,
    isClipsBetaTagShowing: Z === a.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: v,
    isUserSettingsSearchEnabled: j,
    isKeywordFilteringEnabled: U,
    isStaff: B,
    isInappropriateConversationWarningEnabled: b,
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
  } = (0, D.E)(), t = f();
  if (!(0, M.eA)({
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

function j(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 ? arguments[3] : void 0,
    i = [],
    a = b(s),
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
          return null == n || (s = e, t = n, i = r, s === p.s6.SEARCH_BAR || s === p.s6.SEARCH_NO_RESULTS && 0 === t.size || i.has(s) || t.has(s))
        },
        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : r.get(e)
      })
    }))
  }), i
}

function U() {
  let e = f(),
    {
      shouldMergeGameSettings: s
    } = g.b.useExperiment({
      location: "settings"
    }),
    t = n.useMemo(() => Z(s), [s]);
  return n.useMemo(() => j(t, e), [t, e])
}

function B(e) {
  let s = f(),
    t = function() {
      let {
        shouldMergeGameSettings: e
      } = g.b.useExperiment({
        location: "settings"
      }), s = Z(e);
      return n.useMemo(() => [{
        header: P.Z.Messages.USER_SETTINGS,
        settings: [...s.map(e => {
          let {
            settings: s
          } = e;
          return s
        }).flat(1), p.s6.SEARCH_NO_RESULTS]
      }], [s])
    }(),
    i = (0, M.c3)({
      location: "settings"
    });
  return n.useMemo(() => j(t, s, i, new Set(e)), [t, s, i, e])
}

function b(e) {
  return new Map(Object.entries(e).filter(e => {
    let [s, t] = e;
    return t.section !== l.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate())
  }))
}

function G(e) {
  return Array.from(b(e).entries()).map(e => {
    let [s, t] = e;
    return [s, t.searchableTitles]
  })
}