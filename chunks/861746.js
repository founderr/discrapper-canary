"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  r = s("120356"),
  n = s.n(r),
  i = s("887024"),
  o = s("512722"),
  c = s.n(o),
  u = s("153832"),
  d = s("979554"),
  f = s("399606"),
  C = s("692547"),
  p = s("663002"),
  m = s("481060"),
  g = s("570140"),
  E = s("37234"),
  h = s("727637"),
  b = s("607070"),
  x = s("100527"),
  S = s("906732"),
  v = s("1585"),
  I = s("125988"),
  L = s("377171"),
  T = s("74179"),
  N = s("107091"),
  _ = s("197115"),
  y = s("300284"),
  j = s("876917"),
  A = s("642619"),
  O = s("210887"),
  P = s("725808"),
  k = s("465670"),
  R = s("794358"),
  B = s("466111"),
  M = s("26290"),
  D = s("626135"),
  F = s("74538"),
  w = s("998502"),
  H = s("335131"),
  U = s("1870"),
  W = s("884697"),
  G = s("266386"),
  V = s("724994"),
  K = s("624377"),
  z = s("390698"),
  Y = s("813083"),
  Z = s("680942"),
  X = s("558060"),
  q = s("237031"),
  Q = s("832149"),
  $ = s("981631"),
  J = s("474936"),
  ee = s("689938"),
  et = s("638075"),
  es = s("42615");
let ea = w.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  el = m.AvatarSizes.SIZE_152,
  er = m.AvatarSizes.SIZE_120,
  en = (0, v.getDecorationSizeForAvatarSize)(el),
  ei = e => {
    let {
      children: t,
      onClick: s,
      ...l
    } = e;
    return (0, a.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), s()
      },
      ...l,
      children: t
    })
  },
  eo = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, a.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: n()(et.previewButton, t),
      innerClassName: et.previewButtonInner,
      "aria-label": ee.default.Messages.PREVIEW,
      ...s,
      children: (0, a.jsx)(R.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    user: s,
    category: r,
    onMount: o,
    isGiftEasterEggEnabled: R
  } = e, w = l.useRef(null), {
    analyticsLocations: ec
  } = (0, S.default)(x.default.COLLECTIBLES_SHOP_CARD), eu = l.useRef(null), ed = l.useRef(null), ef = (0, h.default)(eu), {
    defaultPaymentSource: eC
  } = (0, T.default)({
    isGift: !1,
    activeSubscription: null
  }), [ep, em] = l.useState(!1), eg = ef || ep, [eE] = t.items, {
    avatarDecorationSrc: eh,
    eventHandlers: eb,
    avatarPlaceholderSrc: ex
  } = (0, I.default)({
    user: s,
    avatarDecorationOverride: (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eE : void 0,
    size: en,
    animateOnHover: !eg
  }), {
    backgroundColors: eS,
    buttonColors: ev
  } = (0, K.default)(t.styles), eI = l.useMemo(() => F.default.canUseCollectibles(s), [s]), eL = (0, W.getFormattedPriceForCollectiblesProduct)(t, eI, !1), eT = l.useMemo(() => (0, W.getProductDiscount)(t, eI), [t, eI]), eN = (0, W.isPremiumCollectiblesProduct)(t), e_ = (0, W.isFreeCollectiblesProduct)(t), {
    isPurchased: ey
  } = (0, V.useProductPurchaseState)(t), [ej, eA] = (0, f.useStateFromStoresArray)([U.default], () => [U.default.isClaiming === t.skuId, null != U.default.isClaiming && U.default.isClaiming !== t.skuId]), eO = (0, f.useStateFromStores)([O.default], () => (0, p.isThemeDark)(O.default.theme)), eP = (0, W.isProductNew)(t.skuId), ek = (0, G.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eR, eB] = l.useState(!1), eM = l.useRef(null), eD = l.useRef(new i.Environment), [eF, ew] = l.useState(!1), [eH, eU] = l.useState(null), eW = ey || eF, eG = (0, y.default)({
    analyticsLocations: ec
  }), eV = l.useRef(null), eK = l.useMemo(() => ({
    sku_id: t.skuId,
    location: $.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), ez = () => {
    if ((0, E.popLayer)(), eG(), (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, v.openAvatarDecorationModal)({
        initialSelectedDecoration: eE,
        analyticsLocations: ec
      });
      return
    }(null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, A.openProfileEffectModal)({
      initialSelectedEffectId: eE.id,
      analyticsLocations: ec
    })
  }, eY = e => {
    if (!eR) return s => {
      eV.current = s.currentTarget, (0, q.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: r,
        analyticsLocations: ec,
        analyticsSource: e,
        returnRef: eV
      })
    }
  }, eZ = eY(x.default.COLLECTIBLES_SHOP_CARD), eX = eY(x.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eq = () => (0, a.jsx)("div", {
    className: et.hoverUpsellContainer,
    children: (0, a.jsx)(_.default, {
      fullWidth: !0,
      className: et.__invalid_premiumSubscribeButton,
      disabled: eA,
      onClick: e => e.stopPropagation(),
      buttonText: ee.default.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2
    })
  });
  l.useEffect(() => {
    null == o || o(eu)
  }, [o]), l.useEffect(() => {
    if (!b.default.useReducedMotion && null !== eH) {
      let {
        current: e
      } = ed;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eH]);
  let eQ = () => eW ? (0, a.jsx)(z.AlreadyOwned, {
      className: et.priceTag,
      isPartiallyPurchased: !1
    }) : eN ? (0, a.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(X.default, {
      product: t,
      discount: eT,
      isPremiumUser: eI,
      className: et.priceTag
    }),
    e$ = () => eN ? null : e_ ? (0, a.jsx)(eo, {
      onClick: eX
    }) : (0, a.jsx)(Z.default, {
      product: t,
      returnRef: eu,
      isGiftEasterEggEnabled: R,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eJ = () => {
      if (eN && !eI && !e_) return eq();
      let e = eN ? {
        submitting: ej,
        submittingStartedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, H.claimPremiumCollectiblesProduct)(t.skuId), (0, Q.default)({
            product: t,
            analyticsLocations: ec
          })
        }
      } : {
        onClick: e4
      };
      return (0, a.jsxs)("div", {
        className: et.buttonsContainer,
        children: [eW ? (0, a.jsx)(ei, {
          disabled: eA,
          onClick: ez,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(ei, {
          disabled: eA,
          className: et.purchaseButton,
          ...e,
          children: eN ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eL
          })
        }), e$()]
      })
    },
    e0 = () => eR && null !== eH ? (0, a.jsx)("div", {
      className: et.avatarContainer,
      children: (0, a.jsx)("img", {
        src: es,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, a.jsxs)(a.Fragment, {
      children: [eN && (0, a.jsx)(m.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(M.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, a.jsx)(B.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, a.jsx)(j.default, {
          isHovering: eg,
          profileEffectId: eE.id,
          isPurchased: eW,
          removeSetHeight: !0
        })
      }), (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
        className: et.avatarContainer,
        children: (0, a.jsx)(ea, {
          ...eb,
          avatarDecoration: eh,
          src: ek && eg ? null == s ? void 0 : s.getAvatarURL(void 0, 152, !0) : ex,
          imageClassName: ek && eg ? et.fadeInAvatarImg : void 0,
          className: n()(et.avatar, {
            [et.avatarPurchased]: eW && !eR
          }),
          size: eR ? er : el,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e1 = () => (c()(null != eC, "default payment source must be set"), (0, a.jsxs)("div", {
      className: n()(et.cardText, {
        [et.cardTextBlur]: (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, a.jsx)("div", {
        className: n()(et.cardBackground, eO ? et.darkCardBackground : et.lightCardBackground, (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), eR ? (0, a.jsx)(N.default, {
        product: t,
        paymentSource: eC,
        itemPreview: e0(),
        onPurchaseComplete: () => {
          ew(!0), D.default.track($.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eK,
            load_id: w.current
          })
        },
        onUse: e7,
        onError: e => {
          eU(e), D.default.track($.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eK,
            load_id: w.current
          })
        },
        onReviewPurchase: e7,
        confettiCanvas: eM.current,
        loadId: w.current,
        baseAnalyticsData: eK
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: et.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: et.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: et.innerBlur,
            children: eQ()
          }), (0, a.jsx)("div", {
            className: et.innerHover,
            children: eJ()
          })]
        })]
      })]
    })),
    e4 = () => {
      w.current = (0, u.v4)(), eU(null), eB(!0), em(!0), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), D.default.track($.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eK,
        load_id: w.current
      })
    },
    e7 = l.useCallback(() => {
      eB(!1), em(!1), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), D.default.track($.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eK,
        load_id: w.current
      })
    }, [eB, eK]),
    e2 = eO ? "0 0 15px 1px ".concat(C.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e3 = null != eS ? {
      backgroundColor: eO ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: eg ? e2 : "none"
    } : void 0,
    e8 = null != ev && eR ? {
      boxShadow: "0px 4px 50px 0px " + ev.primary.toHexString()
    } : {},
    e9 = eR && eH ? {
      boxShadow: "0px 4px 50px 0px " + (eO ? L.default.WHITE : L.default.BLACK)
    } : e8;
  return l.useEffect(() => {
    if (eR) {
      c()(null !== eu.current, "cardRef can not be null");
      let e = eu.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let s = t[0],
        a = t[t.length - 1],
        l = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === s ? (e.preventDefault(), null == a || a.focus()) : !e.shiftKey && document.activeElement === a && (e.preventDefault(), null == s || s.focus()))
        },
        r = e => {
          "Escape" === e.key && e7()
        };
      return e.addEventListener("keydown", l), e.addEventListener("keydown", r), () => {
        e.removeEventListener("keydown", l), e.removeEventListener("keydown", r)
      }
    }
  }, [eR, e7]), (0, a.jsxs)(a.Fragment, {
    children: [eR && (0, a.jsx)("div", {
      className: et.backdrop,
      onClick: e7,
      "aria-hidden": !0
    }), (0, a.jsx)(m.FocusRing, {
      children: (0, a.jsx)(m.Shakeable, {
        className: n()({
          [et.shaker]: eR
        }),
        ref: ed,
        children: (0, a.jsxs)("div", {
          className: n()(et.overflowContainer, {
            [et.lightningCheckout]: eR
          }),
          style: e9,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, a.jsx)(i.ConfettiCanvas, {
            ref: eM,
            className: et.confettiCanvas,
            environment: eD.current
          }), (0, a.jsxs)(m.Clickable, {
            innerRef: eu,
            className: n()(et.shopCard, et.shopCardAnimation),
            onBlur: () => em(!1),
            onClick: eZ,
            style: e3,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eR && (0, a.jsx)(m.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: m.Button.Looks.BLANK,
              size: m.Button.Sizes.NONE,
              onClick: e7,
              children: (0, a.jsx)(k.default, {
                width: 16,
                height: 16,
                color: eO ? L.default.WHITE : L.default.BLACK
              })
            }), eW && !eR && (0, a.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, a.jsx)(P.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), e0(), e1(), !eR && (0, a.jsx)(Y.default, {
              category: r,
              className: et.limitedTimeBadge,
              display: "card"
            }), eP && !eR && (0, a.jsx)(M.TextBadge, {
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