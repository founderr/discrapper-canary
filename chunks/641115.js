"use strict";
n.d(t, {
  Z: function() {
    return D
  }
}), n(47120);
var l = n(735250),
  s = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(512722),
  o = n.n(r),
  u = n(848246),
  c = n(442837),
  d = n(481060),
  m = n(410575),
  E = n(2052),
  _ = n(924557),
  S = n(736871),
  h = n(351742),
  g = n(386542),
  C = n(594174),
  I = n(285952),
  Z = n(74538),
  N = n(451467),
  x = n(200445),
  f = n(122186),
  A = n(37113),
  T = n(981631),
  R = n(474936),
  v = n(689938),
  L = n(555066),
  p = n(182972),
  M = n(611273);

function O(e) {
  let {
    analyticsLocation: t,
    onClose: s
  } = e;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("28479")]).then(n.bind(n, 78865));
    return n => (0, l.jsx)(e, {
      ...n,
      onCloseParent: s,
      analyticsSource: t
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
  let t, n, {
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
  return o ? (t = (0, l.jsx)("div", {
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
  }), n = () => m(S)) : r ? (t = (0, l.jsx)(d.TooltipContainer, {
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
  }), n = () => O({
    analyticsLocation: u,
    onClose: E
  })) : (t = (0, l.jsx)("div", {
    className: p.textContainer,
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: p.selectorText,
      children: h
    })
  }), n = () => m(S)), {
    content: t,
    className: i()(p.selectorButton, {
      [p.selectorButtonSelected]: a,
      [p.perksDemo]: o,
      [p.premiumUpsell]: r
    }),
    onClick: n
  }
}

function D(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: n,
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
    et = (0, l.jsx)(d.ButtonGroup, {
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
    en = (0, l.jsx)(d.ButtonGroup, {
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
          children: et
        }), (0, l.jsx)(d.FormItem, {
          title: v.Z.Messages.SCREENSHARE_FRAME_RATE,
          className: p.settingsGroup,
          titleClassName: L.formItemTitleSlim,
          children: en
        })]
      }), K ? (0, l.jsx)(f.Z, {
        onClose: a,
        openStreamUpsellModal: O,
        glow: Y
      }) : null, W ? (0, l.jsx)(x.Z, {
        selectedGuildId: t,
        selectedChannelId: n,
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