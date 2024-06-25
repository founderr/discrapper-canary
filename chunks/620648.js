i.d(n, {
  Z: function() {
    return g
  }
});
var t = i(735250),
  s = i(470079),
  o = i(442837),
  l = i(481060),
  a = i(666520),
  r = i(580552),
  d = i(169559),
  c = i(369077),
  u = i(706454),
  I = i(246946),
  f = i(785717),
  E = i(648067),
  _ = i(588822),
  S = i(900927),
  Z = i(652853),
  m = i(335191),
  v = i(988246),
  x = i(689938),
  h = i(420990);

function g(e) {
  var n;
  let {
    user: i,
    displayProfile: g,
    autoFocusNote: N = !1,
    scrollToConnections: p = !1
  } = e, {
    trackUserProfileAction: T
  } = (0, f.KZ)(), C = (0, o.e7)([I.Z], () => I.Z.hidePersonalInformation), {
    theme: R
  } = (0, Z.z)(), A = (0, o.e7)([u.default], () => u.default.locale), M = (0, d.Z)("user_profile"), j = (null == g ? void 0 : g.bio) != null && (null == g ? void 0 : g.bio) !== "" || (0, r.Z)(i.id), U = (0, E.Z)(i.id), P = s.useRef(null);
  return (s.useLayoutEffect(() => {
    if (p) {
      var e;
      null == P || null === (e = P.current) || void 0 === e || e.scrollIntoView()
    }
  }, [p]), C) ? (0, t.jsx)(v.Z, {}) : (0, t.jsxs)(l.ScrollerThin, {
    fade: !0,
    className: h.infoScroller,
    children: [(0, t.jsxs)("div", {
      className: h.userInfoSection,
      children: [j && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(l.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: x.Z.Messages.USER_PROFILE_ABOUT_ME
        }), (0, t.jsx)(_.Z, {
          className: h.userInfoText,
          userBio: null !== (n = null == g ? void 0 : g.bio) && void 0 !== n ? n : "",
          userId: i.id
        })]
      }), (0, t.jsxs)("div", {
        children: [(0, t.jsx)(l.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, t.jsx)(S.Z, {
          userId: i.id,
          textClassName: h.userInfoText
        })]
      }), M && (0, t.jsx)("div", {
        className: h.clans,
        children: (0, t.jsx)("div", {
          className: h.userInfoText,
          children: (0, t.jsx)(c.Gd, {
            userId: i.id
          })
        })
      }), !i.isNonUserBot() && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(l.Heading, {
          variant: "eyebrow",
          className: h.userInfoSectionHeader,
          children: x.Z.Messages.NOTE
        }), (0, t.jsx)(a.Z, {
          userId: i.id,
          autoFocus: N,
          className: h.note,
          onUpdate: () => T({
            action: "SET_NOTE"
          })
        })]
      })]
    }), (0, t.jsx)(m.OA, {
      ref: P,
      connectedAccounts: U,
      theme: R,
      locale: A,
      className: h.userInfoSection,
      userId: i.id
    })]
  })
}