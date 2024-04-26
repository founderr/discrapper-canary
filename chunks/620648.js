"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  r = s.n(i),
  n = s("442837"),
  o = s("481060"),
  u = s("666520"),
  d = s("963202"),
  c = s("369077"),
  f = s("761174"),
  S = s("706454"),
  m = s("246946"),
  E = s("785717"),
  I = s("648067"),
  v = s("588822"),
  x = s("81334"),
  _ = s("652853"),
  T = s("335191"),
  A = s("347949"),
  N = s("988246"),
  U = s("689938"),
  p = s("478741");

function h(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: h = !1,
    scrollToConnections: j = !1
  } = e, {
    trackUserProfileAction: g
  } = (0, E.useUserProfileAnalyticsContext)(), R = (0, n.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), {
    theme: P
  } = (0, _.useUserProfileThemeContext)(), C = (0, n.useStateFromStores)([S.default], () => S.default.locale), M = (0, d.useIsInUserClanExperiment)(), y = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), O = (0, I.default)(s.id), L = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (j) {
      var e;
      null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView()
    }
  }, [j]), R) ? (0, l.jsx)(N.default, {}) : (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: p.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: p.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: p.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(v.default, {
          className: p.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(x.default, {
        userId: s.id,
        headingClassName: p.userInfoSectionHeader,
        textClassName: p.userInfoText
      }), M && (0, l.jsx)("div", {
        className: p.clans,
        children: (0, l.jsx)("div", {
          className: p.userInfoText,
          children: (0, l.jsx)(c.UserProfileClanContainer, {
            userId: s.id
          })
        })
      }), y && (0, l.jsx)(A.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: r()(p.userInfoText, p.recentGames)
      }), (0, l.jsx)(o.Heading, {
        variant: "eyebrow",
        className: p.userInfoSectionHeader,
        children: U.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: h,
        className: p.note,
        onUpdate: () => g({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(T.ConnectedUserAccounts, {
      ref: L,
      connectedAccounts: O,
      theme: P,
      locale: C,
      className: p.userInfoSection,
      userId: s.id
    })]
  })
}