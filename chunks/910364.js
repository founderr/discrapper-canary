s.d(i, {
  Z: function() {
    return O
  }
}), s(47120);
var n = s(735250),
  l = s(470079),
  t = s(442837),
  o = s(481060),
  r = s(410575),
  a = s(727637),
  d = s(58540),
  c = s(420660),
  u = s(100527),
  I = s(906732),
  E = s(580552),
  Z = s(680295),
  f = s(199902),
  _ = s(314897),
  S = s(158776),
  v = s(594174),
  m = s(785717),
  x = s(621853),
  h = s(318661),
  N = s(726059),
  g = s(162267),
  T = s(502762),
  C = s(62154),
  R = s(293259),
  A = s(725954),
  M = s(228168),
  p = s(981631),
  j = s(689938),
  U = s(307509);

function L(e) {
  var i, s;
  let {
    user: l,
    isCurrentUser: r,
    section: a,
    setSection: d,
    hasActivity: c
  } = e, u = (0, t.e7)([x.Z], () => {
    var e, i;
    return (null === (i = x.Z.getUserProfile(l.id)) || void 0 === i ? void 0 : null === (e = i.application) || void 0 === e ? void 0 : e.id) != null
  }), I = null === (i = (0, N.Z)(l.id, !l.bot && !r).mutualFriends) || void 0 === i ? void 0 : i.length, Z = null === (s = (0, g.Z)(l.id, !l.bot && !r).mutualGuilds) || void 0 === s ? void 0 : s.length;
  return (0, n.jsx)("div", {
    className: U.tabBarContainer,
    children: (0, n.jsxs)(o.TabBar, {
      selectedItem: a,
      type: "top",
      onItemSelect: d,
      className: U.tabBar,
      children: [!l.isNonUserBot() || l.isClyde() || (0, E.Z)(l.id) ? (0, n.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.USER_INFO,
        children: j.Z.Messages.USER_INFO
      }) : null, !l.bot && c ? (0, n.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.ACTIVITY,
        children: j.Z.Messages.USER_PROFILE_ACTIVITY
      }) : null, l.bot || r ? null : (0, n.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.MUTUAL_FRIENDS,
        children: null == I ? j.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : j.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
          count: "".concat(I)
        })
      }), r || l.isClyde() || (0, E.Z)(l.id) ? null : (0, n.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.MUTUAL_GUILDS,
        children: null == Z ? j.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : j.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
          count: "".concat(Z)
        })
      }), l.bot && u ? (0, n.jsx)(o.TabBar.Item, {
        className: U.tabBarItem,
        id: M.oh.BOT_DATA_ACCESS,
        children: j.Z.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function O(e) {
  var i, s;
  let {
    user: x,
    guildId: N,
    channelId: g,
    messageId: O,
    roleId: P,
    friendToken: y,
    initialSection: D = M.oh.USER_INFO,
    initialSubsection: F,
    transitionState: b,
    sourceAnalyticsLocations: B = [],
    onClose: G
  } = e, k = null !== (i = (0, t.e7)([v.default], () => v.default.getUser(x.id))) && void 0 !== i ? i : x, w = (0, h.ZP)(null !== (s = k.id) && void 0 !== s ? s : ""), {
    analyticsLocations: Y
  } = (0, I.ZP)([...B, u.Z.PROFILE_MODAL]), V = (0, m.Q1)({
    layout: "MODAL",
    userId: k.id,
    showGuildProfile: !1,
    guildId: N,
    channelId: g,
    messageId: O,
    roleId: P
  });
  (0, d.$)({
    [N]: [k.id]
  });
  let W = (0, t.e7)([f.Z], () => null != f.Z.getAnyStreamForUser(k.id)),
    H = (0, t.e7)([S.Z], () => S.Z.findActivity(k.id, e => e.type !== p.IIU.CUSTOM_STATUS)),
    [z, K] = l.useState(!1),
    [Q, J] = l.useState(!k.isNonUserBot() || k.isClyde() || (0, E.Z)(k.id) ? D : M.oh.MUTUAL_GUILDS),
    q = (0, t.e7)([_.default], () => _.default.getId() === k.id),
    X = null != H || W,
    $ = !q || X,
    ee = l.createRef(),
    ei = (0, a.Z)(ee);
  !X && Q === M.oh.ACTIVITY && J(M.oh.USER_INFO);
  let es = l.useCallback(e => {
      V({
        action: "PRESS_SECTION",
        analyticsLocations: Y
      }), K(!0), J(e)
    }, [V, Y]),
    en = null == w ? void 0 : w.profileEffectId;
  return (0, n.jsx)(I.Gt, {
    value: Y,
    children: (0, n.jsx)(m.Mt, {
      layout: "MODAL",
      userId: k.id,
      guildId: N,
      channelId: g,
      messageId: O,
      roleId: P,
      showGuildProfile: !1,
      children: (0, n.jsx)(r.Z, {
        section: p.jXE.PROFILE_MODAL,
        children: (0, n.jsxs)(o.ModalRoot, {
          transitionState: b,
          className: U.root,
          hideShadow: !0,
          "aria-label": j.Z.Messages.USER_PROFILE_MODAL,
          children: [(0, n.jsxs)(T.Z, {
            user: k,
            displayProfile: w,
            profileType: M.y0.MODAL,
            ref: ee,
            children: [(0, n.jsx)(R.Z, {
              className: U.topSection,
              displayProfile: w,
              user: k,
              friendToken: y,
              onClose: G,
              isStreaming: (0, c.Z)(H),
              guildId: N,
              channelId: g,
              hasProfileEffect: null != en
            }), (0, n.jsx)(T.Z.Overlay, {
              className: U.overlay,
              children: (0, n.jsxs)("div", {
                className: U.body,
                children: [(0, n.jsx)(A.Z, {
                  user: k,
                  displayProfile: w
                }), $ ? (0, n.jsx)(L, {
                  user: k,
                  section: Q === M.oh.USER_INFO_CONNECTIONS ? M.oh.USER_INFO : Q,
                  setSection: es,
                  hasActivity: X,
                  isCurrentUser: q
                }) : (0, n.jsx)("div", {
                  className: U.divider
                }), (0, n.jsx)(C.Z, {
                  displayProfile: w,
                  user: k,
                  autoFocusNote: F === M.Tb.NOTE && !z,
                  selectedSection: Q,
                  onClose: G
                })]
              })
            })]
          }), null != en && (0, n.jsx)(Z.Z, {
            profileEffectId: en,
            bannerAdjustment: 0,
            isHovering: ei
          })]
        })
      })
    })
  })
}