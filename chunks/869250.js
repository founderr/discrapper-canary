"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var l = s("37983"),
  a = s("884691"),
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
  x = s("751906"),
  N = s("782340"),
  p = s("974991");

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
  }), C = (0, i.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
    profileTheme: U
  } = (0, S.default)(s, h), j = (0, i.useStateFromStores)([d.default], () => d.default.locale), y = a.useMemo(() => _.filter(e => {
    let t = n.default.get(e.type);
    return null != t && I(t)
  }), [_, I]), g = a.useRef(null);
  return (a.useLayoutEffect(() => {
    if (A) {
      var e;
      null == g || null === (e = g.current) || void 0 === e || e.scrollIntoView()
    }
  }, [A]), C) ? (0, l.jsx)(x.default, {}) : (0, l.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: p.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: p.userInfoSection,
      children: [(null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== "" && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.Heading, {
          variant: "eyebrow",
          className: p.userInfoSectionHeader,
          children: N.default.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(m.default, {
          className: p.userInfoText,
          userBio: null !== (t = null == h ? void 0 : h.bio) && void 0 !== t ? t : ""
        })]
      }), (0, l.jsx)(E.default, {
        userId: s.id,
        headingClassName: p.userInfoSectionHeader,
        textClassName: p.userInfoText
      }), (0, l.jsx)(r.Heading, {
        variant: "eyebrow",
        className: p.userInfoSectionHeader,
        children: N.default.Messages.NOTE
      }), (0, l.jsx)(o.default, {
        userId: s.id,
        autoFocus: v,
        className: p.note
      })]
    }), (0, l.jsx)(T.ConnectedUserAccounts, {
      ref: g,
      connectedAccounts: y,
      theme: U,
      locale: j,
      className: p.userInfoSection,
      userId: s.id
    })]
  })
}