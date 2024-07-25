n.d(t, {
  Z: function() {
return C;
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
  f = n(311476),
  h = n(587446),
  p = n(996073),
  m = n(153124),
  I = n(327943),
  T = n(997945),
  g = n(401460),
  S = n(441319),
  A = n(981631),
  N = n(921944),
  v = n(526761),
  O = n(689938),
  R = n(172415);

function C(e) {
  let {
className: t,
disabled: a,
isEditor: C,
renderCTAButtons: y
  } = e, [D, L] = (0, o.Wu)([I.Z], () => [
I.Z.getCurrentDesktopIcon(),
I.Z.isUpsellPreview
  ]), {
enabled: b
  } = f.Z.getCurrentConfig({
location: 'UserSettingsAppearanceInAppIcon'
  }, {
autoTrackExposure: L,
disable: !L
  }), M = i.useRef(null);
  (0, p.Z)(M, v.h1.CUSTOM_APP_ICONS);
  let P = (0, m.Dt)(),
U = (0, l.useRadioGroup)({
  orientation: 'horizontal',
  labelledBy: P
}),
w = e => {
  if (b && !C && e !== T.aH.DEFAULT) {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('69052').then(n.bind(n, 184250));
      return t => (0, r.jsx)(e, {
        analyticsSource: c.Z.APP_ICON_SELECTOR,
        analyticsLocation: {
          section: A.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
          object: A.qAy.BUTTON_ICON
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
  let t = T.Mw.get(e);
  null != t && (0, d.EW)(t, {
    dismissAction: N.L.TAKE_ACTION
  });
},
{
  enabled: x
} = (0, _.J)({
  location: 'AppIconSelectionGroup'
}),
G = (e, t) => {
  let n = !1;
  if (t === T.Ru.BLURPLE_TWILIGHT)
    n = x;
  else
    n = !0;
  return n && !0 !== e;
},
k = i.useMemo(() => e => {
  let t = T.Mw.get(e),
    n = null != t && !(0, d.un)(t);
  return a && n && setTimeout(() => (0, d.EW)(t, {
    dismissAction: N.L.AUTO_DISMISS
  }), 5000), n;
}, [a]);
  return (0, r.jsx)('div', {
ref: M,
children: (0, r.jsx)('div', {
  ...U,
  className: R.__invalid_container,
  children: (0, r.jsxs)('div', {
    className: t,
    children: [
      (0, r.jsxs)('div', {
        className: R.header,
        children: [
          (0, r.jsxs)('div', {
            className: R.headings,
            children: [
              !C && (0, r.jsxs)('div', {
                className: R.title,
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: 'text-md/medium',
                    children: O.Z.Messages.APP_ICON_SETTINGS_TITLE
                  }),
                  !b && (0, r.jsx)(h.Z, {
                    className: R.premiumIcon
                  })
                ]
              }),
              b ? C ? null : (0, r.jsxs)('div', {
                className: R.description,
                children: [
                  (0, r.jsx)(l.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: R.nitroWheel
                  }),
                  (0, r.jsx)(l.Heading, {
                    variant: 'text-sm/normal',
                    children: O.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
                      onClick: () => {
                        (0, E.$)();
                      }
                    })
                  })
                ]
              }) : (0, r.jsx)(l.Heading, {
                variant: 'text-sm/normal',
                children: O.Z.Messages.APP_ICON_SETTINGS_DESCRIPTION
              })
            ]
          }),
          null == y ? void 0 : y()
        ]
      }),
      (0, r.jsx)('div', {
        className: s()(R.presets, {
          [R.presetsJustified]: b && C
        }),
        children: S.UZ.filter(e => {
          let {
            isHidden: t,
            id: n
          } = e;
          return G(t, n);
        }).map((e, t) => (0, r.jsx)(g.Z, {
          icon: e,
          isSelected: D === e.id,
          onSelect: e => w(e),
          disabled: a,
          tabIndex: 0 !== t || a ? void 0 : 0,
          isNew: k(e.id),
          locked: b && !C && e.id !== T.aH.DEFAULT
        }, e.id))
      })
    ]
  })
})
  });
}