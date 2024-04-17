"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  o = s("481060"),
  r = s("410575"),
  n = s("727637"),
  u = s("58540"),
  d = s("420660"),
  c = s("100527"),
  f = s("906732"),
  S = s("680295"),
  E = s("199902"),
  m = s("314897"),
  I = s("158776"),
  v = s("594174"),
  _ = s("342656"),
  A = s("785717"),
  T = s("221292"),
  x = s("621853"),
  N = s("895618"),
  U = s("318661"),
  p = s("706327"),
  h = s("484404"),
  C = s("502762"),
  P = s("58307"),
  j = s("62154"),
  M = s("293259"),
  y = s("725954"),
  R = s("228168"),
  g = s("981631"),
  O = s("689938"),
  F = s("775149");

function L(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: r,
    setSection: n,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([x.default], () => {
    var e, s;
    return (null === (s = x.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, p.useMutualFriends)(t), S = (0, i.useStateFromStores)([x.default], () => x.default.getMutualGuilds(t.id)), E = t.bot || s, {
    enabled: m
  } = (0, _.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: E
  }), I = a.useMemo(() => {
    if (m) {
      var e;
      return O.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_FRIENDS
  }, [m, f]), v = a.useMemo(() => {
    if (m) {
      var e;
      return O.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_GUILDS
  }, [m, S]);
  return (0, l.jsx)("div", {
    className: F.tabBarContainer,
    children: (0, l.jsxs)(o.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: n,
      className: F.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: R.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: R.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: R.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, l.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: R.UserProfileSections.MUTUAL_GUILDS,
        children: v
      }), t.bot && d ? (0, l.jsx)(o.TabBar.Item, {
        className: F.tabBarItem,
        id: R.UserProfileSections.BOT_DATA_ACCESS,
        children: O.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function D(e) {
  var t, s;
  let {
    user: _,
    guildId: x,
    channelId: p,
    messageId: D,
    roleId: B,
    friendToken: b,
    autoFocusNote: G,
    initialSection: k = R.UserProfileSections.USER_INFO,
    transitionState: w,
    sourceAnalyticsLocations: V = [],
    onClose: z
  } = e, Y = null !== (t = (0, i.useStateFromStores)([v.default], () => v.default.getUser(_.id))) && void 0 !== t ? t : _, H = (0, U.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: W
  } = (0, f.default)([...V, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [x]: [Y.id]
  });
  let Z = (0, i.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(Y.id)),
    K = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== g.ActivityTypes.CUSTOM_STATUS)),
    J = (0, P.useGetVoiceChannelInfoForVoiceActivitySection)(Y.id, x),
    [Q, q] = a.useState(!1),
    [X, $] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? R.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([m.default], () => m.default.getId() === Y.id),
    {
      showVoiceActivityInProfile: et
    } = N.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != K || Z || null != J && et,
    el = !ee || es,
    ea = a.createRef(),
    ei = (0, n.default)(ea);
  !es && X === R.UserProfileSections.ACTIVITY && $(R.UserProfileSections.USER_INFO);
  let eo = a.useCallback(e => {
      (0, T.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: x,
        channelId: p,
        messageId: D,
        roleId: B,
        analyticsLocations: W
      }), q(!0), $(e)
    }, [Y.id, x, p, D, B, W]),
    er = null == H ? void 0 : H.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: W,
    children: (0, l.jsx)(A.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: x,
      channelId: p,
      messageId: D,
      roleId: B,
      children: (0, l.jsx)(r.default, {
        section: g.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(o.ModalRoot, {
          transitionState: w,
          className: F.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsx)("div", {
            ref: ea,
            children: (0, l.jsxs)(C.default, {
              user: Y,
              displayProfile: H,
              profileType: R.UserProfileTypes.MODAL,
              children: [(0, l.jsx)(M.default, {
                className: F.topSection,
                displayProfile: H,
                user: Y,
                friendToken: b,
                onClose: z,
                isStreaming: (0, d.default)(K),
                guildId: x,
                channelId: p,
                hasProfileEffect: null != er
              }), (0, l.jsxs)(C.default.Overlay, {
                children: [w === o.ModalTransitionState.ENTERED && (0, l.jsx)(h.default, {
                  onTooltipClose: z
                }), (0, l.jsxs)("div", {
                  className: F.body,
                  children: [(0, l.jsx)(y.default, {
                    user: Y,
                    displayProfile: H
                  }), el ? (0, l.jsx)(L, {
                    user: Y,
                    section: X === R.UserProfileSections.USER_INFO_CONNECTIONS ? R.UserProfileSections.USER_INFO : X,
                    setSection: eo,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, l.jsx)("div", {
                    className: F.divider
                  }), (0, l.jsx)(j.default, {
                    displayProfile: H,
                    user: Y,
                    autoFocusNote: G && !Q,
                    selectedSection: X,
                    onClose: z
                  })]
                })]
              })]
            })
          }), null != er && (0, l.jsx)(S.default, {
            profileEffectId: er,
            bannerAdjustment: 0,
            isHovering: ei
          })]
        })
      })
    })
  })
}