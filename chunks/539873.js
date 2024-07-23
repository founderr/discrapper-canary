n.d(t, {
  Z: function() {
return y;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(570140),
  c = n(100527),
  d = n(605236),
  _ = n(837741),
  E = n(98278),
  f = n(804545),
  h = n(311476),
  p = n(587446),
  m = n(996073),
  I = n(153124),
  T = n(327943),
  g = n(997945),
  S = n(401460),
  A = n(441319),
  N = n(981631),
  v = n(921944),
  O = n(526761),
  R = n(689938),
  C = n(172415);

function y(e) {
  let {
className: t,
disabled: a,
isEditor: y,
renderCTAButtons: D
  } = e, [L, b, M] = (0, o.Wu)([T.Z], () => [
T.Z.getCurrentDesktopIcon(),
T.Z.isEditorOpen,
T.Z.isUpsellPreview
  ]), {
enabled: P
  } = h.Z.getCurrentConfig({
location: 'UserSettingsAppearanceInAppIcon'
  }, {
autoTrackExposure: M,
disable: !M
  }), U = i.useRef(null);
  (0, m.Z)(U, O.h1.CUSTOM_APP_ICONS);
  let w = (0, I.Dt)(),
x = (0, l.useRadioGroup)({
  orientation: 'horizontal',
  labelledBy: w
}),
G = e => {
  if (P && !y && e !== g.aH.DEFAULT) {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('69052').then(n.bind(n, 184250));
      return t => (0, r.jsx)(e, {
        analyticsSource: c.Z.APP_ICON_SELECTOR,
        analyticsLocation: {
          section: N.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
          object: N.qAy.BUTTON_ICON
        },
        ...t
      });
    });
    return;
  }
  u.Z.dispatch({
    type: 'APP_ICON_UPDATED',
    id: e
  });
  let t = g.Mw.get(e);
  null != t && (0, d.EW)(t, {
    dismissAction: v.L.TAKE_ACTION
  });
},
k = 'AppIconSelectionGroup',
{
  enabled: B
} = (0, _.J)({
  location: k
}),
{
  enabled: F
} = (0, f._)({
  location: k
}),
V = (e, t) => {
  let n = !1;
  switch (t) {
    case g.Ru.BLURPLE_TWILIGHT:
      n = B;
      break;
    case g.Ru.IN_RAINBOWS:
    case g.Ru.MIDNIGHT_PRISM:
    case g.Ru.COLOR_WAVE:
      n = F;
      break;
    default:
      n = !0;
  }
  return n && !0 !== e;
},
H = i.useMemo(() => e => {
  let t = g.Mw.get(e),
    n = null != t && !(0, d.un)(t);
  return a && n && setTimeout(() => (0, d.EW)(t, {
    dismissAction: v.L.AUTO_DISMISS
  }), 5000), n;
}, [a]);
  return (0, r.jsx)('div', {
ref: U,
children: (0, r.jsx)('div', {
  ...x,
  className: C.__invalid_container,
  children: (0, r.jsxs)('div', {
    className: t,
    children: [
      (0, r.jsxs)('div', {
        className: C.header,
        children: [
          (0, r.jsxs)('div', {
            className: C.headings,
            children: [
              !b || P ? (0, r.jsxs)('div', {
                className: C.title,
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: 'text-md/medium',
                    children: R.Z.Messages.APP_ICON_SETTINGS_TITLE
                  }),
                  (!P || y) && (0, r.jsx)(p.Z, {
                    className: C.premiumIcon
                  })
                ]
              }) : null,
              P ? b ? null : (0, r.jsxs)('div', {
                className: C.description,
                children: [
                  (0, r.jsx)(l.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: C.nitroWheel
                  }),
                  (0, r.jsx)(l.Heading, {
                    variant: 'text-sm/normal',
                    children: R.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
                      onClick: E.z
                    })
                  })
                ]
              }) : (0, r.jsx)(l.Heading, {
                variant: 'text-sm/normal',
                children: R.Z.Messages.APP_ICON_SETTINGS_DESCRIPTION
              })
            ]
          }),
          null == D ? void 0 : D()
        ]
      }),
      (0, r.jsx)('div', {
        className: s()(C.presets, {
          [C.presetsJustified]: P && y
        }),
        children: A.UZ.filter(e => {
          let {
            isHidden: t,
            id: n
          } = e;
          return V(t, n);
        }).map((e, t) => (0, r.jsx)(S.Z, {
          icon: e,
          isSelected: L === e.id,
          onSelect: e => G(e),
          disabled: a,
          tabIndex: 0 !== t || a ? void 0 : 0,
          isNew: H(e.id),
          locked: P && !y && e.id !== g.aH.DEFAULT
        }, e.id))
      })
    ]
  })
})
  });
}