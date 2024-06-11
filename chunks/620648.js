"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
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
  E = l("648067"),
  I = l("588822"),
  m = l("900927"),
  _ = l("652853"),
  v = l("335191"),
  p = l("988246"),
  T = l("689938"),
  g = l("921152");

function A(e) {
  var t;
  let {
    user: l,
    displayProfile: A,
    autoFocusNote: x = !1,
    scrollToConnections: N = !1
  } = e, {
    trackUserProfileAction: C
  } = (0, S.useUserProfileAnalyticsContext)(), U = (0, a.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), {
    theme: h
  } = (0, _.useUserProfileThemeContext)(), P = (0, a.useStateFromStores)([c.default], () => c.default.locale), R = (0, u.default)("user_profile"), M = (null == A ? void 0 : A.bio) != null && (null == A ? void 0 : A.bio) !== "" || (0, r.default)(l.id), j = (0, E.default)(l.id), y = i.useRef(null);
  return (i.useLayoutEffect(() => {
    if (N) {
      var e;
      null == y || null === (e = y.current) || void 0 === e || e.scrollIntoView()
    }
  }, [N]), U) ? (0, s.jsx)(p.default, {}) : (0, s.jsxs)(n.ScrollerThin, {
    fade: !0,
    className: g.infoScroller,
    children: [(0, s.jsxs)("div", {
      className: g.userInfoSection,
      children: [M && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(n.Heading, {
          variant: "eyebrow",
          className: g.userInfoSectionHeader,
          children: T.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, s.jsx)(I.default, {
          className: g.userInfoText,
          userBio: null !== (t = null == A ? void 0 : A.bio) && void 0 !== t ? t : "",
          userId: l.id
        })]
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(n.Heading, {
          variant: "eyebrow",
          className: g.userInfoSectionHeader,
          children: T.default.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, s.jsx)(m.default, {
          userId: l.id,
          textClassName: g.userInfoText
        })]
      }), R && (0, s.jsx)("div", {
        className: g.clans,
        children: (0, s.jsx)("div", {
          className: g.userInfoText,
          children: (0, s.jsx)(d.UserProfileClanContainer, {
            userId: l.id
          })
        })
      }), !l.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(n.Heading, {
          variant: "eyebrow",
          className: g.userInfoSectionHeader,
          children: T.default.Messages.NOTE
        }), (0, s.jsx)(o.default, {
          userId: l.id,
          autoFocus: x,
          className: g.note,
          onUpdate: () => C({
            action: "SET_NOTE"
          })
        })]
      })]
    }), (0, s.jsx)(v.ConnectedUserAccounts, {
      ref: y,
      connectedAccounts: j,
      theme: h,
      locale: P,
      className: g.userInfoSection,
      userId: l.id
    })]
  })
}