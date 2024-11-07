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
        [f, p] = r.useState(u()),
        [_, h] = r.useState(!1),
        x = t.length;
    r.useEffect(() => {
        let e = () => {
            p(u());
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []),
        r.useEffect(() => {
            x > f && g > x - f ? m(x - f) : x <= f && m(0);
        }, [x, f]);
    let E = r.useCallback((e) => ({ x: (e - g) * 100 }), [g]),
        [b, C] = (0, o.useSprings)(t.length, E);
    return (
        r.useEffect(() => {
            C(E);
        }, [C, E]),
        (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    x > f &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: _
                                ? () => {
                                      m((e) => (0 === e ? x - f : e - 1));
                                  }
                                : void 0,
                            className: s()({
                                [d.leftArrow]: _,
                                [d.inactiveArrow]: !_
                            }),
                            children: (0, i.jsx)(o.ArrowSmallLeftIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: b.map((e, n) => {
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
                    x > f &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: () => {
                                m((e) => (e >= x - f ? (h(!0), 0) : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, i.jsx)(o.ArrowSmallRightIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    x > f &&
                        (0, i.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > x - f)) return (0, i.jsx)('div', { className: t === g ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};
