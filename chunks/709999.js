s(47120), s(627341);
var a = s(200651),
    r = s(192379),
    n = s(120356),
    i = s.n(n),
    l = s(512722),
    o = s.n(l),
    c = s(278074),
    d = s(873546),
    u = s(180650),
    m = s(979554),
    C = s(399606),
    f = s(663002),
    p = s(481060),
    h = s(37234),
    g = s(727637),
    _ = s(607070),
    b = s(100527),
    x = s(906732),
    E = s(1585),
    I = s(333867),
    T = s(197115),
    L = s(300284),
    v = s(876917),
    S = s(642619),
    N = s(210887),
    k = s(74538),
    B = s(335131),
    j = s(1870),
    O = s(884697),
    Z = s(664018),
    y = s(890249),
    P = s(635552),
    R = s(724994),
    A = s(390698),
    w = s(813083),
    M = s(680942),
    H = s(558060),
    D = s(237031),
    F = s(616066),
    U = s(216541),
    W = s(832149),
    V = s(474936),
    z = s(689938),
    G = s(352177);
let K = (e) => {
        let { children: t, onClick: s, ...r } = e;
        return (0, a.jsx)(p.Button, {
            fullWidth: !0,
            look: p.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), s();
            },
            ...r,
            children: t
        });
    },
    Y = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)(p.Button, {
            color: p.ButtonColors.BRAND,
            look: p.Button.Looks.FILLED,
            size: p.ButtonSizes.ICON,
            className: i()(G.previewButton, t),
            innerClassName: G.previewButtonInner,
            'aria-label': z.Z.Messages.PREVIEW,
            ...s,
            children: (0, a.jsx)(p.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: s, category: n, onMount: l, isGiftEasterEggEnabled: $, isInFeedView: X } = e,
        { analyticsLocations: q } = (0, x.ZP)([...(X ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
        J = r.useRef(null),
        Q = (0, g.Z)(J),
        [ee, et] = r.useState(!1),
        es = Q || ee,
        [ea] = t.items,
        er = (0, C.e7)([_.Z], () => _.Z.useReducedMotion),
        en = k.ZP.canUseCollectibles(s),
        ei = (0, O.XM)(t, en, !1),
        el = r.useMemo(() => (0, O.BH)(t, en), [t, en]),
        eo = (0, O.G1)(t),
        ec = (0, O.rN)(t),
        { isPurchased: ed, isPartiallyPurchased: eu } = (0, R.L)(t),
        [em, eC] = (0, C.Wu)([j.Z], () => [j.Z.isClaiming === t.skuId, null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId]),
        ef = (0, C.e7)([N.Z], () => (0, f.wj)(N.Z.theme)),
        ep = (0, y.m)('CollectiblesCollectedModal'),
        eh = (0, O.x6)(t) || ep,
        eg = (0, O.Yq)(t.skuId),
        { hoverVariant: e_ } = (0, Z.E)('CollectiblesShopTallCard'),
        eb = n.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
    r.useEffect(() => {
        let { current: e } = J;
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
            null == l || l(J);
        }, [l]);
    let ex = (0, L.Z)({ analyticsLocations: q }),
        eE = r.useRef(null),
        { handleUseNow: eI, isApplying: eT } = (0, P.W)({ product: t }),
        eL = () => {
            if (((0, h.xf)(), ex(), t.type === m.Z.AVATAR_DECORATION && null != ea)) {
                o()(ea.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, E.ps)({
                        initialSelectedDecoration: ea,
                        analyticsLocations: q
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, S.H)({
                    initialSelectedEffectId: ea.id,
                    analyticsLocations: q
                });
        },
        ev = (e) => (s) => {
            (eE.current = s.currentTarget),
                (0, D.T)({
                    product: t,
                    category: n,
                    analyticsLocations: q,
                    analyticsSource: e,
                    returnRef: eE
                });
        },
        eS = ev(b.Z.COLLECTIBLES_SHOP_CARD),
        eN = ev(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        ek = () =>
            (0, a.jsx)('div', {
                className: G.hoverUpsellContainer,
                children: (0, a.jsx)(T.Z, {
                    fullWidth: !0,
                    className: G.__invalid_premiumSubscribeButton,
                    disabled: eC,
                    onClick: (e) => e.stopPropagation(),
                    buttonText: z.Z.Messages.UNLOCK_WITH_NITRO,
                    subscriptionTier: V.Si.TIER_2
                })
            }),
        eB = () =>
            ed || eu
                ? (0, a.jsx)(A.U, {
                      className: G.priceTag,
                      isPartiallyPurchased: eu
                  })
                : eo
                  ? (0, a.jsx)(p.Text, {
                        variant: 'text-md/semibold',
                        className: G.priceTag,
                        children: z.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    })
                  : (0, a.jsx)(H.Z, {
                        product: t,
                        discount: el,
                        isPremiumUser: en,
                        className: G.priceTag
                    }),
        ej = () =>
            eo || d.tq
                ? null
                : ec
                  ? (0, a.jsx)(Y, { onClick: eN })
                  : (0, a.jsx)(M.Z, {
                        product: t,
                        returnRef: J,
                        isGiftEasterEggEnabled: $,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eO = () => {
            if (eo && !en && !ec) return ek();
            let e = eo
                ? {
                      submitting: em,
                      submittingStartedLabel: z.Z.Messages.COLLECTIBLES_COLLECTING,
                      submittingFinishedLabel: z.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
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
                          (0, I.Z)({
                              skuId: t.skuId,
                              analyticsLocations: q,
                              returnRef: J
                          })
                  };
            return (0, a.jsxs)('div', {
                className: G.buttonsContainer,
                children: [
                    eu
                        ? null
                        : ed
                          ? (0, a.jsx)(K, {
                                disabled: eC,
                                onClick: eh ? eI : eL,
                                submitting: eT,
                                children: z.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                          : (0, a.jsx)(K, {
                                disabled: eC,
                                className: G.purchaseButton,
                                ...e,
                                children: eo ? z.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : z.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ei })
                            }),
                    ej()
                ]
            });
        };
    return (0, O.x6)(t) && null != el && el.discountPercentage < 0
        ? null
        : (0, a.jsx)(p.FocusRing, {
              children: (0, a.jsxs)(p.Clickable, {
                  innerRef: J,
                  className: i()(ef ? G.shopCardDark : G.shopCard, {
                      [G.partiallyOwned]: eu,
                      [G.shopCardAnimation]: !er && e_ !== Z.D.NO_MOVEMENT,
                      [ef ? G.shopCardDarkHighlighted : G.shopCardHighlighted]: es,
                      [G.mysteryShopCard]: eb
                  }),
                  onBlur: () => et(!1),
                  onClick: eS,
                  id: 'shop-item-'.concat(t.skuId),
                  children: [
                      eo &&
                          (0, a.jsx)(p.Tooltip, {
                              tooltipContentClassName: G.premiumWheelTooltipContent,
                              color: p.Tooltip.Colors.PRIMARY,
                              text: z.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                              children: (e) =>
                                  (0, a.jsx)(p.TextBadge, {
                                      ...e,
                                      className: G.premiumWheelBadge,
                                      text: (0, a.jsx)(p.NitroWheelIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: G.premiumWheel
                                      })
                                  })
                          }),
                      (0, a.jsx)('div', {
                          className: G.preview,
                          children: (0, c.EQ)(t.type)
                              .with(m.Z.PROFILE_EFFECT, () =>
                                  (0, a.jsx)('div', {
                                      className: G.profileEffectShopPreview,
                                      children: (0, a.jsx)(v.Z, {
                                          isHovering: es,
                                          profileEffectId: ea.id,
                                          isPurchased: ed,
                                          removeSetHeight: !0
                                      })
                                  })
                              )
                              .with(
                                  m.Z.AVATAR_DECORATION,
                                  () => (
                                      o()(ea.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                      (0, a.jsx)('div', {
                                          className: i()(G.avatarContainer, eb && G.mysteryAvatarContainer),
                                          children: (0, a.jsx)(F.R, {
                                              item: ea,
                                              user: s,
                                              isPurchased: ed,
                                              isHighlighted: es
                                          })
                                      })
                                  )
                              )
                              .with(m.Z.BUNDLE, () =>
                                  (0, a.jsx)(U.d, {
                                      product: t,
                                      user: s,
                                      isPurchased: ed,
                                      isHighlighted: es
                                  })
                              )
                              .otherwise(() => null)
                      }),
                      ed
                          ? (0, a.jsx)('div', {
                                className: G.checkmarkWrapper,
                                children: (0, a.jsx)(p.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 38,
                                    height: 38,
                                    className: G.checkmark
                                })
                            })
                          : null,
                      (0, a.jsxs)('div', {
                          className: i()(G.cardText, { [G.cardTextBlur]: (null == ea ? void 0 : ea.type) === m.Z.PROFILE_EFFECT }),
                          children: [
                              (0, a.jsx)('div', { className: i()(G.cardBackground, ef ? G.darkCardBackground : G.lightCardBackground, (null == ea ? void 0 : ea.type) === m.Z.PROFILE_EFFECT ? G.cardLowOpacity : null) }),
                              (0, a.jsx)(p.Text, {
                                  variant: 'text-lg/bold',
                                  className: G.productName,
                                  children: t.name
                              }),
                              (0, a.jsxs)('div', {
                                  className: G.detailsWrapper,
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: eu ? void 0 : G.innerBlur,
                                          children: eB()
                                      }),
                                      (0, a.jsx)('div', {
                                          className: G.innerHover,
                                          children: eO()
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, a.jsx)(w.Z, {
                          category: n,
                          className: G.limitedTimeBadge,
                          display: 'card'
                      }),
                      eg &&
                          !eu &&
                          !ed &&
                          (0, a.jsx)(p.TextBadge, {
                              text: z.Z.Messages.NEW,
                              disableColor: !0,
                              className: G.newBadge
                          })
                  ]
              })
          });
};
