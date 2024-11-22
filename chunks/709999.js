n(47120), n(627341);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    m = n(979554),
    h = n(399606),
    p = n(622535),
    f = n(663002),
    g = n(481060),
    C = n(37234),
    b = n(727637),
    v = n(607070),
    x = n(100527),
    _ = n(906732),
    k = n(1585),
    I = n(333867),
    j = n(197115),
    E = n(300284),
    S = n(876917),
    T = n(642619),
    N = n(210887),
    B = n(74538),
    y = n(335131),
    L = n(1870),
    P = n(429368),
    Z = n(884697),
    O = n(664018),
    w = n(890249),
    A = n(228624),
    R = n(635552),
    H = n(905357),
    F = n(724994),
    V = n(297651),
    D = n(390698),
    M = n(813083),
    W = n(680942),
    U = n(558060),
    G = n(237031),
    z = n(453713),
    K = n(616066),
    $ = n(216541),
    Y = n(67409),
    J = n(58201),
    q = n(201964),
    Q = n(361110),
    X = n(832149),
    ee = n(474936),
    et = n(388032),
    en = n(352177);
let er = (e) => {
        let { children: t, onClick: n, ...a } = e;
        return (0, r.jsx)(g.Button, {
            fullWidth: !0,
            look: g.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...a,
            children: t
        });
    },
    ea = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.Button, {
            color: g.ButtonColors.BRAND,
            look: g.Button.Looks.FILLED,
            size: g.ButtonSizes.ICON,
            className: s()(en.previewButton, t),
            innerClassName: en.previewButtonInner,
            'aria-label': et.intl.string(et.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    ei = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: en.profileEffectShopPreview,
            children: (0, r.jsx)(S.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: a,
                removeSetHeight: !0
            })
        });
    },
    es = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: a, user: i, item: l } = e;
        return (0, r.jsx)('div', {
            className: s()(en.avatarContainer, t && en.mysteryAvatarContainer),
            children: (0, r.jsx)(K.R, {
                item: l,
                user: i,
                isPurchased: a,
                isHighlighted: n
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: i, onMount: l, isGiftEasterEggEnabled: S, isInFeedView: K } = e,
        { analyticsLocations: el } = (0, _.ZP)([...(K ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
        eo = a.useRef(null),
        { handleCardVisibilityChange: ec } = (0, V.E)(t, K ? 'home' : 'full'),
        ed = (0, b.Z)(eo),
        [eu, em] = a.useState(!1),
        eh = ed || eu,
        ep = (0, Q.f)(t),
        { previewingVariantIndex: ef } = ep,
        eg = (0, H.k)(t),
        eC = (0, h.e7)([v.Z], () => v.Z.useReducedMotion),
        eb = B.ZP.canUseCollectibles(n),
        ev = (0, Z.XM)(t, eb, !1),
        ex = a.useMemo(() => (0, Z.BH)(t, eb), [t, eb]),
        e_ = (0, Z.G1)(t),
        ek = (0, Z.rN)(t),
        [eI, ej, eE] = (0, h.Wu)([L.Z], () => [L.Z.isClaiming === t.skuId, null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId, L.Z.purchases]),
        eS = (0, q.o)(t, eE, ef),
        eT = (0, h.e7)([N.Z], () => (0, f.wj)(N.Z.theme)),
        eN = (0, w.m)('CollectiblesCollectedModal'),
        eB = (0, Z.x6)(t) || eN,
        ey = (0, Z.Yq)(t.skuId),
        { hoverVariant: eL } = (0, O.E)('CollectiblesShopTallCard'),
        eP = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
        eZ = (0, A.hv)('CollectiblesShopTallCard'),
        eO = (0, P.o)(t, eE),
        ew = (0, J.W)(t, eO),
        { isPurchased: eA, isPartiallyOwnedBundle: eR } = (0, F.L)(ew),
        eH = null !== ef ? ef : eO,
        [eF, eV] = a.useState(!1);
    a.useEffect(() => {
        let { current: e } = eo;
        if (null == e) return;
        let t = () => em(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        a.useEffect(() => {
            null == l || l(eo);
        }, [l]);
    let eD = (0, E.Z)({ analyticsLocations: el }),
        eM = a.useRef(null),
        { handleUseNow: eW, isApplying: eU } = (0, R.W)({ product: ew }),
        eG = () => {
            if (((0, C.xf)(), eD(), t.type === m.Z.AVATAR_DECORATION && null != eS)) {
                o()(eS.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: eS,
                        analyticsLocations: el
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: eS.id,
                    analyticsLocations: el
                });
        },
        ez = (e) => (n) => {
            (eM.current = n.currentTarget),
                (0, G.T)({
                    product: t,
                    category: i,
                    analyticsLocations: el,
                    analyticsSource: e,
                    returnRef: eM
                });
        },
        eK = ez(x.Z.COLLECTIBLES_SHOP_CARD),
        e$ = ez(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eY = () =>
            (0, r.jsx)('div', {
                className: en.hoverUpsellContainer,
                children: (0, r.jsx)(j.Z, {
                    fullWidth: !0,
                    className: en.__invalid_premiumSubscribeButton,
                    disabled: ej,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: et.intl.string(et.t.sEAnVF),
                    subscriptionTier: ee.Si.TIER_2
                })
            }),
        eJ = () =>
            eA || eR
                ? (0, r.jsx)(D.U, {
                      className: en.priceTag,
                      isPartiallyPurchased: eR
                  })
                : e_
                  ? (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        className: en.priceTag,
                        children: et.intl.string(et.t.rt69oq)
                    })
                  : (0, r.jsx)(U.Z, {
                        product: t,
                        discount: ex,
                        isPremiumUser: eb,
                        className: en.priceTag
                    }),
        eq = () =>
            e_ || d.tq
                ? null
                : ek
                  ? (0, r.jsx)(ea, { onClick: e$ })
                  : (0, r.jsx)(W.Z, {
                        product: t,
                        selectedVariantIndex: eO,
                        returnRef: eo,
                        isGiftEasterEggEnabled: S,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eQ = () => {
            if (e_ && !eb && !ek) return eY();
            let e = e_
                ? {
                      submitting: eI,
                      submittingStartedLabel: et.intl.string(et.t['TYw+9v']),
                      submittingFinishedLabel: et.intl.string(et.t.Pg1UPz),
                      onClick: async () => {
                          await (0, y.fK)(t.skuId),
                              (0, X.Z)({
                                  product: t,
                                  analyticsLocations: el
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, I.Z)({
                              skuId: (0, Y.S)({
                                  product: t,
                                  selectedVariantIndex: eO
                              }),
                              analyticsLocations: el,
                              returnRef: eo,
                              variantsReturnStyle: eZ
                          })
                  };
            return (0, r.jsxs)('div', {
                className: en.buttonsContainer,
                children: [
                    eR
                        ? null
                        : eA
                          ? (0, r.jsx)(er, {
                                disabled: ej,
                                onClick: eB ? eW : eG,
                                submitting: eU,
                                children: et.intl.string(et.t.MAS7uL)
                            })
                          : (0, r.jsx)(er, {
                                disabled: ej,
                                className: en.purchaseButton,
                                ...e,
                                children: e_ ? et.intl.string(et.t.zp6caG) : et.intl.formatToPlainString(et.t['cNSL/v'], { price: ev })
                            }),
                    eq()
                ]
            });
        };
    return (0, Z.x6)(t) && null != ex && ex.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: ec,
              threshold: 0,
              children: (0, r.jsx)(g.FocusRing, {
                  children: (0, r.jsxs)(g.Clickable, {
                      innerRef: eo,
                      className: s()(eT ? en.shopCardDark : en.shopCard, {
                          [en.partiallyOwned]: eR,
                          [en.shopCardAnimation]: !eC && eL !== O.D.NO_MOVEMENT,
                          [eT ? en.shopCardDarkHighlighted : en.shopCardHighlighted]: eh,
                          [en.mysteryShopCard]: eP
                      }),
                      onBlur: () => em(!1),
                      onClick: eK,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          e_ &&
                              (0, r.jsx)(g.Tooltip, {
                                  tooltipContentClassName: en.premiumWheelTooltipContent,
                                  color: g.Tooltip.Colors.PRIMARY,
                                  text: et.intl.string(et.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(g.TextBadge, {
                                          ...e,
                                          className: en.premiumWheelBadge,
                                          text: (0, r.jsx)(g.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: en.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: en.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(ei, {
                                          isHighlighted: eh,
                                          profileEffectId: eS.id,
                                          isPurchased: eA
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(eS.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)(es, {
                                              item: eS,
                                              user: n,
                                              isStormMysteryItem: eP,
                                              isHighlighted: eh,
                                              isPurchased: eA
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)($.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: eA,
                                          isHighlighted: eh
                                      })
                                  )
                                  .with(m.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eH];
                                      return (0, c.EQ)(e.type)
                                          .with(m.Z.PROFILE_EFFECT, () => {
                                              let [t] = e.items;
                                              return (0, r.jsx)(ei, {
                                                  isHighlighted: eh,
                                                  profileEffectId: t.id,
                                                  isPurchased: eA && !eF
                                              });
                                          })
                                          .with(m.Z.AVATAR_DECORATION, () => {
                                              let [t] = e.items;
                                              return (
                                                  o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                  (0, r.jsx)(es, {
                                                      item: t,
                                                      user: n,
                                                      isStormMysteryItem: eP,
                                                      isHighlighted: eh,
                                                      isPurchased: eA
                                                  })
                                              );
                                          })
                                          .otherwise(() => null);
                                  })
                                  .otherwise(() => null)
                          }),
                          eA
                              ? (0, r.jsx)('div', {
                                    className: en.checkmarkWrapper,
                                    children: (0, r.jsx)(g.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: en.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: s()(en.cardText, {
                                  [en.cardTextBlur]: (null == eS ? void 0 : eS.type) === m.Z.PROFILE_EFFECT,
                                  [en.variantsGroup]: t.type === m.Z.VARIANTS_GROUP
                              }),
                              children: [
                                  (0, r.jsx)('div', { className: s()(en.cardBackground, eT ? en.darkCardBackground : en.lightCardBackground, (null == eS ? void 0 : eS.type) === m.Z.PROFILE_EFFECT ? en.cardLowOpacity : null) }),
                                  (0, r.jsx)(g.Text, {
                                      variant: 'text-lg/bold',
                                      className: en.productName,
                                      children: eg
                                  }),
                                  t.type === m.Z.VARIANTS_GROUP
                                      ? (0, r.jsx)(z.P, {
                                            variantGroupProduct: t,
                                            previewingVariantIndexProps: ep,
                                            setIsHoveringOnSwitch: eV,
                                            purchases: eE,
                                            minimal: !ed
                                        })
                                      : null,
                                  (0, r.jsxs)('div', {
                                      className: en.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: eR ? void 0 : en.innerBlur,
                                              children: eJ()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: en.innerHover,
                                              children: eQ()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(M.Z, {
                              category: i,
                              className: en.limitedTimeBadge,
                              display: 'card'
                          }),
                          ey &&
                              !eR &&
                              !eA &&
                              (0, r.jsx)(g.TextBadge, {
                                  text: et.intl.string(et.t.y2b7CA),
                                  disableColor: !0,
                                  className: en.newBadge
                              })
                      ]
                  })
              })
          });
};
