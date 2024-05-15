"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  m = n("432632"),
  p = n("35313"),
  S = n("284019"),
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
  } = e, i = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    progress: O,
    errors: L,
    submitting: M
  } = (0, u.useStateFromStoresObject)([C.default], () => {
    var e, n, a, s;
    return {
      progress: null !== (s = null === (e = C.default.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : C.DEFAULT_CLAN_PROGRESS,
      errors: null === (n = C.default.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (a = C.default.getStateForGuild(t)) || void 0 === a ? void 0 : a.submitting
    }
  }), y = (0, m.useDefaultGameIdForClan)(t, "ClanSetupModal"), P = s.useMemo(() => (0, A.getClanSetupProgressSteps)(L), [L]), [x, D] = s.useState(!1), [b, U] = s.useState(window.innerWidth), [j, G] = s.useState(1), [k, w] = s.useState(!0), B = (0, p.useFullScreenModalAnimationStyle)(), F = (0, o.useSpring)({
    opacity: j,
    config: R,
    onStart: () => w(!0),
    onRest: () => w(1 === j),
    immediate: i
  }), H = (0, o.useSpring)({
    transform: "translateX(".concat(1 === j ? 0 : -1 * b / 2 + 190, "px)"),
    config: R,
    immediate: i
  }), V = (0, o.useTransition)(0 === j, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: R,
    immediate: i
  }), Y = (0, o.useTransition)(0 === j, {
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
    immediate: i
  }), W = s.useCallback(e => {
    if (e === P.length) G(0), (0, _.trackConvertStepViewed)(t, "signature");
    else if (0 === j) G(1);
    else {
      var n;
      h.updateClanSetup(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = O.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [j, t, O.furthestStep, P.length]);
  s.useEffect(() => {
    (0, _.trackConvertStepViewed)(t, (0, _.getProgressStepAnalyticsName)(O.currentStep))
  }, [t, O.currentStep]), s.useEffect(() => {
    let e = (0, E.getResizeObserver)((0, r.debounce)(() => U(window.innerWidth), 250));
    return (0, E.watch)(e, document.body), () => (0, E.unwatch)(e, document.body)
  }, [j, k]), s.useEffect(() => {
    null != y && (0, h.updateClanSetup)(t, {
      requiredGameId: y
    })
  }, [y, t]);
  let K = s.useMemo(() => null != L && Object.values(L).some(e => null != e), [L]),
    z = s.useMemo(() => null != L && Object.values(L).length > 0 ? (0, A.getClanSetupProgressSteps)(L).find(e => e.hasError) : null, [L]),
    q = s.useCallback(() => {
      G(1), h.updateClanSetup(t, {
        currentStep: null == z ? void 0 : z.index
      })
    }, [null == z ? void 0 : z.index, t]),
    Q = s.useCallback(() => {
      (0, A.submitClanSetup)({
        guildId: t,
        onClose: n,
        progress: O
      })
    }, [n, t, O]),
    Z = s.useRef(null),
    X = null != z ? (0, a.jsxs)("div", {
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
              onClick: q,
              children: e
            }, t)
          })
        })]
      })]
    }) : null;
  return (0, a.jsx)(o.animated.div, {
    ref: Z,
    style: B,
    className: v.modal,
    children: (0, a.jsxs)(d.FocusRingScope, {
      containerRef: Z,
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
            style: F,
            className: l()(v.stepsContainer, {
              [v.hidden]: !k
            }),
            children: (0, a.jsx)(T.default, {
              guildId: t
            })
          }), (0, a.jsx)("div", {
            className: l()(v.navigationContainer, {
              [v.elevatedNavigationContainer]: !k
            }),
            children: (0, a.jsx)(g.default, {
              steps: P,
              progress: O,
              updateCurrentStep: W,
              animationStyle: F,
              animationClassName: l()({
                [v.hidden]: !k
              })
            })
          })]
        }), (0, a.jsx)(o.animated.div, {
          style: F,
          className: l()(v.divider, {
            [v.hidden]: !k,
            [v.dividerResponsive]: k
          })
        }), (0, a.jsx)(o.animated.div, {
          style: H,
          className: l()(v.sidebar, {
            [v.sidebarResponsive]: k
          }),
          children: (0, a.jsx)(I.default, {
            guildId: t,
            signed: x,
            setSigned: k ? void 0 : D,
            sidebarWidth: 380,
            windowWidth: b,
            transition: V,
            brandPrimaryColor: O.brandPrimaryColor
          })
        })]
      }), Y((e, t) => t && (0, a.jsx)(o.animated.div, {
        style: e,
        className: v.submit,
        children: (0, a.jsx)(d.Tooltip, {
          color: d.Tooltip.Colors.GREY,
          tooltipClassName: v.tooltip,
          text: X,
          "aria-label": null != z ? N.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
          shouldShow: null != z,
          forceOpen: null != z,
          children: e => (0, a.jsx)(S.default, {
            ...e,
            themeColor: O.brandPrimaryColor,
            disabled: !x || K,
            submitting: M,
            look: d.Button.Looks.FILLED,
            size: d.Button.Sizes.MEDIUM,
            color: d.Button.Colors.BRAND,
            onClick: Q,
            children: N.default.Messages.FINISH
          })
        })
      }))]
    })
  })
}