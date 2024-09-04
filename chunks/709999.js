n(47120), n(627341);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(512722),
    l = n.n(i),
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
    T = n(300284),
    L = n(876917),
    S = n(642619),
    N = n(210887),
    O = n(74538),
    k = n(335131),
    B = n(1870),
    j = n(884697),
    Z = n(664018),
    P = n(890249),
    A = n(635552),
    R = n(724994),
    y = n(390698),
    M = n(813083),
    w = n(680942),
    H = n(558060),
    D = n(237031),
    F = n(616066),
    U = n(216541),
    G = n(832149),
    W = n(474936),
    V = n(689938),
    z = n(775409);
let Y = (e) => {
        let { children: t, onClick: n, ...r } = e;
        return (0, a.jsx)(C.Button, {
            fullWidth: !0,
            look: C.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...r,
            children: t
        });
    },
    K = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)(C.Button, {
            color: C.ButtonColors.BRAND,
            look: C.Button.Looks.FILLED,
            size: C.ButtonSizes.ICON,
            className: o()(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            'aria-label': V.Z.Messages.PREVIEW,
            ...n,
            children: (0, a.jsx)(C.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: s, onMount: i, isGiftEasterEggEnabled: X, isPopularPicksRow: q } = e,
        { analyticsLocations: $ } = (0, x.ZP)([...(q ? [h.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []), h.Z.COLLECTIBLES_SHOP_CARD]),
        J = r.useRef(null),
        Q = (0, _.Z)(J),
        [ee, et] = r.useState(!1),
        en = Q || ee,
        [ea] = t.items,
        er = (0, p.e7)([b.Z], () => b.Z.useReducedMotion),
        es = O.ZP.canUseCollectibles(n),
        eo = (0, j.XM)(t, es, !1),
        ei = r.useMemo(() => (0, j.BH)(t, es), [t, es]),
        el = (0, j.G1)(t),
        ec = (0, j.rN)(t),
        { isPurchased: ed, isPartiallyPurchased: eu } = (0, R.L)(t),
        [ef, ep] = (0, p.Wu)([B.Z], () => [B.Z.isClaiming === t.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId]),
        eg = (0, p.e7)([N.Z], () => (0, g.wj)(N.Z.theme)),
        eC = (0, P.m)('CollectiblesCollectedModal'),
        em = (0, j.x6)(t) || eC,
        e_ = (0, j.Yq)(t.skuId),
        { hoverVariant: eb } = (0, Z.E)('CollectiblesShopTallCard'),
        eh = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    r.useEffect(() => {
        let { current: e } = J;
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
        r.useEffect(() => {
            null == i || i(J);
        }, [i]);
    let ex = (0, T.Z)({ analyticsLocations: $ }),
        eI = r.useRef(null),
        { handleUseNow: eE, isApplying: ev } = (0, A.W)({ product: t }),
        eT = () => {
            if (((0, m.xf)(), ex(), t.type === f.Z.AVATAR_DECORATION && null != ea)) {
                l()(ea.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, I.ps)({
                        initialSelectedDecoration: ea,
                        analyticsLocations: $
                    });
                return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
                (0, S.H)({
                    initialSelectedEffectId: ea.id,
                    analyticsLocations: $
                });
        },
        eL = (e) => (n) => {
            (eI.current = n.currentTarget),
                (0, D.T)({
                    product: t,
                    category: s,
                    analyticsLocations: $,
                    analyticsSource: e,
                    returnRef: eI
                });
        },
        eS = eL(h.Z.COLLECTIBLES_SHOP_CARD),
        eN = eL(h.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eO = () =>
            (0, a.jsx)('div', {
                className: z.hoverUpsellContainer,
                children: (0, a.jsx)(v.Z, {
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
                ? (0, a.jsx)(y.U, {
                      className: z.priceTag,
                      isPartiallyPurchased: eu
                  })
                : el
                  ? (0, a.jsx)(C.Text, {
                        variant: 'text-md/semibold',
                        className: z.priceTag,
                        children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, a.jsx)(H.Z, {
                        product: t,
                        discount: ei,
                        isPremiumUser: es,
                        className: z.priceTag
                    }),
        eB = () =>
            el || d.tq
                ? null
                : ec
                  ? (0, a.jsx)(K, { onClick: eN })
                  : (0, a.jsx)(w.Z, {
                        product: t,
                        returnRef: J,
                        isGiftEasterEggEnabled: X,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        ej = () => {
            if (el && !es && !ec) return eO();
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
                              returnRef: J
                          })
                  };
            return (0, a.jsxs)('div', {
                className: z.buttonsContainer,
                children: [
                    eu
                        ? null
                        : ed
                          ? (0, a.jsx)(Y, {
                                disabled: ep,
                                onClick: em ? eE : eT,
                                submitting: ev,
                                children: V.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, a.jsx)(Y, {
                                disabled: ep,
                                className: z.purchaseButton,
                                ...e,
                                children: el ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: eo })
                            }),
                    eB()
                ]
            });
        };
    return (0, j.x6)(t) && null != ei && ei.discountPercentage < 0
        ? null
        : (0, a.jsx)(C.FocusRing, {
              children: (0, a.jsxs)(C.Clickable, {
                  innerRef: J,
                  className: o()(eg ? z.shopCardDark : z.shopCard, {
                      [z.partiallyOwned]: eu,
                      [z.shopCardAnimation]: !er && eb !== Z.D.NO_MOVEMENT,
                      [eg ? z.shopCardDarkHighlighted : z.shopCardHighlighted]: en,
                      [z.mysteryShopCard]: eh
                  }),
                  onBlur: () => et(!1),
                  onClick: eS,
                  id: 'shop-item-'.concat(t.skuId),
                  children: [
                      el &&
                          (0, a.jsx)(C.Tooltip, {
                              tooltipContentClassName: z.premiumWheelTooltipContent,
                              color: C.Tooltip.Colors.PRIMARY,
                              text: V.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                              children: (e) =>
                                  (0, a.jsx)(C.TextBadge, {
                                      ...e,
                                      className: z.premiumWheelBadge,
                                      text: (0, a.jsx)(C.NitroWheelIcon, {
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
                                          isHovering: en,
                                          profileEffectId: ea.id,
                                          isPurchased: ed,
                                          removeSetHeight: !0
                                      })
                                  })
                              )
                              .with(
                                  f.Z.AVATAR_DECORATION,
                                  () => (
                                      l()(ea.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                      (0, a.jsx)('div', {
                                          className: o()(z.avatarContainer, eh && z.mysteryAvatarContainer),
                                          children: (0, a.jsx)(F.R, {
                                              item: ea,
                                              user: n,
                                              isPurchased: ed,
                                              isHighlighted: en
                                          })
                                      })
                                  )
                              )
                              .with(f.Z.BUNDLE, () =>
                                  (0, a.jsx)(U.d, {
                                      product: t,
                                      user: n,
                                      isPurchased: ed,
                                      isHighlighted: en
                                  })
                              )
                              .otherwise(() => null)
                      }),
                      ed
                          ? (0, a.jsx)('div', {
                                className: z.checkmarkWrapper,
                                children: (0, a.jsx)(C.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 38,
                                    height: 38,
                                    className: z.checkmark
                                })
                            })
                          : null,
                      (0, a.jsxs)('div', {
                          className: o()(z.cardText, { [z.cardTextBlur]: (null == ea ? void 0 : ea.type) === f.Z.PROFILE_EFFECT }),
                          children: [
                              (0, a.jsx)('div', { className: o()(z.cardBackground, eg ? z.darkCardBackground : z.lightCardBackground, (null == ea ? void 0 : ea.type) === f.Z.PROFILE_EFFECT ? z.cardLowOpacity : null) }),
                              (0, a.jsx)(C.Text, {
                                  variant: 'text-lg/bold',
                                  className: z.productName,
                                  children: t.name
                              }),
                              (0, a.jsxs)('div', {
                                  className: z.detailsWrapper,
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: eu ? void 0 : z.innerBlur,
                                          children: ek()
                                      }),
                                      (0, a.jsx)('div', {
                                          className: z.innerHover,
                                          children: ej()
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, a.jsx)(M.Z, {
                          category: s,
                          className: z.limitedTimeBadge,
                          display: 'card'
                      }),
                      e_ &&
                          !eu &&
                          !ed &&
                          (0, a.jsx)(C.TextBadge, {
                              text: V.Z.Messages.NEW,
                              disableColor: !0,
                              className: z.newBadge
                          })
                  ]
              })
          });
};
