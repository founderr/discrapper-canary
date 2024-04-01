"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  o = s("481060"),
  r = s("410575"),
  n = s("727637"),
  u = s("58540"),
  d = s("420660"),
  c = s("100527"),
  f = s("906732"),
  S = s("680295"),
  m = s("199902"),
  E = s("314897"),
  T = s("158776"),
  I = s("594174"),
  N = s("342656"),
  p = s("785717"),
  _ = s("221292"),
  A = s("621853"),
  v = s("895618"),
  x = s("318661"),
  U = s("706327"),
  h = s("484404"),
  C = s("747074"),
  y = s("58307"),
  j = s("62154"),
  R = s("293259"),
  M = s("725954"),
  P = s("228168"),
  g = s("981631"),
  O = s("689938"),
  F = s("775149");

function D(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: r,
    setSection: n,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([A.default], () => {
    var e, s;
    return (null === (s = A.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, U.useMutualFriends)(t), S = (0, i.useStateFromStores)([A.default], () => A.default.getMutualGuilds(t.id)), m = t.bot || s, {
    enabled: E
  } = (0, N.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: m
  }), T = l.useMemo(() => {
    if (E) {
      var e;
      return O.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_FRIENDS
  }, [E, f]), I = l.useMemo(() => {
    if (E) {
      var e;
      return O.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_GUILDS
  }, [E, S]);
  return (0, a.jsx)("div", {
    className: F.tabBarContainer,
    children: (0, a.jsxs)(o.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: n,
      className: F.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: P.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, a.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, a.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: T
      }), s || t.isClyde() ? null : (0, a.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: I
      }), t.bot && d ? (0, a.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: P.UserProfileSections.BOT_DATA_ACCESS,
        children: O.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function B(e) {
  var t, s;
  let {
    user: N,
    guildId: A,
    channelId: U,
    messageId: B,
    roleId: L,
    friendToken: b,
    autoFocusNote: G,
    initialSection: k = P.UserProfileSections.USER_INFO,
    transitionState: H,
    sourceAnalyticsLocations: V = [],
    onClose: w
  } = e, Y = null !== (t = (0, i.useStateFromStores)([I.default], () => I.default.getUser(N.id))) && void 0 !== t ? t : N, z = (0, x.default)(null !== (s = null == Y ? void 0 : Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: J
  } = (0, f.default)([...V, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [A]: [Y.id]
  });
  let K = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(Y.id)),
    Q = (0, i.useStateFromStores)([T.default], () => T.default.findActivity(Y.id, e => e.type !== g.ActivityTypes.CUSTOM_STATUS)),
    W = (0, y.useGetVoiceChannelInfoForVoiceActivitySection)(Y.id, A),
    [Z, q] = l.useState(!1),
    [X, $] = l.useState(Y.isNonUserBot() && !Y.isClyde() ? P.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([E.default], () => E.default.getId() === Y.id),
    {
      showVoiceActivityInProfile: et
    } = v.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != Q || K || null != W && et,
    ea = !ee || es,
    el = l.createRef(),
    ei = (0, n.default)(el);
  !es && X === P.UserProfileSections.ACTIVITY && $(P.UserProfileSections.USER_INFO);
  let eo = l.useCallback(e => {
      (0, _.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: A,
        channelId: U,
        messageId: B,
        roleId: L,
        analyticsLocations: J
      }), q(!0), $(e)
    }, [Y.id, A, U, B, L, J]),
    er = null == z ? void 0 : z.profileEffectId;
  return (0, a.jsx)(f.AnalyticsLocationProvider, {
    value: J,
    children: (0, a.jsx)(p.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: A,
      channelId: U,
      messageId: B,
      roleId: L,
      children: (0, a.jsx)(r.default, {
        section: g.AnalyticsSections.PROFILE_MODAL,
        children: (0, a.jsxs)(o.ModalRoot, {
          transitionState: H,
          className: F.root,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, a.jsx)("div", {
            ref: el,
            children: (0, a.jsxs)(C.default, {
              user: Y,
              profileType: P.UserProfileTypes.MODAL,
              children: [(0, a.jsx)("div", {
                className: F.topSection,
                children: (0, a.jsx)(R.default, {
                  displayProfile: z,
                  user: Y,
                  friendToken: b,
                  onClose: w,
                  isStreaming: (0, d.default)(Q),
                  guildId: A,
                  channelId: U,
                  hasProfileEffect: null != er
                })
              }), (0, a.jsxs)(C.default.Inner, {
                children: [H === o.ModalTransitionState.ENTERED && (0, a.jsx)(h.default, {
                  onTooltipClose: w
                }), (0, a.jsxs)("div", {
                  className: F.body,
                  children: [(0, a.jsx)(M.default, {
                    user: Y,
                    displayProfile: z
                  }), ea ? (0, a.jsx)(D, {
                    user: Y,
                    section: X === P.UserProfileSections.USER_INFO_CONNECTIONS ? P.UserProfileSections.USER_INFO : X,
                    setSection: eo,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, a.jsx)("div", {
                    className: F.divider
                  }), (0, a.jsx)(j.default, {
                    displayProfile: z,
                    user: Y,
                    autoFocusNote: G && !Z,
                    selectedSection: X,
                    onClose: w
                  })]
                })]
              })]
            })
          }), null != er && (0, a.jsx)(S.default, {
            profileEffectId: er,
            bannerAdjustment: 0,
            isHovering: ei
          })]
        })
      })
    })
  })
}