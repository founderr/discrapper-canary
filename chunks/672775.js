"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("735250");
n("470079");
var a = n("546735"),
  s = n("754961"),
  i = n("590190");

function r(e) {
  let {
    steps: t,
    progress: n,
    updateCurrentStep: r,
    animationStyle: o,
    animationClassName: u
  } = e, {
    onStepClick: d,
    onNextClick: c,
    onBackClick: f,
    isNextDisabled: h,
    isBackDisabled: p
  } = (0, a.useClanSetupModalNavigation)({
    progress: n,
    updateCurrentStep: r
  }), {
    currentStep: m,
    furthestStep: C,
    brandPrimaryColor: g
  } = n;
  return (0, l.jsxs)("div", {
    className: i.navigation,
    children: [(0, l.jsx)(s.ClanSetupProgress, {
      animationStyle: o,
      className: u,
      steps: t,
      currentStepIndex: m,
      furthestStepIndex: C,
      onStepClick: d,
      stepFillColor: g
    }), (0, l.jsx)(s.ClanSetupProgressButtons, {
      isBackDisabled: p,
      isNextDisabled: h,
      onNextClick: c,
      onBackClick: f,
      nextButtonBackgroundColor: g,
      nextButtonClassName: u,
      nextButtonAnimationStyle: o
    })]
  })
}