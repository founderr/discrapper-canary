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
  L = a("642619"),
  T = a("210887"),
  N = a("594174"),
  _ = a("725808"),
  y = a("794358"),
  j = a("466111"),
  A = a("26290"),
  O = a("335131"),
  k = a("1870"),
  R = a("884697"),
  P = a("724994"),
  B = a("624377"),
  M = a("390698"),
  D = a("813083"),
  F = a("680942"),
  w = a("558060"),
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
  Z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: n()(z.previewButton, t),
      innerClassName: z.previewButtonInner,
      "aria-label": K.default.Messages.PREVIEW,
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
    analyticsLocations: X
  } = (0, h.default)(E.default.COLLECTIBLES_SHOP_CARD), q = s.useRef(null), Q = (0, g.default)(q), [$, J] = s.useState(!1), ee = Q || $, et = (0, d.useStateFromStores)([N.default], () => N.default.getCurrentUser()), [ea] = t.items, {
    backgroundColors: el
  } = (0, B.default)(t.styles), es = (0, R.getFormattedPriceForCollectiblesProduct)(t, i, !1), er = (0, R.isPremiumCollectiblesProduct)(t), en = (0, R.isFreeCollectiblesProduct)(t), {
    isPurchased: ei,
    isPartiallyPurchased: eo
  } = (0, P.useProductPurchaseState)(t), [ec, eu] = (0, d.useStateFromStoresArray)([k.default], () => [k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), ed = (0, d.useStateFromStores)([T.default], () => (0, C.isThemeDark)(T.default.theme)), ef = (0, R.isProductNew)(t.skuId);
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
    null == r || r(q)
  }, [r]);
  let eC = (0, S.default)({
      analyticsLocations: X
    }),
    em = s.useRef(null),
    ep = () => {
      if ((0, p.popLayer)(), eC(), t.type === u.CollectiblesItemType.AVATAR_DECORATION && null != ea) {
        o()(ea.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, b.openAvatarDecorationModal)({
          initialSelectedDecoration: ea,
          analyticsLocations: X
        });
        return
      }
      t.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: ea.id,
        analyticsLocations: X
      })
    },
    eg = e => l => {
      em.current = l.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: X,
        analyticsSource: e,
        returnRef: em
      })
    },
    eE = eg(E.default.COLLECTIBLES_SHOP_CARD),
    eh = eg(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eb = () => (0, l.jsx)("div", {
      className: z.hoverUpsellContainer,
      children: (0, l.jsx)(v.default, {
        fullWidth: !0,
        className: z.__invalid_premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: K.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    ex = () => ei || eo ? (0, l.jsx)(M.AlreadyOwned, {
      className: z.priceTag,
      isPartiallyPurchased: eo
    }) : er ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: z.priceTag,
      children: K.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(w.default, {
      product: t,
      className: z.priceTag
    }),
    ev = () => er ? null : en ? (0, l.jsx)(Z, {
      onClick: eh
    }) : (0, l.jsx)(F.default, {
      product: t,
      returnRef: q,
      isGiftEasterEggEnabled: y,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eS = () => {
      if (er && !i && !en) return eb();
      let e = er ? {
        submitting: ec,
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
        children: [eo ? null : ei ? (0, l.jsx)(Y, {
          disabled: eu,
          onClick: ep,
          children: K.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(Y, {
          disabled: eu,
          className: z.purchaseButton,
          ...e,
          children: er ? K.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : K.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }), ev()]
      })
    },
    eI = ed ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(m.FocusRing, {
    children: (0, l.jsxs)(m.Clickable, {
      innerRef: q,
      className: n()(z.shopCard, z.shopCardAnimation),
      onBlur: () => J(!1),
      onClick: eE,
      style: null != el ? {
        backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: ee ? eI : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, l.jsx)(m.Tooltip, {
        tooltipContentClassName: z.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: K.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(A.TextBadge, {
          ...e,
          className: z.premiumWheelBadge,
          text: (0, l.jsx)(j.default, {
            className: z.premiumWheel
          })
        })
      }), (0, c.match)(t.type).with(u.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
        className: z.profileEffectShopPreview,
        children: (0, l.jsx)(I.default, {
          isHovering: ee,
          profileEffectId: ea.id,
          isPurchased: ei,
          removeSetHeight: !0
        })
      })).with(u.CollectiblesItemType.AVATAR_DECORATION, () => (o()(ea.type === u.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, l.jsx)("div", {
        className: z.avatarContainer,
        children: (0, l.jsx)(U.AvatarDecorationPreview, {
          item: ea,
          user: et,
          isPurchased: ei,
          isHighlighted: ee
        })
      }))).with(u.CollectiblesItemType.BUNDLE, () => (0, l.jsx)(W.BundlePreview, {
        product: t,
        user: et,
        isPurchased: ei,
        isHighlighted: ee
      })).otherwise(() => null), ei ? (0, l.jsx)("div", {
        className: z.checkmarkWrapper,
        children: (0, l.jsx)(_.default, {
          width: 38,
          height: 38,
          className: z.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(z.cardText, {
          [z.cardTextBlur]: (null == ea ? void 0 : ea.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n()(z.cardBackground, ed ? z.darkCardBackground : z.lightCardBackground, (null == ea ? void 0 : ea.type) === u.CollectiblesItemType.PROFILE_EFFECT ? z.cardLowOpacity : null)
        }), (0, l.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: z.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: z.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: eo ? void 0 : z.innerBlur,
            children: ex()
          }), (0, l.jsx)("div", {
            className: z.innerHover,
            children: eS()
          })]
        })]
      }), (0, l.jsx)(D.default, {
        category: a,
        className: z.limitedTimeBadge,
        display: "card"
      }), ef && (0, l.jsx)(A.TextBadge, {
        text: K.default.Messages.NEW,
        disableColor: !0,
        className: z.newBadge
      })]
    })
  })
}