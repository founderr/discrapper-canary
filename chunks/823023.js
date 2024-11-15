n.d(t, {
    N: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(481060),
    o = n(450096),
    l = n(981631),
    u = n(674099);
let c = {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    },
    d = {
        ...c,
        config: { duration: 50 }
    },
    f = {
        ...c,
        config: (e, t) => (t ? { duration: 800 } : { duration: 200 })
    };
function _(e) {
    let { readyState: t, placeholderImg: n, placeholderStyle: o } = e,
        f = t === l.zo9.LOADING,
        [_] = i.useState(() => Date.now()),
        p = t === l.zo9.READY && Date.now() - _ < 200,
        h = (0, s.useTransition)(f && null != n, p ? d : c);
    return (0, r.jsx)(r.Fragment, {
        children: h(
            (e, t) =>
                t &&
                (0, r.jsx)(a.animated.img, {
                    style: {
                        ...o,
                        ...e
                    },
                    className: u.imagePlaceholder,
                    src: n,
                    alt: ''
                })
        )
    });
}
function p(e) {
    let { readyState: t, aspectRatio: n, placeholder: c, placeholderVersion: d, placeholderStyle: p, children: h } = e,
        m = t === l.zo9.LOADING,
        [g] = i.useState(m),
        [E, v] = i.useState(!1),
        b = (0, o.L)(c, d, g);
    i.useEffect(() => {
        let e = setTimeout(() => {
            v(!0);
        }, 2000);
        return () => {
            clearTimeout(e);
        };
    }, [g]);
    let I = (0, s.useTransition)(m && E, f);
    return (0, r.jsxs)('div', {
        className: u.loadingOverlay,
        style: { aspectRatio: n },
        children: [
            h,
            null != b &&
                (0, r.jsx)(_, {
                    readyState: t,
                    placeholderImg: b,
                    placeholderStyle: p
                }),
            I(
                (e, t) =>
                    t &&
                    (0, r.jsx)(a.animated.div, {
                        style: e,
                        className: u.imageLoadingOverlay,
                        children: (0, r.jsx)(s.Spinner, {
                            type: s.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: u.cornerLoadingSpinner
                        })
                    })
            )
        ]
    });
}
