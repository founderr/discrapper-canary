"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("236471"),
  o = a("512722"),
  u = a.n(o),
  c = a("278074"),
  d = a("979554"),
  f = a("399606"),
  m = a("692547"),
  C = a("663002"),
  p = a("481060"),
  h = a("37234"),
  E = a("727637"),
  g = a("100527"),
  b = a("906732"),
  S = a("1585"),
  x = a("125988"),
  T = a("74179"),
  L = a("107091"),
  v = a("197115"),
  I = a("300284"),
  N = a("876917"),
  _ = a("642619"),
  y = a("210887"),
  O = a("594174"),
  k = a("725808"),
  A = a("465670"),
  j = a("794358"),
  R = a("466111"),
  P = a("26290"),
  B = a("998502"),
  F = a("335131"),
  D = a("946134"),
  M = a("1870"),
  w = a("884697"),
  H = a("664018"),
  U = a("624377"),
  W = a("813083"),
  G = a("680942"),
  V = a("558060"),
  z = a("237031"),
  K = a("832149"),
  Y = a("474936"),
  X = a("689938"),
  Z = a("498268");
let q = B.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  $ = p.AvatarSizes.SIZE_152,
  J = p.AvatarSizes.SIZE_120,
  Q = (0, S.getDecorationSizeForAvatarSize)($),
  ee = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  et = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(Z.previewButton, t),
      innerClassName: Z.previewButtonInner,
      "aria-label": X.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(j.default, {
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
    isPremiumUser: o = !1,
    isGiftEasterEggEnabled: j
  } = e, {
    analyticsLocations: B
  } = (0, b.default)(g.default.COLLECTIBLES_SHOP_CARD), ea = s.useRef(null), el = (0, E.default)(ea), {
    defaultPaymentSource: es
  } = (0, T.default)({
    isGift: !1,
    activeSubscription: null
  }), [er, en] = s.useState(!1), ei = el || er, eo = (0, f.useStateFromStores)([O.default], () => O.default.getCurrentUser()), [eu] = t.items, {
    avatarDecorationSrc: ec,
    eventHandlers: ed,
    avatarPlaceholderSrc: ef
  } = (0, x.default)({
    user: eo,
    avatarDecorationOverride: (null == eu ? void 0 : eu.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eu : void 0,
    size: Q,
    animateOnHover: !ei
  }), {
    backgroundColors: em
  } = (0, U.default)(t.styles), eC = (0, w.getFormattedPriceForCollectiblesProduct)(t, o, !1), ep = (0, w.isPremiumCollectiblesProduct)(t), eh = (0, w.isFreeCollectiblesProduct)(t), [eE, eg, eb] = (0, f.useStateFromStoresArray)([M.default], () => [M.default.getPurchase(t.skuId), M.default.isClaiming === t.skuId, null != M.default.isClaiming && M.default.isClaiming !== t.skuId]), eS = (0, f.useStateFromStores)([y.default], () => (0, C.isThemeDark)(y.default.theme)), ex = (0, f.useStateFromStores)([D.default], () => D.default.getIsProductNew(eu.skuId)), {
    hoverVariant: eT
  } = (0, H.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), [eL, ev] = s.useState(!1), eI = s.useRef(null), eN = s.useRef(new i.Environment), [e_, ey] = s.useState(!1), eO = null != eE || e_;
  s.useEffect(() => {
    let {
      current: e
    } = ea;
    if (null == e) return;
    let t = () => en(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ek = (0, I.default)({
      analyticsLocations: B
    }),
    eA = s.useRef(null),
    ej = () => {
      if ((0, h.popLayer)(), ek(), (null == eu ? void 0 : eu.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
        (0, S.openAvatarDecorationModal)({
          initialSelectedDecoration: eu,
          analyticsLocations: B
        });
        return
      }(null == eu ? void 0 : eu.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, _.openProfileEffectModal)({
        initialSelectedEffectId: eu.id,
        analyticsLocations: B
      })
    },
    eR = e => {
      if (!eL) return l => {
        eA.current = l.currentTarget, (0, z.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: B,
          analyticsSource: e,
          returnRef: eA
        })
      }
    },
    eP = eR(g.default.COLLECTIBLES_SHOP_CARD),
    eB = eR(g.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eF = () => (0, l.jsx)("div", {
      className: Z.hoverUpsellContainer,
      children: (0, l.jsx)(v.default, {
        fullWidth: !0,
        className: Z.__invalid_premiumSubscribeButton,
        disabled: eb,
        onClick: e => e.stopPropagation(),
        buttonText: X.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(ea)
  }, [r]);
  let eD = () => eO ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Z.priceTag,
      children: X.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : ep ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Z.priceTag,
      children: X.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(V.default, {
      alwaysWhiteText: !1,
      product: t,
      className: Z.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eM = () => ep ? null : eh ? (0, l.jsx)(et, {
      onClick: eB
    }) : (0, l.jsx)(G.default, {
      product: t,
      returnRef: ea,
      isGiftEasterEggEnabled: j,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    ew = () => {
      if (ep && !o && !eh) return eF();
      let e = ep ? {
        submitting: eg,
        submittingStartedLabel: X.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: X.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, K.default)({
            product: t,
            analyticsLocations: B
          })
        }
      } : {
        onClick: () => ev(!0)
      };
      return (0, l.jsxs)("div", {
        className: Z.buttonsContainer,
        children: [eO ? (0, l.jsx)(ee, {
          disabled: eb,
          onClick: ej,
          children: X.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(ee, {
          disabled: eb,
          className: Z.purchaseButton,
          ...e,
          children: ep ? X.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : X.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eC
          })
        }), eM()]
      })
    },
    eH = () => (0, l.jsxs)(l.Fragment, {
      children: [ep && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: Z.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: X.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(P.TextBadge, {
          ...e,
          className: Z.premiumWheelBadge,
          text: (0, l.jsx)(R.default, {
            className: Z.premiumWheel
          })
        })
      }), (null == eu ? void 0 : eu.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: Z.profileEffectShopPreview,
        children: (0, l.jsx)(N.default, {
          isHovering: ei,
          profileEffectId: eu.id,
          isPurchased: eO,
          removeSetHeight: !0
        })
      }), (null == eu ? void 0 : eu.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: Z.avatarContainer,
        children: (0, l.jsx)(q, {
          ...ed,
          avatarDecoration: ec,
          src: ef,
          className: n()(Z.avatar, {
            [Z.avatarPurchased]: eO && !eL
          }),
          size: eL ? J : $,
          "aria-label": X.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    eU = eS ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(p.FocusRing, {
    children: (0, l.jsxs)("div", {
      className: n()(Z.overflowContainer, {
        [Z.lightningCheckout]: eL
      }),
      children: [(0, l.jsx)(i.ConfettiCanvas, {
        ref: eI,
        className: Z.confettiCanvas,
        environment: eN.current
      }), eL && (0, l.jsx)("div", {
        className: Z.backdrop,
        onClick: () => ev(!1)
      }), (0, l.jsxs)(p.Clickable, {
        innerRef: ea,
        className: n()(Z.shopCard, (0, c.match)(eT).with(H.ShopCardHoverAnimationVariant.CONTROL, () => Z.shopCardDefaultAnimation).with(H.ShopCardHoverAnimationVariant.TRANSFORMATION, () => Z.shopCardTransformationAnimation).otherwise(() => void 0)),
        onBlur: () => en(!1),
        onClick: eP,
        style: null != em ? {
          backgroundColor: eS ? "var(--background-floating)" : "var(--background-secondary)",
          borderColor: "var(--chat-border)",
          boxShadow: ei ? eU : "none"
        } : void 0,
        id: "shop-item-".concat(t.skuId),
        children: [eL && (0, l.jsx)(p.Button, {
          className: Z.closeButton,
          "aria-label": X.default.Messages.CLOSE,
          look: p.Button.Looks.BLANK,
          size: p.Button.Sizes.NONE,
          onClick: () => ev(!1),
          children: (0, l.jsx)(A.default, {
            width: 24,
            height: 24,
            color: "white"
          })
        }), eO && !eL && (0, l.jsx)("div", {
          className: Z.checkmarkWrapper,
          children: (0, l.jsx)(k.default, {
            width: 38,
            height: 38,
            className: Z.checkmark
          })
        }), eH(), (u()(null != es, "default payment source must be set"), (0, l.jsxs)("div", {
          className: n()(Z.cardText, {
            [Z.cardTextBlur]: (null == eu ? void 0 : eu.type) === d.CollectiblesItemType.PROFILE_EFFECT
          }),
          children: [(0, l.jsx)("div", {
            className: n()(Z.cardBackground, eS ? Z.darkCardBackground : Z.lightCardBackground, (null == eu ? void 0 : eu.type) === d.CollectiblesItemType.PROFILE_EFFECT ? Z.cardLowOpacity : null)
          }), eL ? (0, l.jsx)(L.default, {
            product: t,
            paymentSource: es,
            itemPreview: eH(),
            onPurchaseComplete: () => {
              ey(!0)
            },
            onClose: () => {
              ev(!1)
            },
            confettiCanvas: eI.current
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(p.Text, {
              variant: "text-lg/bold",
              className: Z.productName,
              children: t.name
            }), (0, l.jsxs)("div", {
              className: Z.detailsWrapper,
              children: [(0, l.jsx)("div", {
                className: Z.innerBlur,
                children: eD()
              }), (0, l.jsx)("div", {
                className: Z.innerHover,
                children: ew()
              })]
            })]
          })]
        })), (0, l.jsx)(W.default, {
          category: a,
          className: Z.limitedTimeBadge,
          display: "card"
        }), ex && (0, l.jsx)(P.TextBadge, {
          text: X.default.Messages.NEW,
          disableColor: !0,
          className: Z.newBadge
        })]
      })]
    })
  })
}