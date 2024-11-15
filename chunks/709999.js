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
    Z = n(429368),
    P = n(884697),
    O = n(664018),
    w = n(890249),
    A = n(635552),
    R = n(905357),
    H = n(724994),
    F = n(297651),
    V = n(390698),
    D = n(813083),
    M = n(680942),
    W = n(558060),
    U = n(237031),
    z = n(453713),
    G = n(616066),
    K = n(216541),
    $ = n(67409),
    J = n(201964),
    Y = n(832149),
    q = n(474936),
    Q = n(388032),
    X = n(352177);
let ee = (e) => {
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
    et = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.Button, {
            color: g.ButtonColors.BRAND,
            look: g.Button.Looks.FILLED,
            size: g.ButtonSizes.ICON,
            className: s()(X.previewButton, t),
            innerClassName: X.previewButtonInner,
            'aria-label': Q.intl.string(Q.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    en = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: X.profileEffectShopPreview,
            children: (0, r.jsx)(S.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: a,
                removeSetHeight: !0
            })
        });
    },
    er = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: a, user: i, item: l } = e;
        return (0, r.jsx)('div', {
            className: s()(X.avatarContainer, t && X.mysteryAvatarContainer),
            children: (0, r.jsx)(G.R, {
                item: l,
                user: i,
                isPurchased: a,
                isHighlighted: n
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: i, onMount: l, isGiftEasterEggEnabled: S, isInFeedView: G } = e,
        { analyticsLocations: ea } = (0, _.ZP)([...(G ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
        ei = a.useRef(null),
        { handleCardVisibilityChange: es } = (0, F.E)(t, G ? 'home' : 'full'),
        el = (0, b.Z)(ei),
        [eo, ec] = a.useState(!1),
        ed = el || eo,
        eu = (0, J.o)(t),
        em = (0, R.k)(t),
        eh = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
        ep = B.ZP.canUseCollectibles(n),
        ef = (0, P.XM)(t, ep, !1),
        eg = a.useMemo(() => (0, P.BH)(t, ep), [t, ep]),
        eC = (0, P.G1)(t),
        eb = (0, P.rN)(t),
        { isPurchased: ex, isPartiallyPurchased: ev } = (0, H.L)(t),
        [e_, ek] = (0, h.Wu)([L.Z], () => [L.Z.isClaiming === t.skuId, null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId]),
        ej = (0, h.e7)([N.Z], () => (0, f.wj)(N.Z.theme)),
        eE = (0, w.m)('CollectiblesCollectedModal'),
        eI = (0, P.x6)(t) || eE,
        eS = (0, P.Yq)(t.skuId),
        { hoverVariant: eT } = (0, O.E)('CollectiblesShopTallCard'),
        eN = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
        eB = (0, Z.o0)(t),
        ey = (0, Z.i6)(t);
    a.useEffect(() => {
        let { current: e } = ei;
        if (null == e) return;
        let t = () => ec(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        a.useEffect(() => {
            null == l || l(ei);
        }, [l]);
    let eL = (0, I.Z)({ analyticsLocations: ea }),
        eZ = a.useRef(null),
        { handleUseNow: eP, isApplying: eO } = (0, A.W)({ product: t }),
        ew = () => {
            if (((0, C.xf)(), eL(), t.type === m.Z.AVATAR_DECORATION && null != eu)) {
                o()(eu.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: eu,
                        analyticsLocations: ea
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: eu.id,
                    analyticsLocations: ea
                });
        },
        eA = (e) => (n) => {
            (eZ.current = n.currentTarget),
                (0, U.T)({
                    product: t,
                    category: i,
                    analyticsLocations: ea,
                    analyticsSource: e,
                    returnRef: eZ
                });
        },
        eR = eA(v.Z.COLLECTIBLES_SHOP_CARD),
        eH = eA(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eF = () =>
            (0, r.jsx)('div', {
                className: X.hoverUpsellContainer,
                children: (0, r.jsx)(E.Z, {
                    fullWidth: !0,
                    className: X.__invalid_premiumSubscribeButton,
                    disabled: ek,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: Q.intl.string(Q.t.sEAnVF),
                    subscriptionTier: q.Si.TIER_2
                })
            }),
        eV = () =>
            ex || ev
                ? (0, r.jsx)(V.U, {
                      className: X.priceTag,
                      isPartiallyPurchased: ev
                  })
                : eC
                  ? (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        className: X.priceTag,
                        children: Q.intl.string(Q.t.rt69oq)
                    })
                  : (0, r.jsx)(W.Z, {
                        product: t,
                        discount: eg,
                        isPremiumUser: ep,
                        className: X.priceTag
                    }),
        eD = () =>
            eC || d.tq
                ? null
                : eb
                  ? (0, r.jsx)(et, { onClick: eH })
                  : (0, r.jsx)(M.Z, {
                        product: t,
                        selectedVariantIndex: eB,
                        returnRef: ei,
                        isGiftEasterEggEnabled: S,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eM = () => {
            if (eC && !ep && !eb) return eF();
            let e = eC
                ? {
                      submitting: e_,
                      submittingStartedLabel: Q.intl.string(Q.t['TYw+9v']),
                      submittingFinishedLabel: Q.intl.string(Q.t.Pg1UPz),
                      onClick: async () => {
                          await (0, y.fK)(t.skuId),
                              (0, Y.Z)({
                                  product: t,
                                  analyticsLocations: ea
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, j.Z)({
                              skuId: (0, $.S)({
                                  product: t,
                                  selectedVariantIndex: eB
                              }),
                              analyticsLocations: ea,
                              returnRef: ei
                          })
                  };
            return (0, r.jsxs)('div', {
                className: X.buttonsContainer,
                children: [
                    ev
                        ? null
                        : ex
                          ? (0, r.jsx)(ee, {
                                disabled: ek,
                                onClick: eI ? eP : ew,
                                submitting: eO,
                                children: Q.intl.string(Q.t.MAS7uL)
                            })
                          : (0, r.jsx)(ee, {
                                disabled: ek,
                                className: X.purchaseButton,
                                ...e,
                                children: eC ? Q.intl.string(Q.t.zp6caG) : Q.intl.formatToPlainString(Q.t['cNSL/v'], { price: ef })
                            }),
                    eD()
                ]
            });
        };
    return (0, P.x6)(t) && null != eg && eg.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: es,
              threshold: 0,
              children: (0, r.jsx)(g.FocusRing, {
                  children: (0, r.jsxs)(g.Clickable, {
                      innerRef: ei,
                      className: s()(ej ? X.shopCardDark : X.shopCard, {
                          [X.partiallyOwned]: ev,
                          [X.shopCardAnimation]: !eh && eT !== O.D.NO_MOVEMENT,
                          [ej ? X.shopCardDarkHighlighted : X.shopCardHighlighted]: ed,
                          [X.mysteryShopCard]: eN
                      }),
                      onBlur: () => ec(!1),
                      onClick: eR,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          eC &&
                              (0, r.jsx)(g.Tooltip, {
                                  tooltipContentClassName: X.premiumWheelTooltipContent,
                                  color: g.Tooltip.Colors.PRIMARY,
                                  text: Q.intl.string(Q.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(g.TextBadge, {
                                          ...e,
                                          className: X.premiumWheelBadge,
                                          text: (0, r.jsx)(g.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: X.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: X.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(en, {
                                          isHighlighted: ed,
                                          profileEffectId: eu.id,
                                          isPurchased: ex
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(eu.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)(er, {
                                              item: eu,
                                              user: n,
                                              isStormMysteryItem: eN,
                                              isHighlighted: ed,
                                              isPurchased: ex
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)(K.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: ex,
                                          isHighlighted: ed
                                      })
                                  )
                                  .with(m.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eB];
                                      return (0, c.EQ)(e.type)
                                          .with(m.Z.PROFILE_EFFECT, () => {
                                              let [t] = e.items;
                                              return (0, r.jsx)(en, {
                                                  isHighlighted: ed,
                                                  profileEffectId: t.id,
                                                  isPurchased: ex && !ey
                                              });
                                          })
                                          .with(m.Z.AVATAR_DECORATION, () => {
                                              let [t] = e.items;
                                              return (
                                                  o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                  (0, r.jsx)(er, {
                                                      item: t,
                                                      user: n,
                                                      isStormMysteryItem: eN,
                                                      isHighlighted: ed,
                                                      isPurchased: ex
                                                  })
                                              );
                                          })
                                          .otherwise(() => null);
                                  })
                                  .otherwise(() => null)
                          }),
                          ex
                              ? (0, r.jsx)('div', {
                                    className: X.checkmarkWrapper,
                                    children: (0, r.jsx)(g.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: X.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: s()(X.cardText, {
                                  [X.cardTextBlur]: (null == eu ? void 0 : eu.type) === m.Z.PROFILE_EFFECT,
                                  [X.variantsGroup]: t.type === m.Z.VARIANTS_GROUP
                              }),
                              children: [
                                  (0, r.jsx)('div', { className: s()(X.cardBackground, ej ? X.darkCardBackground : X.lightCardBackground, (null == eu ? void 0 : eu.type) === m.Z.PROFILE_EFFECT ? X.cardLowOpacity : null) }),
                                  (0, r.jsx)(g.Text, {
                                      variant: 'text-lg/bold',
                                      className: X.productName,
                                      children: em
                                  }),
                                  t.type === m.Z.VARIANTS_GROUP
                                      ? (0, r.jsx)(z.P, {
                                            product: t,
                                            minimal: !el
                                        })
                                      : null,
                                  (0, r.jsxs)('div', {
                                      className: X.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: ev ? void 0 : X.innerBlur,
                                              children: eV()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: X.innerHover,
                                              children: eM()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(D.Z, {
                              category: i,
                              className: X.limitedTimeBadge,
                              display: 'card'
                          }),
                          eS &&
                              !ev &&
                              !ex &&
                              (0, r.jsx)(g.TextBadge, {
                                  text: Q.intl.string(Q.t.y2b7CA),
                                  disableColor: !0,
                                  className: X.newBadge
                              })
                      ]
                  })
              })
          });
};
