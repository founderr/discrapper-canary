"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
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
  tension: 600,
  friction: 60,
  clamp: !0
};

function L(e) {
  let {
    guildId: t,
    onClose: n,
    gameId: s
  } = e, L = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    progress: v,
    errors: x,
    submitting: R
  } = (0, u.useStateFromStoresObject)([m.default], () => {
    var e, n, l, a;
    return {
      progress: null !== (a = null === (e = m.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== a ? a : m.DEFAULT_CLAN_PROGRESS,
      errors: null === (n = m.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (l = m.default.getStateForGuild(t)) || void 0 === l ? void 0 : l.submitting
    }
  }), M = a.useMemo(() => (0, I.getClanSetupProgressSteps)(x), [x]), [y, O] = a.useState(!1), [D, b] = a.useState(window.innerWidth), [j, P] = a.useState(1), [G, U] = a.useState(!0), w = (0, C.useFullScreenModalAnimationStyle)(), B = (0, o.useSpring)({
    opacity: j,
    config: A,
    onStart: () => U(!0),
    onRest: () => U(1 === j),
    immediate: L
  }), F = (0, o.useSpring)({
    transform: "translateX(".concat(1 === j ? 0 : -1 * D / 2 + 190, "px)"),
    config: A,
    immediate: L
  }), V = (0, o.useTransition)(0 === j, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: A,
    immediate: L
  }), H = (0, o.useTransition)(0 === j, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: A,
    immediate: L
  }), k = a.useCallback(e => {
    if (e === M.length) P(0), (0, p.trackConvertStepViewed)(t, "signature");
    else if (0 === j) P(1);
    else {
      var n;
      h.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = v.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [j, t, v.furthestStep, M.length]);
  a.useEffect(() => {
    (0, p.trackConvertStepViewed)(t, (0, p.getProgressStepAnalyticsName)(v.currentStep))
  }, [t, v.currentStep]), a.useEffect(() => {
    let e = (0, f.getResizeObserver)((0, r.debounce)(() => b(window.innerWidth), 250));
    return (0, f.watch)(e, document.body), () => (0, f.unwatch)(e, document.body)
  }, [j, G]), a.useEffect(() => {
    null != s && (0, h.updateClanSetup)(t, {
      requiredGameId: s
    })
  }, [s, t]);
  let Y = a.useMemo(() => null != x && Object.values(x).some(e => null != e), [x]),
    W = a.useMemo(() => null != x && Object.values(x).length > 0 ? (0, I.getClanSetupProgressSteps)(x).find(e => e.hasError) : null, [x]),
    K = a.useCallback(() => {
      P(1), h.updateClanSetup(t, {
        currentStep: null == W ? void 0 : W.index
      })
    }, [null == W ? void 0 : W.index, t]),
    z = a.useCallback(() => {
      (0, I.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: v
      })
    }, [n, t, v]);
  return (0, l.jsxs)(o.animated.div, {
    style: w,
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
          style: B,
          className: i()(T.stepsContainer, {
            [T.hidden]: !G
          }),
          children: (0, l.jsx)(_.default, {
            guildId: t
          })
        }), (0, l.jsx)("div", {
          className: i()(T.navigationContainer, {
            [T.elevatedNavigationContainer]: !G
          }),
          children: (0, l.jsx)(E.default, {
            steps: M,
            progress: v,
            updateCurrentStep: k,
            animationStyle: B,
            animationClassName: i()({
              [T.hidden]: !G
            })
          })
        })]
      }), (0, l.jsx)(o.animated.div, {
        style: B,
        className: i()(T.divider, {
          [T.hidden]: !G,
          [T.dividerResponsive]: G
        })
      }), (0, l.jsx)(o.animated.div, {
        style: F,
        className: i()(T.sidebar, {
          [T.sidebarResponsive]: G
        }),
        children: (0, l.jsx)(S.default, {
          guildId: t,
          signed: y,
          setSigned: G ? void 0 : O,
          sidebarWidth: 380,
          windowWidth: D,
          transition: V,
          brandPrimaryColor: v.brandPrimaryColor
        })
      })]
    }), H((e, t) => t && (0, l.jsxs)(o.animated.div, {
      style: e,
      className: T.submit,
      children: [Y && (0, l.jsx)(d.Text, {
        className: T.errorText,
        color: "status-danger",
        variant: "text-sm/normal",
        children: N.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
          backHook: (e, t) => (0, l.jsx)(d.Anchor, {
            className: T.errorLink,
            onClick: K,
            children: e
          }, t)
        })
      }), (0, l.jsx)(g.default, {
        themeColor: v.brandPrimaryColor,
        disabled: !y || Y,
        submitting: R,
        look: d.Button.Looks.FILLED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.BRAND,
        onClick: z,
        children: N.default.Messages.FINISH
      })]
    }))]
  })
}