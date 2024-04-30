"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
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
let A = e => {
  let {
    user: t,
    currentUser: s
  } = e, [l, a] = (0, n.useStateFromStoresArray)([f.default], () => {
    var e, s;
    return [null === (e = f.default.getMutualFriends(t.id)) || void 0 === e ? void 0 : e.length, null === (s = f.default.getMutualGuilds(t.id)) || void 0 === s ? void 0 : s.length]
  });
  return t.id === (null == s ? void 0 : s.id) ? [{
    section: E.UserProfileSections.USER_INFO,
    text: x.default.Messages.USER_PROFILE_ABOUT_ME
  }] : [{
    section: E.UserProfileSections.USER_INFO,
    text: x.default.Messages.USER_PROFILE_ABOUT_ME
  }, {
    section: E.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, i.match)(l).with(void 0, () => x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => x.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }, {
    section: E.UserProfileSections.MUTUAL_GUILDS,
    text: (0, i.match)(a).with(void 0, () => x.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => x.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => x.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  }]
};

function U(e) {
  var t, s;
  let {
    user: f,
    displayProfile: x,
    initialSection: U = E.UserProfileSections.USER_INFO,
    autoFocusNote: T,
    onClose: N
  } = e, {
    trackUserProfileAction: C
  } = (0, c.useUserProfileAnalyticsContext)(), g = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), h = (0, n.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), p = A({
    user: f,
    currentUser: g
  }), [R, j] = a.useState(T), [P, M] = a.useState(null !== (s = null === (t = p.find(e => {
    let {
      section: t
    } = e;
    return t === U
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : E.UserProfileSections.USER_INFO), y = a.useCallback(e => {
    C({
      action: "PRESS_SECTION",
      section: e
    }), M(e), j(!1)
  }, [C, M]);
  return null == g ? null : h ? (0, l.jsx)("div", {
    className: _.container,
    children: (0, l.jsx)(I.default, {})
  }) : (0, l.jsxs)("div", {
    className: _.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: _.tabBar,
      type: "top",
      selectedItem: P,
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
    }), (0, i.match)(P).with(E.UserProfileSections.MUTUAL_FRIENDS, () => (0, l.jsx)(S.default, {
      user: f,
      onClose: N
    })).with(E.UserProfileSections.MUTUAL_GUILDS, () => (0, l.jsx)(m.default, {
      user: f,
      onClose: N
    })).otherwise(() => (0, l.jsx)(v.default, {
      className: _.infoTab,
      user: f,
      currentUser: g,
      displayProfile: x,
      autoFocusNote: R
    }))]
  })
}