"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  r = s("481060"),
  o = s("410575"),
  n = s("727637"),
  u = s("58540"),
  d = s("420660"),
  c = s("100527"),
  f = s("906732"),
  S = s("680295"),
  m = s("199902"),
  E = s("314897"),
  I = s("158776"),
  T = s("594174"),
  N = s("342656"),
  x = s("785717"),
  A = s("221292"),
  _ = s("621853"),
  p = s("895618"),
  v = s("318661"),
  h = s("706327"),
  U = s("484404"),
  C = s("747074"),
  j = s("58307"),
  y = s("62154"),
  P = s("293259"),
  M = s("725954"),
  R = s("228168"),
  O = s("981631"),
  g = s("689938"),
  D = s("775149");

function F(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: o,
    setSection: n,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([_.default], () => {
    var e, s;
    return (null === (s = _.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, h.useMutualFriends)(t), S = (0, i.useStateFromStores)([_.default], () => _.default.getMutualGuilds(t.id)), m = t.bot || s, {
    enabled: E
  } = (0, N.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: m
  }), I = l.useMemo(() => {
    if (E) {
      var e;
      return g.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return g.default.Messages.MUTUAL_FRIENDS
  }, [E, f]), T = l.useMemo(() => {
    if (E) {
      var e;
      return g.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return g.default.Messages.MUTUAL_GUILDS
  }, [E, S]);
  return (0, a.jsx)("div", {
    className: D.tabBarContainer,
    children: (0, a.jsxs)(r.TabBar, {
      selectedItem: o,
      type: "top",
      onItemSelect: n,
      className: D.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(r.TabBar.Item, {
        className: D.tabBarItem,
        id: R.UserProfileSections.USER_INFO,
        children: g.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, a.jsx)(r.TabBar.Item, {
        className: D.tabBarItem,
        id: R.UserProfileSections.ACTIVITY,
        children: g.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, a.jsx)(r.TabBar.Item, {
        className: D.tabBarItem,
        id: R.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, a.jsx)(r.TabBar.Item, {
        className: D.tabBarItem,
        id: R.UserProfileSections.MUTUAL_GUILDS,
        children: T
      }), t.bot && d ? (0, a.jsx)(r.TabBar.Item, {
        className: D.tabBarItem,
        id: R.UserProfileSections.BOT_DATA_ACCESS,
        children: g.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function L(e) {
  var t, s;
  let {
    user: N,
    guildId: _,
    channelId: h,
    messageId: L,
    roleId: B,
    friendToken: b,
    autoFocusNote: G,
    initialSection: k = R.UserProfileSections.USER_INFO,
    transitionState: V,
    sourceAnalyticsLocations: w = [],
    onClose: H
  } = e, Y = null !== (t = (0, i.useStateFromStores)([T.default], () => T.default.getUser(N.id))) && void 0 !== t ? t : N, z = (0, v.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: J
  } = (0, f.default)([...w, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [_]: [Y.id]
  });
  let K = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(Y.id)),
    Q = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== O.ActivityTypes.CUSTOM_STATUS)),
    W = (0, j.useGetVoiceChannelInfoForVoiceActivitySection)(Y.id, _),
    [Z, q] = l.useState(!1),
    [X, $] = l.useState(Y.isNonUserBot() && !Y.isClyde() ? R.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([E.default], () => E.default.getId() === Y.id),
    {
      showVoiceActivityInProfile: et
    } = p.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != Q || K || null != W && et,
    ea = !ee || es,
    el = l.createRef(),
    ei = (0, n.default)(el);
  !es && X === R.UserProfileSections.ACTIVITY && $(R.UserProfileSections.USER_INFO);
  let er = l.useCallback(e => {
      (0, A.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: _,
        channelId: h,
        messageId: L,
        roleId: B,
        analyticsLocations: J
      }), q(!0), $(e)
    }, [Y.id, _, h, L, B, J]),
    eo = null == z ? void 0 : z.profileEffectId;
  return (0, a.jsx)(f.AnalyticsLocationProvider, {
    value: J,
    children: (0, a.jsx)(x.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: _,
      channelId: h,
      messageId: L,
      roleId: B,
      children: (0, a.jsx)(o.default, {
        section: O.AnalyticsSections.PROFILE_MODAL,
        children: (0, a.jsxs)(r.ModalRoot, {
          transitionState: V,
          className: D.root,
          hideShadow: !0,
          "aria-label": g.default.Messages.USER_PROFILE_MODAL,
          children: [(0, a.jsx)("div", {
            ref: el,
            children: (0, a.jsxs)(C.default, {
              user: Y,
              profileType: R.UserProfileTypes.MODAL,
              children: [(0, a.jsx)(P.default, {
                className: D.topSection,
                displayProfile: z,
                user: Y,
                friendToken: b,
                onClose: H,
                isStreaming: (0, d.default)(Q),
                guildId: _,
                channelId: h,
                hasProfileEffect: null != eo
              }), (0, a.jsxs)(C.default.Inner, {
                children: [V === r.ModalTransitionState.ENTERED && (0, a.jsx)(U.default, {
                  onTooltipClose: H
                }), (0, a.jsxs)("div", {
                  className: D.body,
                  children: [(0, a.jsx)(M.default, {
                    user: Y,
                    displayProfile: z
                  }), ea ? (0, a.jsx)(F, {
                    user: Y,
                    section: X === R.UserProfileSections.USER_INFO_CONNECTIONS ? R.UserProfileSections.USER_INFO : X,
                    setSection: er,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, a.jsx)("div", {
                    className: D.divider
                  }), (0, a.jsx)(y.default, {
                    displayProfile: z,
                    user: Y,
                    autoFocusNote: G && !Z,
                    selectedSection: X,
                    onClose: H
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