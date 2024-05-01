"use strict";
a.r(t), a.d(t, {
  ClanSetupProgress: function() {
    return E
  },
  ClanSetupProgressButtons: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("718017"),
  r = a("442837"),
  o = a("481060"),
  u = a("607070"),
  d = a("689938"),
  c = a("156610");

function f(e) {
  let {
    index: t,
    onClick: a,
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
  return (0, n.jsx)(o.Tooltip, {
    color: o.Tooltip.Colors.BRAND,
    text: s,
    shouldShow: null != a,
    tooltipClassName: c.progressStepTooltip,
    children: e => (0, n.jsx)(o.Clickable, {
      ...e,
      "aria-label": d.default.Messages.STEP_NUMBER.format({
        number: t
      }),
      onClick: a,
      className: l()(c.progressStepContainer, {
        [c.clickable]: null != a
      }),
      children: (0, n.jsx)("div", {
        className: c.progressStep,
        children: (0, n.jsx)(i.animated.div, {
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
    currentStepIndex: a,
    furthestStepIndex: s,
    onStepClick: l
  } = e;
  return (0, n.jsx)("div", {
    className: c.progressContainer,
    children: t.map(e => {
      let {
        index: t,
        name: i
      } = e;
      return (0, n.jsx)(f, {
        name: i,
        onClick: t <= s ? () => l(t) : void 0,
        isActive: t <= a,
        index: t,
        animate: a === t || a + 1 === t
      }, i)
    })
  })
}

function h(e) {
  let {
    children: t,
    className: a,
    isBackDisabled: s,
    isNextDisabled: i,
    onNextClick: r,
    onBackClick: u
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(c.buttonsContainer, a),
    children: [(0, n.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: u,
      disabled: s,
      children: d.default.Messages.PAGINATION_PREVIOUS
    }), t, (0, n.jsx)(o.Button, {
      look: o.Button.Looks.FILLED,
      size: o.Button.Sizes.MEDIUM,
      onClick: r,
      disabled: i,
      children: d.default.Messages.PAGINATION_NEXT
    })]
  })
}