"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
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
  N = s("335191"),
  A = s("347949"),
  T = s("988246"),
  U = s("689938"),
  h = s("478741");

function p(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: p = !1,
    scrollToConnections: j = !1
  } = e, {
    trackUserProfileAction: g
  } = (0, E.useUserProfileAnalyticsContext)(), P = (0, n.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), {
    theme: R
  } = (0, _.useUserProfileThemeContext)(), C = (0, n.useStateFromStores)([S.default], () => S.default.locale), M = (0, d.useIsInUserClanExperiment)(), y = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), O = (0, I.default)(s.id), F = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (j) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView()
    }
  }, [j]), P) ? (0, l.jsx)(T.default, {}) : (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: h.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: h.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(v.default, {
          className: h.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(x.default, {
        userId: s.id,
        headingClassName: h.userInfoSectionHeader,
        textClassName: h.userInfoText
      }), M && (0, l.jsx)("div", {
        className: h.clans,
        children: (0, l.jsx)("div", {
          className: h.userInfoText,
          children: (0, l.jsx)(c.UserProfileClanContainer, {
            userId: s.id
          })
        })
      }), y && (0, l.jsx)(A.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: r()(h.userInfoText, h.recentGames)
      }), (0, l.jsx)(o.Heading, {
        variant: "eyebrow",
        className: h.userInfoSectionHeader,
        children: U.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: p,
        className: h.note,
        onUpdate: () => g({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(N.ConnectedUserAccounts, {
      ref: F,
      connectedAccounts: O,
      theme: R,
      locale: C,
      className: h.userInfoSection,
      userId: s.id
    })]
  })
}