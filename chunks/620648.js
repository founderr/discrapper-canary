"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  r = s("481060"),
  o = s("666520"),
  n = s("726542"),
  u = s("122021"),
  d = s("761174"),
  c = s("706454"),
  f = s("246946"),
  S = s("785717"),
  m = s("621853"),
  E = s("358794"),
  I = s("588822"),
  T = s("81334"),
  N = s("335191"),
  x = s("347949"),
  A = s("988246"),
  _ = s("689938"),
  p = s("478741");

function v(e) {
  var t;
  let {
    user: s,
    displayProfile: v,
    autoFocusNote: h = !1,
    scrollToConnections: U = !1
  } = e, {
    trackUserProfileAction: C
  } = (0, S.useUserProfileAnalyticsContext)(), j = (0, u.usePlatformAllowed)({
    forUserProfile: !0
  }), y = (0, i.useStateFromStores)([m.default], () => {
    var e, t;
    return null !== (t = null === (e = m.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), M = (0, i.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), {
    profileTheme: P
  } = (0, E.default)(s, v), R = (0, i.useStateFromStores)([c.default], () => c.default.locale), g = (0, d.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), O = l.useMemo(() => y.filter(e => {
    let t = n.default.get(e.type);
    return null != t && j(t)
  }), [y, j]), D = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (U) {
      var e;
      null == D || null === (e = D.current) || void 0 === e || e.scrollIntoView()
    }
  }, [U]), M) ? (0, a.jsx)(A.default, {}) : (0, a.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: p.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: p.userInfoSection,
      children: [(null == v ? void 0 : v.bio) != null && (null == v ? void 0 : v.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Heading, {
          variant: "eyebrow",
          className: p.userInfoSectionHeader,
          children: _.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(I.default, {
          className: p.userInfoText,
          userBio: null !== (t = null == v ? void 0 : v.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(T.default, {
        userId: s.id,
        headingClassName: p.userInfoSectionHeader,
        textClassName: p.userInfoText
      }), g && (0, a.jsx)(x.default, {
        userId: s.id,
        maxItems: 6,
        containerClassName: p.userInfoText,
        wrapChildren: e => (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Heading, {
            variant: "eyebrow",
            className: p.userInfoSectionHeader,
            children: _.default.Messages.RECENT_GAMES
          }), e]
        })
      }), (0, a.jsx)(r.Heading, {
        variant: "eyebrow",
        className: p.userInfoSectionHeader,
        children: _.default.Messages.NOTE
      }), (0, a.jsx)(o.default, {
        userId: s.id,
        autoFocus: h,
        className: p.note,
        onUpdate: () => C({
          action: "SET_NOTE"
        })
      })]
    }), (0, a.jsx)(N.ConnectedUserAccounts, {
      ref: D,
      connectedAccounts: O,
      theme: P,
      locale: R,
      className: p.userInfoSection,
      userId: s.id
    })]
  })
}