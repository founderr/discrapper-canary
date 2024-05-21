"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("887024"),
  o = a("512722"),
  c = a.n(o),
  u = a("278074"),
  d = a("153832"),
  f = a("979554"),
  C = a("399606"),
  m = a("692547"),
  p = a("663002"),
  g = a("481060"),
  E = a("570140"),
  h = a("37234"),
  b = a("727637"),
  x = a("607070"),
  v = a("100527"),
  S = a("906732"),
  I = a("1585"),
  T = a("125988"),
  L = a("377171"),
  N = a("74179"),
  _ = a("107091"),
  y = a("197115"),
  A = a("300284"),
  O = a("876917"),
  j = a("642619"),
  R = a("210887"),
  k = a("594174"),
  P = a("725808"),
  M = a("465670"),
  B = a("794358"),
  D = a("466111"),
  F = a("26290"),
  H = a("626135"),
  w = a("998502"),
  U = a("335131"),
  W = a("1870"),
  V = a("884697"),
  G = a("266386"),
  K = a("664018"),
  z = a("624377"),
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
let el = w.default.getEnableHardwareAcceleration() ? g.AnimatedAvatar : g.Avatar,
  es = g.AvatarSizes.SIZE_152,
  er = g.AvatarSizes.SIZE_120,
  en = (0, I.getDecorationSizeForAvatarSize)(es),
  ei = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(g.Button, {
      fullWidth: !0,
      look: g.Button.Looks.FILLED,
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
    return (0, l.jsx)(g.Button, {
      color: g.ButtonColors.BRAND,
      look: g.Button.Looks.FILLED,
      size: g.ButtonSizes.ICON,
      className: n()(et.previewButton, t),
      innerClassName: et.previewButtonInner,
      "aria-label": ee.default.Messages.PREVIEW,
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
  } = e, w = s.useRef(null), {
    analyticsLocations: ec
  } = (0, S.default)(v.default.COLLECTIBLES_SHOP_CARD), eu = s.useRef(null), ed = s.useRef(null), ef = (0, b.default)(eu), {
    defaultPaymentSource: eC
  } = (0, N.default)({
    isGift: !1,
    activeSubscription: null
  }), [em, ep] = s.useState(!1), eg = ef || em, eE = (0, C.useStateFromStores)([k.default], () => k.default.getCurrentUser()), [eh] = t.items, {
    avatarDecorationSrc: eb,
    eventHandlers: ex,
    avatarPlaceholderSrc: ev
  } = (0, T.default)({
    user: eE,
    avatarDecorationOverride: (null == eh ? void 0 : eh.type) === f.CollectiblesItemType.AVATAR_DECORATION ? eh : void 0,
    size: en,
    animateOnHover: !eg
  }), {
    backgroundColors: eS,
    buttonColors: eI
  } = (0, z.default)(t.styles), eT = (0, V.getFormattedPriceForCollectiblesProduct)(t, o, !1), eL = (0, V.isPremiumCollectiblesProduct)(t), eN = (0, V.isFreeCollectiblesProduct)(t), [e_, ey, eA] = (0, C.useStateFromStoresArray)([W.default], () => [W.default.getPurchase(t.skuId), W.default.isClaiming === t.skuId, null != W.default.isClaiming && W.default.isClaiming !== t.skuId]), eO = (0, C.useStateFromStores)([R.default], () => (0, p.isThemeDark)(R.default.theme)), ej = (0, V.isProductNew)(t.skuId), {
    hoverVariant: eR
  } = (0, K.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), ek = (0, G.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eP, eM] = s.useState(!1), eB = s.useRef(null), eD = s.useRef(new i.Environment), [eF, eH] = s.useState(!1), [ew, eU] = s.useState(null), eW = null != e_ || eF, eV = (0, A.default)({
    analyticsLocations: ec
  }), eG = s.useRef(null), eK = s.useMemo(() => ({
    sku_id: t.skuId,
    location: $.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), ez = () => {
    if ((0, h.popLayer)(), eV(), (null == eh ? void 0 : eh.type) === f.CollectiblesItemType.AVATAR_DECORATION) {
      (0, I.openAvatarDecorationModal)({
        initialSelectedDecoration: eh,
        analyticsLocations: ec
      });
      return
    }(null == eh ? void 0 : eh.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, j.openProfileEffectModal)({
      initialSelectedEffectId: eh.id,
      analyticsLocations: ec
    })
  }, eY = e => {
    if (!eP) return l => {
      eG.current = l.currentTarget, (0, q.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: ec,
        analyticsSource: e,
        returnRef: eG
      })
    }
  }, eZ = eY(v.default.COLLECTIBLES_SHOP_CARD), eX = eY(v.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eq = () => (0, l.jsx)("div", {
    className: et.hoverUpsellContainer,
    children: (0, l.jsx)(y.default, {
      fullWidth: !0,
      className: et.__invalid_premiumSubscribeButton,
      disabled: eA,
      onClick: e => e.stopPropagation(),
      buttonText: ee.default.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2
    })
  });
  s.useEffect(() => {
    null == r || r(eu)
  }, [r]), s.useEffect(() => {
    if (!x.default.useReducedMotion && null !== ew) {
      let {
        current: e
      } = ed;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [ew]);
  let eQ = () => eW ? (0, l.jsx)(g.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eL ? (0, l.jsx)(g.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(X.default, {
      product: t,
      className: et.priceTag
    }),
    e$ = () => eL ? null : eN ? (0, l.jsx)(eo, {
      onClick: eX
    }) : (0, l.jsx)(Z.default, {
      product: t,
      returnRef: eu,
      isGiftEasterEggEnabled: B,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eJ = () => {
      if (eL && !o && !eN) return eq();
      let e = eL ? {
        submitting: ey,
        submittingStartedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, U.claimPremiumCollectiblesProduct)(t.skuId), (0, Q.default)({
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
          disabled: eA,
          onClick: ez,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(ei, {
          disabled: eA,
          className: et.purchaseButton,
          ...e,
          children: eL ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eT
          })
        }), e$()]
      })
    },
    e1 = () => eP && null !== ew ? (0, l.jsx)("div", {
      className: et.avatarContainer,
      children: (0, l.jsx)("img", {
        src: ea,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eL && (0, l.jsx)(g.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: g.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(F.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, l.jsx)(D.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eh ? void 0 : eh.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, l.jsx)(O.default, {
          isHovering: eg,
          profileEffectId: eh.id,
          isPurchased: eW,
          removeSetHeight: !0
        })
      }), (null == eh ? void 0 : eh.type) === f.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: et.avatarContainer,
        children: (0, l.jsx)(el, {
          ...ex,
          avatarDecoration: eb,
          src: ek && eg ? null == eE ? void 0 : eE.getAvatarURL(void 0, 152, !0) : ev,
          imageClassName: ek && eg ? et.fadeInAvatarImg : void 0,
          className: n()(et.avatar, {
            [et.avatarPurchased]: eW && !eP
          }),
          size: eP ? er : es,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e0 = () => (c()(null != eC, "default payment source must be set"), (0, l.jsxs)("div", {
      className: n()(et.cardText, {
        [et.cardTextBlur]: (null == eh ? void 0 : eh.type) === f.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: n()(et.cardBackground, eO ? et.darkCardBackground : et.lightCardBackground, (null == eh ? void 0 : eh.type) === f.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), eP ? (0, l.jsx)(_.default, {
        product: t,
        paymentSource: eC,
        itemPreview: e1(),
        onPurchaseComplete: () => {
          eH(!0), H.default.track($.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eK,
            load_id: w.current
          })
        },
        onUse: e7,
        onError: e => {
          eU(e), H.default.track($.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eK,
            load_id: w.current
          })
        },
        onReviewPurchase: e7,
        confettiCanvas: eB.current,
        loadId: w.current,
        baseAnalyticsData: eK
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(g.Text, {
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
      w.current = (0, d.v4)(), eU(null), eM(!0), ep(!0), E.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), H.default.track($.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eK,
        load_id: w.current
      })
    },
    e7 = s.useCallback(() => {
      eM(!1), ep(!1), E.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), H.default.track($.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eK,
        load_id: w.current
      })
    }, [eM, eK]),
    e2 = eO ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e3 = null != eS ? {
      backgroundColor: eO ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: eg ? e2 : "none"
    } : void 0,
    e8 = null != eI && eP ? {
      boxShadow: "0px 4px 50px 0px " + eI.primary.toHexString()
    } : {},
    e6 = eP && ew ? {
      boxShadow: "0px 4px 50px 0px " + (eO ? L.default.WHITE : L.default.BLACK)
    } : e8;
  return s.useEffect(() => {
    if (eP) {
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
  }, [eP, e7]), (0, l.jsxs)(l.Fragment, {
    children: [eP && (0, l.jsx)("div", {
      className: et.backdrop,
      onClick: e7,
      "aria-hidden": !0
    }), (0, l.jsx)(g.FocusRing, {
      children: (0, l.jsx)(g.Shakeable, {
        className: n()({
          [et.shaker]: eP
        }),
        ref: ed,
        children: (0, l.jsxs)("div", {
          className: n()(et.overflowContainer, {
            [et.lightningCheckout]: eP
          }),
          style: e6,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, l.jsx)(i.ConfettiCanvas, {
            ref: eB,
            className: et.confettiCanvas,
            environment: eD.current
          }), (0, l.jsxs)(g.Clickable, {
            innerRef: eu,
            className: n()(et.shopCard, (0, u.match)(eR).with(K.ShopCardHoverAnimationVariant.CONTROL, () => et.shopCardDefaultAnimation).with(K.ShopCardHoverAnimationVariant.TRANSFORMATION, () => et.shopCardTransformationAnimation).otherwise(() => void 0)),
            onBlur: () => ep(!1),
            onClick: eZ,
            style: e3,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eP && (0, l.jsx)(g.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: g.Button.Looks.BLANK,
              size: g.Button.Sizes.NONE,
              onClick: e7,
              children: (0, l.jsx)(M.default, {
                width: 16,
                height: 16,
                color: eO ? L.default.WHITE : L.default.BLACK
              })
            }), eW && !eP && (0, l.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, l.jsx)(P.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), e1(), e0(), !eP && (0, l.jsx)(Y.default, {
              category: a,
              className: et.limitedTimeBadge,
              display: "card"
            }), ej && !eP && (0, l.jsx)(F.TextBadge, {
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