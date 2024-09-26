n.d(t, {
    L: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(906280),
    u = n.n(l),
    c = n(186325),
    d = n(390507),
    _ = n(679400),
    E = n(580747),
    f = n(657375);
function h(e, t) {
    let { color: r, src: o, size: l = 'md', width: h, height: p, className: m, initialAnimation: I, markers: T } = e,
        [g, S] = a.useState(null),
        A = a.useRef(null),
        v = a.useRef(null),
        N = a.useRef(null),
        O =
            'custom' === l
                ? {
                      width: h,
                      height: p
                  }
                : (0, d.m)(l),
        R = !(0, E.Z)('lottie_hover_multiple_loop'),
        C = a.useContext(c.S).reducedMotion.enabled,
        { enabled: y } = _.Z.useExperiment({ location: 'LottieIcon web entry point' }),
        L = C || !y,
        b = a.useRef(I);
    return (
        a.useImperativeHandle(
            t,
            () => ({
                play: (e) => {
                    if (null != N.current) {
                        if (((v.current = e), L)) {
                            let t = T[e];
                            N.current.resetSegments(!0), N.current.setSegment(t.start + t.duration, t.start + t.duration), N.current.stop();
                        } else N.current.setLoop(!R && e.includes('hover')), N.current.resetSegments(!0), N.current.playSegments([T[e].start, T[e].start + T[e].duration], !0);
                    }
                },
                stop: () => {
                    if (null == N.current || L) return;
                },
                stopIfPlaying: (e) => {
                    null != N.current && !L && v.current === e && (N.current.resetSegments(!0), N.current.setSegment(T[e].start, T[e].start), N.current.stop());
                }
            }),
            [L, R, T]
        ),
        a.useEffect(() => {
            null == g && o().then((e) => S(e.default));
        }, [g, o]),
        a.useEffect(
            () => (
                Promise.resolve()
                    .then(n.t.bind(n, 500923, 23))
                    .then((e) => {
                        var t;
                        let n,
                            { default: r } = e,
                            i = null !== (t = v.current) && void 0 !== t ? t : b.current;
                        if (null != i && null != T[i]) {
                            let e = T[i];
                            n = [e.start, e.start + e.duration];
                        }
                        null != A.current &&
                            (N.current = r.loadAnimation({
                                container: A.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !1,
                                animationData: u()(g),
                                initialSegment: n
                            }));
                    }),
                () => {
                    var e;
                    null === (e = N.current) || void 0 === e || e.destroy();
                }
            ),
            [g, T]
        ),
        (0, i.jsx)('div', {
            style: {
                '--__lottieIconColor': null != r && 'string' == typeof r ? r : null == r ? void 0 : r.css,
                display: 'flex',
                ...O
            },
            className: s()(f.lottieIcon, m),
            ref: A
        })
    );
}
let p = a.forwardRef(h);
