i.d(n, {
  Z: function() {
    return M
  }
}), i(653041), i(627341), i(47120);
var l = i(735250),
  s = i(470079),
  t = i(278074),
  o = i(442837),
  a = i(706898),
  r = i(481060),
  d = i(199902),
  u = i(158776),
  c = i(246946),
  I = i(594174),
  E = i(543595),
  f = i(785717),
  Z = i(726059),
  _ = i(162267),
  S = i(100849),
  m = i(944546),
  v = i(470900),
  N = i(988246),
  x = i(834534),
  h = i(228168),
  g = i(981631),
  C = i(689938),
  T = i(784204);
let R = e => {
  var n, i;
  let {
    user: l,
    currentUser: s
  } = e, a = (0, o.e7)([d.Z], () => d.Z.getAnyStreamForUser(l.id)), r = (0, o.e7)([u.Z], () => u.Z.findActivity(l.id, e => {
    let {
      type: n
    } = e;
    return n !== g.IIU.CUSTOM_STATUS
  })), c = null === (n = (0, Z.Z)(l.id, l.id !== (null == s ? void 0 : s.id)).mutualFriends) || void 0 === n ? void 0 : n.length, I = null === (i = (0, _.Z)(l.id, l.id !== (null == s ? void 0 : s.id)).mutualGuilds) || void 0 === i ? void 0 : i.length, E = [{
    section: h.oh.USER_INFO,
    text: C.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != a || null != r) && E.push({
    section: h.oh.ACTIVITY,
    text: C.Z.Messages.USER_PROFILE_ACTIVITY
  }), l.id !== (null == s ? void 0 : s.id) && (E.push({
    section: h.oh.MUTUAL_FRIENDS,
    text: (0, t.EQ)(c).with(void 0, () => C.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => C.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => C.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), E.push({
    section: h.oh.MUTUAL_GUILDS,
    text: (0, t.EQ)(I).with(void 0, () => C.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => C.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => C.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), E
};

function A(e) {
  let {
    section: n,
    subsection: i,
    user: s,
    currentUser: t,
    displayProfile: o,
    onClose: a
  } = e;
  return n === h.oh.ACTIVITY ? (0, l.jsx)(S.Z, {
    showActions: (null == t ? void 0 : t.id) !== s.id,
    user: s,
    type: E.Y.SIMPLIFIED_PROFILE,
    onClose: a
  }) : n === h.oh.MUTUAL_FRIENDS ? (0, l.jsx)(m.Z, {
    user: s,
    onClose: a
  }) : n === h.oh.MUTUAL_GUILDS ? (0, l.jsx)(v.Z, {
    user: s,
    onClose: a
  }) : (0, l.jsx)(x.Z, {
    user: s,
    currentUser: t,
    displayProfile: o,
    subsection: i,
    onClose: a
  })
}

function M(e) {
  var n, i;
  let {
    user: t,
    displayProfile: d,
    initialSection: u = h.oh.USER_INFO,
    initialSubsection: E,
    onClose: Z
  } = e, {
    trackUserProfileAction: _
  } = (0, f.KZ)(), S = (0, o.e7)([I.default], () => I.default.getCurrentUser()), m = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation), v = R({
    user: t,
    currentUser: S
  }), [{
    section: x,
    subsection: g
  }, C] = s.useState({
    section: null !== (i = null === (n = v.find(e => {
      let {
        section: n
      } = e;
      return n === u
    })) || void 0 === n ? void 0 : n.section) && void 0 !== i ? i : h.oh.USER_INFO,
    subsection: E
  }), M = s.useCallback(e => {
    _({
      action: "PRESS_SECTION",
      section: e
    }), C({
      section: e,
      subsection: void 0
    })
  }, [_, C]);
  return null == S ? null : m ? (0, l.jsx)("div", {
    className: T.container,
    children: (0, l.jsx)(N.Z, {})
  }) : (0, l.jsxs)("div", {
    className: T.container,
    children: [(0, l.jsx)(a.n, {
      className: T.tabBar,
      type: "top",
      selectedItem: x,
      onItemSelect: M,
      children: v.map(e => {
        let {
          section: n,
          text: i
        } = e;
        return (0, l.jsx)(a.n.Item, {
          className: T.tabBarItem,
          id: n,
          "aria-label": i,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: i
          })
        }, n)
      })
    }), (0, l.jsx)(A, {
      section: x,
      subsection: g,
      user: t,
      currentUser: S,
      displayProfile: d,
      onClose: Z
    })]
  })
}