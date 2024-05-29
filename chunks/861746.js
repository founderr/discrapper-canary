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
  m = a("663002"),
  p = a("481060"),
  g = a("570140"),
  E = a("37234"),
  h = a("727637"),
  b = a("607070"),
  x = a("100527"),
  v = a("906732"),
  S = a("1585"),
  I = a("125988"),
  L = a("377171"),
  T = a("74179"),
  N = a("107091"),
  _ = a("197115"),
  y = a("300284"),
  A = a("876917"),
  j = a("642619"),
  O = a("210887"),
  P = a("594174"),
  R = a("725808"),
  k = a("465670"),
  B = a("794358"),
  M = a("466111"),
  D = a("26290"),
  F = a("626135"),
  H = a("998502"),
  w = a("335131"),
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
let el = H.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  es = p.AvatarSizes.SIZE_152,
  er = p.AvatarSizes.SIZE_120,
  en = (0, S.getDecorationSizeForAvatarSize)(es),
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
  } = e, H = s.useRef(null), {
    analyticsLocations: ec
  } = (0, v.default)(x.default.COLLECTIBLES_SHOP_CARD), eu = s.useRef(null), ed = s.useRef(null), ef = (0, h.default)(eu), {
    defaultPaymentSource: eC
  } = (0, T.default)({
    isGift: !1,
    activeSubscription: null
  }), [em, ep] = s.useState(!1), eg = ef || em, eE = (0, f.useStateFromStores)([P.default], () => P.default.getCurrentUser()), [eh] = t.items, {
    avatarDecorationSrc: eb,
    eventHandlers: ex,
    avatarPlaceholderSrc: ev
  } = (0, I.default)({
    user: eE,
    avatarDecorationOverride: (null == eh ? void 0 : eh.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eh : void 0,
    size: en,
    animateOnHover: !eg
  }), {
    backgroundColors: eS,
    buttonColors: eI
  } = (0, K.default)(t.styles), eL = (0, W.getFormattedPriceForCollectiblesProduct)(t, o, !1), eT = (0, W.isPremiumCollectiblesProduct)(t), eN = (0, W.isFreeCollectiblesProduct)(t), {
    isPurchased: e_
  } = (0, V.useProductPurchaseState)(t), [ey, eA] = (0, f.useStateFromStoresArray)([U.default], () => [U.default.isClaiming === t.skuId, null != U.default.isClaiming && U.default.isClaiming !== t.skuId]), ej = (0, f.useStateFromStores)([O.default], () => (0, m.isThemeDark)(O.default.theme)), eO = (0, W.isProductNew)(t.skuId), eP = (0, G.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eR, ek] = s.useState(!1), eB = s.useRef(null), eM = s.useRef(new i.Environment), [eD, eF] = s.useState(!1), [eH, ew] = s.useState(null), eU = e_ || eD, eW = (0, y.default)({
    analyticsLocations: ec
  }), eG = s.useRef(null), eV = s.useMemo(() => ({
    sku_id: t.skuId,
    location: $.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eK = () => {
    if ((0, E.popLayer)(), eW(), (null == eh ? void 0 : eh.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, S.openAvatarDecorationModal)({
        initialSelectedDecoration: eh,
        analyticsLocations: ec
      });
      return
    }(null == eh ? void 0 : eh.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, j.openProfileEffectModal)({
      initialSelectedEffectId: eh.id,
      analyticsLocations: ec
    })
  }, ez = e => {
    if (!eR) return l => {
      eG.current = l.currentTarget, (0, q.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: ec,
        analyticsSource: e,
        returnRef: eG
      })
    }
  }, eY = ez(x.default.COLLECTIBLES_SHOP_CARD), eZ = ez(x.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eX = () => (0, l.jsx)("div", {
    className: et.hoverUpsellContainer,
    children: (0, l.jsx)(_.default, {
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
    if (!b.default.useReducedMotion && null !== eH) {
      let {
        current: e
      } = ed;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eH]);
  let eq = () => eU ? (0, l.jsx)(z.AlreadyOwned, {
      className: et.priceTag,
      isPartiallyPurchased: !1
    }) : eT ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(X.default, {
      product: t,
      className: et.priceTag
    }),
    eQ = () => eT ? null : eN ? (0, l.jsx)(eo, {
      onClick: eZ
    }) : (0, l.jsx)(Z.default, {
      product: t,
      returnRef: eu,
      isGiftEasterEggEnabled: B,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e$ = () => {
      if (eT && !o && !eN) return eX();
      let e = eT ? {
        submitting: ey,
        submittingStartedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, w.claimPremiumCollectiblesProduct)(t.skuId), (0, Q.default)({
            product: t,
            analyticsLocations: ec
          })
        }
      } : {
        onClick: e0
      };
      return (0, l.jsxs)("div", {
        className: et.buttonsContainer,
        children: [eU ? (0, l.jsx)(ei, {
          disabled: eA,
          onClick: eK,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(ei, {
          disabled: eA,
          className: et.purchaseButton,
          ...e,
          children: eT ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eL
          })
        }), eQ()]
      })
    },
    eJ = () => eR && null !== eH ? (0, l.jsx)("div", {
      className: et.avatarContainer,
      children: (0, l.jsx)("img", {
        src: ea,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eT && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(D.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, l.jsx)(M.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eh ? void 0 : eh.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, l.jsx)(A.default, {
          isHovering: eg,
          profileEffectId: eh.id,
          isPurchased: eU,
          removeSetHeight: !0
        })
      }), (null == eh ? void 0 : eh.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: et.avatarContainer,
        children: (0, l.jsx)(el, {
          ...ex,
          avatarDecoration: eb,
          src: eP && eg ? null == eE ? void 0 : eE.getAvatarURL(void 0, 152, !0) : ev,
          imageClassName: eP && eg ? et.fadeInAvatarImg : void 0,
          className: n()(et.avatar, {
            [et.avatarPurchased]: eU && !eR
          }),
          size: eR ? er : es,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e1 = () => (c()(null != eC, "default payment source must be set"), (0, l.jsxs)("div", {
      className: n()(et.cardText, {
        [et.cardTextBlur]: (null == eh ? void 0 : eh.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: n()(et.cardBackground, ej ? et.darkCardBackground : et.lightCardBackground, (null == eh ? void 0 : eh.type) === d.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), eR ? (0, l.jsx)(N.default, {
        product: t,
        paymentSource: eC,
        itemPreview: eJ(),
        onPurchaseComplete: () => {
          eF(!0), F.default.track($.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eV,
            load_id: H.current
          })
        },
        onUse: e4,
        onError: e => {
          ew(e), F.default.track($.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eV,
            load_id: H.current
          })
        },
        onReviewPurchase: e4,
        confettiCanvas: eB.current,
        loadId: H.current,
        baseAnalyticsData: eV
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
            children: e$()
          })]
        })]
      })]
    })),
    e0 = () => {
      H.current = (0, u.v4)(), ew(null), ek(!0), ep(!0), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), F.default.track($.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eV,
        load_id: H.current
      })
    },
    e4 = s.useCallback(() => {
      ek(!1), ep(!1), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), F.default.track($.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eV,
        load_id: H.current
      })
    }, [ek, eV]),
    e7 = ej ? "0 0 15px 1px ".concat(C.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e2 = null != eS ? {
      backgroundColor: ej ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: eg ? e7 : "none"
    } : void 0,
    e3 = null != eI && eR ? {
      boxShadow: "0px 4px 50px 0px " + eI.primary.toHexString()
    } : {},
    e8 = eR && eH ? {
      boxShadow: "0px 4px 50px 0px " + (ej ? L.default.WHITE : L.default.BLACK)
    } : e3;
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
          "Escape" === e.key && e4()
        };
      return e.addEventListener("keydown", s), e.addEventListener("keydown", r), () => {
        e.removeEventListener("keydown", s), e.removeEventListener("keydown", r)
      }
    }
  }, [eR, e4]), (0, l.jsxs)(l.Fragment, {
    children: [eR && (0, l.jsx)("div", {
      className: et.backdrop,
      onClick: e4,
      "aria-hidden": !0
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)(p.Shakeable, {
        className: n()({
          [et.shaker]: eR
        }),
        ref: ed,
        children: (0, l.jsxs)("div", {
          className: n()(et.overflowContainer, {
            [et.lightningCheckout]: eR
          }),
          style: e8,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, l.jsx)(i.ConfettiCanvas, {
            ref: eB,
            className: et.confettiCanvas,
            environment: eM.current
          }), (0, l.jsxs)(p.Clickable, {
            innerRef: eu,
            className: n()(et.shopCard, et.shopCardAnimation),
            onBlur: () => ep(!1),
            onClick: eY,
            style: e2,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eR && (0, l.jsx)(p.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: e4,
              children: (0, l.jsx)(k.default, {
                width: 16,
                height: 16,
                color: ej ? L.default.WHITE : L.default.BLACK
              })
            }), eU && !eR && (0, l.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, l.jsx)(R.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), eJ(), e1(), !eR && (0, l.jsx)(Y.default, {
              category: a,
              className: et.limitedTimeBadge,
              display: "card"
            }), eO && !eR && (0, l.jsx)(D.TextBadge, {
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