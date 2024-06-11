"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
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
  h = l("386542"),
  C = l("594174"),
  g = l("746124"),
  N = l("285952"),
  p = l("466111"),
  I = l("74538"),
  x = l("451467"),
  A = l("200445"),
  T = l("122186"),
  R = l("37113"),
  v = l("981631"),
  L = l("474936"),
  M = l("689938"),
  O = l("555066"),
  j = l("182972"),
  D = l("611273");

function P(e) {
  let {
    analyticsLocation: t,
    onClose: n
  } = e;
  (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("28479")]).then(l.bind(l, "78865"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: n,
      analyticsSource: t
    })
  })
}

function G() {
  return (0, a.jsxs)("div", {
    className: j.toolTipTextContainer,
    children: [(0, a.jsx)(p.default, {
      className: i()(j.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: j.upsellText,
      variant: "text-sm/medium",
      children: M.default.Messages.UNLOCK_WITH_NITRO
    })]
  })
}

function b(e) {
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
    className: j.textContainer,
    onMouseEnter: () => S(!0),
    onMouseLeave: () => S(!1),
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/bold",
      className: i()(j.selectorText, {
        [j.enhancedSelectorNitroText]: !s
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: j.tooltip,
    spacing: 6,
    "aria-label": M.default.Messages.UNLOCK_WITH_NITRO,
    text: (0, a.jsx)(G, {}),
    children: (0, a.jsx)("div", {
      className: j.textContainer,
      onMouseEnter: () => S(!0),
      onMouseLeave: () => S(!1),
      children: (0, a.jsx)(c.Text, {
        variant: "text-xs/bold",
        className: i()(j.selectorNitroText, {
          [j.enhancedSelectorNitroText]: d
        }),
        children: _
      })
    })
  }), l = () => P({
    analyticsLocation: o,
    onClose: m
  })) : (t = (0, a.jsx)("div", {
    className: j.textContainer,
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: j.selectorText,
      children: _
    })
  }), l = () => f(E)), {
    content: t,
    className: i()(j.selectorButton, {
      [j.selectorButtonSelected]: s,
      [j.perksDemo]: u,
      [j.premiumUpsell]: r
    }),
    onClick: l
  }
}

function U(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: l,
    onClose: s,
    selectedPreset: i,
    selectedResolution: r,
    selectedFPS: p,
    onResolutionChange: G,
    onFPSChange: U,
    onPresetChange: y,
    targetGuildPremiumTier: F,
    captureDeviceSelected: k
  } = e, w = (0, d.useStateFromStores)([C.default], () => {
    let e = C.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), H = I.default.canStreamQuality(I.StreamQuality.MID, w), {
    location: V
  } = (0, m.useAnalyticsContext)(), B = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), W = (0, I.isPremium)(w, L.PremiumTypes.TIER_1), {
    inPerksDemosExperiment: K
  } = E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: W
  });
  _.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !K || W
  });
  let {
    available: z,
    hqStreamingState: Y
  } = (0, h.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), Q = !H && !B && !z, [q, Z] = n.useState(!1), [J, X] = n.useState(!1);
  n.useEffect(() => {
    let e = 0;
    return z && Y.hqStreamingUnlockAnimationPlayed && (e = setTimeout(() => {
      X(!0)
    }, 750)), () => {
      clearTimeout(e)
    }
  }, [z, Y.hqStreamingUnlockAnimationPlayed]);
  let $ = n.useCallback(() => {
      G(R.ApplicationStreamResolutions.RESOLUTION_1080), U(R.ApplicationStreamFPS.FPS_60)
    }, [G, U]),
    ee = k ? R.GoLiveDeviceResolutionButtons : R.ApplicationStreamResolutionButtons,
    et = {
      ...V,
      section: v.AnalyticsSections.STREAM_SETTINGS
    },
    el = (0, a.jsx)(g.default, {
      buttons: ee.map(e => b({
        type: e,
        selected: e.value === r,
        needsPremium: !(0, x.default)(i, e.value, p, w, F),
        needsDemo: z && e.value !== R.ApplicationStreamResolutions.RESOLUTION_720,
        analyticsLocation: et,
        useGradient: !0,
        onClick: () => G(e.value),
        onClose: s,
        setIsHovering: Z
      }))
    }),
    ea = (0, a.jsx)(g.default, {
      buttons: R.ApplicationStreamFPSButtons.map(e => b({
        type: e,
        selected: e.value === p,
        needsPremium: !(0, x.default)(i, r, e.value, w, F),
        needsDemo: z && e.value === R.ApplicationStreamFPS.FPS_60,
        analyticsLocation: et,
        useGradient: !0,
        onClick: () => U(e.value),
        onClose: s,
        setIsHovering: Z
      }))
    }),
    en = [{
      value: R.ApplicationStreamPresets.PRESET_VIDEO,
      label: M.default.Messages.STREAM_PRESET_VIDEO
    }, ...k ? [] : [{
      value: R.ApplicationStreamPresets.PRESET_DOCUMENTS,
      label: M.default.Messages.STREAM_PRESET_DOCUMENTS
    }], {
      value: R.ApplicationStreamPresets.PRESET_CUSTOM,
      label: M.default.Messages.STREAM_PRESET_CUSTOM
    }],
    es = i === R.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(N.default, {
        children: (0, a.jsx)(c.FormItem, {
          title: M.default.Messages.STREAM_RESOLUTION,
          titleClassName: O.formItemTitleSlim,
          className: j.documentModeGroup,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            children: M.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
              fps: p
            })
          })
        })
      }), Q ? (0, a.jsx)(T.default, {
        message: M.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
        onClose: s,
        openStreamUpsellModal: P
      }) : null]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(N.default, {
        style: {
          "--custom-transition-duration": z && !J ? "".concat(750, "ms") : 0
        },
        children: [(0, a.jsx)(c.FormItem, {
          title: M.default.Messages.STREAM_RESOLUTION,
          className: j.settingsGroup,
          titleClassName: O.formItemTitleSlim,
          children: el
        }), (0, a.jsx)(c.FormItem, {
          title: M.default.Messages.SCREENSHARE_FRAME_RATE,
          className: j.settingsGroup,
          titleClassName: O.formItemTitleSlim,
          children: ea
        })]
      }), Q ? (0, a.jsx)(T.default, {
        onClose: s,
        openStreamUpsellModal: P,
        glow: q
      }) : null, z ? (0, a.jsx)(A.default, {
        selectedGuildId: t,
        selectedChannelId: l,
        glow: q,
        playIntroTransition: !Y.hqStreamingUnlockAnimationPlayed,
        onUnlocked: $
      }) : null]
    });
  return (0, a.jsx)(f.default, {
    ...et,
    children: (0, a.jsx)(c.FormItem, {
      title: M.default.Messages.STREAM_QUALITY,
      titleClassName: O.formItemTitle,
      className: O.modalContent,
      children: (0, a.jsxs)("div", {
        className: j.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: i,
          className: D.marginTop8,
          options: en,
          onChange: e => y(e)
        }), es]
      })
    })
  })
}