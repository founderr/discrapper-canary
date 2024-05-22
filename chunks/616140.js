"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("653041"), s("627341"), s("47120");
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
  E = s("785717"),
  m = s("726059"),
  I = s("162267"),
  _ = s("100849"),
  v = s("944546"),
  T = s("470900"),
  A = s("988246"),
  g = s("834534"),
  U = s("228168"),
  x = s("981631"),
  N = s("689938"),
  C = s("773386");
let p = e => {
  var t, s;
  let {
    user: l,
    currentUser: a
  } = e, r = (0, n.useStateFromStores)([u.default], () => u.default.getAnyStreamForUser(l.id)), o = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(l.id, e => {
    let {
      type: t
    } = e;
    return t !== x.ActivityTypes.CUSTOM_STATUS
  })), c = null === (t = (0, m.default)(l.id, l.id !== (null == a ? void 0 : a.id)).mutualFriends) || void 0 === t ? void 0 : t.length, f = null === (s = (0, I.default)(l.id, l.id !== (null == a ? void 0 : a.id)).mutualGuilds) || void 0 === s ? void 0 : s.length, S = [{
    section: U.UserProfileSections.USER_INFO,
    text: N.default.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != r || null != o) && S.push({
    section: U.UserProfileSections.ACTIVITY,
    text: N.default.Messages.USER_PROFILE_ACTIVITY
  }), l.id !== (null == a ? void 0 : a.id) && (S.push({
    section: U.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, i.match)(c).with(void 0, () => N.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => N.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => N.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), S.push({
    section: U.UserProfileSections.MUTUAL_GUILDS,
    text: (0, i.match)(f).with(void 0, () => N.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => N.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => N.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), S
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
  return t === U.UserProfileSections.ACTIVITY ? (0, l.jsx)(_.default, {
    user: s,
    type: S.Types.SIMPLIFIED_PROFILE
  }) : t === U.UserProfileSections.MUTUAL_FRIENDS ? (0, l.jsx)(v.default, {
    user: s,
    onClose: r
  }) : t === U.UserProfileSections.MUTUAL_GUILDS ? (0, l.jsx)(T.default, {
    user: s,
    onClose: r
  }) : (0, l.jsx)(g.default, {
    user: s,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n
  })
}

function R(e) {
  var t, s;
  let {
    user: i,
    displayProfile: u,
    initialSection: d = U.UserProfileSections.USER_INFO,
    autoFocusNote: S,
    onClose: m
  } = e, {
    trackUserProfileAction: I
  } = (0, E.useUserProfileAnalyticsContext)(), _ = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()), v = (0, n.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), T = p({
    user: i,
    currentUser: _
  }), [g, x] = a.useState(S), [N, R] = a.useState(null !== (s = null === (t = T.find(e => {
    let {
      section: t
    } = e;
    return t === d
  })) || void 0 === t ? void 0 : t.section) && void 0 !== s ? s : U.UserProfileSections.USER_INFO), P = a.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), R(e), x(!1)
  }, [I, R]);
  return null == _ ? null : v ? (0, l.jsx)("div", {
    className: C.container,
    children: (0, l.jsx)(A.default, {})
  }) : (0, l.jsxs)("div", {
    className: C.container,
    children: [(0, l.jsx)(r.TabBar, {
      className: C.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: P,
      children: T.map(e => {
        let {
          section: t,
          text: s
        } = e;
        return (0, l.jsx)(r.TabBar.Item, {
          className: C.tabBarItem,
          id: t,
          "aria-label": s,
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, t)
      })
    }), (0, l.jsx)(h, {
      section: N,
      user: i,
      currentUser: _,
      displayProfile: u,
      autoFocusNote: g,
      onClose: m
    })]
  })
}