n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(887024),
    l = n(481060),
    c = n(410154),
    d = n(915296),
    _ = n(314684),
    u = n(565626),
    E = n(32173),
    T = n(976465),
    I = n(391110),
    R = n(75077),
    m = n(320319),
    g = n(821912);
let N = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: a, headerClassname: r } = e,
        i = (0, s.jsx)(l.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != r ? r : g.heading,
            children: a
        });
    return null == t
        ? i
        : n
          ? (0, s.jsxs)('div', {
                className: g.sectionHeader,
                children: [
                    i,
                    null != t &&
                        (0, s.jsx)('div', {
                            className: g.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, s.jsx)('div', {
                className: g.container,
                children: (0, s.jsx)('div', {
                    className: g.sectionHeaderSeeAll,
                    children: i
                })
            });
};
t.Z = (e) => {
    var t;
    let { className: n, variant: r = I.R0.PERKS_DISCOVERABILITY, noBackground: C = !1, leftAlignHeaders: p = !1, showAllPerksButton: f, headerClassname: A, isFullScreen: S = !0 } = e,
        M = a.useRef(null),
        h = (0, _.yQ)(),
        x = (0, u.Ag)(h),
        b = (0, c.ZP)('perks-discoverability');
    (0, u.I2)();
    let O = (0, d.HI)({ location: I.R0.PERKS_DISCOVERABILITY }),
        P = r === I.R0.WHATS_NEW,
        v = (0, _.IY)(),
        L = (0, T.x$)();
    a.useEffect(() => {
        P && !x && (v(), L());
    }, [v, L, P, x]),
        a.useEffect(() => {
            let e = M.current;
            if (null == e || !x || !P) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), P && v();
            });
            return () => {
                cancelAnimationFrame(t), P && v();
            };
        }, [M, x, P, v]);
    let Z = (0, R.Op)(P),
        D = (0, E.Z)(),
        B = (0, R.mN)(),
        U = (0, R.sP)({
            perksCards: D,
            variant: r,
            shopMarketingVariation: b,
            isFullScreen: S,
            showTenureCard: null == h ? void 0 : h.showCard,
            tileOrderVariant: O,
            isPremiumSubscriber: B
        }),
        j = U.some((e) => null != e.pillText),
        [G, w] = a.useState(null),
        y = a.useRef(new o.qA());
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (null == D ? void 0 : null === (t = D.freeBoost) || void 0 === t ? void 0 : t.name) === E.u.FREE_BOOST &&
                (0, s.jsx)(o.O_, {
                    ref: w,
                    className: g.confettiCanvas,
                    environment: y.current
                }),
            (0, s.jsxs)('div', {
                ref: M,
                className: i()(
                    g.section,
                    {
                        [g.centerAlignSection]: !p,
                        [g.leftAlignSection]: p
                    },
                    n
                ),
                children: [
                    (0, s.jsx)(N, {
                        showAllPerksButton: f,
                        leftAlignHeaders: p,
                        title: Z.title,
                        headerClassname: A
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: i()(g.subtitle, {
                            [g.subtitle]: null == f || p,
                            [g.subtitleWithButton]: null != f && !p,
                            [g.fullWidth]: P || p,
                            [g.moreSubtitleMargin]: j,
                            [g.leftAlignSubtitle]: p,
                            [g.centerAlignSubtitle]: !p
                        }),
                        children: Z.subtitle
                    }),
                    !p &&
                        null != f &&
                        (0, s.jsx)('div', {
                            className: i()(g.showAllPerksButtonCenter),
                            children: f
                        }),
                    (0, s.jsx)('div', {
                        className: i()({
                            [g.cardContainer]: S,
                            [g.cardContainerNarrowWidth]: !S
                        }),
                        children: U.map((e, t) =>
                            (0, s.jsx)(
                                m.Z,
                                {
                                    confettiCanvas: e.name === E.u.FREE_BOOST ? G : void 0,
                                    ...e,
                                    forceShadow: C
                                },
                                ''.concat(e.name, '_').concat(t)
                            )
                        )
                    })
                ]
            })
        ]
    });
};
