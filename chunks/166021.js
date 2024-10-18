n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(212433),
    o = n(481060),
    c = n(320319),
    _ = n(281781);
t.Z = (e) => {
    let { cards: t, className: n, cardType: r } = e,
        d = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [E, u] = a.useState(0),
        [T, I] = a.useState(d()),
        [R, g] = a.useState(!1),
        N = t.length;
    a.useEffect(() => {
        let e = () => {
            I(d());
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
    let C = a.useCallback((e) => ({ x: (e - E) * 100 }), [E]),
        [m, A] = (0, o.useSprings)(t.length, C);
    return (
        a.useEffect(() => {
            A(C);
        }, [A, C]),
        (0, s.jsx)('div', {
            className: n,
            children: (0, s.jsxs)('div', {
                className: _.cardContainer,
                children: [
                    N > T &&
                        (0, s.jsx)(o.Clickable, {
                            onClick: R
                                ? () => {
                                      u((e) => (0 === e ? N - T : e - 1));
                                  }
                                : void 0,
                            className: i()({
                                [_.leftArrow]: R,
                                [_.inactiveArrow]: !R
                            }),
                            children: (0, s.jsx)(o.ArrowSmallLeftIcon, {
                                className: _.arrowIcon,
                                colorClass: _.arrowIcon
                            })
                        }),
                    (0, s.jsx)('div', {
                        className: _.cardInnerContainer,
                        children: m.map((e, n) => {
                            let { x: a } = e;
                            return (0, s.jsx)(
                                l.animated.div,
                                {
                                    className: _.card,
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
                            className: _.rightArrow,
                            children: (0, s.jsx)(o.ArrowSmallRightIcon, {
                                className: _.arrowIcon,
                                colorClass: _.arrowIcon
                            })
                        }),
                    N > T &&
                        (0, s.jsx)('div', {
                            className: _.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > N - T)) return (0, s.jsx)('div', { className: t === E ? _.selectedDot : _.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};
