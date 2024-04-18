"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120"), s("653041"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("278074"),
  o = s("442837"),
  r = s("706898"),
  n = s("481060"),
  u = s("314897"),
  d = s("785717"),
  c = s("621853"),
  f = s("487922"),
  S = s("620648"),
  E = s("944546"),
  m = s("470900"),
  I = s("228168"),
  v = s("689938"),
  A = s("708432");
let _ = e => {
  var t;
  let [s, l, a] = (0, o.useStateFromStoresArray)([c.default], () => {
    var t, s, l, a;
    return [c.default.getUserProfile(e.id), null !== (l = null === (t = c.default.getMutualFriends(e.id)) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0, null !== (a = null === (s = c.default.getMutualGuilds(e.id)) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0]
  }), i = [];
  return (!e.isNonUserBot() || e.isClyde()) && i.push({
    section: I.UserProfileSections.USER_INFO,
    text: v.default.Messages.USER_PROFILE_ABOUT_ME
  }), !e.bot && i.push({
    section: I.UserProfileSections.MUTUAL_FRIENDS,
    text: 0 === l ? v.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS : v.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: l
    })
  }), !e.isClyde() && i.push({
    section: I.UserProfileSections.MUTUAL_GUILDS,
    text: 0 === a ? v.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS : v.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: a
    })
  }), e.bot && (null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) != null && i.push({
    section: I.UserProfileSections.BOT_DATA_ACCESS,
    text: v.default.Messages.BOTS_DATA_ACCESS_TAB
  }), i
};

function T(e) {
  var t, s, c;
  let {
    user: v,
    displayProfile: T,
    initialSection: x = I.UserProfileSections.USER_INFO,
    autoFocusNote: N,
    onClose: U
  } = e, p = (0, o.useStateFromStores)([u.default], () => u.default.getId() === v.id), {
    trackUserProfileAction: h
  } = (0, d.useUserProfileAnalyticsContext)(), C = _(v), [P, j] = a.useState(null !== (c = null === (t = C.find(e => {
    let {
      section: t
    } = e;
    return t === x
  })) || void 0 === t ? void 0 : t.section) && void 0 !== c ? c : null === (s = C[0]) || void 0 === s ? void 0 : s.section), y = a.useCallback(e => {
    h({
      action: "PRESS_SECTION",
      section: e
    }), j(e)
  }, [h, j]), M = (0, i.match)(P).with(I.UserProfileSections.MUTUAL_FRIENDS, () => (0, l.jsx)(E.default, {
    user: v,
    onClose: U
  })).with(I.UserProfileSections.MUTUAL_GUILDS, () => (0, l.jsx)(m.default, {
    user: v,
    onClose: U
  })).with(I.UserProfileSections.BOT_DATA_ACCESS, () => (0, l.jsx)(f.default, {
    user: v
  })).otherwise(() => (0, l.jsx)(S.default, {
    user: v,
    displayProfile: T,
    autoFocusNote: N
  }));
  return p || 0 === C.length ? M : (0, l.jsxs)("div", {
    className: A.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: A.tabBar,
      type: "top",
      selectedItem: P,
      onItemSelect: y,
      children: C.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(r.TabBar.Item, {
          className: A.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(n.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), M]
  })
}