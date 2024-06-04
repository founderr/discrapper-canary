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
  S = l("680295"),
  E = l("199902"),
  I = l("314897"),
  m = l("158776"),
  _ = l("594174"),
  v = l("785717"),
  p = l("221292"),
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
  j = l("689938"),
  y = l("463469");

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
  }), f = null === (t = (0, x.default)(i.id, !i.bot && !o).mutualFriends) || void 0 === t ? void 0 : t.length, S = null === (l = (0, A.default)(i.id, !i.bot && !o).mutualGuilds) || void 0 === l ? void 0 : l.length;
  return (0, s.jsx)("div", {
    className: y.tabBarContainer,
    children: (0, s.jsxs)(n.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: u,
      className: y.tabBar,
      children: [!i.isNonUserBot() || i.isClyde() ? (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.USER_INFO,
        children: j.default.Messages.USER_INFO
      }) : null, !i.bot && d ? (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: j.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, i.bot || o ? null : (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: null == f ? j.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : j.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(f)
        })
      }), o || i.isClyde() ? null : (0, s.jsx)(n.TabBar.Item, {
        className: y.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: null == S ? j.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : j.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(S)
        })
      }), i.bot && c ? (0, s.jsx)(n.TabBar.Item, {
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
  } = e, Y = null !== (t = (0, a.useStateFromStores)([_.default], () => _.default.getUser(T.id))) && void 0 !== t ? t : T, H = (0, g.default)(null !== (l = Y.id) && void 0 !== l ? l : ""), {
    analyticsLocations: V
  } = (0, f.default)([...k, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [x]: [Y.id]
  });
  let W = (0, a.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(Y.id)),
    z = (0, a.useStateFromStores)([m.default], () => m.default.findActivity(Y.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    [Z, K] = i.useState(!1),
    [Q, J] = i.useState(Y.isNonUserBot() && !Y.isClyde() ? P.UserProfileSections.MUTUAL_GUILDS : B),
    q = (0, a.useStateFromStores)([I.default], () => I.default.getId() === Y.id),
    X = null != z || W,
    $ = !q || X,
    ee = i.createRef(),
    et = (0, r.default)(ee);
  !X && Q === P.UserProfileSections.ACTIVITY && J(P.UserProfileSections.USER_INFO);
  let el = i.useCallback(e => {
      (0, p.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: x,
        channelId: A,
        messageId: O,
        roleId: L,
        analyticsLocations: V
      }), K(!0), J(e)
    }, [Y.id, x, A, O, L, V]),
    es = null == H ? void 0 : H.profileEffectId;
  return (0, s.jsx)(f.AnalyticsLocationProvider, {
    value: V,
    children: (0, s.jsx)(v.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: x,
      channelId: A,
      messageId: O,
      roleId: L,
      children: (0, s.jsx)(o.default, {
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
            children: [(0, s.jsx)(R.default, {
              className: y.topSection,
              displayProfile: H,
              user: Y,
              friendToken: D,
              onClose: w,
              isStreaming: (0, d.default)(z),
              guildId: x,
              channelId: A,
              hasProfileEffect: null != es
            }), (0, s.jsxs)(N.default.Overlay, {
              className: y.overlay,
              children: [G === n.ModalTransitionState.ENTERED && (0, s.jsx)(C.default, {
                onTooltipClose: w
              }), (0, s.jsxs)("div", {
                className: y.body,
                children: [(0, s.jsx)(h.default, {
                  user: Y,
                  displayProfile: H
                }), $ ? (0, s.jsx)(F, {
                  user: Y,
                  section: Q === P.UserProfileSections.USER_INFO_CONNECTIONS ? P.UserProfileSections.USER_INFO : Q,
                  setSection: el,
                  hasActivity: X,
                  isCurrentUser: q
                }) : (0, s.jsx)("div", {
                  className: y.divider
                }), (0, s.jsx)(U.default, {
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