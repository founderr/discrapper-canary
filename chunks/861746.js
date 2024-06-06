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
  p = s("481060"),
  m = s("570140"),
  g = s("37234"),
  S = s("727637"),
  h = s("607070"),
  I = s("100527"),
  T = s("906732"),
  x = s("1585"),
  _ = s("125988"),
  N = s("377171"),
  L = s("74179"),
  b = s("107091"),
  v = s("197115"),
  R = s("300284"),
  A = s("876917"),
  P = s("642619"),
  O = s("210887"),
  j = s("725808"),
  y = s("465670"),
  M = s("794358"),
  k = s("466111"),
  B = s("26290"),
  F = s("626135"),
  D = s("74538"),
  U = s("998502"),
  H = s("335131"),
  w = s("1870"),
  G = s("884697"),
  W = s("266386"),
  Y = s("724994"),
  V = s("624377"),
  K = s("390698"),
  z = s("813083"),
  Z = s("680942"),
  X = s("558060"),
  q = s("237031"),
  Q = s("832149"),
  $ = s("981631"),
  J = s("474936"),
  ee = s("689938"),
  et = s("638075"),
  es = s("42615");
let ea = U.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  el = p.AvatarSizes.SIZE_152,
  en = p.AvatarSizes.SIZE_120,
  er = (0, x.getDecorationSizeForAvatarSize)(el),
  ei = e => {
    let {
      children: t,
      onClick: s,
      ...l
    } = e;
    return (0, a.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
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
    return (0, a.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: r()(et.previewButton, t),
      innerClassName: et.previewButtonInner,
      "aria-label": ee.default.Messages.PREVIEW,
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
  } = e, U = l.useRef(null), {
    analyticsLocations: eu
  } = (0, T.default)(I.default.COLLECTIBLES_SHOP_CARD), ec = l.useRef(null), ed = l.useRef(null), ef = (0, S.default)(ec), {
    defaultPaymentSource: eC
  } = (0, L.default)({
    isGift: !1,
    activeSubscription: null
  }), [eE, ep] = l.useState(!1), em = ef || eE, [eg] = t.items, {
    avatarDecorationSrc: eS,
    eventHandlers: eh,
    avatarPlaceholderSrc: eI
  } = (0, _.default)({
    user: s,
    avatarDecorationOverride: (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eg : void 0,
    size: er,
    animateOnHover: !em
  }), {
    backgroundColors: eT,
    buttonColors: ex
  } = (0, V.default)(t.styles), e_ = l.useMemo(() => D.default.canUseCollectibles(s), [s]), eN = (0, G.getFormattedPriceForCollectiblesProduct)(t, e_, !1), eL = l.useMemo(() => (0, G.getProductDiscount)(t, e_), [t, e_]), eb = (0, G.isPremiumCollectiblesProduct)(t), ev = (0, G.isFreeCollectiblesProduct)(t), {
    isPurchased: eR
  } = (0, Y.useProductPurchaseState)(t), [eA, eP] = (0, f.useStateFromStoresArray)([w.default], () => [w.default.isClaiming === t.skuId, null != w.default.isClaiming && w.default.isClaiming !== t.skuId]), eO = (0, f.useStateFromStores)([O.default], () => (0, E.isThemeDark)(O.default.theme)), ej = (0, G.isProductNew)(t.skuId), ey = (0, W.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eM, ek] = l.useState(!1), eB = l.useRef(null), eF = l.useRef(new i.Environment), [eD, eU] = l.useState(!1), [eH, ew] = l.useState(null), eG = eR || eD, eW = (0, R.default)({
    analyticsLocations: eu
  }), eY = l.useRef(null), eV = l.useMemo(() => ({
    sku_id: t.skuId,
    location: $.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eK = () => {
    if ((0, g.popLayer)(), eW(), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, x.openAvatarDecorationModal)({
        initialSelectedDecoration: eg,
        analyticsLocations: eu
      });
      return
    }(null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, P.openProfileEffectModal)({
      initialSelectedEffectId: eg.id,
      analyticsLocations: eu
    })
  }, ez = e => {
    if (!eM) return s => {
      eY.current = s.currentTarget, (0, q.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: n,
        analyticsLocations: eu,
        analyticsSource: e,
        returnRef: eY
      })
    }
  }, eZ = ez(I.default.COLLECTIBLES_SHOP_CARD), eX = ez(I.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eq = () => (0, a.jsx)("div", {
    className: et.hoverUpsellContainer,
    children: (0, a.jsx)(v.default, {
      fullWidth: !0,
      className: et.__invalid_premiumSubscribeButton,
      disabled: eP,
      onClick: e => e.stopPropagation(),
      buttonText: ee.default.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2
    })
  });
  l.useEffect(() => {
    null == o || o(ec)
  }, [o]), l.useEffect(() => {
    if (!h.default.useReducedMotion && null !== eH) {
      let {
        current: e
      } = ed;
      u()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eH]);
  let eQ = () => eG ? (0, a.jsx)(K.AlreadyOwned, {
      className: et.priceTag,
      isPartiallyPurchased: !1
    }) : eb ? (0, a.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(X.default, {
      product: t,
      discount: eL,
      isPremiumUser: e_,
      className: et.priceTag
    }),
    e$ = () => eb ? null : ev ? (0, a.jsx)(eo, {
      onClick: eX
    }) : (0, a.jsx)(Z.default, {
      product: t,
      returnRef: ec,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eJ = () => {
      if (eb && !e_ && !ev) return eq();
      let e = eb ? {
        submitting: eA,
        submittingStartedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, H.claimPremiumCollectiblesProduct)(t.skuId), (0, Q.default)({
            product: t,
            analyticsLocations: eu
          })
        }
      } : {
        onClick: e4
      };
      return (0, a.jsxs)("div", {
        className: et.buttonsContainer,
        children: [eG ? (0, a.jsx)(ei, {
          disabled: eP,
          onClick: eK,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(ei, {
          disabled: eP,
          className: et.purchaseButton,
          ...e,
          children: eb ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eN
          })
        }), e$()]
      })
    },
    e0 = () => eM && null !== eH ? (0, a.jsx)("div", {
      className: et.avatarContainer,
      children: (0, a.jsx)("img", {
        src: es,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, a.jsxs)(a.Fragment, {
      children: [eb && (0, a.jsx)(p.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(B.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, a.jsx)(k.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, a.jsx)(A.default, {
          isHovering: em,
          profileEffectId: eg.id,
          isPurchased: eG,
          removeSetHeight: !0
        })
      }), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
        className: et.avatarContainer,
        children: (0, a.jsx)(ea, {
          ...eh,
          avatarDecoration: eS,
          src: ey && em ? null == s ? void 0 : s.getAvatarURL(void 0, 152, !0) : eI,
          imageClassName: ey && em ? et.fadeInAvatarImg : void 0,
          className: r()(et.avatar, {
            [et.avatarPurchased]: eG && !eM
          }),
          size: eM ? en : el,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e1 = () => (u()(null != eC, "default payment source must be set"), (0, a.jsxs)("div", {
      className: r()(et.cardText, {
        [et.cardTextBlur]: (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, a.jsx)("div", {
        className: r()(et.cardBackground, eO ? et.darkCardBackground : et.lightCardBackground, (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), eM ? (0, a.jsx)(b.default, {
        product: t,
        paymentSource: eC,
        itemPreview: e0(),
        onPurchaseComplete: () => {
          eU(!0), F.default.track($.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eV,
            load_id: U.current
          })
        },
        onUse: e7,
        onError: e => {
          ew(e), F.default.track($.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eV,
            load_id: U.current
          })
        },
        onReviewPurchase: e7,
        confettiCanvas: eB.current,
        loadId: U.current,
        baseAnalyticsData: eV
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(p.Text, {
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
      U.current = (0, c.v4)(), ew(null), ek(!0), ep(!0), m.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), F.default.track($.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eV,
        load_id: U.current
      })
    },
    e7 = l.useCallback(() => {
      ek(!1), ep(!1), m.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), F.default.track($.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eV,
        load_id: U.current
      })
    }, [ek, eV]),
    e2 = eO ? "0 0 15px 1px ".concat(C.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e8 = null != eT ? {
      backgroundColor: eO ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: em ? e2 : "none"
    } : void 0,
    e3 = null != ex && eM ? {
      boxShadow: "0px 4px 50px 0px " + ex.primary.toHexString()
    } : {},
    e9 = eM && eH ? {
      boxShadow: "0px 4px 50px 0px " + (eO ? N.default.WHITE : N.default.BLACK)
    } : e3;
  return l.useEffect(() => {
    if (eM) {
      u()(null !== ec.current, "cardRef can not be null");
      let e = ec.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let s = t[0],
        a = t[t.length - 1],
        l = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === s ? (e.preventDefault(), null == a || a.focus()) : !e.shiftKey && document.activeElement === a && (e.preventDefault(), null == s || s.focus()))
        },
        n = e => {
          "Escape" === e.key && e7()
        };
      return e.addEventListener("keydown", l), e.addEventListener("keydown", n), () => {
        e.removeEventListener("keydown", l), e.removeEventListener("keydown", n)
      }
    }
  }, [eM, e7]), (0, a.jsxs)(a.Fragment, {
    children: [eM && (0, a.jsx)("div", {
      className: et.backdrop,
      onClick: e7,
      "aria-hidden": !0
    }), (0, a.jsx)(p.FocusRing, {
      children: (0, a.jsx)(p.Shakeable, {
        className: r()({
          [et.shaker]: eM
        }),
        ref: ed,
        children: (0, a.jsxs)("div", {
          className: r()(et.overflowContainer, {
            [et.lightningCheckout]: eM
          }),
          style: e9,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, a.jsx)(i.ConfettiCanvas, {
            ref: eB,
            className: et.confettiCanvas,
            environment: eF.current
          }), (0, a.jsxs)(p.Clickable, {
            innerRef: ec,
            className: r()(et.shopCard, et.shopCardAnimation),
            onBlur: () => ep(!1),
            onClick: eZ,
            style: e8,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eM && (0, a.jsx)(p.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: e7,
              children: (0, a.jsx)(y.default, {
                width: 16,
                height: 16,
                color: eO ? N.default.WHITE : N.default.BLACK
              })
            }), eG && !eM && (0, a.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, a.jsx)(j.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), e0(), e1(), !eM && (0, a.jsx)(z.default, {
              category: n,
              className: et.limitedTimeBadge,
              display: "card"
            }), ej && !eM && (0, a.jsx)(B.TextBadge, {
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