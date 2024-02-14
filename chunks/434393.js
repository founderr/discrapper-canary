"use strict";
a.r(t), a.d(t, {
  default: function() {
    return V
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("265586"),
  o = a("65597"),
  u = a("77078"),
  c = a("54239"),
  d = a("252744"),
  f = a("812204"),
  m = a("685665"),
  C = a("606292"),
  E = a("688318"),
  h = a("946964"),
  p = a("635956"),
  g = a("38766"),
  T = a("601095"),
  L = a("493390"),
  x = a("697218"),
  b = a("944441"),
  v = a("462579"),
  S = a("216422"),
  I = a("956089"),
  _ = a("50885"),
  N = a("21526"),
  y = a("775416"),
  O = a("491232"),
  k = a("342676"),
  j = a("450492"),
  A = a("920580"),
  R = a("54809"),
  P = a("408381"),
  B = a("264579"),
  D = a("177586"),
  F = a("646718"),
  M = a("782340"),
  w = a("682123");
let H = _.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
  U = u.AvatarSizes.SIZE_120,
  W = (0, C.getDecorationSizeForAvatarSize)(U),
  G = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(u.Button, {
      fullWidth: !0,
      look: u.Button.Looks.FILLED,
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
    return (0, l.jsx)(u.Button, {
      color: u.ButtonColors.CUSTOM,
      look: u.Button.Looks.FILLED,
      size: u.ButtonSizes.ICON,
      className: n(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": M.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(v.default, {
        width: 24,
        height: 24
      })
    })
  };
var V = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: v = !1,
    isGiftEasterEggEnabled: _
  } = e, {
    analyticsLocations: V
  } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), K = s.useRef(null), Y = (0, d.default)(K), [X, Z] = s.useState(!1), q = Y || X, $ = (0, o.default)([x.default], () => x.default.getCurrentUser()), [J] = t.items, {
    avatarDecorationSrc: Q,
    eventHandlers: ee,
    avatarPlaceholderSrc: et
  } = (0, E.default)({
    user: $,
    avatarDecorationOverride: (null == J ? void 0 : J.type) === i.CollectiblesItemType.AVATAR_DECORATION ? J : void 0,
    size: W,
    animateOnHover: !q
  }), {
    buttonColors: ea,
    backgroundColors: el
  } = (0, D.default)(t.styles), es = (0, O.getFormattedPriceForCollectiblesProduct)(t, v), er = (0, O.isPremiumCollectiblesProduct)(t), en = (0, O.isFreeCollectiblesProduct)(t), [ei, eo, eu] = (0, o.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), ec = s.useRef(null);
  s.useEffect(() => {
    let {
      current: e
    } = K;
    if (null == e) return;
    let t = () => Z(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ed = (0, g.default)({
      analyticsLocations: V
    }),
    ef = () => {
      if ((0, c.popLayer)(), ed(), (null == J ? void 0 : J.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
        (0, C.openAvatarDecorationModal)({
          initialSelectedDecoration: J,
          analyticsLocations: V
        });
        return
      }(null == J ? void 0 : J.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: J.id,
        analyticsLocations: V
      })
    },
    em = e => l => {
      ec.current = l.currentTarget, (0, R.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: V,
        analyticsSource: e,
        returnRef: ec
      })
    },
    eC = em(f.default.COLLECTIBLES_SHOP_CARD),
    eE = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eh = () => (0, l.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, l.jsx)(p.default, {
        fullWidth: !0,
        className: w.premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: F.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(K)
  }, [r]);
  let ep = () => null != ei ? (0, l.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : er ? (0, l.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(A.default, {
      product: t,
      className: w.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eg = () => er ? null : en ? (0, l.jsx)(z, {
      style: null != ea ? {
        background: ea.secondary.toHslString(),
        color: ea.text.toHslString()
      } : void 0,
      className: w.defaultPreviewButtonColor,
      onClick: eE
    }) : (0, l.jsx)(j.default, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: _,
      tooltipDelay: 250
    }),
    eT = () => {
      if (er && !v && !en) return eh();
      let e = null != ea ? {
          background: (0, P.getBackgroundGradient)(ea, 90),
          color: ea.text.toHslString()
        } : void 0,
        a = er ? {
          submitting: eo,
          submittingStartedLabel: M.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, N.claimPremiumCollectiblesProduct)(t.skuId), (0, B.default)({
              product: t,
              analyticsLocations: V
            })
          }
        } : {
          onClick: () => (0, h.default)({
            skuId: t.skuId,
            analyticsLocations: V,
            returnRef: K
          })
        };
      return (0, l.jsxs)("div", {
        className: w.buttonsContainer,
        children: [null == ei ? (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          className: w.purchaseButton,
          ...a,
          children: er ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : M.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }) : (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          onClick: ef,
          children: M.default.Messages.COLLECTIBLES_USE_NOW
        }), eg()]
      })
    },
    eL = null != el ? {
      background: "".concat((0, P.getBackgroundGradient)(el), " border-box border-box"),
      borderColor: el.border.toHslString(),
      boxShadow: q ? "0 0 25px 1px ".concat(el.primary.toHslString()) : "none"
    } : void 0;
  return (0, l.jsx)(u.FocusRing, {
    children: (0, l.jsxs)(u.Clickable, {
      innerRef: K,
      className: w.shopCard,
      onBlur: () => Z(!1),
      onClick: eC,
      style: eL,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, l.jsx)(u.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: u.Tooltip.Colors.PRIMARY,
        text: M.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(I.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, l.jsx)(S.default, {
            className: w.premiumWheel
          })
        })
      }), (null == J ? void 0 : J.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: w.profileEffectShopPreview,
        children: (0, l.jsx)(T.default, {
          isHovering: q,
          profileEffectId: J.id,
          isPurchased: null != ei
        })
      }), (null == J ? void 0 : J.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(H, {
        ...ee,
        avatarDecoration: Q,
        src: et,
        className: n(w.avatar, {
          [w.avatarPurchased]: null != ei
        }),
        size: U,
        "aria-label": M.default.Messages.USER_SETTINGS_AVATAR
      }), null != ei ? (0, l.jsx)("div", {
        className: (null == J ? void 0 : J.type) === i.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
        children: (0, l.jsx)(b.default, {
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n(w.cardText, {
          [w.cardTextProfileEffect]: (null == J ? void 0 : J.type) === i.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)(u.Text, {
          color: "always-white",
          variant: "text-lg/bold",
          className: w.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, l.jsxs)("div", {
            className: w.innerBlur,
            children: [(0, l.jsx)(u.Text, {
              color: "always-white",
              className: w.description,
              variant: "text-md/normal",
              children: t.summary
            }), ep()]
          }), (0, l.jsx)("div", {
            className: w.innerHover,
            children: eT()
          })]
        })]
      }), (0, l.jsx)(k.default, {
        category: a,
        className: w.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}