t.d(n, {
  Z: function() {
    return P
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
  S = t(736871),
  h = t(386542),
  g = t(1163),
  C = t(594174),
  Z = t(285952),
  N = t(74538),
  I = t(451467),
  x = t(122186),
  f = t(37113),
  A = t(981631),
  T = t(474936),
  R = t(689938),
  v = t(278768),
  L = t(665375),
  M = t(331651);

function p(e) {
  let {
    analyticsLocation: n,
    onClose: s
  } = e;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e("28479").then(t.bind(t, 78865));
    return t => (0, l.jsx)(e, {
      ...t,
      onCloseParent: s,
      analyticsSource: n
    })
  })
}

function O() {
  return (0, l.jsxs)("div", {
    className: L.toolTipTextContainer,
    children: [(0, l.jsx)(d.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: i()(L.premiumIcon)
    }), (0, l.jsx)(d.Text, {
      className: L.upsellText,
      variant: "text-sm/medium",
      children: R.Z.Messages.UNLOCK_WITH_NITRO
    })]
  })
}

function j(e) {
  let n, t, {
      type: s,
      selected: a,
      needsPremium: r,
      needsDemo: o,
      analyticsLocation: u,
      useGradient: c = !1,
      onClick: m,
      onClose: E,
      setIsHovering: _
    } = e,
    {
      value: S,
      label: h
    } = s;
  return o ? (n = (0, l.jsx)("div", {
    className: L.textContainer,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/bold",
      className: i()(L.selectorText, {
        [L.enhancedSelectorNitroText]: !a
      }),
      children: h
    })
  }), t = () => m(S)) : r ? (n = (0, l.jsx)(d.TooltipContainer, {
    tooltipClassName: L.tooltip,
    spacing: 6,
    "aria-label": R.Z.Messages.UNLOCK_WITH_NITRO,
    text: (0, l.jsx)(O, {}),
    children: (0, l.jsx)("div", {
      className: L.textContainer,
      onMouseEnter: () => _(!0),
      onMouseLeave: () => _(!1),
      children: (0, l.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: i()(L.selectorNitroText, {
          [L.enhancedSelectorNitroText]: c
        }),
        children: h
      })
    })
  }), t = () => p({
    analyticsLocation: u,
    onClose: E
  })) : (n = (0, l.jsx)("div", {
    className: L.textContainer,
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: L.selectorText,
      children: h
    })
  }), t = () => m(S)), {
    content: n,
    className: i()(L.selectorButton, {
      [L.selectorButtonSelected]: a,
      [L.perksDemo]: o,
      [L.premiumUpsell]: r
    }),
    onClick: t
  }
}

function P(e) {
  let {
    onClose: n,
    selectedPreset: t,
    selectedResolution: a,
    selectedFPS: i,
    onResolutionChange: r,
    onFPSChange: O,
    onPresetChange: P,
    targetGuildPremiumTier: D,
    captureDeviceSelected: G
  } = e, U = (0, c.e7)([C.default], () => {
    let e = C.default.getCurrentUser();
    return o()(null != e, "StreamSettings: user cannot be undefined"), e
  }), b = N.ZP.canStreamQuality(N.U2.MID, U), {
    location: w
  } = (0, E.O)(), B = (0, _.Zq)({
    autoTrackExposure: !1
  }), y = (0, N.I5)(U, T.p9.TIER_1), {
    inPerksDemosExperiment: k
  } = S.Z.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: y
  });
  g.Z.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !k || y
  });
  let {
    activated: V
  } = (0, h.k)(u.q.STREAM_HIGH_QUALITY), H = !b && !B || (0, N.Ro)(u.q.STREAM_HIGH_QUALITY), [W, F] = s.useState(!1), z = G ? f.z8 : f.WC, K = {
    ...w,
    section: A.jXE.STREAM_SETTINGS
  }, Y = (0, l.jsx)(d.ButtonGroup, {
    buttons: z.map(e => j({
      type: e,
      selected: e.value === a,
      needsPremium: !(0, I.Z)(t, e.value, i, U, D),
      needsDemo: V && e.value !== f.LY.RESOLUTION_720,
      analyticsLocation: K,
      useGradient: !0,
      onClick: () => r(e.value),
      onClose: n,
      setIsHovering: F
    }))
  }), Q = (0, l.jsx)(d.ButtonGroup, {
    buttons: f.k0.map(e => j({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, I.Z)(t, a, e.value, U, D),
      needsDemo: V && e.value === f.ws.FPS_60,
      analyticsLocation: K,
      useGradient: !0,
      onClick: () => O(e.value),
      onClose: n,
      setIsHovering: F
    }))
  }), q = [{
    value: f.tI.PRESET_VIDEO,
    label: R.Z.Messages.STREAM_PRESET_VIDEO
  }, ...G ? [] : [{
    value: f.tI.PRESET_DOCUMENTS,
    label: R.Z.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: f.tI.PRESET_CUSTOM,
    label: R.Z.Messages.STREAM_PRESET_CUSTOM
  }], J = t === f.tI.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(Z.Z, {
      children: (0, l.jsx)(d.FormItem, {
        title: R.Z.Messages.STREAM_RESOLUTION,
        titleClassName: v.formItemTitleSlim,
        className: L.documentModeGroup,
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: R.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: i
          })
        })
      })
    }), H ? (0, l.jsx)(x.Z, {
      message: R.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: n,
      openStreamUpsellModal: p
    }) : null]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(Z.Z, {
      children: [(0, l.jsx)(d.FormItem, {
        title: R.Z.Messages.STREAM_RESOLUTION,
        className: L.settingsGroup,
        titleClassName: v.formItemTitleSlim,
        children: Y
      }), (0, l.jsx)(d.FormItem, {
        title: R.Z.Messages.SCREENSHARE_FRAME_RATE,
        className: L.settingsGroup,
        titleClassName: v.formItemTitleSlim,
        children: Q
      })]
    }), H ? (0, l.jsx)(x.Z, {
      onClose: n,
      openStreamUpsellModal: p,
      glow: W
    }) : null]
  });
  return (0, l.jsx)(m.Z, {
    ...K,
    children: (0, l.jsx)(d.FormItem, {
      title: R.Z.Messages.STREAM_QUALITY,
      titleClassName: v.formItemTitle,
      className: v.modalContent,
      children: (0, l.jsxs)("div", {
        className: L.qualitySettingsContainer,
        children: [(0, l.jsx)(d.SingleSelect, {
          value: t,
          className: M.marginTop8,
          options: q,
          onChange: e => P(e)
        }), J]
      })
    })
  })
}