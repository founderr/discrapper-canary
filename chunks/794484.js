n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(760578),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(314684),
    m = n(687362),
    g = n(32173),
    f = n(976465),
    p = n(391110),
    _ = n(75077),
    h = n(320319),
    E = n(761518);
let b = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: a } = e,
        s = (0, i.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != a ? a : E.heading,
            children: r
        });
    return null == t
        ? s
        : n
          ? (0, i.jsxs)('div', {
                className: E.sectionHeader,
                children: [
                    s,
                    null != t &&
                        (0, i.jsx)('div', {
                            className: E.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, i.jsx)('div', {
                className: E.container,
                children: (0, i.jsx)('div', {
                    className: E.sectionHeaderSeeAll,
                    children: s
                })
            });
};
t.Z = (e) => {
    var t, n;
    let { className: a, variant: x = p.R0.PERKS_DISCOVERABILITY, noBackground: C = !1, leftAlignHeaders: T = !1, showAllPerksButton: v, headerClassname: N, isFullScreen: I = !0 } = e,
        S = r.useRef(null),
        R = (0, u.yQ)(),
        j = (0, m.vi)(R),
        A = (0, d.ZP)('perks-discoverability'),
        P = x === p.R0.WHATS_NEW,
        Z = (0, u.IY)(),
        M = (0, f.x$)();
    r.useEffect(() => {
        P && !j && (Z(), M());
    }, [Z, M, P, j]),
        r.useEffect(() => {
            let e = S.current;
            if (null == e || !j || !P) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), P && Z();
            });
            return () => {
                cancelAnimationFrame(t), P && Z();
            };
        }, [S, j, P, Z]);
    let B = (0, _.Op)(P),
        O = (0, g.Z)(),
        w = (0, _.mN)(),
        { fractionalState: y } = (0, c.Z)(),
        k = (0, _.sP)({
            perksCards: O,
            variant: x,
            shopMarketingVariation: A,
            isFullScreen: I,
            showTenureCard: null == R ? void 0 : R.showCard,
            isPremiumSubscriber: w,
            fractionalState: y
        }),
        L = k.some((e) => null != e.pillText),
        [U, D] = r.useState(null),
        H = r.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ((null == O ? void 0 : null === (t = O.freeBoost) || void 0 === t ? void 0 : t.name) === g.u.FREE_BOOST || (null == O ? void 0 : null === (n = O.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === g.u.TENURE_REWARD_COLLECTIBLE) &&
                (0, i.jsx)(l.O_, {
                    ref: D,
                    className: E.confettiCanvas,
                    environment: H.current
                }),
            (0, i.jsxs)('div', {
                ref: S,
                className: s()(
                    E.section,
                    {
                        [E.centerAlignSection]: !T,
                        [E.leftAlignSection]: T
                    },
                    a
                ),
                children: [
                    (0, i.jsx)(b, {
                        showAllPerksButton: v,
                        leftAlignHeaders: T,
                        title: B.title,
                        headerClassname: N
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: s()(E.subtitle, {
                            [E.subtitle]: null == v || T,
                            [E.subtitleWithButton]: null != v && !T,
                            [E.fullWidth]: P || T,
                            [E.moreSubtitleMargin]: L,
                            [E.leftAlignSubtitle]: T,
                            [E.centerAlignSubtitle]: !T
                        }),
                        children: B.subtitle
                    }),
                    !T &&
                        null != v &&
                        (0, i.jsx)('div', {
                            className: s()(E.showAllPerksButtonCenter),
                            children: v
                        }),
                    (0, i.jsx)('div', {
                        className: s()({
                            [E.cardContainer]: I,
                            [E.cardContainerNarrowWidth]: !I
                        }),
                        children: k.map((e, t) =>
                            (0, i.jsx)(
                                h.Z,
                                {
                                    confettiCanvas: e.name === g.u.FREE_BOOST || e.name === g.u.TENURE_REWARD_COLLECTIBLE ? U : void 0,
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
