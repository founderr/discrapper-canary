n.d(s, {
  Z: function() {
return h;
  }
});
var i = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  r = n(666520),
  a = n(580552),
  d = n(169559),
  c = n(369077),
  u = n(706454),
  _ = n(246946),
  I = n(785717),
  f = n(648067),
  E = n(588822),
  m = n(900927),
  x = n(652853),
  S = n(335191),
  v = n(988246),
  Z = n(689938),
  p = n(678108);

function h(e) {
  var s;
  let {
user: n,
displayProfile: h,
autoFocusNote: T = !1,
scrollToConnections: g = !1
  } = e, {
trackUserProfileAction: N
  } = (0, I.KZ)(), j = (0, t.e7)([_.Z], () => _.Z.hidePersonalInformation), {
theme: C
  } = (0, x.z)(), A = (0, t.e7)([u.default], () => u.default.locale), R = (0, d.Z)('user_profile'), O = (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' || (0, a.Z)(n.id), L = (0, f.Z)(n.id), M = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (g) {
  var e;
  null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView();
}
  }, [g]), j) ? (0, i.jsx)(v.Z, {}) : (0, i.jsxs)(o.ScrollerThin, {
fade: !0,
className: p.infoScroller,
children: [
  (0, i.jsxs)('div', {
    className: p.userInfoSection,
    children: [
      O && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: p.userInfoSectionHeader,
            children: Z.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, i.jsx)(E.Z, {
            className: p.userInfoText,
            userBio: null !== (s = null == h ? void 0 : h.bio) && void 0 !== s ? s : '',
            userId: n.id
          })
        ]
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: p.userInfoSectionHeader,
            children: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, i.jsx)(m.Z, {
            userId: n.id,
            textClassName: p.userInfoText
          })
        ]
      }),
      R && (0, i.jsx)('div', {
        className: p.clans,
        children: (0, i.jsx)('div', {
          className: p.userInfoText,
          children: (0, i.jsx)(c.Gd, {
            userId: n.id
          })
        })
      }),
      !n.isNonUserBot() && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: p.userInfoSectionHeader,
            children: Z.Z.Messages.NOTE
          }),
          (0, i.jsx)(r.Z, {
            userId: n.id,
            autoFocus: T,
            className: p.note,
            onUpdate: () => N({
              action: 'SET_NOTE'
            })
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(S.OA, {
    ref: M,
    connectedAccounts: L,
    theme: C,
    locale: A,
    className: p.userInfoSection,
    userId: n.id
  })
]
  });
}