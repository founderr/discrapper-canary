n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(887024),
    o = n(481060),
    c = n(410154),
    _ = n(915296),
    d = n(314684),
    E = n(565626),
    u = n(32173),
    T = n(976465),
    I = n(391110),
    R = n(75077),
    g = n(320319),
    N = n(821912);
let m = (e) => {
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
    let { className: n, variant: r = I.R0.PERKS_DISCOVERABILITY, noBackground: C = !1, leftAlignHeaders: A = !1, showAllPerksButton: f, headerClassname: p, isFullScreen: M = !0 } = e,
        S = a.useRef(null),
        h = (0, d.yQ)(),
        b = (0, E.Ag)(h),
        x = (0, c.ZP)('perks-discoverability');
    (0, E.I2)();
    let O = (0, _.HI)({ location: I.R0.PERKS_DISCOVERABILITY }),
        P = r === I.R0.WHATS_NEW,
        v = (0, d.IY)(),
        L = (0, T.x$)();
    a.useEffect(() => {
        P && !b && (v(), L());
    }, [v, L, P, b]),
        a.useEffect(() => {
            let e = S.current;
            if (null == e || !b || !P) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), P && v();
            });
            return () => {
                cancelAnimationFrame(t), P && v();
            };
        }, [S, b, P, v]);
    let Z = (0, R.Op)(P),
        D = (0, u.Z)(),
        U = (0, R.mN)(),
        B = (0, R.sP)({
            perksCards: D,
            variant: r,
            shopMarketingVariation: x,
            isFullScreen: M,
            showTenureCard: null == h ? void 0 : h.showCard,
            tileOrderVariant: O,
            isPremiumSubscriber: U
        }),
        j = B.some((e) => null != e.pillText),
        [G, w] = a.useState(null),
        H = a.useRef(new l.qA());
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (null == D ? void 0 : null === (t = D.freeBoost) || void 0 === t ? void 0 : t.name) === u.u.FREE_BOOST &&
                (0, s.jsx)(l.O_, {
                    ref: w,
                    className: N.confettiCanvas,
                    environment: H.current
                }),
            (0, s.jsxs)('div', {
                ref: S,
                className: i()(
                    N.section,
                    {
                        [N.centerAlignSection]: !A,
                        [N.leftAlignSection]: A
                    },
                    n
                ),
                children: [
                    (0, s.jsx)(m, {
                        showAllPerksButton: f,
                        leftAlignHeaders: A,
                        title: Z.title,
                        headerClassname: p
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: i()(N.subtitle, {
                            [N.subtitle]: null == f || A,
                            [N.subtitleWithButton]: null != f && !A,
                            [N.fullWidth]: P || A,
                            [N.moreSubtitleMargin]: j,
                            [N.leftAlignSubtitle]: A,
                            [N.centerAlignSubtitle]: !A
                        }),
                        children: Z.subtitle
                    }),
                    !A &&
                        null != f &&
                        (0, s.jsx)('div', {
                            className: i()(N.showAllPerksButtonCenter),
                            children: f
                        }),
                    (0, s.jsx)('div', {
                        className: i()({
                            [N.cardContainer]: M,
                            [N.cardContainerNarrowWidth]: !M
                        }),
                        children: B.map((e, t) =>
                            (0, s.jsx)(
                                g.Z,
                                {
                                    confettiCanvas: e.name === u.u.FREE_BOOST ? G : void 0,
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
