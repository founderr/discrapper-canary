n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(607070),
    o = n(409302),
    c = n(474936);
function u(e) {
    let { giftStyle: t, className: n, shouldAnimate: u = !0, defaultAnimationState: d, idleAnimationState: h } = e,
        g = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        [f, m] = r.useState(d),
        p = r.useRef((0, o._)(t, f)),
        [_, x] = r.useState(null == h),
        [E, v] = r.useState(!1),
        [I, N] = r.useState(-1),
        b = () => {
            (p.current = (0, o._)(t, f)), N((e) => e + 1);
        },
        C = () => {
            x(!1), v(!0), N(-1), m(d);
        };
    r.useEffect(() => {
        null == h && m(d);
    }, [h, d]),
        r.useEffect(() => {
            if (null != h && I >= 0) {
                C();
                return;
            }
            b();
        }, [t, h]),
        r.useEffect(() => {
            (!E || null == h) && b();
        }, [f]),
        r.useEffect(() => {
            E && (x(null == h), v(!1), b());
        }, [E]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, i.jsx)(a.LottieAnimation, {
        importData: p.current,
        shouldAnimate: !g && u,
        className: n,
        versionKey: I,
        onComplete:
            null != h
                ? () => {
                      null != h && (m(h), x(!0));
                  }
                : void 0,
        loop: _
    });
}
