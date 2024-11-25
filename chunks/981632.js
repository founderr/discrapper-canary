n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(411104);
var r = n(200651),
    a = n(192379),
    u = n(442837),
    l = n(481060),
    i = n(607070),
    d = n(409302),
    c = n(474936);
function h(e) {
    let { giftStyle: t, className: n, shouldAnimate: h = !0, defaultAnimationState: s, idleAnimationState: f } = e,
        b = (0, u.e7)([i.Z], () => i.Z.useReducedMotion),
        [o, E] = a.useState(s),
        S = a.useRef((0, d._)(t, o)),
        [R, k] = a.useState(null == f),
        [I, O] = a.useState(!1),
        [_, m] = a.useState(-1),
        p = () => {
            (S.current = (0, d._)(t, o)), m((e) => e + 1);
        },
        A = () => {
            k(!1), O(!0), m(-1), E(s);
        };
    a.useEffect(() => {
        null == f && E(s);
    }, [f, s]),
        a.useEffect(() => {
            if (null != f && _ >= 0) {
                A();
                return;
            }
            p();
        }, [t, f]),
        a.useEffect(() => {
            (!I || null == f) && p();
        }, [o]),
        a.useEffect(() => {
            I && (k(null == f), O(!1), p());
        }, [I]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, r.jsx)(l.LottieAnimation, {
        importData: S.current,
        shouldAnimate: !b && h,
        className: n,
        versionKey: _,
        onComplete:
            null != f
                ? () => {
                      null != f && (E(f), k(!0));
                  }
                : void 0,
        loop: R
    });
}
