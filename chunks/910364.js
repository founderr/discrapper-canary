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
  A = s("221292"),
  x = s("621853"),
  _ = s("895618"),
  v = s("318661"),
  C = s("706327"),
  h = s("484404"),
  U = s("747074"),
  R = s("58307"),
  j = s("62154"),
  M = s("293259"),
  P = s("725954"),
  y = s("228168"),
  O = s("981631"),
  g = s("689938"),
  D = s("775149");

function F(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: o,
    setSection: r,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([x.default], () => {
    var e, s;
    return (null === (s = x.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, C.useMutualFriends)(t), S = (0, i.useStateFromStores)([x.default], () => x.default.getMutualGuilds(t.id)), E = t.bot || s, {
    enabled: m
  } = (0, p.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: E
  }), I = l.useMemo(() => {
    if (m) {
      var e;
      return g.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return g.default.Messages.MUTUAL_FRIENDS
  }, [m, f]), T = l.useMemo(() => {
    if (m) {
      var e;
      return g.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return g.default.Messages.MUTUAL_GUILDS
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
        children: g.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, a.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: y.UserProfileSections.ACTIVITY,
        children: g.default.Messages.USER_PROFILE_ACTIVITY
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
        children: g.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function L(e) {
  var t, s;
  let {
    user: p,
    guildId: x,
    channelId: C,
    messageId: L,
    roleId: B,
    friendToken: b,
    autoFocusNote: G,
    initialSection: k = y.UserProfileSections.USER_INFO,
    transitionState: w,
    sourceAnalyticsLocations: z = [],
    onClose: Y
  } = e, H = null !== (t = (0, i.useStateFromStores)([T.default], () => T.default.getUser(p.id))) && void 0 !== t ? t : p, V = (0, v.default)(null !== (s = H.id) && void 0 !== s ? s : ""), {
    analyticsLocations: Q
  } = (0, f.default)([...z, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [x]: [H.id]
  });
  let K = (0, i.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(H.id)),
    W = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(H.id, e => e.type !== O.ActivityTypes.CUSTOM_STATUS)),
    Z = (0, R.useGetVoiceChannelInfoForVoiceActivitySection)(H.id, x),
    [q, J] = l.useState(!1),
    [X, $] = l.useState(H.isNonUserBot() && !H.isClyde() ? y.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([m.default], () => m.default.getId() === H.id),
    {
      showVoiceActivityInProfile: et
    } = _.VoiceActivityProfileExperiment.useExperiment({
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
      (0, A.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: H.id,
        guildId: x,
        channelId: C,
        messageId: L,
        roleId: B,
        analyticsLocations: Q
      }), J(!0), $(e)
    }, [H.id, x, C, L, B, Q]),
    eo = null == V ? void 0 : V.profileEffectId;
  return (0, a.jsx)(f.AnalyticsLocationProvider, {
    value: Q,
    children: (0, a.jsx)(N.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: H.id,
      guildId: x,
      channelId: C,
      messageId: L,
      roleId: B,
      children: (0, a.jsx)(o.default, {
        section: O.AnalyticsSections.PROFILE_MODAL,
        children: (0, a.jsxs)(n.ModalRoot, {
          transitionState: w,
          className: D.root,
          hideShadow: !0,
          "aria-label": g.default.Messages.USER_PROFILE_MODAL,
          children: [(0, a.jsx)("div", {
            ref: el,
            children: (0, a.jsxs)(U.default, {
              user: H,
              profileType: y.UserProfileTypes.MODAL,
              children: [(0, a.jsx)(M.default, {
                className: D.topSection,
                displayProfile: V,
                user: H,
                friendToken: b,
                onClose: Y,
                isStreaming: (0, d.default)(W),
                guildId: x,
                channelId: C,
                hasProfileEffect: null != eo
              }), (0, a.jsxs)(U.default.Inner, {
                children: [w === n.ModalTransitionState.ENTERED && (0, a.jsx)(h.default, {
                  onTooltipClose: Y
                }), (0, a.jsxs)("div", {
                  className: D.body,
                  children: [(0, a.jsx)(P.default, {
                    user: H,
                    displayProfile: V
                  }), ea ? (0, a.jsx)(F, {
                    user: H,
                    section: X === y.UserProfileSections.USER_INFO_CONNECTIONS ? y.UserProfileSections.USER_INFO : X,
                    setSection: en,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, a.jsx)("div", {
                    className: D.divider
                  }), (0, a.jsx)(j.default, {
                    displayProfile: V,
                    user: H,
                    autoFocusNote: G && !q,
                    selectedSection: X,
                    onClose: Y
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