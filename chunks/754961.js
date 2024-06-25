n.d(t, {
  T: function() {
    return m
  },
  i: function() {
    return T
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(920906),
  o = n(442837),
  c = n(481060),
  u = n(607070),
  d = n(603368),
  E = n(284019),
  h = n(689938),
  _ = n(16747);

function I(e) {
  let {
    index: t,
    onClick: n,
    name: l,
    isActive: E,
    animate: I,
    fillBackgroundColor: m,
    hasError: T
  } = e, g = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), p = (0, c.useToken)(c.tokens.colors.BG_SURFACE_OVERLAY), N = i.useMemo(() => (0, d.j1)(m, p.hex()), [m, p]), S = null != N, C = (0, r.useSpring)({
    transform: E ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: g || !I
  }), A = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: h.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: h.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
    })]
  });
  return (0, s.jsx)(c.Tooltip, {
    color: T ? c.Tooltip.Colors.GREY : c.Tooltip.Colors.BRAND,
    text: T ? A : l,
    "aria-label": T ? h.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : l,
    shouldShow: null != n,
    tooltipStyle: N,
    tooltipClassName: a()(_.progressStepTooltip, {
      [_.progressStepTooltipCustomColors]: !T && null != N
    }),
    children: e => (0, s.jsxs)(c.Clickable, {
      ...e,
      "aria-label": h.Z.Messages.STEP_NUMBER.format({
        number: t
      }),
      tabIndex: null == n ? -1 : void 0,
      onClick: n,
      className: _.progressStepWrapper,
      children: [T && (0, s.jsx)(c.WarningIcon, {
        size: "xs",
        color: "currentColor",
        className: _.errorIcon
      }), (0, s.jsx)("div", {
        className: _.progressStep,
        children: (0, s.jsx)(r.animated.div, {
          style: {
            ...C,
            ...N
          },
          className: a()(_.progressStepFill, {
            [_.customProgressStepFill]: S
          })
        })
      })]
    })
  })
}

function m(e) {
  let {
    steps: t,
    currentStepIndex: n,
    furthestStepIndex: i,
    onStepClick: l,
    stepFillColor: o,
    animationStyle: c,
    className: u
  } = e;
  return (0, s.jsx)(r.animated.div, {
    style: c,
    className: a()(_.progressContainer, u),
    children: t.map(e => {
      let {
        index: t,
        name: a,
        hasError: r
      } = e;
      return (0, s.jsx)(I, {
        name: a,
        onClick: t <= i ? () => l(t) : void 0,
        isActive: t <= n,
        hasError: r,
        index: t,
        fillBackgroundColor: o,
        animate: n === t || n + 1 === t
      }, a)
    })
  })
}

function T(e) {
  let {
    className: t,
    isBackDisabled: n,
    isNextDisabled: i,
    onNextClick: l,
    onBackClick: o,
    nextButtonBackgroundColor: u,
    nextButtonClassName: d,
    nextButtonAnimationStyle: I
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(_.buttonsContainer, t),
    children: [(0, s.jsx)(c.Button, {
      look: c.Button.Looks.OUTLINED,
      size: c.Button.Sizes.MEDIUM,
      color: c.Button.Colors.PRIMARY,
      onClick: o,
      disabled: n,
      children: h.Z.Messages.BACK
    }), (0, s.jsx)(r.animated.div, {
      style: I,
      children: (0, s.jsx)(E.Z, {
        className: d,
        themeColor: u,
        color: c.Button.Colors.BRAND,
        look: c.Button.Looks.FILLED,
        size: c.Button.Sizes.MEDIUM,
        onClick: l,
        disabled: i,
        children: h.Z.Messages.NEXT
      })
    })]
  })
}