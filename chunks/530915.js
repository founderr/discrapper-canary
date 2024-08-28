n.d(t, {
    U: function () {
        return v;
    }
}),
    n(47120);
var s,
    r,
    a = n(735250),
    i = n(470079),
    o = n(120356),
    c = n.n(o),
    l = n(954955),
    d = n.n(l),
    u = n(717888),
    f = n.n(u),
    p = n(82923),
    g = n(442837),
    C = n(481060),
    m = n(451478),
    _ = n(259580),
    b = n(305271),
    h = n(689938),
    x = n(736699);
let I = {
    mass: 1,
    tension: 200,
    friction: 30,
    clamp: !0,
    easing: p.Z.Easing.bezier(0.15, 0, 0.25, 1),
    duration: 1000
};
((r = s || (s = {})).GO_TO_SLIDE = 'GO_TO_SLIDE'), (r.NEXT = 'NEXT'), (r.PREVIOUS = 'PREVIOUS');
let E = (e) => {
        let { currentSlideIndex: t, numSlides: n, onNext: s, onPrevious: r, onIndicatorClick: i, className: o, paginationButtonClassName: l } = e,
            d = c()(x.paginationButton, l);
        return (0, a.jsxs)('div', {
            className: c()(x.controls, o),
            children: [
                (0, a.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: r,
                    'aria-label': h.Z.Messages.PAGINATION_PREVIOUS,
                    children: (0, a.jsx)(_.Z, { direction: _.Z.Directions.LEFT })
                }),
                (0, a.jsx)('div', {
                    className: x.paginationIndicatorContainer,
                    children: f()(n, (e) =>
                        (0, a.jsx)(
                            C.Button,
                            {
                                look: C.Button.Looks.BLANK,
                                size: C.Button.Sizes.NONE,
                                onClick: () => i(e),
                                className: c()(x.paginationIndicatorButton, { [x.selected]: e === t }),
                                'aria-label': h.Z.Messages.PAGINATION_SLIDE_LABEL.format({ pageNumber: e + 1 }),
                                children: (0, a.jsx)('div', { className: c()(x.paginationIndicator, { [x.selected]: e === t }) })
                            },
                            'slide-indicator-'.concat(e)
                        )
                    )
                }),
                (0, a.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: s,
                    'aria-label': h.Z.Messages.PAGINATION_NEXT,
                    children: (0, a.jsx)(_.Z, { direction: _.Z.Directions.RIGHT })
                })
            ]
        });
    },
    v = (e) => {
        let { carouselId: t, items: n = [], renderItem: s, getItemId: r, onIntentionalChange: o, onChangeItem: l, className: u, controlsClassName: f, paginationButtonClassName: p, springConfig: _, delay: h, initialPaused: v = !1, unidirectional: S = !1, analyticsLocations: L } = e,
            { trackSlideView: T, trackPagination: N } = (0, b.X)(t, L),
            [O, k] = (0, i.useState)(0),
            [j, B] = (0, i.useState)(!1),
            [Z, P] = (0, i.useState)(!1),
            A = i.useCallback(() => P(!0), []),
            R = i.useCallback(() => P(!1), []),
            y = (0, g.e7)([m.Z], () => m.Z.isFocused()),
            M = null != h && !v && !Z && y,
            w = i.useCallback((e) => (n.length + O + e) % n.length, [n, O]),
            D = i.useCallback(
                d()((e, t, s) => {
                    null != s && (null == o || o(n[e], t, e, s), N(e, O, r(e), r(t))), B('GO_TO_SLIDE' === s), null == l || l(n[e], t, e), k(e);
                }, 200),
                [n, o, l]
            );
        return (
            (0, i.useEffect)(() => {
                T(O, r(O));
            }, [T, O, r]),
            (0, i.useEffect)(() => {
                if (M) {
                    let e = w(1),
                        t = setInterval(() => D(e, O), h);
                    return () => clearInterval(t);
                }
            }, [M, h, O, w, D]),
            (0, a.jsxs)('div', {
                className: c()(x.carouselContainer, u),
                onMouseEnter: A,
                onMouseLeave: R,
                children: [
                    (0, a.jsx)(C.Slides, {
                        activeSlide: String(O),
                        springConfig: null != _ ? _ : I,
                        directionOverride: S && !j ? 'forwards' : void 0,
                        fadeInOut: !0,
                        children: n.map((e, t) =>
                            (0, a.jsx)(
                                C.Slide,
                                {
                                    id: String(t),
                                    children: (0, a.jsx)('div', {
                                        className: c()(x.carousel),
                                        children: s(e, t)
                                    })
                                },
                                String(t)
                            )
                        )
                    }),
                    n.length > 1 &&
                        (0, a.jsx)(E, {
                            className: f,
                            paginationButtonClassName: p,
                            currentSlideIndex: O,
                            numSlides: n.length,
                            onNext: () => {
                                D(w(1), O, 'NEXT');
                            },
                            onPrevious: () => {
                                D(w(-1), O, 'PREVIOUS');
                            },
                            onIndicatorClick: (e) => {
                                D(e, O, 'GO_TO_SLIDE');
                            }
                        })
                ]
            })
        );
    };
