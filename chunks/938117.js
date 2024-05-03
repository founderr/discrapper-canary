"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("442837"),
  o = a("481060"),
  i = a("2052"),
  c = a("857185"),
  r = a("911200"),
  d = a("594174"),
  u = a("74538"),
  _ = a("716161"),
  O = a("634041"),
  E = a("647177"),
  p = a("672339"),
  A = a("898531"),
  g = a("636188"),
  f = a("678916"),
  m = a("981631"),
  M = a("869783"),
  I = a("689938"),
  v = a("736351");

function h(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: h,
    onSelectBackgroundOption: x,
    currentDeviceId: C,
    smallerBackgroundOptions: N
  } = e, R = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [T, k] = n.useState(null);
  (0, c.useMaybeFetchPremiumLikelihood)(r.default);
  let D = (0, A.default)(),
    B = u.default.canUseCustomBackgrounds(R),
    U = (0, l.useStateFromStoresObject)([O.default], () => B ? O.default.videoFilterAssets : {}),
    j = n.useMemo(() => Object.values(U).filter(e => e.type === f.VideoFilterType.BACKGROUND), [U]),
    P = (0, i.useAnalyticsContext)();
  n.useEffect(() => {
    D ? (0, p.applyBackgroundOptionPreview)(h, C, {
      track: !1
    }).catch(() => x(null)) : null != h && x(null)
  }, [C]);
  let V = e => {
    x(e), (0, p.applyBackgroundOptionPreview)(e, C, {
      location: P.location
    }).then(() => k(null)).catch(() => {
      k(I.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, p.applyBackgroundOptionPreview)(null, C, {
        location: P.location
      })
    })
  };
  return D ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.Heading, {
      className: v.spacingTop24,
      variant: "eyebrow",
      color: "header-secondary",
      children: I.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
    }), null != T ? (0, s.jsx)(o.FormErrorBlock, {
      className: v.videoBackgroundError,
      children: T
    }) : null, (0, s.jsx)(g.default, {
      canUseCustomBackgrounds: B,
      customBackgroundOptions: j,
      selectedOption: h,
      onSelectOption: V,
      onUpsellClick: () => {
        (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("87200")]).then(a.bind(a, "592163"));
          return a => (0, s.jsx)(e, {
            ...a,
            onLearnMore: t,
            analyticsSource: {
              ...P.location,
              object: m.AnalyticsObjects.BUTTON_CTA
            }
          })
        })
      },
      onAddBackgroundImage: function(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async s => {
          try {
            let s = await (0, _.uploadVideoFilterAsset)(e, f.VideoFilterType.BACKGROUND);
            V(s), (0, E.trackBackgroundOptionAdded)(s, t.type === M.FileTypes.MP4, a), k(null)
          } catch (e) {
            k(e.message)
          }
          s()
        })
      },
      smallerOptions: N
    })]
  }) : null
}