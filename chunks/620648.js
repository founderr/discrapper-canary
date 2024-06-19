i.d(n, {
  Z: function() {
    return h
  }
});
var l = i(735250),
  s = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(666520),
  r = i(580552),
  d = i(169559),
  u = i(369077),
  c = i(706454),
  I = i(246946),
  E = i(785717),
  f = i(648067),
  Z = i(588822),
  _ = i(900927),
  S = i(652853),
  m = i(335191),
  v = i(988246),
  N = i(689938),
  x = i(420990);

function h(e) {
  var n;
  let {
    user: i,
    displayProfile: h,
    autoFocusNote: g = !1,
    scrollToConnections: C = !1
  } = e, {
    trackUserProfileAction: T
  } = (0, E.KZ)(), R = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {
    theme: A
  } = (0, S.z)(), M = (0, t.e7)([c.default], () => c.default.locale), j = (0, d.Z)("user_profile"), p = (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== "" || (0, r.Z)(i.id), U = (0, f.Z)(i.id), O = s.useRef(null);
  return (s.useLayoutEffect(() => {
    if (C) {
      var e;
      null == O || null === (e = O.current) || void 0 === e || e.scrollIntoView()
    }
  }, [C]), R) ? (0, l.jsx)(v.Z, {}) : (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: x.infoScroller,
    children: [(0, l.jsxs)("div", {
      className: x.userInfoSection,
      children: [p && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: x.userInfoSectionHeader,
          children: N.Z.Messages.USER_PROFILE_ABOUT_ME
        }), (0, l.jsx)(Z.Z, {
          className: x.userInfoText,
          userBio: null !== (n = null == h ? void 0 : h.bio) && void 0 !== n ? n : "",
          userId: i.id
        })]
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: x.userInfoSectionHeader,
          children: N.Z.Messages.USER_PROFILE_MEMBER_SINCE
        }), (0, l.jsx)(_.Z, {
          userId: i.id,
          textClassName: x.userInfoText
        })]
      }), j && (0, l.jsx)("div", {
        className: x.clans,
        children: (0, l.jsx)("div", {
          className: x.userInfoText,
          children: (0, l.jsx)(u.Gd, {
            userId: i.id
          })
        })
      }), !i.isNonUserBot() && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "eyebrow",
          className: x.userInfoSectionHeader,
          children: N.Z.Messages.NOTE
        }), (0, l.jsx)(a.Z, {
          userId: i.id,
          autoFocus: g,
          className: x.note,
          onUpdate: () => T({
            action: "SET_NOTE"
          })
        })]
      })]
    }), (0, l.jsx)(m.OA, {
      ref: O,
      connectedAccounts: U,
      theme: A,
      locale: M,
      className: x.userInfoSection,
      userId: i.id
    })]
  })
}