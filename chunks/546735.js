n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(192379),
    r = n(246364),
    a = n(308083);
function l(e) {
    let { progress: t, updateCurrentStep: n } = e,
        { currentStep: l, gameApplicationIds: s, playstyle: o, interests: c, description: d, tag: u, verificationForm: h } = t,
        m = i.useMemo(() => null != h && h.formFields.some((e) => !(0, r.J)(e)), [h]),
        p = i.useMemo(() => Array.from(c).filter((e) => !a.WZ.has(e) && !a.gh.has(e)), [c]),
        g = i.useCallback(() => {
            n(l + 1);
        }, [l, n]),
        f = i.useCallback(() => {
            n(l - 1);
        }, [l, n]),
        _ = i.useCallback((e) => n(e), [n]),
        E = i.useMemo(() => {
            switch (l) {
                case a.Wy.GAMES:
                    return 0 === s.size;
                case a.Wy.PLAYSTYLE:
                    return o === a.zv.NONE;
                case a.Wy.INTERESTS:
                    return p.length < 3;
                case a.Wy.DESCRIPTION:
                    return 0 === d.length;
                case a.Wy.CUSTOMIZE_TAG_BADGE:
                    return u.length < 2;
                case a.Wy.MEMBER_APPLICATION:
                    return !m;
                default:
                    return !1;
            }
        }, [l, d.length, s.size, m, p.length, o, u.length]),
        I = 0 === l;
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
