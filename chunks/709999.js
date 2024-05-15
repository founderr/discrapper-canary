"use strict";
l.r(t), l("47120"), l("627341");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("278074"),
  o = l("979554"),
  u = l("399606"),
  c = l("692547"),
  d = l("663002"),
  f = l("481060"),
  C = l("37234"),
  m = l("727637"),
  p = l("100527"),
  E = l("906732"),
  h = l("1585"),
  g = l("125988"),
  x = l("333867"),
  b = l("197115"),
  L = l("300284"),
  T = l("876917"),
  v = l("642619"),
  S = l("210887"),
  I = l("594174"),
  N = l("725808"),
  _ = l("794358"),
  O = l("466111"),
  y = l("26290"),
  A = l("998502"),
  k = l("335131"),
  j = l("1870"),
  R = l("884697"),
  P = l("266386"),
  B = l("664018"),
  M = l("624377"),
  D = l("813083"),
  F = l("680942"),
  w = l("558060"),
  H = l("237031"),
  U = l("832149"),
  W = l("474936"),
  V = l("689938"),
  G = l("775087");
let z = A.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  K = f.AvatarSizes.SIZE_152,
  Y = (0, h.getDecorationSizeForAvatarSize)(K),
  Z = e => {
    let {
      children: t,
      onClick: l,
      ...s
    } = e;
    return (0, a.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), l()
      },
      ...s,
      children: t
    })
  },
  X = e => {
    let {
      className: t,
      ...l
    } = e;
    return (0, a.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: n()(G.previewButton, t),
      innerClassName: G.previewButtonInner,
      "aria-label": V.default.Messages.PREVIEW,
      ...l,
      children: (0, a.jsx)(_.default, {
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
    isPremiumUser: _ = !1,
    isGiftEasterEggEnabled: A
  } = e, {
    analyticsLocations: q
  } = (0, E.default)(p.default.COLLECTIBLES_SHOP_CARD), Q = s.useRef(null), $ = (0, m.default)(Q), [J, ee] = s.useState(!1), et = $ || J, el = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [ea] = t.items, {
    avatarDecorationSrc: es,
    eventHandlers: er,
    avatarPlaceholderSrc: en
  } = (0, g.default)({
    user: el,
    avatarDecorationOverride: (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea : void 0,
    size: Y,
    animateOnHover: !et
  }), {
    backgroundColors: ei
  } = (0, M.default)(t.styles), eo = (0, R.getFormattedPriceForCollectiblesProduct)(t, _, !1), eu = (0, R.isPremiumCollectiblesProduct)(t), ec = (0, R.isFreeCollectiblesProduct)(t), [ed, ef, eC] = (0, u.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(t.skuId), j.default.isClaiming === t.skuId, null != j.default.isClaiming && j.default.isClaiming !== t.skuId]), em = (0, u.useStateFromStores)([S.default], () => (0, d.isThemeDark)(S.default.theme)), ep = (0, R.isProductNew)(t.skuId), {
    hoverVariant: eE
  } = (0, B.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), eh = (0, P.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard");
  s.useEffect(() => {
    let {
      current: e
    } = Q;
    if (null == e) return;
    let t = () => ee(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eg = (0, L.default)({
      analyticsLocations: q
    }),
    ex = s.useRef(null),
    eb = () => {
      if ((0, C.popLayer)(), eg(), (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: ea,
          analyticsLocations: q
        });
        return
      }(null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, v.openProfileEffectModal)({
        initialSelectedEffectId: ea.id,
        analyticsLocations: q
      })
    },
    eL = e => a => {
      ex.current = a.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: l,
        analyticsLocations: q,
        analyticsSource: e,
        returnRef: ex
      })
    },
    eT = eL(p.default.COLLECTIBLES_SHOP_CARD),
    ev = eL(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eS = () => (0, a.jsx)("div", {
      className: G.hoverUpsellContainer,
      children: (0, a.jsx)(b.default, {
        fullWidth: !0,
        className: G.__invalid_premiumSubscribeButton,
        disabled: eC,
        onClick: e => e.stopPropagation(),
        buttonText: V.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(Q)
  }, [r]);
  let eI = () => null != ed ? (0, a.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: G.priceTag,
      children: V.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eu ? (0, a.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: G.priceTag,
      children: V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(w.default, {
      alwaysWhiteText: !1,
      product: t,
      className: G.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eN = () => eu ? null : ec ? (0, a.jsx)(X, {
      onClick: ev
    }) : (0, a.jsx)(F.default, {
      product: t,
      returnRef: Q,
      isGiftEasterEggEnabled: A,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e_ = () => {
      if (eu && !_ && !ec) return eS();
      let e = eu ? {
        submitting: ef,
        submittingStartedLabel: V.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: V.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, k.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
            product: t,
            analyticsLocations: q
          })
        }
      } : {
        onClick: () => (0, x.default)({
          skuId: t.skuId,
          analyticsLocations: q,
          returnRef: Q
        })
      };
      return (0, a.jsxs)("div", {
        className: G.buttonsContainer,
        children: [null == ed ? (0, a.jsx)(Z, {
          disabled: eC,
          className: G.purchaseButton,
          ...e,
          children: eu ? V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eo
          })
        }) : (0, a.jsx)(Z, {
          disabled: eC,
          onClick: eb,
          children: V.default.Messages.COLLECTIBLES_USE_NOW
        }), eN()]
      })
    },
    eO = em ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, a.jsx)(f.FocusRing, {
    children: (0, a.jsxs)(f.Clickable, {
      innerRef: Q,
      className: n()(G.shopCard, (0, i.match)(eE).with(B.ShopCardHoverAnimationVariant.CONTROL, () => G.shopCardDefaultAnimation).with(B.ShopCardHoverAnimationVariant.TRANSFORMATION, () => G.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => ee(!1),
      onClick: eT,
      style: null != ei ? {
        backgroundColor: em ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: et ? eO : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [eu && (0, a.jsx)(f.Tooltip, {
        tooltipContentClassName: G.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: V.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(y.TextBadge, {
          ...e,
          className: G.premiumWheelBadge,
          text: (0, a.jsx)(O.default, {
            className: G.premiumWheel
          })
        })
      }), (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
        className: G.profileEffectShopPreview,
        children: (0, a.jsx)(T.default, {
          isHovering: et,
          profileEffectId: ea.id,
          isPurchased: null != ed,
          removeSetHeight: !0
        })
      }), (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
        className: G.avatarContainer,
        children: (0, a.jsx)(z, {
          ...er,
          avatarDecoration: es,
          src: eh && et ? null == el ? void 0 : el.getAvatarURL(void 0, 152, !0) : en,
          imageClassName: eh && et ? G.fadeInAvatarImg : void 0,
          className: n()(G.avatar, {
            [G.avatarPurchased]: null != ed
          }),
          size: K,
          "aria-label": V.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != ed ? (0, a.jsx)("div", {
        className: G.checkmarkWrapper,
        children: (0, a.jsx)(N.default, {
          width: 38,
          height: 38,
          className: G.checkmark
        })
      }) : null, (0, a.jsxs)("div", {
        className: n()(G.cardText, {
          [G.cardTextBlur]: (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, a.jsx)("div", {
          className: n()(G.cardBackground, em ? G.darkCardBackground : G.lightCardBackground, (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT ? G.cardLowOpacity : null)
        }), (0, a.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: G.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: G.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: G.innerBlur,
            children: eI()
          }), (0, a.jsx)("div", {
            className: G.innerHover,
            children: e_()
          })]
        })]
      }), (0, a.jsx)(D.default, {
        category: l,
        className: G.limitedTimeBadge,
        display: "card"
      }), ep && (0, a.jsx)(y.TextBadge, {
        text: V.default.Messages.NEW,
        disableColor: !0,
        className: G.newBadge
      })]
    })
  })
}