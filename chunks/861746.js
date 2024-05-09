"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  i = a.n(r),
  n = a("887024"),
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
  A = a("210887"),
  k = a("594174"),
  j = a("725808"),
  P = a("465670"),
  B = a("794358"),
  M = a("466111"),
  D = a("26290"),
  F = a("998502"),
  w = a("335131"),
  H = a("1870"),
  U = a("884697"),
  W = a("266386"),
  G = a("664018"),
  V = a("624377"),
  z = a("813083"),
  K = a("680942"),
  Y = a("558060"),
  X = a("237031"),
  Z = a("832149"),
  Q = a("474936"),
  q = a("689938"),
  $ = a("638075"),
  J = a("42615");
let ee = F.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  et = p.AvatarSizes.SIZE_152,
  ea = p.AvatarSizes.SIZE_120,
  el = (0, S.getDecorationSizeForAvatarSize)(et),
  es = e => {
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
  er = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: i()($.previewButton, t),
      innerClassName: $.previewButtonInner,
      "aria-label": q.default.Messages.PREVIEW,
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
  } = (0, T.default)(b.default.COLLECTIBLES_SHOP_CARD), ei = s.useRef(null), en = s.useRef(null), eo = (0, g.default)(ei), {
    defaultPaymentSource: eu
  } = (0, I.default)({
    isGift: !1,
    activeSubscription: null
  }), [ec, ed] = s.useState(!1), ef = eo || ec, em = (0, f.useStateFromStores)([k.default], () => k.default.getCurrentUser()), [eC] = t.items, {
    avatarDecorationSrc: ep,
    eventHandlers: eE,
    avatarPlaceholderSrc: eh
  } = (0, L.default)({
    user: em,
    avatarDecorationOverride: (null == eC ? void 0 : eC.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eC : void 0,
    size: el,
    animateOnHover: !ef
  }), {
    backgroundColors: eg,
    buttonColors: ex
  } = (0, V.default)(t.styles), eb = (0, U.getFormattedPriceForCollectiblesProduct)(t, o, !1), eT = (0, U.isPremiumCollectiblesProduct)(t), eS = (0, U.isFreeCollectiblesProduct)(t), [eL, ev, eI] = (0, f.useStateFromStoresArray)([H.default], () => [H.default.getPurchase(t.skuId), H.default.isClaiming === t.skuId, null != H.default.isClaiming && H.default.isClaiming !== t.skuId]), eN = (0, f.useStateFromStores)([A.default], () => (0, C.isThemeDark)(A.default.theme)), e_ = (0, U.isProductNew)(t.skuId), {
    hoverVariant: eO
  } = (0, G.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), ey = (0, W.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eR, eA] = s.useState(!1), ek = s.useRef(null), ej = s.useRef(new n.Environment), [eP, eB] = s.useState(!1), [eM, eD] = s.useState(null), eF = null != eL || eP;
  s.useEffect(() => {
    let {
      current: e
    } = ei;
    if (null == e) return;
    let t = () => ed(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ew = (0, O.default)({
      analyticsLocations: F
    }),
    eH = s.useRef(null),
    eU = () => {
      if ((0, h.popLayer)(), ew(), (null == eC ? void 0 : eC.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
        (0, S.openAvatarDecorationModal)({
          initialSelectedDecoration: eC,
          analyticsLocations: F
        });
        return
      }(null == eC ? void 0 : eC.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, R.openProfileEffectModal)({
        initialSelectedEffectId: eC.id,
        analyticsLocations: F
      })
    },
    eW = e => {
      if (!eR) return l => {
        eH.current = l.currentTarget, (0, X.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: F,
          analyticsSource: e,
          returnRef: eH
        })
      }
    },
    eG = eW(b.default.COLLECTIBLES_SHOP_CARD),
    eV = eW(b.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ez = () => (0, l.jsx)("div", {
      className: $.hoverUpsellContainer,
      children: (0, l.jsx)(_.default, {
        fullWidth: !0,
        className: $.__invalid_premiumSubscribeButton,
        disabled: eI,
        onClick: e => e.stopPropagation(),
        buttonText: q.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(ei)
  }, [r]), s.useEffect(() => {
    if (!x.default.useReducedMotion && null !== eM) {
      let {
        current: e
      } = en;
      u()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eM]);
  let eK = () => eF ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: $.priceTag,
      children: q.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eT ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: $.priceTag,
      children: q.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(Y.default, {
      alwaysWhiteText: !1,
      product: t,
      className: $.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eY = () => eT ? null : eS ? (0, l.jsx)(er, {
      onClick: eV
    }) : (0, l.jsx)(K.default, {
      product: t,
      returnRef: ei,
      isGiftEasterEggEnabled: B,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eX = () => {
      if (eT && !o && !eS) return ez();
      let e = eT ? {
        submitting: ev,
        submittingStartedLabel: q.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: q.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, w.claimPremiumCollectiblesProduct)(t.skuId), (0, Z.default)({
            product: t,
            analyticsLocations: F
          })
        }
      } : {
        onClick: () => {
          eD(null), eA(!0), E.default.dispatch({
            type: "LIGHTNING_CHECKOUT_OPEN"
          })
        }
      };
      return (0, l.jsxs)("div", {
        className: $.buttonsContainer,
        children: [eF ? (0, l.jsx)(es, {
          disabled: eI,
          onClick: eU,
          children: q.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(es, {
          disabled: eI,
          className: $.purchaseButton,
          ...e,
          children: eT ? q.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : q.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eb
          })
        }), eY()]
      })
    },
    eZ = () => eR && null !== eM ? (0, l.jsx)("div", {
      className: $.avatarContainer,
      children: (0, l.jsx)("img", {
        src: J,
        alt: "error",
        className: $.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eT && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: $.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: q.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(D.TextBadge, {
          ...e,
          className: $.premiumWheelBadge,
          text: (0, l.jsx)(M.default, {
            className: $.premiumWheel
          })
        })
      }), (null == eC ? void 0 : eC.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: $.profileEffectShopPreview,
        children: (0, l.jsx)(y.default, {
          isHovering: ef,
          profileEffectId: eC.id,
          isPurchased: eF,
          removeSetHeight: !0
        })
      }), (null == eC ? void 0 : eC.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: $.avatarContainer,
        children: (0, l.jsx)(ee, {
          ...eE,
          avatarDecoration: ep,
          src: ey && ef ? null == em ? void 0 : em.getAvatarURL(void 0, 152, !0) : eh,
          imageClassName: ey && ef ? $.fadeInAvatarImg : void 0,
          className: i()($.avatar, {
            [$.avatarPurchased]: eF && !eR
          }),
          size: eR ? ea : et,
          "aria-label": q.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    eQ = () => (u()(null != eu, "default payment source must be set"), (0, l.jsxs)("div", {
      className: i()($.cardText, {
        [$.cardTextBlur]: (null == eC ? void 0 : eC.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: i()($.cardBackground, eN ? $.darkCardBackground : $.lightCardBackground, (null == eC ? void 0 : eC.type) === d.CollectiblesItemType.PROFILE_EFFECT ? $.cardLowOpacity : null)
      }), eR ? (0, l.jsx)(N.default, {
        product: t,
        paymentSource: eu,
        itemPreview: eZ(),
        onPurchaseComplete: () => {
          eB(!0)
        },
        onUse: eq,
        onError: e => {
          eD(e)
        },
        onReviewPurchase: eq,
        confettiCanvas: ek.current
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: $.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: $.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: $.innerBlur,
            children: eK()
          }), (0, l.jsx)("div", {
            className: $.innerHover,
            children: eX()
          })]
        })]
      })]
    })),
    eq = () => {
      eA(!1), E.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      })
    },
    e$ = eN ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    eJ = null != eg ? {
      backgroundColor: eN ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: ef ? e$ : "none"
    } : void 0,
    e0 = null != ex && eR ? {
      boxShadow: "0px 4px 50px 0px " + ex.primary.toHexString()
    } : {},
    e1 = eR && eM ? {
      boxShadow: "0px 4px 50px 0px " + (eN ? v.default.WHITE : v.default.BLACK)
    } : e0;
  return (0, l.jsxs)(l.Fragment, {
    children: [eR && (0, l.jsx)("div", {
      className: $.backdrop,
      onClick: () => eA(!1)
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)(p.Shakeable, {
        className: i()({
          [$.shaker]: eR
        }),
        ref: en,
        children: (0, l.jsxs)("div", {
          className: i()($.overflowContainer, {
            [$.lightningCheckout]: eR
          }),
          style: e1,
          children: [(0, l.jsx)(n.ConfettiCanvas, {
            ref: ek,
            className: $.confettiCanvas,
            environment: ej.current
          }), (0, l.jsxs)(p.Clickable, {
            innerRef: ei,
            className: i()($.shopCard, (0, c.match)(eO).with(G.ShopCardHoverAnimationVariant.CONTROL, () => $.shopCardDefaultAnimation).with(G.ShopCardHoverAnimationVariant.TRANSFORMATION, () => $.shopCardTransformationAnimation).otherwise(() => void 0)),
            onBlur: () => ed(!1),
            onClick: eG,
            style: eJ,
            id: "shop-item-".concat(t.skuId),
            children: [eR && (0, l.jsx)(p.Button, {
              className: $.closeButton,
              "aria-label": q.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: eq,
              children: (0, l.jsx)(P.default, {
                width: 16,
                height: 16,
                color: eN ? v.default.WHITE : v.default.BLACK
              })
            }), eF && !eR && (0, l.jsx)("div", {
              className: $.checkmarkWrapper,
              children: (0, l.jsx)(j.default, {
                width: 38,
                height: 38,
                className: $.checkmark
              })
            }), eZ(), eQ(), !eR && (0, l.jsx)(z.default, {
              category: a,
              className: $.limitedTimeBadge,
              display: "card"
            }), e_ && !eR && (0, l.jsx)(D.TextBadge, {
              text: q.default.Messages.NEW,
              disableColor: !0,
              className: $.newBadge
            })]
          })]
        })
      })
    })]
  })
}