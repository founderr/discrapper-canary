"use strict";
l.r(t), l("47120"), l("627341");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("512722"),
  o = l.n(i),
  c = l("278074"),
  u = l("979554"),
  d = l("399606"),
  f = l("692547"),
  C = l("663002"),
  m = l("481060"),
  p = l("37234"),
  g = l("727637"),
  E = l("100527"),
  h = l("906732"),
  b = l("1585"),
  x = l("333867"),
  v = l("197115"),
  S = l("300284"),
  I = l("876917"),
  L = l("642619"),
  T = l("210887"),
  N = l("594174"),
  _ = l("725808"),
  y = l("794358"),
  A = l("466111"),
  j = l("26290"),
  O = l("335131"),
  k = l("1870"),
  R = l("884697"),
  P = l("624377"),
  B = l("813083"),
  M = l("680942"),
  D = l("558060"),
  F = l("237031"),
  H = l("616066"),
  w = l("216541"),
  U = l("832149"),
  W = l("474936"),
  G = l("689938"),
  V = l("775087");
let K = e => {
    let {
      children: t,
      onClick: l,
      ...s
    } = e;
    return (0, a.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), l()
      },
      ...s,
      children: t
    })
  },
  z = e => {
    let {
      className: t,
      ...l
    } = e;
    return (0, a.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: n()(V.previewButton, t),
      innerClassName: V.previewButtonInner,
      "aria-label": G.default.Messages.PREVIEW,
      ...l,
      children: (0, a.jsx)(y.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    category: l,
    onMount: r,
    isPremiumUser: i = !1,
    isGiftEasterEggEnabled: y
  } = e, {
    analyticsLocations: Y
  } = (0, h.default)(E.default.COLLECTIBLES_SHOP_CARD), Z = s.useRef(null), X = (0, g.default)(Z), [q, Q] = s.useState(!1), $ = X || q, J = (0, d.useStateFromStores)([N.default], () => N.default.getCurrentUser()), [ee] = t.items, {
    backgroundColors: et
  } = (0, P.default)(t.styles), el = (0, R.getFormattedPriceForCollectiblesProduct)(t, i, !1), ea = (0, R.isPremiumCollectiblesProduct)(t), es = (0, R.isFreeCollectiblesProduct)(t), [er, en, ei] = (0, d.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), eo = null != er, ec = (0, d.useStateFromStores)([T.default], () => (0, C.isThemeDark)(T.default.theme)), eu = (0, R.isProductNew)(t.skuId);
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
  let ed = (0, S.default)({
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
    em = e => a => {
      ef.current = a.currentTarget, (0, F.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: l,
        analyticsLocations: Y,
        analyticsSource: e,
        returnRef: ef
      })
    },
    ep = em(E.default.COLLECTIBLES_SHOP_CARD),
    eg = em(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eE = () => (0, a.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, a.jsx)(v.default, {
        fullWidth: !0,
        className: V.__invalid_premiumSubscribeButton,
        disabled: ei,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    eh = () => eo ? (0, a.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : ea ? (0, a.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(D.default, {
      product: t,
      className: V.priceTag
    }),
    eb = () => ea ? null : es ? (0, a.jsx)(z, {
      onClick: eg
    }) : (0, a.jsx)(M.default, {
      product: t,
      returnRef: Z,
      isGiftEasterEggEnabled: y,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    ex = () => {
      if (ea && !i && !es) return eE();
      let e = ea ? {
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
      return (0, a.jsxs)("div", {
        className: V.buttonsContainer,
        children: [null == er ? (0, a.jsx)(K, {
          disabled: ei,
          className: V.purchaseButton,
          ...e,
          children: ea ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: el
          })
        }) : (0, a.jsx)(K, {
          disabled: ei,
          onClick: eC,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), eb()]
      })
    },
    ev = ec ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, a.jsx)(m.FocusRing, {
    children: (0, a.jsxs)(m.Clickable, {
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
      children: [ea && (0, a.jsx)(m.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(j.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, a.jsx)(A.default, {
            className: V.premiumWheel
          })
        })
      }), (0, c.match)(t.type).with(u.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsx)("div", {
        className: V.profileEffectShopPreview,
        children: (0, a.jsx)(I.default, {
          isHovering: $,
          profileEffectId: ee.id,
          isPurchased: eo,
          removeSetHeight: !0
        })
      })).with(u.CollectiblesItemType.AVATAR_DECORATION, () => (o()(ee.type === u.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, a.jsx)("div", {
        className: V.avatarContainer,
        children: (0, a.jsx)(H.AvatarDecorationPreview, {
          item: ee,
          user: J,
          isPurchased: eo,
          isHighlighted: $
        })
      }))).with(u.CollectiblesItemType.BUNDLE, () => (0, a.jsx)(w.BundlePreview, {
        product: t,
        user: J,
        isPurchased: eo,
        isHighlighted: $
      })).otherwise(() => null), eo ? (0, a.jsx)("div", {
        className: V.checkmarkWrapper,
        children: (0, a.jsx)(_.default, {
          width: 38,
          height: 38,
          className: V.checkmark
        })
      }) : null, (0, a.jsxs)("div", {
        className: n()(V.cardText, {
          [V.cardTextBlur]: (null == ee ? void 0 : ee.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, a.jsx)("div", {
          className: n()(V.cardBackground, ec ? V.darkCardBackground : V.lightCardBackground, (null == ee ? void 0 : ee.type) === u.CollectiblesItemType.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, a.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: V.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: V.innerBlur,
            children: eh()
          }), (0, a.jsx)("div", {
            className: V.innerHover,
            children: ex()
          })]
        })]
      }), (0, a.jsx)(B.default, {
        category: l,
        className: V.limitedTimeBadge,
        display: "card"
      }), eu && (0, a.jsx)(j.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}