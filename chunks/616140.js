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
  I = l("726059"),
  m = l("162267"),
  _ = l("100849"),
  v = l("944546"),
  T = l("470900"),
  g = l("988246"),
  A = l("834534"),
  p = l("228168"),
  U = l("981631"),
  x = l("689938"),
  C = l("773386");
let N = e => {
  var t, l;
  let {
    user: s,
    currentUser: a
  } = e, r = (0, n.useStateFromStores)([u.default], () => u.default.getAnyStreamForUser(s.id)), o = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(s.id, e => {
    let {
      type: t
    } = e;
    return t !== U.ActivityTypes.CUSTOM_STATUS
  })), c = null === (t = (0, I.default)(s.id, s.id !== (null == a ? void 0 : a.id)).mutualFriends) || void 0 === t ? void 0 : t.length, f = null === (l = (0, m.default)(s.id, s.id !== (null == a ? void 0 : a.id)).mutualGuilds) || void 0 === l ? void 0 : l.length, S = [{
    section: p.UserProfileSections.USER_INFO,
    text: x.default.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != r || null != o) && S.push({
    section: p.UserProfileSections.ACTIVITY,
    text: x.default.Messages.USER_PROFILE_ACTIVITY
  }), s.id !== (null == a ? void 0 : a.id) && (S.push({
    section: p.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, i.match)(c).with(void 0, () => x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => x.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => x.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), S.push({
    section: p.UserProfileSections.MUTUAL_GUILDS,
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
  return t === p.UserProfileSections.ACTIVITY ? (0, s.jsx)(_.default, {
    user: l,
    type: S.Types.SIMPLIFIED_PROFILE
  }) : t === p.UserProfileSections.MUTUAL_FRIENDS ? (0, s.jsx)(v.default, {
    user: l,
    onClose: r
  }) : t === p.UserProfileSections.MUTUAL_GUILDS ? (0, s.jsx)(T.default, {
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
    initialSection: d = p.UserProfileSections.USER_INFO,
    autoFocusNote: S,
    onClose: I
  } = e, {
    trackUserProfileAction: m
  } = (0, E.useUserProfileAnalyticsContext)(), _ = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()), v = (0, n.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), T = N({
    user: i,
    currentUser: _
  }), [A, U] = a.useState(S), [x, R] = a.useState(null !== (l = null === (t = T.find(e => {
    let {
      section: t
    } = e;
    return t === d
  })) || void 0 === t ? void 0 : t.section) && void 0 !== l ? l : p.UserProfileSections.USER_INFO), P = a.useCallback(e => {
    m({
      action: "PRESS_SECTION",
      section: e
    }), R(e), U(!1)
  }, [m, R]);
  return null == _ ? null : v ? (0, s.jsx)("div", {
    className: C.container,
    children: (0, s.jsx)(g.default, {})
  }) : (0, s.jsxs)("div", {
    className: C.container,
    children: [(0, s.jsx)(r.TabBar, {
      className: C.tabBar,
      type: "top",
      selectedItem: x,
      onItemSelect: P,
      children: T.map(e => {
        let {
          section: t,
          text: l
        } = e;
        return (0, s.jsx)(r.TabBar.Item, {
          className: C.tabBarItem,
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
      onClose: I
    })]
  })
}