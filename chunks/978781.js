n.d(t, {
  Z: function() {
return b;
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
  _ = n(100527),
  E = n(94795),
  f = n(327943),
  h = n(539873),
  p = n(238302),
  m = n(514361),
  I = n(572397),
  T = n(705262),
  g = n(197115),
  S = n(672752),
  A = n(727939),
  N = n(981631),
  v = n(921944),
  O = n(474936),
  R = n(689938),
  C = n(440443);

function y() {
  let e = (0, I.q)();
  return s.useEffect(() => ((0, p.Kq)(), e(N.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => {
e(N.rMx.CLIENT_THEME_PREVIEW_CLOSED);
  }), [e]), (0, a.jsx)(T.ZP, {
type: T.yH.EDITOR,
children: (0, a.jsx)(T.ZP.BasicAndGradient, {
  isEditor: !0
})
  });
}

function D() {
  return s.useEffect(() => {
(0, E.nJ)();
  }, []), (0, a.jsx)(h.Z, {
isEditor: !0
  });
}

function L(e) {
  let {
tab: t,
isPreview: r,
isCoachmark: i,
onClose: l
  } = e, d = s.useCallback(() => {
l(), !i && c.Z.open();
  }, [
l,
i
  ]), E = (0, o.EQ)({
isPreview: r,
isCoachmark: i
  }).with({
isCoachmark: !0
  }, () => R.Z.Messages.CLOSE).with({
isPreview: !0
  }, () => R.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => R.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS), f = s.useCallback(() => {
if (1 === t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('69052').then(n.bind(n, 184250));
    return t => (0, a.jsx)(e, {
      analyticsSource: _.Z.APP_ICON_EDITOR,
      analyticsLocation: {
        section: N.jXE.SETTINGS_APP_ICONS
      },
      ...t
    });
  });
  return;
}
if (0 === t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('68192').then(n.bind(n, 742234));
    return t => (0, a.jsx)(e, {
      analyticsSource: _.Z.CLIENT_THEMES_EDITOR,
      analyticsLocation: {
        section: N.jXE.SETTINGS_CLIENT_THEMES
      },
      ...t
    });
  });
  return;
}
  }, [t]);
  return (0, a.jsxs)('div', {
className: C.footerContainer,
children: [
  r && (0, a.jsxs)('div', {
    className: C.footerLabelContainer,
    children: [
      (0, a.jsx)(u.NitroWheelIcon, {
        className: C.footerNitro,
        size: 'xs',
        color: S.JX.PREMIUM_TIER_2
      }),
      (0, a.jsx)(u.Text, {
        className: C.footerText,
        variant: 'text-sm/medium',
        children: R.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
          onClick: f
        })
      })
    ]
  }),
  (0, a.jsxs)('div', {
    className: C.footerButtonContainer,
    children: [
      (0, a.jsx)(u.Button, {
        className: C.footerButton,
        color: u.ButtonColors.PRIMARY,
        onClick: d,
        children: E
      }),
      r && (0, a.jsx)(g.Z, {
        className: C.footerButton,
        subscriptionTier: O.Si.TIER_2,
        showGradient: !0,
        buttonText: R.Z.Messages.PREMIUM_UPSELL_GET_NITRO
      })
    ]
  })
]
  });
}

function b(e) {
  let {
initialTab: t,
markAsDismissed: n
  } = e, [r, i] = s.useState(t), o = s.useMemo(() => [{
  name: R.Z.Messages.THEME,
  value: 0
},
{
  name: R.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
  value: 1
}
  ], []), c = (0, l.e7)([m.Z], () => m.Z.isPreview), _ = (0, l.e7)([f.Z], () => f.Z.isUpsellPreview), h = c || _, T = (0, I.J)(), g = s.useCallback(() => {
c && T(), _ && (0, E.O7)();
  }, [
c,
_,
T
  ]), S = (0, d.Z)(null, h ? g : N.dG4), O = s.useCallback(() => {
(0, E.G8)(), (0, p.Mo)(), g(), null == n || n(v.L.DISMISS);
  }, [
g,
n
  ]);
  return (0, a.jsx)(A.Z, {
className: C.draggableContainer,
children: (0, a.jsxs)('div', {
  ref: S,
  className: C.container,
  children: [
    (0, a.jsxs)('div', {
      className: C.headerParentContainer,
      children: [
        (0, a.jsxs)('div', {
          className: C.headerContainer,
          children: [
            (0, a.jsx)(u.Heading, {
              variant: 'heading-lg/extrabold',
              children: R.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_APP_ICONS_PREVIEW_TITLE
            }),
            (0, a.jsx)(u.ModalCloseButton, {
              className: C.closeContainer,
              innerClassName: C.closeInner,
              withCircleBackground: !0,
              onClick: O
            })
          ]
        }),
        (0, a.jsx)(u.SegmentedControl, {
          options: o,
          value: r,
          onChange: e => {
            let {
              value: t
            } = e;
            return i(t);
          },
          look: 'pill'
        })
      ]
    }),
    (0, a.jsxs)(u.Scroller, {
      className: C.scrollContainer,
      children: [
        0 === r && (0, a.jsx)(y, {}),
        1 === r && (0, a.jsx)(D, {})
      ]
    }),
    (0, a.jsx)(L, {
      tab: r,
      isPreview: h,
      onClose: O,
      isCoachmark: !1
    })
  ]
})
  });
}
(i = r || (r = {}))[i.CLIENT_THEMES = 0] = 'CLIENT_THEMES', i[i.APP_ICONS = 1] = 'APP_ICONS';