"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  r = s.n(n),
  i = s("887024"),
  o = s("512722"),
  u = s.n(o),
  c = s("153832"),
  d = s("979554"),
  f = s("399606"),
  C = s("692547"),
  E = s("663002"),
  m = s("481060"),
  p = s("570140"),
  S = s("37234"),
  g = s("727637"),
  h = s("607070"),
  I = s("100527"),
  _ = s("906732"),
  T = s("1585"),
  x = s("125988"),
  L = s("377171"),
  N = s("74179"),
  b = s("107091"),
  A = s("197115"),
  v = s("300284"),
  R = s("876917"),
  P = s("642619"),
  O = s("210887"),
  y = s("725808"),
  j = s("465670"),
  M = s("794358"),
  k = s("466111"),
  B = s("626135"),
  D = s("74538"),
  F = s("998502"),
  U = s("335131"),
  H = s("1870"),
  w = s("884697"),
  G = s("266386"),
  W = s("724994"),
  V = s("624377"),
  Y = s("390698"),
  K = s("813083"),
  z = s("680942"),
  Z = s("558060"),
  X = s("237031"),
  q = s("832149"),
  Q = s("981631"),
  $ = s("474936"),
  J = s("689938"),
  ee = s("638075"),
  et = s("42615");
let es = F.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  ea = m.AvatarSizes.SIZE_152,
  el = m.AvatarSizes.SIZE_120,
  en = (0, T.getDecorationSizeForAvatarSize)(ea),
  er = e => {
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
  ei = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, a.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: r()(ee.previewButton, t),
      innerClassName: ee.previewButtonInner,
      "aria-label": J.default.Messages.PREVIEW,
      ...s,
      children: (0, a.jsx)(M.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    user: s,
    category: n,
    onMount: o,
    isGiftEasterEggEnabled: M
  } = e, F = l.useRef(null), {
    analyticsLocations: eo
  } = (0, _.default)(I.default.COLLECTIBLES_SHOP_CARD), eu = l.useRef(null), ec = l.useRef(null), ed = (0, g.default)(eu), {
    defaultPaymentSource: ef
  } = (0, N.default)({
    isGift: !1,
    activeSubscription: null
  }), [eC, eE] = l.useState(!1), em = ed || eC, [ep] = t.items, {
    avatarDecorationSrc: eS,
    eventHandlers: eg,
    avatarPlaceholderSrc: eh
  } = (0, x.default)({
    user: s,
    avatarDecorationOverride: (null == ep ? void 0 : ep.type) === d.CollectiblesItemType.AVATAR_DECORATION ? ep : void 0,
    size: en,
    animateOnHover: !em
  }), {
    backgroundColors: eI,
    buttonColors: e_
  } = (0, V.default)(t.styles), eT = l.useMemo(() => D.default.canUseCollectibles(s), [s]), ex = (0, w.getFormattedPriceForCollectiblesProduct)(t, eT, !1), eL = l.useMemo(() => (0, w.getProductDiscount)(t, eT), [t, eT]), eN = (0, w.isPremiumCollectiblesProduct)(t), eb = (0, w.isFreeCollectiblesProduct)(t), {
    isPurchased: eA
  } = (0, W.useProductPurchaseState)(t), [ev, eR] = (0, f.useStateFromStoresArray)([H.default], () => [H.default.isClaiming === t.skuId, null != H.default.isClaiming && H.default.isClaiming !== t.skuId]), eP = (0, f.useStateFromStores)([O.default], () => (0, E.isThemeDark)(O.default.theme)), eO = (0, w.isProductNew)(t.skuId), ey = (0, G.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [ej, eM] = l.useState(!1), ek = l.useRef(null), eB = l.useRef(new i.Environment), [eD, eF] = l.useState(!1), [eU, eH] = l.useState(null), ew = eA || eD, eG = (0, v.default)({
    analyticsLocations: eo
  }), eW = l.useRef(null), eV = l.useMemo(() => ({
    sku_id: t.skuId,
    location: Q.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eY = () => {
    if ((0, S.popLayer)(), eG(), (null == ep ? void 0 : ep.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, T.openAvatarDecorationModal)({
        initialSelectedDecoration: ep,
        analyticsLocations: eo
      });
      return
    }(null == ep ? void 0 : ep.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, P.openProfileEffectModal)({
      initialSelectedEffectId: ep.id,
      analyticsLocations: eo
    })
  }, eK = e => {
    if (!ej) return s => {
      eW.current = s.currentTarget, (0, X.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: n,
        analyticsLocations: eo,
        analyticsSource: e,
        returnRef: eW
      })
    }
  }, ez = eK(I.default.COLLECTIBLES_SHOP_CARD), eZ = eK(I.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eX = () => (0, a.jsx)("div", {
    className: ee.hoverUpsellContainer,
    children: (0, a.jsx)(A.default, {
      fullWidth: !0,
      className: ee.__invalid_premiumSubscribeButton,
      disabled: eR,
      onClick: e => e.stopPropagation(),
      buttonText: J.default.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2
    })
  });
  l.useEffect(() => {
    null == o || o(eu)
  }, [o]), l.useEffect(() => {
    if (!h.default.useReducedMotion && null !== eU) {
      let {
        current: e
      } = ec;
      u()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eU]);
  let eq = () => ew ? (0, a.jsx)(Y.AlreadyOwned, {
      className: ee.priceTag,
      isPartiallyPurchased: !1
    }) : eN ? (0, a.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: ee.priceTag,
      children: J.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(Z.default, {
      product: t,
      discount: eL,
      isPremiumUser: eT,
      className: ee.priceTag
    }),
    eQ = () => eN ? null : eb ? (0, a.jsx)(ei, {
      onClick: eZ
    }) : (0, a.jsx)(z.default, {
      product: t,
      returnRef: eu,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e$ = () => {
      if (eN && !eT && !eb) return eX();
      let e = eN ? {
        submitting: ev,
        submittingStartedLabel: J.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: J.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, U.claimPremiumCollectiblesProduct)(t.skuId), (0, q.default)({
            product: t,
            analyticsLocations: eo
          })
        }
      } : {
        onClick: e1
      };
      return (0, a.jsxs)("div", {
        className: ee.buttonsContainer,
        children: [ew ? (0, a.jsx)(er, {
          disabled: eR,
          onClick: eY,
          children: J.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(er, {
          disabled: eR,
          className: ee.purchaseButton,
          ...e,
          children: eN ? J.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : J.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ex
          })
        }), eQ()]
      })
    },
    eJ = () => ej && null !== eU ? (0, a.jsx)("div", {
      className: ee.avatarContainer,
      children: (0, a.jsx)("img", {
        src: et,
        alt: "error",
        className: ee.errorImg
      })
    }) : (0, a.jsxs)(a.Fragment, {
      children: [eN && (0, a.jsx)(m.Tooltip, {
        tooltipContentClassName: ee.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: J.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(m.TextBadge, {
          ...e,
          className: ee.premiumWheelBadge,
          text: (0, a.jsx)(k.default, {
            className: ee.premiumWheel
          })
        })
      }), (null == ep ? void 0 : ep.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
        className: ee.profileEffectShopPreview,
        children: (0, a.jsx)(R.default, {
          isHovering: em,
          profileEffectId: ep.id,
          isPurchased: ew,
          removeSetHeight: !0
        })
      }), (null == ep ? void 0 : ep.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
        className: ee.avatarContainer,
        children: (0, a.jsx)(es, {
          ...eg,
          avatarDecoration: eS,
          src: ey && em ? null == s ? void 0 : s.getAvatarURL(void 0, 152, !0) : eh,
          imageClassName: ey && em ? ee.fadeInAvatarImg : void 0,
          className: r()(ee.avatar, {
            [ee.avatarPurchased]: ew && !ej
          }),
          size: ej ? el : ea,
          "aria-label": J.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e0 = () => (u()(null != ef, "default payment source must be set"), (0, a.jsxs)("div", {
      className: r()(ee.cardText, {
        [ee.cardTextBlur]: (null == ep ? void 0 : ep.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, a.jsx)("div", {
        className: r()(ee.cardBackground, eP ? ee.darkCardBackground : ee.lightCardBackground, (null == ep ? void 0 : ep.type) === d.CollectiblesItemType.PROFILE_EFFECT ? ee.cardLowOpacity : null)
      }), ej ? (0, a.jsx)(b.default, {
        product: t,
        paymentSource: ef,
        itemPreview: eJ(),
        onPurchaseComplete: () => {
          eF(!0), B.default.track(Q.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eV,
            load_id: F.current
          })
        },
        onUse: e4,
        onError: e => {
          eH(e), B.default.track(Q.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eV,
            load_id: F.current
          })
        },
        onReviewPurchase: e4,
        confettiCanvas: ek.current,
        loadId: F.current,
        baseAnalyticsData: eV
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: ee.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: ee.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: ee.innerBlur,
            children: eq()
          }), (0, a.jsx)("div", {
            className: ee.innerHover,
            children: e$()
          })]
        })]
      })]
    })),
    e1 = () => {
      F.current = (0, c.v4)(), eH(null), eM(!0), eE(!0), p.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), B.default.track(Q.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eV,
        load_id: F.current
      })
    },
    e4 = l.useCallback(() => {
      eM(!1), eE(!1), p.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), B.default.track(Q.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eV,
        load_id: F.current
      })
    }, [eM, eV]),
    e7 = eP ? "0 0 15px 1px ".concat(C.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e2 = null != eI ? {
      backgroundColor: eP ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: em ? e7 : "none"
    } : void 0,
    e3 = null != e_ && ej ? {
      boxShadow: "0px 4px 50px 0px " + e_.primary.toHexString()
    } : {},
    e8 = ej && eU ? {
      boxShadow: "0px 4px 50px 0px " + (eP ? L.default.WHITE : L.default.BLACK)
    } : e3;
  return l.useEffect(() => {
    if (ej) {
      u()(null !== eu.current, "cardRef can not be null");
      let e = eu.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let s = t[0],
        a = t[t.length - 1],
        l = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === s ? (e.preventDefault(), null == a || a.focus()) : !e.shiftKey && document.activeElement === a && (e.preventDefault(), null == s || s.focus()))
        },
        n = e => {
          "Escape" === e.key && e4()
        };
      return e.addEventListener("keydown", l), e.addEventListener("keydown", n), () => {
        e.removeEventListener("keydown", l), e.removeEventListener("keydown", n)
      }
    }
  }, [ej, e4]), (0, a.jsxs)(a.Fragment, {
    children: [ej && (0, a.jsx)("div", {
      className: ee.backdrop,
      onClick: e4,
      "aria-hidden": !0
    }), (0, a.jsx)(m.FocusRing, {
      children: (0, a.jsx)(m.Shakeable, {
        className: r()({
          [ee.shaker]: ej
        }),
        ref: ec,
        children: (0, a.jsxs)("div", {
          className: r()(ee.overflowContainer, {
            [ee.lightningCheckout]: ej
          }),
          style: e8,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, a.jsx)(i.ConfettiCanvas, {
            ref: ek,
            className: ee.confettiCanvas,
            environment: eB.current
          }), (0, a.jsxs)(m.Clickable, {
            innerRef: eu,
            className: r()(ee.shopCard, ee.shopCardAnimation),
            onBlur: () => eE(!1),
            onClick: ez,
            style: e2,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [ej && (0, a.jsx)(m.Button, {
              className: ee.closeButton,
              "aria-label": J.default.Messages.CLOSE,
              look: m.Button.Looks.BLANK,
              size: m.Button.Sizes.NONE,
              onClick: e4,
              children: (0, a.jsx)(j.default, {
                width: 16,
                height: 16,
                color: eP ? L.default.WHITE : L.default.BLACK
              })
            }), ew && !ej && (0, a.jsx)("div", {
              className: ee.checkmarkWrapper,
              children: (0, a.jsx)(y.default, {
                width: 38,
                height: 38,
                className: ee.checkmark
              })
            }), eJ(), e0(), !ej && (0, a.jsx)(K.default, {
              category: n,
              className: ee.limitedTimeBadge,
              display: "card"
            }), eO && !ej && (0, a.jsx)(m.TextBadge, {
              text: J.default.Messages.NEW,
              disableColor: !0,
              className: ee.newBadge
            })]
          })]
        })
      })
    })]
  })
}