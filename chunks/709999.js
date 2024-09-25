r(47120), r(627341);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(512722),
    l = r.n(o),
    c = r(278074),
    d = r(873546),
    u = r(180650),
    f = r(979554),
    p = r(399606),
    m = r(663002),
    C = r(481060),
    _ = r(37234),
    g = r(727637),
    h = r(607070),
    b = r(100527),
    E = r(906732),
    I = r(1585),
    x = r(333867),
    T = r(197115),
    v = r(300284),
    S = r(876917),
    L = r(642619),
    N = r(210887),
    O = r(74538),
    B = r(335131),
    k = r(1870),
    j = r(884697),
    R = r(664018),
    A = r(890249),
    Z = r(635552),
    P = r(724994),
    M = r(390698),
    y = r(813083),
    w = r(680942),
    F = r(558060),
    H = r(237031),
    D = r(616066),
    U = r(216541),
    W = r(832149),
    G = r(474936),
    V = r(689938),
    z = r(352177);
let Y = (e) => {
        let { children: t, onClick: r, ...n } = e;
        return (0, a.jsx)(C.Button, {
            fullWidth: !0,
            look: C.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), r();
            },
            ...n,
            children: t
        });
    },
    K = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)(C.Button, {
            color: C.ButtonColors.BRAND,
            look: C.Button.Looks.FILLED,
            size: C.ButtonSizes.ICON,
            className: i()(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            'aria-label': V.Z.Messages.PREVIEW,
            ...r,
            children: (0, a.jsx)(C.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: r, category: s, onMount: o, isGiftEasterEggEnabled: X, isInFeedView: $ } = e,
        { analyticsLocations: q } = (0, E.ZP)([...($ ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
        Q = n.useRef(null),
        J = (0, g.Z)(Q),
        [ee, et] = n.useState(!1),
        er = J || ee,
        [ea] = t.items,
        en = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
        es = O.ZP.canUseCollectibles(r),
        ei = (0, j.XM)(t, es, !1),
        eo = n.useMemo(() => (0, j.BH)(t, es), [t, es]),
        el = (0, j.G1)(t),
        ec = (0, j.rN)(t),
        { isPurchased: ed, isPartiallyPurchased: eu } = (0, P.L)(t),
        [ef, ep] = (0, p.Wu)([k.Z], () => [k.Z.isClaiming === t.skuId, null != k.Z.isClaiming && k.Z.isClaiming !== t.skuId]),
        em = (0, p.e7)([N.Z], () => (0, m.wj)(N.Z.theme)),
        eC = (0, A.m)('CollectiblesCollectedModal'),
        e_ = (0, j.x6)(t) || eC,
        eg = (0, j.Yq)(t.skuId),
        { hoverVariant: eh } = (0, R.E)('CollectiblesShopTallCard'),
        eb = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    n.useEffect(() => {
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
        n.useEffect(() => {
            null == o || o(Q);
        }, [o]);
    let eE = (0, v.Z)({ analyticsLocations: q }),
        eI = n.useRef(null),
        { handleUseNow: ex, isApplying: eT } = (0, Z.W)({ product: t }),
        ev = () => {
            if (((0, _.xf)(), eE(), t.type === f.Z.AVATAR_DECORATION && null != ea)) {
                l()(ea.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, I.ps)({
                        initialSelectedDecoration: ea,
                        analyticsLocations: q
                    });
                return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
                (0, L.H)({
                    initialSelectedEffectId: ea.id,
                    analyticsLocations: q
                });
        },
        eS = (e) => (r) => {
            (eI.current = r.currentTarget),
                (0, H.T)({
                    product: t,
                    category: s,
                    analyticsLocations: q,
                    analyticsSource: e,
                    returnRef: eI
                });
        },
        eL = eS(b.Z.COLLECTIBLES_SHOP_CARD),
        eN = eS(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eO = () =>
            (0, a.jsx)('div', {
                className: z.hoverUpsellContainer,
                children: (0, a.jsx)(T.Z, {
                    fullWidth: !0,
                    className: z.__invalid_premiumSubscribeButton,
                    disabled: ep,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: G.Si.TIER_2
                })
            }),
        eB = () =>
            ed || eu
                ? (0, a.jsx)(M.U, {
                      className: z.priceTag,
                      isPartiallyPurchased: eu
                  })
                : el
                  ? (0, a.jsx)(C.Text, {
                        variant: 'text-md/semibold',
                        className: z.priceTag,
                        children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, a.jsx)(F.Z, {
                        product: t,
                        discount: eo,
                        isPremiumUser: es,
                        className: z.priceTag
                    }),
        ek = () =>
            el || d.tq
                ? null
                : ec
                  ? (0, a.jsx)(K, { onClick: eN })
                  : (0, a.jsx)(w.Z, {
                        product: t,
                        returnRef: Q,
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
                          await (0, B.fK)(t.skuId),
                              (0, W.Z)({
                                  product: t,
                                  analyticsLocations: q
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, x.Z)({
                              skuId: t.skuId,
                              analyticsLocations: q,
                              returnRef: Q
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
                                onClick: e_ ? ex : ev,
                                submitting: eT,
                                children: V.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, a.jsx)(Y, {
                                disabled: ep,
                                className: z.purchaseButton,
                                ...e,
                                children: el ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ei })
                            }),
                    ek()
                ]
            });
        };
    return (0, j.x6)(t) && null != eo && eo.discountPercentage < 0
        ? null
        : (0, a.jsx)(C.FocusRing, {
              children: (0, a.jsxs)(C.Clickable, {
                  innerRef: Q,
                  className: i()(em ? z.shopCardDark : z.shopCard, {
                      [z.partiallyOwned]: eu,
                      [z.shopCardAnimation]: !en && eh !== R.D.NO_MOVEMENT,
                      [em ? z.shopCardDarkHighlighted : z.shopCardHighlighted]: er,
                      [z.mysteryShopCard]: eb
                  }),
                  onBlur: () => et(!1),
                  onClick: eL,
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
                                      children: (0, a.jsx)(S.Z, {
                                          isHovering: er,
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
                                          className: i()(z.avatarContainer, eb && z.mysteryAvatarContainer),
                                          children: (0, a.jsx)(D.R, {
                                              item: ea,
                                              user: r,
                                              isPurchased: ed,
                                              isHighlighted: er
                                          })
                                      })
                                  )
                              )
                              .with(f.Z.BUNDLE, () =>
                                  (0, a.jsx)(U.d, {
                                      product: t,
                                      user: r,
                                      isPurchased: ed,
                                      isHighlighted: er
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
                          className: i()(z.cardText, { [z.cardTextBlur]: (null == ea ? void 0 : ea.type) === f.Z.PROFILE_EFFECT }),
                          children: [
                              (0, a.jsx)('div', { className: i()(z.cardBackground, em ? z.darkCardBackground : z.lightCardBackground, (null == ea ? void 0 : ea.type) === f.Z.PROFILE_EFFECT ? z.cardLowOpacity : null) }),
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
                                          children: eB()
                                      }),
                                      (0, a.jsx)('div', {
                                          className: z.innerHover,
                                          children: ej()
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, a.jsx)(y.Z, {
                          category: s,
                          className: z.limitedTimeBadge,
                          display: 'card'
                      }),
                      eg &&
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
