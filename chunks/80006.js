n.d(t, {
    I: function () {
        return u;
    }
});
var r = n(120356),
    i = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(607070);
function l() {
    return (0, a.cj)([s.Z], () => {
        let { fontScale: e, fontScaleClass: t, keyboardModeEnabled: n, saturation: r, desaturateUserColors: i, useForcedColors: a, systemForcedColors: o, useReducedMotion: l, alwaysShowLinkDecorations: u } = s.Z;
        return {
            fontScale: e,
            fontScaleClass: t,
            keyboardModeEnabled: n,
            saturation: r,
            desaturateUserColors: i,
            useForcedColors: a,
            systemForcedColors: o,
            useReducedMotion: l,
            alwaysShowLinkDecorations: u
        };
    });
}
function u() {
    let e = l(),
        t = window.CSS.supports('selector(::-webkit-scrollbar)'),
        n = i()({
            'low-saturation': e.saturation <= o.LOW_SATURATION_THRESHOLD,
            'keyboard-mode': e.keyboardModeEnabled,
            'decorate-links': e.alwaysShowLinkDecorations,
            'no-webkit-scrollbar': !t,
            'has-webkit-scrollbar': t
        });
    return {
        accessibilitySettings: e,
        appWrapperClassName: n
    };
}
