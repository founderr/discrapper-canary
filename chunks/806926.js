"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120"), s("653041"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("278074"),
  n = s("442837"),
  o = s("706898"),
  r = s("481060"),
  u = s("314897"),
  d = s("785717"),
  c = s("621853"),
  f = s("487922"),
  S = s("620648"),
  E = s("944546"),
  I = s("470900"),
  m = s("228168"),
  _ = s("689938"),
  T = s("727705");
let p = e => {
  var t;
  let [s, l, a] = (0, n.useStateFromStoresArray)([c.default], () => {
    var t, s, l, a;
    return [c.default.getUserProfile(e.id), null !== (l = null === (t = c.default.getMutualFriends(e.id)) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0, null !== (a = null === (s = c.default.getMutualGuilds(e.id)) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0]
  }), i = [];
  return (!e.isNonUserBot() || e.isClyde()) && i.push({
    section: m.UserProfileSections.USER_INFO,
    text: _.default.Messages.USER_PROFILE_ABOUT_ME
  }), !e.bot && i.push({
    section: m.UserProfileSections.MUTUAL_FRIENDS,
    text: 0 === l ? _.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS : _.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: l
    })
  }), !e.isClyde() && i.push({
    section: m.UserProfileSections.MUTUAL_GUILDS,
    text: 0 === a ? _.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS : _.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: a
    })
  }), e.bot && (null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) != null && i.push({
    section: m.UserProfileSections.BOT_DATA_ACCESS,
    text: _.default.Messages.BOTS_DATA_ACCESS_TAB
  }), i
};

function A(e) {
  var t, s, c;
  let {
    user: _,
    displayProfile: A,
    initialSection: N = m.UserProfileSections.USER_INFO,
    autoFocusNote: v,
    onClose: x
  } = e, U = (0, n.useStateFromStores)([u.default], () => u.default.getId() === _.id), {
    trackUserProfileAction: h
  } = (0, d.useUserProfileAnalyticsContext)(), C = p(_), [R, P] = a.useState(null !== (c = null === (t = C.find(e => {
    let {
      section: t
    } = e;
    return t === N
  })) || void 0 === t ? void 0 : t.section) && void 0 !== c ? c : null === (s = C[0]) || void 0 === s ? void 0 : s.section), M = a.useCallback(e => {
    h({
      action: "PRESS_SECTION",
      section: e
    }), P(e)
  }, [h, P]), g = (0, i.match)(R).with(m.UserProfileSections.MUTUAL_FRIENDS, () => (0, l.jsx)(E.default, {
    user: _,
    onClose: x
  })).with(m.UserProfileSections.MUTUAL_GUILDS, () => (0, l.jsx)(I.default, {
    user: _,
    onClose: x
  })).with(m.UserProfileSections.BOT_DATA_ACCESS, () => (0, l.jsx)(f.default, {
    user: _
  })).otherwise(() => (0, l.jsx)(S.default, {
    user: _,
    displayProfile: A,
    autoFocusNote: v
  }));
  return U || 0 === C.length ? g : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.TabBar, {
      className: T.tabBar,
      type: "top",
      selectedItem: R,
      onItemSelect: M,
      children: C.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(o.TabBar.Item, {
          className: T.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), g]
  })
}