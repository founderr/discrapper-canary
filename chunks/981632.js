n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120),
    n(411104);
var a = n(735250),
    r = n(470079),
    l = n(442837),
    i = n(481060),
    s = n(607070),
    o = n(409302),
    d = n(474936);
function u(e) {
    let { giftStyle: t, className: n, shouldAnimate: u = !0, defaultAnimationState: c, idleAnimationState: f } = e,
        h = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        [b, _] = r.useState(c),
        m = r.useRef((0, o._)(t, b)),
        [E, N] = r.useState(null == f),
        [S, g] = r.useState(!1),
        [k, A] = r.useState(-1),
        C = () => {
            (m.current = (0, o._)(t, b)), A((e) => e + 1);
        },
        p = () => {
            N(!1), g(!0), A(-1), _(c);
        };
    r.useEffect(() => {
        null == f && _(c);
    }, [f, c]),
        r.useEffect(() => {
            if (null != f && k >= 0) {
                p();
                return;
            }
            C();
        }, [t, f]),
        r.useEffect(() => {
            (!S || null == f) && C();
        }, [b]),
        r.useEffect(() => {
            S && (N(null == f), g(!1), C());
        }, [S]);
    if (!d.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, a.jsx)(i.LottieAnimation, {
        importData: m.current,
        shouldAnimate: !h && u,
        className: n,
        versionKey: k,
        onComplete:
            null != f
                ? () => {
                      null != f && (_(f), N(!0));
                  }
                : void 0,
        loop: E
    });
}
