i.d(n, {
  Z: function() {
return p;
  }
});
var s = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(666520),
  r = i(580552),
  d = i(169559),
  c = i(369077),
  u = i(706454),
  I = i(246946),
  _ = i(785717),
  f = i(648067),
  m = i(588822),
  E = i(900927),
  x = i(652853),
  v = i(335191),
  Z = i(988246),
  h = i(689938),
  S = i(678108);

function p(e) {
  var n;
  let {
user: i,
displayProfile: p,
autoFocusNote: g = !1,
scrollToConnections: j = !1
  } = e, {
trackUserProfileAction: N
  } = (0, _.KZ)(), T = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: C
  } = (0, x.z)(), A = (0, t.e7)([u.default], () => u.default.locale), y = (0, d.Z)('user_profile'), R = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, r.Z)(i.id), O = (0, f.Z)(i.id), L = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (j) {
  var e;
  null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView();
}
  }, [j]), T) ? (0, s.jsx)(Z.Z, {}) : (0, s.jsxs)(o.ScrollerThin, {
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
            userBio: null !== (n = null == p ? void 0 : p.bio) && void 0 !== n ? n : '',
            userId: i.id
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
            userId: i.id,
            textClassName: S.userInfoText
          })
        ]
      }),
      y && (0, s.jsx)('div', {
        className: S.clans,
        children: (0, s.jsx)('div', {
          className: S.userInfoText,
          children: (0, s.jsx)(c.Gd, {
            userId: i.id
          })
        })
      }),
      !i.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: S.userInfoSectionHeader,
            children: h.Z.Messages.NOTE
          }),
          (0, s.jsx)(a.Z, {
            userId: i.id,
            autoFocus: g,
            className: S.note,
            onUpdate: () => N({
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
    userId: i.id
  })
]
  });
}