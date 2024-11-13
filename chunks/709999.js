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
    I = n(300284),
    S = n(876917),
    T = n(642619),
    N = n(210887),
    B = n(74538),
    y = n(335131),
    L = n(1870),
    Z = n(884697),
    P = n(664018),
    w = n(890249),
    O = n(635552),
    A = n(724994),
    R = n(297651),
    H = n(390698),
    F = n(813083),
    D = n(680942),
    V = n(558060),
    M = n(237031),
    W = n(616066),
    U = n(216541),
    z = n(832149),
    G = n(474936),
    K = n(388032),
    $ = n(352177);
let J = (e) => {
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
    Y = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.Button, {
            color: g.ButtonColors.BRAND,
            look: g.Button.Looks.FILLED,
            size: g.ButtonSizes.ICON,
            className: s()($.previewButton, t),
            innerClassName: $.previewButtonInner,
            'aria-label': K.intl.string(K.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    q = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: $.profileEffectShopPreview,
            children: (0, r.jsx)(S.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: a,
                removeSetHeight: !0
            })
        });
    },
    Q = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: a, user: i, item: l } = e;
        return (0, r.jsx)('div', {
            className: s()($.avatarContainer, t && $.mysteryAvatarContainer),
            children: (0, r.jsx)(W.R, {
                item: l,
                user: i,
                isPurchased: a,
                isHighlighted: n
            })
        });
    },
    X = (e) => {
        var t, n;
        let { product: a, selectedVariantIndex: i, setSelectedVariantIndex: l, setIsHoveringOnVariantsSwitch: o } = e,
            c = null === (t = a.variants) || void 0 === t ? void 0 : t[i];
        if (null == c) return null;
        let d = null == c ? void 0 : c.variantLabel;
        return (0, r.jsxs)('div', {
            className: $.variantsPanel,
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: [
                (0, r.jsx)('ol', {
                    className: $.variantsList,
                    children:
                        null === (n = a.variants) || void 0 === n
                            ? void 0
                            : n.map((e, t) =>
                                  (0, r.jsx)(
                                      g.Clickable,
                                      {
                                          tag: 'li',
                                          onMouseEnter: () => l(t),
                                          onClick: () => l(t),
                                          className: s()($.colorVariant, t === i && $.selectedVariant),
                                          children: (0, r.jsx)('div', {
                                              className: $.colorSwatch,
                                              style: { backgroundColor: e.variantValue }
                                          })
                                      },
                                      t
                                  )
                              )
                }),
                (0, r.jsx)(g.Text, {
                    variant: 'text-xs/medium',
                    className: $.variantLabel,
                    children: d
                })
            ]
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: i, onMount: l, isGiftEasterEggEnabled: S, isInFeedView: W } = e,
        { analyticsLocations: ee } = (0, _.ZP)([...(W ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
        et = a.useRef(null),
        { handleCardVisibilityChange: en } = (0, R.E)(t, W ? 'home' : 'full'),
        er = (0, b.Z)(et),
        [ea, ei] = a.useState(!1),
        es = er || ea,
        [el] = t.items,
        eo = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
        ec = B.ZP.canUseCollectibles(n),
        ed = (0, Z.XM)(t, ec, !1),
        eu = a.useMemo(() => (0, Z.BH)(t, ec), [t, ec]),
        em = (0, Z.G1)(t),
        eh = (0, Z.rN)(t),
        { isPurchased: ep, isPartiallyPurchased: ef } = (0, A.L)(t),
        [eg, eC] = (0, h.Wu)([L.Z], () => [L.Z.isClaiming === t.skuId, null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId]),
        eb = (0, h.e7)([N.Z], () => (0, f.wj)(N.Z.theme)),
        ex = (0, w.m)('CollectiblesCollectedModal'),
        ev = (0, Z.x6)(t) || ex,
        e_ = (0, Z.Yq)(t.skuId),
        { hoverVariant: ek } = (0, P.E)('CollectiblesShopTallCard'),
        ej = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    a.useEffect(() => {
        let { current: e } = et;
        if (null == e) return;
        let t = () => ei(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        a.useEffect(() => {
            null == l || l(et);
        }, [l]);
    let eE = (0, I.Z)({ analyticsLocations: ee }),
        eI = a.useRef(null),
        { handleUseNow: eS, isApplying: eT } = (0, O.W)({ product: t }),
        eN = () => {
            if (((0, C.xf)(), eE(), t.type === m.Z.AVATAR_DECORATION && null != el)) {
                o()(el.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: el,
                        analyticsLocations: ee
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: el.id,
                    analyticsLocations: ee
                });
        },
        eB = (e) => (n) => {
            (eI.current = n.currentTarget),
                (0, M.T)({
                    product: t,
                    category: i,
                    analyticsLocations: ee,
                    analyticsSource: e,
                    returnRef: eI
                });
        },
        ey = eB(v.Z.COLLECTIBLES_SHOP_CARD),
        eL = eB(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eZ = () =>
            (0, r.jsx)('div', {
                className: $.hoverUpsellContainer,
                children: (0, r.jsx)(E.Z, {
                    fullWidth: !0,
                    className: $.__invalid_premiumSubscribeButton,
                    disabled: eC,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: K.intl.string(K.t.sEAnVF),
                    subscriptionTier: G.Si.TIER_2
                })
            }),
        eP = () =>
            ep || ef
                ? (0, r.jsx)(H.U, {
                      className: $.priceTag,
                      isPartiallyPurchased: ef
                  })
                : em
                  ? (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        className: $.priceTag,
                        children: K.intl.string(K.t.rt69oq)
                    })
                  : (0, r.jsx)(V.Z, {
                        product: t,
                        discount: eu,
                        isPremiumUser: ec,
                        className: $.priceTag
                    }),
        ew = () =>
            em || d.tq
                ? null
                : eh
                  ? (0, r.jsx)(Y, { onClick: eL })
                  : (0, r.jsx)(D.Z, {
                        product: t,
                        returnRef: et,
                        isGiftEasterEggEnabled: S,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eO = () => {
            if (em && !ec && !eh) return eZ();
            let e = em
                ? {
                      submitting: eg,
                      submittingStartedLabel: K.intl.string(K.t['TYw+9v']),
                      submittingFinishedLabel: K.intl.string(K.t.Pg1UPz),
                      onClick: async () => {
                          await (0, y.fK)(t.skuId),
                              (0, z.Z)({
                                  product: t,
                                  analyticsLocations: ee
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, j.Z)({
                              skuId: t.skuId,
                              analyticsLocations: ee,
                              returnRef: et
                          })
                  };
            return (0, r.jsxs)('div', {
                className: $.buttonsContainer,
                children: [
                    ef
                        ? null
                        : ep
                          ? (0, r.jsx)(J, {
                                disabled: eC,
                                onClick: ev ? eS : eN,
                                submitting: eT,
                                children: K.intl.string(K.t.MAS7uL)
                            })
                          : (0, r.jsx)(J, {
                                disabled: eC,
                                className: $.purchaseButton,
                                ...e,
                                children: em ? K.intl.string(K.t.zp6caG) : K.intl.formatToPlainString(K.t['cNSL/v'], { price: ed })
                            }),
                    ew()
                ]
            });
        },
        [eA, eR] = a.useState(0),
        [eH, eF] = a.useState(!1),
        eD = es && !eH;
    return (0, Z.x6)(t) && null != eu && eu.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: en,
              threshold: 0,
              children: (0, r.jsx)(g.FocusRing, {
                  children: (0, r.jsxs)(g.Clickable, {
                      innerRef: et,
                      className: s()(eb ? $.shopCardDark : $.shopCard, {
                          [$.partiallyOwned]: ef,
                          [$.shopCardAnimation]: !eo && ek !== P.D.NO_MOVEMENT,
                          [eb ? $.shopCardDarkHighlighted : $.shopCardHighlighted]: es,
                          [$.mysteryShopCard]: ej
                      }),
                      onBlur: () => ei(!1),
                      onClick: ey,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          em &&
                              (0, r.jsx)(g.Tooltip, {
                                  tooltipContentClassName: $.premiumWheelTooltipContent,
                                  color: g.Tooltip.Colors.PRIMARY,
                                  text: K.intl.string(K.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(g.TextBadge, {
                                          ...e,
                                          className: $.premiumWheelBadge,
                                          text: (0, r.jsx)(g.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: $.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: $.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(q, {
                                          isHighlighted: eD,
                                          profileEffectId: el.id,
                                          isPurchased: ep
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(el.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)(Q, {
                                              item: el,
                                              user: n,
                                              isStormMysteryItem: ej,
                                              isHighlighted: eD,
                                              isPurchased: ep
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)(U.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: ep,
                                          isHighlighted: es
                                      })
                                  )
                                  .with(m.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eA];
                                      return (0, c.EQ)(e.type)
                                          .with(m.Z.PROFILE_EFFECT, () => {
                                              let [t] = e.items;
                                              return (0, r.jsx)(q, {
                                                  isHighlighted: eD,
                                                  profileEffectId: t.id,
                                                  isPurchased: ep && !eH
                                              });
                                          })
                                          .with(m.Z.AVATAR_DECORATION, () => {
                                              let [t] = e.items;
                                              return (
                                                  o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                  (0, r.jsx)(Q, {
                                                      item: t,
                                                      user: n,
                                                      isStormMysteryItem: ej,
                                                      isHighlighted: eD,
                                                      isPurchased: ep
                                                  })
                                              );
                                          })
                                          .otherwise(() => null);
                                  })
                                  .otherwise(() => null)
                          }),
                          ep
                              ? (0, r.jsx)('div', {
                                    className: $.checkmarkWrapper,
                                    children: (0, r.jsx)(g.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: $.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: s()($.cardText, {
                                  [$.cardTextBlur]: (null == el ? void 0 : el.type) === m.Z.PROFILE_EFFECT,
                                  [$.variantsGroup]: t.type === m.Z.VARIANTS_GROUP
                              }),
                              children: [
                                  (0, r.jsx)('div', { className: s()($.cardBackground, eb ? $.darkCardBackground : $.lightCardBackground, (null == el ? void 0 : el.type) === m.Z.PROFILE_EFFECT ? $.cardLowOpacity : null) }),
                                  (0, r.jsx)(g.Text, {
                                      variant: 'text-lg/bold',
                                      className: $.productName,
                                      children: t.name
                                  }),
                                  (0, r.jsx)(X, {
                                      selectedVariantIndex: eA,
                                      setSelectedVariantIndex: eR,
                                      setIsHoveringOnVariantsSwitch: eF,
                                      product: t
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: $.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: ef ? void 0 : $.innerBlur,
                                              children: eP()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: $.innerHover,
                                              children: eO()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(F.Z, {
                              category: i,
                              className: $.limitedTimeBadge,
                              display: 'card'
                          }),
                          e_ &&
                              !ef &&
                              !ep &&
                              (0, r.jsx)(g.TextBadge, {
                                  text: K.intl.string(K.t.y2b7CA),
                                  disableColor: !0,
                                  className: $.newBadge
                              })
                      ]
                  })
              })
          });
};
