n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(100621),
    o = n(481060),
    c = n(320319),
    d = n(99882);
t.Z = (e) => {
    let { cards: t, className: n, cardType: a } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [g, m] = r.useState(0),
        [f, _] = r.useState(u()),
        [p, h] = r.useState(!1),
        E = t.length;
    r.useEffect(() => {
        let e = () => {
            _(u());
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []),
        r.useEffect(() => {
            E > f && g > E - f ? m(E - f) : E <= f && m(0);
        }, [E, f]);
    let b = r.useCallback((e) => ({ x: (e - g) * 100 }), [g]),
        [x, C] = (0, o.useSprings)(t.length, b);
    return (
        r.useEffect(() => {
            C(b);
        }, [C, b]),
        (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    E > f &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: p
                                ? () => {
                                      m((e) => (0 === e ? E - f : e - 1));
                                  }
                                : void 0,
                            className: s()({
                                [d.leftArrow]: p,
                                [d.inactiveArrow]: !p
                            }),
                            children: (0, i.jsx)(o.ArrowSmallLeftIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: x.map((e, n) => {
                            let { x: r } = e;
                            return (0, i.jsx)(
                                l.animated.div,
                                {
                                    className: d.card,
                                    style: { transform: null == r ? void 0 : r.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                    children: (0, i.jsx)(
                                        c.Z,
                                        {
                                            ...t[n],
                                            cardType: a
                                        },
                                        ''.concat(t[n].name, '_').concat(n, '_perks_card')
                                    )
                                },
                                ''.concat(t[n].name, '_').concat(n, '_animated_div')
                            );
                        })
                    }),
                    E > f &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: () => {
                                m((e) => (e >= E - f ? (h(!0), 0) : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, i.jsx)(o.ArrowSmallRightIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    E > f &&
                        (0, i.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > E - f)) return (0, i.jsx)('div', { className: t === g ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};
