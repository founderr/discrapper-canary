n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(100621),
    o = n(782690),
    c = n(442837),
    d = n(481060),
    u = n(607070),
    _ = n(364083),
    E = n(766219),
    h = n(931515),
    m = n(207796),
    I = n(308083),
    p = n(689938),
    g = n(593741);
let T = 70,
    C = () => {
        let [e, t] = a.useState(!1),
            n = (0, m.GN)((e) => e.selectedGames, o.Z),
            { options: s, matchSorterOptions: l } = (0, _.P)(),
            c = a.useCallback((e) => {
                m.GN.getState().setSelectedGames(e), (0, E.Og)();
            }, []);
        return (0, i.jsxs)('div', {
            className: r()(g.searchBarArea, { [g.popoutOpen]: e }),
            children: [
                (0, i.jsx)(d.MagnifyingGlassIcon, { className: g.searchIcon }),
                (0, i.jsx)(d.SearchableSelect, {
                    popoutPosition: 'bottom',
                    onOpen: () => t(!0),
                    onClose: () => t(!1),
                    multi: !0,
                    autoFocus: !0,
                    look: d.SelectLooks.CUSTOM,
                    wrapperClassName: g.inputWrapper,
                    options: s,
                    value: n,
                    placeholder: p.Z.Messages.DISCOVERY_PLUS_HEADER_SEARCH_PLACEHOLDER,
                    onChange: c,
                    isDisabled: n.length === I.cm,
                    matchSorterOptions: l
                })
            ]
        });
    },
    f = (e) => {
        var t;
        let { game: n, index: a, currentIndex: s, gamesCount: r } = e,
            o = a - s,
            c = Math.abs(o),
            u = Math.min(c, r - c),
            _ = (0, d.useSpring)({
                position: 'absolute',
                display: u <= 4 ? 'flex' : 'none',
                opacity: a === s ? 1 : 0.5,
                transform: a === s ? 'translateX(0px)' : 'translateX('.concat(((u <= 5 && c > r / 2 ? o < 0 : o > 0) ? 1 : -1) * (180 * u + T), 'px)'),
                width: a === s ? ''.concat(280, 'px') : ''.concat(140, 'px'),
                boxShadow: a === s ? '0px 10px 60px 0px '.concat(n.primaryColor.toHexString()) : 'none'
            });
        return (0, i.jsx)(l.animated.div, {
            className: g.carouselCard,
            style: _,
            children: (0, i.jsx)('img', {
                className: g.carouselImage,
                src: null !== (t = n.backgroundImageUrl) && void 0 !== t ? t : '',
                alt: n.name
            })
        });
    };
t.Z = () => {
    let { games: e } = (0, h.I9)(8, !0),
        t = a.useMemo(() => [...e, ...e], [e]),
        [n, s] = a.useState(Math.floor(t.length / 2)),
        [r, o] = a.useState(I.$N[Math.floor(Math.random() * I.$N.length)]),
        _ = (0, c.e7)([u.Z], () => u.Z.useReducedMotion);
    a.useEffect(() => {
        if (_) return;
        let e = setInterval(() => {
            s((n + 1) % t.length), o(I.$N[Math.floor(Math.random() * I.$N.length)]);
        }, 3000);
        return () => {
            clearInterval(e);
        };
    }, [n, t.length, _]);
    let E = (0, d.useTransition)(n, {
        key: n,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        expires: !0
    });
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsxs)('div', {
                className: g.carouselBackground,
                children: [
                    (0, i.jsx)('div', { className: g.carouselRadialGradient }),
                    (0, i.jsx)('div', { className: g.carouselLinearGradient }),
                    (0, i.jsx)('div', {
                        className: g.cardCarousel,
                        children: t.map((e, a) =>
                            (0, i.jsx)(
                                f,
                                {
                                    game: e,
                                    index: a,
                                    currentIndex: n,
                                    gamesCount: t.length
                                },
                                ''.concat(e.id, '-').concat(a)
                            )
                        )
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.content,
                children: [
                    (0, i.jsx)('div', {
                        className: g.animatedTitleContainer,
                        children: E((e, n) =>
                            (0, i.jsx)(l.animated.div, {
                                className: g.animatedTitle,
                                style: e,
                                children: (0, i.jsx)(d.Heading, {
                                    className: g.titleText,
                                    variant: 'display-lg',
                                    color: 'header-primary',
                                    children: p.Z.Messages.DISCOVERY_PLUS_HEADER_TITLE_GENERIC.format({
                                        descriptor: r,
                                        gameName: t[n].name,
                                        gameNameHook: (e, a) =>
                                            (0, i.jsx)(
                                                'div',
                                                {
                                                    className: g.animatedGameTitle,
                                                    style: { color: t[n].primaryColor.toHexString() },
                                                    children: e
                                                },
                                                a
                                            )
                                    })
                                })
                            })
                        )
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: p.Z.Messages.DISCOVERY_PLUS_HEADER_SUBTITLE
                    }),
                    (0, i.jsx)(C, {})
                ]
            })
        ]
    });
};
