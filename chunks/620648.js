"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("120356"),
  n = s.n(i),
  o = s("442837"),
  r = s("481060"),
  u = s("666520"),
  d = s("726542"),
  c = s("122021"),
  f = s("761174"),
  S = s("706454"),
  E = s("246946"),
  m = s("785717"),
  I = s("621853"),
  T = s("358794"),
  p = s("588822"),
  _ = s("81334"),
  N = s("335191"),
  A = s("347949"),
  x = s("988246"),
  v = s("689938"),
  U = s("478741");

function h(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: h = !1,
    scrollToConnections: C = !1
  } = e, {
    trackUserProfileAction: R
  } = (0, m.useUserProfileAnalyticsContext)(), P = (0, c.usePlatformAllowed)({
    forUserProfile: !0
  }), M = (0, o.useStateFromStores)([I.default], () => {
    var e, t;
    return null !== (t = null === (e = I.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), j = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    profileTheme: g
  } = (0, T.default)(s, i), y = (0, o.useStateFromStores)([S.default], () => S.default.locale), O = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), D = l.useMemo(() => M.filter(e => {
    let t = d.default.get(e.type);
    return null != t && P(t)
  }), [M, P]), F = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (C) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), j) ? (0, a.jsx)(x.default, {}) : (0, a.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: U.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: U.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Heading, {
          variant: "eyebrow",
          className: U.userInfoSectionHeader,
          children: v.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(p.default, {
          className: U.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(_.default, {
        userId: s.id,
        headingClassName: U.userInfoSectionHeader,
        textClassName: U.userInfoText
      }), O && (0, a.jsx)(A.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: n()(U.userInfoText, U.recentGames)
      }), (0, a.jsx)(r.Heading, {
        variant: "eyebrow",
        className: U.userInfoSectionHeader,
        children: v.default.Messages.NOTE
      }), (0, a.jsx)(u.default, {
        userId: s.id,
        autoFocus: h,
        className: U.note,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })]
    }), (0, a.jsx)(N.ConnectedUserAccounts, {
      ref: F,
      connectedAccounts: D,
      theme: g,
      locale: y,
      className: U.userInfoSection,
      userId: s.id
    })]
  })
}