"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("278074"),
  n = s("442837"),
  r = s("706898"),
  o = s("481060"),
  u = s("246946"),
  d = s("594174"),
  c = s("785717"),
  f = s("621853"),
  S = s("944546"),
  m = s("470900"),
  I = s("988246"),
  v = s("834534"),
  E = s("228168"),
  x = s("689938"),
  _ = s("788741");
let T = e => {
  let [t, s] = (0, n.useStateFromStoresArray)([f.default], () => {
    var t, s, l, a;
    return [null !== (l = null === (t = f.default.getMutualFriends(e.id)) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0, null !== (a = null === (s = f.default.getMutualGuilds(e.id)) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0]
  });
  return [{
    section: E.UserProfileSections.USER_INFO,
    text: x.default.Messages.USER_PROFILE_ABOUT_ME
  }, {
    section: E.UserProfileSections.MUTUAL_FRIENDS,
    text: 0 === t ? x.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS : x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: t
    })
  }, {
    section: E.UserProfileSections.MUTUAL_GUILDS,
    text: 0 === s ? x.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS : x.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: s
    })
  }]
};

function A(e) {
  var t, s;
  let {
    user: f,
    displayProfile: x,
    initialSection: A = E.UserProfileSections.USER_INFO,
    autoFocusNote: N,
    onClose: C
  } = e, {
    trackUserProfileAction: g
  } = (0, c.useUserProfileAnalyticsContext)(), U = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), h = (0, n.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), p = T(f), [j, R] = a.useState(N), [M, P] = a.useState(null !== (s = null === (t = p.find(e => {
    let {
      section: t
    } = e;
    return t === A
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : E.UserProfileSections.USER_INFO), y = a.useCallback(e => {
    g({
      action: "PRESS_SECTION",
      section: e
    }), P(e), R(!1)
  }, [g, P]);
  return null == U ? null : h ? (0, l.jsx)("div", {
    className: _.container,
    children: (0, l.jsx)(I.default, {})
  }) : f.id === U.id ? (0, l.jsx)("div", {
    className: _.container,
    children: (0, l.jsx)(v.default, {
      user: f,
      currentUser: U,
      displayProfile: x,
      autoFocusNote: j
    })
  }) : (0, l.jsxs)("div", {
    className: _.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: _.tabBar,
      type: "top",
      selectedItem: M,
      onItemSelect: y,
      children: p.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(r.TabBar.Item, {
          className: _.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), (0, i.match)(M).with(E.UserProfileSections.MUTUAL_FRIENDS, () => (0, l.jsx)(S.default, {
      user: f,
      onClose: C
    })).with(E.UserProfileSections.MUTUAL_GUILDS, () => (0, l.jsx)(m.default, {
      user: f,
      onClose: C
    })).otherwise(() => (0, l.jsx)(v.default, {
      className: _.infoTab,
      user: f,
      currentUser: U,
      displayProfile: x,
      autoFocusNote: j
    }))]
  })
}