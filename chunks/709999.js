n(47120), n(627341);
var s = n(735250),
    r = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(512722),
    c = n.n(o),
    l = n(278074),
    d = n(873546),
    u = n(180650),
    f = n(979554),
    p = n(399606),
    g = n(663002),
    C = n(481060),
    _ = n(37234),
    m = n(727637),
    h = n(607070),
    b = n(100527),
    x = n(906732),
    E = n(1585),
    I = n(333867),
    v = n(197115),
    S = n(300284),
    L = n(876917),
    T = n(642619),
    N = n(210887),
    O = n(74538),
    k = n(335131),
    j = n(1870),
    R = n(884697),
    A = n(664018),
    P = n(890249),
    B = n(635552),
    Z = n(724994),
    M = n(390698),
    y = n(813083),
    w = n(680942),
    D = n(558060),
    F = n(237031),
    H = n(616066),
    U = n(216541),
    G = n(832149),
    W = n(474936),
    V = n(689938),
    Y = n(775409);
let z = (e) => {
        let { children: t, onClick: n, ...r } = e;
        return (0, s.jsx)(C.Button, {
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
        return (0, s.jsx)(C.Button, {
            color: C.ButtonColors.BRAND,
            look: C.Button.Looks.FILLED,
            size: C.ButtonSizes.ICON,
            className: i()(Y.previewButton, t),
            innerClassName: Y.previewButtonInner,
            'aria-label': V.Z.Messages.PREVIEW,
            ...n,
            children: (0, s.jsx)(C.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: a, onMount: o, isGiftEasterEggEnabled: X, isPopularPicksRow: q } = e,
        { analyticsLocations: $ } = (0, x.ZP)([...(q ? [b.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
        Q = r.useRef(null),
        J = (0, m.Z)(Q),
        [ee, et] = r.useState(!1),
        en = J || ee,
        [es] = t.items,
        er = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
        ea = O.ZP.canUseCollectibles(n),
        ei = (0, R.XM)(t, ea, !1),
        eo = r.useMemo(() => (0, R.BH)(t, ea), [t, ea]),
        ec = (0, R.G1)(t),
        el = (0, R.rN)(t),
        { isPurchased: ed, isPartiallyPurchased: eu } = (0, Z.L)(t),
        [ef, ep] = (0, p.Wu)([j.Z], () => [j.Z.isClaiming === t.skuId, null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId]),
        eg = (0, p.e7)([N.Z], () => (0, g.w)(N.Z.theme)),
        eC = (0, P.m)('CollectiblesCollectedModal'),
        e_ = (0, R.x6)(t) || eC,
        em = (0, R.Yq)(t.skuId),
        { hoverVariant: eh } = (0, A.E)('CollectiblesShopTallCard'),
        eb = a.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    r.useEffect(() => {
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
        r.useEffect(() => {
            null == o || o(Q);
        }, [o]);
    let ex = (0, S.Z)({ analyticsLocations: $ }),
        eE = r.useRef(null),
        { handleUseNow: eI, isApplying: ev } = (0, B.W)({ product: t }),
        eS = () => {
            if (((0, _.xf)(), ex(), t.type === f.Z.AVATAR_DECORATION && null != es)) {
                c()(es.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, E.ps)({
                        initialSelectedDecoration: es,
                        analyticsLocations: $
                    });
                return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: es.id,
                    analyticsLocations: $
                });
        },
        eL = (e) => (n) => {
            (eE.current = n.currentTarget),
                (0, F.T)({
                    product: t,
                    category: a,
                    analyticsLocations: $,
                    analyticsSource: e,
                    returnRef: eE
                });
        },
        eT = eL(b.Z.COLLECTIBLES_SHOP_CARD),
        eN = eL(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eO = () =>
            (0, s.jsx)('div', {
                className: Y.hoverUpsellContainer,
                children: (0, s.jsx)(v.Z, {
                    fullWidth: !0,
                    className: Y.__invalid_premiumSubscribeButton,
                    disabled: ep,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: W.Si.TIER_2
                })
            }),
        ek = () =>
            ed || eu
                ? (0, s.jsx)(M.U, {
                      className: Y.priceTag,
                      isPartiallyPurchased: eu
                  })
                : ec
                  ? (0, s.jsx)(C.Text, {
                        variant: 'text-md/semibold',
                        className: Y.priceTag,
                        children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, s.jsx)(D.Z, {
                        product: t,
                        discount: eo,
                        isPremiumUser: ea,
                        className: Y.priceTag
                    }),
        ej = () =>
            ec || d.tq
                ? null
                : el
                  ? (0, s.jsx)(K, { onClick: eN })
                  : (0, s.jsx)(w.Z, {
                        product: t,
                        returnRef: Q,
                        isGiftEasterEggEnabled: X,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eR = () => {
            if (ec && !ea && !el) return eO();
            let e = ec
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
                          (0, I.Z)({
                              skuId: t.skuId,
                              analyticsLocations: $,
                              returnRef: Q
                          })
                  };
            return (0, s.jsxs)('div', {
                className: Y.buttonsContainer,
                children: [
                    eu
                        ? null
                        : ed
                          ? (0, s.jsx)(z, {
                                disabled: ep,
                                onClick: e_ ? eI : eS,
                                submitting: ev,
                                children: V.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, s.jsx)(z, {
                                disabled: ep,
                                className: Y.purchaseButton,
                                ...e,
                                children: ec ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ei })
                            }),
                    ej()
                ]
            });
        };
    return (0, R.x6)(t) && null != eo && eo.discountPercentage < 0
        ? null
        : (0, s.jsx)(C.FocusRing, {
              children: (0, s.jsxs)(C.Clickable, {
                  innerRef: Q,
                  className: i()(eg ? Y.shopCardDark : Y.shopCard, {
                      [Y.partiallyOwned]: eu,
                      [Y.shopCardAnimation]: !er && eh !== A.D.NO_MOVEMENT,
                      [eg ? Y.shopCardDarkHighlighted : Y.shopCardHighlighted]: en,
                      [Y.mysteryShopCard]: eb
                  }),
                  onBlur: () => et(!1),
                  onClick: eT,
                  id: 'shop-item-'.concat(t.skuId),
                  children: [
                      ec &&
                          (0, s.jsx)(C.Tooltip, {
                              tooltipContentClassName: Y.premiumWheelTooltipContent,
                              color: C.Tooltip.Colors.PRIMARY,
                              text: V.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                              children: (e) =>
                                  (0, s.jsx)(C.TextBadge, {
                                      ...e,
                                      className: Y.premiumWheelBadge,
                                      text: (0, s.jsx)(C.NitroWheelIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: Y.premiumWheel
                                      })
                                  })
                          }),
                      (0, s.jsx)('div', {
                          className: Y.preview,
                          children: (0, l.EQ)(t.type)
                              .with(f.Z.PROFILE_EFFECT, () =>
                                  (0, s.jsx)('div', {
                                      className: Y.profileEffectShopPreview,
                                      children: (0, s.jsx)(L.Z, {
                                          isHovering: en,
                                          profileEffectId: es.id,
                                          isPurchased: ed,
                                          removeSetHeight: !0
                                      })
                                  })
                              )
                              .with(
                                  f.Z.AVATAR_DECORATION,
                                  () => (
                                      c()(es.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                      (0, s.jsx)('div', {
                                          className: i()(Y.avatarContainer, eb && Y.mysteryAvatarContainer),
                                          children: (0, s.jsx)(H.R, {
                                              item: es,
                                              user: n,
                                              isPurchased: ed,
                                              isHighlighted: en
                                          })
                                      })
                                  )
                              )
                              .with(f.Z.BUNDLE, () =>
                                  (0, s.jsx)(U.d, {
                                      product: t,
                                      user: n,
                                      isPurchased: ed,
                                      isHighlighted: en
                                  })
                              )
                              .otherwise(() => null)
                      }),
                      ed
                          ? (0, s.jsx)('div', {
                                className: Y.checkmarkWrapper,
                                children: (0, s.jsx)(C.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 38,
                                    height: 38,
                                    className: Y.checkmark
                                })
                            })
                          : null,
                      (0, s.jsxs)('div', {
                          className: i()(Y.cardText, { [Y.cardTextBlur]: (null == es ? void 0 : es.type) === f.Z.PROFILE_EFFECT }),
                          children: [
                              (0, s.jsx)('div', { className: i()(Y.cardBackground, eg ? Y.darkCardBackground : Y.lightCardBackground, (null == es ? void 0 : es.type) === f.Z.PROFILE_EFFECT ? Y.cardLowOpacity : null) }),
                              (0, s.jsx)(C.Text, {
                                  variant: 'text-lg/bold',
                                  className: Y.productName,
                                  children: t.name
                              }),
                              (0, s.jsxs)('div', {
                                  className: Y.detailsWrapper,
                                  children: [
                                      (0, s.jsx)('div', {
                                          className: eu ? void 0 : Y.innerBlur,
                                          children: ek()
                                      }),
                                      (0, s.jsx)('div', {
                                          className: Y.innerHover,
                                          children: eR()
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, s.jsx)(y.Z, {
                          category: a,
                          className: Y.limitedTimeBadge,
                          display: 'card'
                      }),
                      em &&
                          !eu &&
                          !ed &&
                          (0, s.jsx)(C.TextBadge, {
                              text: V.Z.Messages.NEW,
                              disableColor: !0,
                              className: Y.newBadge
                          })
                  ]
              })
          });
};
