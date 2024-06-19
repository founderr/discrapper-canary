n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(735250);
n(470079);
var s = n(546735),
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
  } = (0, s.Z)({
    progress: n,
    updateCurrentStep: r
  }), {
    currentStep: I,
    furthestStep: m,
    brandPrimaryColor: g
  } = n;
  return (0, i.jsxs)("div", {
    className: a.navigation,
    children: [(0, i.jsx)(l.T, {
      animationStyle: o,
      className: c,
      steps: t,
      currentStepIndex: I,
      furthestStepIndex: m,
      onStepClick: u,
      stepFillColor: g
    }), (0, i.jsx)(l.i, {
      isBackDisabled: _,
      isNextDisabled: h,
      onNextClick: d,
      onBackClick: E,
      nextButtonBackgroundColor: g,
      nextButtonClassName: c,
      nextButtonAnimationStyle: o
    })]
  })
}