n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(793030),
    r = n(442837),
    l = n(481060),
    o = n(230711),
    c = n(2052),
    u = n(906732),
    d = n(963249),
    _ = n(594174),
    E = n(626135),
    I = n(74538),
    m = n(163684),
    T = n(748770),
    f = n(474936),
    h = n(981631),
    N = n(689938),
    p = n(464780);
function C() {
    let e = (0, r.e7)([_.default], () => I.ZP.isPremiumExactly(_.default.getCurrentUser(), f.p9.TIER_2)),
        { enabled: t, getNitroCTA: n } = m.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: e
            }
        ),
        { location: C } = (0, c.O)(),
        { analyticsLocations: g } = (0, u.ZP)(),
        S = a.useCallback(() => {
            (0, d.Z)({
                subscriptionTier: I.ZP.getSkuIdForPremiumType(f.p9.TIER_2),
                analyticsLocations: g,
                analyticsObject: {
                    ...C,
                    object: h.qAy.BUTTON_CTA,
                    objectType: h.Qqv.TIER_2
                }
            });
        }, [g, C]),
        A = a.useCallback(() => {
            o.Z.open(h.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
        }, []),
        x = a.useCallback(() => {
            E.default.track(h.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? S() : A();
        }, [n, S, A]);
    return (0, i.jsxs)(l.Notice, {
        color: l.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(l.NoticeCloseButton, {
                noticeType: h.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    T.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, i.jsx)(l.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: p.premiumIcon
            }),
            t
                ? n
                    ? (0, i.jsxs)(s.xv, {
                          variant: 'text-sm/normal',
                          className: p.text,
                          children: [N.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2, ' ', N.Z.Messages.LEARN_MORE_CLICK.format({ onClick: A })]
                      })
                    : N.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE
                : N.Z.Messages.OUTBOUND_PROMOTION_NOTICE,
            (0, i.jsx)(l.PrimaryCTANoticeButton, {
                noticeType: h.kVF.OUTBOUND_PROMOTION,
                onClick: x,
                children: n ? N.Z.Messages.PREMIUM_UPSELL_GET_NITRO : N.Z.Messages.TAKE_ME_THERE
            })
        ]
    });
}
