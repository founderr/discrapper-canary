n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(887024),
    o = n(481060),
    c = n(410154),
    d = n(915296),
    _ = n(314684),
    u = n(565626),
    E = n(32173),
    T = n(976465),
    I = n(391110),
    R = n(75077),
    g = n(320319),
    N = n(821912);
let C = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: a, headerClassname: r } = e,
        i = (0, s.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != r ? r : N.heading,
            children: a
        });
    return null == t
        ? i
        : n
          ? (0, s.jsxs)('div', {
                className: N.sectionHeader,
                children: [
                    i,
                    null != t &&
                        (0, s.jsx)('div', {
                            className: N.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, s.jsx)('div', {
                className: N.container,
                children: (0, s.jsx)('div', {
                    className: N.sectionHeaderSeeAll,
                    children: i
                })
            });
};
t.Z = (e) => {
    var t;
    let { className: n, variant: r = I.R0.PERKS_DISCOVERABILITY, noBackground: m = !1, leftAlignHeaders: p = !1, showAllPerksButton: A, headerClassname: f, isFullScreen: h = !0 } = e,
        M = a.useRef(null),
        S = (0, _.yQ)(),
        x = (0, u.Ag)(S),
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
        U = (0, R.mN)(),
        B = (0, R.sP)({
            perksCards: D,
            variant: r,
            shopMarketingVariation: b,
            isFullScreen: h,
            showTenureCard: null == S ? void 0 : S.showCard,
            tileOrderVariant: O,
            isPremiumSubscriber: U
        }),
        j = B.some((e) => null != e.pillText),
        [G, w] = a.useState(null),
        y = a.useRef(new l.qA());
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (null == D ? void 0 : null === (t = D.freeBoost) || void 0 === t ? void 0 : t.name) === E.u.FREE_BOOST &&
                (0, s.jsx)(l.O_, {
                    ref: w,
                    className: N.confettiCanvas,
                    environment: y.current
                }),
            (0, s.jsxs)('div', {
                ref: M,
                className: i()(
                    N.section,
                    {
                        [N.centerAlignSection]: !p,
                        [N.leftAlignSection]: p
                    },
                    n
                ),
                children: [
                    (0, s.jsx)(C, {
                        showAllPerksButton: A,
                        leftAlignHeaders: p,
                        title: Z.title,
                        headerClassname: f
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: i()(N.subtitle, {
                            [N.subtitle]: null == A || p,
                            [N.subtitleWithButton]: null != A && !p,
                            [N.fullWidth]: P || p,
                            [N.moreSubtitleMargin]: j,
                            [N.leftAlignSubtitle]: p,
                            [N.centerAlignSubtitle]: !p
                        }),
                        children: Z.subtitle
                    }),
                    !p &&
                        null != A &&
                        (0, s.jsx)('div', {
                            className: i()(N.showAllPerksButtonCenter),
                            children: A
                        }),
                    (0, s.jsx)('div', {
                        className: i()({
                            [N.cardContainer]: h,
                            [N.cardContainerNarrowWidth]: !h
                        }),
                        children: B.map((e, t) =>
                            (0, s.jsx)(
                                g.Z,
                                {
                                    confettiCanvas: e.name === E.u.FREE_BOOST ? G : void 0,
                                    ...e,
                                    forceShadow: m
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
