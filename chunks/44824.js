n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(70097),
    o = n(947849),
    s = n(981631),
    l = n(689938);
function u(e) {
    let { poster: t, src: n, width: o, height: l, naturalWidth: u, naturalHeight: c, play: d = !0, className: _, alt: E, responsive: f } = e,
        h = i.useRef(null);
    return (i.useEffect(() => {
        let { current: e } = h;
        if (null != e) d ? e.play() : e.pause();
    }, [d]),
    (u <= s.N_j && c <= s.XKF) || (u <= s.XKF && c <= s.N_j))
        ? (0, r.jsx)(a.Z, {
              ref: h,
              className: _,
              poster: t,
              src: n,
              width: o,
              height: l,
              responsive: f,
              muted: !0,
              loop: !0,
              autoPlay: d,
              preload: 'none',
              'aria-label': E
          })
        : (0, r.jsx)('img', {
              alt: '',
              src: t,
              width: o,
              height: l
          });
}
function c(e) {
    let { src: t, poster: n, naturalWidth: i, naturalHeight: a, responsive: s, autoPlay: c, className: d, playable: _ = !0, renderImageComponent: E, renderForwardComponent: f, alt: h = l.Z.Messages.GIF, ...p } = e;
    return (0, r.jsx)(o.h.Consumer, {
        children: (e) =>
            E({
                ...p,
                alt: h,
                src: n,
                containerClassName: d,
                autoPlay: c,
                animated: _,
                responsive: s,
                renderAccessory: e,
                renderForwardComponent: f,
                tabIndex: _ ? 0 : -1,
                dataSafeSrc: t,
                children(e) {
                    let { src: n, size: o, animating: l, alt: c } = e;
                    return (0, r.jsx)(u, {
                        alt: c,
                        className: d,
                        poster: n,
                        src: t,
                        width: o.width,
                        height: o.height,
                        naturalWidth: i,
                        naturalHeight: a,
                        responsive: s,
                        play: _ && l
                    });
                }
            })
    });
}
