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
  d = a("153832"),
  f = a("979554"),
  C = a("399606"),
  m = a("692547"),
  E = a("663002"),
  p = a("481060"),
  h = a("570140"),
  g = a("37234"),
  x = a("727637"),
  T = a("607070"),
  L = a("100527"),
  v = a("906732"),
  b = a("1585"),
  S = a("125988"),
  I = a("377171"),
  N = a("74179"),
  _ = a("107091"),
  O = a("197115"),
  y = a("300284"),
  A = a("876917"),
  R = a("642619"),
  k = a("210887"),
  j = a("594174"),
  P = a("725808"),
  B = a("465670"),
  M = a("794358"),
  D = a("466111"),
  F = a("26290"),
  w = a("626135"),
  H = a("998502"),
  U = a("335131"),
  W = a("1870"),
  G = a("884697"),
  V = a("266386"),
  z = a("664018"),
  K = a("624377"),
  Y = a("813083"),
  Z = a("680942"),
  X = a("558060"),
  Q = a("237031"),
  q = a("832149"),
  $ = a("981631"),
  J = a("474936"),
  ee = a("689938"),
  et = a("638075"),
  ea = a("42615");
let el = H.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  es = p.AvatarSizes.SIZE_152,
  er = p.AvatarSizes.SIZE_120,
  en = (0, b.getDecorationSizeForAvatarSize)(es),
  ei = e => {
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
  eo = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(et.previewButton, t),
      innerClassName: et.previewButtonInner,
      "aria-label": ee.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(M.default, {
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
    isGiftEasterEggEnabled: M
  } = e, H = s.useRef(null), {
    analyticsLocations: eu
  } = (0, v.default)(L.default.COLLECTIBLES_SHOP_CARD), ec = s.useRef(null), ed = s.useRef(null), ef = (0, x.default)(ec), {
    defaultPaymentSource: eC
  } = (0, N.default)({
    isGift: !1,
    activeSubscription: null
  }), [em, eE] = s.useState(!1), ep = ef || em, eh = (0, C.useStateFromStores)([j.default], () => j.default.getCurrentUser()), [eg] = t.items, {
    avatarDecorationSrc: ex,
    eventHandlers: eT,
    avatarPlaceholderSrc: eL
  } = (0, S.default)({
    user: eh,
    avatarDecorationOverride: (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.AVATAR_DECORATION ? eg : void 0,
    size: en,
    animateOnHover: !ep
  }), {
    backgroundColors: ev,
    buttonColors: eb
  } = (0, K.default)(t.styles), eS = (0, G.getFormattedPriceForCollectiblesProduct)(t, o, !1), eI = (0, G.isPremiumCollectiblesProduct)(t), eN = (0, G.isFreeCollectiblesProduct)(t), [e_, eO, ey] = (0, C.useStateFromStoresArray)([W.default], () => [W.default.getPurchase(t.skuId), W.default.isClaiming === t.skuId, null != W.default.isClaiming && W.default.isClaiming !== t.skuId]), eA = (0, C.useStateFromStores)([k.default], () => (0, E.isThemeDark)(k.default.theme)), eR = (0, G.isProductNew)(t.skuId), {
    hoverVariant: ek
  } = (0, z.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), ej = (0, V.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eP, eB] = s.useState(!1), eM = s.useRef(null), eD = s.useRef(new i.Environment), [eF, ew] = s.useState(!1), [eH, eU] = s.useState(null), eW = null != e_ || eF;
  s.useEffect(() => {
    let {
      current: e
    } = ec;
    if (null == e) return;
    let t = () => eE(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eG = (0, y.default)({
      analyticsLocations: eu
    }),
    eV = s.useRef(null),
    ez = {
      sku_id: t.skuId,
      location: $.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
    },
    eK = () => {
      if ((0, g.popLayer)(), eG(), (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.AVATAR_DECORATION) {
        (0, b.openAvatarDecorationModal)({
          initialSelectedDecoration: eg,
          analyticsLocations: eu
        });
        return
      }(null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, R.openProfileEffectModal)({
        initialSelectedEffectId: eg.id,
        analyticsLocations: eu
      })
    },
    eY = e => {
      if (!eP) return l => {
        eV.current = l.currentTarget, (0, Q.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: eu,
          analyticsSource: e,
          returnRef: eV
        })
      }
    },
    eZ = eY(L.default.COLLECTIBLES_SHOP_CARD),
    eX = eY(L.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eQ = () => (0, l.jsx)("div", {
      className: et.hoverUpsellContainer,
      children: (0, l.jsx)(O.default, {
        fullWidth: !0,
        className: et.__invalid_premiumSubscribeButton,
        disabled: ey,
        onClick: e => e.stopPropagation(),
        buttonText: ee.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(ec)
  }, [r]), s.useEffect(() => {
    if (!T.default.useReducedMotion && null !== eH) {
      let {
        current: e
      } = ed;
      u()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eH]);
  let eq = () => eW ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eI ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(X.default, {
      alwaysWhiteText: !1,
      product: t,
      className: et.priceTag,
      disableTooltipPointerEvents: !0
    }),
    e$ = () => eI ? null : eN ? (0, l.jsx)(eo, {
      onClick: eX
    }) : (0, l.jsx)(Z.default, {
      product: t,
      returnRef: ec,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eJ = () => {
      if (eI && !o && !eN) return eQ();
      let e = eI ? {
        submitting: eO,
        submittingStartedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, U.claimPremiumCollectiblesProduct)(t.skuId), (0, q.default)({
            product: t,
            analyticsLocations: eu
          })
        }
      } : {
        onClick: e7
      };
      return (0, l.jsxs)("div", {
        className: et.buttonsContainer,
        children: [eW ? (0, l.jsx)(ei, {
          disabled: ey,
          onClick: eK,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(ei, {
          disabled: ey,
          className: et.purchaseButton,
          ...e,
          children: eI ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eS
          })
        }), e$()]
      })
    },
    e0 = () => eP && null !== eH ? (0, l.jsx)("div", {
      className: et.avatarContainer,
      children: (0, l.jsx)("img", {
        src: ea,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eI && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(F.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, l.jsx)(D.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, l.jsx)(A.default, {
          isHovering: ep,
          profileEffectId: eg.id,
          isPurchased: eW,
          removeSetHeight: !0
        })
      }), (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: et.avatarContainer,
        children: (0, l.jsx)(el, {
          ...eT,
          avatarDecoration: ex,
          src: ej && ep ? null == eh ? void 0 : eh.getAvatarURL(void 0, 152, !0) : eL,
          imageClassName: ej && ep ? et.fadeInAvatarImg : void 0,
          className: n()(et.avatar, {
            [et.avatarPurchased]: eW && !eP
          }),
          size: eP ? er : es,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e1 = () => (u()(null != eC, "default payment source must be set"), (0, l.jsxs)("div", {
      className: n()(et.cardText, {
        [et.cardTextBlur]: (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: n()(et.cardBackground, eA ? et.darkCardBackground : et.lightCardBackground, (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), eP ? (0, l.jsx)(_.default, {
        product: t,
        paymentSource: eC,
        itemPreview: e0(),
        onPurchaseComplete: () => {
          ew(!0), w.default.track($.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...ez,
            load_id: H.current
          })
        },
        onUse: e3,
        onError: e => {
          eU(e), w.default.track($.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...ez,
            load_id: H.current
          })
        },
        onReviewPurchase: e3,
        confettiCanvas: eM.current,
        loadId: H.current,
        baseAnalyticsData: ez
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: et.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: et.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: et.innerBlur,
            children: eq()
          }), (0, l.jsx)("div", {
            className: et.innerHover,
            children: eJ()
          })]
        })]
      })]
    })),
    e7 = () => {
      H.current = (0, d.v4)(), eU(null), eB(!0), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), w.default.track($.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...ez,
        load_id: H.current
      })
    },
    e3 = () => {
      eB(!1), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), w.default.track($.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...ez,
        load_id: H.current
      })
    },
    e4 = eA ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e2 = null != ev ? {
      backgroundColor: eA ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: ep ? e4 : "none"
    } : void 0,
    e8 = null != eb && eP ? {
      boxShadow: "0px 4px 50px 0px " + eb.primary.toHexString()
    } : {},
    e5 = eP && eH ? {
      boxShadow: "0px 4px 50px 0px " + (eA ? I.default.WHITE : I.default.BLACK)
    } : e8;
  return (0, l.jsxs)(l.Fragment, {
    children: [eP && (0, l.jsx)("div", {
      className: et.backdrop,
      onClick: e3
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)(p.Shakeable, {
        className: n()({
          [et.shaker]: eP
        }),
        ref: ed,
        children: (0, l.jsxs)("div", {
          className: n()(et.overflowContainer, {
            [et.lightningCheckout]: eP
          }),
          style: e5,
          children: [(0, l.jsx)(i.ConfettiCanvas, {
            ref: eM,
            className: et.confettiCanvas,
            environment: eD.current
          }), (0, l.jsxs)(p.Clickable, {
            innerRef: ec,
            className: n()(et.shopCard, (0, c.match)(ek).with(z.ShopCardHoverAnimationVariant.CONTROL, () => et.shopCardDefaultAnimation).with(z.ShopCardHoverAnimationVariant.TRANSFORMATION, () => et.shopCardTransformationAnimation).otherwise(() => void 0)),
            onBlur: () => eE(!1),
            onClick: eZ,
            style: e2,
            id: "shop-item-".concat(t.skuId),
            children: [eP && (0, l.jsx)(p.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: e3,
              children: (0, l.jsx)(B.default, {
                width: 16,
                height: 16,
                color: eA ? I.default.WHITE : I.default.BLACK
              })
            }), eW && !eP && (0, l.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, l.jsx)(P.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), e0(), e1(), !eP && (0, l.jsx)(Y.default, {
              category: a,
              className: et.limitedTimeBadge,
              display: "card"
            }), eR && !eP && (0, l.jsx)(F.TextBadge, {
              text: ee.default.Messages.NEW,
              disableColor: !0,
              className: et.newBadge
            })]
          })]
        })
      })
    })]
  })
}