"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  v = s("988246"),
  E = s("834534"),
  I = s("228168"),
  x = s("689938"),
  _ = s("773386");
let A = e => {
  let [t, s] = (0, n.useStateFromStoresArray)([f.default], () => {
    var t, s, l, a;
    return [null !== (l = null === (t = f.default.getMutualFriends(e.id)) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0, null !== (a = null === (s = f.default.getMutualGuilds(e.id)) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0]
  });
  return [{
    section: I.UserProfileSections.USER_INFO,
    text: x.default.Messages.USER_PROFILE_ABOUT_ME
  }, {
    section: I.UserProfileSections.MUTUAL_FRIENDS,
    text: 0 === t ? x.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS : x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: t
    })
  }, {
    section: I.UserProfileSections.MUTUAL_GUILDS,
    text: 0 === s ? x.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS : x.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: s
    })
  }]
};

function N(e) {
  var t, s;
  let {
    user: f,
    displayProfile: x,
    initialSection: N = I.UserProfileSections.USER_INFO,
    autoFocusNote: T,
    onClose: U
  } = e, {
    trackUserProfileAction: C
  } = (0, c.useUserProfileAnalyticsContext)(), g = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), h = (0, n.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), p = A(f), [j, R] = a.useState(T), [M, P] = a.useState(null !== (s = null === (t = p.find(e => {
    let {
      section: t
    } = e;
    return t === N
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : I.UserProfileSections.USER_INFO), y = a.useCallback(e => {
    C({
      action: "PRESS_SECTION",
      section: e
    }), P(e), R(!1)
  }, [C, P]);
  return null == g ? null : h ? (0, l.jsx)("div", {
    className: _.container,
    children: (0, l.jsx)(v.default, {})
  }) : f.id === g.id ? (0, l.jsx)("div", {
    className: _.container,
    children: (0, l.jsx)(E.default, {
      user: f,
      currentUser: g,
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
    }), (0, i.match)(M).with(I.UserProfileSections.MUTUAL_FRIENDS, () => (0, l.jsx)(S.default, {
      user: f,
      onClose: U
    })).with(I.UserProfileSections.MUTUAL_GUILDS, () => (0, l.jsx)(m.default, {
      user: f,
      onClose: U
    })).otherwise(() => (0, l.jsx)(E.default, {
      className: _.infoTab,
      user: f,
      currentUser: g,
      displayProfile: x,
      autoFocusNote: j
    }))]
  })
}