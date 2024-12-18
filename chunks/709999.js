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
    f = n(663002),
    g = n(481060),
    C = n(37234),
    v = n(727637),
    b = n(607070),
    x = n(100527),
    _ = n(906732),
    k = n(1585),
    I = n(333867),
    E = n(197115),
    S = n(300284),
    j = n(876917),
    T = n(642619),
    N = n(210887),
    B = n(74538),
    L = n(335131),
    y = n(1870),
    P = n(429368),
    Z = n(884697),
    O = n(606414),
    w = n(664018),
    A = n(890249),
    R = n(228624),
    H = n(635552),
    F = n(905357),
    V = n(724994),
    D = n(297651),
    M = n(390698),
    W = n(813083),
    U = n(680942),
    G = n(558060),
    z = n(237031),
    $ = n(453713),
    K = n(616066),
    q = n(216541),
    J = n(67409),
    Y = n(58201),
    X = n(201964),
    Q = n(361110),
    ee = n(832149),
    et = n(474936),
    en = n(388032),
    er = n(176500);
let ea = (e) => {
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
    ei = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.Button, {
            color: g.ButtonColors.BRAND,
            look: g.Button.Looks.FILLED,
            size: g.ButtonSizes.ICON,
            className: l()(er.previewButton, t),
            innerClassName: er.previewButtonInner,
            'aria-label': en.intl.string(en.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    el = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: er.profileEffectShopPreview,
            children: (0, r.jsx)(j.Z, {
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
    let { product: t, user: n, category: i, onMount: s, isGiftEasterEggEnabled: j, isInFeedView: K } = e,
        { analyticsLocations: eo } = (0, _.ZP)([...(K ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
        ec = a.useRef(null),
        ed = (0, v.Z)(ec),
        [eu, em] = a.useState(!1),
        eh = ed || eu,
        ep = (0, Q.f)(t),
        { previewingVariantIndex: ef } = ep,
        eg = (0, F.T)(t),
        eC = (0, h.e7)([b.Z], () => b.Z.useReducedMotion),
        ev = B.ZP.canUseCollectibles(n),
        eb = (0, Z.XM)(t, ev, !1),
        ex = a.useMemo(() => (0, Z.BH)(t, ev), [t, ev]),
        e_ = (0, Z.G1)(t),
        ek = (0, Z.rN)(t),
        [eI, eE, eS] = (0, h.Wu)([y.Z], () => [y.Z.isClaiming === t.skuId, null != y.Z.isClaiming && y.Z.isClaiming !== t.skuId, y.Z.purchases]),
        ej = (0, X.o)(t, eS, ef),
        eT = (0, h.e7)([N.Z], () => (0, f.wj)(N.Z.theme)),
        eN = (0, A.m)('CollectiblesCollectedModal'),
        eB = (0, Z.x6)(t) || eN,
        eL = (0, Z.Yq)(t.skuId),
        { hoverVariant: ey } = (0, w.E)('CollectiblesShopTallCard'),
        eP = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
        eZ = (0, O.c)('CollectiblesShopTallCard'),
        eO = (0, R.hv)('CollectiblesShopTallCard'),
        ew = (0, P.o)(t, eS),
        eA = (0, Y.W)(t, ew),
        { isPurchased: eR, isPartiallyOwnedBundle: eH } = (0, V.L)(eA),
        eF = null !== ef ? ef : ew,
        [eV, eD] = a.useState(!1),
        { handleCardVisibilityChange: eM } = (0, D.E)(eA.skuId, K ? 'home' : 'full');
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
    let eW = (0, S.Z)({ analyticsLocations: eo }),
        eU = a.useRef(null),
        { handleUseNow: eG, isApplying: ez } = (0, H.W)({ product: eA }),
        e$ = () => {
            if (((0, C.xf)(), eW(), t.type === m.Z.AVATAR_DECORATION && null != ej)) {
                o()(ej.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: ej,
                        analyticsLocations: eo
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: ej.id,
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
        eq = eK(x.Z.COLLECTIBLES_SHOP_CARD),
        eJ = eK(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eY = () =>
            (0, r.jsx)('div', {
                className: er.hoverUpsellContainer,
                children: (0, r.jsx)(E.Z, {
                    fullWidth: !0,
                    className: er.__invalid_premiumSubscribeButton,
                    disabled: eE,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: en.intl.string(en.t.sEAnVF),
                    subscriptionTier: et.Si.TIER_2
                })
            }),
        eX = () =>
            eR || eH
                ? (0, r.jsx)(M.U, {
                      className: er.priceTag,
                      isPartiallyPurchased: eH
                  })
                : e_
                  ? (0, r.jsx)(g.Text, {
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
        eQ = () =>
            e_ || d.tq
                ? null
                : ek
                  ? (0, r.jsx)(ei, { onClick: eJ })
                  : (0, r.jsx)(U.Z, {
                        product: t,
                        selectedVariantIndex: ew,
                        returnRef: ec,
                        isGiftEasterEggEnabled: j,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        e0 = () => {
            if (e_ && !ev && !ek) return eY();
            let e = e_
                ? {
                      submitting: eI,
                      submittingStartedLabel: en.intl.string(en.t['TYw+9v']),
                      submittingFinishedLabel: en.intl.string(en.t.Pg1UPz),
                      onClick: async () => {
                          await (0, L.fK)(t.skuId),
                              (0, ee.Z)({
                                  product: t,
                                  analyticsLocations: eo
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, I.Z)({
                              skuId: (0, J.S)({
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
                    eH
                        ? null
                        : eR
                          ? (0, r.jsx)(ea, {
                                disabled: eE,
                                onClick: eB ? eG : e$,
                                submitting: ez,
                                children: en.intl.string(en.t.MAS7uL)
                            })
                          : (0, r.jsx)(ea, {
                                disabled: eE,
                                ...e,
                                children: e_ ? en.intl.string(en.t.zp6caG) : en.intl.formatToPlainString(en.t['cNSL/v'], { price: eb })
                            }),
                    eQ()
                ]
            });
        };
    return (0, Z.x6)(t) && null != ex && ex.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: eM,
              threshold: 0,
              children: (0, r.jsx)(g.FocusRing, {
                  children: (0, r.jsxs)(g.Clickable, {
                      innerRef: ec,
                      className: l()(eT ? er.shopCardDark : er.shopCard, {
                          [er.partiallyOwned]: eH && !eh,
                          [er.shopCardAnimation]: !eC && ey !== w.D.NO_MOVEMENT,
                          [eT ? er.shopCardDarkHighlighted : er.shopCardHighlighted]: eh,
                          [er.mysteryShopCard]: eP
                      }),
                      onBlur: () => em(!1),
                      onClick: eq,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          e_ &&
                              (0, r.jsx)(g.Tooltip, {
                                  tooltipContentClassName: er.premiumWheelTooltipContent,
                                  color: g.Tooltip.Colors.PRIMARY,
                                  text: en.intl.string(en.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(g.TextBadge, {
                                          ...e,
                                          className: er.premiumWheelBadge,
                                          text: (0, r.jsx)(g.NitroWheelIcon, {
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
                                          profileEffectId: ej.id,
                                          isPurchased: eR
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(ej.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)(es, {
                                              item: ej,
                                              user: n,
                                              isStormMysteryItem: eP,
                                              isHighlighted: eh,
                                              isPurchased: eR
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)(q.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: eR,
                                          isHighlighted: eh
                                      })
                                  )
                                  .with(m.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eF];
                                      return null == e
                                          ? null
                                          : (0, c.EQ)(e.type)
                                                .with(m.Z.PROFILE_EFFECT, () => {
                                                    let [t] = e.items;
                                                    return (0, r.jsx)(el, {
                                                        isHighlighted: eh,
                                                        profileEffectId: t.id,
                                                        isPurchased: eR && !eV
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
                                    children: (0, r.jsx)(g.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: er.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: l()(er.cardText, eT ? er.darkCardBackground : er.lightCardBackground, { [er.variantsGroup]: t.type === m.Z.VARIANTS_GROUP }),
                              children: [
                                  (0, r.jsx)(g.Text, {
                                      variant: 'text-lg/bold',
                                      className: er.productName,
                                      children: eg
                                  }),
                                  t.type === m.Z.VARIANTS_GROUP
                                      ? (0, r.jsx)($.P, {
                                            variantGroupProduct: t,
                                            previewingVariantIndexProps: ep,
                                            setIsHoveringOnSwitch: eD,
                                            purchases: eS,
                                            minimal: !eh,
                                            alternativeBackgroundColor: (null == ej ? void 0 : ej.type) === m.Z.PROFILE_EFFECT
                                        })
                                      : null,
                                  (0, r.jsxs)('div', {
                                      className: er.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: eH ? void 0 : er.innerBlur,
                                              children: eX()
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
                          eL &&
                              !eH &&
                              !eR &&
                              i.skuId !== u.T.ROBERT &&
                              (0, r.jsx)(g.TextBadge, {
                                  text: en.intl.string(en.t.y2b7CA),
                                  disableColor: !0,
                                  className: er.newBadge
                              }),
                          eZ &&
                              i.skuId === u.T.ROBERT &&
                              (0, r.jsx)(g.TextBadge, {
                                  text: en.intl.string(en.t.uPewb2),
                                  disableColor: !0,
                                  className: er.newBadge
                              })
                      ]
                  })
              })
          });
};
