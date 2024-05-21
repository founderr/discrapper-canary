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
  I = a("1585"),
  S = a("125988"),
  L = a("377171"),
  T = a("74179"),
  N = a("107091"),
  _ = a("197115"),
  y = a("300284"),
  A = a("876917"),
  j = a("642619"),
  O = a("210887"),
  k = a("594174"),
  R = a("725808"),
  P = a("465670"),
  B = a("794358"),
  M = a("466111"),
  D = a("26290"),
  F = a("626135"),
  H = a("998502"),
  w = a("335131"),
  U = a("1870"),
  W = a("884697"),
  G = a("266386"),
  V = a("624377"),
  K = a("813083"),
  z = a("680942"),
  Y = a("558060"),
  Z = a("237031"),
  X = a("832149"),
  q = a("981631"),
  Q = a("474936"),
  $ = a("689938"),
  J = a("638075"),
  ee = a("42615");
let et = H.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  ea = p.AvatarSizes.SIZE_152,
  el = p.AvatarSizes.SIZE_120,
  es = (0, I.getDecorationSizeForAvatarSize)(ea),
  er = e => {
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
  en = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(J.previewButton, t),
      innerClassName: J.previewButtonInner,
      "aria-label": $.default.Messages.PREVIEW,
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
  } = (0, S.default)({
    user: ep,
    avatarDecorationOverride: (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION ? eg : void 0,
    size: es,
    animateOnHover: !em
  }), {
    backgroundColors: ex,
    buttonColors: ev
  } = (0, V.default)(t.styles), eI = (0, W.getFormattedPriceForCollectiblesProduct)(t, o, !1), eS = (0, W.isPremiumCollectiblesProduct)(t), eL = (0, W.isFreeCollectiblesProduct)(t), [eT, eN, e_] = (0, f.useStateFromStoresArray)([U.default], () => [U.default.getPurchase(t.skuId), U.default.isClaiming === t.skuId, null != U.default.isClaiming && U.default.isClaiming !== t.skuId]), ey = (0, f.useStateFromStores)([O.default], () => (0, m.isThemeDark)(O.default.theme)), eA = (0, W.isProductNew)(t.skuId), ej = (0, G.useCollectiblesHoverPreviewExperiment)("CollectiblesShopTallCard"), [eO, ek] = s.useState(!1), eR = s.useRef(null), eP = s.useRef(new i.Environment), [eB, eM] = s.useState(!1), [eD, eF] = s.useState(null), eH = null != eT || eB, ew = (0, y.default)({
    analyticsLocations: ei
  }), eU = s.useRef(null), eW = s.useMemo(() => ({
    sku_id: t.skuId,
    location: q.AnalyticsLocations.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eG = () => {
    if ((0, E.popLayer)(), ew(), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
      (0, I.openAvatarDecorationModal)({
        initialSelectedDecoration: eg,
        analyticsLocations: ei
      });
      return
    }(null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, j.openProfileEffectModal)({
      initialSelectedEffectId: eg.id,
      analyticsLocations: ei
    })
  }, eV = e => {
    if (!eO) return l => {
      eU.current = l.currentTarget, (0, Z.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: ei,
        analyticsSource: e,
        returnRef: eU
      })
    }
  }, eK = eV(x.default.COLLECTIBLES_SHOP_CARD), ez = eV(x.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eY = () => (0, l.jsx)("div", {
    className: J.hoverUpsellContainer,
    children: (0, l.jsx)(_.default, {
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
  let eZ = () => eH ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: J.priceTag,
      children: $.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eS ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: J.priceTag,
      children: $.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(Y.default, {
      product: t,
      className: J.priceTag
    }),
    eX = () => eS ? null : eL ? (0, l.jsx)(en, {
      onClick: ez
    }) : (0, l.jsx)(z.default, {
      product: t,
      returnRef: eo,
      isGiftEasterEggEnabled: B,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eq = () => {
      if (eS && !o && !eL) return eY();
      let e = eS ? {
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
      return (0, l.jsxs)("div", {
        className: J.buttonsContainer,
        children: [eH ? (0, l.jsx)(er, {
          disabled: e_,
          onClick: eG,
          children: $.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(er, {
          disabled: e_,
          className: J.purchaseButton,
          ...e,
          children: eS ? $.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : $.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eI
          })
        }), eX()]
      })
    },
    eQ = () => eO && null !== eD ? (0, l.jsx)("div", {
      className: J.avatarContainer,
      children: (0, l.jsx)("img", {
        src: ee,
        alt: "error",
        className: J.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eS && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: J.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: $.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(D.TextBadge, {
          ...e,
          className: J.premiumWheelBadge,
          text: (0, l.jsx)(M.default, {
            className: J.premiumWheel
          })
        })
      }), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: J.profileEffectShopPreview,
        children: (0, l.jsx)(A.default, {
          isHovering: em,
          profileEffectId: eg.id,
          isPurchased: eH,
          removeSetHeight: !0
        })
      }), (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: J.avatarContainer,
        children: (0, l.jsx)(et, {
          ...eh,
          avatarDecoration: eE,
          src: ej && em ? null == ep ? void 0 : ep.getAvatarURL(void 0, 152, !0) : eb,
          imageClassName: ej && em ? J.fadeInAvatarImg : void 0,
          className: n()(J.avatar, {
            [J.avatarPurchased]: eH && !eO
          }),
          size: eO ? el : ea,
          "aria-label": $.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e$ = () => (c()(null != ed, "default payment source must be set"), (0, l.jsxs)("div", {
      className: n()(J.cardText, {
        [J.cardTextBlur]: (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: n()(J.cardBackground, ey ? J.darkCardBackground : J.lightCardBackground, (null == eg ? void 0 : eg.type) === d.CollectiblesItemType.PROFILE_EFFECT ? J.cardLowOpacity : null)
      }), eO ? (0, l.jsx)(N.default, {
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
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: J.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: J.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: J.innerBlur,
            children: eZ()
          }), (0, l.jsx)("div", {
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
      let a = t[0],
        l = t[t.length - 1],
        s = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === a ? (e.preventDefault(), null == l || l.focus()) : !e.shiftKey && document.activeElement === l && (e.preventDefault(), null == a || a.focus()))
        },
        r = e => {
          "Escape" === e.key && e1()
        };
      return e.addEventListener("keydown", s), e.addEventListener("keydown", r), () => {
        e.removeEventListener("keydown", s), e.removeEventListener("keydown", r)
      }
    }
  }, [eO, e1]), (0, l.jsxs)(l.Fragment, {
    children: [eO && (0, l.jsx)("div", {
      className: J.backdrop,
      onClick: e1,
      "aria-hidden": !0
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)(p.Shakeable, {
        className: n()({
          [J.shaker]: eO
        }),
        ref: ec,
        children: (0, l.jsxs)("div", {
          className: n()(J.overflowContainer, {
            [J.lightningCheckout]: eO
          }),
          style: e2,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, l.jsx)(i.ConfettiCanvas, {
            ref: eR,
            className: J.confettiCanvas,
            environment: eP.current
          }), (0, l.jsxs)(p.Clickable, {
            innerRef: eo,
            className: n()(J.shopCard, J.shopCardAnimation),
            onBlur: () => eC(!1),
            onClick: eK,
            style: e4,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eO && (0, l.jsx)(p.Button, {
              className: J.closeButton,
              "aria-label": $.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: e1,
              children: (0, l.jsx)(P.default, {
                width: 16,
                height: 16,
                color: ey ? L.default.WHITE : L.default.BLACK
              })
            }), eH && !eO && (0, l.jsx)("div", {
              className: J.checkmarkWrapper,
              children: (0, l.jsx)(R.default, {
                width: 38,
                height: 38,
                className: J.checkmark
              })
            }), eQ(), e$(), !eO && (0, l.jsx)(K.default, {
              category: a,
              className: J.limitedTimeBadge,
              display: "card"
            }), eA && !eO && (0, l.jsx)(D.TextBadge, {
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