"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  o = s("410575"),
  r = s("727637"),
  u = s("58540"),
  d = s("420660"),
  c = s("100527"),
  f = s("906732"),
  S = s("680295"),
  E = s("199902"),
  m = s("314897"),
  I = s("158776"),
  T = s("594174"),
  p = s("342656"),
  N = s("785717"),
  x = s("221292"),
  A = s("621853"),
  v = s("895618"),
  _ = s("318661"),
  h = s("706327"),
  C = s("484404"),
  U = s("747074"),
  j = s("58307"),
  R = s("62154"),
  P = s("293259"),
  M = s("725954"),
  y = s("228168"),
  g = s("981631"),
  O = s("689938"),
  D = s("775149");

function F(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: o,
    setSection: r,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([A.default], () => {
    var e, s;
    return (null === (s = A.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, h.useMutualFriends)(t), S = (0, i.useStateFromStores)([A.default], () => A.default.getMutualGuilds(t.id)), E = t.bot || s, {
    enabled: m
  } = (0, p.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: E
  }), I = l.useMemo(() => {
    if (m) {
      var e;
      return O.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_FRIENDS
  }, [m, f]), T = l.useMemo(() => {
    if (m) {
      var e;
      return O.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_GUILDS
  }, [m, S]);
  return (0, a.jsx)("div", {
    className: D.tabBarContainer,
    children: (0, a.jsxs)(n.TabBar, {
      selectedItem: o,
      type: "top",
      onItemSelect: r,
      className: D.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: y.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, a.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: y.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, a.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: y.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, a.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: y.UserProfileSections.MUTUAL_GUILDS,
        children: T
      }), t.bot && d ? (0, a.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: y.UserProfileSections.BOT_DATA_ACCESS,
        children: O.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function L(e) {
  var t, s;
  let {
    user: p,
    guildId: A,
    channelId: h,
    messageId: L,
    roleId: B,
    friendToken: b,
    autoFocusNote: G,
    initialSection: k = y.UserProfileSections.USER_INFO,
    transitionState: z,
    sourceAnalyticsLocations: w = [],
    onClose: V
  } = e, Y = null !== (t = (0, i.useStateFromStores)([T.default], () => T.default.getUser(p.id))) && void 0 !== t ? t : p, H = (0, _.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: Q
  } = (0, f.default)([...w, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [A]: [Y.id]
  });
  let K = (0, i.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(Y.id)),
    W = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== g.ActivityTypes.CUSTOM_STATUS)),
    Z = (0, j.useGetVoiceChannelInfoForVoiceActivitySection)(Y.id, A),
    [q, J] = l.useState(!1),
    [X, $] = l.useState(Y.isNonUserBot() && !Y.isClyde() ? y.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([m.default], () => m.default.getId() === Y.id),
    {
      showVoiceActivityInProfile: et
    } = v.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != W || K || null != Z && et,
    ea = !ee || es,
    el = l.createRef(),
    ei = (0, r.default)(el);
  !es && X === y.UserProfileSections.ACTIVITY && $(y.UserProfileSections.USER_INFO);
  let en = l.useCallback(e => {
      (0, x.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: A,
        channelId: h,
        messageId: L,
        roleId: B,
        analyticsLocations: Q
      }), J(!0), $(e)
    }, [Y.id, A, h, L, B, Q]),
    eo = null == H ? void 0 : H.profileEffectId;
  return (0, a.jsx)(f.AnalyticsLocationProvider, {
    value: Q,
    children: (0, a.jsx)(N.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: A,
      channelId: h,
      messageId: L,
      roleId: B,
      children: (0, a.jsx)(o.default, {
        section: g.AnalyticsSections.PROFILE_MODAL,
        children: (0, a.jsxs)(n.ModalRoot, {
          transitionState: z,
          className: D.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, a.jsx)("div", {
            ref: el,
            children: (0, a.jsxs)(U.default, {
              user: Y,
              profileType: y.UserProfileTypes.MODAL,
              children: [(0, a.jsx)(P.default, {
                className: D.topSection,
                displayProfile: H,
                user: Y,
                friendToken: b,
                onClose: V,
                isStreaming: (0, d.default)(W),
                guildId: A,
                channelId: h,
                hasProfileEffect: null != eo
              }), (0, a.jsxs)(U.default.Inner, {
                children: [z === n.ModalTransitionState.ENTERED && (0, a.jsx)(C.default, {
                  onTooltipClose: V
                }), (0, a.jsxs)("div", {
                  className: D.body,
                  children: [(0, a.jsx)(M.default, {
                    user: Y,
                    displayProfile: H
                  }), ea ? (0, a.jsx)(F, {
                    user: Y,
                    section: X === y.UserProfileSections.USER_INFO_CONNECTIONS ? y.UserProfileSections.USER_INFO : X,
                    setSection: en,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, a.jsx)("div", {
                    className: D.divider
                  }), (0, a.jsx)(R.default, {
                    displayProfile: H,
                    user: Y,
                    autoFocusNote: G && !q,
                    selectedSection: X,
                    onClose: V
                  })]
                })]
              })]
            })
          }), null != eo && (0, a.jsx)(S.default, {
            profileEffectId: eo,
            bannerAdjustment: 0,
            isHovering: ei
          })]
        })
      })
    })
  })
}