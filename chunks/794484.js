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
    T = n(391110),
    I = n(75077),
    R = n(320319),
    g = n(126274);
let C = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: a, headerClassname: r } = e,
        i = (0, s.jsx)(o.Heading, {
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
    let { className: n, variant: r = T.R0.PERKS_DISCOVERABILITY, noBackground: N = !1, leftAlignHeaders: m = !1, showAllPerksButton: p, headerClassname: A, isFullScreen: f = !0 } = e,
        S = a.useRef(null),
        h = (0, _.yQ)(),
        M = (0, u.Ag)(h),
        x = (0, c.ZP)('perks-discoverability');
    (0, u.I2)();
    let O = (0, d.HI)({ location: T.R0.PERKS_DISCOVERABILITY }),
        b = r === T.R0.WHATS_NEW,
        P = (0, _.IY)();
    a.useEffect(() => {
        b && !M && P();
    }, [P, b, M]),
        a.useEffect(() => {
            let e = S.current;
            if (null == e || !M || !b) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), b && P();
            });
            return () => {
                cancelAnimationFrame(t), b && P();
            };
        }, [S, M, b, P]);
    let v = (0, I.Op)(b),
        L = (0, E.Z)(),
        Z = (0, I.mN)(),
        D = (0, I.sP)({
            perksCards: L,
            variant: r,
            shopMarketingVariation: x,
            isFullScreen: f,
            showTenureCard: null == h ? void 0 : h.showCard,
            tileOrderVariant: O,
            isPremiumSubscriber: Z
        }),
        U = D.some((e) => null != e.pillText),
        [B, j] = a.useState(null),
        G = a.useRef(new l.qA());
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (null == L ? void 0 : null === (t = L.freeBoost) || void 0 === t ? void 0 : t.name) === E.u.FREE_BOOST &&
                (0, s.jsx)(l.O_, {
                    ref: j,
                    className: g.confettiCanvas,
                    environment: G.current
                }),
            (0, s.jsxs)('div', {
                ref: S,
                className: i()(
                    g.section,
                    {
                        [g.centerAlignSection]: !m,
                        [g.leftAlignSection]: m
                    },
                    n
                ),
                children: [
                    (0, s.jsx)(C, {
                        showAllPerksButton: p,
                        leftAlignHeaders: m,
                        title: v.title,
                        headerClassname: A
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: i()(g.subtitle, {
                            [g.subtitle]: null == p || m,
                            [g.subtitleWithButton]: null != p && !m,
                            [g.fullWidth]: b || m,
                            [g.moreSubtitleMargin]: U,
                            [g.leftAlignSubtitle]: m,
                            [g.centerAlignSubtitle]: !m
                        }),
                        children: v.subtitle
                    }),
                    !m &&
                        null != p &&
                        (0, s.jsx)('div', {
                            className: i()(g.showAllPerksButtonCenter),
                            children: p
                        }),
                    (0, s.jsx)('div', {
                        className: i()({
                            [g.cardContainer]: f,
                            [g.cardContainerNarrowWidth]: !f
                        }),
                        children: D.map((e, t) =>
                            (0, s.jsx)(
                                R.Z,
                                {
                                    confettiCanvas: e.name === E.u.FREE_BOOST ? B : void 0,
                                    ...e,
                                    forceShadow: N
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
