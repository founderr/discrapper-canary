n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(442837),
    o = n(481060),
    s = n(230711),
    c = n(2052),
    d = n(906732),
    u = n(963249),
    m = n(594174),
    h = n(626135),
    f = n(74538),
    p = n(163684),
    g = n(748770),
    _ = n(474936),
    C = n(981631),
    E = n(388032),
    I = n(464780);
function x() {
    let e = (0, a.e7)([m.default], () => f.ZP.isPremiumExactly(m.default.getCurrentUser(), _.p9.TIER_2)),
        { enabled: t, getNitroCTA: n } = p.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: e
            }
        ),
        { location: x } = (0, c.O)(),
        { analyticsLocations: v } = (0, d.ZP)(),
        N = r.useCallback(() => {
            (0, u.Z)({
                subscriptionTier: f.ZP.getSkuIdForPremiumType(_.p9.TIER_2),
                analyticsLocations: v,
                analyticsObject: {
                    ...x,
                    object: C.qAy.BUTTON_CTA,
                    objectType: C.Qqv.TIER_2
                }
            });
        }, [v, x]),
        T = r.useCallback(() => {
            s.Z.open(C.oAB.INVENTORY), g.ZP.dismissOutboundPromotionNotice();
        }, []),
        S = r.useCallback(() => {
            h.default.track(C.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? N() : T();
        }, [n, N, T]);
    return (0, i.jsxs)(o.Notice, {
        color: o.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(o.NoticeCloseButton, {
                noticeType: C.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    g.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, i.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: I.premiumIcon
            }),
            t
                ? n
                    ? (0, i.jsxs)(l.xv, {
                          variant: 'text-sm/normal',
                          className: I.text,
                          children: [E.intl.string(E.t['5JMiOj']), ' ', E.intl.format(E.t.fjSvsL, { onClick: T })]
                      })
                    : E.intl.string(E.t['B3a/cH'])
                : E.intl.string(E.t['Pzh+Gx']),
            (0, i.jsx)(o.PrimaryCTANoticeButton, {
                noticeType: C.kVF.OUTBOUND_PROMOTION,
                onClick: S,
                children: n ? E.intl.string(E.t.pj0XBA) : E.intl.string(E.t.jVcuVV)
            })
        ]
    });
}
