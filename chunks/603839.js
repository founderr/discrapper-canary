"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n("685626"),
  u = n("442837"),
  d = n("481060"),
  c = n("607070"),
  f = n("729017"),
  E = n("889711"),
  h = n("931240"),
  _ = n("970606"),
  C = n("650461"),
  m = n("432632"),
  S = n("35313"),
  p = n("284019"),
  g = n("672775"),
  I = n("601463"),
  T = n("192565"),
  A = n("641037"),
  N = n("689938"),
  v = n("590190");
let R = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function O(e) {
  let {
    guildId: t,
    onClose: n
  } = e, l = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), O = (0, C.useDefaultClanProgress)(), {
    progress: L,
    errors: M,
    submitting: y
  } = (0, u.useStateFromStoresObject)([C.default], () => {
    var e, n, a, s;
    return {
      progress: null !== (s = null === (e = C.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : O,
      errors: null === (n = C.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (a = C.default.getStateForGuild(t)) || void 0 === a ? void 0 : a.submitting
    }
  }), P = (0, m.useDefaultGameIdForClan)(t, "ClanSetupModal"), x = s.useMemo(() => (0, A.getClanSetupProgressSteps)(M), [M]), [D, b] = s.useState(!1), [U, j] = s.useState(window.innerWidth), [G, k] = s.useState(1), [w, B] = s.useState(!0), F = (0, S.useFullScreenModalAnimationStyle)(), H = (0, o.useSpring)({
    opacity: G,
    config: R,
    onStart: () => B(!0),
    onRest: () => B(1 === G),
    immediate: l
  }), V = (0, o.useSpring)({
    transform: "translateX(".concat(1 === G ? 0 : -1 * U / 2 + 190, "px)"),
    config: R,
    immediate: l
  }), Y = (0, o.useTransition)(0 === G, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: R,
    immediate: l
  }), W = (0, o.useTransition)(0 === G, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: R,
    immediate: l
  }), K = s.useCallback(e => {
    if (e === x.length) k(0), (0, _.trackConvertStepViewed)(t, "signature");
    else if (0 === G) k(1);
    else {
      var n;
      h.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = L.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [G, t, L.furthestStep, x.length]);
  s.useEffect(() => {
    (0, _.trackConvertStepViewed)(t, (0, _.getProgressStepAnalyticsName)(L.currentStep))
  }, [t, L.currentStep]), s.useEffect(() => {
    let e = (0, E.getResizeObserver)((0, r.debounce)(() => j(window.innerWidth), 250));
    return (0, E.watch)(e, document.body), () => (0, E.unwatch)(e, document.body)
  }, [G, w]), s.useEffect(() => {
    null != P && (0, h.updateClanSetup)(t, {
      requiredGameId: P
    })
  }, [P, t]);
  let z = s.useMemo(() => null != M && Object.values(M).some(e => null != e), [M]),
    q = s.useMemo(() => null != M && Object.values(M).length > 0 ? (0, A.getClanSetupProgressSteps)(M).find(e => e.hasError) : null, [M]),
    Q = s.useCallback(() => {
      k(1), h.updateClanSetup(t, {
        currentStep: null == q ? void 0 : q.index
      })
    }, [null == q ? void 0 : q.index, t]),
    Z = s.useCallback(() => {
      (0, A.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: L
      })
    }, [n, t, L]),
    X = s.useRef(null),
    J = null != q ? (0, a.jsxs)("div", {
      className: v.tooltipContents,
      children: [(0, a.jsx)(f.default, {
        className: v.errorIcon
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: N.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, a.jsx)(d.Anchor, {
              className: v.errorLink,
              onClick: Q,
              children: e
            }, t)
          })
        })]
      })]
    }) : null;
  return (0, a.jsx)(o.animated.div, {
    ref: X,
    style: F,
    className: v.modal,
    children: (0, a.jsxs)(d.FocusRingScope, {
      containerRef: X,
      children: [(0, a.jsx)(d.Button, {
        className: v.close,
        look: d.Button.Looks.OUTLINED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.PRIMARY,
        onClick: n,
        children: N.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      }), (0, a.jsxs)("div", {
        className: v.content,
        children: [(0, a.jsxs)("div", {
          className: v.panel,
          children: [(0, a.jsx)(o.animated.div, {
            style: H,
            className: i()(v.stepsContainer, {
              [v.hidden]: !w
            }),
            children: (0, a.jsx)(T.default, {
              guildId: t
            })
          }), (0, a.jsx)("div", {
            className: i()(v.navigationContainer, {
              [v.elevatedNavigationContainer]: !w
            }),
            children: (0, a.jsx)(g.default, {
              steps: x,
              progress: L,
              updateCurrentStep: K,
              animationStyle: H,
              animationClassName: i()({
                [v.hidden]: !w
              })
            })
          })]
        }), (0, a.jsx)(o.animated.div, {
          style: H,
          className: i()(v.divider, {
            [v.hidden]: !w,
            [v.dividerResponsive]: w
          })
        }), (0, a.jsx)(o.animated.div, {
          style: V,
          className: i()(v.sidebar, {
            [v.sidebarResponsive]: w
          }),
          children: (0, a.jsx)(I.default, {
            guildId: t,
            signed: D,
            setSigned: w ? void 0 : b,
            sidebarWidth: 380,
            windowWidth: U,
            transition: Y,
            brandPrimaryColor: L.brandPrimaryColor
          })
        })]
      }), W((e, t) => t && (0, a.jsx)(o.animated.div, {
        style: e,
        className: v.submit,
        children: (0, a.jsx)(d.Tooltip, {
          color: d.Tooltip.Colors.GREY,
          tooltipClassName: v.tooltip,
          text: J,
          "aria-label": null != q ? N.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
          shouldShow: null != q,
          forceOpen: null != q,
          children: e => (0, a.jsx)(p.default, {
            ...e,
            themeColor: L.brandPrimaryColor,
            disabled: !D || z,
            submitting: y,
            look: d.Button.Looks.FILLED,
            size: d.Button.Sizes.MEDIUM,
            color: d.Button.Colors.BRAND,
            onClick: Z,
            children: N.default.Messages.FINISH
          })
        })
      }))]
    })
  })
}