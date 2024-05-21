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
  I = a("300284"),
  S = a("876917"),
  L = a("642619"),
  T = a("210887"),
  N = a("594174"),
  _ = a("725808"),
  y = a("794358"),
  A = a("466111"),
  j = a("26290"),
  O = a("335131"),
  k = a("1870"),
  R = a("884697"),
  P = a("624377"),
  B = a("813083"),
  M = a("680942"),
  D = a("558060"),
  F = a("237031"),
  H = a("616066"),
  w = a("216541"),
  U = a("832149"),
  W = a("474936"),
  G = a("689938"),
  V = a("775087");
let K = e => {
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
  z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: n()(V.previewButton, t),
      innerClassName: V.previewButtonInner,
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
    analyticsLocations: Y
  } = (0, h.default)(E.default.COLLECTIBLES_SHOP_CARD), Z = s.useRef(null), X = (0, g.default)(Z), [q, Q] = s.useState(!1), $ = X || q, J = (0, d.useStateFromStores)([N.default], () => N.default.getCurrentUser()), [ee] = t.items, {
    backgroundColors: et
  } = (0, P.default)(t.styles), ea = (0, R.getFormattedPriceForCollectiblesProduct)(t, i, !1), el = (0, R.isPremiumCollectiblesProduct)(t), es = (0, R.isFreeCollectiblesProduct)(t), [er, en, ei] = (0, d.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), eo = null != er, ec = (0, d.useStateFromStores)([T.default], () => (0, C.isThemeDark)(T.default.theme)), eu = (0, R.isProductNew)(t.skuId);
  s.useEffect(() => {
    let {
      current: e
    } = Z;
    if (null == e) return;
    let t = () => Q(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), s.useEffect(() => {
    null == r || r(Z)
  }, [r]);
  let ed = (0, I.default)({
      analyticsLocations: Y
    }),
    ef = s.useRef(null),
    eC = () => {
      if ((0, p.popLayer)(), ed(), t.type === u.CollectiblesItemType.AVATAR_DECORATION && null != ee) {
        o()(ee.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, b.openAvatarDecorationModal)({
          initialSelectedDecoration: ee,
          analyticsLocations: Y
        });
        return
      }
      t.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: ee.id,
        analyticsLocations: Y
      })
    },
    em = e => l => {
      ef.current = l.currentTarget, (0, F.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: Y,
        analyticsSource: e,
        returnRef: ef
      })
    },
    ep = em(E.default.COLLECTIBLES_SHOP_CARD),
    eg = em(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eE = () => (0, l.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, l.jsx)(v.default, {
        fullWidth: !0,
        className: V.__invalid_premiumSubscribeButton,
        disabled: ei,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    eh = () => eo ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : el ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(D.default, {
      product: t,
      className: V.priceTag
    }),
    eb = () => el ? null : es ? (0, l.jsx)(z, {
      onClick: eg
    }) : (0, l.jsx)(M.default, {
      product: t,
      returnRef: Z,
      isGiftEasterEggEnabled: y,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    ex = () => {
      if (el && !i && !es) return eE();
      let e = el ? {
        submitting: en,
        submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, O.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
            product: t,
            analyticsLocations: Y
          })
        }
      } : {
        onClick: () => (0, x.default)({
          skuId: t.skuId,
          analyticsLocations: Y,
          returnRef: Z
        })
      };
      return (0, l.jsxs)("div", {
        className: V.buttonsContainer,
        children: [null == er ? (0, l.jsx)(K, {
          disabled: ei,
          className: V.purchaseButton,
          ...e,
          children: el ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ea
          })
        }) : (0, l.jsx)(K, {
          disabled: ei,
          onClick: eC,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), eb()]
      })
    },
    ev = ec ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(m.FocusRing, {
    children: (0, l.jsxs)(m.Clickable, {
      innerRef: Z,
      className: n()(V.shopCard, V.shopCardAnimation),
      onBlur: () => Q(!1),
      onClick: ep,
      style: null != et ? {
        backgroundColor: ec ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: $ ? ev : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [el && (0, l.jsx)(m.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(j.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, l.jsx)(A.default, {
            className: V.premiumWheel
          })
        })
      }), (0, c.match)(t.type).with(u.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
        className: V.profileEffectShopPreview,
        children: (0, l.jsx)(S.default, {
          isHovering: $,
          profileEffectId: ee.id,
          isPurchased: eo,
          removeSetHeight: !0
        })
      })).with(u.CollectiblesItemType.AVATAR_DECORATION, () => (o()(ee.type === u.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, l.jsx)("div", {
        className: V.avatarContainer,
        children: (0, l.jsx)(H.AvatarDecorationPreview, {
          item: ee,
          user: J,
          isPurchased: eo,
          isHighlighted: $
        })
      }))).with(u.CollectiblesItemType.BUNDLE, () => (0, l.jsx)(w.BundlePreview, {
        product: t,
        user: J,
        isPurchased: eo,
        isHighlighted: $
      })).otherwise(() => null), eo ? (0, l.jsx)("div", {
        className: V.checkmarkWrapper,
        children: (0, l.jsx)(_.default, {
          width: 38,
          height: 38,
          className: V.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(V.cardText, {
          [V.cardTextBlur]: (null == ee ? void 0 : ee.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n()(V.cardBackground, ec ? V.darkCardBackground : V.lightCardBackground, (null == ee ? void 0 : ee.type) === u.CollectiblesItemType.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, l.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: V.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: V.innerBlur,
            children: eh()
          }), (0, l.jsx)("div", {
            className: V.innerHover,
            children: ex()
          })]
        })]
      }), (0, l.jsx)(B.default, {
        category: a,
        className: V.limitedTimeBadge,
        display: "card"
      }), eu && (0, l.jsx)(j.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}