t.d(n, {
  Z: function() {
return j;
  }
}), t(47120);
var l = t(735250),
  s = t(470079),
  a = t(120356),
  i = t.n(a),
  r = t(512722),
  o = t.n(r),
  u = t(848246),
  c = t(442837),
  d = t(481060),
  m = t(410575),
  E = t(2052),
  _ = t(924557),
  S = t(1163),
  g = t(594174),
  h = t(285952),
  C = t(672752),
  N = t(74538),
  Z = t(451467),
  I = t(122186),
  x = t(37113),
  f = t(981631),
  A = t(474936),
  R = t(689938),
  T = t(1871),
  v = t(631083),
  L = t(549856);

function M(e) {
  let {
analyticsLocation: n,
onClose: s
  } = e;
  (0, d.openModalLazy)(async () => {
let {
  default: e
} = await t.e('28479').then(t.bind(t, 78865));
return t => (0, l.jsx)(e, {
  ...t,
  onCloseParent: s,
  analyticsSource: n
});
  });
}

function p() {
  return (0, l.jsxs)('div', {
className: v.toolTipTextContainer,
children: [
  (0, l.jsx)(d.NitroWheelIcon, {
    size: 'md',
    color: C.JX.PREMIUM_TIER_2,
    className: i()(v.premiumIcon)
  }),
  (0, l.jsx)(d.Text, {
    className: v.upsellText,
    variant: 'text-sm/medium',
    children: R.Z.Messages.UNLOCK_WITH_NITRO
  })
]
  });
}

function O(e) {
  let n, t, {
  type: s,
  selected: a,
  needsPremium: r,
  needsDemo: o,
  analyticsLocation: u,
  onClick: c,
  onClose: m,
  setIsHovering: E
} = e,
{
  value: _,
  label: S
} = s;
  return r ? (n = (0, l.jsx)(d.TooltipContainer, {
tooltipClassName: v.tooltip,
spacing: 6,
'aria-label': R.Z.Messages.UNLOCK_WITH_NITRO,
text: (0, l.jsx)(p, {}),
children: (0, l.jsx)('div', {
  className: v.textContainer,
  onMouseEnter: () => E(!0),
  onMouseLeave: () => E(!1),
  children: (0, l.jsx)(d.Text, {
    variant: 'text-xs/bold',
    className: i()(v.selectorNitroText, v.enhancedSelectorNitroText),
    children: S
  })
})
  }), t = () => M({
analyticsLocation: u,
onClose: m
  })) : (n = (0, l.jsx)('div', {
className: v.textContainer,
children: (0, l.jsx)(d.Text, {
  variant: 'text-xs/normal',
  className: i()(v.selectorText, {
    [v.enhancedSelectorNitroText]: o
  }),
  children: S
})
  }), t = () => c(_)), {
content: n,
className: i()(v.selectorButton, {
  [v.selectorButtonSelected]: a,
  [v.perksDemo]: o,
  [v.premiumUpsell]: r
}),
onClick: t
  };
}

function j(e) {
  let {
onClose: n,
selectedPreset: t,
selectedResolution: a,
selectedFPS: i,
onResolutionChange: r,
onFPSChange: C,
onPresetChange: p,
targetGuildPremiumTier: j,
captureDeviceSelected: P
  } = e, D = (0, c.e7)([g.default], () => {
let e = g.default.getCurrentUser();
return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
  }), G = N.ZP.canStreamQuality(N.U2.MID, D), {
location: U
  } = (0, E.O)(), b = (0, _.Zq)({
autoTrackExposure: !1
  }), w = (0, N.I5)(D, A.p9.TIER_1);
  S.Z.useExperiment({
location: 'Go Live Modal'
  }, {
autoTrackExposure: !0,
disable: w
  });
  let B = (0, N.So)(u.q.STREAM_HIGH_QUALITY),
y = !G && !b || B,
[V, k] = s.useState(!1),
H = P ? x.z8 : x.WC,
W = {
  ...U,
  section: f.jXE.STREAM_SETTINGS
},
F = (0, l.jsx)(d.ButtonGroup, {
  buttons: H.map(e => O({
    type: e,
    selected: e.value === a,
    needsPremium: !(0, Z.Z)(t, e.value, i, D, j),
    needsDemo: B && e.value !== x.LY.RESOLUTION_720,
    analyticsLocation: W,
    onClick: () => r(e.value),
    onClose: n,
    setIsHovering: k
  }))
}),
z = (0, l.jsx)(d.ButtonGroup, {
  buttons: x.k0.map(e => O({
    type: e,
    selected: e.value === i,
    needsPremium: !(0, Z.Z)(t, a, e.value, D, j),
    needsDemo: B && e.value === x.ws.FPS_60,
    analyticsLocation: W,
    onClick: () => C(e.value),
    onClose: n,
    setIsHovering: k
  }))
}),
K = [{
    value: x.tI.PRESET_VIDEO,
    label: R.Z.Messages.STREAM_PRESET_VIDEO
  },
  ...P ? [] : [{
    value: x.tI.PRESET_DOCUMENTS,
    label: R.Z.Messages.STREAM_PRESET_DOCUMENTS
  }],
  {
    value: x.tI.PRESET_CUSTOM,
    label: R.Z.Messages.STREAM_PRESET_CUSTOM
  }
],
Y = t === x.tI.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsx)(h.Z, {
      children: (0, l.jsx)(d.FormItem, {
        title: R.Z.Messages.STREAM_RESOLUTION,
        titleClassName: T.formItemTitleSlim,
        className: v.documentModeGroup,
        children: (0, l.jsx)(d.Text, {
          variant: 'text-xs/normal',
          children: R.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: i
          })
        })
      })
    }),
    y ? (0, l.jsx)(I.Z, {
      message: R.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: n,
      openStreamUpsellModal: M
    }) : null
  ]
}) : (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsxs)(h.Z, {
      children: [
        (0, l.jsx)(d.FormItem, {
          title: R.Z.Messages.STREAM_RESOLUTION,
          className: v.settingsGroup,
          titleClassName: T.formItemTitleSlim,
          children: F
        }),
        (0, l.jsx)(d.FormItem, {
          title: R.Z.Messages.SCREENSHARE_FRAME_RATE,
          className: v.settingsGroup,
          titleClassName: T.formItemTitleSlim,
          children: z
        })
      ]
    }),
    y ? (0, l.jsx)(I.Z, {
      onClose: n,
      openStreamUpsellModal: M,
      glow: V
    }) : null
  ]
});
  return (0, l.jsx)(m.Z, {
...W,
children: (0, l.jsx)(d.FormItem, {
  title: R.Z.Messages.STREAM_QUALITY,
  titleClassName: T.formItemTitle,
  className: T.modalContent,
  children: (0, l.jsxs)('div', {
    className: v.qualitySettingsContainer,
    children: [
      (0, l.jsx)(d.SingleSelect, {
        value: t,
        className: L.marginTop8,
        options: K,
        onChange: e => p(e)
      }),
      Y
    ]
  })
})
  });
}