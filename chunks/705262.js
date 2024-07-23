n.d(t, {
  Yk: function() {
return Z;
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
  O = n(210887),
  R = n(740492),
  C = n(153124),
  y = n(626135),
  D = n(238302),
  L = n(514361),
  b = n(583901),
  M = n(469115),
  P = n(981631),
  U = n(921944),
  w = n(474936),
  x = n(874893),
  G = n(526761),
  k = n(231338),
  B = n(689938),
  F = n(809728);
(i = r || (r = {})).EDITOR = 'EDITOR', i.SETTINGS = 'SETTINGS';
let V = Object.freeze({
EDITOR: G.fy.SLOW_USER_ACTION,
SETTINGS: G.fy.INFREQUENT_USER_ACTION
  }),
  H = s.createContext({}),
  Z = e => {
let {
  isPersisted: t,
  themeName: n,
  analyticsLocations: r
} = e;
y.default.track(P.rMx.CLIENT_THEME_UPDATED, {
  feature_name: w.QP.CLIENT_THEME,
  theme_name: n,
  is_persisted: t,
  location_stack: r
});
  },
  Y = e => {
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
}, () => B.Z.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
  type: 'EDITOR',
  isCoachmark: !0
}, () => B.Z.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).with({
  appearanceUpsellExperimentEnabled: !0
}, () => B.Z.Messages.THEME).otherwise(() => B.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
return (0, a.jsxs)('div', {
  className: F.title,
  children: [
    (0, a.jsx)(_.Heading, {
      'aria-label': s,
      variant: 'text-md/medium',
      children: s
    }),
    !i && (0, a.jsx)(v.Z, {
      className: F.premiumIcon
    })
  ]
});
  },
  j = e => {
var t, n;
let {
  type: r,
  isPreview: i,
  isCoachmark: s
} = e, o = (null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.Si.TIER_2, {
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
}, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
  onPremiumClick: g.z
})).with({
  type: 'EDITOR',
  isCoachmark: !0
}, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
  type: 'EDITOR',
  isPreview: !1
}, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
  isPreview: !0
}, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
  onPremiumClick: g.z
})).otherwise(() => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
return l ? (0, a.jsxs)('div', {
  className: F.description,
  children: [
    (0, a.jsx)(_.NitroWheelIcon, {
      size: 'md',
      color: 'currentColor',
      className: F.nitroWheel
    }),
    (0, a.jsx)(_.Heading, {
      variant: 'text-sm/normal',
      children: B.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
        onClick: g.z
      })
    })
  ]
}) : (0, a.jsx)(_.Heading, {
  variant: 'text-sm/normal',
  children: c
});
  },
  W = e => {
var t, n;
let {
  renderCTAButtons: r
} = e, {
  type: i
} = s.useContext(H), [o, l] = (0, c.Wu)([L.Z], () => [
  L.Z.isPreview,
  L.Z.isCoachmark
]), u = (null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.Si.TIER_2;
return (0, a.jsx)(a.Fragment, {
  children: 'EDITOR' === i && o && u ? (0, a.jsx)(N.ZP, {
    type: w.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
    subscriptionTier: w.Si.TIER_2,
    children: B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
      onPremiumClick: g.z
    })
  }) : (0, a.jsxs)('div', {
    className: F.header,
    children: [
      (0, a.jsxs)('div', {
        className: F.headings,
        children: [
          (0, a.jsx)(Y, {
            type: i,
            isPreview: o,
            isCoachmark: l
          }),
          (0, a.jsx)(j, {
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
  K = e => {
let {
  disabled: t
} = e, {
  type: r,
  delay: i
} = s.useContext(H), {
  analyticsLocations: o
} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [l, u] = (0, c.Wu)([L.Z], () => {
  var e;
  return [
    L.Z.isPreview,
    null === (e = L.Z.gradientPreset) || void 0 === e ? void 0 : e.id
  ];
}), [m, g] = s.useState(!1), [S, N] = s.useState(-1), v = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), {
  enabled: O
} = (0, T.J)({
  location: 'GradientSelectors'
}), R = s.useMemo(() => e => {
  let n = M.sJ.get(e.id),
    r = null != n && !(0, I.un)(n);
  return t && r && setTimeout(() => (0, I.EW)(n, {
    dismissAction: U.L.AUTO_DISMISS
  }), 5000), r;
}, [t]);
s.useEffect(() => {
  (S === M.XV.length - (O ? 2 : 3) && 'EDITOR' === r || u === d.Us.EASTER_EGG) && g(!0);
}, [
  S,
  r,
  u,
  O
]);
let {
  enabled: C
} = A.Z.useExperiment({
  location: 'useGradientSelectors'
}, {
  autoTrackExposure: !1
}), y = (e, t) => {
  (0, D.zO)(e.id), Z({
    isPersisted: !l,
    analyticsLocations: o,
    themeName: d.Us[e.id]
  });
  let s = M.sJ.get(e.id);
  if (null != s && !(0, I.un)(s) && (0, I.EW)(s, {
      dismissAction: U.L.TAKE_ACTION
    }), l && 'SETTINGS' === r && C) {
    (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('68192').then(n.bind(n, 742234));
      return t => (0, a.jsx)(e, {
        analyticsSource: h.Z.CLIENT_THEMES_THEME_SELECTOR,
        analyticsLocation: {
          section: P.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
          object: P.qAy.BUTTON_ICON
        },
        ...t,
        onClose: () => ((0, D.kj)(), t.onClose())
      });
    }, {
      onCloseCallback: D.kj
    });
    return;
  }
  if ((0, E.ZI)({
      backgroundGradientPresetId: e.id,
      theme: e.theme,
      useSystemTheme: l ? x.K.OFF : void 0
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
    M.XV.filter(e => {
      let {
        id: t
      } = e;
      return t !== d.Us.EASTER_EGG && (t !== d.Us.BLURPLE_TWILIGHT || O);
    }).map((e, n) => (0, a.jsx)(b.DR, {
      preset: e,
      isSelected: u === e.id,
      onSelect: () => y(e, n),
      disabled: t,
      tabIndex: 0 !== n || t ? void 0 : 0,
      showBadge: R(e),
      showLockedBadge: 'SETTINGS' === r && C && l
    }, e.id)),
    (() => {
      if (!m)
        return null;
      let e = M.qt[d.Us.EASTER_EGG];
      if (null == e)
        return null;
      async function t() {
        let {
          default: e
        } = await n.e('5217').then(n.t.bind(n, 801048, 19));
        return e;
      }
      return (0, a.jsxs)('div', {
        className: F.easterEggSelection,
        children: [
          (0, a.jsx)(b.DR, {
            preset: e,
            isSelected: u === d.Us.EASTER_EGG,
            onSelect: () => y(e)
          }),
          (0, a.jsx)(_.LottieAnimation, {
            importData: t,
            shouldAnimate: !v,
            className: F.sparkles
          })
        ]
      });
    })()
  ]
});
  },
  z = e => {
let {
  systemSelectorFirst: t
} = e, {
  delay: n
} = s.useContext(H), {
  analyticsLocations: r
} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [i, o, l] = (0, c.Wu)([
  O.Z,
  R.ZP,
  L.Z
], () => [
  O.Z.theme,
  null == L.Z.gradientPreset,
  R.ZP.useSystemTheme === x.K.ON
]), u = e => {
  (0, D.xs)(), Z({
    isPersisted: !0,
    analyticsLocations: r,
    themeName: 'default '.concat(e)
  }), (0, E.ZI)({
    theme: e
  }, n);
}, d = (0, m.Q)('appearance_settings');
return (0, a.jsxs)(a.Fragment, {
  children: [
    t && (0, a.jsx)(b.bD, {
      theme: 'system',
      isSelected: o && l,
      onSelect: () => u('system')
    }),
    (0, a.jsx)(b.bD, {
      theme: k.BR.LIGHT,
      isSelected: o && !l && i === k.BR.LIGHT,
      onSelect: () => u(k.BR.LIGHT)
    }),
    (0, a.jsx)(b.bD, {
      theme: k.BR.DARK,
      isSelected: o && !l && i === k.BR.DARK,
      onSelect: () => u(k.BR.DARK)
    }),
    d && (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(b.bD, {
          theme: k.BR.DARKER,
          isSelected: o && !l && i === k.BR.DARKER,
          onSelect: () => u(k.BR.DARKER)
        }),
        (0, a.jsx)(b.bD, {
          theme: k.BR.MIDNIGHT,
          isSelected: o && !l && i === k.BR.MIDNIGHT,
          onSelect: () => u(k.BR.MIDNIGHT)
        })
      ]
    }),
    !t && (0, a.jsx)(b.bD, {
      theme: 'system',
      isSelected: o && l,
      onSelect: () => u('system')
    })
  ]
});
  },
  q = e => {
let {
  type: t,
  children: n
} = e, r = (0, C.Dt)(), i = (0, _.useRadioGroup)({
  orientation: 'horizontal',
  labelledBy: r
}), o = s.useMemo(() => ({
  type: t,
  delay: V[t]
}), [t]);
return (0, a.jsx)(H.Provider, {
  value: o,
  children: (0, a.jsx)('div', {
    ...i,
    className: F.__invalid_container,
    children: n
  })
});
  };
q.Basic = e => {
  let {
className: t
  } = e;
  return (0, a.jsx)('section', {
className: l()(F.presets, t),
children: (0, a.jsx)(z, {})
  });
}, q.Gradient = e => {
  let {
className: t,
renderCTAButtons: n,
disabled: r = !1
  } = e;
  return (0, a.jsxs)('section', {
className: t,
children: [
  (0, a.jsx)(W, {
    renderCTAButtons: n
  }),
  (0, a.jsx)('div', {
    className: F.presets,
    children: (0, a.jsx)(K, {
      disabled: r
    })
  })
]
  });
}, q.BasicAndGradient = e => {
  let {
className: t,
renderCTAButtons: n
  } = e;
  return (0, a.jsxs)('section', {
className: t,
children: [
  (0, a.jsx)(W, {
    renderCTAButtons: n
  }),
  (0, a.jsxs)('div', {
    className: F.presets,
    children: [
      (0, a.jsx)(z, {
        systemSelectorFirst: !0
      }),
      (0, a.jsx)(K, {
        disabled: !1
      })
    ]
  })
]
  });
}, t.ZP = q;