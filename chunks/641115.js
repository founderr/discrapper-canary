"use strict";
l.r(t), l.d(t, {
  default: function() {
    return w
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("512722"),
  u = l.n(r),
  o = l("848246"),
  d = l("442837"),
  c = l("481060"),
  f = l("410575"),
  m = l("2052"),
  S = l("924557"),
  E = l("736871"),
  _ = l("351742"),
  N = l("386542"),
  C = l("193878"),
  h = l("594174"),
  g = l("746124"),
  p = l("285952"),
  A = l("466111"),
  x = l("74538"),
  I = l("451467"),
  R = l("200445"),
  T = l("122186"),
  v = l("37113"),
  L = l("981631"),
  M = l("474936"),
  O = l("689938"),
  j = l("555066"),
  D = l("182972"),
  b = l("611273");

function P(e) {
  let {
    analyticsLocation: t,
    onClose: n
  } = e;
  (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e("28479").then(l.bind(l, "78865"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: n,
      analyticsSource: t
    })
  })
}

function U() {
  return (0, a.jsxs)("div", {
    className: D.toolTipTextContainer,
    children: [(0, a.jsx)(A.default, {
      className: i()(D.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: D.upsellText,
      variant: "text-sm/medium",
      children: O.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function G(e) {
  let t, l, {
      type: n,
      selected: s,
      needsPremium: r,
      needsDemo: u,
      analyticsLocation: o,
      useGradient: d = !1,
      onClick: f,
      onClose: m,
      setIsHovering: S
    } = e,
    {
      value: E,
      label: _
    } = n;
  return u ? (t = (0, a.jsx)("div", {
    className: D.textContainer,
    onMouseEnter: () => S(!0),
    onMouseLeave: () => S(!1),
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/bold",
      className: i()(D.selectorText, {
        [D.enhancedSelectorNitroText]: !s
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: D.tooltip,
    spacing: 6,
    "aria-label": O.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(U, {}),
    children: (0, a.jsx)("div", {
      className: D.textContainer,
      onMouseEnter: () => S(!0),
      onMouseLeave: () => S(!1),
      children: (0, a.jsx)(c.Text, {
        variant: "text-xs/bold",
        className: i()(D.selectorNitroText, {
          [D.enhancedSelectorNitroText]: d
        }),
        children: _
      })
    })
  }), l = () => P({
    analyticsLocation: o,
    onClose: m
  })) : (t = (0, a.jsx)("div", {
    className: D.textContainer,
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: D.selectorText,
      children: _
    })
  }), l = () => f(E)), {
    content: t,
    className: i()(D.selectorButton, {
      [D.selectorButtonSelected]: s,
      [D.perksDemo]: u,
      [D.premiumUpsell]: r
    }),
    onClick: l
  }
}

function w(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: l,
    onClose: s,
    selectedPreset: i,
    selectedResolution: r,
    selectedFPS: A,
    onResolutionChange: U,
    onFPSChange: w,
    onPresetChange: k,
    targetGuildPremiumTier: y,
    captureDeviceSelected: F
  } = e, V = (0, d.useStateFromStores)([h.default], () => {
    let e = h.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), B = x.default.canStreamQuality(x.StreamQuality.MID, V), {
    location: H
  } = (0, m.useAnalyticsContext)(), W = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), K = (0, x.isPremium)(V, M.PremiumTypes.TIER_1), {
    inPerksDemosExperiment: z
  } = E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: K
  });
  _.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !z || K
  });
  let {
    available: Y,
    hqStreamingState: Q
  } = (0, N.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), q = !B && !W && !Y, {
    enabled: Z,
    variant: J
  } = C.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: q
  }), X = Z && C.GradientVariants.includes(J), [$, ee] = n.useState(!1), [et, el] = n.useState(!1);
  n.useEffect(() => {
    let e = 0;
    return Y && Q.hqStreamingUnlockAnimationPlayed && (e = setTimeout(() => {
      el(!0)
    }, 750)), () => {
      clearTimeout(e)
    }
  }, [Y, Q.hqStreamingUnlockAnimationPlayed]);
  let ea = n.useCallback(() => {
      U(v.ApplicationStreamResolutions.RESOLUTION_1080), w(v.ApplicationStreamFPS.FPS_60)
    }, [U, w]),
    en = F ? v.GoLiveDeviceResolutionButtons : v.ApplicationStreamResolutionButtons,
    es = {
      ...H,
      section: L.AnalyticsSections.STREAM_SETTINGS
    },
    ei = (0, a.jsx)(g.default, {
      buttons: en.map(e => G({
        type: e,
        selected: e.value === r,
        needsPremium: !(0, I.default)(i, e.value, A, V, y),
        needsDemo: Y && e.value !== v.ApplicationStreamResolutions.RESOLUTION_720,
        analyticsLocation: es,
        useGradient: X,
        onClick: () => U(e.value),
        onClose: s,
        setIsHovering: ee
      }))
    }),
    er = (0, a.jsx)(g.default, {
      buttons: v.ApplicationStreamFPSButtons.map(e => G({
        type: e,
        selected: e.value === A,
        needsPremium: !(0, I.default)(i, r, e.value, V, y),
        needsDemo: Y && e.value === v.ApplicationStreamFPS.FPS_60,
        analyticsLocation: es,
        useGradient: X,
        onClick: () => w(e.value),
        onClose: s,
        setIsHovering: ee
      }))
    }),
    eu = [{
      value: v.ApplicationStreamPresets.PRESET_VIDEO,
      label: O.default.Messages.STREAM_PRESET_VIDEO
    }, ...F ? [] : [{
      value: v.ApplicationStreamPresets.PRESET_DOCUMENTS,
      label: O.default.Messages.STREAM_PRESET_DOCUMENTS
    }], {
      value: v.ApplicationStreamPresets.PRESET_CUSTOM,
      label: O.default.Messages.STREAM_PRESET_CUSTOM
    }],
    eo = i === v.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(p.default, {
        children: (0, a.jsx)(c.FormItem, {
          title: O.default.Messages.STREAM_RESOLUTION,
          titleClassName: j.formItemTitleSlim,
          className: D.documentModeGroup,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            children: O.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
              fps: A
            })
          })
        })
      }), q ? (0, a.jsx)(T.default, {
        message: O.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
        onClose: s,
        openStreamUpsellModal: P
      }) : null]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(p.default, {
        style: {
          "--custom-transition-duration": Y && !et ? "".concat(750, "ms") : 0
        },
        children: [(0, a.jsx)(c.FormItem, {
          title: O.default.Messages.STREAM_RESOLUTION,
          className: D.settingsGroup,
          titleClassName: j.formItemTitleSlim,
          children: ei
        }), (0, a.jsx)(c.FormItem, {
          title: O.default.Messages.SCREENSHARE_FRAME_RATE,
          className: D.settingsGroup,
          titleClassName: j.formItemTitleSlim,
          children: er
        })]
      }), q ? (0, a.jsx)(T.default, {
        onClose: s,
        openStreamUpsellModal: P,
        glow: $ && X
      }) : null, Y ? (0, a.jsx)(R.default, {
        selectedGuildId: t,
        selectedChannelId: l,
        glow: $,
        playIntroTransition: !Q.hqStreamingUnlockAnimationPlayed,
        onUnlocked: ea
      }) : null]
    });
  return (0, a.jsx)(f.default, {
    ...es,
    children: (0, a.jsx)(c.FormItem, {
      title: O.default.Messages.STREAM_QUALITY,
      titleClassName: j.formItemTitle,
      className: j.modalContent,
      children: (0, a.jsxs)("div", {
        className: D.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: i,
          className: b.marginTop8,
          options: eu,
          onChange: e => k(e)
        }), eo]
      })
    })
  })
}