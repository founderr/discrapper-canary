"use strict";
a.r(t), a.d(t, {
  default: function() {
    return Y
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("265586"),
  o = a("65597"),
  u = a("669491"),
  c = a("755854"),
  d = a("77078"),
  f = a("54239"),
  m = a("252744"),
  C = a("812204"),
  E = a("685665"),
  h = a("606292"),
  p = a("688318"),
  g = a("946964"),
  T = a("635956"),
  L = a("38766"),
  x = a("601095"),
  b = a("493390"),
  v = a("161778"),
  S = a("697218"),
  I = a("944441"),
  _ = a("462579"),
  N = a("216422"),
  y = a("956089"),
  O = a("50885"),
  k = a("21526"),
  j = a("775416"),
  A = a("491232"),
  R = a("342676"),
  P = a("450492"),
  B = a("920580"),
  D = a("54809"),
  F = a("264579"),
  M = a("177586"),
  w = a("646718"),
  H = a("782340"),
  U = a("600545");
let W = O.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  G = d.AvatarSizes.SIZE_152,
  z = (0, h.getDecorationSizeForAvatarSize)(G),
  V = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(d.Button, {
      fullWidth: !0,
      look: d.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  K = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(d.Button, {
      color: d.ButtonColors.BRAND,
      look: d.Button.Looks.FILLED,
      size: d.ButtonSizes.ICON,
      className: n(U.previewButton, t),
      innerClassName: U.previewButtonInner,
      "aria-label": H.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(_.default, {
        width: 24,
        height: 24
      })
    })
  };
var Y = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: _ = !1,
    isGiftEasterEggEnabled: O
  } = e, {
    analyticsLocations: Y
  } = (0, E.default)(C.default.COLLECTIBLES_SHOP_CARD), X = s.useRef(null), Z = (0, m.default)(X), [q, $] = s.useState(!1), J = Z || q, Q = (0, o.default)([S.default], () => S.default.getCurrentUser()), [ee] = t.items, {
    avatarDecorationSrc: et,
    eventHandlers: ea,
    avatarPlaceholderSrc: el
  } = (0, p.default)({
    user: Q,
    avatarDecorationOverride: (null == ee ? void 0 : ee.type) === i.CollectiblesItemType.AVATAR_DECORATION ? ee : void 0,
    size: z,
    animateOnHover: !J
  }), {
    backgroundColors: es
  } = (0, M.default)(t.styles), er = (0, A.getFormattedPriceForCollectiblesProduct)(t, _), en = (0, A.isPremiumCollectiblesProduct)(t), ei = (0, A.isFreeCollectiblesProduct)(t), [eo, eu, ec] = (0, o.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(t.skuId), j.default.isClaiming === t.skuId, null != j.default.isClaiming && j.default.isClaiming !== t.skuId]), ed = (0, o.default)([v.default], () => (0, c.isThemeDark)(v.default.theme));
  s.useEffect(() => {
    let {
      current: e
    } = X;
    if (null == e) return;
    let t = () => $(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ef = (0, L.default)({
      analyticsLocations: Y
    }),
    em = s.useRef(null),
    eC = () => {
      if ((0, f.popLayer)(), ef(), (null == ee ? void 0 : ee.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: ee,
          analyticsLocations: Y
        });
        return
      }(null == ee ? void 0 : ee.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, b.openProfileEffectModal)({
        initialSelectedEffectId: ee.id,
        analyticsLocations: Y
      })
    },
    eE = e => l => {
      em.current = l.currentTarget, (0, D.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: Y,
        analyticsSource: e,
        returnRef: em
      })
    },
    eh = eE(C.default.COLLECTIBLES_SHOP_CARD),
    ep = eE(C.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eg = () => (0, l.jsx)("div", {
      className: U.hoverUpsellContainer,
      children: (0, l.jsx)(T.default, {
        fullWidth: !0,
        className: U.premiumSubscribeButton,
        disabled: ec,
        onClick: e => e.stopPropagation(),
        buttonText: H.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(X)
  }, [r]);
  let eT = () => null != eo ? (0, l.jsx)(d.Text, {
      variant: "text-md/semibold",
      className: U.priceTag,
      children: H.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : en ? (0, l.jsx)(d.Text, {
      variant: "text-md/semibold",
      className: U.priceTag,
      children: H.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(B.default, {
      alwaysWhiteText: !1,
      product: t,
      className: U.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eL = () => en ? null : ei ? (0, l.jsx)(K, {
      onClick: ep
    }) : (0, l.jsx)(P.default, {
      product: t,
      returnRef: X,
      isGiftEasterEggEnabled: O,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    ex = () => {
      if (en && !_ && !ei) return eg();
      let e = en ? {
        submitting: eu,
        submittingStartedLabel: H.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: H.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, k.claimPremiumCollectiblesProduct)(t.skuId), (0, F.default)({
            product: t,
            analyticsLocations: Y
          })
        }
      } : {
        onClick: () => (0, g.default)({
          skuId: t.skuId,
          analyticsLocations: Y,
          returnRef: X
        })
      };
      return (0, l.jsxs)("div", {
        className: U.buttonsContainer,
        children: [null == eo ? (0, l.jsx)(V, {
          disabled: ec,
          className: U.purchaseButton,
          ...e,
          children: en ? H.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : H.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: er
          })
        }) : (0, l.jsx)(V, {
          disabled: ec,
          onClick: eC,
          children: H.default.Messages.COLLECTIBLES_USE_NOW
        }), eL()]
      })
    },
    eb = ed ? "0 0 15px 1px ".concat(u.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(d.FocusRing, {
    children: (0, l.jsxs)(d.Clickable, {
      innerRef: X,
      className: U.shopCard,
      onBlur: () => $(!1),
      onClick: eh,
      style: null != es ? {
        backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: J ? eb : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [en && (0, l.jsx)(d.Tooltip, {
        tooltipContentClassName: U.premiumWheelTooltipContent,
        color: d.Tooltip.Colors.PRIMARY,
        text: H.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(y.TextBadge, {
          ...e,
          className: U.premiumWheelBadge,
          text: (0, l.jsx)(N.default, {
            className: U.premiumWheel
          })
        })
      }), (null == ee ? void 0 : ee.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: U.profileEffectShopPreview,
        children: (0, l.jsx)(x.default, {
          isHovering: J,
          profileEffectId: ee.id,
          isPurchased: null != eo,
          removeSetHeight: !0
        })
      }), (null == ee ? void 0 : ee.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: U.avatarContainer,
        children: (0, l.jsx)(W, {
          ...ea,
          avatarDecoration: et,
          src: el,
          className: n(U.avatar, {
            [U.avatarPurchased]: null != eo
          }),
          size: G,
          "aria-label": H.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != eo ? (0, l.jsx)("div", {
        className: U.checkmarkWrapper,
        children: (0, l.jsx)(I.default, {
          width: 38,
          height: 38,
          className: U.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n(U.cardText, {
          [U.cardTextBlur]: (null == ee ? void 0 : ee.type) === i.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n(U.cardBackground, ed ? U.darkCardBackground : U.lightCardBackground, (null == ee ? void 0 : ee.type) === i.CollectiblesItemType.PROFILE_EFFECT ? U.cardLowOpacity : null)
        }), (0, l.jsx)(d.Text, {
          variant: "text-lg/bold",
          className: U.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: U.detailsWrapper,
          children: [(0, l.jsx)(d.Text, {
            className: n(U.description, U.innerMask),
            variant: "text-md/normal",
            lineClamp: 3,
            children: t.summary
          }), (0, l.jsx)("div", {
            className: U.innerBlur,
            children: eT()
          }), (0, l.jsx)("div", {
            className: U.innerHover,
            children: ex()
          })]
        })]
      }), (0, l.jsx)(R.default, {
        category: a,
        className: U.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}