var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(355467),
    d = n(100527),
    _ = n(906732),
    E = n(28546),
    f = n(357355),
    h = n(98278),
    p = n(104494),
    m = n(639119),
    I = n(165583),
    T = n(197115),
    g = n(631771),
    S = n(609218),
    A = n(210887),
    v = n(626135),
    N = n(176354),
    O = n(74538),
    R = n(543241),
    C = n(149203),
    y = n(981631),
    L = n(185923),
    b = n(474936),
    D = n(689938),
    M = n(145834);
let P = (e) => {
    var t, r;
    let o,
        { onLearnMore: P, onClose: U, channel: w, emojiDescriptor: x, pickerIntention: G, analyticsLocation: k, containerContext: B } = e,
        F = (0, l.e7)([A.Z], () => A.Z.theme) === y.BRd.LIGHT ? 'light' : 'dark',
        [Z, V] = a.useState(!1),
        H = () => {
            (0, R.A3)(w), (0, h.z)(), P();
        },
        Y = n(577391)('./img_premium_emoji_'.concat(F, '.svg')),
        j = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(F, '.png'),
        W = (0, m.N)(),
        K = (0, p.Ng)(),
        z = null != W || null != K,
        q = (0, E.Iu)((e) => e.searchQuery),
        { analyticsLocations: Q } = (0, _.ZP)(d.Z.EMOJI_PICKER),
        { enabled: X, addSocialProof: $ } = g.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !z,
                disable: z
            }
        );
    o = G === L.Hz.REACTION ? b.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == x ? b.cd.EMOJI_PICKER_FLOATING_UPSELL : x.subCategory === C.t0.TOP_GUILD_EMOJI ? b.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : x.subCategory === C.t0.NEWLY_ADDED_EMOJI ? b.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : b.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let J = null != x ? x.emoji : void 0,
        ee = null != J && J.animated,
        et = null != J && !N.ZP.isInternalEmojiForGuildId(J, null == w ? void 0 : w.getGuildId()),
        en = null != J ? y.qAy.EMOJI : y.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    a.useEffect(() => {
        !X &&
            v.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                type: o,
                is_animated: ee,
                is_external: et,
                has_search_query: null != q && '' !== q,
                location: {
                    ...k,
                    object: en
                },
                location_stack: Q,
                sku_id: (0, O.Wz)(O.ZP.getSkuIdForPremiumType(b.p9.TIER_2))
            });
    }, [k, Q, q, ee, et, o, en, X]);
    let er = () => (z ? D.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : D.Z.Messages.PREMIUM_REQUIRED_GET_NITRO),
        ei = (0, l.e7)([f.Z], () => f.Z.affinities),
        ea = (0, l.e7)([f.Z], () => f.Z.hasFetched);
    a.useEffect(() => {
        !ea && c.MH();
    }, [ea]);
    let eo = ei.length > 1 && $,
        es = () =>
            (0, i.jsx)(S.Z, {
                containerContext: B,
                image: {
                    url: j,
                    width: 220,
                    height: 132
                },
                title: D.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE_V2,
                description: D.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_DESCRIPTION_V2,
                enableSocialProof: eo,
                analyticsLocationSection: y.jXE.EMOJI_UPSELL_POPOUT,
                onClose: U,
                upsellViewedTrackingData: {
                    type: o,
                    is_external: et,
                    location: {
                        ...k,
                        object: en
                    },
                    location_stack: Q,
                    sku_id: (0, O.Wz)(O.ZP.getSkuIdForPremiumType(b.p9.TIER_2)),
                    has_search_query: null != q && '' !== q,
                    is_animated: ee
                }
            });
    return X
        ? es()
        : (0, i.jsxs)('div', {
              className: s()(M.premiumPromo, { [M.unifyTrialUpsell]: z }),
              children: [
                  (0, i.jsx)(u.Clickable, {
                      className: M.premiumPromoClose,
                      onClick: U,
                      children: D.Z.Messages.CLOSE
                  }),
                  (0, i.jsxs)(i.Fragment, {
                      children: [
                          z
                              ? (0, i.jsx)(I.ZP, {
                                    type: b.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: null !== (r = null == W ? void 0 : null === (t = W.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== r ? r : b.Si.TIER_2,
                                    onClose: U,
                                    trialOffer: W,
                                    discountOffer: K,
                                    children: D.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: H })
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            className: M.premiumPromoImage,
                                            src: Y
                                        }),
                                        (0, i.jsx)('div', {
                                            className: M.premiumPromoTitle,
                                            children: D.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                        }),
                                        (0, i.jsx)('div', {
                                            className: M.premiumPromoDescription,
                                            children: D.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: H })
                                        })
                                    ]
                                }),
                          !z &&
                              (0, i.jsx)(T.Z, {
                                  subscriptionTier: b.Si.TIER_2,
                                  submitting: Z,
                                  premiumModalAnalyticsLocation: {
                                      section: y.jXE.EMOJI_PICKER_POPOUT,
                                      object: y.qAy.BUTTON_CTA
                                  },
                                  size: u.Button.Sizes.SMALL,
                                  color: u.Button.Colors.GREEN,
                                  onClick: () => {
                                      V(!0);
                                  },
                                  onSubscribeModalClose: (e) => {
                                      V(!1), e && U();
                                  },
                                  buttonText: er()
                              })
                      ]
                  })
              ]
          });
};
t.Z = P;
