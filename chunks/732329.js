"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("979554"),
  o = l("399606"),
  u = l("481060"),
  c = l("37234"),
  d = l("727637"),
  f = l("100527"),
  C = l("906732"),
  m = l("1585"),
  p = l("125988"),
  E = l("333867"),
  h = l("197115"),
  g = l("300284"),
  x = l("876917"),
  b = l("642619"),
  L = l("594174"),
  T = l("725808"),
  v = l("794358"),
  S = l("466111"),
  I = l("26290"),
  N = l("998502"),
  _ = l("335131"),
  O = l("1870"),
  y = l("884697"),
  A = l("624377"),
  k = l("813083"),
  j = l("680942"),
  R = l("558060"),
  P = l("237031"),
  B = l("372654"),
  M = l("832149"),
  D = l("474936"),
  F = l("689938"),
  w = l("269674");
let H = N.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
  U = u.AvatarSizes.SIZE_120,
  W = (0, m.getDecorationSizeForAvatarSize)(U),
  V = e => {
    let {
      children: t,
      onClick: l,
      ...s
    } = e;
    return (0, a.jsx)(u.Button, {
      fullWidth: !0,
      look: u.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), l()
      },
      ...s,
      children: t
    })
  },
  G = e => {
    let {
      className: t,
      ...l
    } = e;
    return (0, a.jsx)(u.Button, {
      color: u.ButtonColors.CUSTOM,
      look: u.Button.Looks.FILLED,
      size: u.ButtonSizes.ICON,
      className: n()(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": F.default.Messages.PREVIEW,
      ...l,
      children: (0, a.jsx)(v.default, {
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
    isPremiumUser: v = !1,
    isGiftEasterEggEnabled: N
  } = e, {
    analyticsLocations: z
  } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), K = s.useRef(null), Y = (0, d.default)(K), [Z, X] = s.useState(!1), q = Y || Z, Q = (0, o.useStateFromStores)([L.default], () => L.default.getCurrentUser()), [$] = t.items, {
    avatarDecorationSrc: J,
    eventHandlers: ee,
    avatarPlaceholderSrc: et
  } = (0, p.default)({
    user: Q,
    avatarDecorationOverride: (null == $ ? void 0 : $.type) === i.CollectiblesItemType.AVATAR_DECORATION ? $ : void 0,
    size: W,
    animateOnHover: !q
  }), {
    buttonColors: el,
    backgroundColors: ea
  } = (0, A.default)(t.styles), es = (0, y.getFormattedPriceForCollectiblesProduct)(t, v, !1), er = (0, y.isPremiumCollectiblesProduct)(t), en = (0, y.isFreeCollectiblesProduct)(t), [ei, eo, eu] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.getPurchase(t.skuId), O.default.isClaiming === t.skuId, null != O.default.isClaiming && O.default.isClaiming !== t.skuId]), ec = s.useRef(null);
  s.useEffect(() => {
    let {
      current: e
    } = K;
    if (null == e) return;
    let t = () => X(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ed = (0, g.default)({
      analyticsLocations: z
    }),
    ef = () => {
      if ((0, c.popLayer)(), ed(), (null == $ ? void 0 : $.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
        (0, m.openAvatarDecorationModal)({
          initialSelectedDecoration: $,
          analyticsLocations: z
        });
        return
      }(null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, b.openProfileEffectModal)({
        initialSelectedEffectId: $.id,
        analyticsLocations: z
      })
    },
    eC = e => a => {
      ec.current = a.currentTarget, (0, P.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: l,
        analyticsLocations: z,
        analyticsSource: e,
        returnRef: ec
      })
    },
    em = eC(f.default.COLLECTIBLES_SHOP_CARD),
    ep = eC(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eE = () => (0, a.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, a.jsx)(h.default, {
        fullWidth: !0,
        className: w.__invalid_premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: F.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(K)
  }, [r]);
  let eh = () => null != ei ? (0, a.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: F.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : er ? (0, a.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: F.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(R.default, {
      product: t,
      className: w.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eg = () => er ? null : en ? (0, a.jsx)(G, {
      style: null != el ? {
        background: el.secondary.toHslString(),
        color: el.text.toHslString()
      } : void 0,
      className: w.defaultPreviewButtonColor,
      onClick: ep
    }) : (0, a.jsx)(j.default, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: N,
      tooltipDelay: 250
    }),
    ex = () => {
      if (er && !v && !en) return eE();
      let e = null != el ? {
          background: (0, B.getBackgroundGradient)(el, 90),
          color: el.text.toHslString()
        } : void 0,
        l = er ? {
          submitting: eo,
          submittingStartedLabel: F.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: F.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, _.claimPremiumCollectiblesProduct)(t.skuId), (0, M.default)({
              product: t,
              analyticsLocations: z
            })
          }
        } : {
          onClick: () => (0, E.default)({
            skuId: t.skuId,
            analyticsLocations: z,
            returnRef: K
          })
        };
      return (0, a.jsxs)("div", {
        className: w.buttonsContainer,
        children: [null == ei ? (0, a.jsx)(V, {
          style: e,
          disabled: eu,
          className: w.purchaseButton,
          ...l,
          children: er ? F.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : F.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }) : (0, a.jsx)(V, {
          style: e,
          disabled: eu,
          onClick: ef,
          children: F.default.Messages.COLLECTIBLES_USE_NOW
        }), eg()]
      })
    },
    eb = null != ea ? {
      background: "".concat((0, B.getBackgroundGradient)(ea), " border-box border-box"),
      borderColor: ea.border.toHslString(),
      boxShadow: q ? "0 0 25px 1px ".concat(ea.primary.toHslString()) : "none"
    } : void 0;
  return (0, a.jsx)(u.FocusRing, {
    children: (0, a.jsxs)(u.Clickable, {
      innerRef: K,
      className: w.shopCard,
      onBlur: () => X(!1),
      onClick: em,
      style: eb,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, a.jsx)(u.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: u.Tooltip.Colors.PRIMARY,
        text: F.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(I.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, a.jsx)(S.default, {
            className: w.premiumWheel
          })
        })
      }), (null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
        className: w.profileEffectShopPreview,
        children: (0, a.jsx)(x.default, {
          isHovering: q,
          profileEffectId: $.id,
          isPurchased: null != ei
        })
      }), (null == $ ? void 0 : $.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(H, {
        ...ee,
        avatarDecoration: J,
        src: et,
        className: n()(w.avatar, {
          [w.avatarPurchased]: null != ei
        }),
        size: U,
        "aria-label": F.default.Messages.USER_SETTINGS_AVATAR
      }), null != ei ? (0, a.jsx)("div", {
        className: (null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
        children: (0, a.jsx)(T.default, {
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, a.jsxs)("div", {
        className: n()(w.cardText, {
          [w.cardTextProfileEffect]: (null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, a.jsx)(u.Text, {
          color: "always-white",
          variant: "text-lg/bold",
          className: w.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, a.jsxs)("div", {
            className: w.innerBlur,
            children: [(0, a.jsx)(u.Text, {
              color: "always-white",
              className: w.description,
              variant: "text-md/normal",
              children: t.summary
            }), eh()]
          }), (0, a.jsx)("div", {
            className: w.innerHover,
            children: ex()
          })]
        })]
      }), (0, a.jsx)(k.default, {
        category: l,
        className: w.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}