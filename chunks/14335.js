n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(793030),
    l = n(442837),
    r = n(481060),
    o = n(230711),
    c = n(2052),
    d = n(906732),
    u = n(963249),
    _ = n(594174),
    E = n(626135),
    I = n(74538),
    m = n(163684),
    T = n(748770),
    N = n(474936),
    h = n(981631),
    C = n(689938),
    f = n(464780);
function p() {
    let e = (0, l.e7)([_.default], () => I.ZP.isPremiumExactly(_.default.getCurrentUser(), N.p9.TIER_2)),
        { enabled: t, getNitroCTA: n } = m.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: e
            }
        ),
        { location: p } = (0, c.O)(),
        { analyticsLocations: g } = (0, d.ZP)(),
        A = a.useCallback(() => {
            (0, u.Z)({
                subscriptionTier: I.ZP.getSkuIdForPremiumType(N.p9.TIER_2),
                analyticsLocations: g,
                analyticsObject: {
                    ...p,
                    object: h.qAy.BUTTON_CTA,
                    objectType: h.Qqv.TIER_2
                }
            });
        }, [g, p]),
        S = a.useCallback(() => {
            o.Z.open(h.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
        }, []),
        M = a.useCallback(() => {
            E.default.track(h.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? A() : S();
        }, [n, A, S]);
    return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(r.NoticeCloseButton, {
                noticeType: h.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    T.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, i.jsx)(r.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: f.premiumIcon
            }),
            t
                ? n
                    ? (0, i.jsxs)(s.xv, {
                          variant: 'text-sm/normal',
                          className: f.text,
                          children: [C.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2, ' ', C.Z.Messages.LEARN_MORE_CLICK.format({ onClick: S })]
                      })
                    : C.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE
                : C.Z.Messages.OUTBOUND_PROMOTION_NOTICE,
            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                noticeType: h.kVF.OUTBOUND_PROMOTION,
                onClick: M,
                children: n ? C.Z.Messages.PREMIUM_UPSELL_GET_NITRO : C.Z.Messages.TAKE_ME_THERE
            })
        ]
    });
}
