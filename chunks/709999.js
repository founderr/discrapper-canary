n(47120), n(627341);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    m = n(979554),
    h = n(399606),
    p = n(622535),
    g = n(663002),
    f = n(481060),
    C = n(37234),
    v = n(727637),
    b = n(607070),
    x = n(100527),
    _ = n(906732),
    k = n(1585),
    I = n(333867),
    S = n(197115),
    j = n(300284),
    E = n(876917),
    T = n(642619),
    N = n(210887),
    B = n(74538),
    y = n(335131),
    L = n(1870),
    P = n(429368),
    Z = n(884697),
    O = n(606414),
    w = n(664018),
    A = n(890249),
    R = n(228624),
    F = n(635552),
    H = n(905357),
    D = n(724994),
    V = n(297651),
    M = n(390698),
    W = n(813083),
    U = n(680942),
    G = n(558060),
    z = n(237031),
    $ = n(453713),
    K = n(616066),
    J = n(216541),
    Y = n(67409),
    q = n(58201),
    Q = n(201964),
    X = n(361110),
    ee = n(832149),
    et = n(474936),
    en = n(388032),
    er = n(176500);
let ea = (e) => {
        let { children: t, onClick: n, ...a } = e;
        return (0, r.jsx)(f.Button, {
            fullWidth: !0,
            look: f.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...a,
            children: t
        });
    },
    ei = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: l()(er.previewButton, t),
            innerClassName: er.previewButtonInner,
            'aria-label': en.intl.string(en.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(f.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    el = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: er.profileEffectShopPreview,
            children: (0, r.jsx)(E.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: a && !n,
                removeSetHeight: !0
            })
        });
    },
    es = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: a, user: i, item: s } = e;
        return (0, r.jsx)('div', {
            className: l()(er.avatarContainer, t && er.mysteryAvatarContainer),
            children: (0, r.jsx)(K.R, {
                item: s,
                user: i,
                isPurchased: a,
                isHighlighted: n
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: i, onMount: s, isGiftEasterEggEnabled: E, isInFeedView: K } = e,
        { analyticsLocations: eo } = (0, _.ZP)([...(K ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
        ec = a.useRef(null),
        ed = (0, v.Z)(ec),
        [eu, em] = a.useState(!1),
        eh = ed || eu,
        ep = (0, X.f)(t),
        { previewingVariantIndex: eg } = ep,
        ef = (0, H.T)(t),
        eC = (0, h.e7)([b.Z], () => b.Z.useReducedMotion),
        ev = B.ZP.canUseCollectibles(n),
        eb = (0, Z.XM)(t, ev, !1),
        ex = a.useMemo(() => (0, Z.BH)(t, ev), [t, ev]),
        e_ = (0, Z.G1)(t),
        ek = (0, Z.rN)(t),
        [eI, eS, ej] = (0, h.Wu)([L.Z], () => [L.Z.isClaiming === t.skuId, null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId, L.Z.purchases]),
        eE = (0, Q.o)(t, ej, eg),
        eT = (0, h.e7)([N.Z], () => (0, g.wj)(N.Z.theme)),
        eN = (0, A.m)('CollectiblesCollectedModal'),
        eB = (0, Z.x6)(t) || eN,
        ey = (0, Z.Yq)(t.skuId),
        { hoverVariant: eL } = (0, w.E)('CollectiblesShopTallCard'),
        eP = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
        eZ = (0, O.c)('CollectiblesShopTallCard'),
        eO = (0, R.hv)('CollectiblesShopTallCard'),
        ew = (0, P.o)(t, ej),
        eA = (0, q.W)(t, ew),
        { isPurchased: eR, isPartiallyOwnedBundle: eF } = (0, D.L)(eA),
        eH = null !== eg ? eg : ew,
        [eD, eV] = a.useState(!1),
        { handleCardVisibilityChange: eM } = (0, V.E)(eA.skuId, K ? 'home' : 'full');
    a.useEffect(() => {
        let { current: e } = ec;
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
            null == s || s(ec);
        }, [s]);
    let eW = (0, j.Z)({ analyticsLocations: eo }),
        eU = a.useRef(null),
        { handleUseNow: eG, isApplying: ez } = (0, F.W)({ product: eA }),
        e$ = () => {
            if (((0, C.xf)(), eW(), t.type === m.Z.AVATAR_DECORATION && null != eE)) {
                o()(eE.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: eE,
                        analyticsLocations: eo
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: eE.id,
                    analyticsLocations: eo
                });
        },
        eK = (e) => (n) => {
            (eU.current = n.currentTarget),
                (0, z.T)({
                    product: t,
                    category: i,
                    analyticsLocations: eo,
                    analyticsSource: e,
                    returnRef: eU
                });
        },
        eJ = eK(x.Z.COLLECTIBLES_SHOP_CARD),
        eY = eK(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eq = () =>
            (0, r.jsx)('div', {
                className: er.hoverUpsellContainer,
                children: (0, r.jsx)(S.Z, {
                    fullWidth: !0,
                    className: er.__invalid_premiumSubscribeButton,
                    disabled: eS,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: en.intl.string(en.t.sEAnVF),
                    subscriptionTier: et.Si.TIER_2
                })
            }),
        eQ = () =>
            eR || eF
                ? (0, r.jsx)(M.U, {
                      className: er.priceTag,
                      isPartiallyPurchased: eF
                  })
                : e_
                  ? (0, r.jsx)(f.Text, {
                        variant: 'text-md/semibold',
                        className: er.priceTag,
                        children: en.intl.string(en.t.rt69oq)
                    })
                  : (0, r.jsx)(G.Z, {
                        product: t,
                        discount: ex,
                        isPremiumUser: ev,
                        className: er.priceTag
                    }),
        eX = () =>
            e_ || d.tq
                ? null
                : ek
                  ? (0, r.jsx)(ei, { onClick: eY })
                  : (0, r.jsx)(U.Z, {
                        product: t,
                        selectedVariantIndex: ew,
                        returnRef: ec,
                        isGiftEasterEggEnabled: E,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        e0 = () => {
            if (e_ && !ev && !ek) return eq();
            let e = e_
                ? {
                      submitting: eI,
                      submittingStartedLabel: en.intl.string(en.t['TYw+9v']),
                      submittingFinishedLabel: en.intl.string(en.t.Pg1UPz),
                      onClick: async () => {
                          await (0, y.fK)(t.skuId),
                              (0, ee.Z)({
                                  product: t,
                                  analyticsLocations: eo
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, I.Z)({
                              skuId: (0, Y.S)({
                                  product: t,
                                  selectedVariantIndex: ew
                              }),
                              analyticsLocations: eo,
                              returnRef: ec,
                              variantsReturnStyle: eO
                          })
                  };
            return (0, r.jsxs)('div', {
                className: er.buttonsContainer,
                children: [
                    eF
                        ? null
                        : eR
                          ? (0, r.jsx)(ea, {
                                disabled: eS,
                                onClick: eB ? eG : e$,
                                submitting: ez,
                                children: en.intl.string(en.t.MAS7uL)
                            })
                          : (0, r.jsx)(ea, {
                                disabled: eS,
                                ...e,
                                children: e_ ? en.intl.string(en.t.zp6caG) : en.intl.formatToPlainString(en.t['cNSL/v'], { price: eb })
                            }),
                    eX()
                ]
            });
        };
    return (0, Z.x6)(t) && null != ex && ex.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: eM,
              threshold: 0,
              children: (0, r.jsx)(f.FocusRing, {
                  children: (0, r.jsxs)(f.Clickable, {
                      innerRef: ec,
                      className: l()(eT ? er.shopCardDark : er.shopCard, {
                          [er.partiallyOwned]: eF && !eh,
                          [er.shopCardAnimation]: !eC && eL !== w.D.NO_MOVEMENT,
                          [eT ? er.shopCardDarkHighlighted : er.shopCardHighlighted]: eh,
                          [er.mysteryShopCard]: eP
                      }),
                      onBlur: () => em(!1),
                      onClick: eJ,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          e_ &&
                              (0, r.jsx)(f.Tooltip, {
                                  tooltipContentClassName: er.premiumWheelTooltipContent,
                                  color: f.Tooltip.Colors.PRIMARY,
                                  text: en.intl.string(en.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(f.TextBadge, {
                                          ...e,
                                          className: er.premiumWheelBadge,
                                          text: (0, r.jsx)(f.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: er.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: er.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(el, {
                                          isHighlighted: eh,
                                          profileEffectId: eE.id,
                                          isPurchased: eR
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(eE.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)(es, {
                                              item: eE,
                                              user: n,
                                              isStormMysteryItem: eP,
                                              isHighlighted: eh,
                                              isPurchased: eR
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)(J.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: eR,
                                          isHighlighted: eh
                                      })
                                  )
                                  .with(m.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eH];
                                      return null == e
                                          ? null
                                          : (0, c.EQ)(e.type)
                                                .with(m.Z.PROFILE_EFFECT, () => {
                                                    let [t] = e.items;
                                                    return (0, r.jsx)(el, {
                                                        isHighlighted: eh,
                                                        profileEffectId: t.id,
                                                        isPurchased: eR && !eD
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
                                                            isPurchased: eR
                                                        })
                                                    );
                                                })
                                                .otherwise(() => null);
                                  })
                                  .otherwise(() => null)
                          }),
                          eR
                              ? (0, r.jsx)('div', {
                                    className: er.checkmarkWrapper,
                                    children: (0, r.jsx)(f.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: er.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: l()(er.cardText, {
                                  [er.cardTextBlur]: (null == eE ? void 0 : eE.type) === m.Z.PROFILE_EFFECT,
                                  [er.variantsGroup]: t.type === m.Z.VARIANTS_GROUP
                              }),
                              children: [
                                  (0, r.jsx)('div', { className: l()(er.cardBackground, eT ? er.darkCardBackground : er.lightCardBackground, (null == eE ? void 0 : eE.type) === m.Z.PROFILE_EFFECT ? er.cardLowOpacity : null) }),
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-lg/bold',
                                      className: er.productName,
                                      children: ef
                                  }),
                                  t.type === m.Z.VARIANTS_GROUP
                                      ? (0, r.jsx)($.P, {
                                            variantGroupProduct: t,
                                            previewingVariantIndexProps: ep,
                                            setIsHoveringOnSwitch: eV,
                                            purchases: ej,
                                            minimal: !eh
                                        })
                                      : null,
                                  (0, r.jsxs)('div', {
                                      className: er.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: eF ? void 0 : er.innerBlur,
                                              children: eQ()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: er.innerHover,
                                              children: e0()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(W.Z, {
                              category: i,
                              className: er.limitedTimeBadge,
                              display: 'card'
                          }),
                          ey &&
                              !eF &&
                              !eR &&
                              i.skuId !== u.T.ROBERT &&
                              (0, r.jsx)(f.TextBadge, {
                                  text: en.intl.string(en.t.y2b7CA),
                                  disableColor: !0,
                                  className: er.newBadge
                              }),
                          eZ &&
                              i.skuId === u.T.ROBERT &&
                              (0, r.jsx)(f.TextBadge, {
                                  text: en.intl.string(en.t.uPewb2),
                                  disableColor: !0,
                                  className: er.newBadge
                              })
                      ]
                  })
              })
          });
};
