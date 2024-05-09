"use strict";
a.r(t), a.d(t, {
  default: function() {
    return H
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  o = a.n(l),
  i = a("442837"),
  c = a("481060"),
  r = a("239091"),
  d = a("2052"),
  u = a("100527"),
  _ = a("906732"),
  O = a("142497"),
  E = a("810788"),
  p = a("648575"),
  A = a("54264"),
  g = a("466111"),
  f = a("783014"),
  m = a("897353"),
  M = a("26290"),
  I = a("810090"),
  v = a("626135"),
  h = a("768581"),
  x = a("709054"),
  C = a("647177"),
  N = a("63985"),
  R = a("678916"),
  T = a("981631"),
  k = a("190378"),
  D = a("486324"),
  B = a("474936"),
  U = a("689938"),
  j = a("169880");

function P(e) {
  let {
    icon: t,
    onClick: a,
    text: n,
    children: l,
    className: i,
    selected: r = !1,
    disabled: d = !1,
    onMouseLeave: u,
    onBlur: _
  } = e;
  return (0, s.jsxs)(c.Clickable, {
    className: o()(i, j.backgroundOption, {
      [j.backgroundOptionSelected]: r,
      [j.backgroundOptionDisabled]: d
    }),
    onMouseLeave: u,
    onBlur: _,
    onClick: d ? void 0 : a,
    children: [r ? (0, s.jsx)("div", {
      className: j.backgroundOptionRing
    }) : null, (0, s.jsxs)("div", {
      className: j.backgroundOptionInner,
      children: [l, (0, s.jsxs)("div", {
        className: j.backgroundOptionContent,
        children: [(0, s.jsx)(t, {
          className: o()(j.backgroundIconOptionIcon),
          width: 18,
          height: 18
        }), (0, s.jsx)(c.Text, {
          className: j.backgroundOptionText,
          color: "none",
          variant: "text-sm/normal",
          children: n
        })]
      })]
    })]
  })
}

function V(e) {
  let {
    option: t,
    source: a,
    isAnimated: l
  } = e, [o, i] = n.useState(!1);
  if (n.useEffect(() => {
      new Image().src = a
    }, [a]), !l || null == t) return (0, s.jsx)("div", {
    className: j.backgroundImageOption,
    style: {
      backgroundImage: "url(".concat(a, ")")
    }
  });
  let c = (0, h.getVideoFilterAssetURL)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: 720,
    canAnimate: !1
  });
  return (0, s.jsx)("img", {
    onMouseMove: () => i(!0),
    onMouseLeave: () => i(!1),
    className: j.backgroundImageOption,
    src: o ? a : c,
    alt: t.id
  })
}

function S(e) {
  let {
    option: t,
    source: n,
    selected: l = !1,
    onSelectOption: p,
    isAnimatedImage: A,
    isVideo: g,
    hotspotLocation: f,
    ...h
  } = e, x = (0, d.useAnalyticsContext)(), {
    analyticsLocations: N
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_IMAGE_OPTION), R = (0, i.useStateFromStores)([E.default], () => null != f && E.default.hasHotspot(f)), k = g ? (0, s.jsx)(I.default, {
    className: j.backgroundImageOption,
    src: n,
    loop: !0,
    playOnHover: !0,
    muted: !0
  }) : (0, s.jsx)(V, {
    isAnimated: A,
    option: (0, C.isCustomBackgroundOption)(t) ? t : void 0,
    source: n
  });

  function D() {
    null != f && R && (O.hideHotspot(f), v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: B.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: x.location,
      location_stack: N
    }))
  }
  return (0, s.jsxs)(c.Clickable, {
    ...h,
    className: o()(j.backgroundOption, {
      [j.backgroundOptionSelected]: l
    }),
    onClick: () => p(t),
    onContextMenu: e => (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await a.e("99414").then(a.bind(a, "187658"));
      return a => (0, s.jsx)(e, {
        ...a,
        backgroundOption: t,
        optionIsInUse: l
      })
    }),
    children: [l ? (0, s.jsx)("div", {
      className: j.backgroundOptionRing
    }) : null, (0, s.jsx)("div", {
      onFocus: D,
      onMouseEnter: D,
      className: j.backgroundOptionInner,
      children: k
    }), g || A ? (0, s.jsx)("div", {
      className: j.playIcon,
      children: (0, s.jsx)(m.default, {
        width: 12,
        height: 12
      })
    }) : null, R && (0, s.jsx)(M.TextBadge, {
      text: U.default.Messages.NEW,
      className: j.newTextBadge
    })]
  })
}

function L() {
  return (0, s.jsxs)("div", {
    className: j.customBackgroundTooltip,
    children: [(0, s.jsx)(g.default, {
      className: j.customBackgroundTooltipIcon
    }), (0, s.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP
    })]
  })
}

function b(e) {
  let {
    onClick: t,
    tooltipText: a,
    disabled: n = !1
  } = e, l = (0, i.useStateFromStores)([E.default], () => E.default.hasHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function o() {
    O.hideHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let r = l ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : a;
  return (0, s.jsxs)(c.TooltipContainer, {
    text: r,
    className: j.newBackgroundTooltipContainer,
    children: [(0, s.jsxs)(P, {
      className: j.__invalid_backgroundOptionBlurred,
      disabled: n,
      icon: A.default,
      onClick: t,
      onMouseLeave: o,
      onBlur: o,
      text: (0, s.jsxs)("div", {
        className: j.backgroundCustomInlineUpsell,
        children: [(0, s.jsx)(g.default, {
          className: j.backgroundCustomInlineUpsellIcon
        }), (0, s.jsx)("div", {
          className: j.overflowEllipsis,
          children: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM
        })]
      }),
      children: [(0, s.jsx)("div", {
        className: j.backgroundCustomInlineUpsellBackground
      }), (0, s.jsx)("div", {
        className: j.backgroundCustomInlineUpsellBackgroundDarkener
      })]
    }), l && (0, s.jsx)(M.TextBadge, {
      text: U.default.Messages.NEW,
      className: j.newTextBadge
    })]
  })
}

function y(e) {
  let {
    onClick: t
  } = e, a = (0, d.useAnalyticsContext)(), {
    analyticsLocations: l
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return n.useEffect(() => {
    v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: B.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,
      location: a.location,
      location_stack: l
    })
  }, []), (0, s.jsx)(b, {
    onClick: t,
    tooltipText: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
  })
}

function z(e) {
  let {
    onAddBackgroundImage: t,
    disabled: n
  } = e, l = (0, c.useModalContext)(), o = n ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({
    maxCustomBackgrounds: 25
  }) : U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM, i = [{
    name: U.default.Messages.IMAGES,
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }];
  return (0, s.jsx)(b, {
    disabled: n,
    onClick: function() {
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("20653")]).then(a.bind(a, "28130"));
        return a => (0, s.jsx)(e, {
          maxFileSizeBytes: R.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,
          onComplete: t,
          uploadType: D.UploadTypes.VIDEO_BACKGROUND,
          filters: i,
          modalTitle: U.default.Messages.UPLOAD_BACKGROUND,
          imageSpecifications: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
          uploadOptionTitle: U.default.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
          showUpsellHeader: !0,
          ...a
        })
      }, {
        contextKey: l
      })
    },
    tooltipText: o
  })
}

function H(e) {
  let {
    canUseCustomBackgrounds: t,
    customBackgroundOptions: a,
    selectedOption: l,
    onSelectOption: o,
    onUpsellClick: i,
    onAddBackgroundImage: r,
    smallerOptions: d
  } = e, O = n.useMemo(() => a.sort((e, t) => null == e.last_used || null == t.last_used ? x.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [a]), E = O.length >= 25, {
    analyticsLocations: A
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_OPTIONS), g = Object.values((0, N.default)()).sort((e, t) => R.DEFAULT_VIDEO_BACKGROUND_SORT[e.id] - R.DEFAULT_VIDEO_BACKGROUND_SORT[t.id]);
  return (0, s.jsx)(_.AnalyticsLocationProvider, {
    value: A,
    children: (0, s.jsxs)("div", {
      className: d ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
      children: [(0, s.jsx)(P, {
        selected: null == l,
        icon: f.default,
        onClick: () => o(null),
        text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
      }), (0, s.jsx)(P, {
        className: j.__invalid_backgroundOptionBlurred,
        selected: l === R.BLUR_BACKGROUND_OPTION,
        icon: p.default,
        onClick: () => o(R.BLUR_BACKGROUND_OPTION),
        text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
        children: (0, s.jsx)("div", {
          className: j.backgroundOptionBlurBackground
        })
      }), t ? (0, s.jsx)(z, {
        onAddBackgroundImage: r,
        disabled: E
      }) : (0, s.jsx)(y, {
        onClick: i
      }), O.map(e => (0, s.jsx)(c.Tooltip, {
        text: (0, s.jsx)(L, {}),
        "aria-label": U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
        children: t => {
          let a = (0, h.getVideoFilterAssetURL)({
            userId: e.user_id,
            assetId: e.id,
            assetHash: e.asset,
            size: 720
          });
          return null == a ? null : (0, n.createElement)(S, {
            ...t,
            key: e.id,
            option: e,
            source: a,
            selected: (0, C.isCustomBackgroundOption)(l) && l.id === e.id,
            onSelectOption: o,
            isVideo: (0, h.isVideoAssetHash)(e.asset),
            isAnimatedImage: (0, h.isAnimatedIconHash)(e.asset)
          })
        }
      }, e.id)), g.map(e => {
        let t = !0 === e.isVideo;
        return (0, s.jsx)(c.Tooltip, {
          text: e.name,
          "aria-label": e.name,
          children: a => (0, n.createElement)(S, {
            ...a,
            key: e.id,
            option: e.id,
            source: e.source,
            selected: l === e.id,
            onSelectOption: o,
            isVideo: t,
            isAnimatedImage: !1,
            hotspotLocation: e.hotspotLocation
          })
        }, e.id)
      })]
    })
  })
}