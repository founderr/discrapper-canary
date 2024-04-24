"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("278074"),
  r = s("442837"),
  n = s("706898"),
  o = s("481060"),
  u = s("246946"),
  d = s("594174"),
  c = s("785717"),
  f = s("621853"),
  S = s("944546"),
  m = s("470900"),
  E = s("988246"),
  I = s("834534"),
  v = s("228168"),
  x = s("689938"),
  _ = s("708432");
let A = e => {
  let [t, s] = (0, r.useStateFromStoresArray)([f.default], () => {
    var t, s, l, a;
    return [null !== (l = null === (t = f.default.getMutualFriends(e.id)) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0, null !== (a = null === (s = f.default.getMutualGuilds(e.id)) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0]
  });
  return [{
    section: v.UserProfileSections.USER_INFO,
    text: x.default.Messages.USER_PROFILE_ABOUT_ME
  }, {
    section: v.UserProfileSections.MUTUAL_FRIENDS,
    text: 0 === t ? x.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS : x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: t
    })
  }, {
    section: v.UserProfileSections.MUTUAL_GUILDS,
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
    initialSection: N = v.UserProfileSections.USER_INFO,
    autoFocusNote: T,
    onClose: U
  } = e, {
    trackUserProfileAction: h
  } = (0, c.useUserProfileAnalyticsContext)(), p = (0, r.useStateFromStores)([d.default], () => d.default.getCurrentUser()), j = (0, r.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), g = A(f), [R, P] = a.useState(T), [C, M] = a.useState(null !== (s = null === (t = g.find(e => {
    let {
      section: t
    } = e;
    return t === N
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : v.UserProfileSections.USER_INFO), y = a.useCallback(e => {
    h({
      action: "PRESS_SECTION",
      section: e
    }), M(e), P(!1)
  }, [h, M]);
  return null == p ? null : j ? (0, l.jsx)("div", {
    className: _.container,
    children: (0, l.jsx)(E.default, {})
  }) : f.id === p.id ? (0, l.jsx)("div", {
    className: _.container,
    children: (0, l.jsx)(I.default, {
      user: f,
      currentUser: p,
      displayProfile: x,
      autoFocusNote: R
    })
  }) : (0, l.jsxs)("div", {
    className: _.container,
    children: [(0, l.jsx)(n.TabBar, {
      className: _.tabBar,
      type: "top",
      selectedItem: C,
      onItemSelect: y,
      children: g.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(n.TabBar.Item, {
          className: _.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), (0, i.match)(C).with(v.UserProfileSections.MUTUAL_FRIENDS, () => (0, l.jsx)(S.default, {
      user: f,
      onClose: U
    })).with(v.UserProfileSections.MUTUAL_GUILDS, () => (0, l.jsx)(m.default, {
      user: f,
      onClose: U
    })).otherwise(() => (0, l.jsx)(I.default, {
      className: _.infoTab,
      user: f,
      currentUser: p,
      displayProfile: x,
      autoFocusNote: R
    }))]
  })
}