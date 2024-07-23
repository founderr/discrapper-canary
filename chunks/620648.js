s.d(n, {
  Z: function() {
return p;
  }
});
var i = s(735250),
  l = s(470079),
  o = s(442837),
  t = s(481060),
  r = s(666520),
  a = s(580552),
  d = s(169559),
  c = s(369077),
  u = s(706454),
  I = s(246946),
  _ = s(785717),
  f = s(648067),
  E = s(588822),
  m = s(900927),
  S = s(652853),
  Z = s(335191),
  v = s(988246),
  x = s(689938),
  h = s(853831);

function p(e) {
  var n;
  let {
user: s,
displayProfile: p,
autoFocusNote: T = !1,
scrollToConnections: g = !1
  } = e, {
trackUserProfileAction: N
  } = (0, _.KZ)(), C = (0, o.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: j
  } = (0, S.z)(), A = (0, o.e7)([u.default], () => u.default.locale), O = (0, d.Z)('user_profile'), L = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, a.Z)(s.id), R = (0, f.Z)(s.id), U = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (g) {
  var e;
  null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
}
  }, [g]), C) ? (0, i.jsx)(v.Z, {}) : (0, i.jsxs)(t.ScrollerThin, {
fade: !0,
className: h.infoScroller,
children: [
  (0, i.jsxs)('div', {
    className: h.userInfoSection,
    children: [
      L && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: x.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, i.jsx)(E.Z, {
            className: h.userInfoText,
            userBio: null !== (n = null == p ? void 0 : p.bio) && void 0 !== n ? n : '',
            userId: s.id
          })
        ]
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, i.jsx)(m.Z, {
            userId: s.id,
            textClassName: h.userInfoText
          })
        ]
      }),
      O && (0, i.jsx)('div', {
        className: h.clans,
        children: (0, i.jsx)('div', {
          className: h.userInfoText,
          children: (0, i.jsx)(c.Gd, {
            userId: s.id
          })
        })
      }),
      !s.isNonUserBot() && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: x.Z.Messages.NOTE
          }),
          (0, i.jsx)(r.Z, {
            userId: s.id,
            autoFocus: T,
            className: h.note,
            onUpdate: () => N({
              action: 'SET_NOTE'
            })
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(Z.OA, {
    ref: U,
    connectedAccounts: R,
    theme: j,
    locale: A,
    className: h.userInfoSection,
    userId: s.id
  })
]
  });
}