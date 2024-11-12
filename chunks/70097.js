var r = n(200651),
    i = n(192379),
    a = n(374470),
    s = n(442837),
    o = n(607070),
    l = n(217702);
let u = (e) => {
    let { externalRef: t, autoPlay: n, playOnHover: u, responsive: c, mediaLayoutType: d, ...f } = e,
        _ = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        p = i.useRef(null);
    function h() {
        var e;
        u && (null == p || null === (e = p.current) || void 0 === e || e.play());
    }
    function m() {
        var e;
        u && (null == p || null === (e = p.current) || void 0 === e || e.pause());
    }
    return (
        i.useLayoutEffect(
            () => () => {
                let { current: e } = p;
                null != e &&
                    (function (e) {
                        e.removeAttribute('src'),
                            Array.from(e.children).forEach((e) => {
                                (0, a.k)(e, HTMLSourceElement) && (e.removeAttribute('src'), e.removeAttribute('type')), (0, a.k)(e, HTMLImageElement) && e.removeAttribute('src');
                            });
                        try {
                            e.load();
                        } catch (e) {}
                    })(e);
            },
            []
        ),
        i.useLayoutEffect(
            () => (
                'function' == typeof t ? (t(null), t(p.current)) : null != t && (t.current = p.current),
                () => {
                    'function' == typeof t ? t(null) : null != t && (t.current = null);
                }
            ),
            [t, p]
        ),
        (0, r.jsx)('video', {
            ref: p,
            autoPlay: !_ && !u && n,
            onMouseEnter: h,
            onMouseLeave: m,
            onFocus: h,
            onBlur: m,
            style:
                d === l.hV.MOSAIC
                    ? {
                          width: '100%',
                          height: '100%',
                          maxHeight: 'inherit',
                          objectFit: 'contain'
                      }
                    : c
                      ? (function () {
                            return {
                                maxWidth: f.width,
                                maxHeight: f.height,
                                width: '100%',
                                height: '100%'
                            };
                        })()
                      : {},
            ...f
        })
    );
};
t.Z = i.forwardRef((e, t) =>
    (0, r.jsx)(u, {
        ...e,
        externalRef: t
    })
);
