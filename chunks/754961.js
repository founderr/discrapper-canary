"use strict";
n.r(t), n.d(t, {
  ClanSetupProgress: function() {
    return S
  },
  ClanSetupProgressButtons: function() {
    return m
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("729017"),
  f = n("676327"),
  E = n("284019"),
  h = n("689938"),
  _ = n("156610");

function C(e) {
  let {
    index: t,
    onClick: n,
    name: l,
    isActive: E,
    animate: C,
    fillBackgroundColor: S,
    hasError: m
  } = e, p = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), I = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), T = s.useMemo(() => (0, f.getClanPrimaryButtonStyles)(S, I.hex()), [S, I]), g = null != T, A = (0, r.useSpring)({
    transform: E ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: p || !C
  }), N = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: h.default.Messages.CLAN_SUBMIT_ERROR_TITLE
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: h.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
    })]
  });
  return (0, a.jsx)(u.Tooltip, {
    color: m ? u.Tooltip.Colors.GREY : u.Tooltip.Colors.BRAND,
    text: m ? N : l,
    "aria-label": m ? h.default.Messages.CLAN_SUBMIT_ERROR_TITLE : l,
    shouldShow: null != n,
    tooltipStyle: T,
    tooltipClassName: _.progressStepTooltip,
    children: e => (0, a.jsxs)(u.Clickable, {
      ...e,
      "aria-label": h.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      onClick: n,
      className: _.progressStepWrapper,
      children: [m && (0, a.jsx)(c.default, {
        className: _.errorIcon
      }), (0, a.jsx)("div", {
        className: _.progressStep,
        children: (0, a.jsx)(r.animated.div, {
          style: {
            ...A,
            ...T
          },
          className: i()(_.progressStepFill, {
            [_.customProgressStepFill]: g
          })
        })
      })]
    })
  })
}

function S(e) {
  let {
    steps: t,
    currentStepIndex: n,
    furthestStepIndex: s,
    onStepClick: l,
    stepFillColor: i
  } = e;
  return (0, a.jsx)("div", {
    className: _.progressContainer,
    children: t.map(e => {
      let {
        index: t,
        name: r,
        hasError: o
      } = e;
      return (0, a.jsx)(C, {
        name: r,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= n,
        hasError: o,
        index: t,
        fillBackgroundColor: i,
        animate: n === t || n + 1 === t
      }, r)
    })
  })
}

function m(e) {
  let {
    children: t,
    className: n,
    isBackDisabled: s,
    isNextDisabled: l,
    onNextClick: r,
    onBackClick: o,
    nextButtonBackgroundColor: d
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(_.buttonsContainer, n),
    children: [(0, a.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      size: u.Button.Sizes.MEDIUM,
      color: u.Button.Colors.PRIMARY,
      onClick: o,
      disabled: s,
      children: h.default.Messages.PAGINATION_PREVIOUS
    }), t, (0, a.jsx)(E.default, {
      themeColor: d,
      color: u.Button.Colors.BRAND,
      look: u.Button.Looks.FILLED,
      size: u.Button.Sizes.MEDIUM,
      onClick: r,
      disabled: l,
      children: h.default.Messages.PAGINATION_NEXT
    })]
  })
}