n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(703533),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(314684),
    g = n(565626),
    m = n(32173),
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
    let { className: a, variant: x = p.R0.PERKS_DISCOVERABILITY, noBackground: C = !1, leftAlignHeaders: v = !1, showAllPerksButton: T, headerClassname: N, isFullScreen: I = !0 } = e,
        S = r.useRef(null),
        R = (0, u.yQ)(),
        A = (0, g.Ag)(R),
        j = (0, d.ZP)('perks-discoverability');
    (0, g.I2)();
    let P = x === p.R0.WHATS_NEW,
        Z = (0, u.IY)(),
        B = (0, f.x$)();
    r.useEffect(() => {
        P && !A && (Z(), B());
    }, [Z, B, P, A]),
        r.useEffect(() => {
            let e = S.current;
            if (null == e || !A || !P) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), P && Z();
            });
            return () => {
                cancelAnimationFrame(t), P && Z();
            };
        }, [S, A, P, Z]);
    let M = (0, _.Op)(P),
        O = (0, m.Z)(),
        w = (0, _.mN)(),
        { fractionalState: y } = (0, c.Z)(),
        k = (0, _.sP)({
            perksCards: O,
            variant: x,
            shopMarketingVariation: j,
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
            ((null == O ? void 0 : null === (t = O.freeBoost) || void 0 === t ? void 0 : t.name) === m.u.FREE_BOOST || (null == O ? void 0 : null === (n = O.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === m.u.TENURE_REWARD_COLLECTIBLE) &&
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
                        [E.centerAlignSection]: !v,
                        [E.leftAlignSection]: v
                    },
                    a
                ),
                children: [
                    (0, i.jsx)(b, {
                        showAllPerksButton: T,
                        leftAlignHeaders: v,
                        title: M.title,
                        headerClassname: N
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: s()(E.subtitle, {
                            [E.subtitle]: null == T || v,
                            [E.subtitleWithButton]: null != T && !v,
                            [E.fullWidth]: P || v,
                            [E.moreSubtitleMargin]: L,
                            [E.leftAlignSubtitle]: v,
                            [E.centerAlignSubtitle]: !v
                        }),
                        children: M.subtitle
                    }),
                    !v &&
                        null != T &&
                        (0, i.jsx)('div', {
                            className: s()(E.showAllPerksButtonCenter),
                            children: T
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
                                    confettiCanvas: e.name === m.u.FREE_BOOST || e.name === m.u.TENURE_REWARD_COLLECTIBLE ? U : void 0,
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
