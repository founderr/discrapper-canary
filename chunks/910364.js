"use strict";
l.r(t), l.d(t, {
  default: function() {
    return L
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
  v = l("594174"),
  p = l("785717"),
  T = l("221292"),
  g = l("621853"),
  x = l("318661"),
  A = l("726059"),
  N = l("162267"),
  C = l("484404"),
  U = l("502762"),
  R = l("62154"),
  h = l("293259"),
  P = l("725954"),
  M = l("228168"),
  y = l("981631"),
  j = l("689938"),
  F = l("463469");

function O(e) {
  var t, l;
  let {
    user: i,
    isCurrentUser: o,
    section: r,
    setSection: u,
    hasActivity: d
  } = e, c = (0, a.useStateFromStores)([g.default], () => {
    var e, t;
    return (null === (t = g.default.getUserProfile(i.id)) || void 0 === t ? void 0 : null === (e = t.application) || void 0 === e ? void 0 : e.id) != null
  }), f = null === (t = (0, A.default)(i.id, !i.bot && !o).mutualFriends) || void 0 === t ? void 0 : t.length, E = null === (l = (0, N.default)(i.id, !i.bot && !o).mutualGuilds) || void 0 === l ? void 0 : l.length;
  return (0, s.jsx)("div", {
    className: F.tabBarContainer,
    children: (0, s.jsxs)(n.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: u,
      className: F.tabBar,
      children: [!i.isNonUserBot() || i.isClyde() || (0, S.default)(i.id) ? (0, s.jsx)(n.TabBar.Item, {
        className: F.tabBarItem,
        id: M.UserProfileSections.USER_INFO,
        children: j.default.Messages.USER_INFO
      }) : null, !i.bot && d ? (0, s.jsx)(n.TabBar.Item, {
        className: F.tabBarItem,
        id: M.UserProfileSections.ACTIVITY,
        children: j.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, i.bot || o ? null : (0, s.jsx)(n.TabBar.Item, {
        className: F.tabBarItem,
        id: M.UserProfileSections.MUTUAL_FRIENDS,
        children: null == f ? j.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : j.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(f)
        })
      }), o || i.isClyde() || (0, S.default)(i.id) ? null : (0, s.jsx)(n.TabBar.Item, {
        className: F.tabBarItem,
        id: M.UserProfileSections.MUTUAL_GUILDS,
        children: null == E ? j.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : j.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(E)
        })
      }), i.bot && c ? (0, s.jsx)(n.TabBar.Item, {
        className: F.tabBarItem,
        id: M.UserProfileSections.BOT_DATA_ACCESS,
        children: j.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function L(e) {
  var t, l;
  let {
    user: g,
    guildId: A,
    channelId: N,
    messageId: L,
    roleId: D,
    friendToken: b,
    autoFocusNote: B,
    initialSection: G = M.UserProfileSections.USER_INFO,
    transitionState: k,
    sourceAnalyticsLocations: w = [],
    onClose: Y
  } = e, H = null !== (t = (0, a.useStateFromStores)([v.default], () => v.default.getUser(g.id))) && void 0 !== t ? t : g, V = (0, x.default)(null !== (l = H.id) && void 0 !== l ? l : ""), {
    analyticsLocations: W
  } = (0, f.default)([...w, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [A]: [H.id]
  });
  let z = (0, a.useStateFromStores)([I.default], () => null != I.default.getAnyStreamForUser(H.id)),
    Z = (0, a.useStateFromStores)([_.default], () => _.default.findActivity(H.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    [K, Q] = i.useState(!1),
    [J, q] = i.useState(!H.isNonUserBot() || H.isClyde() || (0, S.default)(H.id) ? G : M.UserProfileSections.MUTUAL_GUILDS),
    X = (0, a.useStateFromStores)([m.default], () => m.default.getId() === H.id),
    $ = null != Z || z,
    ee = !X || $,
    et = i.createRef(),
    el = (0, r.default)(et);
  !$ && J === M.UserProfileSections.ACTIVITY && q(M.UserProfileSections.USER_INFO);
  let es = i.useCallback(e => {
      (0, T.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: H.id,
        guildId: A,
        channelId: N,
        messageId: L,
        roleId: D,
        analyticsLocations: W
      }), Q(!0), q(e)
    }, [H.id, A, N, L, D, W]),
    ei = null == V ? void 0 : V.profileEffectId;
  return (0, s.jsx)(f.AnalyticsLocationProvider, {
    value: W,
    children: (0, s.jsx)(p.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: H.id,
      guildId: A,
      channelId: N,
      messageId: L,
      roleId: D,
      children: (0, s.jsx)(o.default, {
        section: y.AnalyticsSections.PROFILE_MODAL,
        children: (0, s.jsxs)(n.ModalRoot, {
          transitionState: k,
          className: F.root,
          hideShadow: !0,
          "aria-label": j.default.Messages.USER_PROFILE_MODAL,
          children: [(0, s.jsxs)(U.default, {
            user: H,
            displayProfile: V,
            profileType: M.UserProfileTypes.MODAL,
            ref: et,
            children: [(0, s.jsx)(h.default, {
              className: F.topSection,
              displayProfile: V,
              user: H,
              friendToken: b,
              onClose: Y,
              isStreaming: (0, d.default)(Z),
              guildId: A,
              channelId: N,
              hasProfileEffect: null != ei
            }), (0, s.jsxs)(U.default.Overlay, {
              className: F.overlay,
              children: [k === n.ModalTransitionState.ENTERED && (0, s.jsx)(C.default, {
                onTooltipClose: Y
              }), (0, s.jsxs)("div", {
                className: F.body,
                children: [(0, s.jsx)(P.default, {
                  user: H,
                  displayProfile: V
                }), ee ? (0, s.jsx)(O, {
                  user: H,
                  section: J === M.UserProfileSections.USER_INFO_CONNECTIONS ? M.UserProfileSections.USER_INFO : J,
                  setSection: es,
                  hasActivity: $,
                  isCurrentUser: X
                }) : (0, s.jsx)("div", {
                  className: F.divider
                }), (0, s.jsx)(R.default, {
                  displayProfile: V,
                  user: H,
                  autoFocusNote: B && !K,
                  selectedSection: J,
                  onClose: Y
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