n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    _ = n(678558),
    E = n(626135),
    f = n(74538),
    h = n(357355),
    p = n(104494),
    m = n(639119),
    I = n(165583),
    T = n(197115),
    g = n(302945),
    S = n(631771),
    A = n(474936),
    v = n(981631),
    N = n(689938),
    O = n(569548),
    R = n(769860);
function C(e) {
    var t, n, a;
    let { title: C, type: y, guildBoostProps: L, analyticsSource: b, analyticsLocation: D, body: M, context: P, glowUp: U, modalClassName: w, modalContentClassName: x, artContainerClassName: G, headerClassName: k, bodyClassName: B, transitionState: F, onClose: Z, onSubscribeClick: V, onSubscribeFinish: H, onSecondaryClick: Y, secondaryCTA: j, subscribeButtonText: W, showNewBadge: K = !1, enableArtBoxShadow: z = !0, subscriptionTier: q = A.Si.TIER_2, isLoading: Q = !1, hideBackButton: X, backButtonText: $, showEnhancedUpsell: J, useSubscribeButtonGradient: ee, subscribeButtonClassname: et, hidePremiumOfferUpsell: en, children: er, LeadingComponent: ei, ...ea } = e,
        eo = null != L,
        es = (0, m.N)(),
        el = (0, p.Ng)(),
        eu = !en && ((null == es ? void 0 : null === (t = es.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === q || (0, p.Wp)(el, q)) && !eo,
        { analyticsLocations: ec } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !Q &&
            (eo
                ? E.default.track(v.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(y, ' - Tier ').concat(L.boostedGuildTier),
                      guild_id: L.guild.id,
                      channel_id: L.channelId,
                      location: D,
                      location_stack: ec
                  })
                : E.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: y,
                      source: b,
                      location: D,
                      location_stack: ec,
                      sku_id: (0, f.Wz)(q)
                  }));
    }, [eo, q, Q]);
    let ed = (0, s.e7)([h.Z], () => h.Z.affinities),
        e_ = ed.length > 1 && (0, S.YN)(y),
        eE = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !eE && u.MH();
    }, [eE]);
    let ef = () => {
            if (eo)
                return (0, r.jsx)(_.Z, {
                    analyticsLocation: D,
                    guild: L.guild,
                    onClose: Z
                });
            let e = J ? N.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
            if (eu) {
                if (null != es) {
                    var t, n;
                    e = (0, f.Rt)({
                        intervalType: null == es ? void 0 : null === (t = es.subscription_trial) || void 0 === t ? void 0 : t.interval,
                        intervalCount: null == es ? void 0 : null === (n = es.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                    });
                } else null != el && (e = N.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: el.discount.amount }));
            }
            return (0, r.jsx)(T.Z, {
                className: et,
                showGradient: J || ee,
                premiumModalAnalyticsLocation: D,
                subscriptionTier: q,
                size: l.Button.Sizes.SMALL,
                color: J || ee ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                onClick: () => {
                    null == V || V(), Z();
                },
                onSubscribeModalClose: H,
                buttonText: null != W ? W : e
            });
        },
        eh = z ? o()(O.artContainer, O.artContainerBoxShadow, G) : o()(O.artContainer, G),
        ep = null;
    return (
        null != ea.artURL
            ? (ep = (0, r.jsx)('img', {
                  className: O.art,
                  alt: '',
                  src: ea.artURL
              }))
            : null != ea.artElement && (ep = ea.artElement),
        (0, r.jsxs)(l.ModalRoot, {
            className: o()(O.root, !eu && w),
            'aria-label': C,
            transitionState: F,
            children: [
                null != ep &&
                    (0, r.jsxs)('div', {
                        className: eh,
                        children: [
                            ep,
                            K
                                ? (0, r.jsx)('img', {
                                      className: O.sparkleBadge,
                                      alt: '',
                                      src: R
                                  })
                                : null
                        ]
                    }),
                (0, r.jsx)(l.ModalContent, {
                    scrollbarType: 'none',
                    className: o()(J ? O.enhancedContent : O.content, !eu && x),
                    children: Q
                        ? (0, r.jsx)(l.Spinner, {})
                        : (0, r.jsx)(r.Fragment, {
                              children: eu
                                  ? (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(I.ZP, {
                                            onClose: Z,
                                            type: y,
                                            subscriptionTier: null !== (a = null == es ? void 0 : null === (n = es.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : A.Si.TIER_2,
                                            headingText: C,
                                            context: P,
                                            analyticsLocationObject: D,
                                            discountOffer: el,
                                            trialOffer: es,
                                            children: U
                                        })
                                    })
                                  : (0, r.jsxs)('div', {
                                        className: O.contentContainer,
                                        children: [
                                            ei,
                                            (0, r.jsxs)('div', {
                                                className: O.bodyContent,
                                                children: [
                                                    (0, r.jsx)(l.Heading, {
                                                        className: o()(O.header, { [O.enhancedHeader]: J }, k),
                                                        variant: 'heading-xl/bold',
                                                        children: C
                                                    }),
                                                    e_ ? (0, r.jsx)(g.Z, { affinities: ed }) : void 0,
                                                    er,
                                                    (0, r.jsx)(l.Text, {
                                                        variant: 'text-md/normal',
                                                        className: o()(B, O.subHeader),
                                                        children: M
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                          })
                }),
                (0, r.jsxs)(l.ModalFooter, {
                    className: o()(O.footer, { [O.enhancedFooter]: J }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(O.primaryActions, { [O.enhancedPrimaryActions]: J }),
                            children: [
                                null != j
                                    ? (0, r.jsx)(l.Button, {
                                          className: o()(O.secondaryAction, { [O.enhancedSecondaryAction]: J }),
                                          onClick: Y,
                                          size: l.Button.Sizes.SMALL,
                                          color: J ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                          look: l.Button.Looks.LINK,
                                          children: j
                                      })
                                    : null,
                                ef()
                            ]
                        }),
                        !X &&
                            !J &&
                            (0, r.jsx)(l.Button, {
                                onClick: Z,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: null != $ ? $ : N.Z.Messages.BACK
                            })
                    ]
                }),
                J
                    ? (0, r.jsx)(l.ModalCloseButton, {
                          onClick: Z,
                          className: O.closeButton
                      })
                    : null
            ]
        })
    );
}
