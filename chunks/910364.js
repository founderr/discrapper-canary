"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("410575"),
  o = s("727637"),
  u = s("58540"),
  d = s("420660"),
  c = s("100527"),
  f = s("906732"),
  S = s("680295"),
  m = s("199902"),
  v = s("314897"),
  I = s("158776"),
  E = s("594174"),
  x = s("342656"),
  A = s("785717"),
  _ = s("221292"),
  T = s("621853"),
  N = s("895618"),
  U = s("318661"),
  C = s("706327"),
  g = s("484404"),
  h = s("502762"),
  p = s("58307"),
  j = s("62154"),
  R = s("293259"),
  P = s("725954"),
  M = s("228168"),
  y = s("981631"),
  O = s("689938"),
  L = s("507831");

function F(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: r,
    setSection: o,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([T.default], () => {
    var e, s;
    return (null === (s = T.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, C.useMutualFriends)(t), S = (0, i.useStateFromStores)([T.default], () => T.default.getMutualGuilds(t.id)), m = t.bot || s, {
    enabled: v
  } = (0, x.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: m
  }), I = a.useMemo(() => {
    if (v) {
      var e;
      return O.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_FRIENDS
  }, [v, f]), E = a.useMemo(() => {
    if (v) {
      var e;
      return O.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_GUILDS
  }, [v, S]);
  return (0, l.jsx)("div", {
    className: L.tabBarContainer,
    children: (0, l.jsxs)(n.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: o,
      className: L.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.MUTUAL_GUILDS,
        children: E
      }), t.bot && d ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.BOT_DATA_ACCESS,
        children: O.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function D(e) {
  var t, s;
  let {
    user: x,
    guildId: T,
    channelId: C,
    messageId: D,
    roleId: b,
    friendToken: B,
    autoFocusNote: G,
    initialSection: k = M.UserProfileSections.USER_INFO,
    transitionState: w,
    sourceAnalyticsLocations: V = [],
    onClose: Y
  } = e, H = null !== (t = (0, i.useStateFromStores)([E.default], () => E.default.getUser(x.id))) && void 0 !== t ? t : x, z = (0, U.default)(null !== (s = H.id) && void 0 !== s ? s : ""), {
    analyticsLocations: W
  } = (0, f.default)([...V, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [T]: [H.id]
  });
  let Z = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(H.id)),
    J = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(H.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    K = (0, p.useGetVoiceChannelInfoForVoiceActivitySection)(H.id, T),
    [Q, q] = a.useState(!1),
    [X, $] = a.useState(H.isNonUserBot() && !H.isClyde() ? M.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([v.default], () => v.default.getId() === H.id),
    {
      showVoiceActivityInProfile: et
    } = N.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != J || Z || null != K && et,
    el = !ee || es,
    ea = a.createRef(),
    ei = (0, o.default)(ea);
  !es && X === M.UserProfileSections.ACTIVITY && $(M.UserProfileSections.USER_INFO);
  let en = a.useCallback(e => {
      (0, _.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: H.id,
        guildId: T,
        channelId: C,
        messageId: D,
        roleId: b,
        analyticsLocations: W
      }), q(!0), $(e)
    }, [H.id, T, C, D, b, W]),
    er = null == z ? void 0 : z.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: W,
    children: (0, l.jsx)(A.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: H.id,
      guildId: T,
      channelId: C,
      messageId: D,
      roleId: b,
      children: (0, l.jsx)(r.default, {
        section: y.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(n.ModalRoot, {
          transitionState: w,
          className: L.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsx)("div", {
            ref: ea,
            children: (0, l.jsxs)(h.default, {
              user: H,
              displayProfile: z,
              profileType: M.UserProfileTypes.MODAL,
              children: [(0, l.jsx)(R.default, {
                className: L.topSection,
                displayProfile: z,
                user: H,
                friendToken: B,
                onClose: Y,
                isStreaming: (0, d.default)(J),
                guildId: T,
                channelId: C,
                hasProfileEffect: null != er
              }), (0, l.jsxs)(h.default.Overlay, {
                children: [w === n.ModalTransitionState.ENTERED && (0, l.jsx)(g.default, {
                  onTooltipClose: Y
                }), (0, l.jsxs)("div", {
                  className: L.body,
                  children: [(0, l.jsx)(P.default, {
                    user: H,
                    displayProfile: z
                  }), el ? (0, l.jsx)(F, {
                    user: H,
                    section: X === M.UserProfileSections.USER_INFO_CONNECTIONS ? M.UserProfileSections.USER_INFO : X,
                    setSection: en,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, l.jsx)("div", {
                    className: L.divider
                  }), (0, l.jsx)(j.default, {
                    displayProfile: z,
                    user: H,
                    autoFocusNote: G && !Q,
                    selectedSection: X,
                    onClose: Y
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