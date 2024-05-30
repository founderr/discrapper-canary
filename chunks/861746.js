"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("887024"),
  o = a("512722"),
  c = a.n(o),
  u = a("153832"),
  d = a("979554"),
  f = a("399606"),
  C = a("692547"),
  p = a("663002"),
  m = a("481060"),
  g = a("570140"),
  E = a("37234"),
  h = a("727637"),
  b = a("607070"),
  x = a("100527"),
  S = a("906732"),
  v = a("1585"),
  I = a("125988"),
  L = a("377171"),
  T = a("74179"),
  N = a("107091"),
  _ = a("197115"),
  y = a("300284"),
  A = a("876917"),
  j = a("642619"),
  O = a("210887"),
  k = a("725808"),
  P = a("465670"),
  R = a("794358"),
  B = a("466111"),
  M = a("26290"),
  D = a("626135"),
  w = a("74538"),
  F = a("998502"),
  H = a("335131"),
  U = a("1870"),
  W = a("884697"),
  G = a("266386"),
  V = a("724994"),
  K = a("624377"),
  z = a("390698"),
  Y = a("813083"),
  Z = a("680942"),
  X = a("558060"),
  q = a("237031"),
  Q = a("832149"),
  $ = a("981631"),
  J = a("474936"),
  ee = a("689938"),
  et = a("638075"),
  ea = a("42615");
let el = F.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  es = m.AvatarSizes.SIZE_152,
  er = m.AvatarSizes.SIZE_120,
  en = (0, v.getDecorationSizeForAvatarSize)(es),
  ei = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
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
    return (0, l.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: n()(et.previewButton, t),
      innerClassName: et.previewButtonInner,
      "aria-label": ee.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(R.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    user: a,
    category: r,
    onMount: o,
    isGiftEasterEggEnabled: R
  } = e, F = s.useRef(null), {
    analyticsLocations: ec
  } = (0, S.default)(x.default.COLLECTIBLES_SHOP_CARD), eu = s.useRef(null), ed = s.useRef(null), ef = (0, h.default)(eu), {
    defaultPaymentSource: eC
  } = (0, T.default)({
    isGift: !1,
    activeSubscription: null
  }), [ep, em] = s.useState(!1), eg = ef || ep, [eE] = t.items, {
    avatarDecorationSrc: eh,
    eventHandlers: eb,
    avatarPlaceholderSrc: ex
  } = (0, I.default)({
    user: a,
    avatarDecorationOverride: (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eE : void 0,
    size: en,
    animateOnHover: !eg
  }), {
    backgroundColors: eS,
    buttonColors: ev
  } = (0, K.default)(t.styles), eI = s.useMemo(() => w.default.canUseCollectibles(a), [a]), eL = (0, W.getFormattedPriceForCollectiblesProduct)(t, eI, !1), eT = s.useMemo(() => (0, W.getProductDiscount)(t, eI), [t, eI]), eN = (0, W.isPremiumCollectiblesProduct)(t), e_ = (0, W.isFreeCollectiblesProduct)(t), {
    isPurchased: ey
  } = (0, V.useProductPurchaseState)(t), [eA, ej] = (0, f.useStateFromStoresArray)([U.default], () => [U.default.isClaiming === t.skuId, null != U.default.isClaiming && U.default.isClaiming !== t.skuId]), eO = (0, f.useStateFromStores)([O.default], () => (0, p.isThemeDark)(O.default.theme)), ek = (0, W.isProductNew)(t.skuId), eP = (0, G.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eR, eB] = s.useState(!1), eM = s.useRef(null), eD = s.useRef(new i.Environment), [ew, eF] = s.useState(!1), [eH, eU] = s.useState(null), eW = ey || ew, eG = (0, y.default)({
    analyticsLocations: ec
  }), eV = s.useRef(null), eK = s.useMemo(() => ({
    sku_id: t.skuId,
    location: $.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), ez = () => {
    if ((0, E.popLayer)(), eG(), (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, v.openAvatarDecorationModal)({
        initialSelectedDecoration: eE,
        analyticsLocations: ec
      });
      return
    }(null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, j.openProfileEffectModal)({
      initialSelectedEffectId: eE.id,
      analyticsLocations: ec
    })
  }, eY = e => {
    if (!eR) return a => {
      eV.current = a.currentTarget, (0, q.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: r,
        analyticsLocations: ec,
        analyticsSource: e,
        returnRef: eV
      })
    }
  }, eZ = eY(x.default.COLLECTIBLES_SHOP_CARD), eX = eY(x.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eq = () => (0, l.jsx)("div", {
    className: et.hoverUpsellContainer,
    children: (0, l.jsx)(_.default, {
      fullWidth: !0,
      className: et.__invalid_premiumSubscribeButton,
      disabled: ej,
      onClick: e => e.stopPropagation(),
      buttonText: ee.default.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2
    })
  });
  s.useEffect(() => {
    null == o || o(eu)
  }, [o]), s.useEffect(() => {
    if (!b.default.useReducedMotion && null !== eH) {
      let {
        current: e
      } = ed;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eH]);
  let eQ = () => eW ? (0, l.jsx)(z.AlreadyOwned, {
      className: et.priceTag,
      isPartiallyPurchased: !1
    }) : eN ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(X.default, {
      product: t,
      discount: eT,
      isPremiumUser: eI,
      className: et.priceTag
    }),
    e$ = () => eN ? null : e_ ? (0, l.jsx)(eo, {
      onClick: eX
    }) : (0, l.jsx)(Z.default, {
      product: t,
      returnRef: eu,
      isGiftEasterEggEnabled: R,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eJ = () => {
      if (eN && !eI && !e_) return eq();
      let e = eN ? {
        submitting: eA,
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
      return (0, l.jsxs)("div", {
        className: et.buttonsContainer,
        children: [eW ? (0, l.jsx)(ei, {
          disabled: ej,
          onClick: ez,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(ei, {
          disabled: ej,
          className: et.purchaseButton,
          ...e,
          children: eN ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eL
          })
        }), e$()]
      })
    },
    e0 = () => eR && null !== eH ? (0, l.jsx)("div", {
      className: et.avatarContainer,
      children: (0, l.jsx)("img", {
        src: ea,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eN && (0, l.jsx)(m.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(M.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, l.jsx)(B.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, l.jsx)(A.default, {
          isHovering: eg,
          profileEffectId: eE.id,
          isPurchased: eW,
          removeSetHeight: !0
        })
      }), (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: et.avatarContainer,
        children: (0, l.jsx)(el, {
          ...eb,
          avatarDecoration: eh,
          src: eP && eg ? null == a ? void 0 : a.getAvatarURL(void 0, 152, !0) : ex,
          imageClassName: eP && eg ? et.fadeInAvatarImg : void 0,
          className: n()(et.avatar, {
            [et.avatarPurchased]: eW && !eR
          }),
          size: eR ? er : es,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e1 = () => (c()(null != eC, "default payment source must be set"), (0, l.jsxs)("div", {
      className: n()(et.cardText, {
        [et.cardTextBlur]: (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: n()(et.cardBackground, eO ? et.darkCardBackground : et.lightCardBackground, (null == eE ? void 0 : eE.type) === d.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), eR ? (0, l.jsx)(N.default, {
        product: t,
        paymentSource: eC,
        itemPreview: e0(),
        onPurchaseComplete: () => {
          eF(!0), D.default.track($.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eK,
            load_id: F.current
          })
        },
        onUse: e7,
        onError: e => {
          eU(e), D.default.track($.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eK,
            load_id: F.current
          })
        },
        onReviewPurchase: e7,
        confettiCanvas: eM.current,
        loadId: F.current,
        baseAnalyticsData: eK
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: et.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: et.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: et.innerBlur,
            children: eQ()
          }), (0, l.jsx)("div", {
            className: et.innerHover,
            children: eJ()
          })]
        })]
      })]
    })),
    e4 = () => {
      F.current = (0, u.v4)(), eU(null), eB(!0), em(!0), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), D.default.track($.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eK,
        load_id: F.current
      })
    },
    e7 = s.useCallback(() => {
      eB(!1), em(!1), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), D.default.track($.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eK,
        load_id: F.current
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
    e6 = eR && eH ? {
      boxShadow: "0px 4px 50px 0px " + (eO ? L.default.WHITE : L.default.BLACK)
    } : e8;
  return s.useEffect(() => {
    if (eR) {
      c()(null !== eu.current, "cardRef can not be null");
      let e = eu.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let a = t[0],
        l = t[t.length - 1],
        s = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === a ? (e.preventDefault(), null == l || l.focus()) : !e.shiftKey && document.activeElement === l && (e.preventDefault(), null == a || a.focus()))
        },
        r = e => {
          "Escape" === e.key && e7()
        };
      return e.addEventListener("keydown", s), e.addEventListener("keydown", r), () => {
        e.removeEventListener("keydown", s), e.removeEventListener("keydown", r)
      }
    }
  }, [eR, e7]), (0, l.jsxs)(l.Fragment, {
    children: [eR && (0, l.jsx)("div", {
      className: et.backdrop,
      onClick: e7,
      "aria-hidden": !0
    }), (0, l.jsx)(m.FocusRing, {
      children: (0, l.jsx)(m.Shakeable, {
        className: n()({
          [et.shaker]: eR
        }),
        ref: ed,
        children: (0, l.jsxs)("div", {
          className: n()(et.overflowContainer, {
            [et.lightningCheckout]: eR
          }),
          style: e6,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, l.jsx)(i.ConfettiCanvas, {
            ref: eM,
            className: et.confettiCanvas,
            environment: eD.current
          }), (0, l.jsxs)(m.Clickable, {
            innerRef: eu,
            className: n()(et.shopCard, et.shopCardAnimation),
            onBlur: () => em(!1),
            onClick: eZ,
            style: e3,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eR && (0, l.jsx)(m.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: m.Button.Looks.BLANK,
              size: m.Button.Sizes.NONE,
              onClick: e7,
              children: (0, l.jsx)(P.default, {
                width: 16,
                height: 16,
                color: eO ? L.default.WHITE : L.default.BLACK
              })
            }), eW && !eR && (0, l.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, l.jsx)(k.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), e0(), e1(), !eR && (0, l.jsx)(Y.default, {
              category: r,
              className: et.limitedTimeBadge,
              display: "card"
            }), ek && !eR && (0, l.jsx)(M.TextBadge, {
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