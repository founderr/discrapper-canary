t.d(n, {
    f: function () {
        return o;
    }
});
var r = t(748780),
    a = t(442837),
    i = t(481060),
    s = t(607070);
function o() {
    let e = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, i.useSpring)(
        {
            from: {
                opacity: e ? 1 : 0,
                transform: e ? 'scale(1)' : 'scale(1.2)'
            },
            to: {
                opacity: 1,
                transform: 'scale(1)'
            },
            config: {
                easing: r.Z.Easing.quad,
                duration: e ? 0 : 200,
                clamp: !0
            }
        },
        'animate-always'
    );
}
