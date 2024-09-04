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
    let { title: C, type: y, guildBoostProps: L, analyticsSource: D, analyticsLocation: b, body: M, context: P, glowUp: U, modalClassName: w, artContainerClassName: x, headerClassName: G, bodyClassName: k, transitionState: B, onClose: F, onSubscribeClick: V, onSecondaryClick: H, secondaryCTA: Z, subscribeButtonText: Y, showNewBadge: j = !1, enableArtBoxShadow: W = !0, subscriptionTier: K = A.Si.TIER_2, isLoading: z = !1, hideBackButton: q, backButtonText: Q, showEnhancedUpsell: X, useSubscribeButtonGradient: $, subscribeButtonClassname: J, hidePremiumOfferUpsell: ee, children: et, ...en } = e,
        er = null != L,
        ei = (0, I.N)(),
        ea = (0, p.Ng)(),
        es = !ee && ((null == ei ? void 0 : null === (t = ei.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === K || (0, p.Wp)(ea, K)) && !er,
        { analyticsLocations: eo } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !z &&
            (er
                ? E.default.track(N.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(y, ' - Tier ').concat(L.boostedGuildTier),
                      guild_id: L.guild.id,
                      channel_id: L.channelId,
                      location: b,
                      location_stack: eo
                  })
                : E.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: y,
                      source: D,
                      location: b,
                      location_stack: eo,
                      sku_id: (0, f.Wz)(K)
                  }));
    }, [er, K, z]);
    let el = (0, o.e7)([h.Z], () => h.Z.affinities),
        eu = el.length > 1 && (0, S.YN)(y),
        ec = (0, o.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !ec && u.MH();
    }, [ec]);
    let ed = W ? s()(R.artContainer, R.artContainerBoxShadow, x) : s()(R.artContainer, x),
        e_ = null;
    return (
        (e_ =
            'artURL' in en
                ? (0, r.jsx)('img', {
                      className: R.art,
                      alt: '',
                      src: en.artURL
                  })
                : en.artElement),
        (0, r.jsxs)(l.ModalRoot, {
            className: s()(R.root, w),
            'aria-label': C,
            transitionState: B,
            children: [
                (0, r.jsxs)('div', {
                    className: ed,
                    children: [
                        e_,
                        j
                            ? (0, r.jsx)('img', {
                                  className: R.sparkleBadge,
                                  alt: '',
                                  src: v
                              })
                            : null
                    ]
                }),
                X
                    ? (0, r.jsx)(l.ModalCloseButton, {
                          onClick: F,
                          className: R.closeButton
                      })
                    : null,
                (0, r.jsx)(l.ModalContent, {
                    scrollbarType: 'none',
                    className: X ? R.enhancedContent : R.content,
                    children: z
                        ? (0, r.jsx)(l.Spinner, {})
                        : (0, r.jsx)(r.Fragment, {
                              children: es
                                  ? (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(m.ZP, {
                                            onClose: F,
                                            type: y,
                                            subscriptionTier: null !== (a = null == ei ? void 0 : null === (n = ei.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : A.Si.TIER_2,
                                            headingText: C,
                                            context: P,
                                            analyticsLocationObject: b,
                                            discountOffer: ea,
                                            trialOffer: ei,
                                            children: U
                                        })
                                    })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.Heading, {
                                                className: s()(R.header, { [R.enhancedHeader]: X }, G),
                                                variant: 'heading-xl/bold',
                                                children: C
                                            }),
                                            eu ? (0, r.jsx)(g.Z, { affinities: el }) : void 0,
                                            et,
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
                    className: s()(R.footer, { [R.enhancedFooter]: X }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(R.primaryActions, { [R.enhancedPrimaryActions]: X }),
                            children: [
                                null != Z
                                    ? (0, r.jsx)(l.Button, {
                                          className: s()(R.secondaryAction, { [R.enhancedSecondaryAction]: X }),
                                          onClick: H,
                                          size: l.Button.Sizes.SMALL,
                                          color: X ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                          look: l.Button.Looks.LINK,
                                          children: Z
                                      })
                                    : null,
                                (() => {
                                    if (er)
                                        return (0, r.jsx)(_.Z, {
                                            analyticsLocation: b,
                                            guild: L.guild,
                                            onClose: F
                                        });
                                    let e = X ? O.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                    if (es) {
                                        if (null != ei) {
                                            var t, n;
                                            e = (0, f.Rt)({
                                                intervalType: null == ei ? void 0 : null === (t = ei.subscription_trial) || void 0 === t ? void 0 : t.interval,
                                                intervalCount: null == ei ? void 0 : null === (n = ei.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                            });
                                        } else null != ea && (e = O.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: ea.discount.amount }));
                                    }
                                    return (0, r.jsx)(T.Z, {
                                        className: J,
                                        showGradient: X || $,
                                        premiumModalAnalyticsLocation: b,
                                        subscriptionTier: K,
                                        size: l.Button.Sizes.SMALL,
                                        color: X || $ ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                                        onClick: () => {
                                            null == V || V(), F();
                                        },
                                        buttonText: null != Y ? Y : e
                                    });
                                })()
                            ]
                        }),
                        !q &&
                            !X &&
                            (0, r.jsx)(l.Button, {
                                onClick: F,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: null != Q ? Q : O.Z.Messages.BACK
                            })
                    ]
                })
            ]
        })
    );
}
