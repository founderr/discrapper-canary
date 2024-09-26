n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(315263),
    c = n(100527),
    d = n(906732),
    _ = n(617136),
    E = n(497505),
    f = n(626135),
    h = n(291175),
    p = n(785717),
    m = n(221292),
    I = n(485341),
    T = n(797321),
    g = n(228168),
    S = n(981631),
    A = n(474936),
    v = n(689938),
    N = n(961653);
let O = (e) => {
    if (null != e)
        switch (e) {
            case A.VU.PREMIUM_TENURE_1_MONTH:
                return N.tieredTenureBadgeBronzeGlow;
            case A.VU.PREMIUM_TENURE_3_MONTH:
                return N.tieredTenureBadgeSilverGlow;
            case A.VU.PREMIUM_TENURE_6_MONTH:
                return N.tieredTenureBadgeGoldGlow;
            case A.VU.PREMIUM_TENURE_12_MONTH:
                return N.tieredTenureBadgePlatinumGlow;
            case A.VU.PREMIUM_TENURE_24_MONTH:
                return N.tieredTenureBadgeDiamondGlow;
            case A.VU.PREMIUM_TENURE_36_MONTH:
                return N.tieredTenureBadgeEmeraldGlow;
            case A.VU.PREMIUM_TENURE_60_MONTH:
                return N.tieredTenureBadgeRubyGlow;
            case A.VU.PREMIUM_TENURE_72_MONTH:
                return N.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function R(e) {
    let { badges: t, className: n, badgeClassName: r, onClose: o } = e,
        { analyticsLocations: A } = (0, d.ZP)(c.Z.BADGE),
        { context: R, trackUserProfileAction: C } = (0, p.KZ)(),
        [y, L] = a.useState(!1);
    return (0, i.jsx)('div', {
        className: s()(N.container, n),
        'aria-label': v.Z.Messages.PROFILE_USER_BADGES,
        role: 'group',
        children: t.map((e) => {
            let t = (t) => {
                    C({ action: 'PRESS_BADGE' }),
                        (0, m.NE)({
                            badge: e.id,
                            analyticsLocations: A,
                            ...R
                        });
                    let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: A }) : null;
                    if (null != n) return null == o || o(), n(t);
                },
                n = () => {
                    e.id === I.i && f.default.track(S.rMx.QUEST_CONTENT_VIEWED, { ...(0, _.mH)(E.jn.QUEST_BADGE) }),
                        C({ action: 'HOVER_BADGE' }),
                        (0, m.Qf)({
                            badge: e.id,
                            analyticsLocations: A,
                            ...R
                        });
                },
                a = (0, h.gn)(e.id),
                c = O(a),
                d = null != a && y;
            return (0, i.jsx)(
                l.TooltipContainer,
                {
                    text: e.description,
                    delay: g.vB,
                    tooltipClassName: c,
                    onTooltipShow: () => L(null != a),
                    onTooltipHide: () => L(!1),
                    children: (0, i.jsxs)(l.Anchor, {
                        onClick: t,
                        onMouseEnter: n,
                        href: e.link,
                        children: [
                            (0, i.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, g.jC)(e.icon),
                                className: s()(N.badge, r)
                            }),
                            d &&
                                (0, i.jsxs)('div', {
                                    className: N.starContainer,
                                    children: [(0, i.jsx)(T.Z, { className: N.topLeftStar }), (0, i.jsx)(T.Z, { className: N.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
