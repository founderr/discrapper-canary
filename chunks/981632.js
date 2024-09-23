n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120),
    n(411104);
var r = n(735250),
    a = n(470079),
    i = n(442837),
    l = n(481060),
    s = n(607070),
    o = n(409302),
    u = n(474936);
function c(e) {
    let { giftStyle: t, className: n, shouldAnimate: c = !0, defaultAnimationState: d, idleAnimationState: I } = e,
        _ = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        [h, f] = a.useState(d),
        S = a.useRef((0, o._)(t, h)),
        [m, E] = a.useState(null == I),
        [p, T] = a.useState(!1),
        [C, N] = a.useState(-1),
        A = () => {
            (S.current = (0, o._)(t, h)), N((e) => e + 1);
        },
        O = () => {
            E(!1), T(!0), N(-1), f(d);
        };
    a.useEffect(() => {
        null == I && f(d);
    }, [I, d]),
        a.useEffect(() => {
            if (null != I && C >= 0) {
                O();
                return;
            }
            A();
        }, [t, I]),
        a.useEffect(() => {
            (!p || null == I) && A();
        }, [h]),
        a.useEffect(() => {
            p && (E(null == I), T(!1), A());
        }, [p]);
    if (!u.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, r.jsx)(l.LottieAnimation, {
        importData: S.current,
        shouldAnimate: !_ && c,
        className: n,
        versionKey: C,
        onComplete:
            null != I
                ? () => {
                      null != I && (f(I), E(!0));
                  }
                : void 0,
        loop: m
    });
}
