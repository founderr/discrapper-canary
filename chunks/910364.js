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
  r = s("410575"),
  o = s("727637"),
  u = s("58540"),
  d = s("420660"),
  c = s("100527"),
  f = s("906732"),
  S = s("680295"),
  m = s("199902"),
  I = s("314897"),
  E = s("158776"),
  v = s("594174"),
  _ = s("342656"),
  T = s("785717"),
  x = s("221292"),
  U = s("621853"),
  A = s("318661"),
  g = s("706327"),
  N = s("484404"),
  C = s("502762"),
  h = s("62154"),
  R = s("293259"),
  p = s("725954"),
  P = s("228168"),
  M = s("981631"),
  j = s("689938"),
  y = s("463469");

function O(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: r,
    setSection: o,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([U.default], () => {
    var e, s;
    return (null === (s = U.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, g.useMutualFriends)(t), S = (0, i.useStateFromStores)([U.default], () => U.default.getMutualGuilds(t.id)), m = t.bot || s, {
    enabled: I
  } = (0, _.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: m
  }), E = a.useMemo(() => {
    if (I) {
      var e;
      return j.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return j.default.Messages.MUTUAL_FRIENDS
  }, [I, f]), v = a.useMemo(() => {
    if (I) {
      var e;
      return j.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return j.default.Messages.MUTUAL_GUILDS
  }, [I, S]);
  return (0, l.jsx)("div", {
    className: y.tabBarContainer,
    children: (0, l.jsxs)(n.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: o,
      className: y.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.USER_INFO,
        children: j.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: j.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: E
      }), s || t.isClyde() ? null : (0, l.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: v
      }), t.bot && d ? (0, l.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.BOT_DATA_ACCESS,
        children: j.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function L(e) {
  var t, s;
  let {
    user: _,
    guildId: U,
    channelId: g,
    messageId: L,
    roleId: F,
    friendToken: D,
    autoFocusNote: b,
    initialSection: B = P.UserProfileSections.USER_INFO,
    transitionState: G,
    sourceAnalyticsLocations: k = [],
    onClose: w
  } = e, Y = null !== (t = (0, i.useStateFromStores)([v.default], () => v.default.getUser(_.id))) && void 0 !== t ? t : _, H = (0, A.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: V
  } = (0, f.default)([...k, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [U]: [Y.id]
  });
  let z = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(Y.id)),
    W = (0, i.useStateFromStores)([E.default], () => E.default.findActivity(Y.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    [Z, K] = a.useState(!1),
    [J, Q] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? P.UserProfileSections.MUTUAL_GUILDS : B),
    q = (0, i.useStateFromStores)([I.default], () => I.default.getId() === Y.id),
    X = null != W || z,
    $ = !q || X,
    ee = a.createRef(),
    et = (0, o.default)(ee);
  !X && J === P.UserProfileSections.ACTIVITY && Q(P.UserProfileSections.USER_INFO);
  let es = a.useCallback(e => {
      (0, x.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: U,
        channelId: g,
        messageId: L,
        roleId: F,
        analyticsLocations: V
      }), K(!0), Q(e)
    }, [Y.id, U, g, L, F, V]),
    el = null == H ? void 0 : H.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: V,
    children: (0, l.jsx)(T.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: U,
      channelId: g,
      messageId: L,
      roleId: F,
      children: (0, l.jsx)(r.default, {
        section: M.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(n.ModalRoot, {
          transitionState: G,
          className: y.root,
          hideShadow: !0,
          "aria-label": j.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsxs)(C.default, {
            user: Y,
            displayProfile: H,
            profileType: P.UserProfileTypes.MODAL,
            ref: ee,
            children: [(0, l.jsx)(R.default, {
              className: y.topSection,
              displayProfile: H,
              user: Y,
              friendToken: D,
              onClose: w,
              isStreaming: (0, d.default)(W),
              guildId: U,
              channelId: g,
              hasProfileEffect: null != el
            }), (0, l.jsxs)(C.default.Overlay, {
              className: y.overlay,
              children: [G === n.ModalTransitionState.ENTERED && (0, l.jsx)(N.default, {
                onTooltipClose: w
              }), (0, l.jsxs)("div", {
                className: y.body,
                children: [(0, l.jsx)(p.default, {
                  user: Y,
                  displayProfile: H
                }), $ ? (0, l.jsx)(O, {
                  user: Y,
                  section: J === P.UserProfileSections.USER_INFO_CONNECTIONS ? P.UserProfileSections.USER_INFO : J,
                  setSection: es,
                  hasActivity: X,
                  isCurrentUser: q
                }) : (0, l.jsx)("div", {
                  className: y.divider
                }), (0, l.jsx)(h.default, {
                  displayProfile: H,
                  user: Y,
                  autoFocusNote: b && !Z,
                  selectedSection: J,
                  onClose: w
                })]
              })]
            })]
          }), null != el && (0, l.jsx)(S.default, {
            profileEffectId: el,
            bannerAdjustment: 0,
            isHovering: et
          })]
        })
      })
    })
  })
}