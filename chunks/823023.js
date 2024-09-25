n.d(t, {
    N: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(526629),
    s = n(481060),
    l = n(450096),
    u = n(981631),
    c = n(459127);
let d = 200,
    _ = {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    },
    E = {
        ..._,
        config: { duration: 50 }
    },
    f = {
        ..._,
        config: (e, t) => (t ? { duration: 800 } : { duration: 200 })
    };
function h(e) {
    let { readyState: t, placeholderImg: n, placeholderStyle: r } = e,
        l = t === u.zo9.LOADING,
        [f] = a.useState(() => Date.now()),
        h = t === u.zo9.READY && Date.now() - f < d,
        p = (0, s.useTransition)(l && null != n, h ? E : _);
    return (0, i.jsx)(i.Fragment, {
        children: p(
            (e, t) =>
                t &&
                (0, i.jsx)(o.animated.img, {
                    style: {
                        ...r,
                        ...e
                    },
                    className: c.imagePlaceholder,
                    src: n,
                    alt: ''
                })
        )
    });
}
function p(e) {
    let { readyState: t, aspectRatio: n, placeholder: r, placeholderVersion: d, placeholderStyle: _, children: E } = e,
        p = t === u.zo9.LOADING,
        [m] = a.useState(p),
        [I, T] = a.useState(!1),
        g = (0, l.L)(r, d, m);
    a.useEffect(() => {
        let e = setTimeout(() => {
            T(!0);
        }, 2000);
        return () => {
            clearTimeout(e);
        };
    }, [m]);
    let S = (0, s.useTransition)(p && I, f);
    return (0, i.jsxs)('div', {
        className: c.loadingOverlay,
        style: { aspectRatio: n },
        children: [
            E,
            null != g &&
                (0, i.jsx)(h, {
                    readyState: t,
                    placeholderImg: g,
                    placeholderStyle: _
                }),
            S(
                (e, t) =>
                    t &&
                    (0, i.jsx)(o.animated.div, {
                        style: e,
                        className: c.imageLoadingOverlay,
                        children: (0, i.jsx)(s.Spinner, {
                            type: s.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: c.cornerLoadingSpinner
                        })
                    })
            )
        ]
    });
}
