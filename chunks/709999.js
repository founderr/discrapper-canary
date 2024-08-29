n(47120), n(627341);
var r = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(512722),
    c = n.n(i),
    l = n(278074),
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
    L = n(876917),
    T = n(642619),
    N = n(210887),
    k = n(74538),
    O = n(335131),
    j = n(1870),
    B = n(884697),
    Z = n(664018),
    P = n(890249),
    R = n(635552),
    A = n(724994),
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
        let { children: t, onClick: n, ...a } = e;
        return (0, r.jsx)(C.Button, {
            fullWidth: !0,
            look: C.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...a,
            children: t
        });
    },
    K = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(C.Button, {
            color: C.ButtonColors.BRAND,
            look: C.Button.Looks.FILLED,
            size: C.ButtonSizes.ICON,
            className: o()(z.previewButton, t),
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
    let { product: t, user: n, category: s, onMount: i, isGiftEasterEggEnabled: X, isPopularPicksRow: q } = e,
        { analyticsLocations: $ } = (0, x.ZP)([...(q ? [h.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []), h.Z.COLLECTIBLES_SHOP_CARD]),
        Q = a.useRef(null),
        J = (0, _.Z)(Q),
        [ee, et] = a.useState(!1),
        en = J || ee,
        [er] = t.items,
        ea = (0, p.e7)([b.Z], () => b.Z.useReducedMotion),
        es = k.ZP.canUseCollectibles(n),
        eo = (0, B.XM)(t, es, !1),
        ei = a.useMemo(() => (0, B.BH)(t, es), [t, es]),
        ec = (0, B.G1)(t),
        el = (0, B.rN)(t),
        { isPurchased: ed, isPartiallyPurchased: eu } = (0, A.L)(t),
        [ef, ep] = (0, p.Wu)([j.Z], () => [j.Z.isClaiming === t.skuId, null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId]),
        eg = (0, p.e7)([N.Z], () => (0, g.w)(N.Z.theme)),
        eC = (0, P.m)('CollectiblesCollectedModal'),
        em = (0, B.x6)(t) || eC,
        e_ = (0, B.Yq)(t.skuId),
        { hoverVariant: eb } = (0, Z.E)('CollectiblesShopTallCard'),
        eh = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    a.useEffect(() => {
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
        a.useEffect(() => {
            null == i || i(Q);
        }, [i]);
    let ex = (0, S.Z)({ analyticsLocations: $ }),
        eI = a.useRef(null),
        { handleUseNow: eE, isApplying: ev } = (0, R.W)({ product: t }),
        eS = () => {
            if (((0, m.xf)(), ex(), t.type === f.Z.AVATAR_DECORATION && null != er)) {
                c()(er.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, I.ps)({
                        initialSelectedDecoration: er,
                        analyticsLocations: $
                    });
                return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: er.id,
                    analyticsLocations: $
                });
        },
        eL = (e) => (n) => {
            (eI.current = n.currentTarget),
                (0, H.T)({
                    product: t,
                    category: s,
                    analyticsLocations: $,
                    analyticsSource: e,
                    returnRef: eI
                });
        },
        eT = eL(h.Z.COLLECTIBLES_SHOP_CARD),
        eN = eL(h.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        ek = () =>
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
        eO = () =>
            ed || eu
                ? (0, r.jsx)(y.U, {
                      className: z.priceTag,
                      isPartiallyPurchased: eu
                  })
                : ec
                  ? (0, r.jsx)(C.Text, {
                        variant: 'text-md/semibold',
                        className: z.priceTag,
                        children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, r.jsx)(D.Z, {
                        product: t,
                        discount: ei,
                        isPremiumUser: es,
                        className: z.priceTag
                    }),
        ej = () =>
            ec || d.tq
                ? null
                : el
                  ? (0, r.jsx)(K, { onClick: eN })
                  : (0, r.jsx)(w.Z, {
                        product: t,
                        returnRef: Q,
                        isGiftEasterEggEnabled: X,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eB = () => {
            if (ec && !es && !el) return ek();
            let e = ec
                ? {
                      submitting: ef,
                      submittingStartedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING,
                      submittingFinishedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                      onClick: async () => {
                          await (0, O.fK)(t.skuId),
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
                                children: ec ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: eo })
                            }),
                    ej()
                ]
            });
        };
    return (0, B.x6)(t) && null != ei && ei.discountPercentage < 0
        ? null
        : (0, r.jsx)(C.FocusRing, {
              children: (0, r.jsxs)(C.Clickable, {
                  innerRef: Q,
                  className: o()(eg ? z.shopCardDark : z.shopCard, {
                      [z.partiallyOwned]: eu,
                      [z.shopCardAnimation]: !ea && eb !== Z.D.NO_MOVEMENT,
                      [eg ? z.shopCardDarkHighlighted : z.shopCardHighlighted]: en,
                      [z.mysteryShopCard]: eh
                  }),
                  onBlur: () => et(!1),
                  onClick: eT,
                  id: 'shop-item-'.concat(t.skuId),
                  children: [
                      ec &&
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
                          children: (0, l.EQ)(t.type)
                              .with(f.Z.PROFILE_EFFECT, () =>
                                  (0, r.jsx)('div', {
                                      className: z.profileEffectShopPreview,
                                      children: (0, r.jsx)(L.Z, {
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
                                      c()(er.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                      (0, r.jsx)('div', {
                                          className: o()(z.avatarContainer, eh && z.mysteryAvatarContainer),
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
                          className: o()(z.cardText, { [z.cardTextBlur]: (null == er ? void 0 : er.type) === f.Z.PROFILE_EFFECT }),
                          children: [
                              (0, r.jsx)('div', { className: o()(z.cardBackground, eg ? z.darkCardBackground : z.lightCardBackground, (null == er ? void 0 : er.type) === f.Z.PROFILE_EFFECT ? z.cardLowOpacity : null) }),
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
                                          children: eO()
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
                          category: s,
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
