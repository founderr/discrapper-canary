i.d(n, {
  Z: function() {
    return L
  }
}), i(47120);
var t = i(735250),
  s = i(470079),
  o = i(442837),
  l = i(481060),
  a = i(410575),
  r = i(727637),
  d = i(58540),
  c = i(420660),
  u = i(100527),
  I = i(906732),
  f = i(580552),
  E = i(680295),
  _ = i(199902),
  S = i(314897),
  Z = i(158776),
  m = i(594174),
  v = i(785717),
  x = i(621853),
  h = i(318661),
  g = i(726059),
  N = i(162267),
  p = i(502762),
  T = i(62154),
  C = i(293259),
  R = i(725954),
  A = i(228168),
  M = i(981631),
  j = i(689938),
  U = i(307509);

function P(e) {
  var n, i;
  let {
    user: s,
    isCurrentUser: a,
    section: r,
    setSection: d,
    hasActivity: c
  } = e, u = (0, o.e7)([x.Z], () => {
    var e, n;
    return (null === (n = x.Z.getUserProfile(s.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null
  }), I = null === (n = (0, g.Z)(s.id, !s.bot && !a).mutualFriends) || void 0 === n ? void 0 : n.length, E = null === (i = (0, N.Z)(s.id, !s.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
  return (0, t.jsx)("div", {
    className: U.tabBarContainer,
    children: (0, t.jsxs)(l.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: d,
      className: U.tabBar,
      children: [!s.isNonUserBot() || s.isClyde() || (0, f.Z)(s.id) ? (0, t.jsx)(l.TabBar.Item, {
        className: U.tabBarItem,
        id: A.oh.USER_INFO,
        children: j.Z.Messages.USER_INFO
      }) : null, !s.bot && c ? (0, t.jsx)(l.TabBar.Item, {
        className: U.tabBarItem,
        id: A.oh.ACTIVITY,
        children: j.Z.Messages.USER_PROFILE_ACTIVITY
      }) : null, s.bot || a ? null : (0, t.jsx)(l.TabBar.Item, {
        className: U.tabBarItem,
        id: A.oh.MUTUAL_FRIENDS,
        children: null == I ? j.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : j.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(I)
        })
      }), a || s.isClyde() || (0, f.Z)(s.id) ? null : (0, t.jsx)(l.TabBar.Item, {
        className: U.tabBarItem,
        id: A.oh.MUTUAL_GUILDS,
        children: null == E ? j.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : j.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(E)
        })
      }), s.bot && u ? (0, t.jsx)(l.TabBar.Item, {
        className: U.tabBarItem,
        id: A.oh.BOT_DATA_ACCESS,
        children: j.Z.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function L(e) {
  var n, i;
  let {
    user: x,
    guildId: g,
    channelId: N,
    messageId: L,
    roleId: O,
    friendToken: y,
    initialSection: b = A.oh.USER_INFO,
    initialSubsection: D,
    transitionState: F,
    sourceAnalyticsLocations: B = [],
    onClose: G
  } = e, w = null !== (n = (0, o.e7)([m.default], () => m.default.getUser(x.id))) && void 0 !== n ? n : x, k = (0, h.ZP)(null !== (i = w.id) && void 0 !== i ? i : ""), {
    analyticsLocations: Y
  } = (0, I.ZP)([...B, u.Z.PROFILE_MODAL]), V = (0, v.Q1)({
    layout: "MODAL",
    userId: w.id,
    showGuildProfile: !1,
    guildId: g,
    channelId: N,
    messageId: L,
    roleId: O
  });
  (0, d.$)({
    [g]: [w.id]
  });
  let H = (0, o.e7)([_.Z], () => null != _.Z.getAnyStreamForUser(w.id)),
    W = (0, o.e7)([Z.Z], () => Z.Z.findActivity(w.id, e => e.type !== M.IIU.CUSTOM_STATUS)),
    [z, K] = s.useState(!1),
    [Q, q] = s.useState(!w.isNonUserBot() || w.isClyde() || (0, f.Z)(w.id) ? b : A.oh.MUTUAL_GUILDS),
    J = (0, o.e7)([S.default], () => S.default.getId() === w.id),
    X = null != W || H,
    $ = !J || X,
    ee = s.createRef(),
    en = (0, r.Z)(ee);
  !X && Q === A.oh.ACTIVITY && q(A.oh.USER_INFO);
  let ei = s.useCallback(e => {
      V({
        action: "PRESS_SECTION",
        analyticsLocations: Y
      }), K(!0), q(e)
    }, [V, Y]),
    et = null == k ? void 0 : k.profileEffectId;
  return (0, t.jsx)(I.Gt, {
    value: Y,
    children: (0, t.jsx)(v.Mt, {
      layout: "MODAL",
      userId: w.id,
      guildId: g,
      channelId: N,
      messageId: L,
      roleId: O,
      showGuildProfile: !1,
      children: (0, t.jsx)(a.Z, {
        section: M.jXE.PROFILE_MODAL,
        children: (0, t.jsxs)(l.ModalRoot, {
          transitionState: F,
          className: U.root,
          hideShadow: !0,
          "aria-label": j.Z.Messages.USER_PROFILE_MODAL,
          children: [(0, t.jsxs)(p.Z, {
            user: w,
            displayProfile: k,
            profileType: A.y0.MODAL,
            ref: ee,
            children: [(0, t.jsx)(C.Z, {
              className: U.topSection,
              displayProfile: k,
              user: w,
              friendToken: y,
              onClose: G,
              isStreaming: (0, c.Z)(W),
              guildId: g,
              channelId: N,
              hasProfileEffect: null != et
            }), (0, t.jsx)(p.Z.Overlay, {
              className: U.overlay,
              children: (0, t.jsxs)("div", {
                className: U.body,
                children: [(0, t.jsx)(R.Z, {
                  user: w,
                  displayProfile: k
                }), $ ? (0, t.jsx)(P, {
                  user: w,
                  section: Q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : Q,
                  setSection: ei,
                  hasActivity: X,
                  isCurrentUser: J
                }) : (0, t.jsx)("div", {
                  className: U.divider
                }), (0, t.jsx)(T.Z, {
                  displayProfile: k,
                  user: w,
                  autoFocusNote: D === A.Tb.NOTE && !z,
                  selectedSection: Q,
                  onClose: G
                })]
              })
            })]
          }), null != et && (0, t.jsx)(E.Z, {
            profileEffectId: et,
            bannerAdjustment: 0,
            isHovering: en
          })]
        })
      })
    })
  })
}