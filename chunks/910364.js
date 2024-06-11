"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var s = l("735250"),
  i = l("470079"),
  a = l("442837"),
  n = l("481060"),
  o = l("410575"),
  r = l("727637"),
  u = l("58540"),
  d = l("420660"),
  c = l("100527"),
  f = l("906732"),
  S = l("580552"),
  E = l("680295"),
  I = l("199902"),
  m = l("314897"),
  _ = l("158776"),
  p = l("594174"),
  v = l("785717"),
  T = l("621853"),
  g = l("318661"),
  x = l("726059"),
  A = l("162267"),
  C = l("484404"),
  N = l("502762"),
  U = l("62154"),
  R = l("293259"),
  h = l("725954"),
  P = l("228168"),
  M = l("981631"),
  y = l("689938"),
  j = l("463469");

function F(e) {
  var t, l;
  let {
    user: i,
    isCurrentUser: o,
    section: r,
    setSection: u,
    hasActivity: d
  } = e, c = (0, a.useStateFromStores)([T.default], () => {
    var e, t;
    return (null === (t = T.default.getUserProfile(i.id)) || void 0 === t ? void 0 : null === (e = t.application) || void 0 === e ? void 0 : e.id) != null
  }), f = null === (t = (0, x.default)(i.id, !i.bot && !o).mutualFriends) || void 0 === t ? void 0 : t.length, E = null === (l = (0, A.default)(i.id, !i.bot && !o).mutualGuilds) || void 0 === l ? void 0 : l.length;
  return (0, s.jsx)("div", {
    className: j.tabBarContainer,
    children: (0, s.jsxs)(n.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: u,
      className: j.tabBar,
      children: [!i.isNonUserBot() || i.isClyde() || (0, S.default)(i.id) ? (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: P.UserProfileSections.USER_INFO,
        children: y.default.Messages.USER_INFO
      }) : null, !i.bot && d ? (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: y.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, i.bot || o ? null : (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: null == f ? y.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : y.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(f)
        })
      }), o || i.isClyde() || (0, S.default)(i.id) ? null : (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: null == E ? y.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : y.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(E)
        })
      }), i.bot && c ? (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: P.UserProfileSections.BOT_DATA_ACCESS,
        children: y.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function O(e) {
  var t, l;
  let {
    user: T,
    guildId: x,
    channelId: A,
    messageId: O,
    roleId: L,
    friendToken: D,
    autoFocusNote: b,
    initialSection: B = P.UserProfileSections.USER_INFO,
    transitionState: G,
    sourceAnalyticsLocations: k = [],
    onClose: w
  } = e, Y = null !== (t = (0, a.useStateFromStores)([p.default], () => p.default.getUser(T.id))) && void 0 !== t ? t : T, H = (0, g.default)(null !== (l = Y.id) && void 0 !== l ? l : ""), {
    analyticsLocations: V
  } = (0, f.default)([...k, c.default.PROFILE_MODAL]), W = (0, v.useTrackUserProfileAction)({
    layout: "MODAL",
    userId: Y.id,
    showGuildProfile: !1,
    guildId: x,
    channelId: A,
    messageId: O,
    roleId: L
  });
  (0, u.useSubscribeGuildMembers)({
    [x]: [Y.id]
  });
  let z = (0, a.useStateFromStores)([I.default], () => null != I.default.getAnyStreamForUser(Y.id)),
    Z = (0, a.useStateFromStores)([_.default], () => _.default.findActivity(Y.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    [K, Q] = i.useState(!1),
    [J, q] = i.useState(!Y.isNonUserBot() || Y.isClyde() || (0, S.default)(Y.id) ? B : P.UserProfileSections.MUTUAL_GUILDS),
    X = (0, a.useStateFromStores)([m.default], () => m.default.getId() === Y.id),
    $ = null != Z || z,
    ee = !X || $,
    et = i.createRef(),
    el = (0, r.default)(et);
  !$ && J === P.UserProfileSections.ACTIVITY && q(P.UserProfileSections.USER_INFO);
  let es = i.useCallback(e => {
      W({
        action: "PRESS_SECTION",
        analyticsLocations: V
      }), Q(!0), q(e)
    }, [W, V]),
    ei = null == H ? void 0 : H.profileEffectId;
  return (0, s.jsx)(f.AnalyticsLocationProvider, {
    value: V,
    children: (0, s.jsx)(v.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: x,
      channelId: A,
      messageId: O,
      roleId: L,
      showGuildProfile: !1,
      children: (0, s.jsx)(o.default, {
        section: M.AnalyticsSections.PROFILE_MODAL,
        children: (0, s.jsxs)(n.ModalRoot, {
          transitionState: G,
          className: j.root,
          hideShadow: !0,
          "aria-label": y.default.Messages.USER_PROFILE_MODAL,
          children: [(0, s.jsxs)(N.default, {
            user: Y,
            displayProfile: H,
            profileType: P.UserProfileTypes.MODAL,
            ref: et,
            children: [(0, s.jsx)(R.default, {
              className: j.topSection,
              displayProfile: H,
              user: Y,
              friendToken: D,
              onClose: w,
              isStreaming: (0, d.default)(Z),
              guildId: x,
              channelId: A,
              hasProfileEffect: null != ei
            }), (0, s.jsxs)(N.default.Overlay, {
              className: j.overlay,
              children: [G === n.ModalTransitionState.ENTERED && (0, s.jsx)(C.default, {
                onTooltipClose: w
              }), (0, s.jsxs)("div", {
                className: j.body,
                children: [(0, s.jsx)(h.default, {
                  user: Y,
                  displayProfile: H
                }), ee ? (0, s.jsx)(F, {
                  user: Y,
                  section: J === P.UserProfileSections.USER_INFO_CONNECTIONS ? P.UserProfileSections.USER_INFO : J,
                  setSection: es,
                  hasActivity: $,
                  isCurrentUser: X
                }) : (0, s.jsx)("div", {
                  className: j.divider
                }), (0, s.jsx)(U.default, {
                  displayProfile: H,
                  user: Y,
                  autoFocusNote: b && !K,
                  selectedSection: J,
                  onClose: w
                })]
              })]
            })]
          }), null != ei && (0, s.jsx)(E.default, {
            profileEffectId: ei,
            bannerAdjustment: 0,
            isHovering: el
          })]
        })
      })
    })
  })
}