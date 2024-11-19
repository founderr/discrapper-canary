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
    x = n(607070),
    v = n(100527),
    _ = n(906732),
    k = n(1585),
    j = n(333867),
    E = n(197115),
    S = n(300284),
    I = n(876917),
    T = n(642619),
    N = n(210887),
    B = n(74538),
    y = n(335131),
    L = n(1870),
    Z = n(429368),
    P = n(884697),
    O = n(664018),
    w = n(890249),
    A = n(228624),
    R = n(635552),
    H = n(905357),
    F = n(724994),
    D = n(297651),
    V = n(390698),
    M = n(813083),
    W = n(680942),
    U = n(558060),
    z = n(237031),
    G = n(453713),
    K = n(616066),
    $ = n(216541),
    J = n(67409),
    Y = n(201964),
    q = n(832149),
    Q = n(474936),
    X = n(388032),
    ee = n(901698);
let et = (e) => {
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
    en = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.Button, {
            color: g.ButtonColors.BRAND,
            look: g.Button.Looks.FILLED,
            size: g.ButtonSizes.ICON,
            className: s()(ee.previewButton, t),
            innerClassName: ee.previewButtonInner,
            'aria-label': X.intl.string(X.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    er = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: ee.profileEffectShopPreview,
            children: (0, r.jsx)(I.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: a,
                removeSetHeight: !0
            })
        });
    },
    ea = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: a, user: i, item: l } = e;
        return (0, r.jsx)('div', {
            className: s()(ee.avatarContainer, t && ee.mysteryAvatarContainer),
            children: (0, r.jsx)(K.R, {
                item: l,
                user: i,
                isPurchased: a,
                isHighlighted: n
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: i, onMount: l, isGiftEasterEggEnabled: I, isInFeedView: K } = e,
        { analyticsLocations: ei } = (0, _.ZP)([...(K ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
        es = a.useRef(null),
        { handleCardVisibilityChange: el } = (0, D.E)(t, K ? 'home' : 'full'),
        eo = (0, b.Z)(es),
        [ec, ed] = a.useState(!1),
        eu = eo || ec,
        em = (0, Y.o)(t),
        eh = (0, H.k)(t),
        ep = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
        ef = B.ZP.canUseCollectibles(n),
        eg = (0, P.XM)(t, ef, !1),
        eC = a.useMemo(() => (0, P.BH)(t, ef), [t, ef]),
        eb = (0, P.G1)(t),
        ex = (0, P.rN)(t),
        { isPurchased: ev, isPartiallyPurchased: e_ } = (0, F.L)(t),
        [ek, ej] = (0, h.Wu)([L.Z], () => [L.Z.isClaiming === t.skuId, null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId]),
        eE = (0, h.e7)([N.Z], () => (0, f.wj)(N.Z.theme)),
        eS = (0, w.m)('CollectiblesCollectedModal'),
        eI = (0, P.x6)(t) || eS,
        eT = (0, P.Yq)(t.skuId),
        { hoverVariant: eN } = (0, O.E)('CollectiblesShopTallCard'),
        eB = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
        ey = (0, A.h)('CollectiblesShopTallCard'),
        eL = (0, Z.ff)(t),
        eZ = (0, Z.o0)(t),
        eP = null !== eL ? eL : eZ,
        eO = (0, Z.i6)(t);
    a.useEffect(() => {
        let { current: e } = es;
        if (null == e) return;
        let t = () => ed(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        a.useEffect(() => {
            null == l || l(es);
        }, [l]);
    let ew = (0, S.Z)({ analyticsLocations: ei }),
        eA = a.useRef(null),
        { handleUseNow: eR, isApplying: eH } = (0, R.W)({ product: t }),
        eF = () => {
            if (((0, C.xf)(), ew(), t.type === m.Z.AVATAR_DECORATION && null != em)) {
                o()(em.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: em,
                        analyticsLocations: ei
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: em.id,
                    analyticsLocations: ei
                });
        },
        eD = (e) => (n) => {
            (eA.current = n.currentTarget),
                (0, z.T)({
                    product: t,
                    category: i,
                    analyticsLocations: ei,
                    analyticsSource: e,
                    returnRef: eA
                });
        },
        eV = eD(v.Z.COLLECTIBLES_SHOP_CARD),
        eM = eD(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eW = () =>
            (0, r.jsx)('div', {
                className: ee.hoverUpsellContainer,
                children: (0, r.jsx)(E.Z, {
                    fullWidth: !0,
                    className: ee.__invalid_premiumSubscribeButton,
                    disabled: ej,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: X.intl.string(X.t.sEAnVF),
                    subscriptionTier: Q.Si.TIER_2
                })
            }),
        eU = () =>
            ev || e_
                ? (0, r.jsx)(V.U, {
                      className: ee.priceTag,
                      isPartiallyPurchased: e_
                  })
                : eb
                  ? (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        className: ee.priceTag,
                        children: X.intl.string(X.t.rt69oq)
                    })
                  : (0, r.jsx)(U.Z, {
                        product: t,
                        discount: eC,
                        isPremiumUser: ef,
                        className: ee.priceTag
                    }),
        ez = () =>
            eb || d.tq
                ? null
                : ex
                  ? (0, r.jsx)(en, { onClick: eM })
                  : (0, r.jsx)(W.Z, {
                        product: t,
                        selectedVariantIndex: eZ,
                        returnRef: es,
                        isGiftEasterEggEnabled: I,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eG = () => {
            if (eb && !ef && !ex) return eW();
            let e = eb
                ? {
                      submitting: ek,
                      submittingStartedLabel: X.intl.string(X.t['TYw+9v']),
                      submittingFinishedLabel: X.intl.string(X.t.Pg1UPz),
                      onClick: async () => {
                          await (0, y.fK)(t.skuId),
                              (0, q.Z)({
                                  product: t,
                                  analyticsLocations: ei
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, j.Z)({
                              skuId: (0, J.S)({
                                  product: t,
                                  selectedVariantIndex: eZ
                              }),
                              analyticsLocations: ei,
                              returnRef: es,
                              variantsReturnStyle: ey
                          })
                  };
            return (0, r.jsxs)('div', {
                className: ee.buttonsContainer,
                children: [
                    e_
                        ? null
                        : ev
                          ? (0, r.jsx)(et, {
                                disabled: ej,
                                onClick: eI ? eR : eF,
                                submitting: eH,
                                children: X.intl.string(X.t.MAS7uL)
                            })
                          : (0, r.jsx)(et, {
                                disabled: ej,
                                className: ee.purchaseButton,
                                ...e,
                                children: eb ? X.intl.string(X.t.zp6caG) : X.intl.formatToPlainString(X.t['cNSL/v'], { price: eg })
                            }),
                    ez()
                ]
            });
        };
    return (0, P.x6)(t) && null != eC && eC.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: el,
              threshold: 0,
              children: (0, r.jsx)(g.FocusRing, {
                  children: (0, r.jsxs)(g.Clickable, {
                      innerRef: es,
                      className: s()(eE ? ee.shopCardDark : ee.shopCard, {
                          [ee.partiallyOwned]: e_,
                          [ee.shopCardAnimation]: !ep && eN !== O.D.NO_MOVEMENT,
                          [eE ? ee.shopCardDarkHighlighted : ee.shopCardHighlighted]: eu,
                          [ee.mysteryShopCard]: eB
                      }),
                      onBlur: () => ed(!1),
                      onClick: eV,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          eb &&
                              (0, r.jsx)(g.Tooltip, {
                                  tooltipContentClassName: ee.premiumWheelTooltipContent,
                                  color: g.Tooltip.Colors.PRIMARY,
                                  text: X.intl.string(X.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(g.TextBadge, {
                                          ...e,
                                          className: ee.premiumWheelBadge,
                                          text: (0, r.jsx)(g.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: ee.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: ee.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(er, {
                                          isHighlighted: eu,
                                          profileEffectId: em.id,
                                          isPurchased: ev
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(em.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)(ea, {
                                              item: em,
                                              user: n,
                                              isStormMysteryItem: eB,
                                              isHighlighted: eu,
                                              isPurchased: ev
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)($.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: ev,
                                          isHighlighted: eu
                                      })
                                  )
                                  .with(m.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eP];
                                      return (0, c.EQ)(e.type)
                                          .with(m.Z.PROFILE_EFFECT, () => {
                                              let [t] = e.items;
                                              return (0, r.jsx)(er, {
                                                  isHighlighted: eu,
                                                  profileEffectId: t.id,
                                                  isPurchased: ev && !eO
                                              });
                                          })
                                          .with(m.Z.AVATAR_DECORATION, () => {
                                              let [t] = e.items;
                                              return (
                                                  o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                  (0, r.jsx)(ea, {
                                                      item: t,
                                                      user: n,
                                                      isStormMysteryItem: eB,
                                                      isHighlighted: eu,
                                                      isPurchased: ev
                                                  })
                                              );
                                          })
                                          .otherwise(() => null);
                                  })
                                  .otherwise(() => null)
                          }),
                          ev
                              ? (0, r.jsx)('div', {
                                    className: ee.checkmarkWrapper,
                                    children: (0, r.jsx)(g.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: ee.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: s()(ee.cardText, {
                                  [ee.cardTextBlur]: (null == em ? void 0 : em.type) === m.Z.PROFILE_EFFECT,
                                  [ee.variantsGroup]: t.type === m.Z.VARIANTS_GROUP
                              }),
                              children: [
                                  (0, r.jsx)('div', { className: s()(ee.cardBackground, eE ? ee.darkCardBackground : ee.lightCardBackground, (null == em ? void 0 : em.type) === m.Z.PROFILE_EFFECT ? ee.cardLowOpacity : null) }),
                                  (0, r.jsx)(g.Text, {
                                      variant: 'text-lg/bold',
                                      className: ee.productName,
                                      children: eh
                                  }),
                                  t.type === m.Z.VARIANTS_GROUP
                                      ? (0, r.jsx)(G.P, {
                                            variantGroupProduct: t,
                                            minimal: !eo
                                        })
                                      : null,
                                  (0, r.jsxs)('div', {
                                      className: ee.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: e_ ? void 0 : ee.innerBlur,
                                              children: eU()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: ee.innerHover,
                                              children: eG()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(M.Z, {
                              category: i,
                              className: ee.limitedTimeBadge,
                              display: 'card'
                          }),
                          eT &&
                              !e_ &&
                              !ev &&
                              (0, r.jsx)(g.TextBadge, {
                                  text: X.intl.string(X.t.y2b7CA),
                                  disableColor: !0,
                                  className: ee.newBadge
                              })
                      ]
                  })
              })
          });
};
