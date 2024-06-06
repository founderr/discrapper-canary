"use strict";
s.r(t), s("47120"), s("627341");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  r = s.n(n),
  i = s("512722"),
  o = s.n(i),
  u = s("278074"),
  c = s("979554"),
  d = s("399606"),
  f = s("692547"),
  C = s("663002"),
  E = s("481060"),
  p = s("37234"),
  m = s("727637"),
  g = s("100527"),
  S = s("906732"),
  h = s("1585"),
  I = s("333867"),
  T = s("197115"),
  x = s("300284"),
  _ = s("876917"),
  N = s("642619"),
  L = s("210887"),
  b = s("725808"),
  R = s("794358"),
  v = s("466111"),
  A = s("26290"),
  P = s("74538"),
  O = s("335131"),
  j = s("1870"),
  y = s("884697"),
  M = s("724994"),
  k = s("624377"),
  B = s("390698"),
  F = s("813083"),
  D = s("680942"),
  U = s("558060"),
  H = s("237031"),
  w = s("616066"),
  G = s("216541"),
  W = s("832149"),
  Y = s("474936"),
  V = s("689938"),
  K = s("775087");
let z = e => {
    let {
      children: t,
      onClick: s,
      ...l
    } = e;
    return (0, a.jsx)(E.Button, {
      fullWidth: !0,
      look: E.Button.Looks.FILLED,
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
    return (0, a.jsx)(E.Button, {
      color: E.ButtonColors.BRAND,
      look: E.Button.Looks.FILLED,
      size: E.ButtonSizes.ICON,
      className: r()(K.previewButton, t),
      innerClassName: K.previewButtonInner,
      "aria-label": V.default.Messages.PREVIEW,
      ...s,
      children: (0, a.jsx)(R.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    user: s,
    category: n,
    onMount: i,
    isGiftEasterEggEnabled: R
  } = e, {
    analyticsLocations: X
  } = (0, S.default)(g.default.COLLECTIBLES_SHOP_CARD), q = l.useRef(null), Q = (0, m.default)(q), [$, J] = l.useState(!1), ee = Q || $, [et] = t.items, {
    backgroundColors: es
  } = (0, k.default)(t.styles), ea = P.default.canUseCollectibles(s), el = (0, y.getFormattedPriceForCollectiblesProduct)(t, ea, !1), en = l.useMemo(() => (0, y.getProductDiscount)(t, ea), [t, ea]), er = (0, y.isPremiumCollectiblesProduct)(t), ei = (0, y.isFreeCollectiblesProduct)(t), {
    isPurchased: eo,
    isPartiallyPurchased: eu
  } = (0, M.useProductPurchaseState)(t), [ec, ed] = (0, d.useStateFromStoresArray)([j.default], () => [j.default.isClaiming === t.skuId, null != j.default.isClaiming && j.default.isClaiming !== t.skuId]), ef = (0, d.useStateFromStores)([L.default], () => (0, C.isThemeDark)(L.default.theme)), eC = (0, y.isProductNew)(t.skuId);
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
  let eE = (0, x.default)({
      analyticsLocations: X
    }),
    ep = l.useRef(null),
    em = () => {
      if ((0, p.popLayer)(), eE(), t.type === c.CollectiblesItemType.AVATAR_DECORATION && null != et) {
        o()(et.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: et,
          analyticsLocations: X
        });
        return
      }
      t.type === c.CollectiblesItemType.PROFILE_EFFECT && (0, N.openProfileEffectModal)({
        initialSelectedEffectId: et.id,
        analyticsLocations: X
      })
    },
    eg = e => s => {
      ep.current = s.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: n,
        analyticsLocations: X,
        analyticsSource: e,
        returnRef: ep
      })
    },
    eS = eg(g.default.COLLECTIBLES_SHOP_CARD),
    eh = eg(g.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eI = () => (0, a.jsx)("div", {
      className: K.hoverUpsellContainer,
      children: (0, a.jsx)(T.default, {
        fullWidth: !0,
        className: K.__invalid_premiumSubscribeButton,
        disabled: ed,
        onClick: e => e.stopPropagation(),
        buttonText: V.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    eT = () => eo || eu ? (0, a.jsx)(B.AlreadyOwned, {
      className: K.priceTag,
      isPartiallyPurchased: eu
    }) : er ? (0, a.jsx)(E.Text, {
      variant: "text-md/semibold",
      className: K.priceTag,
      children: V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(U.default, {
      product: t,
      discount: en,
      isPremiumUser: ea,
      className: K.priceTag
    }),
    ex = () => er ? null : ei ? (0, a.jsx)(Z, {
      onClick: eh
    }) : (0, a.jsx)(D.default, {
      product: t,
      returnRef: q,
      isGiftEasterEggEnabled: R,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e_ = () => {
      if (er && !ea && !ei) return eI();
      let e = er ? {
        submitting: ec,
        submittingStartedLabel: V.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: V.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, O.claimPremiumCollectiblesProduct)(t.skuId), (0, W.default)({
            product: t,
            analyticsLocations: X
          })
        }
      } : {
        onClick: () => (0, I.default)({
          skuId: t.skuId,
          analyticsLocations: X,
          returnRef: q
        })
      };
      return (0, a.jsxs)("div", {
        className: K.buttonsContainer,
        children: [eu ? null : eo ? (0, a.jsx)(z, {
          disabled: ed,
          onClick: em,
          children: V.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(z, {
          disabled: ed,
          className: K.purchaseButton,
          ...e,
          children: er ? V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: el
          })
        }), ex()]
      })
    },
    eN = ef ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, y.isBundleProduct)(t) && null != en && en.discountPercentage < 0 ? null : (0, a.jsx)(E.FocusRing, {
    children: (0, a.jsxs)(E.Clickable, {
      innerRef: q,
      className: r()(K.shopCard, K.shopCardAnimation, {
        [K.partiallyOwned]: eu
      }),
      onBlur: () => J(!1),
      onClick: eS,
      style: null != es ? {
        backgroundColor: ef ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: ee ? eN : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, a.jsx)(E.Tooltip, {
        tooltipContentClassName: K.premiumWheelTooltipContent,
        color: E.Tooltip.Colors.PRIMARY,
        text: V.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(A.TextBadge, {
          ...e,
          className: K.premiumWheelBadge,
          text: (0, a.jsx)(v.default, {
            className: K.premiumWheel
          })
        })
      }), (0, a.jsx)("div", {
        className: K.preview,
        children: (0, u.match)(t.type).with(c.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsx)("div", {
          className: K.profileEffectShopPreview,
          children: (0, a.jsx)(_.default, {
            isHovering: ee,
            profileEffectId: et.id,
            isPurchased: eo,
            removeSetHeight: !0
          })
        })).with(c.CollectiblesItemType.AVATAR_DECORATION, () => (o()(et.type === c.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, a.jsx)("div", {
          className: K.avatarContainer,
          children: (0, a.jsx)(w.AvatarDecorationPreview, {
            item: et,
            user: s,
            isPurchased: eo,
            isHighlighted: ee
          })
        }))).with(c.CollectiblesItemType.BUNDLE, () => (0, a.jsx)(G.BundlePreview, {
          product: t,
          user: s,
          isPurchased: eo,
          isHighlighted: ee
        })).otherwise(() => null)
      }), eo ? (0, a.jsx)("div", {
        className: K.checkmarkWrapper,
        children: (0, a.jsx)(b.default, {
          width: 38,
          height: 38,
          className: K.checkmark
        })
      }) : null, (0, a.jsxs)("div", {
        className: r()(K.cardText, {
          [K.cardTextBlur]: (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, a.jsx)("div", {
          className: r()(K.cardBackground, ef ? K.darkCardBackground : K.lightCardBackground, (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT ? K.cardLowOpacity : null)
        }), (0, a.jsx)(E.Text, {
          variant: "text-lg/bold",
          className: K.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: K.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: eu ? void 0 : K.innerBlur,
            children: eT()
          }), (0, a.jsx)("div", {
            className: K.innerHover,
            children: e_()
          })]
        })]
      }), (0, a.jsx)(F.default, {
        category: n,
        className: K.limitedTimeBadge,
        display: "card"
      }), eC && !eu && !eo && (0, a.jsx)(A.TextBadge, {
        text: V.default.Messages.NEW,
        disableColor: !0,
        className: K.newBadge
      })]
    })
  })
}