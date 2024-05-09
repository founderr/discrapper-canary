"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("887024"),
  o = a("512722"),
  u = a.n(o),
  c = a("278074"),
  d = a("979554"),
  f = a("399606"),
  m = a("692547"),
  C = a("663002"),
  p = a("481060"),
  E = a("570140"),
  h = a("37234"),
  g = a("727637"),
  x = a("607070"),
  b = a("100527"),
  T = a("906732"),
  S = a("1585"),
  L = a("125988"),
  v = a("377171"),
  I = a("74179"),
  N = a("107091"),
  _ = a("197115"),
  O = a("300284"),
  y = a("876917"),
  R = a("642619"),
  k = a("210887"),
  A = a("594174"),
  j = a("725808"),
  P = a("465670"),
  B = a("794358"),
  M = a("466111"),
  D = a("26290"),
  F = a("998502"),
  w = a("335131"),
  H = a("1870"),
  U = a("884697"),
  W = a("664018"),
  G = a("624377"),
  V = a("813083"),
  z = a("680942"),
  K = a("558060"),
  Y = a("237031"),
  X = a("832149"),
  Z = a("474936"),
  Q = a("689938"),
  q = a("638075"),
  $ = a("42615");
let J = F.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  ee = p.AvatarSizes.SIZE_152,
  et = p.AvatarSizes.SIZE_120,
  ea = (0, S.getDecorationSizeForAvatarSize)(ee),
  el = e => {
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
  es = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(q.previewButton, t),
      innerClassName: q.previewButtonInner,
      "aria-label": Q.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(B.default, {
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
    isGiftEasterEggEnabled: B
  } = e, {
    analyticsLocations: F
  } = (0, T.default)(b.default.COLLECTIBLES_SHOP_CARD), er = s.useRef(null), en = s.useRef(null), ei = (0, g.default)(er), {
    defaultPaymentSource: eo
  } = (0, I.default)({
    isGift: !1,
    activeSubscription: null
  }), [eu, ec] = s.useState(!1), ed = ei || eu, ef = (0, f.useStateFromStores)([A.default], () => A.default.getCurrentUser()), [em] = t.items, {
    avatarDecorationSrc: eC,
    eventHandlers: ep,
    avatarPlaceholderSrc: eE
  } = (0, L.default)({
    user: ef,
    avatarDecorationOverride: (null == em ? void 0 : em.type) === d.CollectiblesItemType.AVATAR_DECORATION ? em : void 0,
    size: ea,
    animateOnHover: !ed
  }), {
    backgroundColors: eh,
    buttonColors: eg
  } = (0, G.default)(t.styles), ex = (0, U.getFormattedPriceForCollectiblesProduct)(t, o, !1), eb = (0, U.isPremiumCollectiblesProduct)(t), eT = (0, U.isFreeCollectiblesProduct)(t), [eS, eL, ev] = (0, f.useStateFromStoresArray)([H.default], () => [H.default.getPurchase(t.skuId), H.default.isClaiming === t.skuId, null != H.default.isClaiming && H.default.isClaiming !== t.skuId]), eI = (0, f.useStateFromStores)([k.default], () => (0, C.isThemeDark)(k.default.theme)), eN = (0, U.isProductNew)(t.skuId), {
    hoverVariant: e_
  } = (0, W.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), [eO, ey] = s.useState(!1), eR = s.useRef(null), ek = s.useRef(new i.Environment), [eA, ej] = s.useState(!1), [eP, eB] = s.useState(null), eM = null != eS || eA;
  s.useEffect(() => {
    let {
      current: e
    } = er;
    if (null == e) return;
    let t = () => ec(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eD = (0, O.default)({
      analyticsLocations: F
    }),
    eF = s.useRef(null),
    ew = () => {
      if ((0, h.popLayer)(), eD(), (null == em ? void 0 : em.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
        (0, S.openAvatarDecorationModal)({
          initialSelectedDecoration: em,
          analyticsLocations: F
        });
        return
      }(null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, R.openProfileEffectModal)({
        initialSelectedEffectId: em.id,
        analyticsLocations: F
      })
    },
    eH = e => {
      if (!eO) return l => {
        eF.current = l.currentTarget, (0, Y.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: F,
          analyticsSource: e,
          returnRef: eF
        })
      }
    },
    eU = eH(b.default.COLLECTIBLES_SHOP_CARD),
    eW = eH(b.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eG = () => (0, l.jsx)("div", {
      className: q.hoverUpsellContainer,
      children: (0, l.jsx)(_.default, {
        fullWidth: !0,
        className: q.__invalid_premiumSubscribeButton,
        disabled: ev,
        onClick: e => e.stopPropagation(),
        buttonText: Q.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(er)
  }, [r]), s.useEffect(() => {
    if (!x.default.useReducedMotion && null !== eP) {
      let {
        current: e
      } = en;
      u()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eP]);
  let eV = () => eM ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: Q.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eb ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: Q.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(K.default, {
      alwaysWhiteText: !1,
      product: t,
      className: q.priceTag,
      disableTooltipPointerEvents: !0
    }),
    ez = () => eb ? null : eT ? (0, l.jsx)(es, {
      onClick: eW
    }) : (0, l.jsx)(z.default, {
      product: t,
      returnRef: er,
      isGiftEasterEggEnabled: B,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eK = () => {
      if (eb && !o && !eT) return eG();
      let e = eb ? {
        submitting: eL,
        submittingStartedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, w.claimPremiumCollectiblesProduct)(t.skuId), (0, X.default)({
            product: t,
            analyticsLocations: F
          })
        }
      } : {
        onClick: () => {
          eB(null), ey(!0), E.default.dispatch({
            type: "LIGHTNING_CHECKOUT_OPEN"
          })
        }
      };
      return (0, l.jsxs)("div", {
        className: q.buttonsContainer,
        children: [eM ? (0, l.jsx)(el, {
          disabled: ev,
          onClick: ew,
          children: Q.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(el, {
          disabled: ev,
          className: q.purchaseButton,
          ...e,
          children: eb ? Q.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : Q.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ex
          })
        }), ez()]
      })
    },
    eY = () => eO && null !== eP ? (0, l.jsx)("div", {
      className: q.avatarContainer,
      children: (0, l.jsx)("img", {
        src: $,
        alt: "error",
        className: q.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eb && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: q.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(D.TextBadge, {
          ...e,
          className: q.premiumWheelBadge,
          text: (0, l.jsx)(M.default, {
            className: q.premiumWheel
          })
        })
      }), (null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: q.profileEffectShopPreview,
        children: (0, l.jsx)(y.default, {
          isHovering: ed,
          profileEffectId: em.id,
          isPurchased: eM,
          removeSetHeight: !0
        })
      }), (null == em ? void 0 : em.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: q.avatarContainer,
        children: (0, l.jsx)(J, {
          ...ep,
          avatarDecoration: eC,
          src: eE,
          className: n()(q.avatar, {
            [q.avatarPurchased]: eM && !eO
          }),
          size: eO ? et : ee,
          "aria-label": Q.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    eX = () => (u()(null != eo, "default payment source must be set"), (0, l.jsxs)("div", {
      className: n()(q.cardText, {
        [q.cardTextBlur]: (null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: n()(q.cardBackground, eI ? q.darkCardBackground : q.lightCardBackground, (null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT ? q.cardLowOpacity : null)
      }), eO ? (0, l.jsx)(N.default, {
        product: t,
        paymentSource: eo,
        itemPreview: eY(),
        onPurchaseComplete: () => {
          ej(!0)
        },
        onUse: eZ,
        onError: e => {
          eB(e)
        },
        onReviewPurchase: eZ,
        confettiCanvas: eR.current
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: q.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: q.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: q.innerBlur,
            children: eV()
          }), (0, l.jsx)("div", {
            className: q.innerHover,
            children: eK()
          })]
        })]
      })]
    })),
    eZ = () => {
      ey(!1), E.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      })
    },
    eQ = eI ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    eq = null != eh ? {
      backgroundColor: eI ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: ed ? eQ : "none"
    } : void 0,
    e$ = null != eg && eO ? {
      boxShadow: "0px 4px 50px 0px " + eg.primary.toHexString()
    } : {},
    eJ = eO && eP ? {
      boxShadow: "0px 4px 50px 0px " + (eI ? v.default.WHITE : v.default.BLACK)
    } : e$;
  return (0, l.jsxs)(l.Fragment, {
    children: [eO && (0, l.jsx)("div", {
      className: q.backdrop,
      onClick: () => ey(!1)
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)(p.Shakeable, {
        className: n()({
          [q.shaker]: eO
        }),
        ref: en,
        children: (0, l.jsxs)("div", {
          className: n()(q.overflowContainer, {
            [q.lightningCheckout]: eO
          }),
          style: eJ,
          children: [(0, l.jsx)(i.ConfettiCanvas, {
            ref: eR,
            className: q.confettiCanvas,
            environment: ek.current
          }), (0, l.jsxs)(p.Clickable, {
            innerRef: er,
            className: n()(q.shopCard, (0, c.match)(e_).with(W.ShopCardHoverAnimationVariant.CONTROL, () => q.shopCardDefaultAnimation).with(W.ShopCardHoverAnimationVariant.TRANSFORMATION, () => q.shopCardTransformationAnimation).otherwise(() => void 0)),
            onBlur: () => ec(!1),
            onClick: eU,
            style: eq,
            id: "shop-item-".concat(t.skuId),
            children: [eO && (0, l.jsx)(p.Button, {
              className: q.closeButton,
              "aria-label": Q.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: eZ,
              children: (0, l.jsx)(P.default, {
                width: 16,
                height: 16,
                color: eI ? v.default.WHITE : v.default.BLACK
              })
            }), eM && !eO && (0, l.jsx)("div", {
              className: q.checkmarkWrapper,
              children: (0, l.jsx)(j.default, {
                width: 38,
                height: 38,
                className: q.checkmark
              })
            }), eY(), eX(), !eO && (0, l.jsx)(V.default, {
              category: a,
              className: q.limitedTimeBadge,
              display: "card"
            }), eN && !eO && (0, l.jsx)(D.TextBadge, {
              text: Q.default.Messages.NEW,
              disableColor: !0,
              className: q.newBadge
            })]
          })]
        })
      })
    })]
  })
}