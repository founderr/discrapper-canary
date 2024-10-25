n.d(t, {
    E: function () {
        return l;
    },
    G: function () {
        return i;
    }
}),
    n(47120);
var r = n(192379),
    o = n(481060),
    a = n(410030),
    s = n(113434);
function i() {
    let [{ spring: e }, t] = (0, o.useSpring)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: r.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000
                });
        }, [t])
    };
}
function l(e, t) {
    var n;
    let r = (0, s.z)(e),
        o = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
        i = 'var(--green-330)',
        l = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        c = t ? l[o] : ['#828288', '#CBCDD4'][o];
    return {
        backgroundTop: c,
        backgroundBottom: t ? l[o] : ['#535356', '#8B8C95'][o],
        foreground: i,
        glow: t && r ? i : '#C4C1D66E'
    };
}
