n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(315263),
    u = n(100527),
    c = n(906732),
    d = n(617136),
    f = n(497505),
    _ = n(626135),
    p = n(291175),
    h = n(785717),
    m = n(221292),
    g = n(485341),
    E = n(797321),
    v = n(228168),
    I = n(981631),
    b = n(474936),
    S = n(388032),
    T = n(961653);
let y = (e) => {
    if (null != e)
        switch (e) {
            case b.VU.PREMIUM_TENURE_1_MONTH:
                return T.tieredTenureBadgeBronzeGlow;
            case b.VU.PREMIUM_TENURE_3_MONTH:
                return T.tieredTenureBadgeSilverGlow;
            case b.VU.PREMIUM_TENURE_6_MONTH:
                return T.tieredTenureBadgeGoldGlow;
            case b.VU.PREMIUM_TENURE_12_MONTH:
                return T.tieredTenureBadgePlatinumGlow;
            case b.VU.PREMIUM_TENURE_24_MONTH:
                return T.tieredTenureBadgeDiamondGlow;
            case b.VU.PREMIUM_TENURE_36_MONTH:
                return T.tieredTenureBadgeEmeraldGlow;
            case b.VU.PREMIUM_TENURE_60_MONTH:
                return T.tieredTenureBadgeRubyGlow;
            case b.VU.PREMIUM_TENURE_72_MONTH:
                return T.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function A(e) {
    let { badges: t, className: n, badgeClassName: a, onClose: b } = e,
        { analyticsLocations: A } = (0, c.ZP)(u.Z.BADGE),
        { context: N, trackUserProfileAction: C } = (0, h.KZ)(),
        [R, O] = i.useState(!1);
    return (0, r.jsx)('div', {
        className: s()(T.container, n),
        'aria-label': S.intl.string(S.t.VWV0y8),
        role: 'group',
        children: t.map((e) => {
            let t = (0, p.gn)(e.id),
                n = y(t),
                i = null != t && R;
            return (0, r.jsx)(
                o.TooltipContainer,
                {
                    text: e.description,
                    delay: v.vB,
                    tooltipClassName: n,
                    onTooltipShow: () => O(null != t),
                    onTooltipHide: () => O(!1),
                    children: (0, r.jsxs)(o.Anchor, {
                        onClick: (t) => {
                            C({ action: 'PRESS_BADGE' }),
                                (0, m.NE)({
                                    badge: e.id,
                                    analyticsLocations: A,
                                    ...N
                                });
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: A }) : null;
                            if (null != n) return null == b || b(), n(t);
                        },
                        onMouseEnter: () => {
                            e.id === g.i && _.default.track(I.rMx.QUEST_CONTENT_VIEWED, { ...(0, d.mH)(f.jn.QUEST_BADGE) }),
                                C({ action: 'HOVER_BADGE' }),
                                (0, m.Qf)({
                                    badge: e.id,
                                    analyticsLocations: A,
                                    ...N
                                });
                        },
                        href: e.link,
                        children: [
                            (0, r.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, v.jC)(e.icon),
                                className: s()(T.badge, a)
                            }),
                            i &&
                                (0, r.jsxs)('div', {
                                    className: T.starContainer,
                                    children: [(0, r.jsx)(E.Z, { className: T.topLeftStar }), (0, r.jsx)(E.Z, { className: T.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
