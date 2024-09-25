n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(780384),
    u = n(481060),
    c = n(2052),
    d = n(410030),
    _ = n(100527),
    E = n(906732),
    f = n(98278),
    h = n(197115),
    p = n(626135),
    m = n(74538),
    I = n(706667),
    T = n(409673),
    g = n(981631),
    S = n(474936),
    A = n(689938),
    v = n(383052),
    N = n(145834);
function O(e) {
    var t;
    let { onClose: r, closePopout: o, sound: O, channel: R } = e,
        C = (0, d.ZP)(),
        [y, b] = a.useState(!1),
        { location: L } = (0, c.O)(),
        D = a.useMemo(
            () => ({
                ...L,
                section: g.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [L]
        ),
        { analyticsLocations: M } = (0, E.ZP)(_.Z.PREMIUM_UPSELL),
        { previewSound: P } = (0, I.Z)(O, null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : null),
        U = (0, T.K_)({
            sound: O,
            previewSound: P,
            tooltipPosition: 'left'
        }),
        w = (0, l.ap)(C) ? n(537381) : n(341048);
    a.useEffect(() => {
        p.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
            type: S.cd.SOUND_PICKER_SOUND_CLICKED,
            is_external: !0,
            location: {
                ...D,
                object: g.qAy.SOUNDBOARD_SOUND
            },
            location_stack: M,
            sku_id: m.ZP.getSkuIdForPremiumType(S.p9.TIER_2)
        });
    }, [M, D]);
    let x = a.useCallback(() => {
        p.default.track(g.rMx.PREMIUM_PROMOTION_OPENED, { location_section: g.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL }), (0, f.z)(), o();
    }, [o]);
    return (0, i.jsxs)('div', {
        className: s()(N.premiumPromo, v.container),
        children: [
            (0, i.jsx)(u.Clickable, {
                className: N.premiumPromoClose,
                onClick: r,
                children: A.Z.Messages.CLOSE
            }),
            (0, i.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                className: s()(N.premiumPromoImage, N.premiumPromoImageSmaller, v.image),
                src: w
            }),
            (0, i.jsx)(u.Heading, {
                variant: 'heading-lg/normal',
                color: 'header-primary',
                className: N.premiumPromoTitle,
                children: A.Z.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
            }),
            (0, i.jsx)(u.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: N.premiumPromoDescription,
                children: A.Z.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({ onClick: x })
            }),
            (0, i.jsxs)('div', {
                className: v.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: v.previewButtonContainer,
                        children: U
                    }),
                    (0, i.jsx)(h.Z, {
                        subscriptionTier: S.Si.TIER_2,
                        submitting: y,
                        premiumModalAnalyticsLocation: {
                            section: g.jXE.SOUNDBOARD_SOUND_PICKER,
                            object: g.qAy.BUTTON_CTA
                        },
                        size: u.Button.Sizes.SMALL,
                        color: u.Button.Colors.GREEN,
                        onClick: () => {
                            b(!0);
                        },
                        onSubscribeModalClose: (e) => {
                            b(!1), e && r();
                        }
                    })
                ]
            })
        ]
    });
}
