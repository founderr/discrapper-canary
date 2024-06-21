n.d(t, {
  T: function() {
    return m
  },
  i: function() {
    return g
  }
});
var i = n(735250),
  s = n(470079),
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
    hasError: g
  } = e, p = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), N = (0, c.useToken)(c.tokens.colors.BG_SURFACE_OVERLAY), T = s.useMemo(() => (0, d.j1)(m, N.hex()), [m, N]), C = null != T, S = (0, r.useSpring)({
    transform: E ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: p || !I
  }), A = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: h.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: h.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
    })]
  });
  return (0, i.jsx)(c.Tooltip, {
    color: g ? c.Tooltip.Colors.GREY : c.Tooltip.Colors.BRAND,
    text: g ? A : l,
    "aria-label": g ? h.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : l,
    shouldShow: null != n,
    tooltipStyle: T,
    tooltipClassName: a()(_.progressStepTooltip, {
      [_.progressStepTooltipCustomColors]: !g && null != T
    }),
    children: e => (0, i.jsxs)(c.Clickable, {
      ...e,
      "aria-label": h.Z.Messages.STEP_NUMBER.format({
        number: t
      }),
      tabIndex: null == n ? -1 : void 0,
      onClick: n,
      className: _.progressStepWrapper,
      children: [g && (0, i.jsx)(c.WarningIcon, {
        size: "xs",
        color: "currentColor",
        className: _.errorIcon
      }), (0, i.jsx)("div", {
        className: _.progressStep,
        children: (0, i.jsx)(r.animated.div, {
          style: {
            ...S,
            ...T
          },
          className: a()(_.progressStepFill, {
            [_.customProgressStepFill]: C
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
    furthestStepIndex: s,
    onStepClick: l,
    stepFillColor: o,
    animationStyle: c,
    className: u
  } = e;
  return (0, i.jsx)(r.animated.div, {
    style: c,
    className: a()(_.progressContainer, u),
    children: t.map(e => {
      let {
        index: t,
        name: a,
        hasError: r
      } = e;
      return (0, i.jsx)(I, {
        name: a,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= n,
        hasError: r,
        index: t,
        fillBackgroundColor: o,
        animate: n === t || n + 1 === t
      }, a)
    })
  })
}

function g(e) {
  let {
    className: t,
    isBackDisabled: n,
    isNextDisabled: s,
    onNextClick: l,
    onBackClick: o,
    nextButtonBackgroundColor: u,
    nextButtonClassName: d,
    nextButtonAnimationStyle: I
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(_.buttonsContainer, t),
    children: [(0, i.jsx)(c.Button, {
      look: c.Button.Looks.OUTLINED,
      size: c.Button.Sizes.MEDIUM,
      color: c.Button.Colors.PRIMARY,
      onClick: o,
      disabled: n,
      children: h.Z.Messages.BACK
    }), (0, i.jsx)(r.animated.div, {
      style: I,
      children: (0, i.jsx)(E.Z, {
        className: d,
        themeColor: u,
        color: c.Button.Colors.BRAND,
        look: c.Button.Looks.FILLED,
        size: c.Button.Sizes.MEDIUM,
        onClick: l,
        disabled: s,
        children: h.Z.Messages.NEXT
      })
    })]
  })
}