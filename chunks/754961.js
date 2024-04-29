"use strict";
n.r(t), n.d(t, {
  ClanSetupProgress: function() {
    return u
  },
  ClanSetupProgressButtons: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("689938"),
  o = n("156610");

function u(e) {
  let {
    sections: t,
    furthestStep: n,
    onStepClick: s
  } = e;
  return (0, a.jsx)("div", {
    className: o.progressContainer,
    children: t.map(e => (0, a.jsx)("div", {
      className: o.progressStep,
      children: e.map(e => (0, a.jsx)(i.Clickable, {
        "aria-label": r.default.Messages.STEP_NUMBER.format({
          number: e
        }),
        onClick: e <= n ? () => s(e) : void 0,
        className: l()(o.progressSubStep, {
          [o.clickable]: e <= n,
          [o.progressStepFill]: e < n
        })
      }, "step-".concat(e)))
    }, "section-".concat(e[0])))
  })
}

function d(e) {
  let {
    children: t,
    className: n,
    isBackDisabled: s,
    isNextDisabled: u,
    onNextClick: d,
    onBackClick: c
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(o.buttonsContainer, n),
    children: [(0, a.jsx)(i.Button, {
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.MEDIUM,
      color: i.Button.Colors.PRIMARY,
      onClick: c,
      disabled: s,
      children: r.default.Messages.PAGINATION_PREVIOUS
    }), t, (0, a.jsx)(i.Button, {
      look: i.Button.Looks.FILLED,
      size: i.Button.Sizes.MEDIUM,
      onClick: d,
      disabled: u,
      children: r.default.Messages.PAGINATION_NEXT
    })]
  })
}