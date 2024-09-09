r(47120), r(627341);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(512722),
    l = r.n(o),
    c = r(278074),
    d = r(873546),
    u = r(180650),
    f = r(979554),
    p = r(399606),
    C = r(663002),
    _ = r(481060),
    m = r(37234),
    g = r(727637),
    h = r(607070),
    b = r(100527),
    E = r(906732),
    I = r(1585),
    x = r(333867),
    v = r(197115),
    T = r(300284),
    L = r(876917),
    S = r(642619),
    N = r(210887),
    O = r(74538),
    k = r(335131),
    B = r(1870),
    j = r(884697),
    P = r(664018),
    R = r(890249),
    Z = r(635552),
    A = r(724994),
    M = r(390698),
    y = r(813083),
    w = r(680942),
    H = r(558060),
    F = r(237031),
    D = r(616066),
    U = r(216541),
    G = r(832149),
    W = r(474936),
    V = r(689938),
    z = r(775409);
let Y = (e) => {
        let { children: t, onClick: r, ...n } = e;
        return (0, a.jsx)(_.Button, {
            fullWidth: !0,
            look: _.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), r();
            },
            ...n,
            children: t
        });
    },
    K = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)(_.Button, {
            color: _.ButtonColors.BRAND,
            look: _.Button.Looks.FILLED,
            size: _.ButtonSizes.ICON,
            className: i()(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            'aria-label': V.Z.Messages.PREVIEW,
            ...r,
            children: (0, a.jsx)(_.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: r, category: s, onMount: o, isGiftEasterEggEnabled: X, isPopularPicksRow: $, isInFeedView: q } = e,
        { analyticsLocations: J } = (0, E.ZP)([...($ ? [b.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []), ...(q ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
        Q = n.useRef(null),
        ee = (0, g.Z)(Q),
        [et, er] = n.useState(!1),
        ea = ee || et,
        [en] = t.items,
        es = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
        ei = O.ZP.canUseCollectibles(r),
        eo = (0, j.XM)(t, ei, !1),
        el = n.useMemo(() => (0, j.BH)(t, ei), [t, ei]),
        ec = (0, j.G1)(t),
        ed = (0, j.rN)(t),
        { isPurchased: eu, isPartiallyPurchased: ef } = (0, A.L)(t),
        [ep, eC] = (0, p.Wu)([B.Z], () => [B.Z.isClaiming === t.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId]),
        e_ = (0, p.e7)([N.Z], () => (0, C.wj)(N.Z.theme)),
        em = (0, R.m)('CollectiblesCollectedModal'),
        eg = (0, j.x6)(t) || em,
        eh = (0, j.Yq)(t.skuId),
        { hoverVariant: eb } = (0, P.E)('CollectiblesShopTallCard'),
        eE = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    n.useEffect(() => {
        let { current: e } = Q;
        if (null == e) return;
        let t = () => er(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        n.useEffect(() => {
            null == o || o(Q);
        }, [o]);
    let eI = (0, T.Z)({ analyticsLocations: J }),
        ex = n.useRef(null),
        { handleUseNow: ev, isApplying: eT } = (0, Z.W)({ product: t }),
        eL = () => {
            if (((0, m.xf)(), eI(), t.type === f.Z.AVATAR_DECORATION && null != en)) {
                l()(en.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, I.ps)({
                        initialSelectedDecoration: en,
                        analyticsLocations: J
                    });
                return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
                (0, S.H)({
                    initialSelectedEffectId: en.id,
                    analyticsLocations: J
                });
        },
        eS = (e) => (r) => {
            (ex.current = r.currentTarget),
                (0, F.T)({
                    product: t,
                    category: s,
                    analyticsLocations: J,
                    analyticsSource: e,
                    returnRef: ex
                });
        },
        eN = eS(b.Z.COLLECTIBLES_SHOP_CARD),
        eO = eS(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        ek = () =>
            (0, a.jsx)('div', {
                className: z.hoverUpsellContainer,
                children: (0, a.jsx)(v.Z, {
                    fullWidth: !0,
                    className: z.__invalid_premiumSubscribeButton,
                    disabled: eC,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: W.Si.TIER_2
                })
            }),
        eB = () =>
            eu || ef
                ? (0, a.jsx)(M.U, {
                      className: z.priceTag,
                      isPartiallyPurchased: ef
                  })
                : ec
                  ? (0, a.jsx)(_.Text, {
                        variant: 'text-md/semibold',
                        className: z.priceTag,
                        children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, a.jsx)(H.Z, {
                        product: t,
                        discount: el,
                        isPremiumUser: ei,
                        className: z.priceTag
                    }),
        ej = () =>
            ec || d.tq
                ? null
                : ed
                  ? (0, a.jsx)(K, { onClick: eO })
                  : (0, a.jsx)(w.Z, {
                        product: t,
                        returnRef: Q,
                        isGiftEasterEggEnabled: X,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eP = () => {
            if (ec && !ei && !ed) return ek();
            let e = ec
                ? {
                      submitting: ep,
                      submittingStartedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING,
                      submittingFinishedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                      onClick: async () => {
                          await (0, k.fK)(t.skuId),
                              (0, G.Z)({
                                  product: t,
                                  analyticsLocations: J
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, x.Z)({
                              skuId: t.skuId,
                              analyticsLocations: J,
                              returnRef: Q
                          })
                  };
            return (0, a.jsxs)('div', {
                className: z.buttonsContainer,
                children: [
                    ef
                        ? null
                        : eu
                          ? (0, a.jsx)(Y, {
                                disabled: eC,
                                onClick: eg ? ev : eL,
                                submitting: eT,
                                children: V.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, a.jsx)(Y, {
                                disabled: eC,
                                className: z.purchaseButton,
                                ...e,
                                children: ec ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: eo })
                            }),
                    ej()
                ]
            });
        };
    return (0, j.x6)(t) && null != el && el.discountPercentage < 0
        ? null
        : (0, a.jsx)(_.FocusRing, {
              children: (0, a.jsxs)(_.Clickable, {
                  innerRef: Q,
                  className: i()(e_ ? z.shopCardDark : z.shopCard, {
                      [z.partiallyOwned]: ef,
                      [z.shopCardAnimation]: !es && eb !== P.D.NO_MOVEMENT,
                      [e_ ? z.shopCardDarkHighlighted : z.shopCardHighlighted]: ea,
                      [z.mysteryShopCard]: eE
                  }),
                  onBlur: () => er(!1),
                  onClick: eN,
                  id: 'shop-item-'.concat(t.skuId),
                  children: [
                      ec &&
                          (0, a.jsx)(_.Tooltip, {
                              tooltipContentClassName: z.premiumWheelTooltipContent,
                              color: _.Tooltip.Colors.PRIMARY,
                              text: V.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                              children: (e) =>
                                  (0, a.jsx)(_.TextBadge, {
                                      ...e,
                                      className: z.premiumWheelBadge,
                                      text: (0, a.jsx)(_.NitroWheelIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: z.premiumWheel
                                      })
                                  })
                          }),
                      (0, a.jsx)('div', {
                          className: z.preview,
                          children: (0, c.EQ)(t.type)
                              .with(f.Z.PROFILE_EFFECT, () =>
                                  (0, a.jsx)('div', {
                                      className: z.profileEffectShopPreview,
                                      children: (0, a.jsx)(L.Z, {
                                          isHovering: ea,
                                          profileEffectId: en.id,
                                          isPurchased: eu,
                                          removeSetHeight: !0
                                      })
                                  })
                              )
                              .with(
                                  f.Z.AVATAR_DECORATION,
                                  () => (
                                      l()(en.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                      (0, a.jsx)('div', {
                                          className: i()(z.avatarContainer, eE && z.mysteryAvatarContainer),
                                          children: (0, a.jsx)(D.R, {
                                              item: en,
                                              user: r,
                                              isPurchased: eu,
                                              isHighlighted: ea
                                          })
                                      })
                                  )
                              )
                              .with(f.Z.BUNDLE, () =>
                                  (0, a.jsx)(U.d, {
                                      product: t,
                                      user: r,
                                      isPurchased: eu,
                                      isHighlighted: ea
                                  })
                              )
                              .otherwise(() => null)
                      }),
                      eu
                          ? (0, a.jsx)('div', {
                                className: z.checkmarkWrapper,
                                children: (0, a.jsx)(_.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 38,
                                    height: 38,
                                    className: z.checkmark
                                })
                            })
                          : null,
                      (0, a.jsxs)('div', {
                          className: i()(z.cardText, { [z.cardTextBlur]: (null == en ? void 0 : en.type) === f.Z.PROFILE_EFFECT }),
                          children: [
                              (0, a.jsx)('div', { className: i()(z.cardBackground, e_ ? z.darkCardBackground : z.lightCardBackground, (null == en ? void 0 : en.type) === f.Z.PROFILE_EFFECT ? z.cardLowOpacity : null) }),
                              (0, a.jsx)(_.Text, {
                                  variant: 'text-lg/bold',
                                  className: z.productName,
                                  children: t.name
                              }),
                              (0, a.jsxs)('div', {
                                  className: z.detailsWrapper,
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: ef ? void 0 : z.innerBlur,
                                          children: eB()
                                      }),
                                      (0, a.jsx)('div', {
                                          className: z.innerHover,
                                          children: eP()
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, a.jsx)(y.Z, {
                          category: s,
                          className: z.limitedTimeBadge,
                          display: 'card'
                      }),
                      eh &&
                          !ef &&
                          !eu &&
                          (0, a.jsx)(_.TextBadge, {
                              text: V.Z.Messages.NEW,
                              disableColor: !0,
                              className: z.newBadge
                          })
                  ]
              })
          });
};
