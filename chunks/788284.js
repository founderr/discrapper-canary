n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(724458);
var s = n(735250),
    o = n(470079),
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
    let s = (await n.e('30166').then(n.t.bind(n, 235630, 19))).default;
    return (
        (function (e, t, n) {
            for (let s in t) {
                let t = i().get(e, s);
                if (null == t) continue;
                let o = t.map((e, t) => {
                    var s;
                    return null !== (s = n[t]) && void 0 !== s ? s : e;
                });
                i().set(e, s, o);
            }
        })(s, _, t),
        s
    );
}
function g(e) {
    var t;
    let { animationClassName: n, className: r, quest: l, useReducedMotion: i } = e,
        _ = (0, c.e7)([u.Z], () => u.Z.isFocused()),
        g = o.useRef(null),
        [f, E] = o.useState(!1),
        h = o.useMemo(() => {
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
    o.useEffect(() => {
        var e, t, n, s;
        _ ? T && (null === (s = g.current) || void 0 === s || null === (n = s.animation) || void 0 === n || n.play()) : null === (t = g.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0);
    }, [T, _]);
    let N = o.useCallback(() => {
        E(!0);
    }, []);
    return null == h || S
        ? (0, s.jsx)('div', {
              className: m.backgroundFallback,
              style: { backgroundImage: 'linear-gradient(90deg, '.concat(l.config.colors.primary, ', ').concat(l.config.colors.secondary, ')') }
          })
        : (0, s.jsx)('div', {
              className: a()(m.lottieAnimationBackgroundWrapper, r),
              children: (0, s.jsx)(
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
