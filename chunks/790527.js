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
    let { title: C, type: y, guildBoostProps: L, analyticsSource: b, analyticsLocation: D, body: M, context: P, glowUp: U, modalClassName: w, modalContentClassName: x, artContainerClassName: G, headerClassName: k, bodyClassName: B, transitionState: F, onClose: Z, onSubscribeClick: V, onSecondaryClick: H, secondaryCTA: Y, subscribeButtonText: j, showNewBadge: W = !1, enableArtBoxShadow: K = !0, subscriptionTier: z = A.Si.TIER_2, isLoading: q = !1, hideBackButton: Q, backButtonText: X, showEnhancedUpsell: $, useSubscribeButtonGradient: J, subscribeButtonClassname: ee, hidePremiumOfferUpsell: et, children: en, LeadingComponent: er, ...ei } = e,
        ea = null != L,
        eo = (0, m.N)(),
        es = (0, p.Ng)(),
        el = !et && ((null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === z || (0, p.Wp)(es, z)) && !ea,
        { analyticsLocations: eu } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !q &&
            (ea
                ? E.default.track(v.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(y, ' - Tier ').concat(L.boostedGuildTier),
                      guild_id: L.guild.id,
                      channel_id: L.channelId,
                      location: D,
                      location_stack: eu
                  })
                : E.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: y,
                      source: b,
                      location: D,
                      location_stack: eu,
                      sku_id: (0, f.Wz)(z)
                  }));
    }, [ea, z, q]);
    let ec = (0, s.e7)([h.Z], () => h.Z.affinities),
        ed = ec.length > 1 && (0, S.YN)(y),
        e_ = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !e_ && u.MH();
    }, [e_]);
    let eE = () => {
            if (ea)
                return (0, r.jsx)(_.Z, {
                    analyticsLocation: D,
                    guild: L.guild,
                    onClose: Z
                });
            let e = $ ? N.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
            if (el) {
                if (null != eo) {
                    var t, n;
                    e = (0, f.Rt)({
                        intervalType: null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.interval,
                        intervalCount: null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                    });
                } else null != es && (e = N.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: es.discount.amount }));
            }
            return (0, r.jsx)(T.Z, {
                className: ee,
                showGradient: $ || J,
                premiumModalAnalyticsLocation: D,
                subscriptionTier: z,
                size: l.Button.Sizes.SMALL,
                color: $ || J ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                onClick: () => {
                    null == V || V(), Z();
                },
                buttonText: null != j ? j : e
            });
        },
        ef = K ? o()(O.artContainer, O.artContainerBoxShadow, G) : o()(O.artContainer, G),
        eh = null;
    return (
        null != ei.artURL
            ? (eh = (0, r.jsx)('img', {
                  className: O.art,
                  alt: '',
                  src: ei.artURL
              }))
            : null != ei.artElement && (eh = ei.artElement),
        (0, r.jsxs)(l.ModalRoot, {
            className: o()(O.root, w),
            'aria-label': C,
            transitionState: F,
            children: [
                null != eh &&
                    (0, r.jsxs)('div', {
                        className: ef,
                        children: [
                            eh,
                            W
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
                    className: o()($ ? O.enhancedContent : O.content, x),
                    children: q
                        ? (0, r.jsx)(l.Spinner, {})
                        : (0, r.jsx)(r.Fragment, {
                              children: el
                                  ? (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(I.ZP, {
                                            onClose: Z,
                                            type: y,
                                            subscriptionTier: null !== (a = null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : A.Si.TIER_2,
                                            headingText: C,
                                            context: P,
                                            analyticsLocationObject: D,
                                            discountOffer: es,
                                            trialOffer: eo,
                                            children: U
                                        })
                                    })
                                  : (0, r.jsxs)('div', {
                                        className: O.contentContainer,
                                        children: [
                                            er,
                                            (0, r.jsxs)('div', {
                                                className: O.bodyContent,
                                                children: [
                                                    (0, r.jsx)(l.Heading, {
                                                        className: o()(O.header, { [O.enhancedHeader]: $ }, k),
                                                        variant: 'heading-xl/bold',
                                                        children: C
                                                    }),
                                                    ed ? (0, r.jsx)(g.Z, { affinities: ec }) : void 0,
                                                    en,
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
                    className: o()(O.footer, { [O.enhancedFooter]: $ }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(O.primaryActions, { [O.enhancedPrimaryActions]: $ }),
                            children: [
                                null != Y
                                    ? (0, r.jsx)(l.Button, {
                                          className: o()(O.secondaryAction, { [O.enhancedSecondaryAction]: $ }),
                                          onClick: H,
                                          size: l.Button.Sizes.SMALL,
                                          color: $ ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                          look: l.Button.Looks.LINK,
                                          children: Y
                                      })
                                    : null,
                                eE()
                            ]
                        }),
                        !Q &&
                            !$ &&
                            (0, r.jsx)(l.Button, {
                                onClick: Z,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: null != X ? X : N.Z.Messages.BACK
                            })
                    ]
                }),
                $
                    ? (0, r.jsx)(l.ModalCloseButton, {
                          onClick: Z,
                          className: O.closeButton
                      })
                    : null
            ]
        })
    );
}
