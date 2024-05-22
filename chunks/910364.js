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
  E = s("199902"),
  m = s("314897"),
  I = s("158776"),
  _ = s("594174"),
  v = s("785717"),
  T = s("221292"),
  A = s("621853"),
  g = s("318661"),
  U = s("726059"),
  x = s("162267"),
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
  var t, s;
  let {
    user: a,
    isCurrentUser: r,
    section: o,
    setSection: u,
    hasActivity: d
  } = e, c = (0, i.useStateFromStores)([A.default], () => {
    var e, t;
    return (null === (t = A.default.getUserProfile(a.id)) || void 0 === t ? void 0 : null === (e = t.application) || void 0 === e ? void 0 : e.id) != null
  }), f = null === (t = (0, U.default)(a.id, !a.bot && !r).mutualFriends) || void 0 === t ? void 0 : t.length, S = null === (s = (0, x.default)(a.id, !a.bot && !r).mutualGuilds) || void 0 === s ? void 0 : s.length;
  return (0, l.jsx)("div", {
    className: L.tabBarContainer,
    children: (0, l.jsxs)(n.TabBar, {
      selectedItem: o,
      type: "top",
      onItemSelect: u,
      className: L.tabBar,
      children: [!a.isNonUserBot() || a.isClyde() ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.USER_INFO,
        children: j.default.Messages.USER_INFO
      }) : null, !a.bot && d ? (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.ACTIVITY,
        children: j.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, a.bot || r ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.MUTUAL_FRIENDS,
        children: null == f ? j.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : j.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: f
        })
      }), r || a.isClyde() ? null : (0, l.jsx)(n.TabBar.Item, {
        className: L.tabBarItem,
        id: P.UserProfileSections.MUTUAL_GUILDS,
        children: null == S ? j.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : j.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: S
        })
      }), a.bot && c ? (0, l.jsx)(n.TabBar.Item, {
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
    user: A,
    guildId: U,
    channelId: x,
    messageId: O,
    roleId: F,
    friendToken: D,
    autoFocusNote: b,
    initialSection: B = P.UserProfileSections.USER_INFO,
    transitionState: G,
    sourceAnalyticsLocations: k = [],
    onClose: w
  } = e, Y = null !== (t = (0, i.useStateFromStores)([_.default], () => _.default.getUser(A.id))) && void 0 !== t ? t : A, H = (0, g.default)(null !== (s = Y.id) && void 0 !== s ? s : ""), {
    analyticsLocations: V
  } = (0, f.default)([...k, c.default.PROFILE_MODAL]);
  (0, u.useSubscribeGuildMembers)({
    [U]: [Y.id]
  });
  let z = (0, i.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(Y.id)),
    W = (0, i.useStateFromStores)([I.default], () => I.default.findActivity(Y.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    [Z, K] = a.useState(!1),
    [J, Q] = a.useState(Y.isNonUserBot() && !Y.isClyde() ? P.UserProfileSections.MUTUAL_GUILDS : B),
    q = (0, i.useStateFromStores)([m.default], () => m.default.getId() === Y.id),
    X = null != W || z,
    $ = !q || X,
    ee = a.createRef(),
    et = (0, o.default)(ee);
  !X && J === P.UserProfileSections.ACTIVITY && Q(P.UserProfileSections.USER_INFO);
  let es = a.useCallback(e => {
      (0, T.trackUserProfileAction)({
        action: "PRESS_SECTION",
        layout: "MODAL",
        userId: Y.id,
        guildId: U,
        channelId: x,
        messageId: O,
        roleId: F,
        analyticsLocations: V
      }), K(!0), Q(e)
    }, [Y.id, U, x, O, F, V]),
    el = null == H ? void 0 : H.profileEffectId;
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: V,
    children: (0, l.jsx)(v.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: Y.id,
      guildId: U,
      channelId: x,
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
              guildId: U,
              channelId: x,
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