"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n("718017"),
  u = n("442837"),
  d = n("481060"),
  c = n("607070"),
  f = n("889711"),
  E = n("931240"),
  h = n("970606"),
  _ = n("650461"),
  C = n("35313"),
  m = n("284019"),
  S = n("672775"),
  p = n("601463"),
  I = n("192565"),
  g = n("641037"),
  T = n("689938"),
  A = n("156610");
let N = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  v = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  };

function R(e) {
  let {
    guildId: t,
    onClose: n,
    gameId: l
  } = e, R = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    progress: L,
    errors: O,
    submitting: M
  } = (0, u.useStateFromStoresObject)([_.default], () => {
    var e, n, a, s;
    return {
      progress: null !== (s = null === (e = _.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : _.DEFAULT_CLAN_PROGRESS,
      errors: null === (n = _.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (a = _.default.getStateForGuild(t)) || void 0 === a ? void 0 : a.submitting
    }
  }), P = s.useMemo(() => (0, g.getClanSetupProgressSteps)(O), [O]), [y, x] = s.useState(!1), [D, b] = s.useState(window.innerWidth), [U, j] = s.useState(1), [G, w] = s.useState(!0), k = (0, C.useFullScreenModalAnimationStyle)(), F = (0, o.useSpring)({
    from: {
      opacity: 0,
      transform: "translateY(40px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: N,
    delay: 500,
    immediate: R
  }), B = (0, o.useSpring)({
    opacity: U,
    config: v,
    onStart: () => w(!0),
    onRest: () => w(1 === U),
    immediate: R
  }), H = (0, o.useSpring)({
    transform: "translateX(".concat(1 === U ? 0 : -1 * D / 2 + 190, "px)"),
    config: v,
    immediate: R
  }), V = (0, o.useTransition)(0 === U, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: v,
    immediate: R
  }), Y = (0, o.useTransition)(0 === U, {
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
  }), W = s.useCallback(e => {
    if (e === P.length) j(0), (0, h.trackConvertStepViewed)(t, "signature");
    else if (0 === U) j(1);
    else {
      var n;
      E.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = L.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [U, t, L.furthestStep, P.length]);
  s.useEffect(() => {
    (0, h.trackConvertStepViewed)(t, (0, h.getProgressStepAnalyticsName)(L.currentStep))
  }, [t, L.currentStep]), s.useEffect(() => {
    let e = (0, f.getResizeObserver)((0, r.debounce)(() => b(window.innerWidth), 250));
    return (0, f.watch)(e, document.body), () => (0, f.unwatch)(e, document.body)
  }, [U, G]), s.useEffect(() => {
    null != l && (0, E.updateClanSetup)(t, {
      requiredGameId: l
    })
  }, [l, t]);
  let K = s.useMemo(() => null != O && Object.values(O).some(e => null != e), [O]),
    z = s.useMemo(() => null != O && Object.values(O).length > 0 ? (0, g.getClanSetupProgressSteps)(O).find(e => e.hasError) : null, [O]),
    q = s.useCallback(() => {
      j(1), E.updateClanSetup(t, {
        currentStep: null == z ? void 0 : z.index
      })
    }, [null == z ? void 0 : z.index, t]),
    Q = s.useCallback(() => {
      (0, g.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: L
      })
    }, [n, t, L]);
  return (0, a.jsxs)(o.animated.div, {
    style: k,
    className: A.modal,
    children: [(0, a.jsx)(d.Button, {
      className: A.close,
      look: d.Button.Looks.OUTLINED,
      size: d.Button.Sizes.MEDIUM,
      color: d.Button.Colors.PRIMARY,
      onClick: n,
      children: T.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: A.content,
      children: [(0, a.jsxs)("div", {
        className: A.panel,
        children: [(0, a.jsx)(o.animated.div, {
          className: A.stepsContainer,
          style: F,
          children: (0, a.jsx)(o.animated.div, {
            style: B,
            className: i()(A.steps, {
              [A.hidden]: !G
            }),
            children: (0, a.jsx)(I.default, {
              guildId: t
            })
          })
        }), (0, a.jsx)("div", {
          className: i()(A.navigationContainer, {
            [A.elevatedNavigationContainer]: !G
          }),
          children: (0, a.jsx)(S.default, {
            steps: P,
            progress: L,
            updateCurrentStep: W,
            animationStyle: B,
            animationClassName: i()({
              [A.hidden]: !G
            })
          })
        })]
      }), (0, a.jsx)(o.animated.div, {
        style: B,
        className: i()(A.divider, {
          [A.hidden]: !G,
          [A.dividerResponsive]: G
        })
      }), (0, a.jsx)(o.animated.div, {
        style: H,
        className: i()(A.sidebar, {
          [A.sidebarResponsive]: G
        }),
        children: (0, a.jsx)(p.default, {
          guildId: t,
          signed: y,
          setSigned: G ? void 0 : x,
          sidebarWidth: 380,
          windowWidth: D,
          transition: V
        })
      })]
    }), Y((e, t) => t && (0, a.jsxs)(o.animated.div, {
      style: e,
      className: A.submit,
      children: [K && (0, a.jsx)(d.Text, {
        className: A.errorText,
        color: "status-danger",
        variant: "text-sm/normal",
        children: T.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
          backHook: (e, t) => (0, a.jsx)(d.Anchor, {
            className: A.errorLink,
            onClick: q,
            children: e
          }, t)
        })
      }), (0, a.jsx)(m.default, {
        themeColor: L.brandPrimaryColor,
        disabled: !y || K,
        submitting: M,
        look: d.Button.Looks.FILLED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.BRAND,
        onClick: Q,
        children: T.default.Messages.FINISH
      })]
    }))]
  })
}