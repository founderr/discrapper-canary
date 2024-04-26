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
  T = s("221292"),
  A = s("621853"),
  N = s("895618"),
  U = s("318661"),
  p = s("706327"),
  h = s("484404"),
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
    section: n,
    setSection: o,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([A.default], () => {
    var e, s;
    return (null === (s = A.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, p.useMutualFriends)(t), S = (0, i.useStateFromStores)([A.default], () => A.default.getMutualGuilds(t.id)), m = t.bot || s, {
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
    children: (0, l.jsxs)(r.TabBar, {
      selectedItem: n,
      type: "top",
      onItemSelect: o,
      className: L.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(r.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.USER_INFO,
        children: O.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(r.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.ACTIVITY,
        children: O.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(r.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, l.jsx)(r.TabBar.Item, {
        className: L.tabBarItem,
        id: M.UserProfileSections.MUTUAL_GUILDS,
        children: v
      }), t.bot && d ? (0, l.jsx)(r.TabBar.Item, {
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
    channelId: p,
    messageId: D,
    roleId: b,
    friendToken: B,
    autoFocusNote: G,
    initialSection: k = M.UserProfileSections.USER_INFO,
    transitionState: V,
    sourceAnalyticsLocations: w = [],
    onClose: H
  } = e, Y = null !== (t = (0, i.useStateFromStores)([v.default], () => v.default.getUser(x.id))) && void 0 !== t ? t : x, z = (0, U.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: W
  } = (0, f.default)([...w, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [A]: [Y.id]
  });
  let Z = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(Y.id)),
    K = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    J = (0, g.useGetVoiceChannelInfoForVoiceActivitySection)(Y.id, A),
    [Q, q] = a.useState(!1),
    [X, $] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? M.UserProfileSections.MUTUAL_GUILDS : k),
    ee = (0, i.useStateFromStores)([E.default], () => E.default.getId() === Y.id),
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
    ei = (0, o.default)(ea);
  !es && X === M.UserProfileSections.ACTIVITY && $(M.UserProfileSections.USER_INFO);
  let er = a.useCallback(e => {
      (0, T.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: A,
        channelId: p,
        messageId: D,
        roleId: b,
        analyticsLocations: W
      }), q(!0), $(e)
    }, [Y.id, A, p, D, b, W]),
    en = null == z ? void 0 : z.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: W,
    children: (0, l.jsx)(_.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: A,
      channelId: p,
      messageId: D,
      roleId: b,
      children: (0, l.jsx)(n.default, {
        section: y.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(r.ModalRoot, {
          transitionState: V,
          className: L.root,
          hideShadow: !0,
          "aria-label": O.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsx)("div", {
            ref: ea,
            children: (0, l.jsxs)(j.default, {
              user: Y,
              displayProfile: z,
              profileType: M.UserProfileTypes.MODAL,
              children: [(0, l.jsx)(P.default, {
                className: L.topSection,
                displayProfile: z,
                user: Y,
                friendToken: B,
                onClose: H,
                isStreaming: (0, d.default)(K),
                guildId: A,
                channelId: p,
                hasProfileEffect: null != en
              }), (0, l.jsxs)(j.default.Overlay, {
                children: [V === r.ModalTransitionState.ENTERED && (0, l.jsx)(h.default, {
                  onTooltipClose: H
                }), (0, l.jsxs)("div", {
                  className: L.body,
                  children: [(0, l.jsx)(C.default, {
                    user: Y,
                    displayProfile: z
                  }), el ? (0, l.jsx)(F, {
                    user: Y,
                    section: X === M.UserProfileSections.USER_INFO_CONNECTIONS ? M.UserProfileSections.USER_INFO : X,
                    setSection: er,
                    hasActivity: es,
                    isCurrentUser: ee
                  }) : (0, l.jsx)("div", {
                    className: L.divider
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