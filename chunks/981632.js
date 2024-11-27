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
        [m, f] = r.useState(d),
        p = r.useRef((0, o._)(t, m)),
        [x, _] = r.useState(null == h),
        [E, I] = r.useState(!1),
        [v, N] = r.useState(-1),
        C = () => {
            (p.current = (0, o._)(t, m)), N((e) => e + 1);
        },
        b = () => {
            _(!1), I(!0), N(-1), f(d);
        };
    r.useEffect(() => {
        null == h && f(d);
    }, [h, d]),
        r.useEffect(() => {
            if (null != h && v >= 0) {
                b();
                return;
            }
            C();
        }, [t, h]),
        r.useEffect(() => {
            (!E || null == h) && C();
        }, [m]),
        r.useEffect(() => {
            E && (_(null == h), I(!1), C());
        }, [E]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, i.jsx)(l.LottieAnimation, {
        importData: p.current,
        shouldAnimate: !g && u,
        className: n,
        versionKey: v,
        onComplete:
            null != h
                ? () => {
                      null != h && (f(h), _(!0));
                  }
                : void 0,
        loop: x
    });
}
