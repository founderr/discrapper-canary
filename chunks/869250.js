"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  r = s("77078"),
  o = s("910330"),
  n = s("376556"),
  u = s("572943"),
  d = s("915639"),
  c = s("102985"),
  f = s("713135"),
  S = s("906889"),
  m = s("485422"),
  E = s("880114"),
  T = s("824140"),
  p = s("751906"),
  N = s("782340"),
  x = s("591572");

function A(e) {
  var t;
  let {
    user: s,
    displayProfile: A,
    autoFocusNote: v = !1,
    scrollToConnections: h = !1
  } = e, I = (0, u.usePlatformAllowed)({
    forUserProfile: !0
  }), _ = (0, i.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), U = (0, i.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
    profileTheme: C
  } = (0, S.default)(s, A), j = (0, i.useStateFromStores)([d.default], () => d.default.locale), y = l.useMemo(() => _.filter(e => {
    let t = n.default.get(e.type);
    return null != t && I(t)
  }), [_, I]), g = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (h) {
      var e;
      null == g || null === (e = g.current) || void 0 === e || e.scrollIntoView()
    }
  }, [h]), U) ? (0, a.jsx)(p.default, {}) : (0, a.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: x.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: x.userInfoSection,
      children: [(null == A ? void 0 : A.bio) != null && (null == A ? void 0 : A.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Heading, {
          variant: "eyebrow",
          className: x.userInfoSectionHeader,
          children: N.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(m.default, {
          className: x.userInfoText,
          userBio: null !== (t = null == A ? void 0 : A.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(E.default, {
        userId: s.id,
        headingClassName: x.userInfoSectionHeader,
        textClassName: x.userInfoText
      }), (0, a.jsx)(r.Heading, {
        variant: "eyebrow",
        className: x.userInfoSectionHeader,
        children: N.default.Messages.NOTE
      }), (0, a.jsx)(o.default, {
        userId: s.id,
        autoFocus: v,
        className: x.note
      })]
    }), (0, a.jsx)(T.ConnectedUserAccounts, {
      ref: g,
      connectedAccounts: y,
      theme: C,
      locale: j,
      className: x.userInfoSection,
      userId: s.id
    })]
  })
}