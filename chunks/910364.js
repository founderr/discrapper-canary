"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  i = l("442837"),
  n = l("481060"),
  r = l("410575"),
  o = l("727637"),
  u = l("58540"),
  d = l("420660"),
  c = l("100527"),
  f = l("906732"),
  S = l("680295"),
  E = l("199902"),
  m = l("314897"),
  I = l("158776"),
  _ = l("594174"),
  v = l("785717"),
  g = l("221292"),
  T = l("621853"),
  A = l("318661"),
  U = l("726059"),
  p = l("162267"),
  x = l("484404"),
  N = l("502762"),
  C = l("62154"),
  h = l("293259"),
  R = l("725954"),
  P = l("228168"),
  M = l("981631"),
  j = l("689938"),
  y = l("463469");

function L(e) {
  var t, l;
  let {
    user: a,
    isCurrentUser: r,
    section: o,
    setSection: u,
    hasActivity: d
  } = e, c = (0, i.useStateFromStores)([T.default], () => {
    var e, t;
    return (null === (t = T.default.getUserProfile(a.id)) || void 0 === t ? void 0 : null === (e = t.application) || void 0 === e ? void 0 : e.id) != null
  }), f = null === (t = (0, U.default)(a.id, !a.bot && !r).mutualFriends) || void 0 === t ? void 0 : t.length, S = null === (l = (0, p.default)(a.id, !a.bot && !r).mutualGuilds) || void 0 === l ? void 0 : l.length;
  return (0, s.jsx)("div", {
    className: y.tabBarContainer,
    children: (0, s.jsxs)(n.TabBar, {
      selectedItem: o,
      type: "top",
      onItemSelect: u,
      className: y.tabBar,
      children: [!a.isNonUserBot() || a.isClyde() ? (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.USER_INFO,
        children: j.default.Messages.USER_INFO
      }) : null, !a.bot && d ? (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: j.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, a.bot || r ? null : (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: null == f ? j.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : j.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(f)
        })
      }), r || a.isClyde() ? null : (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: null == S ? j.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : j.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(S)
        })
      }), a.bot && c ? (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.BOT_DATA_ACCESS,
        children: j.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function O(e) {
  var t, l;
  let {
    user: T,
    guildId: U,
    channelId: p,
    messageId: O,
    roleId: F,
    friendToken: D,
    autoFocusNote: b,
    initialSection: B = P.UserProfileSections.USER_INFO,
    transitionState: G,
    sourceAnalyticsLocations: k = [],
    onClose: w
  } = e, Y = null !== (t = (0, i.useStateFromStores)([_.default], () => _.default.getUser(T.id))) && void 0 !== t ? t : T, H = (0, A.default)(null !== (l = Y.id) && void 0 !== l ? l : ""), {
    analyticsLocations: V
  } = (0, f.default)([...k, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [U]: [Y.id]
  });
  let z = (0, i.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(Y.id)),
    W = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    [Z, K] = a.useState(!1),
    [Q, J] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? P.UserProfileSections.MUTUAL_GUILDS : B),
    q = (0, i.useStateFromStores)([m.default], () => m.default.getId() === Y.id),
    X = null != W || z,
    $ = !q || X,
    ee = a.createRef(),
    et = (0, o.default)(ee);
  !X && Q === P.UserProfileSections.ACTIVITY && J(P.UserProfileSections.USER_INFO);
  let el = a.useCallback(e => {
      (0, g.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: U,
        channelId: p,
        messageId: O,
        roleId: F,
        analyticsLocations: V
      }), K(!0), J(e)
    }, [Y.id, U, p, O, F, V]),
    es = null == H ? void 0 : H.profileEffectId;
  return (0, s.jsx)(f.AnalyticsLocationProvider, {
    value: V,
    children: (0, s.jsx)(v.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: U,
      channelId: p,
      messageId: O,
      roleId: F,
      children: (0, s.jsx)(r.default, {
        section: M.AnalyticsSections.PROFILE_MODAL,
        children: (0, s.jsxs)(n.ModalRoot, {
          transitionState: G,
          className: y.root,
          hideShadow: !0,
          "aria-label": j.default.Messages.USER_PROFILE_MODAL,
          children: [(0, s.jsxs)(N.default, {
            user: Y,
            displayProfile: H,
            profileType: P.UserProfileTypes.MODAL,
            ref: ee,
            children: [(0, s.jsx)(h.default, {
              className: y.topSection,
              displayProfile: H,
              user: Y,
              friendToken: D,
              onClose: w,
              isStreaming: (0, d.default)(W),
              guildId: U,
              channelId: p,
              hasProfileEffect: null != es
            }), (0, s.jsxs)(N.default.Overlay, {
              className: y.overlay,
              children: [G === n.ModalTransitionState.ENTERED && (0, s.jsx)(x.default, {
                onTooltipClose: w
              }), (0, s.jsxs)("div", {
                className: y.body,
                children: [(0, s.jsx)(R.default, {
                  user: Y,
                  displayProfile: H
                }), $ ? (0, s.jsx)(L, {
                  user: Y,
                  section: Q === P.UserProfileSections.USER_INFO_CONNECTIONS ? P.UserProfileSections.USER_INFO : Q,
                  setSection: el,
                  hasActivity: X,
                  isCurrentUser: q
                }) : (0, s.jsx)("div", {
                  className: y.divider
                }), (0, s.jsx)(C.default, {
                  displayProfile: H,
                  user: Y,
                  autoFocusNote: b && !Z,
                  selectedSection: Q,
                  onClose: w
                })]
              })]
            })]
          }), null != es && (0, s.jsx)(S.default, {
            profileEffectId: es,
            bannerAdjustment: 0,
            isHovering: et
          })]
        })
      })
    })
  })
}