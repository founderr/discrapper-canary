"use strict";
l.r(t), l("47120"), l("627341");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("887024"),
  o = l("512722"),
  u = l.n(o),
  c = l("278074"),
  d = l("153832"),
  f = l("979554"),
  C = l("399606"),
  m = l("692547"),
  p = l("663002"),
  E = l("481060"),
  h = l("570140"),
  g = l("37234"),
  x = l("727637"),
  b = l("607070"),
  T = l("100527"),
  L = l("906732"),
  v = l("1585"),
  S = l("125988"),
  I = l("377171"),
  N = l("74179"),
  _ = l("107091"),
  O = l("197115"),
  y = l("300284"),
  A = l("876917"),
  k = l("642619"),
  j = l("210887"),
  R = l("594174"),
  P = l("725808"),
  B = l("465670"),
  M = l("794358"),
  D = l("466111"),
  F = l("26290"),
  H = l("626135"),
  w = l("998502"),
  U = l("335131"),
  W = l("1870"),
  G = l("884697"),
  V = l("266386"),
  z = l("664018"),
  K = l("624377"),
  Y = l("813083"),
  Z = l("680942"),
  X = l("558060"),
  q = l("237031"),
  Q = l("832149"),
  $ = l("981631"),
  J = l("474936"),
  ee = l("689938"),
  et = l("638075"),
  el = l("42615");
let ea = w.default.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
  es = E.AvatarSizes.SIZE_152,
  er = E.AvatarSizes.SIZE_120,
  en = (0, v.getDecorationSizeForAvatarSize)(es),
  ei = e => {
    let {
      children: t,
      onClick: l,
      ...s
    } = e;
    return (0, a.jsx)(E.Button, {
      fullWidth: !0,
      look: E.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), l()
      },
      ...s,
      children: t
    })
  },
  eo = e => {
    let {
      className: t,
      ...l
    } = e;
    return (0, a.jsx)(E.Button, {
      color: E.ButtonColors.BRAND,
      look: E.Button.Looks.FILLED,
      size: E.ButtonSizes.ICON,
      className: n()(et.previewButton, t),
      innerClassName: et.previewButtonInner,
      "aria-label": ee.default.Messages.PREVIEW,
      ...l,
      children: (0, a.jsx)(M.default, {
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
    isPremiumUser: o = !1,
    isGiftEasterEggEnabled: M
  } = e, w = s.useRef(null), {
    analyticsLocations: eu
  } = (0, L.default)(T.default.COLLECTIBLES_SHOP_CARD), ec = s.useRef(null), ed = s.useRef(null), ef = (0, x.default)(ec), {
    defaultPaymentSource: eC
  } = (0, N.default)({
    isGift: !1,
    activeSubscription: null
  }), [em, ep] = s.useState(!1), eE = ef || em, eh = (0, C.useStateFromStores)([R.default], () => R.default.getCurrentUser()), [eg] = t.items, {
    avatarDecorationSrc: ex,
    eventHandlers: eb,
    avatarPlaceholderSrc: eT
  } = (0, S.default)({
    user: eh,
    avatarDecorationOverride: (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.AVATAR_DECORATION ? eg : void 0,
    size: en,
    animateOnHover: !eE
  }), {
    backgroundColors: eL,
    buttonColors: ev
  } = (0, K.default)(t.styles), eS = (0, G.getFormattedPriceForCollectiblesProduct)(t, o, !1), eI = (0, G.isPremiumCollectiblesProduct)(t), eN = (0, G.isFreeCollectiblesProduct)(t), [e_, eO, ey] = (0, C.useStateFromStoresArray)([W.default], () => [W.default.getPurchase(t.skuId), W.default.isClaiming === t.skuId, null != W.default.isClaiming && W.default.isClaiming !== t.skuId]), eA = (0, C.useStateFromStores)([j.default], () => (0, p.isThemeDark)(j.default.theme)), ek = (0, G.isProductNew)(t.skuId), {
    hoverVariant: ej
  } = (0, z.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), eR = (0, V.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eP, eB] = s.useState(!1), eM = s.useRef(null), eD = s.useRef(new i.Environment), [eF, eH] = s.useState(!1), [ew, eU] = s.useState(null), eW = null != e_ || eF, eG = (0, y.default)({
    analyticsLocations: eu
  }), eV = s.useRef(null), ez = s.useMemo(() => ({
    sku_id: t.skuId,
    location: $.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eK = () => {
    if ((0, g.popLayer)(), eG(), (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.AVATAR_DECORATION) {
      (0, v.openAvatarDecorationModal)({
        initialSelectedDecoration: eg,
        analyticsLocations: eu
      });
      return
    }(null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, k.openProfileEffectModal)({
      initialSelectedEffectId: eg.id,
      analyticsLocations: eu
    })
  }, eY = e => {
    if (!eP) return a => {
      eV.current = a.currentTarget, (0, q.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: l,
        analyticsLocations: eu,
        analyticsSource: e,
        returnRef: eV
      })
    }
  }, eZ = eY(T.default.COLLECTIBLES_SHOP_CARD), eX = eY(T.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eq = () => (0, a.jsx)("div", {
    className: et.hoverUpsellContainer,
    children: (0, a.jsx)(O.default, {
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
    if (!b.default.useReducedMotion && null !== ew) {
      let {
        current: e
      } = ed;
      u()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [ew]);
  let eQ = () => eW ? (0, a.jsx)(E.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eI ? (0, a.jsx)(E.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(X.default, {
      alwaysWhiteText: !1,
      product: t,
      className: et.priceTag,
      disableTooltipPointerEvents: !0
    }),
    e$ = () => eI ? null : eN ? (0, a.jsx)(eo, {
      onClick: eX
    }) : (0, a.jsx)(Z.default, {
      product: t,
      returnRef: ec,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eJ = () => {
      if (eI && !o && !eN) return eq();
      let e = eI ? {
        submitting: eO,
        submittingStartedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, U.claimPremiumCollectiblesProduct)(t.skuId), (0, Q.default)({
            product: t,
            analyticsLocations: eu
          })
        }
      } : {
        onClick: e4
      };
      return (0, a.jsxs)("div", {
        className: et.buttonsContainer,
        children: [eW ? (0, a.jsx)(ei, {
          disabled: ey,
          onClick: eK,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(ei, {
          disabled: ey,
          className: et.purchaseButton,
          ...e,
          children: eI ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eS
          })
        }), e$()]
      })
    },
    e1 = () => eP && null !== ew ? (0, a.jsx)("div", {
      className: et.avatarContainer,
      children: (0, a.jsx)("img", {
        src: el,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, a.jsxs)(a.Fragment, {
      children: [eI && (0, a.jsx)(E.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: E.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(F.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, a.jsx)(D.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, a.jsx)(A.default, {
          isHovering: eE,
          profileEffectId: eg.id,
          isPurchased: eW,
          removeSetHeight: !0
        })
      }), (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
        className: et.avatarContainer,
        children: (0, a.jsx)(ea, {
          ...eb,
          avatarDecoration: ex,
          src: eR && eE ? null == eh ? void 0 : eh.getAvatarURL(void 0, 152, !0) : eT,
          imageClassName: eR && eE ? et.fadeInAvatarImg : void 0,
          className: n()(et.avatar, {
            [et.avatarPurchased]: eW && !eP
          }),
          size: eP ? er : es,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e0 = () => (u()(null != eC, "default payment source must be set"), (0, a.jsxs)("div", {
      className: n()(et.cardText, {
        [et.cardTextBlur]: (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, a.jsx)("div", {
        className: n()(et.cardBackground, eA ? et.darkCardBackground : et.lightCardBackground, (null == eg ? void 0 : eg.type) === f.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), eP ? (0, a.jsx)(_.default, {
        product: t,
        paymentSource: eC,
        itemPreview: e1(),
        onPurchaseComplete: () => {
          eH(!0), H.default.track($.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...ez,
            load_id: w.current
          })
        },
        onUse: e7,
        onError: e => {
          eU(e), H.default.track($.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...ez,
            load_id: w.current
          })
        },
        onReviewPurchase: e7,
        confettiCanvas: eM.current,
        loadId: w.current,
        baseAnalyticsData: ez
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(E.Text, {
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
      w.current = (0, d.v4)(), eU(null), eB(!0), ep(!0), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), H.default.track($.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...ez,
        load_id: w.current
      })
    },
    e7 = s.useCallback(() => {
      eB(!1), ep(!1), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), H.default.track($.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...ez,
        load_id: w.current
      })
    }, [eB, ez]),
    e2 = eA ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e3 = null != eL ? {
      backgroundColor: eA ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: eE ? e2 : "none"
    } : void 0,
    e8 = null != ev && eP ? {
      boxShadow: "0px 4px 50px 0px " + ev.primary.toHexString()
    } : {},
    e6 = eP && ew ? {
      boxShadow: "0px 4px 50px 0px " + (eA ? I.default.WHITE : I.default.BLACK)
    } : e8;
  return s.useEffect(() => {
    if (eP) {
      u()(null !== ec.current, "cardRef can not be null");
      let e = ec.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let l = t[0],
        a = t[t.length - 1],
        s = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === l ? (e.preventDefault(), null == a || a.focus()) : !e.shiftKey && document.activeElement === a && (e.preventDefault(), null == l || l.focus()))
        },
        r = e => {
          "Escape" === e.key && e7()
        };
      return e.addEventListener("keydown", s), e.addEventListener("keydown", r), () => {
        e.removeEventListener("keydown", s), e.removeEventListener("keydown", r)
      }
    }
  }, [eP, e7]), (0, a.jsxs)(a.Fragment, {
    children: [eP && (0, a.jsx)("div", {
      className: et.backdrop,
      onClick: e7,
      "aria-hidden": !0
    }), (0, a.jsx)(E.FocusRing, {
      children: (0, a.jsx)(E.Shakeable, {
        className: n()({
          [et.shaker]: eP
        }),
        ref: ed,
        children: (0, a.jsxs)("div", {
          className: n()(et.overflowContainer, {
            [et.lightningCheckout]: eP
          }),
          style: e6,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, a.jsx)(i.ConfettiCanvas, {
            ref: eM,
            className: et.confettiCanvas,
            environment: eD.current
          }), (0, a.jsxs)(E.Clickable, {
            innerRef: ec,
            className: n()(et.shopCard, (0, c.match)(ej).with(z.ShopCardHoverAnimationVariant.CONTROL, () => et.shopCardDefaultAnimation).with(z.ShopCardHoverAnimationVariant.TRANSFORMATION, () => et.shopCardTransformationAnimation).otherwise(() => void 0)),
            onBlur: () => ep(!1),
            onClick: eZ,
            style: e3,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eP && (0, a.jsx)(E.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: E.Button.Looks.BLANK,
              size: E.Button.Sizes.NONE,
              onClick: e7,
              children: (0, a.jsx)(B.default, {
                width: 16,
                height: 16,
                color: eA ? I.default.WHITE : I.default.BLACK
              })
            }), eW && !eP && (0, a.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, a.jsx)(P.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), e1(), e0(), !eP && (0, a.jsx)(Y.default, {
              category: l,
              className: et.limitedTimeBadge,
              display: "card"
            }), ek && !eP && (0, a.jsx)(F.TextBadge, {
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