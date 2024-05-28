"use strict";
a.r(t), a("47120");
var s = a("735250"),
  r = a("470079"),
  n = a("120356"),
  l = a.n(n),
  o = a("887024"),
  i = a("512722"),
  c = a.n(i),
  u = a("153832"),
  d = a("979554"),
  f = a("399606"),
  C = a("692547"),
  p = a("663002"),
  m = a("481060"),
  g = a("570140"),
  E = a("37234"),
  b = a("727637"),
  h = a("607070"),
  S = a("100527"),
  T = a("906732"),
  v = a("1585"),
  y = a("125988"),
  x = a("377171"),
  _ = a("74179"),
  I = a("107091"),
  L = a("197115"),
  A = a("300284"),
  N = a("876917"),
  P = a("642619"),
  R = a("210887"),
  O = a("594174"),
  k = a("725808"),
  M = a("465670"),
  j = a("794358"),
  B = a("466111"),
  D = a("26290"),
  F = a("626135"),
  w = a("998502"),
  H = a("335131"),
  U = a("1870"),
  G = a("884697"),
  W = a("266386"),
  Y = a("724994"),
  V = a("624377"),
  K = a("390698"),
  z = a("813083"),
  Z = a("680942"),
  X = a("558060"),
  q = a("237031"),
  Q = a("832149"),
  J = a("981631"),
  $ = a("474936"),
  ee = a("689938"),
  et = a("638075"),
  ea = a("42615");
let es = w.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  er = m.AvatarSizes.SIZE_152,
  en = m.AvatarSizes.SIZE_120,
  el = (0, v.getDecorationSizeForAvatarSize)(er),
  eo = e => {
    let {
      children: t,
      onClick: a,
      ...r
    } = e;
    return (0, s.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...r,
      children: t
    })
  },
  ei = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, s.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: l()(et.previewButton, t),
      innerClassName: et.previewButtonInner,
      "aria-label": ee.default.Messages.PREVIEW,
      ...a,
      children: (0, s.jsx)(j.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    category: a,
    onMount: n,
    isPremiumUser: i = !1,
    isGiftEasterEggEnabled: j
  } = e, w = r.useRef(null), {
    analyticsLocations: ec
  } = (0, T.default)(S.default.COLLECTIBLES_SHOP_CARD), eu = r.useRef(null), ed = r.useRef(null), ef = (0, b.default)(eu), {
    defaultPaymentSource: eC
  } = (0, _.default)({
    isGift: !1,
    activeSubscription: null
  }), [ep, em] = r.useState(!1), eg = ef || ep, eE = (0, f.useStateFromStores)([O.default], () => O.default.getCurrentUser()), [eb] = t.items, {
    avatarDecorationSrc: eh,
    eventHandlers: eS,
    avatarPlaceholderSrc: eT
  } = (0, y.default)({
    user: eE,
    avatarDecorationOverride: (null == eb ? void 0 : eb.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eb : void 0,
    size: el,
    animateOnHover: !eg
  }), {
    backgroundColors: ev,
    buttonColors: ey
  } = (0, V.default)(t.styles), ex = (0, G.getFormattedPriceForCollectiblesProduct)(t, i, !1), e_ = (0, G.isPremiumCollectiblesProduct)(t), eI = (0, G.isFreeCollectiblesProduct)(t), {
    isPurchased: eL
  } = (0, Y.useProductPurchaseState)(t), [eA, eN] = (0, f.useStateFromStoresArray)([U.default], () => [U.default.isClaiming === t.skuId, null != U.default.isClaiming && U.default.isClaiming !== t.skuId]), eP = (0, f.useStateFromStores)([R.default], () => (0, p.isThemeDark)(R.default.theme)), eR = (0, G.isProductNew)(t.skuId), eO = (0, W.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [ek, eM] = r.useState(!1), ej = r.useRef(null), eB = r.useRef(new o.Environment), [eD, eF] = r.useState(!1), [ew, eH] = r.useState(null), eU = eL || eD, eG = (0, A.default)({
    analyticsLocations: ec
  }), eW = r.useRef(null), eY = r.useMemo(() => ({
    sku_id: t.skuId,
    location: J.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eV = () => {
    if ((0, E.popLayer)(), eG(), (null == eb ? void 0 : eb.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, v.openAvatarDecorationModal)({
        initialSelectedDecoration: eb,
        analyticsLocations: ec
      });
      return
    }(null == eb ? void 0 : eb.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, P.openProfileEffectModal)({
      initialSelectedEffectId: eb.id,
      analyticsLocations: ec
    })
  }, eK = e => {
    if (!ek) return s => {
      eW.current = s.currentTarget, (0, q.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: ec,
        analyticsSource: e,
        returnRef: eW
      })
    }
  }, ez = eK(S.default.COLLECTIBLES_SHOP_CARD), eZ = eK(S.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eX = () => (0, s.jsx)("div", {
    className: et.hoverUpsellContainer,
    children: (0, s.jsx)(L.default, {
      fullWidth: !0,
      className: et.__invalid_premiumSubscribeButton,
      disabled: eN,
      onClick: e => e.stopPropagation(),
      buttonText: ee.default.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2
    })
  });
  r.useEffect(() => {
    null == n || n(eu)
  }, [n]), r.useEffect(() => {
    if (!h.default.useReducedMotion && null !== ew) {
      let {
        current: e
      } = ed;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [ew]);
  let eq = () => eU ? (0, s.jsx)(K.AlreadyOwned, {
      className: et.priceTag,
      isPartiallyPurchased: !1
    }) : e_ ? (0, s.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: et.priceTag,
      children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, s.jsx)(X.default, {
      product: t,
      className: et.priceTag
    }),
    eQ = () => e_ ? null : eI ? (0, s.jsx)(ei, {
      onClick: eZ
    }) : (0, s.jsx)(Z.default, {
      product: t,
      returnRef: eu,
      isGiftEasterEggEnabled: j,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eJ = () => {
      if (e_ && !i && !eI) return eX();
      let e = e_ ? {
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
        onClick: e0
      };
      return (0, s.jsxs)("div", {
        className: et.buttonsContainer,
        children: [eU ? (0, s.jsx)(eo, {
          disabled: eN,
          onClick: eV,
          children: ee.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, s.jsx)(eo, {
          disabled: eN,
          className: et.purchaseButton,
          ...e,
          children: e_ ? ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : ee.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ex
          })
        }), eQ()]
      })
    },
    e$ = () => ek && null !== ew ? (0, s.jsx)("div", {
      className: et.avatarContainer,
      children: (0, s.jsx)("img", {
        src: ea,
        alt: "error",
        className: et.errorImg
      })
    }) : (0, s.jsxs)(s.Fragment, {
      children: [e_ && (0, s.jsx)(m.Tooltip, {
        tooltipContentClassName: et.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, s.jsx)(D.TextBadge, {
          ...e,
          className: et.premiumWheelBadge,
          text: (0, s.jsx)(B.default, {
            className: et.premiumWheel
          })
        })
      }), (null == eb ? void 0 : eb.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)("div", {
        className: et.profileEffectShopPreview,
        children: (0, s.jsx)(N.default, {
          isHovering: eg,
          profileEffectId: eb.id,
          isPurchased: eU,
          removeSetHeight: !0
        })
      }), (null == eb ? void 0 : eb.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)("div", {
        className: et.avatarContainer,
        children: (0, s.jsx)(es, {
          ...eS,
          avatarDecoration: eh,
          src: eO && eg ? null == eE ? void 0 : eE.getAvatarURL(void 0, 152, !0) : eT,
          imageClassName: eO && eg ? et.fadeInAvatarImg : void 0,
          className: l()(et.avatar, {
            [et.avatarPurchased]: eU && !ek
          }),
          size: ek ? en : er,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e1 = () => (c()(null != eC, "default payment source must be set"), (0, s.jsxs)("div", {
      className: l()(et.cardText, {
        [et.cardTextBlur]: (null == eb ? void 0 : eb.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, s.jsx)("div", {
        className: l()(et.cardBackground, eP ? et.darkCardBackground : et.lightCardBackground, (null == eb ? void 0 : eb.type) === d.CollectiblesItemType.PROFILE_EFFECT ? et.cardLowOpacity : null)
      }), ek ? (0, s.jsx)(I.default, {
        product: t,
        paymentSource: eC,
        itemPreview: e$(),
        onPurchaseComplete: () => {
          eF(!0), F.default.track(J.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eY,
            load_id: w.current
          })
        },
        onUse: e4,
        onError: e => {
          eH(e), F.default.track(J.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eY,
            load_id: w.current
          })
        },
        onReviewPurchase: e4,
        confettiCanvas: ej.current,
        loadId: w.current,
        baseAnalyticsData: eY
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: et.productName,
          children: t.name
        }), (0, s.jsxs)("div", {
          className: et.detailsWrapper,
          children: [(0, s.jsx)("div", {
            className: et.innerBlur,
            children: eq()
          }), (0, s.jsx)("div", {
            className: et.innerHover,
            children: eJ()
          })]
        })]
      })]
    })),
    e0 = () => {
      w.current = (0, u.v4)(), eH(null), eM(!0), em(!0), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), F.default.track(J.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eY,
        load_id: w.current
      })
    },
    e4 = r.useCallback(() => {
      eM(!1), em(!1), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), F.default.track(J.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eY,
        load_id: w.current
      })
    }, [eM, eY]),
    e7 = eP ? "0 0 15px 1px ".concat(C.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e2 = null != ev ? {
      backgroundColor: eP ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: eg ? e7 : "none"
    } : void 0,
    e3 = null != ey && ek ? {
      boxShadow: "0px 4px 50px 0px " + ey.primary.toHexString()
    } : {},
    e8 = ek && ew ? {
      boxShadow: "0px 4px 50px 0px " + (eP ? x.default.WHITE : x.default.BLACK)
    } : e3;
  return r.useEffect(() => {
    if (ek) {
      c()(null !== eu.current, "cardRef can not be null");
      let e = eu.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let a = t[0],
        s = t[t.length - 1],
        r = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === a ? (e.preventDefault(), null == s || s.focus()) : !e.shiftKey && document.activeElement === s && (e.preventDefault(), null == a || a.focus()))
        },
        n = e => {
          "Escape" === e.key && e4()
        };
      return e.addEventListener("keydown", r), e.addEventListener("keydown", n), () => {
        e.removeEventListener("keydown", r), e.removeEventListener("keydown", n)
      }
    }
  }, [ek, e4]), (0, s.jsxs)(s.Fragment, {
    children: [ek && (0, s.jsx)("div", {
      className: et.backdrop,
      onClick: e4,
      "aria-hidden": !0
    }), (0, s.jsx)(m.FocusRing, {
      children: (0, s.jsx)(m.Shakeable, {
        className: l()({
          [et.shaker]: ek
        }),
        ref: ed,
        children: (0, s.jsxs)("div", {
          className: l()(et.overflowContainer, {
            [et.lightningCheckout]: ek
          }),
          style: e8,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, s.jsx)(o.ConfettiCanvas, {
            ref: ej,
            className: et.confettiCanvas,
            environment: eB.current
          }), (0, s.jsxs)(m.Clickable, {
            innerRef: eu,
            className: l()(et.shopCard, et.shopCardAnimation),
            onBlur: () => em(!1),
            onClick: ez,
            style: e2,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [ek && (0, s.jsx)(m.Button, {
              className: et.closeButton,
              "aria-label": ee.default.Messages.CLOSE,
              look: m.Button.Looks.BLANK,
              size: m.Button.Sizes.NONE,
              onClick: e4,
              children: (0, s.jsx)(M.default, {
                width: 16,
                height: 16,
                color: eP ? x.default.WHITE : x.default.BLACK
              })
            }), eU && !ek && (0, s.jsx)("div", {
              className: et.checkmarkWrapper,
              children: (0, s.jsx)(k.default, {
                width: 38,
                height: 38,
                className: et.checkmark
              })
            }), e$(), e1(), !ek && (0, s.jsx)(z.default, {
              category: a,
              className: et.limitedTimeBadge,
              display: "card"
            }), eR && !ek && (0, s.jsx)(D.TextBadge, {
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