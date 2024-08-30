n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    _ = n(678558),
    E = n(626135),
    f = n(74538),
    h = n(357355),
    p = n(104494),
    I = n(639119),
    m = n(165583),
    T = n(197115),
    g = n(302945),
    S = n(631771),
    A = n(474936),
    N = n(981631),
    O = n(689938),
    R = n(876298),
    v = n(769860);
function C(e) {
    var t, n, a;
    let { title: C, type: y, guildBoostProps: L, analyticsSource: D, analyticsLocation: b, body: M, context: P, glowUp: U, modalClassName: w, artContainerClassName: x, headerClassName: G, bodyClassName: k, transitionState: B, onClose: F, onSubscribeClick: V, onSecondaryClick: H, secondaryCTA: Z, subscribeButtonText: Y, showNewBadge: j = !1, showBetaBadge: W = !1, enableArtBoxShadow: K = !0, subscriptionTier: z = A.Si.TIER_2, isLoading: q = !1, hideBackButton: Q, backButtonText: X, showEnhancedUpsell: $, useSubscribeButtonGradient: J, subscribeButtonClassname: ee, hidePremiumOfferUpsell: et, children: en, ...er } = e,
        ei = null != L,
        ea = (0, I.N)(),
        es = (0, p.Ng)(),
        eo = !et && ((null == ea ? void 0 : null === (t = ea.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === z || (0, p.Wp)(es, z)) && !ei,
        { analyticsLocations: el } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !q &&
            (ei
                ? E.default.track(N.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(y, ' - Tier ').concat(L.boostedGuildTier),
                      guild_id: L.guild.id,
                      channel_id: L.channelId,
                      location: b,
                      location_stack: el
                  })
                : E.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: y,
                      source: D,
                      location: b,
                      location_stack: el,
                      sku_id: (0, f.Wz)(z)
                  }));
    }, [ei, z, q]);
    let eu = (0, o.e7)([h.Z], () => h.Z.affinities),
        ec = eu.length > 1 && (0, S.YN)(y),
        ed = (0, o.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !ed && u.MH();
    }, [ed]);
    let e_ = K ? s()(R.artContainer, R.artContainerBoxShadow, x) : s()(R.artContainer, x),
        eE = null;
    return (
        (eE =
            'artURL' in er
                ? (0, r.jsx)('img', {
                      className: R.art,
                      alt: '',
                      src: er.artURL
                  })
                : er.artElement),
        (0, r.jsxs)(l.ModalRoot, {
            className: s()(R.root, w),
            'aria-label': C,
            transitionState: B,
            children: [
                W
                    ? (0, r.jsx)(l.Text, {
                          variant: 'text-xs/semibold',
                          className: R.betaBadge,
                          children: O.Z.Messages.BETA
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: e_,
                    children: [
                        eE,
                        j
                            ? (0, r.jsx)('img', {
                                  className: R.sparkleBadge,
                                  alt: '',
                                  src: v
                              })
                            : null
                    ]
                }),
                $
                    ? (0, r.jsx)(l.ModalCloseButton, {
                          onClick: F,
                          className: R.closeButton
                      })
                    : null,
                (0, r.jsx)(l.ModalContent, {
                    scrollbarType: 'none',
                    className: $ ? R.enhancedContent : R.content,
                    children: q
                        ? (0, r.jsx)(l.Spinner, {})
                        : (0, r.jsx)(r.Fragment, {
                              children: eo
                                  ? (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(m.ZP, {
                                            onClose: F,
                                            type: y,
                                            subscriptionTier: null !== (a = null == ea ? void 0 : null === (n = ea.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : A.Si.TIER_2,
                                            headingText: C,
                                            context: P,
                                            analyticsLocationObject: b,
                                            discountOffer: es,
                                            trialOffer: ea,
                                            children: U
                                        })
                                    })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.Heading, {
                                                className: s()(R.header, { [R.enhancedHeader]: $ }, G),
                                                variant: 'heading-xl/bold',
                                                children: C
                                            }),
                                            ec ? (0, r.jsx)(g.Z, { affinities: eu }) : void 0,
                                            en,
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-md/normal',
                                                className: s()(k, R.subHeader),
                                                children: M
                                            })
                                        ]
                                    })
                          })
                }),
                (0, r.jsxs)(l.ModalFooter, {
                    className: s()(R.footer, { [R.enhancedFooter]: $ }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(R.primaryActions, { [R.enhancedPrimaryActions]: $ }),
                            children: [
                                null != Z
                                    ? (0, r.jsx)(l.Button, {
                                          className: s()(R.secondaryAction, { [R.enhancedSecondaryAction]: $ }),
                                          onClick: H,
                                          size: l.Button.Sizes.SMALL,
                                          color: $ ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                          look: l.Button.Looks.LINK,
                                          children: Z
                                      })
                                    : null,
                                (() => {
                                    if (ei)
                                        return (0, r.jsx)(_.Z, {
                                            analyticsLocation: b,
                                            guild: L.guild,
                                            onClose: F
                                        });
                                    let e = $ ? O.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                    if (eo) {
                                        if (null != ea) {
                                            var t, n;
                                            e = (0, f.Rt)({
                                                intervalType: null == ea ? void 0 : null === (t = ea.subscription_trial) || void 0 === t ? void 0 : t.interval,
                                                intervalCount: null == ea ? void 0 : null === (n = ea.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                            });
                                        } else null != es && (e = O.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: es.discount.amount }));
                                    }
                                    return (0, r.jsx)(T.Z, {
                                        className: ee,
                                        showGradient: $ || J,
                                        premiumModalAnalyticsLocation: b,
                                        subscriptionTier: z,
                                        size: l.Button.Sizes.SMALL,
                                        color: $ || J ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                                        onClick: () => {
                                            null == V || V(), F();
                                        },
                                        buttonText: null != Y ? Y : e
                                    });
                                })()
                            ]
                        }),
                        !Q &&
                            !$ &&
                            (0, r.jsx)(l.Button, {
                                onClick: F,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: null != X ? X : O.Z.Messages.BACK
                            })
                    ]
                })
            ]
        })
    );
}
