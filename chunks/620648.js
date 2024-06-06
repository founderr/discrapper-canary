"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("120356"),
  n = l.n(a),
  o = l("442837"),
  r = l("481060"),
  u = l("666520"),
  d = l("580552"),
  c = l("169559"),
  f = l("369077"),
  S = l("761174"),
  E = l("706454"),
  I = l("246946"),
  m = l("785717"),
  _ = l("648067"),
  v = l("588822"),
  p = l("900927"),
  T = l("652853"),
  g = l("335191"),
  x = l("347949"),
  A = l("988246"),
  U = l("689938"),
  N = l("921152");

function C(e) {
  var t;
  let {
    user: l,
    displayProfile: a,
    autoFocusNote: C = !1,
    scrollToConnections: R = !1
  } = e, {
    trackUserProfileAction: h
  } = (0, m.useUserProfileAnalyticsContext)(), P = (0, o.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), {
    theme: M
  } = (0, T.useUserProfileThemeContext)(), y = (0, o.useStateFromStores)([E.default], () => E.default.locale), j = (0, S.useIsUserRecentGamesEnabled)({
    userId: l.id,
    location: "28tk0bf_3"
  }), F = (0, c.default)("user_profile"), L = (null == a ? void 0 : a.bio) != null && (null == a ? void 0 : a.bio) !== "" || (0, d.default)(l.id), O = (0, _.default)(l.id), D = i.useRef(null);
  return (i.useLayoutEffect(() => {
    if (R) {
      var e;
      null == D || null === (e = D.current) || void 0 === e || e.scrollIntoView()
    }
  }, [R]), P) ? (0, s.jsx)(A.default, {}) : (0, s.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: N.infoScroller,
    children: [(0, s.jsxs)("div", {
      className: N.userInfoSection,
      children: [L && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: N.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, s.jsx)(v.default, {
          className: N.userInfoText,
          userBio: null !== (t = null == a ? void 0 : a.bio) && void 0 !== t ? t : "",
          userId: l.id
        })]
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: N.userInfoSectionHeader,
          children: U.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, s.jsx)(p.default, {
          userId: l.id,
          textClassName: N.userInfoText
        })]
      }), F && (0, s.jsx)("div", {
        className: N.clans,
        children: (0, s.jsx)("div", {
          className: N.userInfoText,
          children: (0, s.jsx)(f.UserProfileClanContainer, {
            userId: l.id
          })
        })
      }), j && (0, s.jsx)(x.UserProfileRecentGamesContainer, {
        userId: l.id,
        maxItems: 6,
        containerClassName: n()(N.userInfoText, N.recentGames)
      }), !l.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Heading, {
          variant: "eyebrow",
          className: N.userInfoSectionHeader,
          children: U.default.Messages.NOTE
        }), (0, s.jsx)(u.default, {
          userId: l.id,
          autoFocus: C,
          className: N.note,
          onUpdate: () => h({
            action: "SET_NOTE"
          })
        })]
      })]
    }), (0, s.jsx)(g.ConnectedUserAccounts, {
      ref: D,
      connectedAccounts: O,
      theme: M,
      locale: y,
      className: N.userInfoSection,
      userId: l.id
    })]
  })
}