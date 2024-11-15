n.d(t, {
    E: function () {
        return s;
    },
    G: function () {
        return a;
    }
}),
    n(47120);
var r = n(192379),
    o = n(481060),
    l = n(410030),
    i = n(113434);
function a() {
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
function s(e, t) {
    var n;
    let r = (0, i.z)(e),
        o = null !== (n = (0, l.i6)()) && void 0 !== n ? n : 0,
        a = 'var(--green-330)',
        s = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        c = t ? s[o] : ['#828288', '#CBCDD4'][o];
    return {
        backgroundTop: c,
        backgroundBottom: t ? s[o] : ['#535356', '#8B8C95'][o],
        foreground: a,
        glow: t && r ? a : '#C4C1D66E'
    };
}
