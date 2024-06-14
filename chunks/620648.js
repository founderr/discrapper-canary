"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("442837"),
  n = l("481060"),
  o = l("666520"),
  r = l("580552"),
  u = l("169559"),
  d = l("369077"),
  c = l("706454"),
  f = l("246946"),
  S = l("785717"),
  I = l("648067"),
  E = l("588822"),
  m = l("900927"),
  v = l("652853"),
  _ = l("335191"),
  p = l("988246"),
  x = l("689938"),
  T = l("921152");

function g(e) {
  var t;
  let {
    user: l,
    displayProfile: g,
    autoFocusNote: N = !1,
    scrollToConnections: A = !1
  } = e, {
    trackUserProfileAction: C
  } = (0, S.useUserProfileAnalyticsContext)(), U = (0, a.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), {
    theme: P
  } = (0, v.useUserProfileThemeContext)(), h = (0, a.useStateFromStores)([c.default], () => c.default.locale), R = (0, u.default)("user_profile"), M = (null == g ? void 0 : g.bio) != null && (null == g ? void 0 : g.bio) !== "" || (0, r.default)(l.id), j = (0, I.default)(l.id), y = i.useRef(null);
  return (i.useLayoutEffect(() => {
    if (A) {
      var e;
      null == y || null === (e = y.current) || void 0 === e || e.scrollIntoView()
    }
  }, [A]), U) ? (0, s.jsx)(p.default, {}) : (0, s.jsxs)(n.ScrollerThin, {
    fade: !0,
    className: T.infoScroller,
    children: [(0, s.jsxs)("div", {
      className: T.userInfoSection,
      children: [M && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(n.Heading, {
          variant: "eyebrow",
          className: T.userInfoSectionHeader,
          children: x.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, s.jsx)(E.default, {
          className: T.userInfoText,
          userBio: null !== (t = null == g ? void 0 : g.bio) && void 0 !== t ? t : "",
          userId: l.id
        })]
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(n.Heading, {
          variant: "eyebrow",
          className: T.userInfoSectionHeader,
          children: x.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, s.jsx)(m.default, {
          userId: l.id,
          textClassName: T.userInfoText
        })]
      }), R && (0, s.jsx)("div", {
        className: T.clans,
        children: (0, s.jsx)("div", {
          className: T.userInfoText,
          children: (0, s.jsx)(d.UserProfileClanContainer, {
            userId: l.id
          })
        })
      }), !l.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(n.Heading, {
          variant: "eyebrow",
          className: T.userInfoSectionHeader,
          children: x.default.Messages.NOTE
        }), (0, s.jsx)(o.default, {
          userId: l.id,
          autoFocus: N,
          className: T.note,
          onUpdate: () => C({
            action: "SET_NOTE"
          })
        })]
      })]
    }), (0, s.jsx)(_.ConnectedUserAccounts, {
      ref: y,
      connectedAccounts: j,
      theme: P,
      locale: h,
      className: T.userInfoSection,
      userId: l.id
    })]
  })
}