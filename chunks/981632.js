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
        p = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
        [g, m] = r.useState(d),
        f = r.useRef((0, o._)(t, g)),
        [x, _] = r.useState(null == h),
        [E, v] = r.useState(!1),
        [I, b] = r.useState(-1),
        N = () => {
            (f.current = (0, o._)(t, g)), b((e) => e + 1);
        },
        C = () => {
            _(!1), v(!0), b(-1), m(d);
        };
    r.useEffect(() => {
        null == h && m(d);
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
        }, [g]),
        r.useEffect(() => {
            E && (_(null == h), v(!1), N());
        }, [E]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, i.jsx)(l.LottieAnimation, {
        importData: f.current,
        shouldAnimate: !p && u,
        className: n,
        versionKey: I,
        onComplete:
            null != h
                ? () => {
                      null != h && (m(h), _(!0));
                  }
                : void 0,
        loop: x
    });
}
