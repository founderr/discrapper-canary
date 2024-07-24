i.d(s, {
  Z: function() {
return p;
  }
});
var n = i(735250),
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
  S = i(689938),
  h = i(853831);

function p(e) {
  var s;
  let {
user: i,
displayProfile: p,
autoFocusNote: j = !1,
scrollToConnections: T = !1
  } = e, {
trackUserProfileAction: g
  } = (0, _.KZ)(), N = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: C
  } = (0, x.z)(), A = (0, t.e7)([u.default], () => u.default.locale), L = (0, d.Z)('user_profile'), O = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, r.Z)(i.id), R = (0, f.Z)(i.id), U = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (T) {
  var e;
  null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
}
  }, [T]), N) ? (0, n.jsx)(Z.Z, {}) : (0, n.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.infoScroller,
children: [
  (0, n.jsxs)('div', {
    className: h.userInfoSection,
    children: [
      O && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: S.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, n.jsx)(m.Z, {
            className: h.userInfoText,
            userBio: null !== (s = null == p ? void 0 : p.bio) && void 0 !== s ? s : '',
            userId: i.id
          })
        ]
      }),
      (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: S.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, n.jsx)(E.Z, {
            userId: i.id,
            textClassName: h.userInfoText
          })
        ]
      }),
      L && (0, n.jsx)('div', {
        className: h.clans,
        children: (0, n.jsx)('div', {
          className: h.userInfoText,
          children: (0, n.jsx)(c.Gd, {
            userId: i.id
          })
        })
      }),
      !i.isNonUserBot() && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: S.Z.Messages.NOTE
          }),
          (0, n.jsx)(a.Z, {
            userId: i.id,
            autoFocus: j,
            className: h.note,
            onUpdate: () => g({
              action: 'SET_NOTE'
            })
          })
        ]
      })
    ]
  }),
  (0, n.jsx)(v.OA, {
    ref: U,
    connectedAccounts: R,
    theme: C,
    locale: A,
    className: h.userInfoSection,
    userId: i.id
  })
]
  });
}