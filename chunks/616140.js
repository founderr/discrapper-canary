"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("47120"), s("653041"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("278074"),
  n = s("442837"),
  r = s("706898"),
  o = s("481060"),
  u = s("199902"),
  d = s("158776"),
  c = s("246946"),
  f = s("594174"),
  S = s("543595"),
  m = s("785717"),
  E = s("621853"),
  I = s("100849"),
  v = s("944546"),
  _ = s("470900"),
  g = s("988246"),
  A = s("834534"),
  T = s("228168"),
  x = s("981631"),
  N = s("689938"),
  U = s("773386");
let C = e => {
  let {
    user: t,
    currentUser: s
  } = e, l = (0, n.useStateFromStores)([u.default], () => u.default.getAnyStreamForUser(t.id)), a = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== x.ActivityTypes.CUSTOM_STATUS
  })), [r, o] = (0, n.useStateFromStoresArray)([E.default], () => {
    var e, s;
    return [null === (e = E.default.getMutualFriends(t.id)) || void 0 === e ? void 0 : e.length, null === (s = E.default.getMutualGuilds(t.id)) || void 0 === s ? void 0 : s.length]
  }), c = [{
    section: T.UserProfileSections.USER_INFO,
    text: N.default.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != l || null != a) && c.push({
    section: T.UserProfileSections.ACTIVITY,
    text: N.default.Messages.USER_PROFILE_ACTIVITY
  }), t.id !== (null == s ? void 0 : s.id) && (c.push({
    section: T.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, i.match)(r).with(void 0, () => N.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => N.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => N.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), c.push({
    section: T.UserProfileSections.MUTUAL_GUILDS,
    text: (0, i.match)(o).with(void 0, () => N.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => N.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => N.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), c
};

function h(e) {
  let {
    section: t,
    user: s,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n,
    onClose: r
  } = e;
  return t === T.UserProfileSections.ACTIVITY ? (0, l.jsx)(I.default, {
    user: s,
    type: S.Types.SIMPLIFIED_PROFILE
  }) : t === T.UserProfileSections.MUTUAL_FRIENDS ? (0, l.jsx)(v.default, {
    user: s,
    onClose: r
  }) : t === T.UserProfileSections.MUTUAL_GUILDS ? (0, l.jsx)(_.default, {
    user: s,
    onClose: r
  }) : (0, l.jsx)(A.default, {
    className: U.infoTab,
    user: s,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n
  })
}

function p(e) {
  var t, s;
  let {
    user: i,
    displayProfile: u,
    initialSection: d = T.UserProfileSections.USER_INFO,
    autoFocusNote: S,
    onClose: E
  } = e, {
    trackUserProfileAction: I
  } = (0, m.useUserProfileAnalyticsContext)(), v = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()), _ = (0, n.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), A = C({
    user: i,
    currentUser: v
  }), [x, N] = a.useState(S), [p, R] = a.useState(null !== (s = null === (t = A.find(e => {
    let {
      section: t
    } = e;
    return t === d
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : T.UserProfileSections.USER_INFO), M = a.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), R(e), N(!1)
  }, [I, R]);
  return null == v ? null : _ ? (0, l.jsx)("div", {
    className: U.container,
    children: (0, l.jsx)(g.default, {})
  }) : (0, l.jsxs)("div", {
    className: U.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: U.tabBar,
      type: "top",
      selectedItem: p,
      onItemSelect: M,
      children: A.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(r.TabBar.Item, {
          className: U.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), (0, l.jsx)(h, {
      section: p,
      user: i,
      currentUser: v,
      displayProfile: u,
      autoFocusNote: x,
      onClose: E
    })]
  })
}