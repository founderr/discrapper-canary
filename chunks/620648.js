"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var l = s("735250"),
  a = s("470079"),
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
  I = s("785717"),
  m = s("621853"),
  _ = s("358794"),
  T = s("588822"),
  p = s("81334"),
  A = s("335191"),
  N = s("347949"),
  v = s("988246"),
  x = s("689938"),
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
  } = (0, I.useUserProfileAnalyticsContext)(), P = (0, c.usePlatformAllowed)({
    forUserProfile: !0
  }), M = (0, o.useStateFromStores)([m.default], () => {
    var e, t;
    return null !== (t = null === (e = m.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), g = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    profileTheme: j
  } = (0, _.default)(s, i), y = (0, o.useStateFromStores)([S.default], () => S.default.locale), O = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), D = a.useMemo(() => M.filter(e => {
    let t = d.default.get(e.type);
    return null != t && P(t)
  }), [M, P]), F = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (C) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), g) ? (0, l.jsx)(v.default, {}) : (0, l.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: U.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: U.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.Heading, {
          variant: "eyebrow",
          className: U.userInfoSectionHeader,
          children: x.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(T.default, {
          className: U.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(p.default, {
        userId: s.id,
        headingClassName: U.userInfoSectionHeader,
        textClassName: U.userInfoText
      }), O && (0, l.jsx)(N.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: n()(U.userInfoText, U.recentGames)
      }), (0, l.jsx)(r.Heading, {
        variant: "eyebrow",
        className: U.userInfoSectionHeader,
        children: x.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: h,
        className: U.note,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(A.ConnectedUserAccounts, {
      ref: F,
      connectedAccounts: D,
      theme: j,
      locale: y,
      className: U.userInfoSection,
      userId: s.id
    })]
  })
}