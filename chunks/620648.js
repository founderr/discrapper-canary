n.d(s, {
  Z: function() {
return T;
  }
});
var i = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(481060),
  r = n(666520),
  a = n(580552),
  d = n(169559),
  c = n(369077),
  u = n(706454),
  I = n(246946),
  _ = n(785717),
  f = n(648067),
  E = n(588822),
  m = n(900927),
  S = n(652853),
  Z = n(335191),
  x = n(988246),
  v = n(689938),
  h = n(678108);

function T(e) {
  var s;
  let {
user: n,
displayProfile: T,
autoFocusNote: p = !1,
scrollToConnections: g = !1
  } = e, {
trackUserProfileAction: N
  } = (0, _.KZ)(), C = (0, o.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: j
  } = (0, S.z)(), A = (0, o.e7)([u.default], () => u.default.locale), O = (0, d.Z)('user_profile'), R = (null == T ? void 0 : T.bio) != null && (null == T ? void 0 : T.bio) !== '' || (0, a.Z)(n.id), L = (0, f.Z)(n.id), U = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (g) {
  var e;
  null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
}
  }, [g]), C) ? (0, i.jsx)(x.Z, {}) : (0, i.jsxs)(t.ScrollerThin, {
fade: !0,
className: h.infoScroller,
children: [
  (0, i.jsxs)('div', {
    className: h.userInfoSection,
    children: [
      R && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, i.jsx)(E.Z, {
            className: h.userInfoText,
            userBio: null !== (s = null == T ? void 0 : T.bio) && void 0 !== s ? s : '',
            userId: n.id
          })
        ]
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, i.jsx)(m.Z, {
            userId: n.id,
            textClassName: h.userInfoText
          })
        ]
      }),
      O && (0, i.jsx)('div', {
        className: h.clans,
        children: (0, i.jsx)('div', {
          className: h.userInfoText,
          children: (0, i.jsx)(c.Gd, {
            userId: n.id
          })
        })
      }),
      !n.isNonUserBot() && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.NOTE
          }),
          (0, i.jsx)(r.Z, {
            userId: n.id,
            autoFocus: p,
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
    connectedAccounts: L,
    theme: j,
    locale: A,
    className: h.userInfoSection,
    userId: n.id
  })
]
  });
}