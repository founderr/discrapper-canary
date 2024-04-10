"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("803997"),
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
  N = s("81334"),
  x = s("335191"),
  A = s("347949"),
  v = s("988246"),
  _ = s("689938"),
  h = s("478741");

function C(e) {
  var t;
  let {
    user: s,
    displayProfile: i,
    autoFocusNote: C = !1,
    scrollToConnections: U = !1
  } = e, {
    trackUserProfileAction: j
  } = (0, m.useUserProfileAnalyticsContext)(), R = (0, c.usePlatformAllowed)({
    forUserProfile: !0
  }), P = (0, o.useStateFromStores)([I.default], () => {
    var e, t;
    return null !== (t = null === (e = I.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), M = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), {
    profileTheme: y
  } = (0, T.default)(s, i), g = (0, o.useStateFromStores)([S.default], () => S.default.locale), O = (0, f.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), D = l.useMemo(() => P.filter(e => {
    let t = d.default.get(e.type);
    return null != t && R(t)
  }), [P, R]), F = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (U) {
      var e;
      null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView()
    }
  }, [U]), M) ? (0, a.jsx)(v.default, {}) : (0, a.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: h.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: h.userInfoSection,
      children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: _.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(p.default, {
          className: h.userInfoText,
          userBio: null !== (t = null == i ? void 0 : i.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(N.default, {
        userId: s.id,
        headingClassName: h.userInfoSectionHeader,
        textClassName: h.userInfoText
      }), O && (0, a.jsx)(A.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: n()(h.userInfoText, h.recentGames)
      }), (0, a.jsx)(r.Heading, {
        variant: "eyebrow",
        className: h.userInfoSectionHeader,
        children: _.default.Messages.NOTE
      }), (0, a.jsx)(u.default, {
        userId: s.id,
        autoFocus: C,
        className: h.note,
        onUpdate: () => j({
          action: "SET_NOTE"
        })
      })]
    }), (0, a.jsx)(x.ConnectedUserAccounts, {
      ref: F,
      connectedAccounts: D,
      theme: y,
      locale: g,
      className: h.userInfoSection,
      userId: s.id
    })]
  })
}