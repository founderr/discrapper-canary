n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(546735),
    l = n(754961),
    a = n(348944);
function s(e) {
    let { steps: t, progress: n, updateCurrentStep: s, animationStyle: o, animationClassName: c } = e,
        {
            onStepClick: d,
            onNextClick: u,
            onBackClick: h,
            isNextDisabled: m,
            isBackDisabled: p
        } = (0, r.Z)({
            progress: n,
            updateCurrentStep: s
        }),
        { currentStep: g, furthestStep: f, brandPrimaryColor: _ } = n;
    return (0, i.jsxs)('div', {
        className: a.navigation,
        children: [
            (0, i.jsx)(l.T, {
                animationStyle: o,
                className: c,
                steps: t,
                currentStepIndex: g,
                furthestStepIndex: f,
                onStepClick: d,
                stepFillColor: _
            }),
            (0, i.jsx)(l.i, {
                isBackDisabled: p,
                isNextDisabled: m,
                onNextClick: u,
                onBackClick: h,
                nextButtonBackgroundColor: _,
                nextButtonClassName: c,
                nextButtonAnimationStyle: o
            })
        ]
    });
}
