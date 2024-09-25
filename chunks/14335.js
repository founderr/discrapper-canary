n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(230711),
    u = n(2052),
    c = n(906732),
    d = n(963249),
    _ = n(594174),
    E = n(626135),
    f = n(74538),
    h = n(163684),
    p = n(748770),
    m = n(474936),
    I = n(981631),
    T = n(689938),
    g = n(464780);
function S() {
    let e = (0, o.e7)([_.default], () => f.ZP.isPremiumExactly(_.default.getCurrentUser(), m.p9.TIER_2)),
        { enabled: t, getNitroCTA: n } = h.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: e
            }
        ),
        { location: S } = (0, u.O)(),
        { analyticsLocations: A } = (0, c.ZP)(),
        v = i.useCallback(() => {
            (0, d.Z)({
                subscriptionTier: f.ZP.getSkuIdForPremiumType(m.p9.TIER_2),
                analyticsLocations: A,
                analyticsObject: {
                    ...S,
                    object: I.qAy.BUTTON_CTA,
                    objectType: I.Qqv.TIER_2
                }
            });
        }, [A, S]),
        N = i.useCallback(() => {
            l.Z.open(I.oAB.INVENTORY), p.ZP.dismissOutboundPromotionNotice();
        }, []),
        O = i.useCallback(() => {
            E.default.track(I.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? v() : N();
        }, [n, v, N]);
    return (0, r.jsxs)(s.Notice, {
        color: s.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, r.jsx)(s.NoticeCloseButton, {
                noticeType: I.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    p.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, r.jsx)(s.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: g.premiumIcon
            }),
            t
                ? n
                    ? (0, r.jsxs)(a.xv, {
                          variant: 'text-sm/normal',
                          className: g.text,
                          children: [T.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2, ' ', T.Z.Messages.LEARN_MORE_CLICK.format({ onClick: N })]
                      })
                    : T.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE
                : T.Z.Messages.OUTBOUND_PROMOTION_NOTICE,
            (0, r.jsx)(s.PrimaryCTANoticeButton, {
                noticeType: I.kVF.OUTBOUND_PROMOTION,
                onClick: O,
                children: n ? T.Z.Messages.PREMIUM_UPSELL_GET_NITRO : T.Z.Messages.TAKE_ME_THERE
            })
        ]
    });
}
