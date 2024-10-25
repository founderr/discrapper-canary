n(47120);
var s = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    l = n(703533),
    o = n(481060),
    c = n(975298),
    _ = n(410154),
    d = n(915296),
    E = n(314684),
    u = n(565626),
    T = n(32173),
    I = n(976465),
    R = n(391110),
    g = n(75077),
    N = n(320319),
    m = n(821912);
let C = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: a, headerClassname: r } = e,
        i = (0, s.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != r ? r : m.heading,
            children: a
        });
    return null == t
        ? i
        : n
          ? (0, s.jsxs)('div', {
                className: m.sectionHeader,
                children: [
                    i,
                    null != t &&
                        (0, s.jsx)('div', {
                            className: m.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, s.jsx)('div', {
                className: m.container,
                children: (0, s.jsx)('div', {
                    className: m.sectionHeaderSeeAll,
                    children: i
                })
            });
};
t.Z = (e) => {
    var t;
    let { className: n, variant: r = R.R0.PERKS_DISCOVERABILITY, noBackground: A = !1, leftAlignHeaders: p = !1, showAllPerksButton: f, headerClassname: M, isFullScreen: S = !0 } = e,
        h = a.useRef(null),
        x = (0, E.yQ)(),
        b = (0, u.Ag)(x),
        O = (0, _.ZP)('perks-discoverability');
    (0, u.I2)();
    let P = (0, d.HI)({ location: R.R0.PERKS_DISCOVERABILITY }),
        v = r === R.R0.WHATS_NEW,
        L = (0, E.IY)(),
        Z = (0, I.x$)();
    a.useEffect(() => {
        v && !b && (L(), Z());
    }, [L, Z, v, b]),
        a.useEffect(() => {
            let e = h.current;
            if (null == e || !b || !v) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), v && L();
            });
            return () => {
                cancelAnimationFrame(t), v && L();
            };
        }, [h, b, v, L]);
    let D = (0, g.Op)(v),
        U = (0, T.Z)(),
        B = (0, g.mN)(),
        { fractionalState: j } = (0, c.Z)(),
        G = (0, g.sP)({
            perksCards: U,
            variant: r,
            shopMarketingVariation: O,
            isFullScreen: S,
            showTenureCard: null == x ? void 0 : x.showCard,
            tileOrderVariant: P,
            isPremiumSubscriber: B,
            fractionalState: j
        }),
        w = G.some((e) => null != e.pillText),
        [y, H] = a.useState(null),
        k = a.useRef(new l.qA());
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (null == U ? void 0 : null === (t = U.freeBoost) || void 0 === t ? void 0 : t.name) === T.u.FREE_BOOST &&
                (0, s.jsx)(l.O_, {
                    ref: H,
                    className: m.confettiCanvas,
                    environment: k.current
                }),
            (0, s.jsxs)('div', {
                ref: h,
                className: i()(
                    m.section,
                    {
                        [m.centerAlignSection]: !p,
                        [m.leftAlignSection]: p
                    },
                    n
                ),
                children: [
                    (0, s.jsx)(C, {
                        showAllPerksButton: f,
                        leftAlignHeaders: p,
                        title: D.title,
                        headerClassname: M
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: i()(m.subtitle, {
                            [m.subtitle]: null == f || p,
                            [m.subtitleWithButton]: null != f && !p,
                            [m.fullWidth]: v || p,
                            [m.moreSubtitleMargin]: w,
                            [m.leftAlignSubtitle]: p,
                            [m.centerAlignSubtitle]: !p
                        }),
                        children: D.subtitle
                    }),
                    !p &&
                        null != f &&
                        (0, s.jsx)('div', {
                            className: i()(m.showAllPerksButtonCenter),
                            children: f
                        }),
                    (0, s.jsx)('div', {
                        className: i()({
                            [m.cardContainer]: S,
                            [m.cardContainerNarrowWidth]: !S
                        }),
                        children: G.map((e, t) =>
                            (0, s.jsx)(
                                N.Z,
                                {
                                    confettiCanvas: e.name === T.u.FREE_BOOST ? y : void 0,
                                    ...e,
                                    forceShadow: A
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
