n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(703533),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(915296),
    g = n(314684),
    m = n(565626),
    f = n(32173),
    _ = n(976465),
    p = n(391110),
    h = n(75077),
    E = n(320319),
    b = n(173302);
let x = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: a } = e,
        s = (0, i.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != a ? a : b.heading,
            children: r
        });
    return null == t
        ? s
        : n
          ? (0, i.jsxs)('div', {
                className: b.sectionHeader,
                children: [
                    s,
                    null != t &&
                        (0, i.jsx)('div', {
                            className: b.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, i.jsx)('div', {
                className: b.container,
                children: (0, i.jsx)('div', {
                    className: b.sectionHeaderSeeAll,
                    children: s
                })
            });
};
t.Z = (e) => {
    var t, n;
    let { className: a, variant: C = p.R0.PERKS_DISCOVERABILITY, noBackground: T = !1, leftAlignHeaders: v = !1, showAllPerksButton: N, headerClassname: I, isFullScreen: S = !0 } = e,
        R = r.useRef(null),
        A = (0, g.yQ)(),
        j = (0, m.Ag)(A),
        P = (0, d.ZP)('perks-discoverability');
    (0, m.I2)();
    let Z = (0, u.HI)({ location: p.R0.PERKS_DISCOVERABILITY }),
        O = C === p.R0.WHATS_NEW,
        M = (0, g.IY)(),
        B = (0, _.x$)();
    r.useEffect(() => {
        O && !j && (M(), B());
    }, [M, B, O, j]),
        r.useEffect(() => {
            let e = R.current;
            if (null == e || !j || !O) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), O && M();
            });
            return () => {
                cancelAnimationFrame(t), O && M();
            };
        }, [R, j, O, M]);
    let w = (0, h.Op)(O),
        y = (0, f.Z)(),
        k = (0, h.mN)(),
        { fractionalState: L } = (0, c.Z)(),
        U = (0, h.sP)({
            perksCards: y,
            variant: C,
            shopMarketingVariation: P,
            isFullScreen: S,
            showTenureCard: null == A ? void 0 : A.showCard,
            tileOrderVariant: Z,
            isPremiumSubscriber: k,
            fractionalState: L
        }),
        D = U.some((e) => null != e.pillText),
        [G, H] = r.useState(null),
        V = r.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ((null == y ? void 0 : null === (t = y.freeBoost) || void 0 === t ? void 0 : t.name) === f.u.FREE_BOOST || (null == y ? void 0 : null === (n = y.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === f.u.TENURE_REWARD_COLLECTIBLE) &&
                (0, i.jsx)(l.O_, {
                    ref: H,
                    className: b.confettiCanvas,
                    environment: V.current
                }),
            (0, i.jsxs)('div', {
                ref: R,
                className: s()(
                    b.section,
                    {
                        [b.centerAlignSection]: !v,
                        [b.leftAlignSection]: v
                    },
                    a
                ),
                children: [
                    (0, i.jsx)(x, {
                        showAllPerksButton: N,
                        leftAlignHeaders: v,
                        title: w.title,
                        headerClassname: I
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: s()(b.subtitle, {
                            [b.subtitle]: null == N || v,
                            [b.subtitleWithButton]: null != N && !v,
                            [b.fullWidth]: O || v,
                            [b.moreSubtitleMargin]: D,
                            [b.leftAlignSubtitle]: v,
                            [b.centerAlignSubtitle]: !v
                        }),
                        children: w.subtitle
                    }),
                    !v &&
                        null != N &&
                        (0, i.jsx)('div', {
                            className: s()(b.showAllPerksButtonCenter),
                            children: N
                        }),
                    (0, i.jsx)('div', {
                        className: s()({
                            [b.cardContainer]: S,
                            [b.cardContainerNarrowWidth]: !S
                        }),
                        children: U.map((e, t) =>
                            (0, i.jsx)(
                                E.Z,
                                {
                                    confettiCanvas: e.name === f.u.FREE_BOOST || e.name === f.u.TENURE_REWARD_COLLECTIBLE ? G : void 0,
                                    ...e,
                                    forceShadow: T
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
