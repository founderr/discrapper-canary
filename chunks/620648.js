s.d(i, {
  Z: function() {
    return N
  }
});
var n = s(735250),
  l = s(470079),
  t = s(442837),
  o = s(481060),
  r = s(666520),
  a = s(580552),
  d = s(169559),
  c = s(369077),
  u = s(706454),
  I = s(246946),
  E = s(785717),
  Z = s(648067),
  f = s(588822),
  _ = s(900927),
  S = s(652853),
  v = s(335191),
  m = s(988246),
  x = s(689938),
  h = s(420990);

function N(e) {
  var i;
  let {
    user: s,
    displayProfile: N,
    autoFocusNote: g = !1,
    scrollToConnections: T = !1
  } = e, {
    trackUserProfileAction: C
  } = (0, E.KZ)(), R = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {
    theme: A
  } = (0, S.z)(), M = (0, t.e7)([u.default], () => u.default.locale), p = (0, d.Z)("user_profile"), j = (null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== "" || (0, a.Z)(s.id), U = (0, Z.Z)(s.id), L = l.useRef(null);
  return (l.useLayoutEffect(() => {
    if (T) {
      var e;
      null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView()
    }
  }, [T]), R) ? (0, n.jsx)(m.Z, {}) : (0, n.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: h.infoScroller,
    children: [(0, n.jsxs)("div", {
      className: h.userInfoSection,
      children: [j && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: x.Z.Messages.USER_PROFILE_ABOUT_ME
        }), (0, n.jsx)(f.Z, {
          className: h.userInfoText,
          userBio: null !== (i = null == N ? void 0 : N.bio) && void 0 !== i ? i : "",
          userId: s.id
        })]
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, n.jsx)(_.Z, {
          userId: s.id,
          textClassName: h.userInfoText
        })]
      }), p && (0, n.jsx)("div", {
        className: h.clans,
        children: (0, n.jsx)("div", {
          className: h.userInfoText,
          children: (0, n.jsx)(c.Gd, {
            userId: s.id
          })
        })
      }), !s.isNonUserBot() && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: x.Z.Messages.NOTE
        }), (0, n.jsx)(r.Z, {
          userId: s.id,
          autoFocus: g,
          className: h.note,
          onUpdate: () => C({
            action: "SET_NOTE"
          })
        })]
      })]
    }), (0, n.jsx)(v.OA, {
      ref: L,
      connectedAccounts: U,
      theme: A,
      locale: M,
      className: h.userInfoSection,
      userId: s.id
    })]
  })
}