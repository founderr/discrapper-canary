n.d(t, {
    E: function () {
        return a;
    },
    G: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    o = n(481060),
    i = n(410030),
    l = n(113434);
function s() {
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
function a(e, t) {
    var n;
    let r = (0, l.z)(e),
        o = null !== (n = (0, i.i6)()) && void 0 !== n ? n : 0,
        s = 'var(--green-330)',
        a = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        c = t ? a[o] : ['#828288', '#CBCDD4'][o];
    return {
        backgroundTop: c,
        backgroundBottom: t ? a[o] : ['#535356', '#8B8C95'][o],
        foreground: s,
        glow: t && r ? s : '#C4C1D66E'
    };
}
