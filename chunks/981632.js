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
    l = n(481060),
    a = n(607070),
    o = n(409302),
    c = n(474936);
function u(e) {
    let { giftStyle: t, className: n, shouldAnimate: u = !0, defaultAnimationState: d, idleAnimationState: h } = e,
        g = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
        [m, p] = r.useState(d),
        f = r.useRef((0, o._)(t, m)),
        [_, x] = r.useState(null == h),
        [E, I] = r.useState(!1),
        [v, N] = r.useState(-1),
        b = () => {
            (f.current = (0, o._)(t, m)), N((e) => e + 1);
        },
        C = () => {
            x(!1), I(!0), N(-1), p(d);
        };
    r.useEffect(() => {
        null == h && p(d);
    }, [h, d]),
        r.useEffect(() => {
            if (null != h && v >= 0) {
                C();
                return;
            }
            b();
        }, [t, h]),
        r.useEffect(() => {
            (!E || null == h) && b();
        }, [m]),
        r.useEffect(() => {
            E && (x(null == h), I(!1), b());
        }, [E]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, i.jsx)(l.LottieAnimation, {
        importData: f.current,
        shouldAnimate: !g && u,
        className: n,
        versionKey: v,
        onComplete:
            null != h
                ? () => {
                      null != h && (p(h), x(!0));
                  }
                : void 0,
        loop: _
    });
}
