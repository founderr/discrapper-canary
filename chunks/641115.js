t.d(n, {
  Z: function() {
    return D
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
  h = t(351742),
  g = t(386542),
  C = t(594174),
  I = t(285952),
  Z = t(74538),
  N = t(451467),
  x = t(200445),
  f = t(122186),
  A = t(37113),
  T = t(981631),
  R = t(474936),
  v = t(689938),
  L = t(278768),
  p = t(665375),
  M = t(331651);

function O(e) {
  let {
    analyticsLocation: n,
    onClose: s
  } = e;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([t.e("99387"), t.e("28479")]).then(t.bind(t, 78865));
    return t => (0, l.jsx)(e, {
      ...t,
      onCloseParent: s,
      analyticsSource: n
    })
  })
}

function j() {
  return (0, l.jsxs)("div", {
    className: p.toolTipTextContainer,
    children: [(0, l.jsx)(d.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: i()(p.premiumIcon)
    }), (0, l.jsx)(d.Text, {
      className: p.upsellText,
      variant: "text-sm/medium",
      children: v.Z.Messages.UNLOCK_WITH_NITRO
    })]
  })
}

function P(e) {
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
    className: p.textContainer,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/bold",
      className: i()(p.selectorText, {
        [p.enhancedSelectorNitroText]: !a
      }),
      children: h
    })
  }), t = () => m(S)) : r ? (n = (0, l.jsx)(d.TooltipContainer, {
    tooltipClassName: p.tooltip,
    spacing: 6,
    "aria-label": v.Z.Messages.UNLOCK_WITH_NITRO,
    text: (0, l.jsx)(j, {}),
    children: (0, l.jsx)("div", {
      className: p.textContainer,
      onMouseEnter: () => _(!0),
      onMouseLeave: () => _(!1),
      children: (0, l.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: i()(p.selectorNitroText, {
          [p.enhancedSelectorNitroText]: c
        }),
        children: h
      })
    })
  }), t = () => O({
    analyticsLocation: u,
    onClose: E
  })) : (n = (0, l.jsx)("div", {
    className: p.textContainer,
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: p.selectorText,
      children: h
    })
  }), t = () => m(S)), {
    content: n,
    className: i()(p.selectorButton, {
      [p.selectorButtonSelected]: a,
      [p.perksDemo]: o,
      [p.premiumUpsell]: r
    }),
    onClick: t
  }
}

function D(e) {
  let {
    selectedGuildId: n,
    selectedChannelId: t,
    onClose: a,
    selectedPreset: i,
    selectedResolution: r,
    selectedFPS: j,
    onResolutionChange: D,
    onFPSChange: G,
    onPresetChange: U,
    targetGuildPremiumTier: b,
    captureDeviceSelected: w
  } = e, y = (0, c.e7)([C.default], () => {
    let e = C.default.getCurrentUser();
    return o()(null != e, "StreamSettings: user cannot be undefined"), e
  }), k = Z.ZP.canStreamQuality(Z.U2.MID, y), {
    location: B
  } = (0, E.O)(), H = (0, _.Zq)({
    autoTrackExposure: !1
  }), V = (0, Z.I5)(y, R.p9.TIER_1), {
    inPerksDemosExperiment: F
  } = S.Z.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: V
  });
  h.Z.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !F || V
  });
  let {
    available: W,
    hqStreamingState: z
  } = (0, g.k)(u.q.STREAM_HIGH_QUALITY), K = !k && !H && !W, [Y, q] = s.useState(!1), [Q, J] = s.useState(!1);
  s.useEffect(() => {
    let e = 0;
    return W && z.hqStreamingUnlockAnimationPlayed && (e = setTimeout(() => {
      J(!0)
    }, 750)), () => {
      clearTimeout(e)
    }
  }, [W, z.hqStreamingUnlockAnimationPlayed]);
  let X = s.useCallback(() => {
      D(A.LY.RESOLUTION_1080), G(A.ws.FPS_60)
    }, [D, G]),
    $ = w ? A.z8 : A.WC,
    ee = {
      ...B,
      section: T.jXE.STREAM_SETTINGS
    },
    en = (0, l.jsx)(d.ButtonGroup, {
      buttons: $.map(e => P({
        type: e,
        selected: e.value === r,
        needsPremium: !(0, N.Z)(i, e.value, j, y, b),
        needsDemo: W && e.value !== A.LY.RESOLUTION_720,
        analyticsLocation: ee,
        useGradient: !0,
        onClick: () => D(e.value),
        onClose: a,
        setIsHovering: q
      }))
    }),
    et = (0, l.jsx)(d.ButtonGroup, {
      buttons: A.k0.map(e => P({
        type: e,
        selected: e.value === j,
        needsPremium: !(0, N.Z)(i, r, e.value, y, b),
        needsDemo: W && e.value === A.ws.FPS_60,
        analyticsLocation: ee,
        useGradient: !0,
        onClick: () => G(e.value),
        onClose: a,
        setIsHovering: q
      }))
    }),
    el = [{
      value: A.tI.PRESET_VIDEO,
      label: v.Z.Messages.STREAM_PRESET_VIDEO
    }, ...w ? [] : [{
      value: A.tI.PRESET_DOCUMENTS,
      label: v.Z.Messages.STREAM_PRESET_DOCUMENTS
    }], {
      value: A.tI.PRESET_CUSTOM,
      label: v.Z.Messages.STREAM_PRESET_CUSTOM
    }],
    es = i === A.tI.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Z, {
        children: (0, l.jsx)(d.FormItem, {
          title: v.Z.Messages.STREAM_RESOLUTION,
          titleClassName: L.formItemTitleSlim,
          className: p.documentModeGroup,
          children: (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            children: v.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
              fps: j
            })
          })
        })
      }), K ? (0, l.jsx)(f.Z, {
        message: v.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
        onClose: a,
        openStreamUpsellModal: O
      }) : null]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(I.Z, {
        style: {
          "--custom-transition-duration": W && !Q ? "".concat(750, "ms") : 0
        },
        children: [(0, l.jsx)(d.FormItem, {
          title: v.Z.Messages.STREAM_RESOLUTION,
          className: p.settingsGroup,
          titleClassName: L.formItemTitleSlim,
          children: en
        }), (0, l.jsx)(d.FormItem, {
          title: v.Z.Messages.SCREENSHARE_FRAME_RATE,
          className: p.settingsGroup,
          titleClassName: L.formItemTitleSlim,
          children: et
        })]
      }), K ? (0, l.jsx)(f.Z, {
        onClose: a,
        openStreamUpsellModal: O,
        glow: Y
      }) : null, W ? (0, l.jsx)(x.Z, {
        selectedGuildId: n,
        selectedChannelId: t,
        glow: Y,
        playIntroTransition: !z.hqStreamingUnlockAnimationPlayed,
        onUnlocked: X
      }) : null]
    });
  return (0, l.jsx)(m.Z, {
    ...ee,
    children: (0, l.jsx)(d.FormItem, {
      title: v.Z.Messages.STREAM_QUALITY,
      titleClassName: L.formItemTitle,
      className: L.modalContent,
      children: (0, l.jsxs)("div", {
        className: p.qualitySettingsContainer,
        children: [(0, l.jsx)(d.SingleSelect, {
          value: i,
          className: M.marginTop8,
          options: el,
          onChange: e => U(e)
        }), es]
      })
    })
  })
}