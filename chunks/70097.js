var r = n(735250),
    i = n(470079),
    a = n(374470),
    o = n(442837),
    s = n(607070),
    l = n(217702);
function u(e) {
    e.removeAttribute('src'),
        Array.from(e.children).forEach((e) => {
            (0, a.k)(e, HTMLSourceElement) && (e.removeAttribute('src'), e.removeAttribute('type')), (0, a.k)(e, HTMLImageElement) && e.removeAttribute('src');
        });
    try {
        e.load();
    } catch (e) {}
}
let c = (e) => {
    let { externalRef: t, autoPlay: n, playOnHover: a, responsive: c, mediaLayoutType: d, ..._ } = e,
        E = !(0, o.e7)([s.Z], () => s.Z.useReducedMotion) && !a && n,
        f = i.useRef(null);
    function h() {
        var e;
        a && (null == f || null === (e = f.current) || void 0 === e || e.play());
    }
    function p() {
        var e;
        a && (null == f || null === (e = f.current) || void 0 === e || e.pause());
    }
    function m() {
        return d === l.hV.MOSAIC
            ? {
                  width: '100%',
                  height: '100%',
                  maxHeight: 'inherit',
                  objectFit: 'contain'
              }
            : c
              ? I()
              : {};
    }
    function I() {
        return {
            maxWidth: _.width,
            maxHeight: _.height,
            width: '100%',
            height: '100%'
        };
    }
    return (
        i.useLayoutEffect(
            () => () => {
                let { current: e } = f;
                null != e && u(e);
            },
            []
        ),
        i.useLayoutEffect(
            () => (
                'function' == typeof t ? (t(null), t(f.current)) : null != t && (t.current = f.current),
                () => {
                    'function' == typeof t ? t(null) : null != t && (t.current = null);
                }
            ),
            [t, f]
        ),
        (0, r.jsx)('video', {
            ref: f,
            autoPlay: E,
            onMouseEnter: h,
            onMouseLeave: p,
            onFocus: h,
            onBlur: p,
            style: m(),
            ..._
        })
    );
};
t.Z = i.forwardRef((e, t) =>
    (0, r.jsx)(c, {
        ...e,
        externalRef: t
    })
);
