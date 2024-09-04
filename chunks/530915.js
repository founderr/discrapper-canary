n.d(t, {
    U: function () {
        return v;
    }
}),
    n(47120);
var a,
    r,
    s = n(735250),
    o = n(470079),
    i = n(120356),
    l = n.n(i),
    c = n(954955),
    d = n.n(c),
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
((r = a || (a = {})).GO_TO_SLIDE = 'GO_TO_SLIDE'), (r.NEXT = 'NEXT'), (r.PREVIOUS = 'PREVIOUS');
let E = (e) => {
        let { currentSlideIndex: t, numSlides: n, onNext: a, onPrevious: r, onIndicatorClick: o, className: i, paginationButtonClassName: c } = e,
            d = l()(x.paginationButton, c);
        return (0, s.jsxs)('div', {
            className: l()(x.controls, i),
            children: [
                (0, s.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: r,
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
                                className: l()(x.paginationIndicatorButton, { [x.selected]: e === t }),
                                'aria-label': h.Z.Messages.PAGINATION_SLIDE_LABEL.format({ pageNumber: e + 1 }),
                                children: (0, s.jsx)('div', { className: l()(x.paginationIndicator, { [x.selected]: e === t }) })
                            },
                            'slide-indicator-'.concat(e)
                        )
                    )
                }),
                (0, s.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: a,
                    'aria-label': h.Z.Messages.PAGINATION_NEXT,
                    children: (0, s.jsx)(_.Z, { direction: _.Z.Directions.RIGHT })
                })
            ]
        });
    },
    v = (e) => {
        let { carouselId: t, items: n = [], renderItem: a, getItemId: r, onIntentionalChange: i, onChangeItem: c, className: u, controlsClassName: f, paginationButtonClassName: p, springConfig: _, delay: h, initialPaused: v = !1, unidirectional: T = !1, analyticsLocations: L } = e,
            { trackSlideView: S, trackPagination: N } = (0, b.X)(t, L),
            [O, k] = (0, o.useState)(0),
            [B, j] = (0, o.useState)(!1),
            [Z, P] = (0, o.useState)(!1),
            A = o.useCallback(() => P(!0), []),
            R = o.useCallback(() => P(!1), []),
            y = (0, g.e7)([m.Z], () => m.Z.isFocused()),
            M = null != h && !v && !Z && y,
            w = o.useCallback((e) => (n.length + O + e) % n.length, [n, O]),
            H = o.useCallback(
                d()((e, t, a) => {
                    null != a && (null == i || i(n[e], t, e, a), N(e, O, r(e), r(t))), j('GO_TO_SLIDE' === a), null == c || c(n[e], t, e), k(e);
                }, 200),
                [n, i, c]
            );
        return (
            (0, o.useEffect)(() => {
                S(O, r(O));
            }, [S, O, r]),
            (0, o.useEffect)(() => {
                if (M) {
                    let e = w(1),
                        t = setInterval(() => H(e, O), h);
                    return () => clearInterval(t);
                }
            }, [M, h, O, w, H]),
            (0, s.jsxs)('div', {
                className: l()(x.carouselContainer, u),
                onMouseEnter: A,
                onMouseLeave: R,
                children: [
                    (0, s.jsx)(C.Slides, {
                        activeSlide: String(O),
                        springConfig: null != _ ? _ : I,
                        directionOverride: T && !B ? 'forwards' : void 0,
                        fadeInOut: !0,
                        children: n.map((e, t) =>
                            (0, s.jsx)(
                                C.Slide,
                                {
                                    id: String(t),
                                    children: (0, s.jsx)('div', {
                                        className: l()(x.carousel),
                                        children: a(e, t)
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
                            currentSlideIndex: O,
                            numSlides: n.length,
                            onNext: () => {
                                H(w(1), O, 'NEXT');
                            },
                            onPrevious: () => {
                                H(w(-1), O, 'PREVIOUS');
                            },
                            onIndicatorClick: (e) => {
                                H(e, O, 'GO_TO_SLIDE');
                            }
                        })
                ]
            })
        );
    };
