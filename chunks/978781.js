n.d(t, {
  Z: function() {
return v;
  },
  _: function() {
return r;
  }
}), n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(442837),
  l = n(481060),
  u = n(351773),
  c = n(94795),
  d = n(327943),
  _ = n(539873),
  E = n(238302),
  f = n(514361),
  h = n(572397),
  p = n(705262),
  m = n(727939),
  I = n(981631),
  T = n(921944),
  g = n(689938),
  S = n(440443);

function A() {
  let e = (0, h.q)();
  return s.useEffect(() => ((0, E.Kq)(), e(I.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => {
e(I.rMx.CLIENT_THEME_PREVIEW_CLOSED);
  }), [e]), (0, a.jsxs)(p.ZP, {
type: p.yH.EDITOR,
children: [
  (0, a.jsx)(p.ZP.Basic, {}),
  (0, a.jsx)(p.ZP.Gradient, {})
]
  });
}

function N() {
  return s.useEffect(() => {
(0, c.nJ)();
  }, []), (0, a.jsx)(_.Z, {});
}

function v(e) {
  let {
initialTab: t,
markAsDismissed: n
  } = e, [r, i] = s.useState(t), _ = s.useMemo(() => [{
  name: g.Z.Messages.THEME,
  value: 0
},
{
  name: g.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
  value: 1
}
  ], []), {
isPreview: p
  } = (0, o.cj)([f.Z], () => ({
isPreview: f.Z.isPreview
  })), v = (0, h.J)(), O = s.useCallback(() => {
f.Z.isPreview && v(), d.Z.isUpsellPreview && (0, c.O7)();
  }, [v]), R = (0, u.Z)(null, p ? O : I.dG4), C = s.useCallback(() => {
(0, c.G8)(), (0, E.Mo)(), O(), null == n || n(T.L.DISMISS);
  }, [
O,
n
  ]);
  return (0, a.jsx)(m.Z, {
children: (0, a.jsxs)('div', {
  ref: R,
  className: S.container,
  children: [
    (0, a.jsxs)('div', {
      className: S.headerContainer,
      children: [
        (0, a.jsx)(l.Heading, {
          variant: 'heading-lg/extrabold',
          children: 'Nitro Preview'
        }),
        (0, a.jsx)(l.ModalCloseButton, {
          className: S.close,
          onClick: C
        })
      ]
    }),
    (0, a.jsx)(l.SegmentedControl, {
      className: S.segmentedControl,
      options: _,
      value: r,
      onChange: e => {
        let {
          value: t
        } = e;
        return i(t);
      },
      look: 'pill'
    }),
    (0, a.jsxs)(l.Scroller, {
      className: S.scrollContainer,
      children: [
        0 === r && (0, a.jsx)(A, {}),
        1 === r && (0, a.jsx)(N, {})
      ]
    })
  ]
})
  });
}
(i = r || (r = {}))[i.CLIENT_THEMES = 0] = 'CLIENT_THEMES', i[i.APP_ICONS = 1] = 'APP_ICONS';