"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
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
  m = n("35313"),
  S = n("284019"),
  p = n("672775"),
  I = n("601463"),
  g = n("192565"),
  T = n("641037"),
  A = n("689938"),
  N = n("590190");
let v = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function R(e) {
  let {
    guildId: t,
    onClose: n,
    gameId: i
  } = e, R = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    progress: L,
    errors: O,
    submitting: M
  } = (0, u.useStateFromStoresObject)([C.default], () => {
    var e, n, a, s;
    return {
      progress: null !== (s = null === (e = C.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : C.DEFAULT_CLAN_PROGRESS,
      errors: null === (n = C.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (a = C.default.getStateForGuild(t)) || void 0 === a ? void 0 : a.submitting
    }
  }), y = s.useMemo(() => (0, T.getClanSetupProgressSteps)(O), [O]), [P, x] = s.useState(!1), [D, b] = s.useState(window.innerWidth), [U, j] = s.useState(1), [G, k] = s.useState(!0), w = (0, m.useFullScreenModalAnimationStyle)(), F = (0, o.useSpring)({
    opacity: U,
    config: v,
    onStart: () => k(!0),
    onRest: () => k(1 === U),
    immediate: R
  }), B = (0, o.useSpring)({
    transform: "translateX(".concat(1 === U ? 0 : -1 * D / 2 + 190, "px)"),
    config: v,
    immediate: R
  }), H = (0, o.useTransition)(0 === U, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: v,
    immediate: R
  }), V = (0, o.useTransition)(0 === U, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: v,
    immediate: R
  }), Y = s.useCallback(e => {
    if (e === y.length) j(0), (0, _.trackConvertStepViewed)(t, "signature");
    else if (0 === U) j(1);
    else {
      var n;
      h.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = L.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [U, t, L.furthestStep, y.length]);
  s.useEffect(() => {
    (0, _.trackConvertStepViewed)(t, (0, _.getProgressStepAnalyticsName)(L.currentStep))
  }, [t, L.currentStep]), s.useEffect(() => {
    let e = (0, E.getResizeObserver)((0, r.debounce)(() => b(window.innerWidth), 250));
    return (0, E.watch)(e, document.body), () => (0, E.unwatch)(e, document.body)
  }, [U, G]), s.useEffect(() => {
    null != i && (0, h.updateClanSetup)(t, {
      requiredGameId: i
    })
  }, [i, t]);
  let W = s.useMemo(() => null != O && Object.values(O).some(e => null != e), [O]),
    K = s.useMemo(() => null != O && Object.values(O).length > 0 ? (0, T.getClanSetupProgressSteps)(O).find(e => e.hasError) : null, [O]),
    z = s.useCallback(() => {
      j(1), h.updateClanSetup(t, {
        currentStep: null == K ? void 0 : K.index
      })
    }, [null == K ? void 0 : K.index, t]),
    q = s.useCallback(() => {
      (0, T.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: L
      })
    }, [n, t, L]),
    Q = s.useRef(null),
    Z = null != K ? (0, a.jsxs)("div", {
      className: N.tooltipContents,
      children: [(0, a.jsx)(f.default, {
        className: N.errorIcon
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: A.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: A.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, a.jsx)(d.Anchor, {
              className: N.errorLink,
              onClick: z,
              children: e
            }, t)
          })
        })]
      })]
    }) : null;
  return (0, a.jsx)(o.animated.div, {
    ref: Q,
    style: w,
    className: N.modal,
    children: (0, a.jsxs)(d.FocusRingScope, {
      containerRef: Q,
      children: [(0, a.jsx)(d.Button, {
        className: N.close,
        look: d.Button.Looks.OUTLINED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.PRIMARY,
        onClick: n,
        children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      }), (0, a.jsxs)("div", {
        className: N.content,
        children: [(0, a.jsxs)("div", {
          className: N.panel,
          children: [(0, a.jsx)(o.animated.div, {
            style: F,
            className: l()(N.stepsContainer, {
              [N.hidden]: !G
            }),
            children: (0, a.jsx)(g.default, {
              guildId: t
            })
          }), (0, a.jsx)("div", {
            className: l()(N.navigationContainer, {
              [N.elevatedNavigationContainer]: !G
            }),
            children: (0, a.jsx)(p.default, {
              steps: y,
              progress: L,
              updateCurrentStep: Y,
              animationStyle: F,
              animationClassName: l()({
                [N.hidden]: !G
              })
            })
          })]
        }), (0, a.jsx)(o.animated.div, {
          style: F,
          className: l()(N.divider, {
            [N.hidden]: !G,
            [N.dividerResponsive]: G
          })
        }), (0, a.jsx)(o.animated.div, {
          style: B,
          className: l()(N.sidebar, {
            [N.sidebarResponsive]: G
          }),
          children: (0, a.jsx)(I.default, {
            guildId: t,
            signed: P,
            setSigned: G ? void 0 : x,
            sidebarWidth: 380,
            windowWidth: D,
            transition: H,
            brandPrimaryColor: L.brandPrimaryColor
          })
        })]
      }), V((e, t) => t && (0, a.jsx)(o.animated.div, {
        style: e,
        className: N.submit,
        children: (0, a.jsx)(d.Tooltip, {
          color: d.Tooltip.Colors.GREY,
          tooltipClassName: N.tooltip,
          text: Z,
          "aria-label": null != K ? A.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
          shouldShow: null != K,
          forceOpen: null != K,
          children: e => (0, a.jsx)(S.default, {
            ...e,
            themeColor: L.brandPrimaryColor,
            disabled: !P || W,
            submitting: M,
            look: d.Button.Looks.FILLED,
            size: d.Button.Sizes.MEDIUM,
            color: d.Button.Colors.BRAND,
            onClick: q,
            children: A.default.Messages.FINISH
          })
        })
      }))]
    })
  })
}