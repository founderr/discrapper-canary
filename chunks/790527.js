n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    f = n(678558),
    _ = n(626135),
    p = n(74538),
    h = n(357355),
    m = n(104494),
    g = n(639119),
    E = n(165583),
    v = n(197115),
    b = n(302945),
    I = n(631771),
    T = n(474936),
    S = n(981631),
    y = n(388032),
    A = n(569548),
    N = n(769860);
function C(e) {
    var t, n, a;
    let { title: C, type: R, guildBoostProps: O, analyticsSource: D, analyticsLocation: L, body: x, context: w, glowUp: M, modalClassName: P, modalContentClassName: k, artContainerClassName: U, headerClassName: G, bodyClassName: B, transitionState: Z, onClose: F, onSubscribeClick: V, onSubscribeFinish: j, onSecondaryClick: H, secondaryCTA: Y, subscribeButtonText: W, showNewBadge: K = !1, enableArtBoxShadow: z = !0, subscriptionTier: q = T.Si.TIER_2, isLoading: Q = !1, hideBackButton: X, backButtonText: J, showEnhancedUpsell: $, useSubscribeButtonGradient: ee, subscribeButtonClassname: et, hidePremiumOfferUpsell: en, children: er, LeadingComponent: ei, ...ea } = e,
        es = null != O,
        eo = (0, g.N)(),
        el = (0, m.Ng)(),
        eu = !en && ((null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === q || (0, m.Wp)(el, q)) && !es,
        { analyticsLocations: ec } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !Q &&
            (es
                ? _.default.track(S.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(R, ' - Tier ').concat(O.boostedGuildTier),
                      guild_id: O.guild.id,
                      channel_id: O.channelId,
                      location: L,
                      location_stack: ec
                  })
                : _.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: R,
                      source: D,
                      location: L,
                      location_stack: ec,
                      sku_id: (0, p.Wz)(q)
                  }));
    }, [es, q, Q]);
    let ed = (0, o.e7)([h.Z], () => h.Z.affinities),
        ef = ed.length > 1 && (0, I.YN)(R),
        e_ = (0, o.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !e_ && u.MH();
    }, [e_]);
    let ep = z ? s()(A.artContainer, A.artContainerBoxShadow, U) : s()(A.artContainer, U),
        eh = null;
    return (
        null != ea.artURL
            ? (eh = (0, r.jsx)('img', {
                  className: A.art,
                  alt: '',
                  src: ea.artURL
              }))
            : null != ea.artElement && (eh = ea.artElement),
        (0, r.jsxs)(l.ModalRoot, {
            className: s()(A.root, !eu && P),
            'aria-label': C,
            transitionState: Z,
            children: [
                null != eh &&
                    (0, r.jsxs)('div', {
                        className: ep,
                        children: [
                            eh,
                            K
                                ? (0, r.jsx)('img', {
                                      className: A.sparkleBadge,
                                      alt: '',
                                      src: N
                                  })
                                : null
                        ]
                    }),
                (0, r.jsx)(l.ModalContent, {
                    scrollbarType: 'none',
                    className: s()($ ? A.enhancedContent : A.content, !eu && k),
                    children: Q
                        ? (0, r.jsx)(l.Spinner, {})
                        : (0, r.jsx)(r.Fragment, {
                              children: eu
                                  ? (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(E.ZP, {
                                            onClose: F,
                                            type: R,
                                            subscriptionTier: null !== (a = null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : T.Si.TIER_2,
                                            headingText: C,
                                            context: w,
                                            analyticsLocationObject: L,
                                            discountOffer: el,
                                            trialOffer: eo,
                                            children: M
                                        })
                                    })
                                  : (0, r.jsxs)('div', {
                                        className: A.contentContainer,
                                        children: [
                                            ei,
                                            (0, r.jsxs)('div', {
                                                className: A.bodyContent,
                                                children: [
                                                    (0, r.jsx)(l.Heading, {
                                                        className: s()(A.header, { [A.enhancedHeader]: $ }, G),
                                                        variant: 'heading-xl/bold',
                                                        children: C
                                                    }),
                                                    ef ? (0, r.jsx)(b.Z, { affinities: ed }) : void 0,
                                                    er,
                                                    (0, r.jsx)(l.Text, {
                                                        variant: 'text-md/normal',
                                                        className: s()(B, A.subHeader),
                                                        children: x
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                          })
                }),
                (0, r.jsxs)(l.ModalFooter, {
                    className: s()(A.footer, { [A.enhancedFooter]: $ }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(A.primaryActions, { [A.enhancedPrimaryActions]: $ }),
                            children: [
                                null != Y
                                    ? (0, r.jsx)(l.Button, {
                                          className: s()(A.secondaryAction, { [A.enhancedSecondaryAction]: $ }),
                                          onClick: H,
                                          size: l.Button.Sizes.SMALL,
                                          color: $ ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                          look: l.Button.Looks.LINK,
                                          children: Y
                                      })
                                    : null,
                                (() => {
                                    if (es)
                                        return (0, r.jsx)(f.Z, {
                                            analyticsLocation: L,
                                            guild: O.guild,
                                            onClose: F
                                        });
                                    let e = $ ? y.intl.string(y.t.pj0XBA) : void 0;
                                    if (eu) {
                                        if (null != eo) {
                                            var t, n;
                                            e = (0, p.Rt)({
                                                intervalType: null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.interval,
                                                intervalCount: null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                            });
                                        } else null != el && (e = y.intl.formatToPlainString(y.t.bkQ4bG, { percent: el.discount.amount }));
                                    }
                                    return (0, r.jsx)(v.Z, {
                                        className: et,
                                        showGradient: $ || ee,
                                        premiumModalAnalyticsLocation: L,
                                        subscriptionTier: q,
                                        size: l.Button.Sizes.SMALL,
                                        color: $ || ee ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                                        onClick: () => {
                                            null == V || V(), F();
                                        },
                                        onSubscribeModalClose: j,
                                        buttonText: null != W ? W : e
                                    });
                                })()
                            ]
                        }),
                        !X &&
                            !$ &&
                            (0, r.jsx)(l.Button, {
                                onClick: F,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: null != J ? J : y.intl.string(y.t['13/7kZ'])
                            })
                    ]
                }),
                $
                    ? (0, r.jsx)(l.ModalCloseButton, {
                          onClick: F,
                          className: A.closeButton
                      })
                    : null
            ]
        })
    );
}
