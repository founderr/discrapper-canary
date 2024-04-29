"use strict";
a.r(t), a.d(t, {
  ClanSetupProgress: function() {
    return u
  },
  ClanSetupProgressButtons: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("689938"),
  o = a("590190");

function u(e) {
  let {
    sections: t,
    furthestStep: a,
    onStepClick: s
  } = e;
  return (0, n.jsx)("div", {
    className: o.progressContainer,
    children: t.map(e => (0, n.jsx)("div", {
      className: o.progressStep,
      children: e.map(e => (0, n.jsx)(i.Clickable, {
        "aria-label": r.default.Messages.STEP_NUMBER.format({
          number: e
        }),
        onClick: e <= a ? () => s(e) : void 0,
        className: l()(o.progressSubStep, {
          [o.clickable]: e <= a,
          [o.progressStepFill]: e < a
        })
      }, "step-".concat(e)))
    }, "section-".concat(e[0])))
  })
}

function d(e) {
  let {
    children: t,
    className: a,
    isBackDisabled: s,
    isNextDisabled: u,
    onNextClick: d,
    onBackClick: c
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(o.buttonsContainer, a),
    children: [(0, n.jsx)(i.Button, {
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.MEDIUM,
      color: i.Button.Colors.PRIMARY,
      onClick: c,
      disabled: s,
      children: r.default.Messages.PAGINATION_PREVIOUS
    }), t, (0, n.jsx)(i.Button, {
      look: i.Button.Looks.FILLED,
      size: i.Button.Sizes.MEDIUM,
      onClick: d,
      disabled: u,
      children: r.default.Messages.PAGINATION_NEXT
    })]
  })
}