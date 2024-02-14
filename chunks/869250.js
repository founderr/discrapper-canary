"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  x = s("782340"),
  N = s("591572");

function h(e) {
  var t;
  let {
    user: s,
    displayProfile: h,
    autoFocusNote: v = !1,
    scrollToConnections: A = !1
  } = e, I = (0, u.usePlatformAllowed)({
    forUserProfile: !0
  }), _ = (0, i.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
  }), U = (0, i.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
    profileTheme: C
  } = (0, S.default)(s, h), j = (0, i.useStateFromStores)([d.default], () => d.default.locale), y = l.useMemo(() => _.filter(e => {
    let t = n.default.get(e.type);
    return null != t && I(t)
  }), [_, I]), g = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (A) {
      var e;
      null == g || null === (e = g.current) || void 0 === e || e.scrollIntoView()
    }
  }, [A]), U) ? (0, a.jsx)(p.default, {}) : (0, a.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: N.infoScroller,
    children: [(0, a.jsxs)("div", {
      className: N.userInfoSection,
      children: [(null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== "" && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Heading, {
          variant: "eyebrow",
          className: N.userInfoSectionHeader,
          children: x.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, a.jsx)(m.default, {
          className: N.userInfoText,
          userBio: null !== (t = null == h ? void 0 : h.bio) && void 0 !== t ? t : ""
        })]
      }), (0, a.jsx)(E.default, {
        userId: s.id,
        headingClassName: N.userInfoSectionHeader,
        textClassName: N.userInfoText
      }), (0, a.jsx)(r.Heading, {
        variant: "eyebrow",
        className: N.userInfoSectionHeader,
        children: x.default.Messages.NOTE
      }), (0, a.jsx)(o.default, {
        userId: s.id,
        autoFocus: v,
        className: N.note
      })]
    }), (0, a.jsx)(T.ConnectedUserAccounts, {
      ref: g,
      connectedAccounts: y,
      theme: C,
      locale: j,
      className: N.userInfoSection,
      userId: s.id
    })]
  })
}