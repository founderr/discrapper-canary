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
  I = l("680295"),
  E = l("199902"),
  m = l("314897"),
  v = l("158776"),
  _ = l("594174"),
  p = l("785717"),
  x = l("621853"),
  T = l("318661"),
  g = l("726059"),
  N = l("162267"),
  A = l("502762"),
  C = l("62154"),
  U = l("293259"),
  P = l("725954"),
  h = l("228168"),
  R = l("981631"),
  M = l("689938"),
  j = l("463469");

function y(e) {
  var t, l;
  let {
    user: i,
    isCurrentUser: o,
    section: r,
    setSection: u,
    hasActivity: d
  } = e, c = (0, a.useStateFromStores)([x.default], () => {
    var e, t;
    return (null === (t = x.default.getUserProfile(i.id)) || void 0 === t ? void 0 : null === (e = t.application) || void 0 === e ? void 0 : e.id) != null
  }), f = null === (t = (0, g.default)(i.id, !i.bot && !o).mutualFriends) || void 0 === t ? void 0 : t.length, I = null === (l = (0, N.default)(i.id, !i.bot && !o).mutualGuilds) || void 0 === l ? void 0 : l.length;
  return (0, s.jsx)("div", {
    className: j.tabBarContainer,
    children: (0, s.jsxs)(n.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: u,
      className: j.tabBar,
      children: [!i.isNonUserBot() || i.isClyde() || (0, S.default)(i.id) ? (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: h.UserProfileSections.USER_INFO,
        children: M.default.Messages.USER_INFO
      }) : null, !i.bot && d ? (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: h.UserProfileSections.ACTIVITY,
        children: M.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, i.bot || o ? null : (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: h.UserProfileSections.MUTUAL_FRIENDS,
        children: null == f ? M.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : M.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(f)
        })
      }), o || i.isClyde() || (0, S.default)(i.id) ? null : (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: h.UserProfileSections.MUTUAL_GUILDS,
        children: null == I ? M.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : M.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(I)
        })
      }), i.bot && c ? (0, s.jsx)(n.TabBar.Item, {
        className: j.tabBarItem,
        id: h.UserProfileSections.BOT_DATA_ACCESS,
        children: M.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function O(e) {
  var t, l;
  let {
    user: x,
    guildId: g,
    channelId: N,
    messageId: O,
    roleId: L,
    friendToken: F,
    initialSection: D = h.UserProfileSections.USER_INFO,
    initialSubsection: b,
    transitionState: B,
    sourceAnalyticsLocations: G = [],
    onClose: k
  } = e, w = null !== (t = (0, a.useStateFromStores)([_.default], () => _.default.getUser(x.id))) && void 0 !== t ? t : x, Y = (0, T.default)(null !== (l = w.id) && void 0 !== l ? l : ""), {
    analyticsLocations: V
  } = (0, f.default)([...G, c.default.PROFILE_MODAL]), H = (0, p.useTrackUserProfileAction)({
    layout: "MODAL",
    userId: w.id,
    showGuildProfile: !1,
    guildId: g,
    channelId: N,
    messageId: O,
    roleId: L
  });
  (0, u.useSubscribeGuildMembers)({
    [g]: [w.id]
  });
  let W = (0, a.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(w.id)),
    z = (0, a.useStateFromStores)([v.default], () => v.default.findActivity(w.id, e => e.type !== R.ActivityTypes.CUSTOM_STATUS)),
    [Z, Q] = i.useState(!1),
    [K, J] = i.useState(!w.isNonUserBot() || w.isClyde() || (0, S.default)(w.id) ? D : h.UserProfileSections.MUTUAL_GUILDS),
    q = (0, a.useStateFromStores)([m.default], () => m.default.getId() === w.id),
    X = null != z || W,
    $ = !q || X,
    ee = i.createRef(),
    et = (0, r.default)(ee);
  !X && K === h.UserProfileSections.ACTIVITY && J(h.UserProfileSections.USER_INFO);
  let el = i.useCallback(e => {
      H({
        action: "PRESS_SECTION",
        analyticsLocations: V
      }), Q(!0), J(e)
    }, [H, V]),
    es = null == Y ? void 0 : Y.profileEffectId;
  return (0, s.jsx)(f.AnalyticsLocationProvider, {
    value: V,
    children: (0, s.jsx)(p.UserProfileAnalyticsProvider, {
      layout: "MODAL",
      userId: w.id,
      guildId: g,
      channelId: N,
      messageId: O,
      roleId: L,
      showGuildProfile: !1,
      children: (0, s.jsx)(o.default, {
        section: R.AnalyticsSections.PROFILE_MODAL,
        children: (0, s.jsxs)(n.ModalRoot, {
          transitionState: B,
          className: j.root,
          hideShadow: !0,
          "aria-label": M.default.Messages.USER_PROFILE_MODAL,
          children: [(0, s.jsxs)(A.default, {
            user: w,
            displayProfile: Y,
            profileType: h.UserProfileTypes.MODAL,
            ref: ee,
            children: [(0, s.jsx)(U.default, {
              className: j.topSection,
              displayProfile: Y,
              user: w,
              friendToken: F,
              onClose: k,
              isStreaming: (0, d.default)(z),
              guildId: g,
              channelId: N,
              hasProfileEffect: null != es
            }), (0, s.jsx)(A.default.Overlay, {
              className: j.overlay,
              children: (0, s.jsxs)("div", {
                className: j.body,
                children: [(0, s.jsx)(P.default, {
                  user: w,
                  displayProfile: Y
                }), $ ? (0, s.jsx)(y, {
                  user: w,
                  section: K === h.UserProfileSections.USER_INFO_CONNECTIONS ? h.UserProfileSections.USER_INFO : K,
                  setSection: el,
                  hasActivity: X,
                  isCurrentUser: q
                }) : (0, s.jsx)("div", {
                  className: j.divider
                }), (0, s.jsx)(C.default, {
                  displayProfile: Y,
                  user: w,
                  autoFocusNote: b === h.UserProfileSubsections.NOTE && !Z,
                  selectedSection: K,
                  onClose: k
                })]
              })
            })]
          }), null != es && (0, s.jsx)(I.default, {
            profileEffectId: es,
            bannerAdjustment: 0,
            isHovering: et
          })]
        })
      })
    })
  })
}