l.d(t, {
    Z: function () {
        return u;
    }
});
var n = l(200651),
    i = l(192379),
    r = l(70097),
    a = l(947849),
    s = l(981631),
    o = l(388032);
function d(e) {
    let { poster: t, src: l, width: a, height: o, naturalWidth: d, naturalHeight: u, play: m = !0, className: h, alt: c, responsive: p } = e,
        b = i.useRef(null);
    return (i.useEffect(() => {
        let { current: e } = b;
        if (null != e) m ? e.play() : e.pause();
    }, [m]),
    (d <= s.N_j && u <= s.XKF) || (d <= s.XKF && u <= s.N_j))
        ? (0, n.jsx)(r.Z, {
              ref: b,
              className: h,
              poster: t,
              src: l,
              width: a,
              height: o,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: m,
              preload: 'none',
              'aria-label': c
          })
        : (0, n.jsx)('img', {
              alt: '',
              src: t,
              width: a,
              height: o
          });
}
function u(e) {
    let { src: t, poster: l, naturalWidth: i, naturalHeight: r, responsive: s, autoPlay: u, className: m, playable: h = !0, renderImageComponent: c, alt: p = o.intl.string(o.t.I5gL2N), sourceMetadata: b, ...g } = e;
    return (0, n.jsx)(a.h.Consumer, {
        children: (e) =>
            c({
                ...g,
                alt: p,
                src: l,
                containerClassName: m,
                autoPlay: u,
                animated: h,
                responsive: s,
                renderAccessory: e,
                tabIndex: h ? 0 : -1,
                dataSafeSrc: t,
                children(e) {
                    let { src: l, size: a, animating: o, alt: u } = e;
                    return (0, n.jsx)(d, {
                        alt: u,
                        className: m,
                        poster: l,
                        src: t,
                        width: a.width,
                        height: a.height,
                        naturalWidth: i,
                        naturalHeight: r,
                        responsive: s,
                        play: h && o
                    });
                },
                sourceMetadata: b
            })
    });
}
