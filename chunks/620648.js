"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
});
var s = l("735250"),
  a = l("470079"),
  i = l("120356"),
  n = l.n(i),
  r = l("442837"),
  o = l("481060"),
  u = l("666520"),
  d = l("169559"),
  c = l("369077"),
  f = l("761174"),
  S = l("706454"),
  E = l("246946"),
  m = l("785717"),
  I = l("648067"),
  _ = l("588822"),
  v = l("900927"),
  g = l("652853"),
  T = l("335191"),
  A = l("347949"),
  U = l("988246"),
  p = l("689938"),
  x = l("921152");

function N(e) {
  var t;
  let {
    user: l,
    displayProfile: i,
    autoFocusNote: N = !1,
    scrollToConnections: C = !1
  } = e, {
    trackUserProfileAction: h
  } = (0, m.useUserProfileAnalyticsContext)(), R = (0, r.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    theme: P
  } = (0, g.useUserProfileThemeContext)(), M = (0, r.useStateFromStores)([S.default], () => S.default.locale), j = (0, f.useIsUserRecentGamesEnabled)({
    userId: l.id,
    location: "28tk0bf_3"
  }), y = (0, d.default)("user_profile"), L = (0, I.default)(l.id), O = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (C) {
      var e;
      null == O || null === (e = O.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), R) ? (0, s.jsx)(U.default, {}) : (0, s.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: x.infoScroller,
    children: [(0, s.jsxs)("div", {
      className: x.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(o.Heading, {
          variant: "eyebrow",
          className: x.userInfoSectionHeader,
          children: p.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, s.jsx)(_.default, {
          className: x.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(o.Heading, {
          variant: "eyebrow",
          className: x.userInfoSectionHeader,
          children: p.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, s.jsx)(v.default, {
          userId: l.id,
          textClassName: x.userInfoText
        })]
      }), y && (0, s.jsx)("div", {
        className: x.clans,
        children: (0, s.jsx)("div", {
          className: x.userInfoText,
          children: (0, s.jsx)(c.UserProfileClanContainer, {
            userId: l.id
          })
        })
      }), j && (0, s.jsx)(A.UserProfileRecentGamesContainer, {
        userId: l.id,
        maxItems: 6,
        containerClassName: n()(x.userInfoText, x.recentGames)
      }), (0, s.jsx)(o.Heading, {
        variant: "eyebrow",
        className: x.userInfoSectionHeader,
        children: p.default.Messages.NOTE
      }), (0, s.jsx)(u.default, {
        userId: l.id,
        autoFocus: N,
        className: x.note,
        onUpdate: () => h({
          action: "SET_NOTE"
        })
      })]
    }), (0, s.jsx)(T.ConnectedUserAccounts, {
      ref: O,
      connectedAccounts: L,
      theme: P,
      locale: M,
      className: x.userInfoSection,
      userId: l.id
    })]
  })
}