n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    r = n(246364),
    l = n(308083);
function a(e) {
    let { progress: t, updateCurrentStep: n } = e,
        { currentStep: a, gameApplicationIds: s, playstyle: o, interests: c, description: d, tag: u, verificationForm: h } = t,
        m = i.useMemo(() => null != h && h.formFields.some((e) => !(0, r.J)(e)), [h]),
        p = i.useMemo(() => Array.from(c).filter((e) => !l.WZ.has(e) && !l.gh.has(e)), [c]),
        g = i.useCallback(() => {
            n(a + 1);
        }, [a, n]),
        f = i.useCallback(() => {
            n(a - 1);
        }, [a, n]),
        _ = i.useCallback((e) => n(e), [n]),
        E = i.useMemo(() => {
            switch (a) {
                case l.Wy.GAMES:
                    return 0 === s.size;
                case l.Wy.PLAYSTYLE:
                    return o === l.zv.NONE;
                case l.Wy.INTERESTS:
                    return p.length < 3;
                case l.Wy.DESCRIPTION:
                    return 0 === d.length;
                case l.Wy.CUSTOMIZE_TAG_BADGE:
                    return u.length < 2;
                case l.Wy.MEMBER_APPLICATION:
                    return !m;
                default:
                    return !1;
            }
        }, [a, d.length, s.size, m, p.length, o, u.length]),
        I = 0 === a;
    return i.useMemo(
        () => ({
            onStepClick: _,
            onNextClick: g,
            onBackClick: f,
            isNextDisabled: E,
            isBackDisabled: I
        }),
        [I, E, f, g, _]
    );
}
