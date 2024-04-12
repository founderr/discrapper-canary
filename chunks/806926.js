"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120"), s("653041"), s("627341");
var a = s("735250"),
  l = s("470079"),
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
  m = s("470900"),
  I = s("228168"),
  T = s("689938"),
  p = s("727705");
let _ = e => {
  var t;
  let [s, a, l] = (0, n.useStateFromStoresArray)([c.default], () => {
    var t, s, a, l;
    return [c.default.getUserProfile(e.id), null !== (a = null === (t = c.default.getMutualFriends(e.id)) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0, null !== (l = null === (s = c.default.getMutualGuilds(e.id)) || void 0 === s ? void 0 : s.length) && void 0 !== l ? l : 0]
  }), i = [];
  return (!e.isNonUserBot() || e.isClyde()) && i.push({
    section: I.UserProfileSections.USER_INFO,
    text: T.default.Messages.USER_PROFILE_ABOUT_ME
  }), !e.bot && i.push({
    section: I.UserProfileSections.MUTUAL_FRIENDS,
    text: 0 === a ? T.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS : T.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: a
    })
  }), !e.isClyde() && i.push({
    section: I.UserProfileSections.MUTUAL_GUILDS,
    text: 0 === l ? T.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS : T.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: l
    })
  }), e.bot && (null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) != null && i.push({
    section: I.UserProfileSections.BOT_DATA_ACCESS,
    text: T.default.Messages.BOTS_DATA_ACCESS_TAB
  }), i
};

function N(e) {
  var t, s, c;
  let {
    user: T,
    displayProfile: N,
    initialSection: A = I.UserProfileSections.USER_INFO,
    autoFocusNote: x,
    onClose: v
  } = e, U = (0, n.useStateFromStores)([u.default], () => u.default.getId() === T.id), {
    trackUserProfileAction: h
  } = (0, d.useUserProfileAnalyticsContext)(), C = _(T), [R, P] = l.useState(null !== (c = null === (t = C.find(e => {
    let {
      section: t
    } = e;
    return t === A
  })) || void 0 === t ? void 0 : t.section) && void 0 !== c ? c : null === (s = C[0]) || void 0 === s ? void 0 : s.section), M = l.useCallback(e => {
    h({
      action: "PRESS_SECTION",
      section: e
    }), P(e)
  }, [h, P]), j = (0, i.match)(R).with(I.UserProfileSections.MUTUAL_FRIENDS, () => (0, a.jsx)(E.default, {
    user: T,
    onClose: v
  })).with(I.UserProfileSections.MUTUAL_GUILDS, () => (0, a.jsx)(m.default, {
    user: T,
    onClose: v
  })).with(I.UserProfileSections.BOT_DATA_ACCESS, () => (0, a.jsx)(f.default, {
    user: T
  })).otherwise(() => (0, a.jsx)(S.default, {
    user: T,
    displayProfile: N,
    autoFocusNote: x
  }));
  return U || 0 === C.length ? j : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.TabBar, {
      className: p.tabBar,
      type: "top",
      selectedItem: R,
      onItemSelect: M,
      children: C.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, a.jsx)(o.TabBar.Item, {
          className: p.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), j]
  })
}