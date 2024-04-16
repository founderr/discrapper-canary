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
  T = s("588822"),
  _ = s("81334"),
  A = s("652853"),
  p = s("335191"),
  v = s("347949"),
  N = s("988246"),
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
    trackUserProfileAction: P
  } = (0, I.useUserProfileAnalyticsContext)(), R = (0, c.usePlatformAllowed)({
    forUserProfile: !0
  }), M = (0, o.useStateFromStores)([m.default], () => {
    var e, t;
    return null !== (t = null === (e = m.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), j = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    theme: g
  } = (0, A.useUserProfileThemeContext)(), y = (0, o.useStateFromStores)([S.default], () => S.default.locale), O = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), D = a.useMemo(() => M.filter(e => {
    let t = d.default.get(e.type);
    return null != t && R(t)
  }), [M, R]), F = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (C) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), j) ? (0, l.jsx)(N.default, {}) : (0, l.jsxs)(r.ScrollerThin, {
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
      }), (0, l.jsx)(_.default, {
        userId: s.id,
        headingClassName: U.userInfoSectionHeader,
        textClassName: U.userInfoText
      }), O && (0, l.jsx)(v.UserProfileRecentGamesContainer, {
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
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })]
    }), (0, l.jsx)(p.ConnectedUserAccounts, {
      ref: F,
      connectedAccounts: D,
      theme: g,
      locale: y,
      className: U.userInfoSection,
      userId: s.id
    })]
  })
}