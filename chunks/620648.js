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
  A = l("689938"),
  C = l("921152");

function N(e) {
  var t;
  let {
    user: l,
    displayProfile: a,
    autoFocusNote: N = !1,
    scrollToConnections: U = !1
  } = e, {
    trackUserProfileAction: R
  } = (0, I.useUserProfileAnalyticsContext)(), h = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    theme: P
  } = (0, p.useUserProfileThemeContext)(), M = (0, o.useStateFromStores)([S.default], () => S.default.locale), j = (0, f.useIsUserRecentGamesEnabled)({
    userId: l.id,
    location: "28tk0bf_3"
  }), y = (0, d.default)("user_profile"), F = (0, m.default)(l.id), O = i.useRef(null);
  return (i.useLayoutEffect(() => {
    if (U) {
      var e;
      null == O || null === (e = O.current) || void 0 === e || e.scrollIntoView()
    }
  }, [U]), h) ? (0, s.jsx)(x.default, {}) : (0, s.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: C.infoScroller,
    children: [(0, s.jsxs)("div", {
      className: C.userInfoSection,
      children: [(null == a ? void 0 : a.bio) != null && (null == a ? void 0 : a.bio) !== "" && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: C.userInfoSectionHeader,
          children: A.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, s.jsx)(_.default, {
          className: C.userInfoText,
          userBio: null !== (t = null == a ? void 0 : a.bio) && void 0 !== t ? t : ""
        })]
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: C.userInfoSectionHeader,
          children: A.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, s.jsx)(v.default, {
          userId: l.id,
          textClassName: C.userInfoText
        })]
      }), y && (0, s.jsx)("div", {
        className: C.clans,
        children: (0, s.jsx)("div", {
          className: C.userInfoText,
          children: (0, s.jsx)(c.UserProfileClanContainer, {
            userId: l.id
          })
        })
      }), j && (0, s.jsx)(g.UserProfileRecentGamesContainer, {
        userId: l.id,
        maxItems: 6,
        containerClassName: n()(C.userInfoText, C.recentGames)
      }), (0, s.jsx)(r.Heading, {
        variant: "eyebrow",
        className: C.userInfoSectionHeader,
        children: A.default.Messages.NOTE
      }), (0, s.jsx)(u.default, {
        userId: l.id,
        autoFocus: N,
        className: C.note,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })]
    }), (0, s.jsx)(T.ConnectedUserAccounts, {
      ref: O,
      connectedAccounts: F,
      theme: P,
      locale: M,
      className: C.userInfoSection,
      userId: l.id
    })]
  })
}