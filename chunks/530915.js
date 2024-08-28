n.d(t, {
    U: function () {
        return v;
    }
}),
    n(47120);
var r,
    s,
    a = n(735250),
    i = n(470079),
    o = n(120356),
    l = n.n(o),
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
((s = r || (r = {})).GO_TO_SLIDE = 'GO_TO_SLIDE'), (s.NEXT = 'NEXT'), (s.PREVIOUS = 'PREVIOUS');
let E = (e) => {
        let { currentSlideIndex: t, numSlides: n, onNext: r, onPrevious: s, onIndicatorClick: i, className: o, paginationButtonClassName: c } = e,
            d = l()(x.paginationButton, c);
        return (0, a.jsxs)('div', {
            className: l()(x.controls, o),
            children: [
                (0, a.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: s,
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
                                className: l()(x.paginationIndicatorButton, { [x.selected]: e === t }),
                                'aria-label': h.Z.Messages.PAGINATION_SLIDE_LABEL.format({ pageNumber: e + 1 }),
                                children: (0, a.jsx)('div', { className: l()(x.paginationIndicator, { [x.selected]: e === t }) })
                            },
                            'slide-indicator-'.concat(e)
                        )
                    )
                }),
                (0, a.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: r,
                    'aria-label': h.Z.Messages.PAGINATION_NEXT,
                    children: (0, a.jsx)(_.Z, { direction: _.Z.Directions.RIGHT })
                })
            ]
        });
    },
    v = (e) => {
        let { carouselId: t, items: n = [], renderItem: r, getItemId: s, onIntentionalChange: o, onChangeItem: c, className: u, controlsClassName: f, paginationButtonClassName: p, springConfig: _, delay: h, initialPaused: v = !1, unidirectional: S = !1, analyticsLocations: T } = e,
            { trackSlideView: L, trackPagination: N } = (0, b.X)(t, T),
            [O, k] = (0, i.useState)(0),
            [j, B] = (0, i.useState)(!1),
            [P, Z] = (0, i.useState)(!1),
            A = i.useCallback(() => Z(!0), []),
            R = i.useCallback(() => Z(!1), []),
            y = (0, g.e7)([m.Z], () => m.Z.isFocused()),
            M = null != h && !v && !P && y,
            w = i.useCallback((e) => (n.length + O + e) % n.length, [n, O]),
            D = i.useCallback(
                d()((e, t, r) => {
                    null != r && (null == o || o(n[e], t, e, r), N(e, O, s(e), s(t))), B('GO_TO_SLIDE' === r), null == c || c(n[e], t, e), k(e);
                }, 200),
                [n, o, c]
            );
        return (
            (0, i.useEffect)(() => {
                L(O, s(O));
            }, [L, O, s]),
            (0, i.useEffect)(() => {
                if (M) {
                    let e = w(1),
                        t = setInterval(() => D(e, O), h);
                    return () => clearInterval(t);
                }
            }, [M, h, O, w, D]),
            (0, a.jsxs)('div', {
                className: l()(x.carouselContainer, u),
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
                                        className: l()(x.carousel),
                                        children: r(e, t)
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
