n(47120), n(627341);
var r = n(735250),
    s = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(512722),
    l = n.n(o),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    f = n(979554),
    p = n(399606),
    g = n(663002),
    C = n(481060),
    m = n(37234),
    _ = n(727637),
    b = n(607070),
    h = n(100527),
    x = n(906732),
    I = n(1585),
    E = n(333867),
    v = n(197115),
    S = n(300284),
    T = n(876917),
    L = n(642619),
    N = n(210887),
    O = n(74538),
    k = n(335131),
    j = n(1870),
    B = n(884697),
    P = n(664018),
    Z = n(890249),
    A = n(635552),
    R = n(724994),
    y = n(390698),
    M = n(813083),
    w = n(680942),
    D = n(558060),
    H = n(237031),
    F = n(616066),
    U = n(216541),
    G = n(832149),
    W = n(474936),
    V = n(689938),
    z = n(775409);
let Y = (e) => {
        let { children: t, onClick: n, ...s } = e;
        return (0, r.jsx)(C.Button, {
            fullWidth: !0,
            look: C.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...s,
            children: t
        });
    },
    K = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(C.Button, {
            color: C.ButtonColors.BRAND,
            look: C.Button.Looks.FILLED,
            size: C.ButtonSizes.ICON,
            className: i()(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            'aria-label': V.Z.Messages.PREVIEW,
            ...n,
            children: (0, r.jsx)(C.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: a, onMount: o, isGiftEasterEggEnabled: X, isPopularPicksRow: q } = e,
        { analyticsLocations: $ } = (0, x.ZP)([...(q ? [h.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []), h.Z.COLLECTIBLES_SHOP_CARD]),
        Q = s.useRef(null),
        J = (0, _.Z)(Q),
        [ee, et] = s.useState(!1),
        en = J || ee,
        [er] = t.items,
        es = (0, p.e7)([b.Z], () => b.Z.useReducedMotion),
        ea = O.ZP.canUseCollectibles(n),
        ei = (0, B.XM)(t, ea, !1),
        eo = s.useMemo(() => (0, B.BH)(t, ea), [t, ea]),
        el = (0, B.G1)(t),
        ec = (0, B.rN)(t),
        { isPurchased: ed, isPartiallyPurchased: eu } = (0, R.L)(t),
        [ef, ep] = (0, p.Wu)([j.Z], () => [j.Z.isClaiming === t.skuId, null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId]),
        eg = (0, p.e7)([N.Z], () => (0, g.w)(N.Z.theme)),
        eC = (0, Z.m)('CollectiblesCollectedModal'),
        em = (0, B.x6)(t) || eC,
        e_ = (0, B.Yq)(t.skuId),
        { hoverVariant: eb } = (0, P.E)('CollectiblesShopTallCard'),
        eh = a.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    s.useEffect(() => {
        let { current: e } = Q;
        if (null == e) return;
        let t = () => et(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        s.useEffect(() => {
            null == o || o(Q);
        }, [o]);
    let ex = (0, S.Z)({ analyticsLocations: $ }),
        eI = s.useRef(null),
        { handleUseNow: eE, isApplying: ev } = (0, A.W)({ product: t }),
        eS = () => {
            if (((0, m.xf)(), ex(), t.type === f.Z.AVATAR_DECORATION && null != er)) {
                l()(er.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, I.ps)({
                        initialSelectedDecoration: er,
                        analyticsLocations: $
                    });
                return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
                (0, L.H)({
                    initialSelectedEffectId: er.id,
                    analyticsLocations: $
                });
        },
        eT = (e) => (n) => {
            (eI.current = n.currentTarget),
                (0, H.T)({
                    product: t,
                    category: a,
                    analyticsLocations: $,
                    analyticsSource: e,
                    returnRef: eI
                });
        },
        eL = eT(h.Z.COLLECTIBLES_SHOP_CARD),
        eN = eT(h.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eO = () =>
            (0, r.jsx)('div', {
                className: z.hoverUpsellContainer,
                children: (0, r.jsx)(v.Z, {
                    fullWidth: !0,
                    className: z.__invalid_premiumSubscribeButton,
                    disabled: ep,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: W.Si.TIER_2
                })
            }),
        ek = () =>
            ed || eu
                ? (0, r.jsx)(y.U, {
                      className: z.priceTag,
                      isPartiallyPurchased: eu
                  })
                : el
                  ? (0, r.jsx)(C.Text, {
                        variant: 'text-md/semibold',
                        className: z.priceTag,
                        children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, r.jsx)(D.Z, {
                        product: t,
                        discount: eo,
                        isPremiumUser: ea,
                        className: z.priceTag
                    }),
        ej = () =>
            el || d.tq
                ? null
                : ec
                  ? (0, r.jsx)(K, { onClick: eN })
                  : (0, r.jsx)(w.Z, {
                        product: t,
                        returnRef: Q,
                        isGiftEasterEggEnabled: X,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eB = () => {
            if (el && !ea && !ec) return eO();
            let e = el
                ? {
                      submitting: ef,
                      submittingStartedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING,
                      submittingFinishedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                      onClick: async () => {
                          await (0, k.fK)(t.skuId),
                              (0, G.Z)({
                                  product: t,
                                  analyticsLocations: $
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, E.Z)({
                              skuId: t.skuId,
                              analyticsLocations: $,
                              returnRef: Q
                          })
                  };
            return (0, r.jsxs)('div', {
                className: z.buttonsContainer,
                children: [
                    eu
                        ? null
                        : ed
                          ? (0, r.jsx)(Y, {
                                disabled: ep,
                                onClick: em ? eE : eS,
                                submitting: ev,
                                children: V.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, r.jsx)(Y, {
                                disabled: ep,
                                className: z.purchaseButton,
                                ...e,
                                children: el ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ei })
                            }),
                    ej()
                ]
            });
        };
    return (0, B.x6)(t) && null != eo && eo.discountPercentage < 0
        ? null
        : (0, r.jsx)(C.FocusRing, {
              children: (0, r.jsxs)(C.Clickable, {
                  innerRef: Q,
                  className: i()(eg ? z.shopCardDark : z.shopCard, {
                      [z.partiallyOwned]: eu,
                      [z.shopCardAnimation]: !es && eb !== P.D.NO_MOVEMENT,
                      [eg ? z.shopCardDarkHighlighted : z.shopCardHighlighted]: en,
                      [z.mysteryShopCard]: eh
                  }),
                  onBlur: () => et(!1),
                  onClick: eL,
                  id: 'shop-item-'.concat(t.skuId),
                  children: [
                      el &&
                          (0, r.jsx)(C.Tooltip, {
                              tooltipContentClassName: z.premiumWheelTooltipContent,
                              color: C.Tooltip.Colors.PRIMARY,
                              text: V.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                              children: (e) =>
                                  (0, r.jsx)(C.TextBadge, {
                                      ...e,
                                      className: z.premiumWheelBadge,
                                      text: (0, r.jsx)(C.NitroWheelIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: z.premiumWheel
                                      })
                                  })
                          }),
                      (0, r.jsx)('div', {
                          className: z.preview,
                          children: (0, c.EQ)(t.type)
                              .with(f.Z.PROFILE_EFFECT, () =>
                                  (0, r.jsx)('div', {
                                      className: z.profileEffectShopPreview,
                                      children: (0, r.jsx)(T.Z, {
                                          isHovering: en,
                                          profileEffectId: er.id,
                                          isPurchased: ed,
                                          removeSetHeight: !0
                                      })
                                  })
                              )
                              .with(
                                  f.Z.AVATAR_DECORATION,
                                  () => (
                                      l()(er.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                      (0, r.jsx)('div', {
                                          className: i()(z.avatarContainer, eh && z.mysteryAvatarContainer),
                                          children: (0, r.jsx)(F.R, {
                                              item: er,
                                              user: n,
                                              isPurchased: ed,
                                              isHighlighted: en
                                          })
                                      })
                                  )
                              )
                              .with(f.Z.BUNDLE, () =>
                                  (0, r.jsx)(U.d, {
                                      product: t,
                                      user: n,
                                      isPurchased: ed,
                                      isHighlighted: en
                                  })
                              )
                              .otherwise(() => null)
                      }),
                      ed
                          ? (0, r.jsx)('div', {
                                className: z.checkmarkWrapper,
                                children: (0, r.jsx)(C.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 38,
                                    height: 38,
                                    className: z.checkmark
                                })
                            })
                          : null,
                      (0, r.jsxs)('div', {
                          className: i()(z.cardText, { [z.cardTextBlur]: (null == er ? void 0 : er.type) === f.Z.PROFILE_EFFECT }),
                          children: [
                              (0, r.jsx)('div', { className: i()(z.cardBackground, eg ? z.darkCardBackground : z.lightCardBackground, (null == er ? void 0 : er.type) === f.Z.PROFILE_EFFECT ? z.cardLowOpacity : null) }),
                              (0, r.jsx)(C.Text, {
                                  variant: 'text-lg/bold',
                                  className: z.productName,
                                  children: t.name
                              }),
                              (0, r.jsxs)('div', {
                                  className: z.detailsWrapper,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: eu ? void 0 : z.innerBlur,
                                          children: ek()
                                      }),
                                      (0, r.jsx)('div', {
                                          className: z.innerHover,
                                          children: eB()
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(M.Z, {
                          category: a,
                          className: z.limitedTimeBadge,
                          display: 'card'
                      }),
                      e_ &&
                          !eu &&
                          !ed &&
                          (0, r.jsx)(C.TextBadge, {
                              text: V.Z.Messages.NEW,
                              disableColor: !0,
                              className: z.newBadge
                          })
                  ]
              })
          });
};
