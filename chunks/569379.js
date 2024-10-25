t.d(n, {
    E: function () {
        return l;
    },
    G: function () {
        return i;
    }
}),
    t(47120);
var r = t(192379),
    o = t(481060),
    a = t(410030),
    s = t(113434);
function i() {
    let [{ spring: e }, n] = (0, o.useSpring)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: r.useCallback(() => {
            n({ spring: 1 }),
                n({
                    spring: 0,
                    delay: 2000
                });
        }, [n])
    };
}
function l(e, n) {
    var t;
    let r = (0, s.z)(e),
        o = null !== (t = (0, a.i6)()) && void 0 !== t ? t : 0,
        i = 'var(--green-330)',
        l = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        c = n ? l[o] : ['#828288', '#CBCDD4'][o];
    return {
        backgroundTop: c,
        backgroundBottom: n ? l[o] : ['#535356', '#8B8C95'][o],
        foreground: i,
        glow: n && r ? i : '#C4C1D66E'
    };
}
