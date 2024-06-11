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
  m = s("37234"),
  p = s("727637"),
  S = s("100527"),
  g = s("906732"),
  h = s("1585"),
  I = s("333867"),
  _ = s("197115"),
  T = s("300284"),
  x = s("876917"),
  L = s("642619"),
  N = s("210887"),
  b = s("725808"),
  A = s("794358"),
  v = s("466111"),
  R = s("74538"),
  P = s("335131"),
  O = s("1870"),
  y = s("884697"),
  j = s("724994"),
  M = s("624377"),
  k = s("390698"),
  B = s("813083"),
  D = s("680942"),
  F = s("558060"),
  U = s("237031"),
  H = s("616066"),
  w = s("216541"),
  G = s("832149"),
  W = s("474936"),
  V = s("689938"),
  Y = s("775087");
let K = e => {
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
  z = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, a.jsx)(E.Button, {
      color: E.ButtonColors.BRAND,
      look: E.Button.Looks.FILLED,
      size: E.ButtonSizes.ICON,
      className: r()(Y.previewButton, t),
      innerClassName: Y.previewButtonInner,
      "aria-label": V.default.Messages.PREVIEW,
      ...s,
      children: (0, a.jsx)(A.default, {
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
    isGiftEasterEggEnabled: A
  } = e, {
    analyticsLocations: Z
  } = (0, g.default)(S.default.COLLECTIBLES_SHOP_CARD), X = l.useRef(null), q = (0, p.default)(X), [Q, $] = l.useState(!1), J = q || Q, [ee] = t.items, {
    backgroundColors: et
  } = (0, M.default)(t.styles), es = R.default.canUseCollectibles(s), ea = (0, y.getFormattedPriceForCollectiblesProduct)(t, es, !1), el = l.useMemo(() => (0, y.getProductDiscount)(t, es), [t, es]), en = (0, y.isPremiumCollectiblesProduct)(t), er = (0, y.isFreeCollectiblesProduct)(t), {
    isPurchased: ei,
    isPartiallyPurchased: eo
  } = (0, j.useProductPurchaseState)(t), [eu, ec] = (0, d.useStateFromStoresArray)([O.default], () => [O.default.isClaiming === t.skuId, null != O.default.isClaiming && O.default.isClaiming !== t.skuId]), ed = (0, d.useStateFromStores)([N.default], () => (0, C.isThemeDark)(N.default.theme)), ef = (0, y.isProductNew)(t.skuId);
  l.useEffect(() => {
    let {
      current: e
    } = X;
    if (null == e) return;
    let t = () => $(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), l.useEffect(() => {
    null == i || i(X)
  }, [i]);
  let eC = (0, T.default)({
      analyticsLocations: Z
    }),
    eE = l.useRef(null),
    em = () => {
      if ((0, m.popLayer)(), eC(), t.type === c.CollectiblesItemType.AVATAR_DECORATION && null != ee) {
        o()(ee.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: ee,
          analyticsLocations: Z
        });
        return
      }
      t.type === c.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: ee.id,
        analyticsLocations: Z
      })
    },
    ep = e => s => {
      eE.current = s.currentTarget, (0, U.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: n,
        analyticsLocations: Z,
        analyticsSource: e,
        returnRef: eE
      })
    },
    eS = ep(S.default.COLLECTIBLES_SHOP_CARD),
    eg = ep(S.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eh = () => (0, a.jsx)("div", {
      className: Y.hoverUpsellContainer,
      children: (0, a.jsx)(_.default, {
        fullWidth: !0,
        className: Y.__invalid_premiumSubscribeButton,
        disabled: ec,
        onClick: e => e.stopPropagation(),
        buttonText: V.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    eI = () => ei || eo ? (0, a.jsx)(k.AlreadyOwned, {
      className: Y.priceTag,
      isPartiallyPurchased: eo
    }) : en ? (0, a.jsx)(E.Text, {
      variant: "text-md/semibold",
      className: Y.priceTag,
      children: V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(F.default, {
      product: t,
      discount: el,
      isPremiumUser: es,
      className: Y.priceTag
    }),
    e_ = () => en ? null : er ? (0, a.jsx)(z, {
      onClick: eg
    }) : (0, a.jsx)(D.default, {
      product: t,
      returnRef: X,
      isGiftEasterEggEnabled: A,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eT = () => {
      if (en && !es && !er) return eh();
      let e = en ? {
        submitting: eu,
        submittingStartedLabel: V.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: V.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, P.claimPremiumCollectiblesProduct)(t.skuId), (0, G.default)({
            product: t,
            analyticsLocations: Z
          })
        }
      } : {
        onClick: () => (0, I.default)({
          skuId: t.skuId,
          analyticsLocations: Z,
          returnRef: X
        })
      };
      return (0, a.jsxs)("div", {
        className: Y.buttonsContainer,
        children: [eo ? null : ei ? (0, a.jsx)(K, {
          disabled: ec,
          onClick: em,
          children: V.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(K, {
          disabled: ec,
          className: Y.purchaseButton,
          ...e,
          children: en ? V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ea
          })
        }), e_()]
      })
    },
    ex = ed ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, y.isBundleProduct)(t) && null != el && el.discountPercentage < 0 ? null : (0, a.jsx)(E.FocusRing, {
    children: (0, a.jsxs)(E.Clickable, {
      innerRef: X,
      className: r()(Y.shopCard, Y.shopCardAnimation, {
        [Y.partiallyOwned]: eo
      }),
      onBlur: () => $(!1),
      onClick: eS,
      style: null != et ? {
        backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: J ? ex : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [en && (0, a.jsx)(E.Tooltip, {
        tooltipContentClassName: Y.premiumWheelTooltipContent,
        color: E.Tooltip.Colors.PRIMARY,
        text: V.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(E.TextBadge, {
          ...e,
          className: Y.premiumWheelBadge,
          text: (0, a.jsx)(v.default, {
            className: Y.premiumWheel
          })
        })
      }), (0, a.jsx)("div", {
        className: Y.preview,
        children: (0, u.match)(t.type).with(c.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsx)("div", {
          className: Y.profileEffectShopPreview,
          children: (0, a.jsx)(x.default, {
            isHovering: J,
            profileEffectId: ee.id,
            isPurchased: ei,
            removeSetHeight: !0
          })
        })).with(c.CollectiblesItemType.AVATAR_DECORATION, () => (o()(ee.type === c.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, a.jsx)("div", {
          className: Y.avatarContainer,
          children: (0, a.jsx)(H.AvatarDecorationPreview, {
            item: ee,
            user: s,
            isPurchased: ei,
            isHighlighted: J
          })
        }))).with(c.CollectiblesItemType.BUNDLE, () => (0, a.jsx)(w.BundlePreview, {
          product: t,
          user: s,
          isPurchased: ei,
          isHighlighted: J
        })).otherwise(() => null)
      }), ei ? (0, a.jsx)("div", {
        className: Y.checkmarkWrapper,
        children: (0, a.jsx)(b.default, {
          width: 38,
          height: 38,
          className: Y.checkmark
        })
      }) : null, (0, a.jsxs)("div", {
        className: r()(Y.cardText, {
          [Y.cardTextBlur]: (null == ee ? void 0 : ee.type) === c.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, a.jsx)("div", {
          className: r()(Y.cardBackground, ed ? Y.darkCardBackground : Y.lightCardBackground, (null == ee ? void 0 : ee.type) === c.CollectiblesItemType.PROFILE_EFFECT ? Y.cardLowOpacity : null)
        }), (0, a.jsx)(E.Text, {
          variant: "text-lg/bold",
          className: Y.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: Y.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: eo ? void 0 : Y.innerBlur,
            children: eI()
          }), (0, a.jsx)("div", {
            className: Y.innerHover,
            children: eT()
          })]
        })]
      }), (0, a.jsx)(B.default, {
        category: n,
        className: Y.limitedTimeBadge,
        display: "card"
      }), ef && !eo && !ei && (0, a.jsx)(E.TextBadge, {
        text: V.default.Messages.NEW,
        disableColor: !0,
        className: Y.newBadge
      })]
    })
  })
}