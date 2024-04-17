"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("278074"),
  o = a("979554"),
  u = a("399606"),
  c = a("692547"),
  d = a("663002"),
  f = a("481060"),
  m = a("37234"),
  C = a("727637"),
  p = a("100527"),
  h = a("906732"),
  E = a("1585"),
  g = a("125988"),
  S = a("333867"),
  b = a("197115"),
  x = a("300284"),
  T = a("876917"),
  L = a("642619"),
  v = a("210887"),
  I = a("594174"),
  N = a("725808"),
  _ = a("794358"),
  y = a("466111"),
  O = a("26290"),
  k = a("998502"),
  A = a("335131"),
  j = a("946134"),
  R = a("1870"),
  P = a("884697"),
  B = a("664018"),
  F = a("624377"),
  D = a("813083"),
  M = a("680942"),
  w = a("558060"),
  H = a("237031"),
  U = a("832149"),
  W = a("474936"),
  G = a("689938"),
  V = a("873222");
let z = k.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  K = f.AvatarSizes.SIZE_152,
  Y = (0, E.getDecorationSizeForAvatarSize)(K),
  X = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
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
    return (0, l.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: n()(V.previewButton, t),
      innerClassName: V.previewButtonInner,
      "aria-label": G.default.Messages.PREVIEW,
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
    category: a,
    onMount: r,
    isPremiumUser: _ = !1,
    isGiftEasterEggEnabled: k
  } = e, {
    analyticsLocations: q
  } = (0, h.default)(p.default.COLLECTIBLES_SHOP_CARD), $ = s.useRef(null), J = (0, C.default)($), [Q, ee] = s.useState(!1), et = J || Q, ea = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [el] = t.items, {
    avatarDecorationSrc: es,
    eventHandlers: er,
    avatarPlaceholderSrc: en
  } = (0, g.default)({
    user: ea,
    avatarDecorationOverride: (null == el ? void 0 : el.type) === o.CollectiblesItemType.AVATAR_DECORATION ? el : void 0,
    size: Y,
    animateOnHover: !et
  }), {
    backgroundColors: ei
  } = (0, F.default)(t.styles), eo = (0, P.getFormattedPriceForCollectiblesProduct)(t, _, !1), eu = (0, P.isPremiumCollectiblesProduct)(t), ec = (0, P.isFreeCollectiblesProduct)(t), [ed, ef, em] = (0, u.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), eC = (0, u.useStateFromStores)([v.default], () => (0, d.isThemeDark)(v.default.theme)), ep = (0, u.useStateFromStores)([j.default], () => j.default.getIsProductNew(el.skuId)), {
    hoverVariant: eh
  } = (0, B.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
  s.useEffect(() => {
    let {
      current: e
    } = $;
    if (null == e) return;
    let t = () => ee(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eE = (0, x.default)({
      analyticsLocations: q
    }),
    eg = s.useRef(null),
    eS = () => {
      if ((0, m.popLayer)(), eE(), (null == el ? void 0 : el.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
        (0, E.openAvatarDecorationModal)({
          initialSelectedDecoration: el,
          analyticsLocations: q
        });
        return
      }(null == el ? void 0 : el.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: el.id,
        analyticsLocations: q
      })
    },
    eb = e => l => {
      eg.current = l.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: q,
        analyticsSource: e,
        returnRef: eg
      })
    },
    ex = eb(p.default.COLLECTIBLES_SHOP_CARD),
    eT = eb(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eL = () => (0, l.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, l.jsx)(b.default, {
        fullWidth: !0,
        className: V.__invalid_premiumSubscribeButton,
        disabled: em,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r($)
  }, [r]);
  let ev = () => null != ed ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eu ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(w.default, {
      alwaysWhiteText: !1,
      product: t,
      className: V.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eI = () => eu ? null : ec ? (0, l.jsx)(Z, {
      onClick: eT
    }) : (0, l.jsx)(M.default, {
      product: t,
      returnRef: $,
      isGiftEasterEggEnabled: k,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eN = () => {
      if (eu && !_ && !ec) return eL();
      let e = eu ? {
        submitting: ef,
        submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
            product: t,
            analyticsLocations: q
          })
        }
      } : {
        onClick: () => (0, S.default)({
          skuId: t.skuId,
          analyticsLocations: q,
          returnRef: $
        })
      };
      return (0, l.jsxs)("div", {
        className: V.buttonsContainer,
        children: [null == ed ? (0, l.jsx)(X, {
          disabled: em,
          className: V.purchaseButton,
          ...e,
          children: eu ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eo
          })
        }) : (0, l.jsx)(X, {
          disabled: em,
          onClick: eS,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), eI()]
      })
    },
    e_ = eC ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(f.FocusRing, {
    children: (0, l.jsxs)(f.Clickable, {
      innerRef: $,
      className: n()(V.shopCard, (0, i.match)(eh).with(B.ShopCardHoverAnimationVariant.CONTROL, () => V.shopCardDefaultAnimation).with(B.ShopCardHoverAnimationVariant.TRANSFORMATION, () => V.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => ee(!1),
      onClick: ex,
      style: null != ei ? {
        backgroundColor: eC ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: et ? e_ : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [eu && (0, l.jsx)(f.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(O.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, l.jsx)(y.default, {
            className: V.premiumWheel
          })
        })
      }), (null == el ? void 0 : el.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: V.profileEffectShopPreview,
        children: (0, l.jsx)(T.default, {
          isHovering: et,
          profileEffectId: el.id,
          isPurchased: null != ed,
          removeSetHeight: !0
        })
      }), (null == el ? void 0 : el.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: V.avatarContainer,
        children: (0, l.jsx)(z, {
          ...er,
          avatarDecoration: es,
          src: en,
          className: n()(V.avatar, {
            [V.avatarPurchased]: null != ed
          }),
          size: K,
          "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != ed ? (0, l.jsx)("div", {
        className: V.checkmarkWrapper,
        children: (0, l.jsx)(N.default, {
          width: 38,
          height: 38,
          className: V.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(V.cardText, {
          [V.cardTextBlur]: (null == el ? void 0 : el.type) === o.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n()(V.cardBackground, eC ? V.darkCardBackground : V.lightCardBackground, (null == el ? void 0 : el.type) === o.CollectiblesItemType.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, l.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: V.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: V.innerBlur,
            children: ev()
          }), (0, l.jsx)("div", {
            className: V.innerHover,
            children: eN()
          })]
        })]
      }), (0, l.jsx)(D.default, {
        category: a,
        className: V.limitedTimeBadge,
        display: "card"
      }), ep && (0, l.jsx)(O.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}