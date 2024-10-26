n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    r = n(754961),
    l = n(80242),
    o = n(837275);
function c(e) {
    let { guildId: t, progress: n, updateCurrentStep: a, animationStyle: c, animationClassName: d, inSettings: u } = e,
        {
            onNextClick: _,
            onBackClick: E,
            isNextDisabled: h,
            isBackDisabled: m
        } = (0, l.o)({
            progress: n,
            updateCurrentStep: a,
            guildId: t,
            inSettings: u
        }),
        { brandPrimaryColor: I } = n;
    return (0, i.jsx)('div', {
        className: o.navigation,
        children: (0, i.jsx)(r.i, {
            isBackDisabled: m,
            isNextDisabled: h,
            backButtonClassName: s()(m && o.hiddenBackButton),
            onNextClick: _,
            onBackClick: E,
            nextButtonBackgroundColor: I,
            nextButtonClassName: d,
            nextButtonAnimationStyle: c
        })
    });
}
