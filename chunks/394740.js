n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(2052),
    c = n(410030),
    d = n(100527),
    f = n(906732),
    _ = n(98278),
    p = n(197115),
    h = n(626135),
    m = n(74538),
    g = n(706667),
    E = n(409673),
    v = n(981631),
    b = n(474936),
    I = n(388032),
    S = n(113065),
    T = n(368308);
function y(e) {
    var t;
    let { onClose: a, closePopout: y, sound: A, channel: N } = e,
        C = (0, c.ZP)(),
        [R, O] = i.useState(!1),
        { location: D } = (0, u.O)(),
        L = i.useMemo(
            () => ({
                ...D,
                section: v.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [D]
        ),
        { analyticsLocations: x } = (0, f.ZP)(d.Z.PREMIUM_UPSELL),
        { previewSound: w } = (0, g.Z)(A, null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : null),
        M = (0, E.K_)({
            sound: A,
            previewSound: w,
            tooltipPosition: 'left'
        }),
        P = (0, o.ap)(C) ? n(537381) : n(341048);
    i.useEffect(() => {
        h.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
            type: b.cd.SOUND_PICKER_SOUND_CLICKED,
            is_external: !0,
            location: {
                ...L,
                object: v.qAy.SOUNDBOARD_SOUND
            },
            location_stack: x,
            sku_id: m.ZP.getSkuIdForPremiumType(b.p9.TIER_2)
        });
    }, [x, L]);
    let k = i.useCallback(() => {
        h.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, { location_section: v.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL }), (0, _.z)(), y();
    }, [y]);
    return (0, r.jsxs)('div', {
        className: s()(T.premiumPromo, S.container),
        children: [
            (0, r.jsx)(l.Clickable, {
                className: T.premiumPromoClose,
                onClick: a,
                children: I.intl.string(I.t.cpT0Cg)
            }),
            (0, r.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                className: s()(T.premiumPromoImage, T.premiumPromoImageSmaller, S.image),
                src: P
            }),
            (0, r.jsx)(l.Heading, {
                variant: 'heading-lg/normal',
                color: 'header-primary',
                className: T.premiumPromoTitle,
                children: I.intl.string(I.t['/a5qY2'])
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: T.premiumPromoDescription,
                children: I.intl.format(I.t.lcSxhI, { onClick: k })
            }),
            (0, r.jsxs)('div', {
                className: S.buttonContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: S.previewButtonContainer,
                        children: M
                    }),
                    (0, r.jsx)(p.Z, {
                        subscriptionTier: b.Si.TIER_2,
                        submitting: R,
                        premiumModalAnalyticsLocation: {
                            section: v.jXE.SOUNDBOARD_SOUND_PICKER,
                            object: v.qAy.BUTTON_CTA
                        },
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.GREEN,
                        onClick: () => {
                            O(!0);
                        },
                        onSubscribeModalClose: (e) => {
                            O(!1), e && a();
                        }
                    })
                ]
            })
        ]
    });
}
