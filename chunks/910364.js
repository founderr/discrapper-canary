i.d(n, {
  Z: function() {
    return P
  }
}), i(47120);
var l = i(735250),
  s = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(410575),
  r = i(727637),
  d = i(58540),
  u = i(420660),
  c = i(100527),
  I = i(906732),
  E = i(580552),
  f = i(680295),
  Z = i(199902),
  _ = i(314897),
  S = i(158776),
  m = i(594174),
  v = i(785717),
  N = i(621853),
  x = i(318661),
  h = i(726059),
  g = i(162267),
  C = i(502762),
  T = i(62154),
  R = i(293259),
  A = i(725954),
  M = i(228168),
  j = i(981631),
  p = i(689938),
  U = i(307509);

function O(e) {
  var n, i;
  let {
    user: s,
    isCurrentUser: a,
    section: r,
    setSection: d,
    hasActivity: u
  } = e, c = (0, t.e7)([N.Z], () => {
    var e, n;
    return (null === (n = N.Z.getUserProfile(s.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null
  }), I = null === (n = (0, h.Z)(s.id, !s.bot && !a).mutualFriends) || void 0 === n ? void 0 : n.length, f = null === (i = (0, g.Z)(s.id, !s.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
  return (0, l.jsx)("div", {
    className: U.tabBarContainer,
    children: (0, l.jsxs)(o.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: d,
      className: U.tabBar,
      children: [!s.isNonUserBot() || s.isClyde() || (0, E.Z)(s.id) ? (0, l.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.USER_INFO,
        children: p.Z.Messages.USER_INFO
      }) : null, !s.bot && u ? (0, l.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.ACTIVITY,
        children: p.Z.Messages.USER_PROFILE_ACTIVITY
      }) : null, s.bot || a ? null : (0, l.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.MUTUAL_FRIENDS,
        children: null == I ? p.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : p.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(I)
        })
      }), a || s.isClyde() || (0, E.Z)(s.id) ? null : (0, l.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.MUTUAL_GUILDS,
        children: null == f ? p.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : p.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(f)
        })
      }), s.bot && c ? (0, l.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.BOT_DATA_ACCESS,
        children: p.Z.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function P(e) {
  var n, i;
  let {
    user: N,
    guildId: h,
    channelId: g,
    messageId: P,
    roleId: L,
    friendToken: D,
    initialSection: y = M.oh.USER_INFO,
    initialSubsection: F,
    transitionState: b,
    sourceAnalyticsLocations: G = [],
    onClose: B
  } = e, k = null !== (n = (0, t.e7)([m.default], () => m.default.getUser(N.id))) && void 0 !== n ? n : N, w = (0, x.ZP)(null !== (i = k.id) && void 0 !== i ? i : ""), {
    analyticsLocations: Y
  } = (0, I.ZP)([...G, c.Z.PROFILE_MODAL]), V = (0, v.Q1)({
    layout: "MODAL",
    userId: k.id,
    showGuildProfile: !1,
    guildId: h,
    channelId: g,
    messageId: P,
    roleId: L
  });
  (0, d.$)({
    [h]: [k.id]
  });
  let W = (0, t.e7)([Z.Z], () => null != Z.Z.getAnyStreamForUser(k.id)),
    H = (0, t.e7)([S.Z], () => S.Z.findActivity(k.id, e => e.type !== j.IIU.CUSTOM_STATUS)),
    [z, K] = s.useState(!1),
    [Q, J] = s.useState(!k.isNonUserBot() || k.isClyde() || (0, E.Z)(k.id) ? y : M.oh.MUTUAL_GUILDS),
    X = (0, t.e7)([_.default], () => _.default.getId() === k.id),
    q = null != H || W,
    $ = !X || q,
    ee = s.createRef(),
    en = (0, r.Z)(ee);
  !q && Q === M.oh.ACTIVITY && J(M.oh.USER_INFO);
  let ei = s.useCallback(e => {
      V({
        action: "PRESS_SECTION",
        analyticsLocations: Y
      }), K(!0), J(e)
    }, [V, Y]),
    el = null == w ? void 0 : w.profileEffectId;
  return (0, l.jsx)(I.Gt, {
    value: Y,
    children: (0, l.jsx)(v.Mt, {
      layout: "MODAL",
      userId: k.id,
      guildId: h,
      channelId: g,
      messageId: P,
      roleId: L,
      showGuildProfile: !1,
      children: (0, l.jsx)(a.Z, {
        section: j.jXE.PROFILE_MODAL,
        children: (0, l.jsxs)(o.ModalRoot, {
          transitionState: b,
          className: U.root,
          hideShadow: !0,
          "aria-label": p.Z.Messages.USER_PROFILE_MODAL,
          children: [(0, l.jsxs)(C.Z, {
            user: k,
            displayProfile: w,
            profileType: M.y0.MODAL,
            ref: ee,
            children: [(0, l.jsx)(R.Z, {
              className: U.topSection,
              displayProfile: w,
              user: k,
              friendToken: D,
              onClose: B,
              isStreaming: (0, u.Z)(H),
              guildId: h,
              channelId: g,
              hasProfileEffect: null != el
            }), (0, l.jsx)(C.Z.Overlay, {
              className: U.overlay,
              children: (0, l.jsxs)("div", {
                className: U.body,
                children: [(0, l.jsx)(A.Z, {
                  user: k,
                  displayProfile: w
                }), $ ? (0, l.jsx)(O, {
                  user: k,
                  section: Q === M.oh.USER_INFO_CONNECTIONS ? M.oh.USER_INFO : Q,
                  setSection: ei,
                  hasActivity: q,
                  isCurrentUser: X
                }) : (0, l.jsx)("div", {
                  className: U.divider
                }), (0, l.jsx)(T.Z, {
                  displayProfile: w,
                  user: k,
                  autoFocusNote: F === M.Tb.NOTE && !z,
                  selectedSection: Q,
                  onClose: B
                })]
              })
            })]
          }), null != el && (0, l.jsx)(f.Z, {
            profileEffectId: el,
            bannerAdjustment: 0,
            isHovering: en
          })]
        })
      })
    })
  })
}