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
  x = a("100527"),
  b = a("906732"),
  S = a("1585"),
  T = a("125988"),
  v = a("74179"),
  L = a("107091"),
  I = a("197115"),
  N = a("300284"),
  _ = a("876917"),
  y = a("642619"),
  O = a("210887"),
  k = a("594174"),
  R = a("725808"),
  A = a("465670"),
  j = a("794358"),
  P = a("466111"),
  B = a("26290"),
  D = a("998502"),
  F = a("335131"),
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
  Z = a("10805"),
  Q = a("42615");
let q = D.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  $ = p.AvatarSizes.SIZE_152,
  J = p.AvatarSizes.SIZE_120,
  ee = (0, S.getDecorationSizeForAvatarSize)($),
  et = e => {
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
  ea = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: i()(Z.previewButton, t),
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
    analyticsLocations: D
  } = (0, b.default)(x.default.COLLECTIBLES_SHOP_CARD), el = s.useRef(null), es = (0, g.default)(el), {
    defaultPaymentSource: er
  } = (0, v.default)({
    isGift: !1,
    activeSubscription: null
  }), [ei, en] = s.useState(!1), eo = es || ei, eu = (0, f.useStateFromStores)([k.default], () => k.default.getCurrentUser()), [ec] = t.items, {
    avatarDecorationSrc: ed,
    eventHandlers: ef,
    avatarPlaceholderSrc: em
  } = (0, T.default)({
    user: eu,
    avatarDecorationOverride: (null == ec ? void 0 : ec.type) === d.CollectiblesItemType.AVATAR_DECORATION ? ec : void 0,
    size: ee,
    animateOnHover: !eo
  }), {
    backgroundColors: eC,
    buttonColors: ep
  } = (0, U.default)(t.styles), eh = (0, w.getFormattedPriceForCollectiblesProduct)(t, o, !1), eE = (0, w.isPremiumCollectiblesProduct)(t), eg = (0, w.isFreeCollectiblesProduct)(t), [ex, eb, eS] = (0, f.useStateFromStoresArray)([M.default], () => [M.default.getPurchase(t.skuId), M.default.isClaiming === t.skuId, null != M.default.isClaiming && M.default.isClaiming !== t.skuId]), eT = (0, f.useStateFromStores)([O.default], () => (0, C.isThemeDark)(O.default.theme)), ev = (0, w.isProductNew)(t.skuId), {
    hoverVariant: eL
  } = (0, H.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), [eI, eN] = s.useState(!1), e_ = s.useRef(null), ey = s.useRef(new n.Environment), [eO, ek] = s.useState(!1), [eR, eA] = s.useState(null), ej = null != ex || eO;
  s.useEffect(() => {
    let {
      current: e
    } = el;
    if (null == e) return;
    let t = () => en(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eP = (0, N.default)({
      analyticsLocations: D
    }),
    eB = s.useRef(null),
    eD = () => {
      if ((0, E.popLayer)(), eP(), (null == ec ? void 0 : ec.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
        (0, S.openAvatarDecorationModal)({
          initialSelectedDecoration: ec,
          analyticsLocations: D
        });
        return
      }(null == ec ? void 0 : ec.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, y.openProfileEffectModal)({
        initialSelectedEffectId: ec.id,
        analyticsLocations: D
      })
    },
    eF = e => {
      if (!eI) return l => {
        eB.current = l.currentTarget, (0, z.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: D,
          analyticsSource: e,
          returnRef: eB
        })
      }
    },
    eM = eF(x.default.COLLECTIBLES_SHOP_CARD),
    ew = eF(x.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eH = () => (0, l.jsx)("div", {
      className: Z.hoverUpsellContainer,
      children: (0, l.jsx)(I.default, {
        fullWidth: !0,
        className: Z.__invalid_premiumSubscribeButton,
        disabled: eS,
        onClick: e => e.stopPropagation(),
        buttonText: X.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(el)
  }, [r]);
  let eU = () => ej ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Z.priceTag,
      children: X.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eE ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Z.priceTag,
      children: X.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(V.default, {
      alwaysWhiteText: !1,
      product: t,
      className: Z.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eW = () => eE ? null : eg ? (0, l.jsx)(ea, {
      onClick: ew
    }) : (0, l.jsx)(G.default, {
      product: t,
      returnRef: el,
      isGiftEasterEggEnabled: j,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eG = () => {
      if (eE && !o && !eg) return eH();
      let e = eE ? {
        submitting: eb,
        submittingStartedLabel: X.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: X.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, K.default)({
            product: t,
            analyticsLocations: D
          })
        }
      } : {
        onClick: () => eN(!0)
      };
      return (0, l.jsxs)("div", {
        className: Z.buttonsContainer,
        children: [ej ? (0, l.jsx)(et, {
          disabled: eS,
          onClick: eD,
          children: X.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(et, {
          disabled: eS,
          className: Z.purchaseButton,
          ...e,
          children: eE ? X.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : X.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eh
          })
        }), eW()]
      })
    },
    eV = () => eI && null !== eR ? (0, l.jsx)("div", {
      className: Z.avatarContainer,
      children: (0, l.jsx)("img", {
        src: Q,
        alt: "error",
        className: Z.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eE && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: Z.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: X.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(B.TextBadge, {
          ...e,
          className: Z.premiumWheelBadge,
          text: (0, l.jsx)(P.default, {
            className: Z.premiumWheel
          })
        })
      }), (null == ec ? void 0 : ec.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: Z.profileEffectShopPreview,
        children: (0, l.jsx)(_.default, {
          isHovering: eo,
          profileEffectId: ec.id,
          isPurchased: ej,
          removeSetHeight: !0
        })
      }), (null == ec ? void 0 : ec.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: Z.avatarContainer,
        children: (0, l.jsx)(q, {
          ...ef,
          avatarDecoration: ed,
          src: em,
          className: i()(Z.avatar, {
            [Z.avatarPurchased]: ej && !eI
          }),
          size: eI ? J : $,
          "aria-label": X.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    ez = () => {
      eA(null), eN(!1), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      })
    },
    eK = eT ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    eY = null != ep && eI ? {
      boxShadow: "0px 4px 50px 0px " + ep.primary.toHexString()
    } : {};
  return (0, l.jsxs)(l.Fragment, {
    children: [eI && (0, l.jsx)("div", {
      className: Z.backdrop,
      onClick: () => eN(!1)
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsxs)("div", {
        className: i()(Z.overflowContainer, {
          [Z.lightningCheckout]: eI
        }),
        style: eY,
        children: [(0, l.jsx)(n.ConfettiCanvas, {
          ref: e_,
          className: Z.confettiCanvas,
          environment: ey.current
        }), (0, l.jsxs)(p.Clickable, {
          innerRef: el,
          className: i()(Z.shopCard, (0, c.match)(eL).with(H.ShopCardHoverAnimationVariant.CONTROL, () => Z.shopCardDefaultAnimation).with(H.ShopCardHoverAnimationVariant.TRANSFORMATION, () => Z.shopCardTransformationAnimation).otherwise(() => void 0)),
          onBlur: () => en(!1),
          onClick: eM,
          style: null != eC ? {
            backgroundColor: eT ? "var(--background-floating)" : "var(--background-secondary)",
            borderColor: "var(--chat-border)",
            boxShadow: eo ? eK : "none"
          } : void 0,
          id: "shop-item-".concat(t.skuId),
          children: [eI && (0, l.jsx)(p.Button, {
            className: Z.closeButton,
            "aria-label": X.default.Messages.CLOSE,
            look: p.Button.Looks.BLANK,
            size: p.Button.Sizes.NONE,
            onClick: ez,
            children: (0, l.jsx)(A.default, {
              width: 16,
              height: 16,
              color: "white"
            })
          }), ej && !eI && (0, l.jsx)("div", {
            className: Z.checkmarkWrapper,
            children: (0, l.jsx)(R.default, {
              width: 38,
              height: 38,
              className: Z.checkmark
            })
          }), eV(), (u()(null != er, "default payment source must be set"), (0, l.jsxs)("div", {
            className: i()(Z.cardText, {
              [Z.cardTextBlur]: (null == ec ? void 0 : ec.type) === d.CollectiblesItemType.PROFILE_EFFECT
            }),
            children: [(0, l.jsx)("div", {
              className: i()(Z.cardBackground, eT ? Z.darkCardBackground : Z.lightCardBackground, (null == ec ? void 0 : ec.type) === d.CollectiblesItemType.PROFILE_EFFECT ? Z.cardLowOpacity : null)
            }), eI ? (0, l.jsx)(L.default, {
              product: t,
              paymentSource: er,
              itemPreview: eV(),
              onPurchaseComplete: () => {
                ek(!0)
              },
              onUse: ez,
              onError: e => {
                eA(e)
              },
              onReviewPurchase: ez,
              confettiCanvas: e_.current
            }) : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(p.Text, {
                variant: "text-lg/bold",
                className: Z.productName,
                children: t.name
              }), (0, l.jsxs)("div", {
                className: Z.detailsWrapper,
                children: [(0, l.jsx)("div", {
                  className: Z.innerBlur,
                  children: eU()
                }), (0, l.jsx)("div", {
                  className: Z.innerHover,
                  children: eG()
                })]
              })]
            })]
          })), (0, l.jsx)(W.default, {
            category: a,
            className: Z.limitedTimeBadge,
            display: "card"
          }), ev && (0, l.jsx)(B.TextBadge, {
            text: X.default.Messages.NEW,
            disableColor: !0,
            className: Z.newBadge
          })]
        })]
      })
    })]
  })
}