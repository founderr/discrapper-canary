"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  i = a.n(r),
  n = a("236471"),
  o = a("512722"),
  u = a.n(o),
  c = a("278074"),
  d = a("979554"),
  f = a("399606"),
  m = a("692547"),
  C = a("663002"),
  p = a("481060"),
  h = a("570140"),
  E = a("37234"),
  g = a("727637"),
  b = a("100527"),
  S = a("906732"),
  x = a("1585"),
  T = a("125988"),
  L = a("74179"),
  v = a("107091"),
  I = a("197115"),
  N = a("300284"),
  _ = a("876917"),
  y = a("642619"),
  O = a("210887"),
  k = a("594174"),
  A = a("725808"),
  R = a("465670"),
  j = a("794358"),
  P = a("466111"),
  B = a("26290"),
  D = a("998502"),
  F = a("335131"),
  M = a("946134"),
  w = a("1870"),
  H = a("884697"),
  U = a("664018"),
  W = a("624377"),
  G = a("813083"),
  V = a("680942"),
  z = a("558060"),
  K = a("237031"),
  Y = a("832149"),
  X = a("474936"),
  Z = a("689938"),
  Q = a("498268"),
  q = a("42615");
let $ = D.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  J = p.AvatarSizes.SIZE_152,
  ee = p.AvatarSizes.SIZE_120,
  et = (0, x.getDecorationSizeForAvatarSize)(J),
  ea = e => {
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
  el = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: i()(Q.previewButton, t),
      innerClassName: Q.previewButtonInner,
      "aria-label": Z.default.Messages.PREVIEW,
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
    analyticsLocations: D
  } = (0, S.default)(b.default.COLLECTIBLES_SHOP_CARD), es = s.useRef(null), er = (0, g.default)(es), {
    defaultPaymentSource: ei
  } = (0, L.default)({
    isGift: !1,
    activeSubscription: null
  }), [en, eo] = s.useState(!1), eu = er || en, ec = (0, f.useStateFromStores)([k.default], () => k.default.getCurrentUser()), [ed] = t.items, {
    avatarDecorationSrc: ef,
    eventHandlers: em,
    avatarPlaceholderSrc: eC
  } = (0, T.default)({
    user: ec,
    avatarDecorationOverride: (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.AVATAR_DECORATION ? ed : void 0,
    size: et,
    animateOnHover: !eu
  }), {
    backgroundColors: ep
  } = (0, W.default)(t.styles), eh = (0, H.getFormattedPriceForCollectiblesProduct)(t, o, !1), eE = (0, H.isPremiumCollectiblesProduct)(t), eg = (0, H.isFreeCollectiblesProduct)(t), [eb, eS, ex] = (0, f.useStateFromStoresArray)([w.default], () => [w.default.getPurchase(t.skuId), w.default.isClaiming === t.skuId, null != w.default.isClaiming && w.default.isClaiming !== t.skuId]), eT = (0, f.useStateFromStores)([O.default], () => (0, C.isThemeDark)(O.default.theme)), eL = (0, f.useStateFromStores)([M.default], () => M.default.getIsProductNew(ed.skuId)), {
    hoverVariant: ev
  } = (0, U.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), [eI, eN] = s.useState(!1), e_ = s.useRef(null), ey = s.useRef(new n.Environment), [eO, ek] = s.useState(!1), [eA, eR] = s.useState(null), ej = null != eb || eO;
  s.useEffect(() => {
    let {
      current: e
    } = es;
    if (null == e) return;
    let t = () => eo(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eP = (0, N.default)({
      analyticsLocations: D
    }),
    eB = s.useRef(null),
    eD = () => {
      if ((0, E.popLayer)(), eP(), (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
        (0, x.openAvatarDecorationModal)({
          initialSelectedDecoration: ed,
          analyticsLocations: D
        });
        return
      }(null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, y.openProfileEffectModal)({
        initialSelectedEffectId: ed.id,
        analyticsLocations: D
      })
    },
    eF = e => {
      if (!eI) return l => {
        eB.current = l.currentTarget, (0, K.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: D,
          analyticsSource: e,
          returnRef: eB
        })
      }
    },
    eM = eF(b.default.COLLECTIBLES_SHOP_CARD),
    ew = eF(b.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eH = () => (0, l.jsx)("div", {
      className: Q.hoverUpsellContainer,
      children: (0, l.jsx)(I.default, {
        fullWidth: !0,
        className: Q.__invalid_premiumSubscribeButton,
        disabled: ex,
        onClick: e => e.stopPropagation(),
        buttonText: Z.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: X.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(es)
  }, [r]);
  let eU = () => ej ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Q.priceTag,
      children: Z.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eE ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Q.priceTag,
      children: Z.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(z.default, {
      alwaysWhiteText: !1,
      product: t,
      className: Q.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eW = () => eE ? null : eg ? (0, l.jsx)(el, {
      onClick: ew
    }) : (0, l.jsx)(V.default, {
      product: t,
      returnRef: es,
      isGiftEasterEggEnabled: j,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eG = () => {
      if (eE && !o && !eg) return eH();
      let e = eE ? {
        submitting: eS,
        submittingStartedLabel: Z.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: Z.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, Y.default)({
            product: t,
            analyticsLocations: D
          })
        }
      } : {
        onClick: () => eN(!0)
      };
      return (0, l.jsxs)("div", {
        className: Q.buttonsContainer,
        children: [ej ? (0, l.jsx)(ea, {
          disabled: ex,
          onClick: eD,
          children: Z.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(ea, {
          disabled: ex,
          className: Q.purchaseButton,
          ...e,
          children: eE ? Z.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : Z.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eh
          })
        }), eW()]
      })
    },
    eV = () => eI && null !== eA ? (0, l.jsx)("div", {
      className: Q.avatarContainer,
      children: (0, l.jsx)("img", {
        src: q,
        alt: "error",
        className: Q.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eE && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: Q.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: Z.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(B.TextBadge, {
          ...e,
          className: Q.premiumWheelBadge,
          text: (0, l.jsx)(P.default, {
            className: Q.premiumWheel
          })
        })
      }), (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: Q.profileEffectShopPreview,
        children: (0, l.jsx)(_.default, {
          isHovering: eu,
          profileEffectId: ed.id,
          isPurchased: ej,
          removeSetHeight: !0
        })
      }), (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: Q.avatarContainer,
        children: (0, l.jsx)($, {
          ...em,
          avatarDecoration: ef,
          src: eC,
          className: i()(Q.avatar, {
            [Q.avatarPurchased]: ej && !eI
          }),
          size: eI ? ee : J,
          "aria-label": Z.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    ez = () => {
      eR(null), eN(!1), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      })
    },
    eK = eT ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(p.FocusRing, {
    children: (0, l.jsxs)("div", {
      className: i()(Q.overflowContainer, {
        [Q.lightningCheckout]: eI
      }),
      children: [(0, l.jsx)(n.ConfettiCanvas, {
        ref: e_,
        className: Q.confettiCanvas,
        environment: ey.current
      }), eI && (0, l.jsx)("div", {
        className: Q.backdrop,
        onClick: () => eN(!1)
      }), (0, l.jsxs)(p.Clickable, {
        innerRef: es,
        className: i()(Q.shopCard, (0, c.match)(ev).with(U.ShopCardHoverAnimationVariant.CONTROL, () => Q.shopCardDefaultAnimation).with(U.ShopCardHoverAnimationVariant.TRANSFORMATION, () => Q.shopCardTransformationAnimation).otherwise(() => void 0)),
        onBlur: () => eo(!1),
        onClick: eM,
        style: null != ep ? {
          backgroundColor: eT ? "var(--background-floating)" : "var(--background-secondary)",
          borderColor: "var(--chat-border)",
          boxShadow: eu ? eK : "none"
        } : void 0,
        id: "shop-item-".concat(t.skuId),
        children: [eI && (0, l.jsx)(p.Button, {
          className: Q.closeButton,
          "aria-label": Z.default.Messages.CLOSE,
          look: p.Button.Looks.BLANK,
          size: p.Button.Sizes.NONE,
          onClick: ez,
          children: (0, l.jsx)(R.default, {
            width: 16,
            height: 16,
            color: "white"
          })
        }), ej && !eI && (0, l.jsx)("div", {
          className: Q.checkmarkWrapper,
          children: (0, l.jsx)(A.default, {
            width: 38,
            height: 38,
            className: Q.checkmark
          })
        }), eV(), (u()(null != ei, "default payment source must be set"), (0, l.jsxs)("div", {
          className: i()(Q.cardText, {
            [Q.cardTextBlur]: (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT
          }),
          children: [(0, l.jsx)("div", {
            className: i()(Q.cardBackground, eT ? Q.darkCardBackground : Q.lightCardBackground, (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT ? Q.cardLowOpacity : null)
          }), eI ? (0, l.jsx)(v.default, {
            product: t,
            paymentSource: ei,
            itemPreview: eV(),
            onPurchaseComplete: () => {
              ek(!0)
            },
            onUse: ez,
            onError: e => {
              eR(e)
            },
            confettiCanvas: e_.current
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(p.Text, {
              variant: "text-lg/bold",
              className: Q.productName,
              children: t.name
            }), (0, l.jsxs)("div", {
              className: Q.detailsWrapper,
              children: [(0, l.jsx)("div", {
                className: Q.innerBlur,
                children: eU()
              }), (0, l.jsx)("div", {
                className: Q.innerHover,
                children: eG()
              })]
            })]
          })]
        })), (0, l.jsx)(G.default, {
          category: a,
          className: Q.limitedTimeBadge,
          display: "card"
        }), eL && (0, l.jsx)(B.TextBadge, {
          text: Z.default.Messages.NEW,
          disableColor: !0,
          className: Q.newBadge
        })]
      })]
    })
  })
}