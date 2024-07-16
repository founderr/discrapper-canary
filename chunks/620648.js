n.d(i, {
  Z: function() {
return p;
  }
});
var s = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(481060),
  r = n(666520),
  a = n(580552),
  d = n(169559),
  c = n(369077),
  u = n(706454),
  I = n(246946),
  f = n(785717),
  _ = n(648067),
  E = n(588822),
  m = n(900927),
  S = n(652853),
  Z = n(335191),
  x = n(988246),
  v = n(689938),
  h = n(678108);

function p(e) {
  var i;
  let {
user: n,
displayProfile: p,
autoFocusNote: T = !1,
scrollToConnections: g = !1
  } = e, {
trackUserProfileAction: N
  } = (0, f.KZ)(), C = (0, o.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: j
  } = (0, S.z)(), A = (0, o.e7)([u.default], () => u.default.locale), U = (0, d.Z)('user_profile'), R = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, a.Z)(n.id), O = (0, _.Z)(n.id), M = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (g) {
  var e;
  null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView();
}
  }, [g]), C) ? (0, s.jsx)(x.Z, {}) : (0, s.jsxs)(t.ScrollerThin, {
fade: !0,
className: h.infoScroller,
children: [
  (0, s.jsxs)('div', {
    className: h.userInfoSection,
    children: [
      R && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, s.jsx)(E.Z, {
            className: h.userInfoText,
            userBio: null !== (i = null == p ? void 0 : p.bio) && void 0 !== i ? i : '',
            userId: n.id
          })
        ]
      }),
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, s.jsx)(m.Z, {
            userId: n.id,
            textClassName: h.userInfoText
          })
        ]
      }),
      U && (0, s.jsx)('div', {
        className: h.clans,
        children: (0, s.jsx)('div', {
          className: h.userInfoText,
          children: (0, s.jsx)(c.Gd, {
            userId: n.id
          })
        })
      }),
      !n.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.NOTE
          }),
          (0, s.jsx)(r.Z, {
            userId: n.id,
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
  (0, s.jsx)(Z.OA, {
    ref: M,
    connectedAccounts: O,
    theme: j,
    locale: A,
    className: h.userInfoSection,
    userId: n.id
  })
]
  });
}