r(47120), r(627341);
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(512722),
    o = r.n(l),
    c = r(278074),
    d = r(873546),
    u = r(180650),
    m = r(979554),
    f = r(399606),
    p = r(622535),
    C = r(663002),
    h = r(481060),
    g = r(37234),
    _ = r(727637),
    b = r(607070),
    x = r(100527),
    E = r(906732),
    I = r(1585),
    v = r(333867),
    T = r(197115),
    L = r(300284),
    S = r(876917),
    k = r(642619),
    N = r(210887),
    B = r(74538),
    j = r(335131),
    O = r(1870),
    Z = r(884697),
    y = r(664018),
    P = r(890249),
    R = r(635552),
    A = r(724994),
    w = r(297651),
    M = r(390698),
    H = r(813083),
    D = r(680942),
    F = r(558060),
    U = r(237031),
    W = r(616066),
    V = r(216541),
    z = r(832149),
    G = r(474936),
    K = r(689938),
    Y = r(352177);
let $ = (e) => {
        let { children: t, onClick: r, ...n } = e;
        return (0, s.jsx)(h.Button, {
            fullWidth: !0,
            look: h.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), r();
            },
            ...n,
            children: t
        });
    },
    X = (e) => {
        let { className: t, ...r } = e;
        return (0, s.jsx)(h.Button, {
            color: h.ButtonColors.BRAND,
            look: h.Button.Looks.FILLED,
            size: h.ButtonSizes.ICON,
            className: i()(Y.previewButton, t),
            innerClassName: Y.previewButtonInner,
            'aria-label': K.Z.Messages.PREVIEW,
            ...r,
            children: (0, s.jsx)(h.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: r, category: a, onMount: l, isGiftEasterEggEnabled: q, isInFeedView: J } = e,
        { analyticsLocations: Q } = (0, E.ZP)([...(J ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
        ee = n.useRef(null),
        { handleCardVisibilityChange: et } = (0, w.E)(t, J ? 'home' : 'full'),
        er = (0, _.Z)(ee),
        [es, en] = n.useState(!1),
        ea = er || es,
        [ei] = t.items,
        el = (0, f.e7)([b.Z], () => b.Z.useReducedMotion),
        eo = B.ZP.canUseCollectibles(r),
        ec = (0, Z.XM)(t, eo, !1),
        ed = n.useMemo(() => (0, Z.BH)(t, eo), [t, eo]),
        eu = (0, Z.G1)(t),
        em = (0, Z.rN)(t),
        { isPurchased: ef, isPartiallyPurchased: ep } = (0, A.L)(t),
        [eC, eh] = (0, f.Wu)([O.Z], () => [O.Z.isClaiming === t.skuId, null != O.Z.isClaiming && O.Z.isClaiming !== t.skuId]),
        eg = (0, f.e7)([N.Z], () => (0, C.wj)(N.Z.theme)),
        e_ = (0, P.m)('CollectiblesCollectedModal'),
        eb = (0, Z.x6)(t) || e_,
        ex = (0, Z.Yq)(t.skuId),
        { hoverVariant: eE } = (0, y.E)('CollectiblesShopTallCard'),
        eI = a.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    n.useEffect(() => {
        let { current: e } = ee;
        if (null == e) return;
        let t = () => en(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        n.useEffect(() => {
            null == l || l(ee);
        }, [l]);
    let ev = (0, L.Z)({ analyticsLocations: Q }),
        eT = n.useRef(null),
        { handleUseNow: eL, isApplying: eS } = (0, R.W)({ product: t }),
        ek = () => {
            if (((0, g.xf)(), ev(), t.type === m.Z.AVATAR_DECORATION && null != ei)) {
                o()(ei.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, I.ps)({
                        initialSelectedDecoration: ei,
                        analyticsLocations: Q
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, k.H)({
                    initialSelectedEffectId: ei.id,
                    analyticsLocations: Q
                });
        },
        eN = (e) => (r) => {
            (eT.current = r.currentTarget),
                (0, U.T)({
                    product: t,
                    category: a,
                    analyticsLocations: Q,
                    analyticsSource: e,
                    returnRef: eT
                });
        },
        eB = eN(x.Z.COLLECTIBLES_SHOP_CARD),
        ej = eN(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eO = () =>
            (0, s.jsx)('div', {
                className: Y.hoverUpsellContainer,
                children: (0, s.jsx)(T.Z, {
                    fullWidth: !0,
                    className: Y.__invalid_premiumSubscribeButton,
                    disabled: eh,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: K.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: G.Si.TIER_2
                })
            }),
        eZ = () =>
            ef || ep
                ? (0, s.jsx)(M.U, {
                      className: Y.priceTag,
                      isPartiallyPurchased: ep
                  })
                : eu
                  ? (0, s.jsx)(h.Text, {
                        variant: 'text-md/semibold',
                        className: Y.priceTag,
                        children: K.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, s.jsx)(F.Z, {
                        product: t,
                        discount: ed,
                        isPremiumUser: eo,
                        className: Y.priceTag
                    }),
        ey = () =>
            eu || d.tq
                ? null
                : em
                  ? (0, s.jsx)(X, { onClick: ej })
                  : (0, s.jsx)(D.Z, {
                        product: t,
                        returnRef: ee,
                        isGiftEasterEggEnabled: q,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eP = () => {
            if (eu && !eo && !em) return eO();
            let e = eu
                ? {
                      submitting: eC,
                      submittingStartedLabel: K.Z.Messages.COLLECTIBLES_COLLECTING,
                      submittingFinishedLabel: K.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                      onClick: async () => {
                          await (0, j.fK)(t.skuId),
                              (0, z.Z)({
                                  product: t,
                                  analyticsLocations: Q
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, v.Z)({
                              skuId: t.skuId,
                              analyticsLocations: Q,
                              returnRef: ee
                          })
                  };
            return (0, s.jsxs)('div', {
                className: Y.buttonsContainer,
                children: [
                    ep
                        ? null
                        : ef
                          ? (0, s.jsx)($, {
                                disabled: eh,
                                onClick: eb ? eL : ek,
                                submitting: eS,
                                children: K.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, s.jsx)($, {
                                disabled: eh,
                                className: Y.purchaseButton,
                                ...e,
                                children: eu ? K.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : K.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ec })
                            }),
                    ey()
                ]
            });
        };
    return (0, Z.x6)(t) && null != ed && ed.discountPercentage < 0
        ? null
        : (0, s.jsx)(p.$, {
              onChange: et,
              threshold: 0,
              children: (0, s.jsx)(h.FocusRing, {
                  children: (0, s.jsxs)(h.Clickable, {
                      innerRef: ee,
                      className: i()(eg ? Y.shopCardDark : Y.shopCard, {
                          [Y.partiallyOwned]: ep,
                          [Y.shopCardAnimation]: !el && eE !== y.D.NO_MOVEMENT,
                          [eg ? Y.shopCardDarkHighlighted : Y.shopCardHighlighted]: ea,
                          [Y.mysteryShopCard]: eI
                      }),
                      onBlur: () => en(!1),
                      onClick: eB,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          eu &&
                              (0, s.jsx)(h.Tooltip, {
                                  tooltipContentClassName: Y.premiumWheelTooltipContent,
                                  color: h.Tooltip.Colors.PRIMARY,
                                  text: K.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                                  children: (e) =>
                                      (0, s.jsx)(h.TextBadge, {
                                          ...e,
                                          className: Y.premiumWheelBadge,
                                          text: (0, s.jsx)(h.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: Y.premiumWheel
                                          })
                                      })
                              }),
                          (0, s.jsx)('div', {
                              className: Y.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, s.jsx)('div', {
                                          className: Y.profileEffectShopPreview,
                                          children: (0, s.jsx)(S.Z, {
                                              isHovering: ea,
                                              profileEffectId: ei.id,
                                              isPurchased: ef,
                                              removeSetHeight: !0
                                          })
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(ei.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, s.jsx)('div', {
                                              className: i()(Y.avatarContainer, eI && Y.mysteryAvatarContainer),
                                              children: (0, s.jsx)(W.R, {
                                                  item: ei,
                                                  user: r,
                                                  isPurchased: ef,
                                                  isHighlighted: ea
                                              })
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, s.jsx)(V.d, {
                                          product: t,
                                          user: r,
                                          isPurchased: ef,
                                          isHighlighted: ea
                                      })
                                  )
                                  .otherwise(() => null)
                          }),
                          ef
                              ? (0, s.jsx)('div', {
                                    className: Y.checkmarkWrapper,
                                    children: (0, s.jsx)(h.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: Y.checkmark
                                    })
                                })
                              : null,
                          (0, s.jsxs)('div', {
                              className: i()(Y.cardText, { [Y.cardTextBlur]: (null == ei ? void 0 : ei.type) === m.Z.PROFILE_EFFECT }),
                              children: [
                                  (0, s.jsx)('div', { className: i()(Y.cardBackground, eg ? Y.darkCardBackground : Y.lightCardBackground, (null == ei ? void 0 : ei.type) === m.Z.PROFILE_EFFECT ? Y.cardLowOpacity : null) }),
                                  (0, s.jsx)(h.Text, {
                                      variant: 'text-lg/bold',
                                      className: Y.productName,
                                      children: t.name
                                  }),
                                  (0, s.jsxs)('div', {
                                      className: Y.detailsWrapper,
                                      children: [
                                          (0, s.jsx)('div', {
                                              className: ep ? void 0 : Y.innerBlur,
                                              children: eZ()
                                          }),
                                          (0, s.jsx)('div', {
                                              className: Y.innerHover,
                                              children: eP()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, s.jsx)(H.Z, {
                              category: a,
                              className: Y.limitedTimeBadge,
                              display: 'card'
                          }),
                          ex &&
                              !ep &&
                              !ef &&
                              (0, s.jsx)(h.TextBadge, {
                                  text: K.Z.Messages.NEW,
                                  disableColor: !0,
                                  className: Y.newBadge
                              })
                      ]
                  })
              })
          });
};
