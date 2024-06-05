"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("120356"),
  n = l.n(a),
  o = l("442837"),
  r = l("481060"),
  u = l("666520"),
  d = l("169559"),
  c = l("369077"),
  f = l("761174"),
  S = l("706454"),
  E = l("246946"),
  I = l("785717"),
  m = l("648067"),
  _ = l("588822"),
  v = l("900927"),
  p = l("652853"),
  T = l("335191"),
  g = l("347949"),
  x = l("988246"),
  U = l("689938"),
  A = l("921152");

function N(e) {
  var t;
  let {
    user: l,
    displayProfile: a,
    autoFocusNote: N = !1,
    scrollToConnections: C = !1
  } = e, {
    trackUserProfileAction: R
  } = (0, I.useUserProfileAnalyticsContext)(), P = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    theme: h
  } = (0, p.useUserProfileThemeContext)(), M = (0, o.useStateFromStores)([S.default], () => S.default.locale), y = (0, f.useIsUserRecentGamesEnabled)({
    userId: l.id,
    location: "28tk0bf_3"
  }), j = (0, d.default)("user_profile"), F = (0, m.default)(l.id), L = i.useRef(null);
  return (i.useLayoutEffect(() => {
    if (C) {
      var e;
      null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), P) ? (0, s.jsx)(x.default, {}) : (0, s.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: A.infoScroller,
    children: [(0, s.jsxs)("div", {
      className: A.userInfoSection,
      children: [(null == a ? void 0 : a.bio) != null && (null == a ? void 0 : a.bio) !== "" && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: A.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, s.jsx)(_.default, {
          className: A.userInfoText,
          userBio: null !== (t = null == a ? void 0 : a.bio) && void 0 !== t ? t : ""
        })]
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: A.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, s.jsx)(v.default, {
          userId: l.id,
          textClassName: A.userInfoText
        })]
      }), j && (0, s.jsx)("div", {
        className: A.clans,
        children: (0, s.jsx)("div", {
          className: A.userInfoText,
          children: (0, s.jsx)(c.UserProfileClanContainer, {
            userId: l.id
          })
        })
      }), y && (0, s.jsx)(g.UserProfileRecentGamesContainer, {
        userId: l.id,
        maxItems: 6,
        containerClassName: n()(A.userInfoText, A.recentGames)
      }), (0, s.jsx)(r.Heading, {
        variant: "eyebrow",
        className: A.userInfoSectionHeader,
        children: U.default.Messages.NOTE
      }), (0, s.jsx)(u.default, {
        userId: l.id,
        autoFocus: N,
        className: A.note,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })]
    }), (0, s.jsx)(T.ConnectedUserAccounts, {
      ref: L,
      connectedAccounts: F,
      theme: h,
      locale: M,
      className: A.userInfoSection,
      userId: l.id
    })]
  })
}