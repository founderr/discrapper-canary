"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
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
  E = s("314897"),
  I = s("158776"),
  v = s("594174"),
  _ = s("342656"),
  T = s("785717"),
  g = s("221292"),
  A = s("621853"),
  x = s("318661"),
  U = s("706327"),
  N = s("484404"),
  C = s("502762"),
  p = s("62154"),
  h = s("293259"),
  R = s("725954"),
  P = s("228168"),
  M = s("981631"),
  j = s("689938"),
  L = s("463469");

function y(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: r,
    setSection: o,
    hasActivity: u
  } = e, d = (0, i.useStateFromStores)([A.default], () => {
    var e, s;
    return (null === (s = A.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), f = (0, U.useMutualFriends)(t), S = (0, i.useStateFromStores)([A.default], () => A.default.getMutualGuilds(t.id)), m = t.bot || s, {
    enabled: E
  } = (0, _.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: c.default.PROFILE_MODAL,
    disable: m
  }), I = a.useMemo(() => {
    if (E) {
      var e;
      return j.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == f ? void 0 : f.length) && void 0 !== e ? e : 0)
      })
    }
    return j.default.Messages.MUTUAL_FRIENDS
  }, [E, f]), v = a.useMemo(() => {
    if (E) {
      var e;
      return j.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return j.default.Messages.MUTUAL_GUILDS
  }, [E, S]);
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
        children: j.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: j.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: I
      }), s || t.isClyde() ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: v
      }), t.bot && d ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.BOT_DATA_ACCESS,
        children: j.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function O(e) {
  var t, s;
  let {
    user: _,
    guildId: A,
    channelId: U,
    messageId: O,
    roleId: F,
    friendToken: D,
    autoFocusNote: b,
    initialSection: B = P.UserProfileSections.USER_INFO,
    transitionState: G,
    sourceAnalyticsLocations: k = [],
    onClose: w
  } = e, Y = null !== (t = (0, i.useStateFromStores)([v.default], () => v.default.getUser(_.id))) && void 0 !== t ? t : _, H = (0, x.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: V
  } = (0, f.default)([...k, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [A]: [Y.id]
  });
  let z = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(Y.id)),
    W = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    [Z, K] = a.useState(!1),
    [J, Q] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? P.UserProfileSections.MUTUAL_GUILDS : B),
    q = (0, i.useStateFromStores)([E.default], () => E.default.getId() === Y.id),
    X = null != W || z,
    $ = !q || X,
    ee = a.createRef(),
    et = (0, o.default)(ee);
  !X && J === P.UserProfileSections.ACTIVITY && Q(P.UserProfileSections.USER_INFO);
  let es = a.useCallback(e => {
      (0, g.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: A,
        channelId: U,
        messageId: O,
        roleId: F,
        analyticsLocations: V
      }), K(!0), Q(e)
    }, [Y.id, A, U, O, F, V]),
    el = null == H ? void 0 : H.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: V,
    children: (0, l.jsx)(T.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: A,
      channelId: U,
      messageId: O,
      roleId: F,
      children: (0, l.jsx)(r.default, {
        section: M.AnalyticsSections.PROFILE_MODAL,
        children: (0, l.jsxs)(n.ModalRoot, {
          transitionState: G,
          className: L.root,
          hideShadow: !0,
          "aria-label": j.default.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsxs)(C.default, {
            user: Y,
            displayProfile: H,
            profileType: P.UserProfileTypes.MODAL,
            ref: ee,
            children: [(0, l.jsx)(h.default, {
              className: L.topSection,
              displayProfile: H,
              user: Y,
              friendToken: D,
              onClose: w,
              isStreaming: (0, d.default)(W),
              guildId: A,
              channelId: U,
              hasProfileEffect: null != el
            }), (0, l.jsxs)(C.default.Overlay, {
              className: L.overlay,
              children: [G === n.ModalTransitionState.ENTERED && (0, l.jsx)(N.default, {
                onTooltipClose: w
              }), (0, l.jsxs)("div", {
                className: L.body,
                children: [(0, l.jsx)(R.default, {
                  user: Y,
                  displayProfile: H
                }), $ ? (0, l.jsx)(y, {
                  user: Y,
                  section: J === P.UserProfileSections.USER_INFO_CONNECTIONS ? P.UserProfileSections.USER_INFO : J,
                  setSection: es,
                  hasActivity: X,
                  isCurrentUser: q
                }) : (0, l.jsx)("div", {
                  className: L.divider
                }), (0, l.jsx)(p.default, {
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