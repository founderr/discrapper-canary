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
  I = s("314897"),
  v = s("158776"),
  E = s("594174"),
  x = s("342656"),
  _ = s("785717"),
  T = s("221292"),
  A = s("621853"),
  N = s("895618"),
  C = s("318661"),
  g = s("706327"),
  U = s("484404"),
  h = s("502762"),
  p = s("58307"),
  j = s("62154"),
  R = s("293259"),
  M = s("725954"),
  P = s("228168"),
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
  } = e, d = (0, i.useStateFromStores)([A.default], () => {
    var e, s;
    return (null === (s = A.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, g.useMutualFriends)(t), S = (0, i.useStateFromStores)([A.default], () => A.default.getMutualGuilds(t.id)), m = t.bot || s, {
    enabled: I
  } = (0, x.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: m
  }), v = a.useMemo(() => {
    if (I) {
      var e;
      return O.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_FRIENDS
  }, [I, f]), E = a.useMemo(() => {
    if (I) {
      var e;
      return O.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return O.default.Messages.MUTUAL_GUILDS
  }, [I, S]);
  return (0, l.jsx)("div", {
    className: L.tabBarContainer,
    children: (0, l.jsxs)(n.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: o,
      className: L.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: v
      }), s || t.isClyde() ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: E
      }), t.bot && d ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.BOT_DATA_ACCESS,
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
    channelId: g,
    messageId: D,
    roleId: b,
    friendToken: B,
    autoFocusNote: G,
    initialSection: w = P.UserProfileSections.USER_INFO,
    transitionState: k,
    sourceAnalyticsLocations: V = [],
    onClose: Y
  } = e, z = null !== (t = (0, i.useStateFromStores)([E.default], () => E.default.getUser(x.id))) && void 0 !== t ? t : x, H = (0, C.default)(null !== (s = z.id) && void 0 !== s ? s : ""), {
    analyticsLocations: Z
  } = (0, f.default)([...V, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [A]: [z.id]
  });
  let W = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(z.id)),
    K = (0, i.useStateFromStores)([v.default], () => v.default.findActivity(z.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    J = (0, p.useGetVoiceChannelInfoForVoiceActivitySection)(z.id, A),
    [Q, q] = a.useState(!1),
    [X, $] = a.useState(z.isNonUserBot() && !z.isClyde() ? P.UserProfileSections.MUTUAL_GUILDS : w),
    ee = (0, i.useStateFromStores)([I.default], () => I.default.getId() === z.id),
    {
      showVoiceActivityInProfile: et
    } = N.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    es = null != K || W || null != J && et,
    el = !ee || es,
    ea = a.createRef(),
    ei = (0, o.default)(ea);
  !es && X === P.UserProfileSections.ACTIVITY && $(P.UserProfileSections.USER_INFO);
  let en = a.useCallback(e => {
      (0, T.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: z.id,
        guildId: A,
        channelId: g,
        messageId: D,
        roleId: b,
        analyticsLocations: Z
      }), q(!0), $(e)
    }, [z.id, A, g, D, b, Z]),
    er = null == H ? void 0 : H.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: Z,
    children: (0, l.jsx)(_.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: z.id,
      guildId: A,
      channelId: g,
      messageId: D,
      roleId: b,
      children: (0, l.jsx)(r.default, {
        section: y.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(n.ModalRoot, {
          transitionState: k,
          className: L.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsx)("div", {
            ref: ea,
            children: (0, l.jsxs)(h.default, {
              user: z,
              displayProfile: H,
              profileType: P.UserProfileTypes.MODAL,
              children: [(0, l.jsx)(R.default, {
                className: L.topSection,
                displayProfile: H,
                user: z,
                friendToken: B,
                onClose: Y,
                isStreaming: (0, d.default)(K),
                guildId: A,
                channelId: g,
                hasProfileEffect: null != er
              }), (0, l.jsxs)(h.default.Overlay, {
                children: [k === n.ModalTransitionState.ENTERED && (0, l.jsx)(U.default, {
                  onTooltipClose: Y
                }), (0, l.jsxs)("div", {
                  className: L.body,
                  children: [(0, l.jsx)(M.default, {
                    user: z,
                    displayProfile: H
                  }), el ? (0, l.jsx)(F, {
                    user: z,
                    section: X === P.UserProfileSections.USER_INFO_CONNECTIONS ? P.UserProfileSections.USER_INFO : X,
                    setSection: en,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, l.jsx)("div", {
                    className: L.divider
                  }), (0, l.jsx)(j.default, {
                    displayProfile: H,
                    user: z,
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