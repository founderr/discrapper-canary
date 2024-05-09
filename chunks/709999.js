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
  C = a("37234"),
  m = a("727637"),
  p = a("100527"),
  E = a("906732"),
  h = a("1585"),
  g = a("125988"),
  x = a("333867"),
  b = a("197115"),
  T = a("300284"),
  v = a("876917"),
  L = a("642619"),
  S = a("210887"),
  I = a("594174"),
  N = a("725808"),
  _ = a("794358"),
  O = a("466111"),
  y = a("26290"),
  R = a("998502"),
  A = a("335131"),
  j = a("1870"),
  k = a("884697"),
  P = a("266386"),
  B = a("664018"),
  M = a("624377"),
  D = a("813083"),
  F = a("680942"),
  w = a("558060"),
  H = a("237031"),
  U = a("832149"),
  W = a("474936"),
  G = a("689938"),
  V = a("775087");
let z = R.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  K = f.AvatarSizes.SIZE_152,
  Y = (0, h.getDecorationSizeForAvatarSize)(K),
  Z = e => {
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
  X = e => {
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
    isGiftEasterEggEnabled: R
  } = e, {
    analyticsLocations: Q
  } = (0, E.default)(p.default.COLLECTIBLES_SHOP_CARD), q = s.useRef(null), $ = (0, m.default)(q), [J, ee] = s.useState(!1), et = $ || J, ea = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [el] = t.items, {
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
  } = (0, M.default)(t.styles), eo = (0, k.getFormattedPriceForCollectiblesProduct)(t, _, !1), eu = (0, k.isPremiumCollectiblesProduct)(t), ec = (0, k.isFreeCollectiblesProduct)(t), [ed, ef, eC] = (0, u.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(t.skuId), j.default.isClaiming === t.skuId, null != j.default.isClaiming && j.default.isClaiming !== t.skuId]), em = (0, u.useStateFromStores)([S.default], () => (0, d.isThemeDark)(S.default.theme)), ep = (0, k.isProductNew)(t.skuId), {
    hoverVariant: eE
  } = (0, B.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), eh = (0, P.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard");
  s.useEffect(() => {
    let {
      current: e
    } = q;
    if (null == e) return;
    let t = () => ee(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eg = (0, T.default)({
      analyticsLocations: Q
    }),
    ex = s.useRef(null),
    eb = () => {
      if ((0, C.popLayer)(), eg(), (null == el ? void 0 : el.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: el,
          analyticsLocations: Q
        });
        return
      }(null == el ? void 0 : el.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: el.id,
        analyticsLocations: Q
      })
    },
    eT = e => l => {
      ex.current = l.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: Q,
        analyticsSource: e,
        returnRef: ex
      })
    },
    ev = eT(p.default.COLLECTIBLES_SHOP_CARD),
    eL = eT(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eS = () => (0, l.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, l.jsx)(b.default, {
        fullWidth: !0,
        className: V.__invalid_premiumSubscribeButton,
        disabled: eC,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(q)
  }, [r]);
  let eI = () => null != ed ? (0, l.jsx)(f.Text, {
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
    eN = () => eu ? null : ec ? (0, l.jsx)(X, {
      onClick: eL
    }) : (0, l.jsx)(F.default, {
      product: t,
      returnRef: q,
      isGiftEasterEggEnabled: R,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e_ = () => {
      if (eu && !_ && !ec) return eS();
      let e = eu ? {
        submitting: ef,
        submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
            product: t,
            analyticsLocations: Q
          })
        }
      } : {
        onClick: () => (0, x.default)({
          skuId: t.skuId,
          analyticsLocations: Q,
          returnRef: q
        })
      };
      return (0, l.jsxs)("div", {
        className: V.buttonsContainer,
        children: [null == ed ? (0, l.jsx)(Z, {
          disabled: eC,
          className: V.purchaseButton,
          ...e,
          children: eu ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eo
          })
        }) : (0, l.jsx)(Z, {
          disabled: eC,
          onClick: eb,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), eN()]
      })
    },
    eO = em ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(f.FocusRing, {
    children: (0, l.jsxs)(f.Clickable, {
      innerRef: q,
      className: n()(V.shopCard, (0, i.match)(eE).with(B.ShopCardHoverAnimationVariant.CONTROL, () => V.shopCardDefaultAnimation).with(B.ShopCardHoverAnimationVariant.TRANSFORMATION, () => V.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => ee(!1),
      onClick: ev,
      style: null != ei ? {
        backgroundColor: em ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: et ? eO : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [eu && (0, l.jsx)(f.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(y.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, l.jsx)(O.default, {
            className: V.premiumWheel
          })
        })
      }), (null == el ? void 0 : el.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: V.profileEffectShopPreview,
        children: (0, l.jsx)(v.default, {
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
          src: eh && et ? null == ea ? void 0 : ea.getAvatarURL(void 0, 152, !0) : en,
          imageClassName: eh && et ? V.fadeInAvatarImg : void 0,
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
          className: n()(V.cardBackground, em ? V.darkCardBackground : V.lightCardBackground, (null == el ? void 0 : el.type) === o.CollectiblesItemType.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, l.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: V.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: V.innerBlur,
            children: eI()
          }), (0, l.jsx)("div", {
            className: V.innerHover,
            children: e_()
          })]
        })]
      }), (0, l.jsx)(D.default, {
        category: a,
        className: V.limitedTimeBadge,
        display: "card"
      }), ep && (0, l.jsx)(y.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}