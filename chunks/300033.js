n.d(t, {
    R: function () {
        return u;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(607070);
function u(e) {
    let { animationData: t, className: n } = e,
        [r, u] = (0, a.useState)(0),
        c = (0, o.e7)([l.Z], () => l.Z.useReducedMotion);
    return (
        (0, a.useEffect)(() => {
            let e = r + 1;
            e < t.length && t[e]();
        }, [r, t]),
        (0, i.jsx)(s.LottieAnimation, {
            importData: t[r],
            className: n,
            shouldAnimate: !c,
            versionKey: r,
            onComplete: () => {
                r < t.length - 1 && u(r + 1);
            },
            loop: r === t.length - 1
        })
    );
}
