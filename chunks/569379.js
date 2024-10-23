n.d(t, {
    E: function () {
        return i;
    },
    G: function () {
        return l;
    }
}),
    n(47120);
var o = n(192379),
    s = n(481060),
    r = n(410030),
    a = n(113434);
function l() {
    let [{ spring: e }, t] = (0, s.useSpring)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: o.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000
                });
        }, [t])
    };
}
function i(e, t) {
    var n;
    let o = (0, a.z)(e),
        s = null !== (n = (0, r.i6)()) && void 0 !== n ? n : 0,
        l = 'var(--green-330)',
        i = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        c = t ? i[s] : ['#828288', '#CBCDD4'][s];
    return {
        backgroundTop: c,
        backgroundBottom: t ? i[s] : ['#535356', '#8B8C95'][s],
        foreground: l,
        glow: t && o ? l : '#C4C1D66E'
    };
}
