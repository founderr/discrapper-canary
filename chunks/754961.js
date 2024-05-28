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
  r = n("920906"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("729017"),
  f = n("603368"),
  E = n("284019"),
  C = n("689938"),
  h = n("954834");

function _(e) {
  let {
    index: t,
    onClick: n,
    name: l,
    isActive: E,
    animate: _,
    fillBackgroundColor: S,
    hasError: m
  } = e, p = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), I = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), g = s.useMemo(() => (0, f.getClanPrimaryButtonStyles)(S, I.hex()), [S, I]), T = null != g, A = (0, r.useSpring)({
    transform: E ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: p || !_
  }), N = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: C.default.Messages.CLAN_SUBMIT_ERROR_TITLE
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: C.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
    })]
  });
  return (0, a.jsx)(u.Tooltip, {
    color: m ? u.Tooltip.Colors.GREY : u.Tooltip.Colors.BRAND,
    text: m ? N : l,
    "aria-label": m ? C.default.Messages.CLAN_SUBMIT_ERROR_TITLE : l,
    shouldShow: null != n,
    tooltipStyle: g,
    tooltipClassName: i()(h.progressStepTooltip, {
      [h.progressStepTooltipCustomColors]: !m && null != g
    }),
    children: e => (0, a.jsxs)(u.Clickable, {
      ...e,
      "aria-label": C.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      tabIndex: null == n ? -1 : void 0,
      onClick: n,
      className: h.progressStepWrapper,
      children: [m && (0, a.jsx)(c.default, {
        className: h.errorIcon
      }), (0, a.jsx)("div", {
        className: h.progressStep,
        children: (0, a.jsx)(r.animated.div, {
          style: {
            ...A,
            ...g
          },
          className: i()(h.progressStepFill, {
            [h.customProgressStepFill]: T
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
    stepFillColor: o,
    animationStyle: u,
    className: d
  } = e;
  return (0, a.jsx)(r.animated.div, {
    style: u,
    className: i()(h.progressContainer, d),
    children: t.map(e => {
      let {
        index: t,
        name: i,
        hasError: r
      } = e;
      return (0, a.jsx)(_, {
        name: i,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= n,
        hasError: r,
        index: t,
        fillBackgroundColor: o,
        animate: n === t || n + 1 === t
      }, i)
    })
  })
}

function m(e) {
  let {
    className: t,
    isBackDisabled: n,
    isNextDisabled: s,
    onNextClick: l,
    onBackClick: o,
    nextButtonBackgroundColor: d,
    nextButtonClassName: c,
    nextButtonAnimationStyle: f
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(h.buttonsContainer, t),
    children: [(0, a.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      size: u.Button.Sizes.MEDIUM,
      color: u.Button.Colors.PRIMARY,
      onClick: o,
      disabled: n,
      children: C.default.Messages.BACK
    }), (0, a.jsx)(r.animated.div, {
      style: f,
      children: (0, a.jsx)(E.default, {
        className: c,
        themeColor: d,
        color: u.Button.Colors.BRAND,
        look: u.Button.Looks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        onClick: l,
        disabled: s,
        children: C.default.Messages.NEXT
      })
    })]
  })
}