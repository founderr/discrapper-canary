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
    p = n(976465),
    _ = n(391110),
    h = n(75077),
    E = n(320319),
    x = n(173302);
let b = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: a } = e,
        s = (0, i.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != a ? a : x.heading,
            children: r
        });
    return null == t
        ? s
        : n
          ? (0, i.jsxs)('div', {
                className: x.sectionHeader,
                children: [
                    s,
                    null != t &&
                        (0, i.jsx)('div', {
                            className: x.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, i.jsx)('div', {
                className: x.container,
                children: (0, i.jsx)('div', {
                    className: x.sectionHeaderSeeAll,
                    children: s
                })
            });
};
t.Z = (e) => {
    var t, n;
    let { className: a, variant: C = _.R0.PERKS_DISCOVERABILITY, noBackground: v = !1, leftAlignHeaders: T = !1, showAllPerksButton: N, headerClassname: I, isFullScreen: S = !0 } = e,
        R = r.useRef(null),
        A = (0, g.yQ)(),
        j = (0, m.Ag)(A),
        P = (0, d.ZP)('perks-discoverability');
    (0, m.I2)();
    let O = (0, u.HI)({ location: _.R0.PERKS_DISCOVERABILITY }),
        Z = C === _.R0.WHATS_NEW,
        M = (0, g.IY)(),
        B = (0, p.x$)();
    r.useEffect(() => {
        Z && !j && (M(), B());
    }, [M, B, Z, j]),
        r.useEffect(() => {
            let e = R.current;
            if (null == e || !j || !Z) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), Z && M();
            });
            return () => {
                cancelAnimationFrame(t), Z && M();
            };
        }, [R, j, Z, M]);
    let w = (0, h.Op)(Z),
        y = (0, f.Z)(),
        L = (0, h.mN)(),
        { fractionalState: k } = (0, c.Z)(),
        U = (0, h.sP)({
            perksCards: y,
            variant: C,
            shopMarketingVariation: P,
            isFullScreen: S,
            showTenureCard: null == A ? void 0 : A.showCard,
            tileOrderVariant: O,
            isPremiumSubscriber: L,
            fractionalState: k
        }),
        D = U.some((e) => null != e.pillText),
        [G, H] = r.useState(null),
        V = r.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ((null == y ? void 0 : null === (t = y.freeBoost) || void 0 === t ? void 0 : t.name) === f.u.FREE_BOOST || (null == y ? void 0 : null === (n = y.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === f.u.TENURE_REWARD_COLLECTIBLE) &&
                (0, i.jsx)(l.O_, {
                    ref: H,
                    className: x.confettiCanvas,
                    environment: V.current
                }),
            (0, i.jsxs)('div', {
                ref: R,
                className: s()(
                    x.section,
                    {
                        [x.centerAlignSection]: !T,
                        [x.leftAlignSection]: T
                    },
                    a
                ),
                children: [
                    (0, i.jsx)(b, {
                        showAllPerksButton: N,
                        leftAlignHeaders: T,
                        title: w.title,
                        headerClassname: I
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: s()(x.subtitle, {
                            [x.subtitle]: null == N || T,
                            [x.subtitleWithButton]: null != N && !T,
                            [x.fullWidth]: Z || T,
                            [x.moreSubtitleMargin]: D,
                            [x.leftAlignSubtitle]: T,
                            [x.centerAlignSubtitle]: !T
                        }),
                        children: w.subtitle
                    }),
                    !T &&
                        null != N &&
                        (0, i.jsx)('div', {
                            className: s()(x.showAllPerksButtonCenter),
                            children: N
                        }),
                    (0, i.jsx)('div', {
                        className: s()({
                            [x.cardContainer]: S,
                            [x.cardContainerNarrowWidth]: !S
                        }),
                        children: U.map((e, t) =>
                            (0, i.jsx)(
                                E.Z,
                                {
                                    confettiCanvas: e.name === f.u.FREE_BOOST || e.name === f.u.TENURE_REWARD_COLLECTIBLE ? G : void 0,
                                    ...e,
                                    forceShadow: v
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
