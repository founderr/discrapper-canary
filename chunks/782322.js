n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(100621),
    o = n(976649),
    c = n(442837),
    d = n(481060),
    u = n(607070),
    h = n(364083),
    m = n(766219),
    p = n(931515),
    g = n(207796),
    f = n(308083),
    _ = n(388032),
    E = n(593741);
let I = 70,
    C = () => {
        let [e, t] = r.useState(!1),
            n = (0, g.GN)((e) => e.selectedGames, o.Z),
            { options: l, matchSorterOptions: s } = (0, h.P)(),
            c = r.useCallback((e) => {
                g.GN.getState().setSelectedGames(e), (0, m.Og)();
            }, []);
        return (0, i.jsxs)('div', {
            className: a()(E.searchBarArea, { [E.popoutOpen]: e }),
            children: [
                (0, i.jsx)(d.MagnifyingGlassIcon, { className: E.searchIcon }),
                (0, i.jsx)(d.SearchableSelect, {
                    popoutPosition: 'bottom',
                    onOpen: () => t(!0),
                    onClose: () => t(!1),
                    multi: !0,
                    autoFocus: !0,
                    look: d.SelectLooks.CUSTOM,
                    wrapperClassName: E.inputWrapper,
                    className: E.searchBar,
                    options: l,
                    value: n,
                    placeholder: _.intl.string(_.t.wkM6xs),
                    onChange: c,
                    isDisabled: n.length === f.cm,
                    matchSorterOptions: s
                })
            ]
        });
    },
    v = (e) => {
        var t;
        let { game: n, index: r, currentIndex: l, gamesCount: a } = e,
            o = r - l,
            c = Math.abs(o),
            u = Math.min(c, a - c),
            h = (0, d.useSpring)({
                position: 'absolute',
                display: u <= 4 ? 'flex' : 'none',
                opacity: r === l ? 1 : 0.5,
                transform: r === l ? 'translateX(0px)' : 'translateX('.concat(((u <= 5 && c > a / 2 ? o < 0 : o > 0) ? 1 : -1) * (180 * u + I), 'px)'),
                width: r === l ? ''.concat(280, 'px') : ''.concat(140, 'px'),
                boxShadow: r === l ? '0px 10px 60px 0px '.concat(n.primaryColor.toHexString()) : 'none'
            });
        return (0, i.jsx)(s.animated.div, {
            className: E.carouselCard,
            style: h,
            children: (0, i.jsx)('img', {
                className: E.carouselImage,
                src: null !== (t = n.backgroundImageUrl) && void 0 !== t ? t : '',
                alt: n.name
            })
        });
    };
t.Z = () => {
    let { games: e } = (0, p.I9)(8, !0),
        t = r.useMemo(() => [...e, ...e], [e]),
        [n, l] = r.useState(Math.floor(t.length / 2)),
        [a, o] = r.useState(f.$N[Math.floor(Math.random() * f.$N.length)]),
        h = (0, c.e7)([u.Z], () => u.Z.useReducedMotion);
    r.useEffect(() => {
        if (h) return;
        let e = setInterval(() => {
            l((n + 1) % t.length), o(f.$N[Math.floor(Math.random() * f.$N.length)]);
        }, 3000);
        return () => {
            clearInterval(e);
        };
    }, [n, t.length, h]);
    let m = (0, d.useTransition)(n, {
        key: n,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        expires: !0
    });
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsxs)('div', {
                className: E.carouselBackground,
                children: [
                    (0, i.jsx)('div', { className: E.carouselRadialGradient }),
                    (0, i.jsx)('div', { className: E.carouselLinearGradient }),
                    (0, i.jsx)('div', {
                        className: E.cardCarousel,
                        children: t.map((e, r) =>
                            (0, i.jsx)(
                                v,
                                {
                                    game: e,
                                    index: r,
                                    currentIndex: n,
                                    gamesCount: t.length
                                },
                                ''.concat(e.id, '-').concat(r)
                            )
                        )
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: E.content,
                children: [
                    (0, i.jsx)('div', {
                        className: E.animatedTitleContainer,
                        children: m((e, n) =>
                            (0, i.jsx)(s.animated.div, {
                                className: E.animatedTitle,
                                style: e,
                                children: (0, i.jsx)(d.Heading, {
                                    className: E.titleText,
                                    variant: 'display-lg',
                                    color: 'header-primary',
                                    children: _.intl.format(_.t['82YH1N'], {
                                        descriptor: a,
                                        gameName: t[n].name,
                                        gameNameHook: (e, r) =>
                                            (0, i.jsx)(
                                                'div',
                                                {
                                                    className: E.animatedGameTitle,
                                                    style: { color: t[n].primaryColor.toHexString() },
                                                    children: e
                                                },
                                                r
                                            )
                                    })
                                })
                            })
                        )
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: _.intl.string(_.t.MlmAQk)
                    }),
                    (0, i.jsx)(C, {})
                ]
            })
        ]
    });
};
