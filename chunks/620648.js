"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("442837"),
  o = s("481060"),
  u = s("666520"),
  d = s("963202"),
  c = s("369077"),
  f = s("761174"),
  S = s("706454"),
  m = s("246946"),
  v = s("785717"),
  E = s("648067"),
  I = s("588822"),
  x = s("81334"),
  _ = s("652853"),
  A = s("335191"),
  N = s("347949"),
  T = s("988246"),
  U = s("689938"),
  C = s("921152");

function g(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: g = !1,
    scrollToConnections: h = !1
  } = e, {
    trackUserProfileAction: p
  } = (0, v.useUserProfileAnalyticsContext)(), j = (0, r.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), {
    theme: R
  } = (0, _.useUserProfileThemeContext)(), M = (0, r.useStateFromStores)([S.default], () => S.default.locale), P = (0, d.useIsInUserClanExperiment)(), y = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), O = (0, E.default)(s.id), L = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (h) {
      var e;
      null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView()
    }
  }, [h]), j) ? (0, l.jsx)(T.default, {}) : (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: C.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: C.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: C.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(I.default, {
          className: C.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(x.default, {
        userId: s.id,
        headingClassName: C.userInfoSectionHeader,
        textClassName: C.userInfoText
      }), P && (0, l.jsx)("div", {
        className: C.clans,
        children: (0, l.jsx)("div", {
          className: C.userInfoText,
          children: (0, l.jsx)(c.UserProfileClanContainer, {
            userId: s.id
          })
        })
      }), y && (0, l.jsx)(N.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: n()(C.userInfoText, C.recentGames)
      }), (0, l.jsx)(o.Heading, {
        variant: "eyebrow",
        className: C.userInfoSectionHeader,
        children: U.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: g,
        className: C.note,
        onUpdate: () => p({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(A.ConnectedUserAccounts, {
      ref: L,
      connectedAccounts: O,
      theme: R,
      locale: M,
      className: C.userInfoSection,
      userId: s.id
    })]
  })
}