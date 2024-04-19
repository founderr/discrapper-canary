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
  m = s("199902"),
  E = s("314897"),
  I = s("158776"),
  v = s("594174"),
  x = s("342656"),
  N = s("785717"),
  _ = s("221292"),
  A = s("621853"),
  T = s("895618"),
  U = s("318661"),
  h = s("706327"),
  p = s("484404"),
  j = s("502762"),
  g = s("58307"),
  R = s("62154"),
  P = s("293259"),
  C = s("725954"),
  M = s("228168"),
  y = s("981631"),
  O = s("689938"),
  L = s("775149");

function F(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: r,
    setSection: n,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([A.default], () => {
    var e, s;
    return (null === (s = A.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, h.useMutualFriends)(t), S = (0, i.useStateFromStores)([A.default], () => A.default.getMutualGuilds(t.id)), m = t.bot || s, {
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
    className: L.tabBarContainer,
    children: (0, l.jsxs)(o.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: n,
      className: L.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(o.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(o.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(o.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, l.jsx)(o.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.MUTUAL_GUILDS,
        children: v
      }), t.bot && d ? (0, l.jsx)(o.TabBar.Item, {
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
    guildId: A,
    channelId: h,
    messageId: D,
    roleId: b,
    friendToken: B,
    autoFocusNote: G,
    initialSection: k = M.UserProfileSections.USER_INFO,
    transitionState: V,
    sourceAnalyticsLocations: w = [],
    onClose: z
  } = e, H = null !== (t = (0, i.useStateFromStores)([v.default], () => v.default.getUser(x.id))) && void 0 !== t ? t : x, Y = (0, U.default)(null !== (s = H.id) && void 0 !== s ? s : ""), {
    analyticsLocations: W
  } = (0, f.default)([...w, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [A]: [H.id]
  });
  let Z = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(H.id)),
    K = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(H.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    J = (0, g.useGetVoiceChannelInfoForVoiceActivitySection)(H.id, A),
    [Q, q] = a.useState(!1),
    [X, $] = a.useState(H.isNonUserBot() && !H.isClyde() ? M.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([E.default], () => E.default.getId() === H.id),
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
    ei = (0, n.default)(ea);
  !es && X === M.UserProfileSections.ACTIVITY && $(M.UserProfileSections.USER_INFO);
  let eo = a.useCallback(e => {
      (0, _.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: H.id,
        guildId: A,
        channelId: h,
        messageId: D,
        roleId: b,
        analyticsLocations: W
      }), q(!0), $(e)
    }, [H.id, A, h, D, b, W]),
    er = null == Y ? void 0 : Y.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: W,
    children: (0, l.jsx)(N.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: H.id,
      guildId: A,
      channelId: h,
      messageId: D,
      roleId: b,
      children: (0, l.jsx)(r.default, {
        section: y.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(o.ModalRoot, {
          transitionState: V,
          className: L.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsx)("div", {
            ref: ea,
            children: (0, l.jsxs)(j.default, {
              user: H,
              displayProfile: Y,
              profileType: M.UserProfileTypes.MODAL,
              children: [(0, l.jsx)(P.default, {
                className: L.topSection,
                displayProfile: Y,
                user: H,
                friendToken: B,
                onClose: z,
                isStreaming: (0, d.default)(K),
                guildId: A,
                channelId: h,
                hasProfileEffect: null != er
              }), (0, l.jsxs)(j.default.Overlay, {
                children: [V === o.ModalTransitionState.ENTERED && (0, l.jsx)(p.default, {
                  onTooltipClose: z
                }), (0, l.jsxs)("div", {
                  className: L.body,
                  children: [(0, l.jsx)(C.default, {
                    user: H,
                    displayProfile: Y
                  }), el ? (0, l.jsx)(F, {
                    user: H,
                    section: X === M.UserProfileSections.USER_INFO_CONNECTIONS ? M.UserProfileSections.USER_INFO : X,
                    setSection: eo,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, l.jsx)("div", {
                    className: L.divider
                  }), (0, l.jsx)(R.default, {
                    displayProfile: Y,
                    user: H,
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