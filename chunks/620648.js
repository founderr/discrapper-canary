"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("442837"),
  o = s("481060"),
  u = s("666520"),
  d = s("169559"),
  c = s("369077"),
  f = s("761174"),
  S = s("706454"),
  m = s("246946"),
  E = s("785717"),
  I = s("648067"),
  v = s("588822"),
  _ = s("81334"),
  g = s("652853"),
  A = s("335191"),
  T = s("347949"),
  x = s("988246"),
  N = s("689938"),
  U = s("921152");

function C(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: C = !1,
    scrollToConnections: h = !1
  } = e, {
    trackUserProfileAction: p
  } = (0, E.useUserProfileAnalyticsContext)(), R = (0, r.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), {
    theme: M
  } = (0, g.useUserProfileThemeContext)(), P = (0, r.useStateFromStores)([S.default], () => S.default.locale), j = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), L = (0, d.default)("user_profile"), y = (0, I.default)(s.id), O = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (h) {
      var e;
      null == O || null === (e = O.current) || void 0 === e || e.scrollIntoView()
    }
  }, [h]), R) ? (0, l.jsx)(x.default, {}) : (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: U.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: U.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: U.userInfoSectionHeader,
          children: N.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(v.default, {
          className: U.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: U.userInfoSectionHeader,
          children: N.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, l.jsx)(_.default, {
          userId: s.id,
          textClassName: U.userInfoText
        })]
      }), L && (0, l.jsx)("div", {
        className: U.clans,
        children: (0, l.jsx)("div", {
          className: U.userInfoText,
          children: (0, l.jsx)(c.UserProfileClanContainer, {
            userId: s.id
          })
        })
      }), j && (0, l.jsx)(T.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: n()(U.userInfoText, U.recentGames)
      }), (0, l.jsx)(o.Heading, {
        variant: "eyebrow",
        className: U.userInfoSectionHeader,
        children: N.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: C,
        className: U.note,
        onUpdate: () => p({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(A.ConnectedUserAccounts, {
      ref: O,
      connectedAccounts: y,
      theme: M,
      locale: P,
      className: U.userInfoSection,
      userId: s.id
    })]
  })
}