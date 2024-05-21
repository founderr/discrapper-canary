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
  m = a("481060"),
  p = a("37234"),
  g = a("727637"),
  E = a("100527"),
  h = a("906732"),
  b = a("1585"),
  x = a("333867"),
  v = a("197115"),
  S = a("300284"),
  I = a("876917"),
  T = a("642619"),
  L = a("210887"),
  N = a("594174"),
  _ = a("725808"),
  y = a("794358"),
  A = a("466111"),
  O = a("26290"),
  j = a("335131"),
  R = a("1870"),
  k = a("884697"),
  P = a("664018"),
  M = a("624377"),
  B = a("813083"),
  D = a("680942"),
  F = a("558060"),
  H = a("237031"),
  w = a("616066"),
  U = a("216541"),
  W = a("832149"),
  V = a("474936"),
  G = a("689938"),
  K = a("775087");
let z = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  Y = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: n()(K.previewButton, t),
      innerClassName: K.previewButtonInner,
      "aria-label": G.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(y.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: i = !1,
    isGiftEasterEggEnabled: y
  } = e, {
    analyticsLocations: Z
  } = (0, h.default)(E.default.COLLECTIBLES_SHOP_CARD), X = s.useRef(null), q = (0, g.default)(X), [Q, $] = s.useState(!1), J = q || Q, ee = (0, d.useStateFromStores)([N.default], () => N.default.getCurrentUser()), [et] = t.items, {
    backgroundColors: ea
  } = (0, M.default)(t.styles), el = (0, k.getFormattedPriceForCollectiblesProduct)(t, i, !1), es = (0, k.isPremiumCollectiblesProduct)(t), er = (0, k.isFreeCollectiblesProduct)(t), [en, ei, eo] = (0, d.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), ec = null != en, eu = (0, d.useStateFromStores)([L.default], () => (0, C.isThemeDark)(L.default.theme)), ed = (0, k.isProductNew)(t.skuId), {
    hoverVariant: ef
  } = (0, P.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
  s.useEffect(() => {
    let {
      current: e
    } = X;
    if (null == e) return;
    let t = () => $(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), s.useEffect(() => {
    null == r || r(X)
  }, [r]);
  let eC = (0, S.default)({
      analyticsLocations: Z
    }),
    em = s.useRef(null),
    ep = () => {
      if ((0, p.popLayer)(), eC(), t.type === u.CollectiblesItemType.AVATAR_DECORATION && null != et) {
        o()(et.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, b.openAvatarDecorationModal)({
          initialSelectedDecoration: et,
          analyticsLocations: Z
        });
        return
      }
      t.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, T.openProfileEffectModal)({
        initialSelectedEffectId: et.id,
        analyticsLocations: Z
      })
    },
    eg = e => l => {
      em.current = l.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: Z,
        analyticsSource: e,
        returnRef: em
      })
    },
    eE = eg(E.default.COLLECTIBLES_SHOP_CARD),
    eh = eg(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eb = () => (0, l.jsx)("div", {
      className: K.hoverUpsellContainer,
      children: (0, l.jsx)(v.default, {
        fullWidth: !0,
        className: K.__invalid_premiumSubscribeButton,
        disabled: eo,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    ex = () => ec ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: K.priceTag,
      children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : es ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: K.priceTag,
      children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(F.default, {
      product: t,
      className: K.priceTag
    }),
    ev = () => es ? null : er ? (0, l.jsx)(Y, {
      onClick: eh
    }) : (0, l.jsx)(D.default, {
      product: t,
      returnRef: X,
      isGiftEasterEggEnabled: y,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eS = () => {
      if (es && !i && !er) return eb();
      let e = es ? {
        submitting: ei,
        submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, j.claimPremiumCollectiblesProduct)(t.skuId), (0, W.default)({
            product: t,
            analyticsLocations: Z
          })
        }
      } : {
        onClick: () => (0, x.default)({
          skuId: t.skuId,
          analyticsLocations: Z,
          returnRef: X
        })
      };
      return (0, l.jsxs)("div", {
        className: K.buttonsContainer,
        children: [null == en ? (0, l.jsx)(z, {
          disabled: eo,
          className: K.purchaseButton,
          ...e,
          children: es ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: el
          })
        }) : (0, l.jsx)(z, {
          disabled: eo,
          onClick: ep,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), ev()]
      })
    },
    eI = eu ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(m.FocusRing, {
    children: (0, l.jsxs)(m.Clickable, {
      innerRef: X,
      className: n()(K.shopCard, (0, c.match)(ef).with(P.ShopCardHoverAnimationVariant.CONTROL, () => K.shopCardDefaultAnimation).with(P.ShopCardHoverAnimationVariant.TRANSFORMATION, () => K.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => $(!1),
      onClick: eE,
      style: null != ea ? {
        backgroundColor: eu ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: J ? eI : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [es && (0, l.jsx)(m.Tooltip, {
        tooltipContentClassName: K.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(O.TextBadge, {
          ...e,
          className: K.premiumWheelBadge,
          text: (0, l.jsx)(A.default, {
            className: K.premiumWheel
          })
        })
      }), (0, c.match)(t.type).with(u.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
        className: K.profileEffectShopPreview,
        children: (0, l.jsx)(I.default, {
          isHovering: J,
          profileEffectId: et.id,
          isPurchased: ec,
          removeSetHeight: !0
        })
      })).with(u.CollectiblesItemType.AVATAR_DECORATION, () => (o()(et.type === u.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, l.jsx)("div", {
        className: K.avatarContainer,
        children: (0, l.jsx)(w.AvatarDecorationPreview, {
          item: et,
          user: ee,
          isPurchased: ec,
          isHighlighted: J
        })
      }))).with(u.CollectiblesItemType.BUNDLE, () => (0, l.jsx)(U.BundlePreview, {
        product: t,
        user: ee,
        isPurchased: ec,
        isHighlighted: J
      })).otherwise(() => null), ec ? (0, l.jsx)("div", {
        className: K.checkmarkWrapper,
        children: (0, l.jsx)(_.default, {
          width: 38,
          height: 38,
          className: K.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(K.cardText, {
          [K.cardTextBlur]: (null == et ? void 0 : et.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n()(K.cardBackground, eu ? K.darkCardBackground : K.lightCardBackground, (null == et ? void 0 : et.type) === u.CollectiblesItemType.PROFILE_EFFECT ? K.cardLowOpacity : null)
        }), (0, l.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: K.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: K.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: K.innerBlur,
            children: ex()
          }), (0, l.jsx)("div", {
            className: K.innerHover,
            children: eS()
          })]
        })]
      }), (0, l.jsx)(B.default, {
        category: a,
        className: K.limitedTimeBadge,
        display: "card"
      }), ed && (0, l.jsx)(O.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: K.newBadge
      })]
    })
  })
}