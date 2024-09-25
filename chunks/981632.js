n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(409302),
    d = n(474936);
function _(e) {
    let { giftStyle: t, className: n, shouldAnimate: r = !0, defaultAnimationState: i, idleAnimationState: _ } = e,
        E = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [f, h] = o.useState(i),
        p = o.useRef((0, c._)(t, f)),
        [m, I] = o.useState(null == _),
        [T, g] = o.useState(!1),
        [S, A] = o.useState(-1),
        v = () => {
            (p.current = (0, c._)(t, f)), A((e) => e + 1);
        },
        N = () => {
            I(!1), g(!0), A(-1), h(i);
        };
    o.useEffect(() => {
        null == _ && h(i);
    }, [_, i]),
        o.useEffect(() => {
            if (null != _ && S >= 0) {
                N();
                return;
            }
            v();
        }, [t, _]),
        o.useEffect(() => {
            (!T || null == _) && v();
        }, [f]),
        o.useEffect(() => {
            T && (I(null == _), g(!1), v());
        }, [T]);
    let O = () => {
        null != _ && (h(_), I(!0));
    };
    if (!d.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, a.jsx)(l.LottieAnimation, {
        importData: p.current,
        shouldAnimate: !E && r,
        className: n,
        versionKey: S,
        onComplete: null != _ ? O : void 0,
        loop: m
    });
}
