"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n("685626"),
  u = n("442837"),
  d = n("481060"),
  c = n("607070"),
  f = n("729017"),
  h = n("889711"),
  p = n("931240"),
  m = n("970606"),
  C = n("650461"),
  g = n("35313"),
  E = n("284019"),
  S = n("672775"),
  _ = n("601463"),
  I = n("192565"),
  N = n("641037"),
  T = n("689938"),
  A = n("590190");
let L = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function v(e) {
  let {
    guildId: t,
    onClose: n,
    gameId: s
  } = e, v = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    progress: x,
    errors: R,
    submitting: M
  } = (0, u.useStateFromStoresObject)([C.default], () => {
    var e, n, l, a;
    return {
      progress: null !== (a = null === (e = C.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== a ? a : C.DEFAULT_CLAN_PROGRESS,
      errors: null === (n = C.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (l = C.default.getStateForGuild(t)) || void 0 === l ? void 0 : l.submitting
    }
  }), y = a.useMemo(() => (0, N.getClanSetupProgressSteps)(R), [R]), [O, D] = a.useState(!1), [b, j] = a.useState(window.innerWidth), [P, U] = a.useState(1), [G, w] = a.useState(!0), B = (0, g.useFullScreenModalAnimationStyle)(), F = (0, o.useSpring)({
    opacity: P,
    config: L,
    onStart: () => w(!0),
    onRest: () => w(1 === P),
    immediate: v
  }), V = (0, o.useSpring)({
    transform: "translateX(".concat(1 === P ? 0 : -1 * b / 2 + 190, "px)"),
    config: L,
    immediate: v
  }), H = (0, o.useTransition)(0 === P, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: L,
    immediate: v
  }), k = (0, o.useTransition)(0 === P, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: L,
    immediate: v
  }), Y = a.useCallback(e => {
    if (e === y.length) U(0), (0, m.trackConvertStepViewed)(t, "signature");
    else if (0 === P) U(1);
    else {
      var n;
      p.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = x.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [P, t, x.furthestStep, y.length]);
  a.useEffect(() => {
    (0, m.trackConvertStepViewed)(t, (0, m.getProgressStepAnalyticsName)(x.currentStep))
  }, [t, x.currentStep]), a.useEffect(() => {
    let e = (0, h.getResizeObserver)((0, r.debounce)(() => j(window.innerWidth), 250));
    return (0, h.watch)(e, document.body), () => (0, h.unwatch)(e, document.body)
  }, [P, G]), a.useEffect(() => {
    null != s && (0, p.updateClanSetup)(t, {
      requiredGameId: s
    })
  }, [s, t]);
  let K = a.useMemo(() => null != R && Object.values(R).some(e => null != e), [R]),
    W = a.useMemo(() => null != R && Object.values(R).length > 0 ? (0, N.getClanSetupProgressSteps)(R).find(e => e.hasError) : null, [R]),
    z = a.useCallback(() => {
      U(1), p.updateClanSetup(t, {
        currentStep: null == W ? void 0 : W.index
      })
    }, [null == W ? void 0 : W.index, t]),
    Z = a.useCallback(() => {
      (0, N.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: x
      })
    }, [n, t, x]),
    X = a.useRef(null),
    Q = null != W ? (0, l.jsxs)("div", {
      className: A.tooltipContents,
      children: [(0, l.jsx)(f.default, {
        className: A.errorIcon
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: T.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, l.jsx)(d.Anchor, {
              className: A.errorLink,
              onClick: z,
              children: e
            }, t)
          })
        })]
      })]
    }) : null;
  return (0, l.jsx)(o.animated.div, {
    ref: X,
    style: B,
    className: A.modal,
    children: (0, l.jsxs)(d.FocusRingScope, {
      containerRef: X,
      children: [(0, l.jsx)(d.Button, {
        className: A.close,
        look: d.Button.Looks.OUTLINED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.PRIMARY,
        onClick: n,
        children: T.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      }), (0, l.jsxs)("div", {
        className: A.content,
        children: [(0, l.jsxs)("div", {
          className: A.panel,
          children: [(0, l.jsx)(o.animated.div, {
            style: F,
            className: i()(A.stepsContainer, {
              [A.hidden]: !G
            }),
            children: (0, l.jsx)(I.default, {
              guildId: t
            })
          }), (0, l.jsx)("div", {
            className: i()(A.navigationContainer, {
              [A.elevatedNavigationContainer]: !G
            }),
            children: (0, l.jsx)(S.default, {
              steps: y,
              progress: x,
              updateCurrentStep: Y,
              animationStyle: F,
              animationClassName: i()({
                [A.hidden]: !G
              })
            })
          })]
        }), (0, l.jsx)(o.animated.div, {
          style: F,
          className: i()(A.divider, {
            [A.hidden]: !G,
            [A.dividerResponsive]: G
          })
        }), (0, l.jsx)(o.animated.div, {
          style: V,
          className: i()(A.sidebar, {
            [A.sidebarResponsive]: G
          }),
          children: (0, l.jsx)(_.default, {
            guildId: t,
            signed: O,
            setSigned: G ? void 0 : D,
            sidebarWidth: 380,
            windowWidth: b,
            transition: H,
            brandPrimaryColor: x.brandPrimaryColor
          })
        })]
      }), k((e, t) => t && (0, l.jsx)(o.animated.div, {
        style: e,
        className: A.submit,
        children: (0, l.jsx)(d.Tooltip, {
          color: d.Tooltip.Colors.GREY,
          tooltipClassName: A.tooltip,
          text: Q,
          "aria-label": null != W ? T.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
          shouldShow: null != W,
          forceOpen: null != W,
          children: e => (0, l.jsx)(E.default, {
            ...e,
            themeColor: x.brandPrimaryColor,
            disabled: !O || K,
            submitting: M,
            look: d.Button.Looks.FILLED,
            size: d.Button.Sizes.MEDIUM,
            color: d.Button.Colors.BRAND,
            onClick: Z,
            children: T.default.Messages.FINISH
          })
        })
      }))]
    })
  })
}