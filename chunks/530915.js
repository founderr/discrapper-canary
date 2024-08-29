n.d(t, {
    U: function () {
        return v;
    }
}),
    n(47120);
var r,
    a,
    s = n(735250),
    o = n(470079),
    i = n(120356),
    c = n.n(i),
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
((a = r || (r = {})).GO_TO_SLIDE = 'GO_TO_SLIDE'), (a.NEXT = 'NEXT'), (a.PREVIOUS = 'PREVIOUS');
let E = (e) => {
        let { currentSlideIndex: t, numSlides: n, onNext: r, onPrevious: a, onIndicatorClick: o, className: i, paginationButtonClassName: l } = e,
            d = c()(x.paginationButton, l);
        return (0, s.jsxs)('div', {
            className: c()(x.controls, i),
            children: [
                (0, s.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: a,
                    'aria-label': h.Z.Messages.PAGINATION_PREVIOUS,
                    children: (0, s.jsx)(_.Z, { direction: _.Z.Directions.LEFT })
                }),
                (0, s.jsx)('div', {
                    className: x.paginationIndicatorContainer,
                    children: f()(n, (e) =>
                        (0, s.jsx)(
                            C.Button,
                            {
                                look: C.Button.Looks.BLANK,
                                size: C.Button.Sizes.NONE,
                                onClick: () => o(e),
                                className: c()(x.paginationIndicatorButton, { [x.selected]: e === t }),
                                'aria-label': h.Z.Messages.PAGINATION_SLIDE_LABEL.format({ pageNumber: e + 1 }),
                                children: (0, s.jsx)('div', { className: c()(x.paginationIndicator, { [x.selected]: e === t }) })
                            },
                            'slide-indicator-'.concat(e)
                        )
                    )
                }),
                (0, s.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: r,
                    'aria-label': h.Z.Messages.PAGINATION_NEXT,
                    children: (0, s.jsx)(_.Z, { direction: _.Z.Directions.RIGHT })
                })
            ]
        });
    },
    v = (e) => {
        let { carouselId: t, items: n = [], renderItem: r, getItemId: a, onIntentionalChange: i, onChangeItem: l, className: u, controlsClassName: f, paginationButtonClassName: p, springConfig: _, delay: h, initialPaused: v = !1, unidirectional: S = !1, analyticsLocations: L } = e,
            { trackSlideView: T, trackPagination: N } = (0, b.X)(t, L),
            [k, O] = (0, o.useState)(0),
            [j, B] = (0, o.useState)(!1),
            [Z, P] = (0, o.useState)(!1),
            R = o.useCallback(() => P(!0), []),
            A = o.useCallback(() => P(!1), []),
            y = (0, g.e7)([m.Z], () => m.Z.isFocused()),
            M = null != h && !v && !Z && y,
            w = o.useCallback((e) => (n.length + k + e) % n.length, [n, k]),
            D = o.useCallback(
                d()((e, t, r) => {
                    null != r && (null == i || i(n[e], t, e, r), N(e, k, a(e), a(t))), B('GO_TO_SLIDE' === r), null == l || l(n[e], t, e), O(e);
                }, 200),
                [n, i, l]
            );
        return (
            (0, o.useEffect)(() => {
                T(k, a(k));
            }, [T, k, a]),
            (0, o.useEffect)(() => {
                if (M) {
                    let e = w(1),
                        t = setInterval(() => D(e, k), h);
                    return () => clearInterval(t);
                }
            }, [M, h, k, w, D]),
            (0, s.jsxs)('div', {
                className: c()(x.carouselContainer, u),
                onMouseEnter: R,
                onMouseLeave: A,
                children: [
                    (0, s.jsx)(C.Slides, {
                        activeSlide: String(k),
                        springConfig: null != _ ? _ : I,
                        directionOverride: S && !j ? 'forwards' : void 0,
                        fadeInOut: !0,
                        children: n.map((e, t) =>
                            (0, s.jsx)(
                                C.Slide,
                                {
                                    id: String(t),
                                    children: (0, s.jsx)('div', {
                                        className: c()(x.carousel),
                                        children: r(e, t)
                                    })
                                },
                                String(t)
                            )
                        )
                    }),
                    n.length > 1 &&
                        (0, s.jsx)(E, {
                            className: f,
                            paginationButtonClassName: p,
                            currentSlideIndex: k,
                            numSlides: n.length,
                            onNext: () => {
                                D(w(1), k, 'NEXT');
                            },
                            onPrevious: () => {
                                D(w(-1), k, 'PREVIOUS');
                            },
                            onIndicatorClick: (e) => {
                                D(e, k, 'GO_TO_SLIDE');
                            }
                        })
                ]
            })
        );
    };
