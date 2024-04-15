"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
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
  I = s("314897"),
  m = s("158776"),
  _ = s("594174"),
  T = s("342656"),
  p = s("785717"),
  A = s("221292"),
  N = s("621853"),
  v = s("895618"),
  x = s("318661"),
  U = s("706327"),
  h = s("484404"),
  C = s("502762"),
  R = s("58307"),
  P = s("62154"),
  M = s("293259"),
  g = s("725954"),
  j = s("228168"),
  y = s("981631"),
  O = s("689938"),
  D = s("775149");

function F(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: o,
    setSection: r,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([N.default], () => {
    var e, s;
    return (null === (s = N.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, U.useMutualFriends)(t), S = (0, i.useStateFromStores)([N.default], () => N.default.getMutualGuilds(t.id)), E = t.bot || s, {
    enabled: I
  } = (0, T.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: E
  }), m = a.useMemo(() => {
    if (I) {
      var e;
      return O.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_FRIENDS
  }, [I, f]), _ = a.useMemo(() => {
    if (I) {
      var e;
      return O.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_GUILDS
  }, [I, S]);
  return (0, l.jsx)("div", {
    className: D.tabBarContainer,
    children: (0, l.jsxs)(n.TabBar, {
      selectedItem: o,
      type: "top",
      onItemSelect: r,
      className: D.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: j.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: j.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: j.UserProfileSections.MUTUAL_FRIENDS,
        children: m
      }), s || t.isClyde() ? null : (0, l.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: j.UserProfileSections.MUTUAL_GUILDS,
        children: _
      }), t.bot && d ? (0, l.jsx)(n.TabBar.Item, {
        className: D.tabBarItem,
        id: j.UserProfileSections.BOT_DATA_ACCESS,
        children: O.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function L(e) {
  var t, s;
  let {
    user: T,
    guildId: N,
    channelId: U,
    messageId: L,
    roleId: B,
    friendToken: b,
    autoFocusNote: G,
    initialSection: k = j.UserProfileSections.USER_INFO,
    transitionState: w,
    sourceAnalyticsLocations: V = [],
    onClose: z
  } = e, Y = null !== (t = (0, i.useStateFromStores)([_.default], () => _.default.getUser(T.id))) && void 0 !== t ? t : T, H = (0, x.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: Q
  } = (0, f.default)([...V, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [N]: [Y.id]
  });
  let W = (0, i.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(Y.id)),
    K = (0, i.useStateFromStores)([m.default], () => m.default.findActivity(Y.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    Z = (0, R.useGetVoiceChannelInfoForVoiceActivitySection)(Y.id, N),
    [q, J] = a.useState(!1),
    [X, $] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? j.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([I.default], () => I.default.getId() === Y.id),
    {
      showVoiceActivityInProfile: et
    } = v.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != K || W || null != Z && et,
    el = !ee || es,
    ea = a.createRef(),
    ei = (0, r.default)(ea);
  !es && X === j.UserProfileSections.ACTIVITY && $(j.UserProfileSections.USER_INFO);
  let en = a.useCallback(e => {
      (0, A.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: N,
        channelId: U,
        messageId: L,
        roleId: B,
        analyticsLocations: Q
      }), J(!0), $(e)
    }, [Y.id, N, U, L, B, Q]),
    eo = null == H ? void 0 : H.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: Q,
    children: (0, l.jsx)(p.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: N,
      channelId: U,
      messageId: L,
      roleId: B,
      children: (0, l.jsx)(o.default, {
        section: y.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(n.ModalRoot, {
          transitionState: w,
          className: D.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsx)("div", {
            ref: ea,
            children: (0, l.jsxs)(C.default, {
              user: Y,
              displayProfile: H,
              profileType: j.UserProfileTypes.MODAL,
              children: [(0, l.jsx)(M.default, {
                className: D.topSection,
                displayProfile: H,
                user: Y,
                friendToken: b,
                onClose: z,
                isStreaming: (0, d.default)(K),
                guildId: N,
                channelId: U,
                hasProfileEffect: null != eo
              }), (0, l.jsxs)(C.default.Overlay, {
                children: [w === n.ModalTransitionState.ENTERED && (0, l.jsx)(h.default, {
                  onTooltipClose: z
                }), (0, l.jsxs)("div", {
                  className: D.body,
                  children: [(0, l.jsx)(g.default, {
                    user: Y,
                    displayProfile: H
                  }), el ? (0, l.jsx)(F, {
                    user: Y,
                    section: X === j.UserProfileSections.USER_INFO_CONNECTIONS ? j.UserProfileSections.USER_INFO : X,
                    setSection: en,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, l.jsx)("div", {
                    className: D.divider
                  }), (0, l.jsx)(P.default, {
                    displayProfile: H,
                    user: Y,
                    autoFocusNote: G && !q,
                    selectedSection: X,
                    onClose: z
                  })]
                })]
              })]
            })
          }), null != eo && (0, l.jsx)(S.default, {
            profileEffectId: eo,
            bannerAdjustment: 0,
            isHovering: ei
          })]
        })
      })
    })
  })
}