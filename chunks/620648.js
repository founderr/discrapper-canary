"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  o = s("666520"),
  r = s("726542"),
  u = s("122021"),
  d = s("761174"),
  c = s("706454"),
  f = s("246946"),
  S = s("785717"),
  E = s("621853"),
  I = s("358794"),
  m = s("588822"),
  T = s("81334"),
  p = s("335191"),
  N = s("347949"),
  A = s("988246"),
  x = s("689938"),
  _ = s("478741");

function v(e) {
  var t;
  let {
    user: s,
    displayProfile: v,
    autoFocusNote: C = !1,
    scrollToConnections: h = !1
  } = e, {
    trackUserProfileAction: U
  } = (0, S.useUserProfileAnalyticsContext)(), R = (0, u.usePlatformAllowed)({
    forUserProfile: !0
  }), j = (0, i.useStateFromStores)([E.default], () => {
    var e, t;
    return null !== (t = null === (e = E.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), M = (0, i.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), {
    profileTheme: P
  } = (0, I.default)(s, v), y = (0, i.useStateFromStores)([c.default], () => c.default.locale), O = (0, d.useIsUserRecentGamesEnabled)({
    userId: s.id,
    location: "28tk0bf_3"
  }), g = l.useMemo(() => j.filter(e => {
    let t = r.default.get(e.type);
    return null != t && R(t)
  }), [j, R]), D = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (h) {
      var e;
      null == D || null === (e = D.current) || void 0 === e || e.scrollIntoView()
    }
  }, [h]), M) ? (0, a.jsx)(A.default, {}) : (0, a.jsxs)(n.ScrollerThin, {
    fade: !0,
    className: _.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: _.userInfoSection,
      children: [(null == v ? void 0 : v.bio) != null && (null == v ? void 0 : v.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(n.Heading, {
          variant: "eyebrow",
          className: _.userInfoSectionHeader,
          children: x.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(m.default, {
          className: _.userInfoText,
          userBio: null !== (t = null == v ? void 0 : v.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(T.default, {
        userId: s.id,
        headingClassName: _.userInfoSectionHeader,
        textClassName: _.userInfoText
      }), O && (0, a.jsx)(N.UserProfileRecentGamesContainer, {
        userId: s.id,
        maxItems: 6,
        containerClassName: _.userInfoText
      }), (0, a.jsx)(n.Heading, {
        variant: "eyebrow",
        className: _.userInfoSectionHeader,
        children: x.default.Messages.NOTE
      }), (0, a.jsx)(o.default, {
        userId: s.id,
        autoFocus: C,
        className: _.note,
        onUpdate: () => U({
          action: "SET_NOTE"
        })
      })]
    }), (0, a.jsx)(p.ConnectedUserAccounts, {
      ref: D,
      connectedAccounts: g,
      theme: P,
      locale: y,
      className: _.userInfoSection,
      userId: s.id
    })]
  })
}