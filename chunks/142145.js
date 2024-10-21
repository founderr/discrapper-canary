var r = n(200651);
n(192379);
var i = n(119837),
    a = n(802433),
    s = n(831748);
t.Z = (e) => {
    var t, n, o, l;
    let { layerConfig: u, animationType: c, ticking: d, time: _, accessibilityLabel: E, hasPlayedThrough: f, setHasPlayedThrough: h, urlQueryString: p, maxLoops: I, loopEnd: m, bannerAdjustment: T } = e,
        S = !0;
    if ((!d && (S = !1), _ < u.start && (S = !1), !u.loop && _ > u.duration + u.start && (S = !1), c === a.Q.PERSISTENT && !f && null != I && _ >= m && h(!0), u.loop && void 0 !== u.loopDelay && u.loopDelay > 0)) {
        let e = u.duration + u.loopDelay,
            t = Math.floor((_ - u.start) / e);
        _ - u.start - t * e > u.duration && (c === a.Q.INTERMITTENT && !f && null != I && t >= I && h(!0), (S = !1));
    }
    return S
        ? (0, r.jsx)('img', {
              src: null != p ? ''.concat(u.src, '?query=').concat(p) : u.src,
              className: s.effect,
              style: {
                  top: (null !== (o = null === (t = u.position) || void 0 === t ? void 0 : t.y) && void 0 !== o ? o : 0) - T,
                  left: null !== (l = null === (n = u.position) || void 0 === n ? void 0 : n.x) && void 0 !== l ? l : 0
              },
              alt: E
          })
        : (0, r.jsx)('img', {
              src: i.td,
              alt: E
          });
};
