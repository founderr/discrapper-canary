var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(366040),
    s = n(119837),
    l = n(802433),
    u = n(831748);
let c = (e) => {
    var t, n, r, c;
    let { layerConfig: d, animationType: _, ticking: E, time: f, accessibilityLabel: h, hasPlayedThrough: p, setHasPlayedThrough: m, urlQueryString: I, maxLoops: T, loopEnd: g, bannerAdjustment: S, debugForTool: A = !1 } = e,
        v = (0, o.nY)('Profile Effect - Web'),
        N = a.useRef(null),
        [O, R] = a.useState(!1),
        C = !0;
    if (
        (a.useEffect(() => {
            null != N.current && (N.current.playsInline = !0);
        }, [N]),
        !E && (C = !1),
        f < d.start && (C = !1),
        !d.loop && f > d.duration + d.start && (C = !1),
        _ === l.Q.PERSISTENT && !p && null != T && f >= g && m(!0),
        d.loop && void 0 !== d.loopDelay && d.loopDelay > 0)
    ) {
        let e = d.duration + d.loopDelay,
            t = Math.floor((f - d.start) / e);
        f - d.start - t * e > d.duration && (_ === l.Q.INTERMITTENT && !p && null != T && t >= T && m(!0), (C = !1));
    }
    return v && !A
        ? (null != N.current && O !== C && (!C && N.current.pause(), C && ((N.current.currentTime = 0), N.current.play()), R(C)),
          (0, i.jsx)('video', {
              muted: !0,
              autoPlay: !0,
              loop: _ === l.Q.PERSISTENT && !d.src.includes('intro'),
              className: u.effect,
              ref: N,
              src: d.src,
              style: { opacity: C ? 1 : 0 }
          }))
        : C
          ? (0, i.jsx)('img', {
                src: null != I ? ''.concat(d.src, '?query=').concat(I) : d.src,
                className: u.effect,
                style: {
                    top: (null !== (r = null === (t = d.position) || void 0 === t ? void 0 : t.y) && void 0 !== r ? r : 0) - S,
                    left: null !== (c = null === (n = d.position) || void 0 === n ? void 0 : n.x) && void 0 !== c ? c : 0
                },
                alt: h
            })
          : (0, i.jsx)('img', {
                src: s.td,
                alt: h
            });
};
t.Z = c;
