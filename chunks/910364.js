"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  r = s("481060"),
  n = s("410575"),
  o = s("727637"),
  u = s("58540"),
  d = s("420660"),
  c = s("100527"),
  f = s("906732"),
  S = s("680295"),
  m = s("199902"),
  E = s("314897"),
  I = s("158776"),
  v = s("594174"),
  x = s("342656"),
  _ = s("785717"),
  A = s("221292"),
  N = s("621853"),
  T = s("895618"),
  U = s("318661"),
  h = s("706327"),
  p = s("484404"),
  g = s("502762"),
  j = s("58307"),
  R = s("62154"),
  P = s("293259"),
  M = s("725954"),
  C = s("228168"),
  y = s("981631"),
  O = s("689938"),
  F = s("775149");

function L(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: n,
    setSection: o,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([N.default], () => {
    var e, s;
    return (null === (s = N.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, h.useMutualFriends)(t), S = (0, i.useStateFromStores)([N.default], () => N.default.getMutualGuilds(t.id)), m = t.bot || s, {
    enabled: E
  } = (0, x.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: m
  }), I = a.useMemo(() => {
    if (E) {
      var e;
      return O.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_FRIENDS
  }, [E, f]), v = a.useMemo(() => {
    if (E) {
      var e;
      return O.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_GUILDS
  }, [E, S]);
  return (0, l.jsx)("div", {
    className: F.tabBarContainer,
    children: (0, l.jsxs)(r.TabBar, {
      selectedItem: n,
      type: "top",
      onItemSelect: o,
      className: F.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(r.TabBar.Item, {
        className: F.tabBarItem,
        id: C.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(r.TabBar.Item, {
        className: F.tabBarItem,
        id: C.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(r.TabBar.Item, {
        className: F.tabBarItem,
        id: C.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, l.jsx)(r.TabBar.Item, {
        className: F.tabBarItem,
        id: C.UserProfileSections.MUTUAL_GUILDS,
        children: v
      }), t.bot && d ? (0, l.jsx)(r.TabBar.Item, {
        className: F.tabBarItem,
        id: C.UserProfileSections.BOT_DATA_ACCESS,
        children: O.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function D(e) {
  var t, s;
  let {
    user: x,
    guildId: N,
    channelId: h,
    messageId: D,
    roleId: b,
    friendToken: B,
    autoFocusNote: G,
    initialSection: k = C.UserProfileSections.USER_INFO,
    transitionState: V,
    sourceAnalyticsLocations: w = [],
    onClose: H
  } = e, Y = null !== (t = (0, i.useStateFromStores)([v.default], () => v.default.getUser(x.id))) && void 0 !== t ? t : x, z = (0, U.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: W
  } = (0, f.default)([...w, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [N]: [Y.id]
  });
  let Z = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(Y.id)),
    K = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    J = (0, j.useGetVoiceChannelInfoForVoiceActivitySection)(Y.id, N),
    [Q, q] = a.useState(!1),
    [X, $] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? C.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([E.default], () => E.default.getId() === Y.id),
    {
      showVoiceActivityInProfile: et
    } = T.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != K || Z || null != J && et,
    el = !ee || es,
    ea = a.createRef(),
    ei = (0, o.default)(ea);
  !es && X === C.UserProfileSections.ACTIVITY && $(C.UserProfileSections.USER_INFO);
  let er = a.useCallback(e => {
      (0, A.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: N,
        channelId: h,
        messageId: D,
        roleId: b,
        analyticsLocations: W
      }), q(!0), $(e)
    }, [Y.id, N, h, D, b, W]),
    en = null == z ? void 0 : z.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: W,
    children: (0, l.jsx)(_.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: N,
      channelId: h,
      messageId: D,
      roleId: b,
      children: (0, l.jsx)(n.default, {
        section: y.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(r.ModalRoot, {
          transitionState: V,
          className: F.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsx)("div", {
            ref: ea,
            children: (0, l.jsxs)(g.default, {
              user: Y,
              displayProfile: z,
              profileType: C.UserProfileTypes.MODAL,
              children: [(0, l.jsx)(P.default, {
                className: F.topSection,
                displayProfile: z,
                user: Y,
                friendToken: B,
                onClose: H,
                isStreaming: (0, d.default)(K),
                guildId: N,
                channelId: h,
                hasProfileEffect: null != en
              }), (0, l.jsxs)(g.default.Overlay, {
                children: [V === r.ModalTransitionState.ENTERED && (0, l.jsx)(p.default, {
                  onTooltipClose: H
                }), (0, l.jsxs)("div", {
                  className: F.body,
                  children: [(0, l.jsx)(M.default, {
                    user: Y,
                    displayProfile: z
                  }), el ? (0, l.jsx)(L, {
                    user: Y,
                    section: X === C.UserProfileSections.USER_INFO_CONNECTIONS ? C.UserProfileSections.USER_INFO : X,
                    setSection: er,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, l.jsx)("div", {
                    className: F.divider
                  }), (0, l.jsx)(R.default, {
                    displayProfile: z,
                    user: Y,
                    autoFocusNote: G && !Q,
                    selectedSection: X,
                    onClose: H
                  })]
                })]
              })]
            })
          }), null != en && (0, l.jsx)(S.default, {
            profileEffectId: en,
            bannerAdjustment: 0,
            isHovering: ei
          })]
        })
      })
    })
  })
}