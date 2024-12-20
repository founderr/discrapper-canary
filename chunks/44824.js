t.d(l, {
    Z: function () {
        return u;
    }
});
var n = t(200651),
    i = t(192379),
    r = t(70097),
    a = t(947849),
    o = t(981631),
    s = t(388032);
function d(e) {
    let { poster: l, src: t, width: a, height: s, naturalWidth: d, naturalHeight: u, play: m = !0, className: h, alt: c, responsive: p } = e,
        b = i.useRef(null);
    return (i.useEffect(() => {
        let { current: e } = b;
        if (null != e) m ? e.play() : e.pause();
    }, [m]),
    (d <= o.N_j && u <= o.XKF) || (d <= o.XKF && u <= o.N_j))
        ? (0, n.jsx)(r.Z, {
              ref: b,
              className: h,
              poster: l,
              src: t,
              width: a,
              height: s,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: m,
              preload: 'none',
              'aria-label': c
          })
        : (0, n.jsx)('img', {
              alt: '',
              src: l,
              width: a,
              height: s
          });
}
function u(e) {
    let { src: l, poster: t, naturalWidth: i, naturalHeight: r, responsive: o, autoPlay: u, className: m, playable: h = !0, renderImageComponent: c, alt: p = s.intl.string(s.t.I5gL2N), sourceMetadata: b, ...g } = e;
    return (0, n.jsx)(a.h.Consumer, {
        children: (e) =>
            c({
                ...g,
                alt: p,
                src: t,
                containerClassName: m,
                autoPlay: u,
                animated: h,
                responsive: o,
                renderAccessory: e,
                tabIndex: h ? 0 : -1,
                dataSafeSrc: l,
                children(e) {
                    let { src: t, size: a, animating: s, alt: u } = e;
                    return (0, n.jsx)(d, {
                        alt: u,
                        className: m,
                        poster: t,
                        src: l,
                        width: a.width,
                        height: a.height,
                        naturalWidth: i,
                        naturalHeight: r,
                        responsive: o,
                        play: h && s
                    });
                },
                sourceMetadata: b,
                analyticsSource: 'LazyGIFV'
            })
    });
}
