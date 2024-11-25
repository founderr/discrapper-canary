n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    f = n(28546),
    _ = n(357355),
    p = n(98278),
    h = n(48125),
    m = n(104494),
    g = n(639119),
    E = n(165583),
    v = n(197115),
    I = n(631771),
    b = n(609218),
    T = n(210887),
    S = n(626135),
    y = n(176354),
    A = n(74538),
    N = n(543241),
    C = n(149203),
    R = n(981631),
    O = n(185923),
    D = n(474936),
    L = n(388032),
    x = n(940675);
t.Z = (e) => {
    var t, a;
    let w,
        { onLearnMore: M, onClose: P, channel: k, emojiDescriptor: U, pickerIntention: B, analyticsLocation: G, containerContext: Z } = e,
        F = (0, o.e7)([T.Z], () => T.Z.theme) === R.BRd.LIGHT ? 'light' : 'dark',
        [V, j] = i.useState(!1),
        H = () => {
            (0, N.A3)(k), (0, p.z)(), M();
        },
        Y = n(577391)('./img_premium_emoji_'.concat(F, '.svg')),
        W = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(F, '.png'),
        K = (0, g.N)(),
        z = (0, m.Ng)(),
        q = null != K || null != z,
        Q = (0, f.Iu)((e) => e.searchQuery),
        { analyticsLocations: X } = (0, d.ZP)(c.Z.EMOJI_PICKER),
        J = I.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !q,
                disable: q
            }
        ),
        $ = h.Z.useExperiment(
            { location: 'EmojiPickerPremiumUpsell' },
            {
                autoTrackExposure: null != K,
                disable: null == K
            }
        ),
        ee = J.enabled || $.enabled,
        et = J.addSocialProof;
    w = B === O.Hz.REACTION ? D.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == U ? D.cd.EMOJI_PICKER_FLOATING_UPSELL : U.subCategory === C.t0.TOP_GUILD_EMOJI ? D.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : U.subCategory === C.t0.NEWLY_ADDED_EMOJI ? D.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : D.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let en = null != U ? U.emoji : void 0,
        er = null != en && en.animated,
        ei = null != en && !y.ZP.isInternalEmojiForGuildId(en, null == k ? void 0 : k.getGuildId()),
        ea = null != en ? R.qAy.EMOJI : R.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    i.useEffect(() => {
        !ee &&
            S.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
                type: w,
                is_animated: er,
                is_external: ei,
                has_search_query: null != Q && '' !== Q,
                location: {
                    ...G,
                    object: ea
                },
                location_stack: X,
                sku_id: (0, A.Wz)(A.ZP.getSkuIdForPremiumType(D.p9.TIER_2))
            });
    }, [G, X, Q, er, ei, w, ea, ee]);
    let es = (0, o.e7)([_.Z], () => _.Z.affinities),
        eo = (0, o.e7)([_.Z], () => _.Z.hasFetched);
    i.useEffect(() => {
        !eo && u.MH();
    }, [eo]);
    let el = es.length > 1 && et;
    return ee
        ? (0, r.jsx)(b.Z, {
              containerContext: Z,
              image: {
                  url: W,
                  width: 220,
                  height: 132
              },
              title: L.intl.string(L.t['0+11FB']),
              description: L.intl.string(L.t.dURIzc),
              enableSocialProof: el,
              analyticsLocationSection: R.jXE.EMOJI_UPSELL_POPOUT,
              onClose: P,
              upsellViewedTrackingData: {
                  type: w,
                  is_external: ei,
                  location: {
                      ...G,
                      object: ea
                  },
                  location_stack: X,
                  sku_id: (0, A.Wz)(A.ZP.getSkuIdForPremiumType(D.p9.TIER_2)),
                  has_search_query: null != Q && '' !== Q,
                  is_animated: er
              }
          })
        : (0, r.jsxs)('div', {
              className: s()(x.premiumPromo, { [x.unifyTrialUpsell]: q }),
              children: [
                  (0, r.jsx)(l.Clickable, {
                      className: x.premiumPromoClose,
                      onClick: P,
                      children: L.intl.string(L.t.cpT0Cg)
                  }),
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          q
                              ? (0, r.jsx)(E.ZP, {
                                    type: D.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: null !== (a = null == K ? void 0 : null === (t = K.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== a ? a : D.Si.TIER_2,
                                    onClose: P,
                                    trialOffer: K,
                                    discountOffer: z,
                                    children: L.intl.format(L.t.se13Fh, { onClick: H })
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            className: x.premiumPromoImage,
                                            src: Y
                                        }),
                                        (0, r.jsx)('div', {
                                            className: x.premiumPromoTitle,
                                            children: L.intl.string(L.t['1SsvhY'])
                                        }),
                                        (0, r.jsx)('div', {
                                            className: x.premiumPromoDescription,
                                            children: L.intl.format(L.t.se13Fh, { onClick: H })
                                        })
                                    ]
                                }),
                          !q &&
                              (0, r.jsx)(v.Z, {
                                  subscriptionTier: D.Si.TIER_2,
                                  submitting: V,
                                  premiumModalAnalyticsLocation: {
                                      section: R.jXE.EMOJI_PICKER_POPOUT,
                                      object: R.qAy.BUTTON_CTA
                                  },
                                  size: l.Button.Sizes.SMALL,
                                  color: l.Button.Colors.GREEN,
                                  onClick: () => {
                                      j(!0);
                                  },
                                  onSubscribeModalClose: (e) => {
                                      j(!1), e && P();
                                  },
                                  buttonText: q ? L.intl.string(L.t['Gd/XHB']) : L.intl.string(L.t.P3etAg)
                              })
                      ]
                  })
              ]
          });
};
