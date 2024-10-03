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
    p = n(48125),
    m = n(104494),
    I = n(639119),
    T = n(165583),
    g = n(197115),
    S = n(631771),
    A = n(609218),
    v = n(210887),
    N = n(626135),
    O = n(176354),
    R = n(74538),
    C = n(543241),
    y = n(149203),
    L = n(981631),
    b = n(185923),
    D = n(474936),
    M = n(689938),
    P = n(145834);
let U = (e) => {
    var t, r;
    let o,
        { onLearnMore: U, onClose: w, channel: x, emojiDescriptor: G, pickerIntention: k, analyticsLocation: B, containerContext: F } = e,
        Z = (0, l.e7)([v.Z], () => v.Z.theme) === L.BRd.LIGHT ? 'light' : 'dark',
        [V, H] = a.useState(!1),
        Y = () => {
            (0, C.A3)(x), (0, h.z)(), U();
        },
        j = n(577391)('./img_premium_emoji_'.concat(Z, '.svg')),
        W = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(Z, '.png'),
        K = (0, I.N)(),
        z = (0, m.Ng)(),
        q = null != K || null != z,
        Q = (0, E.Iu)((e) => e.searchQuery),
        { analyticsLocations: X } = (0, _.ZP)(d.Z.EMOJI_PICKER),
        $ = S.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !q,
                disable: q
            }
        ),
        J = p.Z.useExperiment(
            { location: 'EmojiPickerPremiumUpsell' },
            {
                autoTrackExposure: null != K,
                disable: null == K
            }
        ),
        ee = $.enabled || J.enabled,
        et = $.addSocialProof;
    o = k === b.Hz.REACTION ? D.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == G ? D.cd.EMOJI_PICKER_FLOATING_UPSELL : G.subCategory === y.t0.TOP_GUILD_EMOJI ? D.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : G.subCategory === y.t0.NEWLY_ADDED_EMOJI ? D.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : D.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let en = null != G ? G.emoji : void 0,
        er = null != en && en.animated,
        ei = null != en && !O.ZP.isInternalEmojiForGuildId(en, null == x ? void 0 : x.getGuildId()),
        ea = null != en ? L.qAy.EMOJI : L.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    a.useEffect(() => {
        !ee &&
            N.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
                type: o,
                is_animated: er,
                is_external: ei,
                has_search_query: null != Q && '' !== Q,
                location: {
                    ...B,
                    object: ea
                },
                location_stack: X,
                sku_id: (0, R.Wz)(R.ZP.getSkuIdForPremiumType(D.p9.TIER_2))
            });
    }, [B, X, Q, er, ei, o, ea, ee]);
    let eo = () => (q ? M.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : M.Z.Messages.PREMIUM_REQUIRED_GET_NITRO),
        es = (0, l.e7)([f.Z], () => f.Z.affinities),
        el = (0, l.e7)([f.Z], () => f.Z.hasFetched);
    a.useEffect(() => {
        !el && c.MH();
    }, [el]);
    let eu = es.length > 1 && et,
        ec = () =>
            (0, i.jsx)(A.Z, {
                containerContext: F,
                image: {
                    url: W,
                    width: 220,
                    height: 132
                },
                title: M.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE_V2,
                description: M.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_DESCRIPTION_V2,
                enableSocialProof: eu,
                analyticsLocationSection: L.jXE.EMOJI_UPSELL_POPOUT,
                onClose: w,
                upsellViewedTrackingData: {
                    type: o,
                    is_external: ei,
                    location: {
                        ...B,
                        object: ea
                    },
                    location_stack: X,
                    sku_id: (0, R.Wz)(R.ZP.getSkuIdForPremiumType(D.p9.TIER_2)),
                    has_search_query: null != Q && '' !== Q,
                    is_animated: er
                }
            });
    return ee
        ? ec()
        : (0, i.jsxs)('div', {
              className: s()(P.premiumPromo, { [P.unifyTrialUpsell]: q }),
              children: [
                  (0, i.jsx)(u.Clickable, {
                      className: P.premiumPromoClose,
                      onClick: w,
                      children: M.Z.Messages.CLOSE
                  }),
                  (0, i.jsxs)(i.Fragment, {
                      children: [
                          q
                              ? (0, i.jsx)(T.ZP, {
                                    type: D.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: null !== (r = null == K ? void 0 : null === (t = K.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== r ? r : D.Si.TIER_2,
                                    onClose: w,
                                    trialOffer: K,
                                    discountOffer: z,
                                    children: M.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: Y })
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            className: P.premiumPromoImage,
                                            src: j
                                        }),
                                        (0, i.jsx)('div', {
                                            className: P.premiumPromoTitle,
                                            children: M.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                        }),
                                        (0, i.jsx)('div', {
                                            className: P.premiumPromoDescription,
                                            children: M.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: Y })
                                        })
                                    ]
                                }),
                          !q &&
                              (0, i.jsx)(g.Z, {
                                  subscriptionTier: D.Si.TIER_2,
                                  submitting: V,
                                  premiumModalAnalyticsLocation: {
                                      section: L.jXE.EMOJI_PICKER_POPOUT,
                                      object: L.qAy.BUTTON_CTA
                                  },
                                  size: u.Button.Sizes.SMALL,
                                  color: u.Button.Colors.GREEN,
                                  onClick: () => {
                                      H(!0);
                                  },
                                  onSubscribeModalClose: (e) => {
                                      H(!1), e && w();
                                  },
                                  buttonText: eo()
                              })
                      ]
                  })
              ]
          });
};
t.Z = U;
