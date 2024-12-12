var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(355467),
    f = r(100527),
    _ = r(906732),
    h = r(28546),
    p = r(357355),
    m = r(98278),
    g = r(48125),
    E = r(104494),
    v = r(639119),
    I = r(165583),
    T = r(197115),
    b = r(631771),
    y = r(609218),
    S = r(210887),
    A = r(626135),
    N = r(176354),
    C = r(74538),
    R = r(543241),
    O = r(149203),
    D = r(981631),
    L = r(185923),
    x = r(474936),
    w = r(388032),
    P = r(940675);
let M = (e) => {
    var n, i;
    let o,
        { onLearnMore: M, onClose: k, channel: U, emojiDescriptor: B, pickerIntention: G, analyticsLocation: Z, containerContext: F } = e,
        V = (0, u.e7)([S.Z], () => S.Z.theme) === D.BRd.LIGHT ? 'light' : 'dark',
        [j, H] = s.useState(!1),
        Y = () => {
            (0, R.A3)(U), (0, m.z)(), M();
        },
        W = r(577391)('./img_premium_emoji_'.concat(V, '.svg')),
        K = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(V, '.png'),
        z = (0, v.N)(),
        q = (0, E.Ng)(),
        Q = null != z || null != q,
        X = (0, h.Iu)((e) => e.searchQuery),
        { analyticsLocations: J } = (0, _.ZP)(f.Z.EMOJI_PICKER),
        $ = b.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !Q,
                disable: Q
            }
        ),
        ee = g.Z.useExperiment(
            { location: 'EmojiPickerPremiumUpsell' },
            {
                autoTrackExposure: null != z,
                disable: null == z
            }
        ),
        et = $.enabled || ee.enabled,
        en = $.addSocialProof;
    o = G === L.Hz.REACTION ? x.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == B ? x.cd.EMOJI_PICKER_FLOATING_UPSELL : B.subCategory === O.t0.TOP_GUILD_EMOJI ? x.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : B.subCategory === O.t0.NEWLY_ADDED_EMOJI ? x.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : x.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let er = null != B ? B.emoji : void 0,
        ei = null != er && er.animated,
        ea = null != er && !N.ZP.isInternalEmojiForGuildId(er, null == U ? void 0 : U.getGuildId()),
        es = null != er ? D.qAy.EMOJI : D.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    s.useEffect(() => {
        !et &&
            A.default.track(D.rMx.PREMIUM_UPSELL_VIEWED, {
                type: o,
                is_animated: ei,
                is_external: ea,
                has_search_query: null != X && '' !== X,
                location: {
                    ...Z,
                    object: es
                },
                location_stack: J,
                sku_id: (0, C.Wz)(C.ZP.getSkuIdForPremiumType(x.p9.TIER_2))
            });
    }, [Z, J, X, ei, ea, o, es, et]);
    let eo = () => (Q ? w.intl.string(w.t['Gd/XHB']) : w.intl.string(w.t.P3etAg)),
        el = (0, u.e7)([p.Z], () => p.Z.affinities),
        eu = (0, u.e7)([p.Z], () => p.Z.hasFetched);
    s.useEffect(() => {
        !eu && d.MH();
    }, [eu]);
    let ec = el.length > 1 && en,
        ed = () =>
            (0, a.jsx)(y.Z, {
                containerContext: F,
                image: {
                    url: K,
                    width: 220,
                    height: 132
                },
                title: w.intl.string(w.t['0+11FB']),
                description: w.intl.string(w.t.dURIzc),
                enableSocialProof: ec,
                analyticsLocationSection: D.jXE.EMOJI_UPSELL_POPOUT,
                onClose: k,
                upsellViewedTrackingData: {
                    type: o,
                    is_external: ea,
                    location: {
                        ...Z,
                        object: es
                    },
                    location_stack: J,
                    sku_id: (0, C.Wz)(C.ZP.getSkuIdForPremiumType(x.p9.TIER_2)),
                    has_search_query: null != X && '' !== X,
                    is_animated: ei
                }
            });
    return et
        ? ed()
        : (0, a.jsxs)('div', {
              className: l()(P.premiumPromo, { [P.unifyTrialUpsell]: Q }),
              children: [
                  (0, a.jsx)(c.Clickable, {
                      className: P.premiumPromoClose,
                      onClick: k,
                      children: w.intl.string(w.t.cpT0Cg)
                  }),
                  (0, a.jsxs)(a.Fragment, {
                      children: [
                          Q
                              ? (0, a.jsx)(I.ZP, {
                                    type: x.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: null !== (i = null == z ? void 0 : null === (n = z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== i ? i : x.Si.TIER_2,
                                    onClose: k,
                                    trialOffer: z,
                                    discountOffer: q,
                                    children: w.intl.format(w.t.se13Fh, { onClick: Y })
                                })
                              : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)('img', {
                                            alt: '',
                                            className: P.premiumPromoImage,
                                            src: W
                                        }),
                                        (0, a.jsx)('div', {
                                            className: P.premiumPromoTitle,
                                            children: w.intl.string(w.t['1SsvhY'])
                                        }),
                                        (0, a.jsx)('div', {
                                            className: P.premiumPromoDescription,
                                            children: w.intl.format(w.t.se13Fh, { onClick: Y })
                                        })
                                    ]
                                }),
                          !Q &&
                              (0, a.jsx)(T.Z, {
                                  subscriptionTier: x.Si.TIER_2,
                                  submitting: j,
                                  premiumModalAnalyticsLocation: {
                                      section: D.jXE.EMOJI_PICKER_POPOUT,
                                      object: D.qAy.BUTTON_CTA
                                  },
                                  size: c.Button.Sizes.SMALL,
                                  color: c.Button.Colors.GREEN,
                                  onClick: () => {
                                      H(!0);
                                  },
                                  onSubscribeModalClose: (e) => {
                                      H(!1), e && k();
                                  },
                                  buttonText: eo()
                              })
                      ]
                  })
              ]
          });
};
n.Z = M;
