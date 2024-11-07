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
    h = n(291175),
    p = n(785717),
    m = n(221292),
    g = n(485341),
    E = n(797321),
    v = n(228168),
    I = n(981631),
    S = n(474936),
    T = n(388032),
    b = n(704938);
let y = (e) => {
    if (null != e)
        switch (e) {
            case S.VU.PREMIUM_TENURE_1_MONTH:
                return b.tieredTenureBadgeBronzeGlow;
            case S.VU.PREMIUM_TENURE_3_MONTH:
                return b.tieredTenureBadgeSilverGlow;
            case S.VU.PREMIUM_TENURE_6_MONTH:
                return b.tieredTenureBadgeGoldGlow;
            case S.VU.PREMIUM_TENURE_12_MONTH:
                return b.tieredTenureBadgePlatinumGlow;
            case S.VU.PREMIUM_TENURE_24_MONTH:
                return b.tieredTenureBadgeDiamondGlow;
            case S.VU.PREMIUM_TENURE_36_MONTH:
                return b.tieredTenureBadgeEmeraldGlow;
            case S.VU.PREMIUM_TENURE_60_MONTH:
                return b.tieredTenureBadgeRubyGlow;
            case S.VU.PREMIUM_TENURE_72_MONTH:
                return b.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function A(e) {
    let { badges: t, className: n, badgeClassName: a, onClose: S } = e,
        { analyticsLocations: A } = (0, c.ZP)(u.Z.BADGE),
        { context: N, trackUserProfileAction: C } = (0, p.KZ)(),
        [R, O] = i.useState(!1);
    return (0, r.jsx)('div', {
        className: s()(b.container, n),
        'aria-label': T.intl.string(T.t.VWV0y8),
        role: 'group',
        children: t.map((e) => {
            let t = (0, h.gn)(e.id),
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
                            if (null != n) return null == S || S(), n(t);
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
                                className: s()(b.badge, a)
                            }),
                            i &&
                                (0, r.jsxs)('div', {
                                    className: b.starContainer,
                                    children: [(0, r.jsx)(E.Z, { className: b.topLeftStar }), (0, r.jsx)(E.Z, { className: b.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
