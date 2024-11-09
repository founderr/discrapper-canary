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
    h = n(197115),
    p = n(626135),
    m = n(74538),
    g = n(706667),
    E = n(409673),
    v = n(981631),
    I = n(474936),
    S = n(388032),
    T = n(383052),
    b = n(145834);
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
        p.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
            type: I.cd.SOUND_PICKER_SOUND_CLICKED,
            is_external: !0,
            location: {
                ...L,
                object: v.qAy.SOUNDBOARD_SOUND
            },
            location_stack: x,
            sku_id: m.ZP.getSkuIdForPremiumType(I.p9.TIER_2)
        });
    }, [x, L]);
    let k = i.useCallback(() => {
        p.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, { location_section: v.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL }), (0, _.z)(), y();
    }, [y]);
    return (0, r.jsxs)('div', {
        className: s()(b.premiumPromo, T.container),
        children: [
            (0, r.jsx)(l.Clickable, {
                className: b.premiumPromoClose,
                onClick: a,
                children: S.intl.string(S.t.cpT0Cg)
            }),
            (0, r.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                className: s()(b.premiumPromoImage, b.premiumPromoImageSmaller, T.image),
                src: P
            }),
            (0, r.jsx)(l.Heading, {
                variant: 'heading-lg/normal',
                color: 'header-primary',
                className: b.premiumPromoTitle,
                children: S.intl.string(S.t['/a5qY2'])
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: b.premiumPromoDescription,
                children: S.intl.format(S.t.lcSxhI, { onClick: k })
            }),
            (0, r.jsxs)('div', {
                className: T.buttonContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: T.previewButtonContainer,
                        children: M
                    }),
                    (0, r.jsx)(h.Z, {
                        subscriptionTier: I.Si.TIER_2,
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
