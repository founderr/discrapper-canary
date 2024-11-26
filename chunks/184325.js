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
    T = n(474936),
    b = n(388032),
    S = n(153225);
let y = (e) => {
    if (null != e)
        switch (e) {
            case T.VU.PREMIUM_TENURE_1_MONTH:
                return S.tieredTenureBadgeBronzeGlow;
            case T.VU.PREMIUM_TENURE_3_MONTH:
                return S.tieredTenureBadgeSilverGlow;
            case T.VU.PREMIUM_TENURE_6_MONTH:
                return S.tieredTenureBadgeGoldGlow;
            case T.VU.PREMIUM_TENURE_12_MONTH:
                return S.tieredTenureBadgePlatinumGlow;
            case T.VU.PREMIUM_TENURE_24_MONTH:
                return S.tieredTenureBadgeDiamondGlow;
            case T.VU.PREMIUM_TENURE_36_MONTH:
                return S.tieredTenureBadgeEmeraldGlow;
            case T.VU.PREMIUM_TENURE_60_MONTH:
                return S.tieredTenureBadgeRubyGlow;
            case T.VU.PREMIUM_TENURE_72_MONTH:
                return S.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function A(e) {
    let { badges: t, className: n, badgeClassName: a, onClose: T } = e,
        { analyticsLocations: A } = (0, c.ZP)(u.Z.BADGE),
        { context: N, trackUserProfileAction: C } = (0, h.KZ)(),
        [R, O] = i.useState(!1);
    return (0, r.jsx)('div', {
        className: s()(S.container, n),
        'aria-label': b.intl.string(b.t.VWV0y8),
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
                            if (null != n) return null == T || T(), n(t);
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
                                className: s()(S.badge, a)
                            }),
                            i &&
                                (0, r.jsxs)('div', {
                                    className: S.starContainer,
                                    children: [(0, r.jsx)(E.Z, { className: S.topLeftStar }), (0, r.jsx)(E.Z, { className: S.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
