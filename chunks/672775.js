n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(546735),
  l = n(754961),
  a = n(414868);

function r(e) {
  let {
    steps: t,
    progress: n,
    updateCurrentStep: r,
    animationStyle: o,
    animationClassName: c
  } = e, {
    onStepClick: u,
    onNextClick: d,
    onBackClick: E,
    isNextDisabled: h,
    isBackDisabled: _
  } = (0, i.Z)({
    progress: n,
    updateCurrentStep: r
  }), {
    currentStep: I,
    furthestStep: m,
    brandPrimaryColor: T
  } = n;
  return (0, s.jsxs)("div", {
    className: a.navigation,
    children: [(0, s.jsx)(l.T, {
      animationStyle: o,
      className: c,
      steps: t,
      currentStepIndex: I,
      furthestStepIndex: m,
      onStepClick: u,
      stepFillColor: T
    }), (0, s.jsx)(l.i, {
      isBackDisabled: _,
      isNextDisabled: h,
      onNextClick: d,
      onBackClick: E,
      nextButtonBackgroundColor: T,
      nextButtonClassName: c,
      nextButtonAnimationStyle: o
    })]
  })
}