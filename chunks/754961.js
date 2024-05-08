"use strict";
n.r(t), n.d(t, {
  ClanSetupProgress: function() {
    return g
  },
  ClanSetupProgressButtons: function() {
    return E
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("729017"),
  f = n("676327"),
  h = n("284019"),
  p = n("689938"),
  m = n("258082");

function C(e) {
  let {
    index: t,
    onClick: n,
    name: s,
    isActive: h,
    animate: C,
    fillBackgroundColor: g,
    hasError: E
  } = e, S = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), _ = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), I = a.useMemo(() => (0, f.getClanPrimaryButtonStyles)(g, _.hex()), [g, _]), N = null != I, T = (0, r.useSpring)({
    transform: h ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: S || !C
  }), A = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: p.default.Messages.CLAN_SUBMIT_ERROR_TITLE
    }), (0, l.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: p.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
    })]
  });
  return (0, l.jsx)(u.Tooltip, {
    color: E ? u.Tooltip.Colors.GREY : u.Tooltip.Colors.BRAND,
    text: E ? A : s,
    "aria-label": E ? p.default.Messages.CLAN_SUBMIT_ERROR_TITLE : s,
    shouldShow: null != n,
    tooltipStyle: I,
    tooltipClassName: m.progressStepTooltip,
    children: e => (0, l.jsxs)(u.Clickable, {
      ...e,
      "aria-label": p.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      tabIndex: null == n ? -1 : void 0,
      onClick: n,
      className: m.progressStepWrapper,
      children: [E && (0, l.jsx)(c.default, {
        className: m.errorIcon
      }), (0, l.jsx)("div", {
        className: m.progressStep,
        children: (0, l.jsx)(r.animated.div, {
          style: {
            ...T,
            ...I
          },
          className: i()(m.progressStepFill, {
            [m.customProgressStepFill]: N
          })
        })
      })]
    })
  })
}

function g(e) {
  let {
    steps: t,
    currentStepIndex: n,
    furthestStepIndex: a,
    onStepClick: s,
    stepFillColor: o,
    animationStyle: u,
    className: d
  } = e;
  return (0, l.jsx)(r.animated.div, {
    style: u,
    className: i()(m.progressContainer, d),
    children: t.map(e => {
      let {
        index: t,
        name: i,
        hasError: r
      } = e;
      return (0, l.jsx)(C, {
        name: i,
        onClick: t <= a ? () => s(t) : void 0,
        isActive: t <= n,
        hasError: r,
        index: t,
        fillBackgroundColor: o,
        animate: n === t || n + 1 === t
      }, i)
    })
  })
}

function E(e) {
  let {
    className: t,
    isBackDisabled: n,
    isNextDisabled: a,
    onNextClick: s,
    onBackClick: o,
    nextButtonBackgroundColor: d,
    nextButtonClassName: c,
    nextButtonAnimationStyle: f
  } = e;
  return (0, l.jsxs)("div", {
    className: i()(m.buttonsContainer, t),
    children: [(0, l.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      size: u.Button.Sizes.MEDIUM,
      color: u.Button.Colors.PRIMARY,
      onClick: o,
      disabled: n,
      children: p.default.Messages.BACK
    }), (0, l.jsx)(r.animated.div, {
      style: f,
      children: (0, l.jsx)(h.default, {
        className: c,
        themeColor: d,
        color: u.Button.Colors.BRAND,
        look: u.Button.Looks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        onClick: s,
        disabled: a,
        children: p.default.Messages.NEXT
      })
    })]
  })
}