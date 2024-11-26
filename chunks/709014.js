n.d(t, {
    L: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(906280),
    l = n.n(o),
    u = n(186325),
    c = n(390507),
    d = n(679400),
    f = n(580747),
    _ = n(189954);
let p = i.forwardRef(function (e, t) {
    let { color: a, src: o, size: p = 'md', width: h, height: m, className: g, initialAnimation: E, markers: v } = e,
        [I, T] = i.useState(null),
        b = i.useRef(null),
        S = i.useRef(null),
        y = i.useRef(null),
        A =
            'custom' === p
                ? {
                      width: h,
                      height: m
                  }
                : (0, c.m)(p),
        N = !(0, f.Z)('lottie_hover_multiple_loop'),
        C = i.useContext(u.S).reducedMotion.enabled,
        { enabled: R } = d.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        O = C || !R,
        D = i.useRef(E);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null != y.current) {
                        if (((S.current = e), O)) {
                            let t = v[e];
                            y.current.resetSegments(!0), y.current.setSegment(t.start + t.duration, t.start + t.duration), y.current.stop();
                        } else y.current.setLoop(!N && e.includes('hover')), y.current.resetSegments(!0), y.current.playSegments([v[e].start, v[e].start + v[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == y.current || O) return;
                },
                stopIfPlaying: (e) => {
                    null != y.current && !O && S.current === e && (y.current.resetSegments(!0), y.current.setSegment(v[e].start, v[e].start), y.current.stop());
                }
            }),
            [O, N, v]
        ),
        i.useEffect(() => {
            null == I && o().then((e) => T(e.default));
        }, [I, o]),
        i.useEffect(
            () => (
                n
                    .e('23755')
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t;
                        let n,
                            { default: r } = e,
                            i = null !== (t = S.current) && void 0 !== t ? t : D.current;
                        if (null != i && null != v[i]) {
                            let e = v[i];
                            n = [e.start, e.start + e.duration];
                        }
                        null != b.current &&
                            (y.current = r.loadAnimation({
                                container: b.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(I),
                                initialSegment: n
                            }));
                    }),
                () => {
                    var e;
                    null === (e = y.current) || void 0 === e || e.destroy();
                }
            ),
            [I, v]
        ),
        (0, r.jsx)('div', {
            style: {
                '--__lottieIconColor': null != a && 'string' == typeof a ? a : null == a ? void 0 : a.css,
                display: 'flex',
                ...A
            },
            className: s()(_.lottieIcon, g),
            ref: b
        })
    );
});
