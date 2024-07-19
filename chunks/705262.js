n.d(t, {
  Yk: function() {
return Y;
  },
  yH: function() {
return r;
  }
}), n(627341), n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(278074),
  c = n(442837),
  d = n(524437),
  _ = n(481060),
  E = n(153867),
  f = n(607070),
  h = n(100527),
  p = n(906732),
  m = n(540059),
  I = n(605236),
  T = n(837741),
  g = n(98278),
  S = n(639119),
  A = n(311476),
  N = n(165583),
  v = n(587446),
  O = n(781391),
  R = n(210887),
  C = n(740492),
  y = n(153124),
  D = n(626135),
  L = n(238302),
  b = n(514361),
  M = n(583901),
  P = n(469115),
  U = n(981631),
  w = n(921944),
  x = n(474936),
  G = n(874893),
  k = n(526761),
  B = n(231338),
  F = n(689938),
  V = n(809728);
(i = r || (r = {})).EDITOR = 'EDITOR', i.SETTINGS = 'SETTINGS';
let H = Object.freeze({
EDITOR: k.fy.SLOW_USER_ACTION,
SETTINGS: k.fy.INFREQUENT_USER_ACTION
  }),
  Z = s.createContext({}),
  Y = e => {
let {
  isPersisted: t,
  themeName: n,
  analyticsLocations: r
} = e;
D.default.track(U.rMx.CLIENT_THEME_UPDATED, {
  feature_name: x.QP.CLIENT_THEME,
  theme_name: n,
  is_persisted: t,
  location_stack: r
});
  },
  j = e => {
let {
  type: t,
  isPreview: n,
  isCoachmark: r
} = e, {
  enabled: i
} = A.Z.useExperiment({
  location: 'GradientSelectorsTitle'
}, {
  autoTrackExposure: !1,
  disable: !n
}), s = (0, u.EQ)({
  type: t,
  isPreview: n,
  isCoachmark: r,
  appearanceUpsellExperimentEnabled: i
}).with({
  type: 'EDITOR',
  isCoachmark: !0,
  isPreview: !0
}, () => F.Z.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
  type: 'EDITOR',
  isCoachmark: !0
}, () => F.Z.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).with({
  appearanceUpsellExperimentEnabled: !0
}, () => F.Z.Messages.THEME).otherwise(() => F.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
return (0, a.jsxs)('div', {
  className: V.title,
  children: [
    (0, a.jsx)(_.Heading, {
      'aria-label': s,
      variant: 'text-md/medium',
      children: s
    }),
    !i && (0, a.jsx)(v.Z, {
      className: V.premiumIcon
    })
  ]
});
  },
  W = e => {
var t, n;
let {
  type: r,
  isPreview: i,
  isCoachmark: s
} = e, o = (null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === x.Si.TIER_2, {
  enabled: l
} = A.Z.useExperiment({
  location: 'GradientSelectorsTitle'
}, {
  autoTrackExposure: !1,
  disable: !i
});
if (o && i)
  return null;
let c = (0, u.EQ)({
  type: r,
  isPreview: i,
  isCoachmark: s
}).with({
  type: 'EDITOR',
  isPreview: !0
}, () => F.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
  onPremiumClick: g.z
})).with({
  type: 'EDITOR',
  isCoachmark: !0
}, () => F.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
  type: 'EDITOR',
  isPreview: !1
}, () => F.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
  isPreview: !0
}, () => F.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
  onPremiumClick: g.z
})).otherwise(() => F.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
return l ? (0, a.jsxs)('div', {
  className: V.description,
  children: [
    (0, a.jsx)(_.NitroWheelIcon, {
      size: 'md',
      color: 'currentColor',
      className: V.nitroWheel
    }),
    (0, a.jsx)(_.Heading, {
      variant: 'text-sm/normal',
      children: F.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
        onClick: g.z
      })
    })
  ]
}) : (0, a.jsx)(_.Heading, {
  variant: 'text-sm/normal',
  children: c
});
  },
  K = e => {
var t, n;
let {
  renderCTAButtons: r
} = e, {
  type: i
} = s.useContext(Z), [o, l] = (0, c.Wu)([b.Z], () => [
  b.Z.isPreview,
  b.Z.isCoachmark
]), u = (null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === x.Si.TIER_2;
return (0, a.jsx)(a.Fragment, {
  children: 'EDITOR' === i && o && u ? (0, a.jsx)(N.ZP, {
    type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
    subscriptionTier: x.Si.TIER_2,
    children: F.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
      onPremiumClick: g.z
    })
  }) : (0, a.jsxs)('div', {
    className: V.header,
    children: [
      (0, a.jsxs)('div', {
        className: V.headings,
        children: [
          (0, a.jsx)(j, {
            type: i,
            isPreview: o,
            isCoachmark: l
          }),
          (0, a.jsx)(W, {
            type: i,
            isPreview: o,
            isCoachmark: l
          })
        ]
      }),
      null == r ? void 0 : r()
    ]
  })
});
  },
  z = e => {
let {
  disabled: t
} = e, {
  type: r,
  delay: i
} = s.useContext(Z), {
  analyticsLocations: o
} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [l, u] = (0, c.Wu)([b.Z], () => {
  var e;
  return [
    b.Z.isPreview,
    null === (e = b.Z.gradientPreset) || void 0 === e ? void 0 : e.id
  ];
}), [m, g] = s.useState(!1), [S, N] = s.useState(-1), v = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), {
  enabled: R
} = (0, T.J)({
  location: 'GradientSelectors'
}), C = s.useMemo(() => e => {
  let n = P.sJ.get(e.id),
    r = null != n && !(0, I.un)(n);
  return t && r && setTimeout(() => (0, I.EW)(n, {
    dismissAction: w.L.AUTO_DISMISS
  }), 5000), r;
}, [t]);
s.useEffect(() => {
  (S === P.XV.length - (R ? 2 : 3) && 'EDITOR' === r || u === d.Us.EASTER_EGG) && g(!0);
}, [
  S,
  r,
  u,
  R
]);
let {
  enabled: y
} = A.Z.useExperiment({
  location: 'useGradientSelectors'
}, {
  autoTrackExposure: !1
}), D = (e, t) => {
  (0, L.zO)(e.id), Y({
    isPersisted: !l,
    analyticsLocations: o,
    themeName: d.Us[e.id]
  });
  let s = P.sJ.get(e.id);
  if (null != s && !(0, I.un)(s) && (0, I.EW)(s, {
      dismissAction: w.L.TAKE_ACTION
    }), l) {
    (0, O.hi)(G.K.OFF), 'SETTINGS' === r && y && (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('68192').then(n.bind(n, 742234));
      return t => (0, a.jsx)(e, {
        analyticsSource: h.Z.CLIENT_THEMES_THEME_SELECTOR,
        analyticsLocation: {
          section: U.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
          object: U.qAy.BUTTON_ICON
        },
        ...t,
        onClose: () => ((0, L.kj)(), t.onClose())
      });
    }, {
      onCloseCallback: L.kj
    });
    return;
  }
  if ((0, E.ZI)({
      backgroundGradientPresetId: e.id,
      theme: e.theme
    }, i), null != t) {
    if (m && g(!1), t <= S || 0 === t) {
      N(0);
      return;
    }
    N(e => e + 1);
  }
};
return (0, a.jsxs)(a.Fragment, {
  children: [
    P.XV.filter(e => {
      let {
        id: t
      } = e;
      return t !== d.Us.EASTER_EGG && (t !== d.Us.BLURPLE_TWILIGHT || R);
    }).map((e, n) => (0, a.jsx)(M.DR, {
      preset: e,
      isSelected: u === e.id,
      onSelect: () => D(e, n),
      disabled: t,
      tabIndex: 0 !== n || t ? void 0 : 0,
      showBadge: C(e),
      showLockedBadge: 'SETTINGS' === r && y && l
    }, e.id)),
    (() => {
      if (!m)
        return null;
      let e = P.qt[d.Us.EASTER_EGG];
      if (null == e)
        return null;
      async function t() {
        let {
          default: e
        } = await n.e('5217').then(n.t.bind(n, 801048, 19));
        return e;
      }
      return (0, a.jsxs)('div', {
        className: V.easterEggSelection,
        children: [
          (0, a.jsx)(M.DR, {
            preset: e,
            isSelected: u === d.Us.EASTER_EGG,
            onSelect: () => D(e)
          }),
          (0, a.jsx)(_.LottieAnimation, {
            importData: t,
            shouldAnimate: !v,
            className: V.sparkles
          })
        ]
      });
    })()
  ]
});
  },
  q = e => {
let {
  systemSelectorFirst: t
} = e, {
  delay: n
} = s.useContext(Z), {
  analyticsLocations: r
} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [i, o, l] = (0, c.Wu)([
  R.Z,
  C.ZP,
  b.Z
], () => [
  R.Z.theme,
  null == b.Z.gradientPreset,
  C.ZP.useSystemTheme === G.K.ON
]), u = e => {
  (0, L.xs)(), Y({
    isPersisted: !0,
    analyticsLocations: r,
    themeName: 'default '.concat(e)
  }), (0, E.ZI)({
    theme: e
  }, n);
}, d = (0, m.Q)('appearance_settings');
return (0, a.jsxs)(a.Fragment, {
  children: [
    t && (0, a.jsx)(M.bD, {
      theme: 'system',
      isSelected: o && l,
      onSelect: () => u('system')
    }),
    (0, a.jsx)(M.bD, {
      theme: B.BR.LIGHT,
      isSelected: o && !l && i === B.BR.LIGHT,
      onSelect: () => u(B.BR.LIGHT)
    }),
    (0, a.jsx)(M.bD, {
      theme: B.BR.DARK,
      isSelected: o && !l && i === B.BR.DARK,
      onSelect: () => u(B.BR.DARK)
    }),
    d && (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(M.bD, {
          theme: B.BR.DARKER,
          isSelected: o && !l && i === B.BR.DARKER,
          onSelect: () => u(B.BR.DARKER)
        }),
        (0, a.jsx)(M.bD, {
          theme: B.BR.MIDNIGHT,
          isSelected: o && !l && i === B.BR.MIDNIGHT,
          onSelect: () => u(B.BR.MIDNIGHT)
        })
      ]
    }),
    !t && (0, a.jsx)(M.bD, {
      theme: 'system',
      isSelected: o && l,
      onSelect: () => u('system')
    })
  ]
});
  },
  Q = e => {
let {
  type: t,
  children: n
} = e, r = (0, y.Dt)(), i = (0, _.useRadioGroup)({
  orientation: 'horizontal',
  labelledBy: r
}), o = s.useMemo(() => ({
  type: t,
  delay: H[t]
}), [t]);
return (0, a.jsx)(Z.Provider, {
  value: o,
  children: (0, a.jsx)('div', {
    ...i,
    className: V.__invalid_container,
    children: n
  })
});
  };
Q.Basic = e => {
  let {
className: t
  } = e;
  return (0, a.jsx)('section', {
className: l()(V.presets, t),
children: (0, a.jsx)(q, {})
  });
}, Q.Gradient = e => {
  let {
className: t,
renderCTAButtons: n,
disabled: r = !1
  } = e;
  return (0, a.jsxs)('section', {
className: t,
children: [
  (0, a.jsx)(K, {
    renderCTAButtons: n
  }),
  (0, a.jsx)('div', {
    className: V.presets,
    children: (0, a.jsx)(z, {
      disabled: r
    })
  })
]
  });
}, Q.BasicAndGradient = e => {
  let {
className: t,
renderCTAButtons: n
  } = e;
  return (0, a.jsxs)('section', {
className: t,
children: [
  (0, a.jsx)(K, {
    renderCTAButtons: n
  }),
  (0, a.jsxs)('div', {
    className: V.presets,
    children: [
      (0, a.jsx)(q, {
        systemSelectorFirst: !0
      }),
      (0, a.jsx)(z, {
        disabled: !1
      })
    ]
  })
]
  });
}, t.ZP = Q;