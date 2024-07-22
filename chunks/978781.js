n.d(t, {
  Z: function() {
return L;
  },
  _: function() {
return r;
  }
}), n(627341), n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(278074),
  l = n(442837),
  u = n(481060),
  c = n(230711),
  d = n(351773),
  _ = n(94795),
  E = n(327943),
  f = n(539873),
  h = n(238302),
  p = n(514361),
  m = n(572397),
  I = n(705262),
  T = n(197115),
  g = n(672752),
  S = n(727939),
  A = n(981631),
  N = n(921944),
  v = n(474936),
  O = n(689938),
  R = n(440443);

function C() {
  let e = (0, m.q)();
  return s.useEffect(() => ((0, h.Kq)(), e(A.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => {
e(A.rMx.CLIENT_THEME_PREVIEW_CLOSED);
  }), [e]), (0, a.jsxs)(I.ZP, {
type: I.yH.EDITOR,
children: [
  (0, a.jsx)(I.ZP.Basic, {}),
  (0, a.jsx)(I.ZP.Gradient, {})
]
  });
}

function y() {
  return s.useEffect(() => {
(0, _.nJ)();
  }, []), (0, a.jsx)(f.Z, {
isEditor: !0
  });
}

function D(e) {
  let {
isPreview: t,
isCoachmark: n,
onClose: r
  } = e, i = s.useCallback(() => {
r(), !n && c.Z.open();
  }, [
r,
n
  ]), l = (0, o.EQ)({
isPreview: t,
isCoachmark: n
  }).with({
isCoachmark: !0
  }, () => O.Z.Messages.CLOSE).with({
isPreview: !0
  }, () => O.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => O.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
  return (0, a.jsxs)('div', {
className: R.footerContainer,
children: [
  (0, a.jsxs)('div', {
    className: R.footerLabelContainer,
    children: [
      (0, a.jsx)(u.NitroWheelIcon, {
        className: R.footerNitro,
        size: 'xs',
        color: g.JX.PREMIUM_TIER_2
      }),
      (0, a.jsx)(u.Text, {
        className: R.footerText,
        variant: 'text-sm/medium',
        children: O.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
          onClick: () => {}
        })
      })
    ]
  }),
  (0, a.jsxs)('div', {
    className: R.footerButtonContainer,
    children: [
      (0, a.jsx)(u.Button, {
        className: R.footerButton,
        color: u.ButtonColors.PRIMARY,
        onClick: i,
        children: l
      }),
      t && (0, a.jsx)(T.Z, {
        className: R.footerButton,
        subscriptionTier: v.Si.TIER_2,
        showGradient: !0,
        buttonText: O.Z.Messages.PREMIUM_UPSELL_GET_NITRO
      })
    ]
  })
]
  });
}

function L(e) {
  let {
initialTab: t,
markAsDismissed: n
  } = e, [r, i] = s.useState(t), o = s.useMemo(() => [{
  name: O.Z.Messages.THEME,
  value: 0
},
{
  name: O.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
  value: 1
}
  ], []), c = (0, l.e7)([p.Z], () => p.Z.isPreview), f = (0, l.e7)([E.Z], () => E.Z.isUpsellPreview), I = c || f, T = (0, m.J)(), g = s.useCallback(() => {
c && T(), f && (0, _.O7)();
  }, [
c,
f,
T
  ]), v = (0, d.Z)(null, I ? g : A.dG4), L = s.useCallback(() => {
(0, _.G8)(), (0, h.Mo)(), g(), null == n || n(N.L.DISMISS);
  }, [
g,
n
  ]);
  return (0, a.jsx)(S.Z, {
className: R.draggableContainer,
children: (0, a.jsxs)('div', {
  ref: v,
  className: R.container,
  children: [
    (0, a.jsxs)('div', {
      className: R.headerContainer,
      children: [
        (0, a.jsx)(u.Heading, {
          variant: 'heading-lg/extrabold',
          children: O.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_APP_ICONS_PREVIEW_TITLE
        }),
        (0, a.jsx)(u.ModalCloseButton, {
          className: R.closeContainer,
          innerClassName: R.closeInner,
          withCircleBackground: !0,
          onClick: L
        })
      ]
    }),
    (0, a.jsx)(u.SegmentedControl, {
      className: R.segmentedControl,
      options: o,
      value: r,
      onChange: e => {
        let {
          value: t
        } = e;
        return i(t);
      },
      look: 'pill'
    }),
    (0, a.jsxs)(u.Scroller, {
      className: R.scrollContainer,
      children: [
        0 === r && (0, a.jsx)(C, {}),
        1 === r && (0, a.jsx)(y, {})
      ]
    }),
    (0, a.jsx)(D, {
      isPreview: I,
      onClose: L,
      isCoachmark: !1
    })
  ]
})
  });
}
(i = r || (r = {}))[i.CLIENT_THEMES = 0] = 'CLIENT_THEMES', i[i.APP_ICONS = 1] = 'APP_ICONS';