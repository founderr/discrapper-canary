n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(724458);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    i = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(451478),
    p = n(302221),
    m = n(865871);
let x = [0, 0.5, 1],
    g = {
        'layers[1].shapes[1].g.k.k': [0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278, 0.776],
        'layers[2].shapes[1].g.k.k': [0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271, 0.757]
    };
async function f(e, t) {
    let o = (await n.e('30166').then(n.t.bind(n, 235630, 19))).default;
    return (
        (function (e, t, n) {
            for (let o in t) {
                let t = i().get(e, o);
                if (null == t) continue;
                let r = t.map((e, t) => {
                    var o;
                    return null !== (o = n[t]) && void 0 !== o ? o : e;
                });
                i().set(e, o, r);
            }
        })(o, g, t),
        o
    );
}
function h(e) {
    var t;
    let { animationClassName: n, className: s, quest: l, useReducedMotion: i } = e,
        g = (0, c.e7)([u.Z], () => u.Z.isFocused()),
        h = r.useRef(null),
        [C, v] = r.useState(!1),
        j = r.useMemo(() => {
            if (null == l) return null;
            let e = (0, p.oo)(l.config.colors.primary),
                t = {
                    r: e.r / 255,
                    g: e.g / 255,
                    b: e.b / 255
                },
                n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return f(l.id, n);
        }, [l]),
        _ = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        b = !i && g;
    r.useEffect(() => {
        var e, t, n, o;
        g ? b && (null === (o = h.current) || void 0 === o || null === (n = o.animation) || void 0 === n || n.play()) : null === (t = h.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0);
    }, [b, g]);
    let E = r.useCallback(() => {
        v(!0);
    }, []);
    return null == j || _
        ? (0, o.jsx)('div', {
              className: m.backgroundFallback,
              style: { backgroundImage: 'linear-gradient(90deg, '.concat(l.config.colors.primary, ', ').concat(l.config.colors.secondary, ')') }
          })
        : (0, o.jsx)('div', {
              className: a()(m.lottieAnimationBackgroundWrapper, s),
              children: (0, o.jsx)(
                  d.LottieAnimation,
                  {
                      ref: h,
                      onComplete: E,
                      importData: () => j,
                      shouldAnimate: !C && b,
                      className: a()(m.lottieAnimation, m.lottieAnimationBackground, n),
                      loop: 0,
                      rendererSettings: { preserveAspectRatio: 'none' }
                  },
                  l.config.colors.primary
              )
          });
}
