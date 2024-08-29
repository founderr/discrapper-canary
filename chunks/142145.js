n(47120);
var r = n(735250),
    i = n(470079),
    a = n(366040),
    s = n(119837),
    o = n(802433),
    l = n(360850);
t.Z = (e) => {
    var t, n, u, c;
    let { layerConfig: d, animationType: _, ticking: E, time: f, accessibilityLabel: h, hasPlayedThrough: p, setHasPlayedThrough: I, urlQueryString: m, maxLoops: T, loopEnd: g, bannerAdjustment: S } = e,
        A = (0, a.nY)('Profile Effect - Web'),
        N = i.useRef(null),
        [O, R] = i.useState(!1),
        v = !0;
    if (
        (i.useEffect(() => {
            null != N.current && (N.current.playsInline = !0);
        }, [N]),
        !E && (v = !1),
        f < d.start && (v = !1),
        !d.loop && f > d.duration + d.start && (v = !1),
        _ === o.Q.PERSISTENT && !p && null != T && f >= g && I(!0),
        d.loop && void 0 !== d.loopDelay && d.loopDelay > 0)
    ) {
        let e = d.duration + d.loopDelay,
            t = Math.floor((f - d.start) / e);
        f - d.start - t * e > d.duration && (_ === o.Q.INTERMITTENT && !p && null != T && t >= T && I(!0), (v = !1));
    }
    return A
        ? (null != N.current && O !== v && (!v && N.current.pause(), v && ((N.current.currentTime = 0), N.current.play()), R(v)),
          (0, r.jsx)('video', {
              muted: !0,
              autoPlay: !0,
              loop: _ === o.Q.PERSISTENT && !d.src.includes('intro'),
              className: l.effect,
              ref: N,
              src: d.src,
              style: { opacity: v ? 1 : 0 }
          }))
        : v
          ? (0, r.jsx)('img', {
                src: null != m ? ''.concat(d.src, '?query=').concat(m) : d.src,
                className: l.effect,
                style: {
                    top: (null !== (u = null === (t = d.position) || void 0 === t ? void 0 : t.y) && void 0 !== u ? u : 0) - S,
                    left: null !== (c = null === (n = d.position) || void 0 === n ? void 0 : n.x) && void 0 !== c ? c : 0
                },
                alt: h
            })
          : (0, r.jsx)('img', {
                src: s.td,
                alt: h
            });
};
