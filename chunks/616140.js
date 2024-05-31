"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("653041"), l("627341"), l("47120");
var s = l("735250"),
  a = l("470079"),
  i = l("278074"),
  n = l("442837"),
  r = l("706898"),
  o = l("481060"),
  u = l("199902"),
  d = l("158776"),
  c = l("246946"),
  f = l("594174"),
  S = l("543595"),
  E = l("785717"),
  m = l("726059"),
  I = l("162267"),
  _ = l("100849"),
  v = l("944546"),
  g = l("470900"),
  T = l("988246"),
  A = l("834534"),
  U = l("228168"),
  p = l("981631"),
  x = l("689938"),
  N = l("773386");
let C = e => {
  var t, l;
  let {
    user: s,
    currentUser: a
  } = e, r = (0, n.useStateFromStores)([u.default], () => u.default.getAnyStreamForUser(s.id)), o = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(s.id, e => {
    let {
      type: t
    } = e;
    return t !== p.ActivityTypes.CUSTOM_STATUS
  })), c = null === (t = (0, m.default)(s.id, s.id !== (null == a ? void 0 : a.id)).mutualFriends) || void 0 === t ? void 0 : t.length, f = null === (l = (0, I.default)(s.id, s.id !== (null == a ? void 0 : a.id)).mutualGuilds) || void 0 === l ? void 0 : l.length, S = [{
    section: U.UserProfileSections.USER_INFO,
    text: x.default.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != r || null != o) && S.push({
    section: U.UserProfileSections.ACTIVITY,
    text: x.default.Messages.USER_PROFILE_ACTIVITY
  }), s.id !== (null == a ? void 0 : a.id) && (S.push({
    section: U.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, i.match)(c).with(void 0, () => x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => x.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), S.push({
    section: U.UserProfileSections.MUTUAL_GUILDS,
    text: (0, i.match)(f).with(void 0, () => x.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => x.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => x.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), S
};

function h(e) {
  let {
    section: t,
    user: l,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n,
    onClose: r
  } = e;
  return t === U.UserProfileSections.ACTIVITY ? (0, s.jsx)(_.default, {
    user: l,
    type: S.Types.SIMPLIFIED_PROFILE
  }) : t === U.UserProfileSections.MUTUAL_FRIENDS ? (0, s.jsx)(v.default, {
    user: l,
    onClose: r
  }) : t === U.UserProfileSections.MUTUAL_GUILDS ? (0, s.jsx)(g.default, {
    user: l,
    onClose: r
  }) : (0, s.jsx)(A.default, {
    user: l,
    currentUser: a,
    displayProfile: i,
    autoFocusNote: n
  })
}

function R(e) {
  var t, l;
  let {
    user: i,
    displayProfile: u,
    initialSection: d = U.UserProfileSections.USER_INFO,
    autoFocusNote: S,
    onClose: m
  } = e, {
    trackUserProfileAction: I
  } = (0, E.useUserProfileAnalyticsContext)(), _ = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()), v = (0, n.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), g = C({
    user: i,
    currentUser: _
  }), [A, p] = a.useState(S), [x, R] = a.useState(null !== (l = null === (t = g.find(e => {
    let {
      section: t
    } = e;
    return t === d
  })) || void 0 === t ? void 0 : t.section) && void 0 !== l ? l : U.UserProfileSections.USER_INFO), P = a.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), R(e), p(!1)
  }, [I, R]);
  return null == _ ? null : v ? (0, s.jsx)("div", {
    className: N.container,
    children: (0, s.jsx)(T.default, {})
  }) : (0, s.jsxs)("div", {
    className: N.container,
    children: [(0, s.jsx)(r.TabBar, {
      className: N.tabBar,
      type: "top",
      selectedItem: x,
      onItemSelect: P,
      children: g.map(e => {
        let {
          section: t,
          text: l
        } = e;
        return (0, s.jsx)(r.TabBar.Item, {
          className: N.tabBarItem,
          id: t,
          "aria-label": l,
          children: (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: l
          })
        }, t)
      })
    }), (0, s.jsx)(h, {
      section: x,
      user: i,
      currentUser: _,
      displayProfile: u,
      autoFocusNote: A,
      onClose: m
    })]
  })
}