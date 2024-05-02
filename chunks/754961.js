"use strict";
n.r(t), n.d(t, {
  ClanSetupProgress: function() {
    return E
  },
  ClanSetupProgressButtons: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("718017"),
  r = n("442837"),
  o = n("481060"),
  u = n("607070"),
  d = n("689938"),
  c = n("156610");

function f(e) {
  let {
    index: t,
    onClick: n,
    name: s,
    isActive: f,
    animate: E
  } = e, h = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), _ = (0, i.useSpring)({
    transform: f ? "translateX(0%)" : "translateX(-100%)",
    config: {
      ...i.config.stiff,
      clamp: !0
    },
    immediate: h || !E
  });
  return (0, a.jsx)(o.Tooltip, {
    color: o.Tooltip.Colors.BRAND,
    text: s,
    shouldShow: null != n,
    tooltipClassName: c.progressStepTooltip,
    children: e => (0, a.jsx)(o.Clickable, {
      ...e,
      "aria-label": d.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      onClick: n,
      className: l()(c.progressStepContainer, {
        [c.clickable]: null != n
      }),
      children: (0, a.jsx)("div", {
        className: c.progressStep,
        children: (0, a.jsx)(i.animated.div, {
          className: c.progressStepFill,
          style: _
        })
      })
    })
  })
}

function E(e) {
  let {
    steps: t,
    currentStepIndex: n,
    furthestStepIndex: s,
    onStepClick: l
  } = e;
  return (0, a.jsx)("div", {
    className: c.progressContainer,
    children: t.map(e => {
      let {
        index: t,
        name: i
      } = e;
      return (0, a.jsx)(f, {
        name: i,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= n,
        index: t,
        animate: n === t || n + 1 === t
      }, i)
    })
  })
}

function h(e) {
  let {
    children: t,
    className: n,
    isBackDisabled: s,
    isNextDisabled: i,
    onNextClick: r,
    onBackClick: u
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(c.buttonsContainer, n),
    children: [(0, a.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: u,
      disabled: s,
      children: d.default.Messages.PAGINATION_PREVIOUS
    }), t, (0, a.jsx)(o.Button, {
      look: o.Button.Looks.FILLED,
      size: o.Button.Sizes.MEDIUM,
      onClick: r,
      disabled: i,
      children: d.default.Messages.PAGINATION_NEXT
    })]
  })
}