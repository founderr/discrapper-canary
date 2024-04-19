"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  o = s.n(i),
  r = s("442837"),
  n = s("481060"),
  u = s("666520"),
  d = s("726542"),
  c = s("963202"),
  f = s("369077"),
  S = s("122021"),
  m = s("761174"),
  E = s("706454"),
  I = s("246946"),
  v = s("785717"),
  x = s("621853"),
  _ = s("588822"),
  A = s("81334"),
  T = s("652853"),
  N = s("335191"),
  U = s("347949"),
  p = s("988246"),
  h = s("689938"),
  P = s("478741");

function j(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: j = !1,
    scrollToConnections: C = !1
  } = e, {
    trackUserProfileAction: y
  } = (0, v.useUserProfileAnalyticsContext)(), M = (0, S.usePlatformAllowed)({
    forUserProfile: !0
  }), R = (0, r.useStateFromStores)([x.default], () => {
    var e, t;
    return null !== (t = null === (e = x.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), g = (0, r.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), {
    theme: O
  } = (0, T.useUserProfileThemeContext)(), F = (0, r.useStateFromStores)([E.default], () => E.default.locale), L = (0, c.useIsInUserClanExperiment)(), D = (0, m.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), B = a.useMemo(() => R.filter(e => {
    let t = d.default.get(e.type);
    return null != t && M(t)
  }), [R, M]), b = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (C) {
      var e;
      null == b || null === (e = b.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), g) ? (0, l.jsx)(p.default, {}) : (0, l.jsxs)(n.ScrollerThin, {
    fade: !0,
    className: P.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: P.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(n.Heading, {
          variant: "eyebrow",
          className: P.userInfoSectionHeader,
          children: h.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(_.default, {
          className: P.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(A.default, {
        userId: s.id,
        headingClassName: P.userInfoSectionHeader,
        textClassName: P.userInfoText
      }), L && (0, l.jsx)("div", {
        className: P.clans,
        children: (0, l.jsx)("div", {
          className: P.userInfoText,
          children: (0, l.jsx)(f.UserProfileClanContainer, {
            userId: s.id
          })
        })
      }), D && (0, l.jsx)(U.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: o()(P.userInfoText, P.recentGames)
      }), (0, l.jsx)(n.Heading, {
        variant: "eyebrow",
        className: P.userInfoSectionHeader,
        children: h.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: j,
        className: P.note,
        onUpdate: () => y({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(N.ConnectedUserAccounts, {
      ref: b,
      connectedAccounts: B,
      theme: O,
      locale: F,
      className: P.userInfoSection,
      userId: s.id
    })]
  })
}