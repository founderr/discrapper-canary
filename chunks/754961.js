"use strict";
n.r(t), n.d(t, {
  ClanSetupProgress: function() {
    return _
  },
  ClanSetupProgressButtons: function() {
    return C
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
  c = n("676327"),
  f = n("689938"),
  E = n("156610");

function h(e) {
  let {
    index: t,
    onClick: n,
    name: l,
    isActive: h,
    animate: _,
    fillBackgroundColor: C
  } = e, S = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), m = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), p = s.useMemo(() => (0, c.getClanBackgroundStyles)(C, m.hex()), [C, m]), I = null != p, T = (0, r.useSpring)({
    transform: h ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    immediate: S || !_
  });
  return (0, a.jsx)(u.Tooltip, {
    color: u.Tooltip.Colors.BRAND,
    text: l,
    shouldShow: null != n,
    tooltipClassName: E.progressStepTooltip,
    children: e => (0, a.jsx)(u.Clickable, {
      ...e,
      "aria-label": f.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      onClick: n,
      className: i()(E.progressStepContainer, {
        [E.clickable]: null != n
      }),
      children: (0, a.jsx)("div", {
        className: E.progressStep,
        children: (0, a.jsx)(r.animated.div, {
          style: {
            ...T,
            ...p
          },
          className: i()(E.progressStepFill, {
            [E.customProgressStepFill]: I
          })
        })
      })
    })
  })
}

function _(e) {
  let {
    steps: t,
    currentStepIndex: n,
    furthestStepIndex: s,
    onStepClick: l,
    stepFillColor: i
  } = e;
  return (0, a.jsx)("div", {
    className: E.progressContainer,
    children: t.map(e => {
      let {
        index: t,
        name: r
      } = e;
      return (0, a.jsx)(h, {
        name: r,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= n,
        index: t,
        fillBackgroundColor: i,
        animate: n === t || n + 1 === t
      }, r)
    })
  })
}

function C(e) {
  let {
    children: t,
    className: n,
    isBackDisabled: l,
    isNextDisabled: r,
    onNextClick: o,
    onBackClick: d,
    nextButtonBackgroundColor: h
  } = e, _ = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY), C = s.useMemo(() => (0, c.getClanPrimaryButtonStyles)(h, _.hex()), [h, _]), S = null != C;
  return (0, a.jsxs)("div", {
    className: i()(E.buttonsContainer, n),
    children: [(0, a.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      size: u.Button.Sizes.MEDIUM,
      color: u.Button.Colors.PRIMARY,
      onClick: d,
      disabled: l,
      children: f.default.Messages.PAGINATION_PREVIOUS
    }), t, (0, a.jsx)(u.Button, {
      style: C,
      className: S ? E.customButton : void 0,
      look: u.Button.Looks.FILLED,
      size: u.Button.Sizes.MEDIUM,
      color: S ? u.Button.Colors.CUSTOM : u.Button.Colors.BRAND,
      onClick: o,
      disabled: r,
      children: f.default.Messages.PAGINATION_NEXT
    })]
  })
}