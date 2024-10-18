n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120),
    n(411104);
var s = n(735250),
    r = n(470079),
    i = n(442837),
    a = n(481060),
    l = n(607070),
    o = n(409302),
    c = n(474936);
function u(e) {
    let { giftStyle: t, className: n, shouldAnimate: u = !0, defaultAnimationState: d, idleAnimationState: _ } = e,
        h = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        [E, g] = r.useState(d),
        p = r.useRef((0, o._)(t, E)),
        [m, f] = r.useState(null == _),
        [I, N] = r.useState(!1),
        [T, A] = r.useState(-1),
        x = () => {
            (p.current = (0, o._)(t, E)), A((e) => e + 1);
        },
        C = () => {
            f(!1), N(!0), A(-1), g(d);
        };
    r.useEffect(() => {
        null == _ && g(d);
    }, [_, d]),
        r.useEffect(() => {
            if (null != _ && T >= 0) {
                C();
                return;
            }
            x();
        }, [t, _]),
        r.useEffect(() => {
            (!I || null == _) && x();
        }, [E]),
        r.useEffect(() => {
            I && (f(null == _), N(!1), x());
        }, [I]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, s.jsx)(a.LottieAnimation, {
        importData: p.current,
        shouldAnimate: !h && u,
        className: n,
        versionKey: T,
        onComplete:
            null != _
                ? () => {
                      null != _ && (g(_), f(!0));
                  }
                : void 0,
        loop: m
    });
}
