n.d(i, {
  Z: function() {
return p;
  }
});
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  a = n(666520),
  r = n(580552),
  d = n(169559),
  c = n(369077),
  u = n(706454),
  I = n(246946),
  _ = n(785717),
  f = n(648067),
  m = n(588822),
  E = n(900927),
  x = n(652853),
  v = n(335191),
  Z = n(988246),
  h = n(689938),
  S = n(678108);

function p(e) {
  var i;
  let {
user: n,
displayProfile: p,
autoFocusNote: g = !1,
scrollToConnections: j = !1
  } = e, {
trackUserProfileAction: T
  } = (0, _.KZ)(), N = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: C
  } = (0, x.z)(), A = (0, t.e7)([u.default], () => u.default.locale), y = (0, d.Z)('user_profile'), R = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, r.Z)(n.id), O = (0, f.Z)(n.id), L = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (j) {
  var e;
  null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView();
}
  }, [j]), N) ? (0, s.jsx)(Z.Z, {}) : (0, s.jsxs)(o.ScrollerThin, {
fade: !0,
className: S.infoScroller,
children: [
  (0, s.jsxs)('div', {
    className: S.userInfoSection,
    children: [
      R && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: S.userInfoSectionHeader,
            children: h.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, s.jsx)(m.Z, {
            className: S.userInfoText,
            userBio: null !== (i = null == p ? void 0 : p.bio) && void 0 !== i ? i : '',
            userId: n.id
          })
        ]
      }),
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: S.userInfoSectionHeader,
            children: h.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, s.jsx)(E.Z, {
            userId: n.id,
            textClassName: S.userInfoText
          })
        ]
      }),
      y && (0, s.jsx)('div', {
        className: S.clans,
        children: (0, s.jsx)('div', {
          className: S.userInfoText,
          children: (0, s.jsx)(c.Gd, {
            userId: n.id
          })
        })
      }),
      !n.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: S.userInfoSectionHeader,
            children: h.Z.Messages.NOTE
          }),
          (0, s.jsx)(a.Z, {
            userId: n.id,
            autoFocus: g,
            className: S.note,
            onUpdate: () => T({
              action: 'SET_NOTE'
            })
          })
        ]
      })
    ]
  }),
  (0, s.jsx)(v.OA, {
    ref: L,
    connectedAccounts: O,
    theme: C,
    locale: A,
    className: S.userInfoSection,
    userId: n.id
  })
]
  });
}