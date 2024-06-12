"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("653041"), l("627341"), l("47120");
var s = l("735250"),
  i = l("470079"),
  a = l("278074"),
  n = l("442837"),
  o = l("706898"),
  r = l("481060"),
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
  p = l("470900"),
  T = l("988246"),
  g = l("834534"),
  A = l("228168"),
  x = l("981631"),
  C = l("689938"),
  N = l("773386");
let U = e => {
  var t, l;
  let {
    user: s,
    currentUser: i
  } = e, o = (0, n.useStateFromStores)([u.default], () => u.default.getAnyStreamForUser(s.id)), r = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(s.id, e => {
    let {
      type: t
    } = e;
    return t !== x.ActivityTypes.CUSTOM_STATUS
  })), c = null === (t = (0, I.default)(s.id, s.id !== (null == i ? void 0 : i.id)).mutualFriends) || void 0 === t ? void 0 : t.length, f = null === (l = (0, m.default)(s.id, s.id !== (null == i ? void 0 : i.id)).mutualGuilds) || void 0 === l ? void 0 : l.length, S = [{
    section: A.UserProfileSections.USER_INFO,
    text: C.default.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != o || null != r) && S.push({
    section: A.UserProfileSections.ACTIVITY,
    text: C.default.Messages.USER_PROFILE_ACTIVITY
  }), s.id !== (null == i ? void 0 : i.id) && (S.push({
    section: A.UserProfileSections.MUTUAL_FRIENDS,
    text: (0, a.match)(c).with(void 0, () => C.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => C.default.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => C.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), S.push({
    section: A.UserProfileSections.MUTUAL_GUILDS,
    text: (0, a.match)(f).with(void 0, () => C.default.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => C.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => C.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), S
};

function P(e) {
  let {
    section: t,
    subsection: l,
    user: i,
    currentUser: a,
    displayProfile: n,
    onClose: o
  } = e;
  return t === A.UserProfileSections.ACTIVITY ? (0, s.jsx)(_.default, {
    showActions: (null == a ? void 0 : a.id) !== i.id,
    user: i,
    type: S.Types.SIMPLIFIED_PROFILE
  }) : t === A.UserProfileSections.MUTUAL_FRIENDS ? (0, s.jsx)(v.default, {
    user: i,
    onClose: o
  }) : t === A.UserProfileSections.MUTUAL_GUILDS ? (0, s.jsx)(p.default, {
    user: i,
    onClose: o
  }) : (0, s.jsx)(g.default, {
    user: i,
    currentUser: a,
    displayProfile: n,
    subsection: l,
    onClose: o
  })
}

function h(e) {
  var t, l;
  let {
    user: a,
    displayProfile: u,
    initialSection: d = A.UserProfileSections.USER_INFO,
    initialSubsection: S,
    onClose: I
  } = e, {
    trackUserProfileAction: m
  } = (0, E.useUserProfileAnalyticsContext)(), _ = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()), v = (0, n.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), p = U({
    user: a,
    currentUser: _
  }), [{
    section: g,
    subsection: x
  }, C] = i.useState({
    section: null !== (l = null === (t = p.find(e => {
      let {
        section: t
      } = e;
      return t === d
    })) || void 0 === t ? void 0 : t.section) && void 0 !== l ? l : A.UserProfileSections.USER_INFO,
    subsection: S
  }), h = i.useCallback(e => {
    m({
      action: "PRESS_SECTION",
      section: e
    }), C({
      section: e,
      subsection: void 0
    })
  }, [m, C]);
  return null == _ ? null : v ? (0, s.jsx)("div", {
    className: N.container,
    children: (0, s.jsx)(T.default, {})
  }) : (0, s.jsxs)("div", {
    className: N.container,
    children: [(0, s.jsx)(o.TabBar, {
      className: N.tabBar,
      type: "top",
      selectedItem: g,
      onItemSelect: h,
      children: p.map(e => {
        let {
          section: t,
          text: l
        } = e;
        return (0, s.jsx)(o.TabBar.Item, {
          className: N.tabBarItem,
          id: t,
          "aria-label": l,
          children: (0, s.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: l
          })
        }, t)
      })
    }), (0, s.jsx)(P, {
      section: g,
      subsection: x,
      user: a,
      currentUser: _,
      displayProfile: u,
      onClose: I
    })]
  })
}