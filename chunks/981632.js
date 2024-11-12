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
        [m, p] = r.useState(d),
        f = r.useRef((0, o._)(t, m)),
        [_, x] = r.useState(null == h),
        [E, v] = r.useState(!1),
        [I, b] = r.useState(-1),
        N = () => {
            (f.current = (0, o._)(t, m)), b((e) => e + 1);
        },
        C = () => {
            x(!1), v(!0), b(-1), p(d);
        };
    r.useEffect(() => {
        null == h && p(d);
    }, [h, d]),
        r.useEffect(() => {
            if (null != h && I >= 0) {
                C();
                return;
            }
            N();
        }, [t, h]),
        r.useEffect(() => {
            (!E || null == h) && N();
        }, [m]),
        r.useEffect(() => {
            E && (x(null == h), v(!1), N());
        }, [E]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, i.jsx)(a.LottieAnimation, {
        importData: f.current,
        shouldAnimate: !g && u,
        className: n,
        versionKey: I,
        onComplete:
            null != h
                ? () => {
                      null != h && (p(h), x(!0));
                  }
                : void 0,
        loop: _
    });
}
