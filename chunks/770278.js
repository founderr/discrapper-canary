n.d(t, {
    f: function () {
        return r;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
    u = n(481060),
    c = n(110924),
    d = n(247224);
let _ = 8;
function E() {
    let e = (0, u.useToken)(u.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0.25 }),
        t = (0, u.useToken)(u.tokens.colors.BG_BACKDROP).spring();
    return {
        SUBTLE: e,
        DARK: t,
        BLUR: t
    };
}
!(function (e) {
    (e.SUBTLE = 'SUBTLE'), (e.DARK = 'DARK'), (e.BLUR = 'BLUR');
})(r || (r = {}));
let f = a.forwardRef(function (e, t) {
    let { backdropStyle: n = 'SUBTLE', backdropInstant: r = !1, zIndexBoost: a = 0, LayerComponent: o, isVisible: f, onClose: h } = e,
        p = E()[n],
        m = (0, u.useToken)(u.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0 }),
        I = 'BLUR' === n ? _ : 0,
        T = {
            background: m,
            backdropFilter: 'blur(0px)'
        },
        g = {
            background: p,
            backdropFilter: 'blur('.concat(I, 'px)')
        },
        S = (0, c.Z)(r),
        A = (0, u.useTransition)(
            f,
            {
                keys: (e) => (e ? 'backdrop' : 'empty'),
                config: { duration: r || S ? 0 : 300 },
                from: T,
                enter: g,
                leave: T
            },
            'animate-always'
        );
    if (null == o) {
        let e = { zIndex: 1000 + a };
        return A((t, n) =>
            n
                ? (0, i.jsx)(l.animated.div, {
                      className: d.backdrop,
                      style: {
                          ...t,
                          ...e
                      },
                      onClick: h
                  })
                : null
        );
    }
    return (0, i.jsx)(o, {
        children: A((e, t) =>
            t
                ? (0, i.jsx)(l.animated.div, {
                      className: s()(d.backdrop, d.withLayer),
                      style: e,
                      onClick: h
                  })
                : null
        )
    });
});
t.Z = f;
