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
  o = n("718017"),
  u = n("442837"),
  d = n("481060"),
  c = n("607070"),
  f = n("889711"),
  h = n("931240"),
  p = n("970606"),
  m = n("650461"),
  C = n("35313"),
  g = n("284019"),
  E = n("672775"),
  S = n("601463"),
  _ = n("192565"),
  I = n("641037"),
  N = n("689938"),
  T = n("156610");
let A = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  L = {
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
  } = (0, u.useStateFromStoresObject)([m.default], () => {
    var e, n, l, a;
    return {
      progress: null !== (a = null === (e = m.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== a ? a : m.DEFAULT_CLAN_PROGRESS,
      errors: null === (n = m.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (l = m.default.getStateForGuild(t)) || void 0 === l ? void 0 : l.submitting
    }
  }), y = a.useMemo(() => (0, I.getClanSetupProgressSteps)(R), [R]), [O, b] = a.useState(!1), [D, j] = a.useState(window.innerWidth), [P, U] = a.useState(1), [G, w] = a.useState(!0), B = (0, C.useFullScreenModalAnimationStyle)(), F = (0, o.useSpring)({
    from: {
      opacity: 0,
      transform: "translateY(40px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: A,
    delay: 500,
    immediate: v
  }), V = (0, o.useSpring)({
    opacity: P,
    config: L,
    onStart: () => w(!0),
    onRest: () => w(1 === P),
    immediate: v
  }), H = (0, o.useSpring)({
    transform: "translateX(".concat(1 === P ? 0 : -1 * D / 2 + 190, "px)"),
    config: L,
    immediate: v
  }), k = (0, o.useTransition)(0 === P, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: L,
    immediate: v
  }), Y = (0, o.useTransition)(0 === P, {
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
  }), W = a.useCallback(e => {
    if (e === y.length) U(0), (0, p.trackConvertStepViewed)(t, "signature");
    else if (0 === P) U(1);
    else {
      var n;
      h.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = x.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [P, t, x.furthestStep, y.length]);
  a.useEffect(() => {
    (0, p.trackConvertStepViewed)(t, (0, p.getProgressStepAnalyticsName)(x.currentStep))
  }, [t, x.currentStep]), a.useEffect(() => {
    let e = (0, f.getResizeObserver)((0, r.debounce)(() => j(window.innerWidth), 250));
    return (0, f.watch)(e, document.body), () => (0, f.unwatch)(e, document.body)
  }, [P, G]), a.useEffect(() => {
    null != s && (0, h.updateClanSetup)(t, {
      requiredGameId: s
    })
  }, [s, t]);
  let K = a.useMemo(() => null != R && Object.values(R).some(e => null != e), [R]),
    z = a.useMemo(() => null != R && Object.values(R).length > 0 ? (0, I.getClanSetupProgressSteps)(R).find(e => e.hasError) : null, [R]),
    Z = a.useCallback(() => {
      U(1), h.updateClanSetup(t, {
        currentStep: null == z ? void 0 : z.index
      })
    }, [null == z ? void 0 : z.index, t]),
    X = a.useCallback(() => {
      (0, I.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: x
      })
    }, [n, t, x]);
  return (0, l.jsxs)(o.animated.div, {
    style: B,
    className: T.modal,
    children: [(0, l.jsx)(d.Button, {
      className: T.close,
      look: d.Button.Looks.OUTLINED,
      size: d.Button.Sizes.MEDIUM,
      color: d.Button.Colors.PRIMARY,
      onClick: n,
      children: N.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, l.jsxs)("div", {
      className: T.content,
      children: [(0, l.jsxs)("div", {
        className: T.panel,
        children: [(0, l.jsx)(o.animated.div, {
          className: T.stepsContainer,
          style: F,
          children: (0, l.jsx)(o.animated.div, {
            style: V,
            className: i()(T.steps, {
              [T.hidden]: !G
            }),
            children: (0, l.jsx)(_.default, {
              guildId: t
            })
          })
        }), (0, l.jsx)("div", {
          className: i()(T.navigationContainer, {
            [T.elevatedNavigationContainer]: !G
          }),
          children: (0, l.jsx)(E.default, {
            steps: y,
            progress: x,
            updateCurrentStep: W,
            animationStyle: V,
            animationClassName: i()({
              [T.hidden]: !G
            })
          })
        })]
      }), (0, l.jsx)(o.animated.div, {
        style: V,
        className: i()(T.divider, {
          [T.hidden]: !G,
          [T.dividerResponsive]: G
        })
      }), (0, l.jsx)(o.animated.div, {
        style: H,
        className: i()(T.sidebar, {
          [T.sidebarResponsive]: G
        }),
        children: (0, l.jsx)(S.default, {
          guildId: t,
          signed: O,
          setSigned: G ? void 0 : b,
          sidebarWidth: 380,
          windowWidth: D,
          transition: k,
          brandPrimaryColor: x.brandPrimaryColor
        })
      })]
    }), Y((e, t) => t && (0, l.jsxs)(o.animated.div, {
      style: e,
      className: T.submit,
      children: [K && (0, l.jsx)(d.Text, {
        className: T.errorText,
        color: "status-danger",
        variant: "text-sm/normal",
        children: N.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
          backHook: (e, t) => (0, l.jsx)(d.Anchor, {
            className: T.errorLink,
            onClick: Z,
            children: e
          }, t)
        })
      }), (0, l.jsx)(g.default, {
        themeColor: x.brandPrimaryColor,
        disabled: !O || K,
        submitting: M,
        look: d.Button.Looks.FILLED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.BRAND,
        onClick: X,
        children: N.default.Messages.FINISH
      })]
    }))]
  })
}