"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("512722"),
  o = a.n(i),
  c = a("278074"),
  u = a("979554"),
  d = a("399606"),
  f = a("692547"),
  C = a("663002"),
  p = a("481060"),
  m = a("37234"),
  g = a("727637"),
  E = a("100527"),
  h = a("906732"),
  b = a("1585"),
  x = a("333867"),
  S = a("197115"),
  v = a("300284"),
  I = a("876917"),
  L = a("642619"),
  T = a("210887"),
  N = a("725808"),
  _ = a("794358"),
  y = a("466111"),
  A = a("26290"),
  j = a("74538"),
  O = a("335131"),
  k = a("1870"),
  P = a("884697"),
  R = a("724994"),
  B = a("624377"),
  M = a("390698"),
  D = a("813083"),
  w = a("680942"),
  F = a("558060"),
  H = a("237031"),
  U = a("616066"),
  W = a("216541"),
  G = a("832149"),
  V = a("474936"),
  K = a("689938"),
  z = a("775087");
let Y = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  Z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(z.previewButton, t),
      innerClassName: z.previewButtonInner,
      "aria-label": K.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(_.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    user: a,
    category: r,
    onMount: i,
    isGiftEasterEggEnabled: _
  } = e, {
    analyticsLocations: X
  } = (0, h.default)(E.default.COLLECTIBLES_SHOP_CARD), q = s.useRef(null), Q = (0, g.default)(q), [$, J] = s.useState(!1), ee = Q || $, [et] = t.items, {
    backgroundColors: ea
  } = (0, B.default)(t.styles), el = j.default.canUseCollectibles(a), es = (0, P.getFormattedPriceForCollectiblesProduct)(t, el, !1), er = s.useMemo(() => (0, P.getProductDiscount)(t, el), [t, el]), en = (0, P.isPremiumCollectiblesProduct)(t), ei = (0, P.isFreeCollectiblesProduct)(t), {
    isPurchased: eo,
    isPartiallyPurchased: ec
  } = (0, R.useProductPurchaseState)(t), [eu, ed] = (0, d.useStateFromStoresArray)([k.default], () => [k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), ef = (0, d.useStateFromStores)([T.default], () => (0, C.isThemeDark)(T.default.theme)), eC = (0, P.isProductNew)(t.skuId);
  s.useEffect(() => {
    let {
      current: e
    } = q;
    if (null == e) return;
    let t = () => J(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), s.useEffect(() => {
    null == i || i(q)
  }, [i]);
  let ep = (0, v.default)({
      analyticsLocations: X
    }),
    em = s.useRef(null),
    eg = () => {
      if ((0, m.popLayer)(), ep(), t.type === u.CollectiblesItemType.AVATAR_DECORATION && null != et) {
        o()(et.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, b.openAvatarDecorationModal)({
          initialSelectedDecoration: et,
          analyticsLocations: X
        });
        return
      }
      t.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: et.id,
        analyticsLocations: X
      })
    },
    eE = e => a => {
      em.current = a.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: r,
        analyticsLocations: X,
        analyticsSource: e,
        returnRef: em
      })
    },
    eh = eE(E.default.COLLECTIBLES_SHOP_CARD),
    eb = eE(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ex = () => (0, l.jsx)("div", {
      className: z.hoverUpsellContainer,
      children: (0, l.jsx)(S.default, {
        fullWidth: !0,
        className: z.__invalid_premiumSubscribeButton,
        disabled: ed,
        onClick: e => e.stopPropagation(),
        buttonText: K.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    eS = () => eo || ec ? (0, l.jsx)(M.AlreadyOwned, {
      className: z.priceTag,
      isPartiallyPurchased: ec
    }) : en ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: z.priceTag,
      children: K.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(F.default, {
      product: t,
      discount: er,
      isPremiumUser: el,
      className: z.priceTag
    }),
    ev = () => en ? null : ei ? (0, l.jsx)(Z, {
      onClick: eb
    }) : (0, l.jsx)(w.default, {
      product: t,
      returnRef: q,
      isGiftEasterEggEnabled: _,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eI = () => {
      if (en && !el && !ei) return ex();
      let e = en ? {
        submitting: eu,
        submittingStartedLabel: K.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: K.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, O.claimPremiumCollectiblesProduct)(t.skuId), (0, G.default)({
            product: t,
            analyticsLocations: X
          })
        }
      } : {
        onClick: () => (0, x.default)({
          skuId: t.skuId,
          analyticsLocations: X,
          returnRef: q
        })
      };
      return (0, l.jsxs)("div", {
        className: z.buttonsContainer,
        children: [ec ? null : eo ? (0, l.jsx)(Y, {
          disabled: ed,
          onClick: eg,
          children: K.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(Y, {
          disabled: ed,
          className: z.purchaseButton,
          ...e,
          children: en ? K.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : K.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }), ev()]
      })
    },
    eL = ef ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, P.isBundleProduct)(t) && null != er && er < 0 ? null : (0, l.jsx)(p.FocusRing, {
    children: (0, l.jsxs)(p.Clickable, {
      innerRef: q,
      className: n()(z.shopCard, z.shopCardAnimation),
      onBlur: () => J(!1),
      onClick: eh,
      style: null != ea ? {
        backgroundColor: ef ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: ee ? eL : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [en && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: z.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: K.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(A.TextBadge, {
          ...e,
          className: z.premiumWheelBadge,
          text: (0, l.jsx)(y.default, {
            className: z.premiumWheel
          })
        })
      }), (0, c.match)(t.type).with(u.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
        className: z.profileEffectShopPreview,
        children: (0, l.jsx)(I.default, {
          isHovering: ee,
          profileEffectId: et.id,
          isPurchased: eo,
          removeSetHeight: !0
        })
      })).with(u.CollectiblesItemType.AVATAR_DECORATION, () => (o()(et.type === u.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, l.jsx)("div", {
        className: z.avatarContainer,
        children: (0, l.jsx)(U.AvatarDecorationPreview, {
          item: et,
          user: a,
          isPurchased: eo,
          isHighlighted: ee
        })
      }))).with(u.CollectiblesItemType.BUNDLE, () => (0, l.jsx)(W.BundlePreview, {
        product: t,
        user: a,
        isPurchased: eo,
        isHighlighted: ee
      })).otherwise(() => null), eo ? (0, l.jsx)("div", {
        className: z.checkmarkWrapper,
        children: (0, l.jsx)(N.default, {
          width: 38,
          height: 38,
          className: z.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(z.cardText, {
          [z.cardTextBlur]: (null == et ? void 0 : et.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n()(z.cardBackground, ef ? z.darkCardBackground : z.lightCardBackground, (null == et ? void 0 : et.type) === u.CollectiblesItemType.PROFILE_EFFECT ? z.cardLowOpacity : null)
        }), (0, l.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: z.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: z.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: ec ? void 0 : z.innerBlur,
            children: eS()
          }), (0, l.jsx)("div", {
            className: z.innerHover,
            children: eI()
          })]
        })]
      }), (0, l.jsx)(D.default, {
        category: r,
        className: z.limitedTimeBadge,
        display: "card"
      }), eC && (0, l.jsx)(A.TextBadge, {
        text: K.default.Messages.NEW,
        disableColor: !0,
        className: z.newBadge
      })]
    })
  })
}