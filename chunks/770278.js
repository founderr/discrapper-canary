n.d(t, {
    f: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(100621),
    c = n(481060),
    d = n(110924),
    f = n(247224);
((r = i || (i = {})).SUBTLE = 'SUBTLE'), (r.DARK = 'DARK'), (r.BLUR = 'BLUR');
let _ = s.forwardRef(function (e, t) {
    let { backdropStyle: n = 'SUBTLE', backdropInstant: r = !1, zIndexBoost: i = 0, LayerComponent: s, isVisible: o, onClose: _ } = e,
        h = (function () {
            let e = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0.25 }),
                t = (0, c.useToken)(c.tokens.colors.BG_BACKDROP).spring();
            return {
                SUBTLE: e,
                DARK: t,
                BLUR: t
            };
        })()[n],
        p = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({ opacity: 0 }),
        m = {
            background: p,
            backdropFilter: 'blur(0px)'
        },
        g = (0, d.Z)(r),
        E = (0, c.useTransition)(
            o,
            {
                keys: (e) => (e ? 'backdrop' : 'empty'),
                config: { duration: r || g ? 0 : 300 },
                from: m,
                enter: {
                    background: h,
                    backdropFilter: 'blur('.concat('BLUR' === n ? 8 : 0, 'px)')
                },
                leave: m
            },
            'animate-always'
        );
    if (null == s) {
        let e = { zIndex: 1000 + i };
        return E((t, n) =>
            n
                ? (0, a.jsx)(u.animated.div, {
                      className: f.backdrop,
                      style: {
                          ...t,
                          ...e
                      },
                      onClick: _
                  })
                : null
        );
    }
    return (0, a.jsx)(s, {
        children: E((e, t) =>
            t
                ? (0, a.jsx)(u.animated.div, {
                      className: l()(f.backdrop, f.withLayer),
                      style: e,
                      onClick: _
                  })
                : null
        )
    });
});
t.Z = _;
