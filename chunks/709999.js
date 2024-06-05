"use strict";
s.r(t), s("47120"), s("627341");
var a = s("735250"),
  l = s("470079"),
  r = s("120356"),
  n = s.n(r),
  i = s("512722"),
  o = s.n(i),
  c = s("278074"),
  u = s("979554"),
  d = s("399606"),
  f = s("692547"),
  C = s("663002"),
  p = s("481060"),
  m = s("37234"),
  g = s("727637"),
  E = s("100527"),
  h = s("906732"),
  b = s("1585"),
  x = s("333867"),
  S = s("197115"),
  v = s("300284"),
  I = s("876917"),
  L = s("642619"),
  T = s("210887"),
  N = s("725808"),
  _ = s("794358"),
  y = s("466111"),
  j = s("26290"),
  A = s("74538"),
  O = s("335131"),
  P = s("1870"),
  k = s("884697"),
  R = s("724994"),
  B = s("624377"),
  M = s("390698"),
  D = s("813083"),
  w = s("680942"),
  F = s("558060"),
  H = s("237031"),
  U = s("616066"),
  W = s("216541"),
  G = s("832149"),
  V = s("474936"),
  K = s("689938"),
  z = s("775087");
let Y = e => {
    let {
      children: t,
      onClick: s,
      ...l
    } = e;
    return (0, a.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), s()
      },
      ...l,
      children: t
    })
  },
  Z = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, a.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(z.previewButton, t),
      innerClassName: z.previewButtonInner,
      "aria-label": K.default.Messages.PREVIEW,
      ...s,
      children: (0, a.jsx)(_.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    user: s,
    category: r,
    onMount: i,
    isGiftEasterEggEnabled: _
  } = e, {
    analyticsLocations: X
  } = (0, h.default)(E.default.COLLECTIBLES_SHOP_CARD), q = l.useRef(null), Q = (0, g.default)(q), [$, J] = l.useState(!1), ee = Q || $, [et] = t.items, {
    backgroundColors: es
  } = (0, B.default)(t.styles), ea = A.default.canUseCollectibles(s), el = (0, k.getFormattedPriceForCollectiblesProduct)(t, ea, !1), er = l.useMemo(() => (0, k.getProductDiscount)(t, ea), [t, ea]), en = (0, k.isPremiumCollectiblesProduct)(t), ei = (0, k.isFreeCollectiblesProduct)(t), {
    isPurchased: eo,
    isPartiallyPurchased: ec
  } = (0, R.useProductPurchaseState)(t), [eu, ed] = (0, d.useStateFromStoresArray)([P.default], () => [P.default.isClaiming === t.skuId, null != P.default.isClaiming && P.default.isClaiming !== t.skuId]), ef = (0, d.useStateFromStores)([T.default], () => (0, C.isThemeDark)(T.default.theme)), eC = (0, k.isProductNew)(t.skuId);
  l.useEffect(() => {
    let {
      current: e
    } = q;
    if (null == e) return;
    let t = () => J(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), l.useEffect(() => {
    null == i || i(q)
  }, [i]);
  let ep = (0, v.default)({
      analyticsLocations: X
    }),
    em = l.useRef(null),
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
    eE = e => s => {
      em.current = s.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: r,
        analyticsLocations: X,
        analyticsSource: e,
        returnRef: em
      })
    },
    eh = eE(E.default.COLLECTIBLES_SHOP_CARD),
    eb = eE(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ex = () => (0, a.jsx)("div", {
      className: z.hoverUpsellContainer,
      children: (0, a.jsx)(S.default, {
        fullWidth: !0,
        className: z.__invalid_premiumSubscribeButton,
        disabled: ed,
        onClick: e => e.stopPropagation(),
        buttonText: K.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    eS = () => eo || ec ? (0, a.jsx)(M.AlreadyOwned, {
      className: z.priceTag,
      isPartiallyPurchased: ec
    }) : en ? (0, a.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: z.priceTag,
      children: K.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(F.default, {
      product: t,
      discount: er,
      isPremiumUser: ea,
      className: z.priceTag
    }),
    ev = () => en ? null : ei ? (0, a.jsx)(Z, {
      onClick: eb
    }) : (0, a.jsx)(w.default, {
      product: t,
      returnRef: q,
      isGiftEasterEggEnabled: _,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eI = () => {
      if (en && !ea && !ei) return ex();
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
      return (0, a.jsxs)("div", {
        className: z.buttonsContainer,
        children: [ec ? null : eo ? (0, a.jsx)(Y, {
          disabled: ed,
          onClick: eg,
          children: K.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(Y, {
          disabled: ed,
          className: z.purchaseButton,
          ...e,
          children: en ? K.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : K.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: el
          })
        }), ev()]
      })
    },
    eL = ef ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, k.isBundleProduct)(t) && null != er && er.discountPercentage < 0 ? null : (0, a.jsx)(p.FocusRing, {
    children: (0, a.jsxs)(p.Clickable, {
      innerRef: q,
      className: n()(z.shopCard, z.shopCardAnimation, {
        [z.partiallyOwned]: ec
      }),
      onBlur: () => J(!1),
      onClick: eh,
      style: null != es ? {
        backgroundColor: ef ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: ee ? eL : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [en && (0, a.jsx)(p.Tooltip, {
        tooltipContentClassName: z.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: K.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(j.TextBadge, {
          ...e,
          className: z.premiumWheelBadge,
          text: (0, a.jsx)(y.default, {
            className: z.premiumWheel
          })
        })
      }), (0, a.jsx)("div", {
        className: z.preview,
        children: (0, c.match)(t.type).with(u.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsx)("div", {
          className: z.profileEffectShopPreview,
          children: (0, a.jsx)(I.default, {
            isHovering: ee,
            profileEffectId: et.id,
            isPurchased: eo,
            removeSetHeight: !0
          })
        })).with(u.CollectiblesItemType.AVATAR_DECORATION, () => (o()(et.type === u.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, a.jsx)("div", {
          className: z.avatarContainer,
          children: (0, a.jsx)(U.AvatarDecorationPreview, {
            item: et,
            user: s,
            isPurchased: eo,
            isHighlighted: ee
          })
        }))).with(u.CollectiblesItemType.BUNDLE, () => (0, a.jsx)(W.BundlePreview, {
          product: t,
          user: s,
          isPurchased: eo,
          isHighlighted: ee
        })).otherwise(() => null)
      }), eo ? (0, a.jsx)("div", {
        className: z.checkmarkWrapper,
        children: (0, a.jsx)(N.default, {
          width: 38,
          height: 38,
          className: z.checkmark
        })
      }) : null, (0, a.jsxs)("div", {
        className: n()(z.cardText, {
          [z.cardTextBlur]: (null == et ? void 0 : et.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, a.jsx)("div", {
          className: n()(z.cardBackground, ef ? z.darkCardBackground : z.lightCardBackground, (null == et ? void 0 : et.type) === u.CollectiblesItemType.PROFILE_EFFECT ? z.cardLowOpacity : null)
        }), (0, a.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: z.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: z.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: ec ? void 0 : z.innerBlur,
            children: eS()
          }), (0, a.jsx)("div", {
            className: z.innerHover,
            children: eI()
          })]
        })]
      }), (0, a.jsx)(D.default, {
        category: r,
        className: z.limitedTimeBadge,
        display: "card"
      }), eC && !ec && !eo && (0, a.jsx)(j.TextBadge, {
        text: K.default.Messages.NEW,
        disableColor: !0,
        className: z.newBadge
      })]
    })
  })
}