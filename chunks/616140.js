"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("278074"),
  o = s("442837"),
  r = s("706898"),
  n = s("481060"),
  u = s("314897"),
  d = s("785717"),
  c = s("621853"),
  f = s("620648"),
  S = s("944546"),
  E = s("470900"),
  m = s("228168"),
  I = s("689938"),
  v = s("708432");
let _ = e => {
  let [t, s] = (0, o.useStateFromStoresArray)([c.default], () => {
    var t, s, l, a;
    return [null !== (l = null === (t = c.default.getMutualFriends(e.id)) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0, null !== (a = null === (s = c.default.getMutualGuilds(e.id)) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0]
  });
  return [{
    section: m.UserProfileSections.USER_INFO,
    text: I.default.Messages.USER_PROFILE_ABOUT_ME
  }, {
    section: m.UserProfileSections.MUTUAL_FRIENDS,
    text: 0 === t ? I.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS : I.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: t
    })
  }, {
    section: m.UserProfileSections.MUTUAL_GUILDS,
    text: 0 === s ? I.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS : I.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: s
    })
  }]
};

function x(e) {
  var t, s;
  let {
    user: c,
    displayProfile: I,
    initialSection: x = m.UserProfileSections.USER_INFO,
    autoFocusNote: A,
    onClose: T
  } = e, N = (0, o.useStateFromStores)([u.default], () => u.default.getId() === c.id), {
    trackUserProfileAction: U
  } = (0, d.useUserProfileAnalyticsContext)(), p = _(c), [h, P] = a.useState(null !== (s = null === (t = p.find(e => {
    let {
      section: t
    } = e;
    return t === x
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : m.UserProfileSections.USER_INFO), j = a.useCallback(e => {
    U({
      action: "PRESS_SECTION",
      section: e
    }), P(e)
  }, [U, P]), y = (0, i.match)(h).with(m.UserProfileSections.MUTUAL_FRIENDS, () => (0, l.jsx)(S.default, {
    user: c,
    onClose: T
  })).with(m.UserProfileSections.MUTUAL_GUILDS, () => (0, l.jsx)(E.default, {
    user: c,
    onClose: T
  })).otherwise(() => (0, l.jsx)(f.default, {
    user: c,
    displayProfile: I,
    autoFocusNote: A
  }));
  return N ? y : (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: v.tabBar,
      type: "top",
      selectedItem: h,
      onItemSelect: j,
      children: p.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(r.TabBar.Item, {
          className: v.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(n.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), y]
  })
}