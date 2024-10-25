n(47120), n(627341);
var r = n(200651),
    s = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    m = n(979554),
    f = n(399606),
    p = n(622535),
    C = n(663002),
    h = n(481060),
    g = n(37234),
    _ = n(727637),
    b = n(607070),
    x = n(100527),
    E = n(906732),
    v = n(1585),
    I = n(333867),
    T = n(197115),
    L = n(300284),
    S = n(876917),
    k = n(642619),
    N = n(210887),
    B = n(74538),
    j = n(335131),
    O = n(1870),
    Z = n(884697),
    y = n(664018),
    P = n(890249),
    R = n(635552),
    A = n(724994),
    w = n(297651),
    M = n(390698),
    H = n(813083),
    D = n(680942),
    F = n(558060),
    U = n(237031),
    W = n(616066),
    V = n(216541),
    z = n(832149),
    G = n(474936),
    Y = n(689938),
    K = n(352177);
let $ = (e) => {
        let { children: t, onClick: n, ...s } = e;
        return (0, r.jsx)(h.Button, {
            fullWidth: !0,
            look: h.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...s,
            children: t
        });
    },
    X = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(h.Button, {
            color: h.ButtonColors.BRAND,
            look: h.Button.Looks.FILLED,
            size: h.ButtonSizes.ICON,
            className: i()(K.previewButton, t),
            innerClassName: K.previewButtonInner,
            'aria-label': Y.Z.Messages.PREVIEW,
            ...n,
            children: (0, r.jsx)(h.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: a, onMount: l, isGiftEasterEggEnabled: q, isInFeedView: J } = e,
        { analyticsLocations: Q } = (0, E.ZP)([...(J ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
        ee = s.useRef(null),
        { handleCardVisibilityChange: et } = (0, w.E)(t, J ? 'home' : 'full'),
        en = (0, _.Z)(ee),
        [er, es] = s.useState(!1),
        ea = en || er,
        [ei] = t.items,
        el = (0, f.e7)([b.Z], () => b.Z.useReducedMotion),
        eo = B.ZP.canUseCollectibles(n),
        ec = (0, Z.XM)(t, eo, !1),
        ed = s.useMemo(() => (0, Z.BH)(t, eo), [t, eo]),
        eu = (0, Z.G1)(t),
        em = (0, Z.rN)(t),
        { isPurchased: ef, isPartiallyPurchased: ep } = (0, A.L)(t),
        [eC, eh] = (0, f.Wu)([O.Z], () => [O.Z.isClaiming === t.skuId, null != O.Z.isClaiming && O.Z.isClaiming !== t.skuId]),
        eg = (0, f.e7)([N.Z], () => (0, C.wj)(N.Z.theme)),
        e_ = (0, P.m)('CollectiblesCollectedModal'),
        eb = (0, Z.x6)(t) || e_,
        ex = (0, Z.Yq)(t.skuId),
        { hoverVariant: eE } = (0, y.E)('CollectiblesShopTallCard'),
        ev = a.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    s.useEffect(() => {
        let { current: e } = ee;
        if (null == e) return;
        let t = () => es(!0);
        return (
            e.addEventListener('focusin', t),
            e.blur(),
            () => {
                e.removeEventListener('focusin', t);
            }
        );
    }, []),
        s.useEffect(() => {
            null == l || l(ee);
        }, [l]);
    let eI = (0, L.Z)({ analyticsLocations: Q }),
        eT = s.useRef(null),
        { handleUseNow: eL, isApplying: eS } = (0, R.W)({ product: t }),
        ek = () => {
            if (((0, g.xf)(), eI(), t.type === m.Z.AVATAR_DECORATION && null != ei)) {
                o()(ei.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, v.ps)({
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
        eN = (e) => (n) => {
            (eT.current = n.currentTarget),
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
            (0, r.jsx)('div', {
                className: K.hoverUpsellContainer,
                children: (0, r.jsx)(T.Z, {
                    fullWidth: !0,
                    className: K.__invalid_premiumSubscribeButton,
                    disabled: eh,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: Y.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: G.Si.TIER_2
                })
            }),
        eZ = () =>
            ef || ep
                ? (0, r.jsx)(M.U, {
                      className: K.priceTag,
                      isPartiallyPurchased: ep
                  })
                : eu
                  ? (0, r.jsx)(h.Text, {
                        variant: 'text-md/semibold',
                        className: K.priceTag,
                        children: Y.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, r.jsx)(F.Z, {
                        product: t,
                        discount: ed,
                        isPremiumUser: eo,
                        className: K.priceTag
                    }),
        ey = () =>
            eu || d.tq
                ? null
                : em
                  ? (0, r.jsx)(X, { onClick: ej })
                  : (0, r.jsx)(D.Z, {
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
                      submittingStartedLabel: Y.Z.Messages.COLLECTIBLES_COLLECTING,
                      submittingFinishedLabel: Y.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
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
                          (0, I.Z)({
                              skuId: t.skuId,
                              analyticsLocations: Q,
                              returnRef: ee
                          })
                  };
            return (0, r.jsxs)('div', {
                className: K.buttonsContainer,
                children: [
                    ep
                        ? null
                        : ef
                          ? (0, r.jsx)($, {
                                disabled: eh,
                                onClick: eb ? eL : ek,
                                submitting: eS,
                                children: Y.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, r.jsx)($, {
                                disabled: eh,
                                className: K.purchaseButton,
                                ...e,
                                children: eu ? Y.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : Y.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ec })
                            }),
                    ey()
                ]
            });
        };
    return (0, Z.x6)(t) && null != ed && ed.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: et,
              threshold: 0,
              children: (0, r.jsx)(h.FocusRing, {
                  children: (0, r.jsxs)(h.Clickable, {
                      innerRef: ee,
                      className: i()(eg ? K.shopCardDark : K.shopCard, {
                          [K.partiallyOwned]: ep,
                          [K.shopCardAnimation]: !el && eE !== y.D.NO_MOVEMENT,
                          [eg ? K.shopCardDarkHighlighted : K.shopCardHighlighted]: ea,
                          [K.mysteryShopCard]: ev
                      }),
                      onBlur: () => es(!1),
                      onClick: eB,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          eu &&
                              (0, r.jsx)(h.Tooltip, {
                                  tooltipContentClassName: K.premiumWheelTooltipContent,
                                  color: h.Tooltip.Colors.PRIMARY,
                                  text: Y.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                                  children: (e) =>
                                      (0, r.jsx)(h.TextBadge, {
                                          ...e,
                                          className: K.premiumWheelBadge,
                                          text: (0, r.jsx)(h.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: K.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: K.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)('div', {
                                          className: K.profileEffectShopPreview,
                                          children: (0, r.jsx)(S.Z, {
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
                                          (0, r.jsx)('div', {
                                              className: i()(K.avatarContainer, ev && K.mysteryAvatarContainer),
                                              children: (0, r.jsx)(W.R, {
                                                  item: ei,
                                                  user: n,
                                                  isPurchased: ef,
                                                  isHighlighted: ea
                                              })
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)(V.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: ef,
                                          isHighlighted: ea
                                      })
                                  )
                                  .otherwise(() => null)
                          }),
                          ef
                              ? (0, r.jsx)('div', {
                                    className: K.checkmarkWrapper,
                                    children: (0, r.jsx)(h.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: K.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: i()(K.cardText, { [K.cardTextBlur]: (null == ei ? void 0 : ei.type) === m.Z.PROFILE_EFFECT }),
                              children: [
                                  (0, r.jsx)('div', { className: i()(K.cardBackground, eg ? K.darkCardBackground : K.lightCardBackground, (null == ei ? void 0 : ei.type) === m.Z.PROFILE_EFFECT ? K.cardLowOpacity : null) }),
                                  (0, r.jsx)(h.Text, {
                                      variant: 'text-lg/bold',
                                      className: K.productName,
                                      children: t.name
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: K.detailsWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: ep ? void 0 : K.innerBlur,
                                              children: eZ()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: K.innerHover,
                                              children: eP()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(H.Z, {
                              category: a,
                              className: K.limitedTimeBadge,
                              display: 'card'
                          }),
                          ex &&
                              !ep &&
                              !ef &&
                              (0, r.jsx)(h.TextBadge, {
                                  text: Y.Z.Messages.NEW,
                                  disableColor: !0,
                                  className: K.newBadge
                              })
                      ]
                  })
              })
          });
};
