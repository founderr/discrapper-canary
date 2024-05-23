"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("887024"),
  o = l("512722"),
  c = l.n(o),
  u = l("153832"),
  d = l("979554"),
  f = l("399606"),
  C = l("692547"),
  m = l("663002"),
  p = l("481060"),
  g = l("570140"),
  E = l("37234"),
  h = l("727637"),
  b = l("607070"),
  x = l("100527"),
  v = l("906732"),
  S = l("1585"),
  I = l("125988"),
  L = l("377171"),
  T = l("74179"),
  N = l("107091"),
  _ = l("197115"),
  y = l("300284"),
  A = l("876917"),
  j = l("642619"),
  O = l("210887"),
  k = l("594174"),
  R = l("725808"),
  P = l("465670"),
  B = l("794358"),
  M = l("466111"),
  D = l("26290"),
  F = l("626135"),
  H = l("998502"),
  w = l("335131"),
  U = l("1870"),
  W = l("884697"),
  G = l("266386"),
  V = l("624377"),
  K = l("813083"),
  z = l("680942"),
  Y = l("558060"),
  Z = l("237031"),
  X = l("832149"),
  q = l("981631"),
  Q = l("474936"),
  $ = l("689938"),
  J = l("638075"),
  ee = l("42615");
let et = H.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  el = p.AvatarSizes.SIZE_152,
  ea = p.AvatarSizes.SIZE_120,
  es = (0, S.getDecorationSizeForAvatarSize)(el),
  er = e => {
    let {
      children: t,
      onClick: l,
      ...s
    } = e;
    return (0, a.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), l()
      },
      ...s,
      children: t
    })
  },
  en = e => {
    let {
      className: t,
      ...l
    } = e;
    return (0, a.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(J.previewButton, t),
      innerClassName: J.previewButtonInner,
      "aria-label": $.default.Messages.PREVIEW,
      ...l,
      children: (0, a.jsx)(B.default, {
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
    isGiftEasterEggEnabled: B
  } = e, H = s.useRef(null), {
    analyticsLocations: ei
  } = (0, v.default)(x.default.COLLECTIBLES_SHOP_CARD), eo = s.useRef(null), ec = s.useRef(null), eu = (0, h.default)(eo), {
    defaultPaymentSource: ed
  } = (0, T.default)({
    isGift: !1,
    activeSubscription: null
  }), [ef, eC] = s.useState(!1), em = eu || ef, ep = (0, f.useStateFromStores)([k.default], () => k.default.getCurrentUser()), [eg] = t.items, {
    avatarDecorationSrc: eE,
    eventHandlers: eh,
    avatarPlaceholderSrc: eb
  } = (0, I.default)({
    user: ep,
    avatarDecorationOverride: (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eg : void 0,
    size: es,
    animateOnHover: !em
  }), {
    backgroundColors: ex,
    buttonColors: ev
  } = (0, V.default)(t.styles), eS = (0, W.getFormattedPriceForCollectiblesProduct)(t, o, !1), eI = (0, W.isPremiumCollectiblesProduct)(t), eL = (0, W.isFreeCollectiblesProduct)(t), [eT, eN, e_] = (0, f.useStateFromStoresArray)([U.default], () => [U.default.getPurchase(t.skuId), U.default.isClaiming === t.skuId, null != U.default.isClaiming && U.default.isClaiming !== t.skuId]), ey = (0, f.useStateFromStores)([O.default], () => (0, m.isThemeDark)(O.default.theme)), eA = (0, W.isProductNew)(t.skuId), ej = (0, G.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eO, ek] = s.useState(!1), eR = s.useRef(null), eP = s.useRef(new i.Environment), [eB, eM] = s.useState(!1), [eD, eF] = s.useState(null), eH = null != eT || eB, ew = (0, y.default)({
    analyticsLocations: ei
  }), eU = s.useRef(null), eW = s.useMemo(() => ({
    sku_id: t.skuId,
    location: q.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eG = () => {
    if ((0, E.popLayer)(), ew(), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, S.openAvatarDecorationModal)({
        initialSelectedDecoration: eg,
        analyticsLocations: ei
      });
      return
    }(null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, j.openProfileEffectModal)({
      initialSelectedEffectId: eg.id,
      analyticsLocations: ei
    })
  }, eV = e => {
    if (!eO) return a => {
      eU.current = a.currentTarget, (0, Z.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: l,
        analyticsLocations: ei,
        analyticsSource: e,
        returnRef: eU
      })
    }
  }, eK = eV(x.default.COLLECTIBLES_SHOP_CARD), ez = eV(x.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eY = () => (0, a.jsx)("div", {
    className: J.hoverUpsellContainer,
    children: (0, a.jsx)(_.default, {
      fullWidth: !0,
      className: J.__invalid_premiumSubscribeButton,
      disabled: e_,
      onClick: e => e.stopPropagation(),
      buttonText: $.default.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2
    })
  });
  s.useEffect(() => {
    null == r || r(eo)
  }, [r]), s.useEffect(() => {
    if (!b.default.useReducedMotion && null !== eD) {
      let {
        current: e
      } = ec;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eD]);
  let eZ = () => eH ? (0, a.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: J.priceTag,
      children: $.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eI ? (0, a.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: J.priceTag,
      children: $.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, a.jsx)(Y.default, {
      product: t,
      className: J.priceTag
    }),
    eX = () => eI ? null : eL ? (0, a.jsx)(en, {
      onClick: ez
    }) : (0, a.jsx)(z.default, {
      product: t,
      returnRef: eo,
      isGiftEasterEggEnabled: B,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eq = () => {
      if (eI && !o && !eL) return eY();
      let e = eI ? {
        submitting: eN,
        submittingStartedLabel: $.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: $.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, w.claimPremiumCollectiblesProduct)(t.skuId), (0, X.default)({
            product: t,
            analyticsLocations: ei
          })
        }
      } : {
        onClick: eJ
      };
      return (0, a.jsxs)("div", {
        className: J.buttonsContainer,
        children: [eH ? (0, a.jsx)(er, {
          disabled: e_,
          onClick: eG,
          children: $.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, a.jsx)(er, {
          disabled: e_,
          className: J.purchaseButton,
          ...e,
          children: eI ? $.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : $.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eS
          })
        }), eX()]
      })
    },
    eQ = () => eO && null !== eD ? (0, a.jsx)("div", {
      className: J.avatarContainer,
      children: (0, a.jsx)("img", {
        src: ee,
        alt: "error",
        className: J.errorImg
      })
    }) : (0, a.jsxs)(a.Fragment, {
      children: [eI && (0, a.jsx)(p.Tooltip, {
        tooltipContentClassName: J.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: $.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, a.jsx)(D.TextBadge, {
          ...e,
          className: J.premiumWheelBadge,
          text: (0, a.jsx)(M.default, {
            className: J.premiumWheel
          })
        })
      }), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
        className: J.profileEffectShopPreview,
        children: (0, a.jsx)(A.default, {
          isHovering: em,
          profileEffectId: eg.id,
          isPurchased: eH,
          removeSetHeight: !0
        })
      }), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
        className: J.avatarContainer,
        children: (0, a.jsx)(et, {
          ...eh,
          avatarDecoration: eE,
          src: ej && em ? null == ep ? void 0 : ep.getAvatarURL(void 0, 152, !0) : eb,
          imageClassName: ej && em ? J.fadeInAvatarImg : void 0,
          className: n()(J.avatar, {
            [J.avatarPurchased]: eH && !eO
          }),
          size: eO ? ea : el,
          "aria-label": $.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e$ = () => (c()(null != ed, "default payment source must be set"), (0, a.jsxs)("div", {
      className: n()(J.cardText, {
        [J.cardTextBlur]: (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, a.jsx)("div", {
        className: n()(J.cardBackground, ey ? J.darkCardBackground : J.lightCardBackground, (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT ? J.cardLowOpacity : null)
      }), eO ? (0, a.jsx)(N.default, {
        product: t,
        paymentSource: ed,
        itemPreview: eQ(),
        onPurchaseComplete: () => {
          eM(!0), F.default.track(q.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
            ...eW,
            load_id: H.current
          })
        },
        onUse: e1,
        onError: e => {
          eF(e), F.default.track(q.AnalyticEvents.PAYMENT_FLOW_FAILED, {
            ...eW,
            load_id: H.current
          })
        },
        onReviewPurchase: e1,
        confettiCanvas: eR.current,
        loadId: H.current,
        baseAnalyticsData: eW
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: J.productName,
          children: t.name
        }), (0, a.jsxs)("div", {
          className: J.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: J.innerBlur,
            children: eZ()
          }), (0, a.jsx)("div", {
            className: J.innerHover,
            children: eq()
          })]
        })]
      })]
    })),
    eJ = () => {
      H.current = (0, u.v4)(), eF(null), ek(!0), eC(!0), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), F.default.track(q.AnalyticEvents.PAYMENT_FLOW_STARTED, {
        ...eW,
        load_id: H.current
      })
    },
    e1 = s.useCallback(() => {
      ek(!1), eC(!1), g.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), F.default.track(q.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        ...eW,
        load_id: H.current
      })
    }, [ek, eW]),
    e0 = ey ? "0 0 15px 1px ".concat(C.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e4 = null != ex ? {
      backgroundColor: ey ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: em ? e0 : "none"
    } : void 0,
    e7 = null != ev && eO ? {
      boxShadow: "0px 4px 50px 0px " + ev.primary.toHexString()
    } : {},
    e2 = eO && eD ? {
      boxShadow: "0px 4px 50px 0px " + (ey ? L.default.WHITE : L.default.BLACK)
    } : e7;
  return s.useEffect(() => {
    if (eO) {
      c()(null !== eo.current, "cardRef can not be null");
      let e = eo.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let l = t[0],
        a = t[t.length - 1],
        s = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === l ? (e.preventDefault(), null == a || a.focus()) : !e.shiftKey && document.activeElement === a && (e.preventDefault(), null == l || l.focus()))
        },
        r = e => {
          "Escape" === e.key && e1()
        };
      return e.addEventListener("keydown", s), e.addEventListener("keydown", r), () => {
        e.removeEventListener("keydown", s), e.removeEventListener("keydown", r)
      }
    }
  }, [eO, e1]), (0, a.jsxs)(a.Fragment, {
    children: [eO && (0, a.jsx)("div", {
      className: J.backdrop,
      onClick: e1,
      "aria-hidden": !0
    }), (0, a.jsx)(p.FocusRing, {
      children: (0, a.jsx)(p.Shakeable, {
        className: n()({
          [J.shaker]: eO
        }),
        ref: ec,
        children: (0, a.jsxs)("div", {
          className: n()(J.overflowContainer, {
            [J.lightningCheckout]: eO
          }),
          style: e2,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, a.jsx)(i.ConfettiCanvas, {
            ref: eR,
            className: J.confettiCanvas,
            environment: eP.current
          }), (0, a.jsxs)(p.Clickable, {
            innerRef: eo,
            className: n()(J.shopCard, J.shopCardAnimation),
            onBlur: () => eC(!1),
            onClick: eK,
            style: e4,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eO && (0, a.jsx)(p.Button, {
              className: J.closeButton,
              "aria-label": $.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: e1,
              children: (0, a.jsx)(P.default, {
                width: 16,
                height: 16,
                color: ey ? L.default.WHITE : L.default.BLACK
              })
            }), eH && !eO && (0, a.jsx)("div", {
              className: J.checkmarkWrapper,
              children: (0, a.jsx)(R.default, {
                width: 38,
                height: 38,
                className: J.checkmark
              })
            }), eQ(), e$(), !eO && (0, a.jsx)(K.default, {
              category: l,
              className: J.limitedTimeBadge,
              display: "card"
            }), eA && !eO && (0, a.jsx)(D.TextBadge, {
              text: $.default.Messages.NEW,
              disableColor: !0,
              className: J.newBadge
            })]
          })]
        })
      })
    })]
  })
}