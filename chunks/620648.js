"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  c = s("122021"),
  f = s("761174"),
  S = s("706454"),
  E = s("246946"),
  m = s("785717"),
  I = s("621853"),
  v = s("588822"),
  _ = s("81334"),
  A = s("652853"),
  T = s("335191"),
  x = s("347949"),
  N = s("988246"),
  U = s("689938"),
  p = s("478741");

function h(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: h = !1,
    scrollToConnections: C = !1
  } = e, {
    trackUserProfileAction: P
  } = (0, m.useUserProfileAnalyticsContext)(), j = (0, c.usePlatformAllowed)({
    forUserProfile: !0
  }), M = (0, r.useStateFromStores)([I.default], () => {
    var e, t;
    return null !== (t = null === (e = I.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), y = (0, r.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    theme: R
  } = (0, A.useUserProfileThemeContext)(), g = (0, r.useStateFromStores)([S.default], () => S.default.locale), O = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), F = a.useMemo(() => M.filter(e => {
    let t = d.default.get(e.type);
    return null != t && j(t)
  }), [M, j]), L = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (C) {
      var e;
      null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), y) ? (0, l.jsx)(N.default, {}) : (0, l.jsxs)(n.ScrollerThin, {
    fade: !0,
    className: p.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: p.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(n.Heading, {
          variant: "eyebrow",
          className: p.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(v.default, {
          className: p.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(_.default, {
        userId: s.id,
        headingClassName: p.userInfoSectionHeader,
        textClassName: p.userInfoText
      }), O && (0, l.jsx)(x.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: o()(p.userInfoText, p.recentGames)
      }), (0, l.jsx)(n.Heading, {
        variant: "eyebrow",
        className: p.userInfoSectionHeader,
        children: U.default.Messages.NOTE
      }), (0, l.jsx)(u.default, {
        userId: s.id,
        autoFocus: h,
        className: p.note,
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(T.ConnectedUserAccounts, {
      ref: L,
      connectedAccounts: F,
      theme: R,
      locale: g,
      className: p.userInfoSection,
      userId: s.id
    })]
  })
}