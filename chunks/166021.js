n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(212433),
    o = n(481060),
    c = n(320319),
    d = n(281781);
t.Z = (e) => {
    let { cards: t, className: n, cardType: r } = e,
        _ = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [E, u] = a.useState(0),
        [T, I] = a.useState(_()),
        [R, g] = a.useState(!1),
        N = t.length;
    a.useEffect(() => {
        let e = () => {
            I(_());
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []),
        a.useEffect(() => {
            N > T && E > N - T ? u(N - T) : N <= T && u(0);
        }, [N, T]);
    let m = a.useCallback((e) => ({ x: (e - E) * 100 }), [E]),
        [C, f] = (0, o.useSprings)(t.length, m);
    return (
        a.useEffect(() => {
            f(m);
        }, [f, m]),
        (0, s.jsx)('div', {
            className: n,
            children: (0, s.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    N > T &&
                        (0, s.jsx)(o.Clickable, {
                            onClick: R
                                ? () => {
                                      u((e) => (0 === e ? N - T : e - 1));
                                  }
                                : void 0,
                            className: i()({
                                [d.leftArrow]: R,
                                [d.inactiveArrow]: !R
                            }),
                            children: (0, s.jsx)(o.ArrowSmallLeftIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, s.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: C.map((e, n) => {
                            let { x: a } = e;
                            return (0, s.jsx)(
                                l.animated.div,
                                {
                                    className: d.card,
                                    style: { transform: null == a ? void 0 : a.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                    children: (0, s.jsx)(
                                        c.Z,
                                        {
                                            ...t[n],
                                            cardType: r
                                        },
                                        ''.concat(t[n].name, '_').concat(n, '_perks_card')
                                    )
                                },
                                ''.concat(t[n].name, '_').concat(n, '_animated_div')
                            );
                        })
                    }),
                    N > T &&
                        (0, s.jsx)(o.Clickable, {
                            onClick: () => {
                                u((e) => (e >= N - T ? (g(!0), 0) : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, s.jsx)(o.ArrowSmallRightIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    N > T &&
                        (0, s.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > N - T)) return (0, s.jsx)('div', { className: t === E ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};
