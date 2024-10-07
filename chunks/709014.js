n.d(t, {
    L: function () {
        return f;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(906280),
    l = n.n(o),
    u = n(186325),
    c = n(390507),
    d = n(679400),
    _ = n(580747),
    E = n(657375);
let f = i.forwardRef(function (e, t) {
    let { color: a, src: o, size: f = 'md', width: h, height: p, className: I, initialAnimation: m, markers: T } = e,
        [S, g] = i.useState(null),
        A = i.useRef(null),
        N = i.useRef(null),
        O = i.useRef(null),
        R =
            'custom' === f
                ? {
                      width: h,
                      height: p
                  }
                : (0, c.m)(f),
        v = !(0, _.Z)('lottie_hover_multiple_loop'),
        C = i.useContext(u.S).reducedMotion.enabled,
        { enabled: L } = d.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        y = C || !L,
        D = i.useRef(m);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null != O.current) {
                        if (((N.current = e), y)) {
                            let t = T[e];
                            O.current.resetSegments(!0), O.current.setSegment(t.start + t.duration, t.start + t.duration), O.current.stop();
                        } else O.current.setLoop(!v && e.includes('hover')), O.current.resetSegments(!0), O.current.playSegments([T[e].start, T[e].start + T[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == O.current || y) return;
                },
                stopIfPlaying: (e) => {
                    null != O.current && !y && N.current === e && (O.current.resetSegments(!0), O.current.setSegment(T[e].start, T[e].start), O.current.stop());
                }
            }),
            [y, v, T]
        ),
        i.useEffect(() => {
            null == S && o().then((e) => g(e.default));
        }, [S, o]),
        i.useEffect(
            () => (
                n
                    .e('23755')
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t;
                        let n,
                            { default: r } = e,
                            i = null !== (t = N.current) && void 0 !== t ? t : D.current;
                        if (null != i && null != T[i]) {
                            let e = T[i];
                            n = [e.start, e.start + e.duration];
                        }
                        null != A.current &&
                            (O.current = r.loadAnimation({
                                container: A.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: l()(S),
                                initialSegment: n
                            }));
                    }),
                () => {
                    var e;
                    null === (e = O.current) || void 0 === e || e.destroy();
                }
            ),
            [S, T]
        ),
        (0, r.jsx)('div', {
            style: {
                '--__lottieIconColor': null != a && 'string' == typeof a ? a : null == a ? void 0 : a.css,
                display: 'flex',
                ...R
            },
            className: s()(E.lottieIcon, I),
            ref: A
        })
    );
});
