n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(724458);
var o = n(735250),
    s = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    i = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(451478),
    p = n(302221),
    m = n(865871);
let x = [0, 0.5, 1],
    _ = {
        'layers[1].shapes[1].g.k.k': [0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278, 0.776],
        'layers[2].shapes[1].g.k.k': [0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271, 0.757]
    };
async function C(e, t) {
    let o = (await n.e('30166').then(n.t.bind(n, 235630, 19))).default;
    return (
        (function (e, t, n) {
            for (let o in t) {
                let t = i().get(e, o);
                if (null == t) continue;
                let s = t.map((e, t) => {
                    var o;
                    return null !== (o = n[t]) && void 0 !== o ? o : e;
                });
                i().set(e, o, s);
            }
        })(o, _, t),
        o
    );
}
function g(e) {
    var t;
    let { animationClassName: n, className: r, quest: l, useReducedMotion: i } = e,
        _ = (0, c.e7)([u.Z], () => u.Z.isFocused()),
        g = s.useRef(null),
        [f, E] = s.useState(!1),
        h = s.useMemo(() => {
            if (null == l) return null;
            let e = (0, p.oo)(l.config.colors.primary),
                t = {
                    r: e.r / 255,
                    g: e.g / 255,
                    b: e.b / 255
                },
                n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return C(l.id, n);
        }, [l]),
        S = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        T = !i && _;
    s.useEffect(() => {
        var e, t, n, o;
        _ ? T && (null === (o = g.current) || void 0 === o || null === (n = o.animation) || void 0 === n || n.play()) : null === (t = g.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0);
    }, [T, _]);
    let N = s.useCallback(() => {
        E(!0);
    }, []);
    return null == h || S
        ? (0, o.jsx)('div', {
              className: m.backgroundFallback,
              style: { backgroundImage: 'linear-gradient(90deg, '.concat(l.config.colors.primary, ', ').concat(l.config.colors.secondary, ')') }
          })
        : (0, o.jsx)('div', {
              className: a()(m.lottieAnimationBackgroundWrapper, r),
              children: (0, o.jsx)(
                  d.LottieAnimation,
                  {
                      ref: g,
                      onComplete: N,
                      importData: () => h,
                      shouldAnimate: !f && T,
                      className: a()(m.lottieAnimation, m.lottieAnimationBackground, n),
                      loop: 0,
                      rendererSettings: { preserveAspectRatio: 'none' }
                  },
                  l.config.colors.primary
              )
          });
}
