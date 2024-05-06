"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  h = n("650461"),
  _ = n("35313"),
  C = n("284019"),
  m = n("672775"),
  S = n("601463"),
  p = n("192565"),
  I = n("641037"),
  T = n("689938"),
  g = n("156610");
let A = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  N = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  };

function v(e) {
  let {
    guildId: t,
    onClose: n,
    gameId: l
  } = e, v = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    progress: R,
    errors: L,
    submitting: O
  } = (0, u.useStateFromStoresObject)([h.default], () => {
    var e, n, a, s;
    return {
      progress: null !== (s = null === (e = h.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : h.DEFAULT_CLAN_PROGRESS,
      errors: null === (n = h.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (a = h.default.getStateForGuild(t)) || void 0 === a ? void 0 : a.submitting
    }
  }), M = s.useMemo(() => (0, I.getClanSetupProgressSteps)(L), [L]), [P, y] = s.useState(!1), [x, D] = s.useState(window.innerWidth), [b, U] = s.useState(1), [j, G] = s.useState(!0), w = (0, _.useFullScreenModalAnimationStyle)(), k = (0, o.useSpring)({
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
  }), F = (0, o.useSpring)({
    opacity: b,
    config: N,
    onStart: () => G(!0),
    onRest: () => G(1 === b),
    immediate: v
  }), B = (0, o.useSpring)({
    transform: "translateX(".concat(1 === b ? 0 : -1 * x / 2 + 190, "px)"),
    config: N,
    immediate: v
  }), H = (0, o.useTransition)(0 === b, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: N,
    immediate: v
  }), V = (0, o.useTransition)(0 === b, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: N,
    immediate: v
  }), Y = s.useCallback(e => {
    if (e === M.length) U(0);
    else if (0 === b) U(1);
    else {
      var n;
      E.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = R.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [b, t, R.furthestStep, M.length]);
  s.useEffect(() => {
    let e = (0, f.getResizeObserver)((0, r.debounce)(() => D(window.innerWidth), 250));
    return (0, f.watch)(e, document.body), () => (0, f.unwatch)(e, document.body)
  }, [b, j]), s.useEffect(() => {
    null != l && (0, E.updateClanSetup)(t, {
      requiredGameId: l
    })
  }, [l, t]);
  let W = s.useMemo(() => null != L && Object.values(L).some(e => null != e), [L]),
    K = s.useMemo(() => null != L && Object.values(L).length > 0 ? (0, I.getClanSetupProgressSteps)(L).find(e => e.hasError) : null, [L]),
    z = s.useCallback(() => {
      U(1), E.updateClanSetup(t, {
        currentStep: null == K ? void 0 : K.index
      })
    }, [null == K ? void 0 : K.index, t]),
    q = s.useCallback(() => {
      (0, I.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: R
      })
    }, [n, t, R]);
  return (0, a.jsxs)(o.animated.div, {
    style: w,
    className: g.modal,
    children: [(0, a.jsx)(d.Button, {
      className: g.close,
      look: d.Button.Looks.OUTLINED,
      size: d.Button.Sizes.MEDIUM,
      color: d.Button.Colors.PRIMARY,
      onClick: n,
      children: T.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: g.content,
      children: [(0, a.jsxs)("div", {
        className: g.panel,
        children: [(0, a.jsx)(o.animated.div, {
          className: g.stepsContainer,
          style: k,
          children: (0, a.jsx)(o.animated.div, {
            style: F,
            className: i()(g.steps, {
              [g.hidden]: !j
            }),
            children: (0, a.jsx)(p.default, {
              guildId: t
            })
          })
        }), (0, a.jsx)("div", {
          className: i()(g.navigationContainer, {
            [g.elevatedNavigationContainer]: !j
          }),
          children: (0, a.jsx)(m.default, {
            steps: M,
            progress: R,
            updateCurrentStep: Y,
            animationStyle: F,
            animationClassName: i()({
              [g.hidden]: !j
            })
          })
        })]
      }), (0, a.jsx)(o.animated.div, {
        style: F,
        className: i()(g.divider, {
          [g.hidden]: !j,
          [g.dividerResponsive]: j
        })
      }), (0, a.jsx)(o.animated.div, {
        style: B,
        className: i()(g.sidebar, {
          [g.sidebarResponsive]: j
        }),
        children: (0, a.jsx)(S.default, {
          guildId: t,
          signed: P,
          setSigned: j ? void 0 : y,
          sidebarWidth: 380,
          windowWidth: x,
          transition: H
        })
      })]
    }), V((e, t) => t && (0, a.jsxs)(o.animated.div, {
      style: e,
      className: g.submit,
      children: [W && (0, a.jsx)(d.Text, {
        className: g.errorText,
        color: "status-danger",
        variant: "text-sm/normal",
        children: T.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
          backHook: (e, t) => (0, a.jsx)(d.Anchor, {
            className: g.errorLink,
            onClick: z,
            children: e
          }, t)
        })
      }), (0, a.jsx)(C.default, {
        themeColor: R.brandPrimaryColor,
        disabled: !P || W,
        submitting: O,
        look: d.Button.Looks.FILLED,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.BRAND,
        onClick: q,
        children: T.default.Messages.FINISH
      })]
    }))]
  })
}