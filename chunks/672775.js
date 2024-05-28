"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var s = n("546735"),
  l = n("754961"),
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
    isNextDisabled: E,
    isBackDisabled: C
  } = (0, s.useClanSetupModalNavigation)({
    progress: n,
    updateCurrentStep: r
  }), {
    currentStep: h,
    furthestStep: _,
    brandPrimaryColor: S
  } = n;
  return (0, a.jsxs)("div", {
    className: i.navigation,
    children: [(0, a.jsx)(l.ClanSetupProgress, {
      animationStyle: o,
      className: u,
      steps: t,
      currentStepIndex: h,
      furthestStepIndex: _,
      onStepClick: d,
      stepFillColor: S
    }), (0, a.jsx)(l.ClanSetupProgressButtons, {
      isBackDisabled: C,
      isNextDisabled: E,
      onNextClick: c,
      onBackClick: f,
      nextButtonBackgroundColor: S,
      nextButtonClassName: u,
      nextButtonAnimationStyle: o
    })]
  })
}