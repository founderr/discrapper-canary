n.d(t, {
  Z: function() {
return R;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(570140),
  l = n(100527),
  u = n(605236),
  c = n(837741),
  d = n(98278),
  _ = n(804545),
  E = n(311476),
  f = n(587446),
  h = n(996073),
  p = n(153124),
  m = n(327943),
  I = n(997945),
  T = n(401460),
  g = n(441319),
  S = n(981631),
  A = n(921944),
  N = n(526761),
  v = n(689938),
  O = n(172415);

function R(e) {
  let {
className: t,
disabled: R,
isEditor: C,
renderCTAButtons: y
  } = e, [D, L, b] = (0, a.Wu)([m.Z], () => [
m.Z.getCurrentDesktopIcon(),
m.Z.isEditorOpen,
m.Z.isUpsellPreview
  ]), {
enabled: M
  } = E.Z.getCurrentConfig({
location: 'UserSettingsAppearanceInAppIcon'
  }, {
autoTrackExposure: b,
disable: !b
  }), P = i.useRef(null);
  (0, h.Z)(P, N.h1.CUSTOM_APP_ICONS);
  let U = (0, p.Dt)(),
w = (0, s.useRadioGroup)({
  orientation: 'horizontal',
  labelledBy: U
}),
x = e => {
  if (M && !C && e !== I.aH.DEFAULT) {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('69052').then(n.bind(n, 184250));
      return t => (0, r.jsx)(e, {
        analyticsSource: l.Z.APP_ICON_SELECTOR,
        analyticsLocation: {
          section: S.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
          object: S.qAy.BUTTON_ICON
        },
        ...t
      });
    });
    return;
  }
  o.Z.dispatch({
    type: 'APP_ICON_UPDATED',
    id: e
  });
  let t = I.Mw.get(e);
  null != t && (0, u.EW)(t, {
    dismissAction: A.L.TAKE_ACTION
  });
},
G = 'AppIconSelectionGroup',
{
  enabled: k
} = (0, c.J)({
  location: G
}),
{
  enabled: B
} = (0, _._)({
  location: G
}),
F = (e, t) => {
  let n = !1;
  switch (t) {
    case I.Ru.BLURPLE_TWILIGHT:
      n = k;
      break;
    case I.Ru.IN_RAINBOWS:
    case I.Ru.MIDNIGHT_PRISM:
    case I.Ru.COLOR_WAVE:
      n = B;
      break;
    default:
      n = !0;
  }
  return n && !0 !== e;
},
V = i.useMemo(() => e => {
  let t = I.Mw.get(e),
    n = null != t && !(0, u.un)(t);
  return R && n && setTimeout(() => (0, u.EW)(t, {
    dismissAction: A.L.AUTO_DISMISS
  }), 5000), n;
}, [R]);
  return (0, r.jsx)('div', {
ref: P,
children: (0, r.jsx)('div', {
  ...w,
  className: O.__invalid_container,
  children: (0, r.jsxs)('div', {
    className: t,
    children: [
      (0, r.jsxs)('div', {
        className: O.header,
        children: [
          (0, r.jsxs)('div', {
            className: O.headings,
            children: [
              L ? null : (0, r.jsxs)('div', {
                className: O.title,
                children: [
                  (0, r.jsx)(s.Heading, {
                    variant: 'text-md/medium',
                    children: v.Z.Messages.APP_ICON_SETTINGS_TITLE
                  }),
                  !M && (0, r.jsx)(f.Z, {
                    className: O.premiumIcon
                  })
                ]
              }),
              M ? (0, r.jsxs)('div', {
                className: O.description,
                children: [
                  (0, r.jsx)(s.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: O.nitroWheel
                  }),
                  (0, r.jsx)(s.Heading, {
                    variant: 'text-sm/normal',
                    children: v.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
                      onClick: d.z
                    })
                  })
                ]
              }) : (0, r.jsx)(s.Heading, {
                variant: 'text-sm/normal',
                children: v.Z.Messages.APP_ICON_SETTINGS_DESCRIPTION
              })
            ]
          }),
          null == y ? void 0 : y()
        ]
      }),
      (0, r.jsx)('div', {
        className: O.presets,
        children: g.UZ.filter(e => {
          let {
            isHidden: t,
            id: n
          } = e;
          return F(t, n);
        }).map((e, t) => (0, r.jsx)(T.Z, {
          icon: e,
          isSelected: D === e.id,
          onSelect: e => x(e),
          disabled: R,
          tabIndex: 0 !== t || R ? void 0 : 0,
          isNew: V(e.id),
          locked: M && !C && e.id !== I.aH.DEFAULT
        }, e.id))
      })
    ]
  })
})
  });
}