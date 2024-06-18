"use strict";
t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  l = t.n(r),
  i = t(887024),
  o = t(512722),
  c = t.n(o),
  u = t(772848),
  d = t(979554),
  C = t(399606),
  E = t(692547),
  f = t(663002),
  m = t(481060),
  p = t(570140),
  g = t(37234),
  h = t(727637),
  I = t(607070),
  _ = t(100527),
  x = t(906732),
  T = t(1585),
  N = t(125988),
  S = t(377171),
  L = t(74179),
  b = t(107091),
  v = t(197115),
  O = t(300284),
  A = t(876917),
  Z = t(642619),
  R = t(210887),
  j = t(626135),
  P = t(74538),
  M = t(998502),
  k = t(335131),
  B = t(1870),
  y = t(884697),
  F = t(266386),
  D = t(724994),
  U = t(624377),
  H = t(390698),
  w = t(813083),
  G = t(680942),
  W = t(558060),
  V = t(237031),
  Y = t(832149),
  z = t(981631),
  K = t(474936),
  X = t(689938),
  q = t(638075),
  Q = t(42615);
let $ = M.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  J = m.AvatarSizes.SIZE_152,
  ee = m.AvatarSizes.SIZE_120,
  es = (0, T.y9)(J),
  et = e => {
    let {
      children: s,
      onClick: t,
      ...a
    } = e;
    return (0, n.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), t()
      },
      ...a,
      children: s
    })
  },
  en = e => {
    let {
      className: s,
      ...t
    } = e;
    return (0, n.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: l()(q.previewButton, s),
      innerClassName: q.previewButtonInner,
      "aria-label": X.Z.Messages.PREVIEW,
      ...t,
      children: (0, n.jsx)(m.EyeIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  };
s.Z = function(e) {
  let {
    product: s,
    user: t,
    category: r,
    onMount: o,
    isGiftEasterEggEnabled: M
  } = e, ea = a.useRef(null), {
    analyticsLocations: er
  } = (0, x.ZP)(_.Z.COLLECTIBLES_SHOP_CARD), el = a.useRef(null), ei = a.useRef(null), eo = (0, h.Z)(el), {
    defaultPaymentSource: ec
  } = (0, L.Z)({
    isGift: !1,
    activeSubscription: null
  }), [eu, ed] = a.useState(!1), eC = eo || eu, [eE] = s.items, {
    avatarDecorationSrc: ef,
    eventHandlers: em,
    avatarPlaceholderSrc: ep
  } = (0, N.Z)({
    user: t,
    avatarDecorationOverride: (null == eE ? void 0 : eE.type) === d.Z.AVATAR_DECORATION ? eE : void 0,
    size: es,
    animateOnHover: !eC
  }), {
    backgroundColors: eg,
    buttonColors: eh
  } = (0, U.Z)(s.styles), eI = a.useMemo(() => P.ZP.canUseCollectibles(t), [t]), e_ = (0, y.XM)(s, eI, !1), ex = a.useMemo(() => (0, y.BH)(s, eI), [s, eI]), eT = (0, y.G1)(s), eN = (0, y.rN)(s), {
    isPurchased: eS
  } = (0, D.L)(s), [eL, eb] = (0, C.Wu)([B.Z], () => [B.Z.isClaiming === s.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== s.skuId]), ev = (0, C.e7)([R.Z], () => (0, f.w)(R.Z.theme)), eO = (0, y.Yq)(s.skuId), eA = (0, F.c)("CollectiblesShopTallCard"), [eZ, eR] = a.useState(!1), ej = a.useRef(null), eP = a.useRef(new i.qA), [eM, ek] = a.useState(!1), [eB, ey] = a.useState(null), eF = eS || eM, eD = (0, O.Z)({
    analyticsLocations: er
  }), eU = a.useRef(null), eH = a.useMemo(() => ({
    sku_id: s.skuId,
    location: z.Sbl.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [s]), ew = () => {
    if ((0, g.xf)(), eD(), (null == eE ? void 0 : eE.type) === d.Z.AVATAR_DECORATION) {
      (0, T.ps)({
        initialSelectedDecoration: eE,
        analyticsLocations: er
      });
      return
    }(null == eE ? void 0 : eE.type) === d.Z.PROFILE_EFFECT && (0, Z.H)({
      initialSelectedEffectId: eE.id,
      analyticsLocations: er
    })
  }, eG = e => {
    if (!eZ) return t => {
      eU.current = t.currentTarget, (0, V.T)({
        product: s,
        category: r,
        analyticsLocations: er,
        analyticsSource: e,
        returnRef: eU
      })
    }
  }, eW = eG(_.Z.COLLECTIBLES_SHOP_CARD), eV = eG(_.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eY = () => (0, n.jsx)("div", {
    className: q.hoverUpsellContainer,
    children: (0, n.jsx)(v.Z, {
      fullWidth: !0,
      className: q.__invalid_premiumSubscribeButton,
      disabled: eb,
      onClick: e => e.stopPropagation(),
      buttonText: X.Z.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: K.Si.TIER_2
    })
  });
  a.useEffect(() => {
    null == o || o(el)
  }, [o]), a.useEffect(() => {
    if (!I.Z.useReducedMotion && null !== eB) {
      let {
        current: e
      } = ei;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eB]);
  let ez = () => eF ? (0, n.jsx)(H.U, {
      className: q.priceTag,
      isPartiallyPurchased: !1
    }) : eT ? (0, n.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: X.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(W.Z, {
      product: s,
      discount: ex,
      isPremiumUser: eI,
      className: q.priceTag
    }),
    eK = () => eT ? null : eN ? (0, n.jsx)(en, {
      onClick: eV
    }) : (0, n.jsx)(G.Z, {
      product: s,
      returnRef: el,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eX = () => {
      if (eT && !eI && !eN) return eY();
      let e = eT ? {
        submitting: eL,
        submittingStartedLabel: X.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: X.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, k.fK)(s.skuId), (0, Y.Z)({
            product: s,
            analyticsLocations: er
          })
        }
      } : {
        onClick: e$
      };
      return (0, n.jsxs)("div", {
        className: q.buttonsContainer,
        children: [eF ? (0, n.jsx)(et, {
          disabled: eb,
          onClick: ew,
          children: X.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(et, {
          disabled: eb,
          className: q.purchaseButton,
          ...e,
          children: eT ? X.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : X.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: e_
          })
        }), eK()]
      })
    },
    eq = () => eZ && null !== eB ? (0, n.jsx)("div", {
      className: q.avatarContainer,
      children: (0, n.jsx)("img", {
        src: Q,
        alt: "error",
        className: q.errorImg
      })
    }) : (0, n.jsxs)(n.Fragment, {
      children: [eT && (0, n.jsx)(m.Tooltip, {
        tooltipContentClassName: q.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: X.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(m.TextBadge, {
          ...e,
          className: q.premiumWheelBadge,
          text: (0, n.jsx)(m.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: q.premiumWheel
          })
        })
      }), (null == eE ? void 0 : eE.type) === d.Z.PROFILE_EFFECT && (0, n.jsx)("div", {
        className: q.profileEffectShopPreview,
        children: (0, n.jsx)(A.Z, {
          isHovering: eC,
          profileEffectId: eE.id,
          isPurchased: eF,
          removeSetHeight: !0
        })
      }), (null == eE ? void 0 : eE.type) === d.Z.AVATAR_DECORATION && (0, n.jsx)("div", {
        className: q.avatarContainer,
        children: (0, n.jsx)($, {
          ...em,
          avatarDecoration: ef,
          src: eA && eC ? null == t ? void 0 : t.getAvatarURL(void 0, 152, !0) : ep,
          imageClassName: eA && eC ? q.fadeInAvatarImg : void 0,
          className: l()(q.avatar, {
            [q.avatarPurchased]: eF && !eZ
          }),
          size: eZ ? ee : J,
          "aria-label": X.Z.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    eQ = () => (c()(null != ec, "default payment source must be set"), (0, n.jsxs)("div", {
      className: l()(q.cardText, {
        [q.cardTextBlur]: (null == eE ? void 0 : eE.type) === d.Z.PROFILE_EFFECT
      }),
      children: [(0, n.jsx)("div", {
        className: l()(q.cardBackground, ev ? q.darkCardBackground : q.lightCardBackground, (null == eE ? void 0 : eE.type) === d.Z.PROFILE_EFFECT ? q.cardLowOpacity : null)
      }), eZ ? (0, n.jsx)(b.Z, {
        product: s,
        paymentSource: ec,
        itemPreview: eq(),
        onPurchaseComplete: () => {
          ek(!0), j.default.track(z.rMx.PAYMENT_FLOW_SUCCEEDED, {
            ...eH,
            load_id: ea.current
          })
        },
        onUse: eJ,
        onError: e => {
          ey(e), j.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
            ...eH,
            load_id: ea.current
          })
        },
        onReviewPurchase: eJ,
        confettiCanvas: ej.current,
        loadId: ea.current,
        baseAnalyticsData: eH
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: q.productName,
          children: s.name
        }), (0, n.jsxs)("div", {
          className: q.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: q.innerBlur,
            children: ez()
          }), (0, n.jsx)("div", {
            className: q.innerHover,
            children: eX()
          })]
        })]
      })]
    })),
    e$ = () => {
      ea.current = (0, u.Z)(), ey(null), eR(!0), ed(!0), p.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), j.default.track(z.rMx.PAYMENT_FLOW_STARTED, {
        ...eH,
        load_id: ea.current
      })
    },
    eJ = a.useCallback(() => {
      eR(!1), ed(!1), p.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), j.default.track(z.rMx.PAYMENT_FLOW_CANCELED, {
        ...eH,
        load_id: ea.current
      })
    }, [eR, eH]),
    e0 = ev ? "0 0 15px 1px ".concat(E.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e1 = null != eg ? {
      backgroundColor: ev ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: eC ? e0 : "none"
    } : void 0,
    e7 = null != eh && eZ ? {
      boxShadow: "0px 4px 50px 0px " + eh.primary.toHexString()
    } : {},
    e4 = eZ && eB ? {
      boxShadow: "0px 4px 50px 0px " + (ev ? S.Z.WHITE : S.Z.BLACK)
    } : e7;
  return a.useEffect(() => {
    if (eZ) {
      c()(null !== el.current, "cardRef can not be null");
      let e = el.current,
        s = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (s.length < 1) return;
      let t = s[0],
        n = s[s.length - 1],
        a = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === t ? (e.preventDefault(), null == n || n.focus()) : !e.shiftKey && document.activeElement === n && (e.preventDefault(), null == t || t.focus()))
        },
        r = e => {
          "Escape" === e.key && eJ()
        };
      return e.addEventListener("keydown", a), e.addEventListener("keydown", r), () => {
        e.removeEventListener("keydown", a), e.removeEventListener("keydown", r)
      }
    }
  }, [eZ, eJ]), (0, n.jsxs)(n.Fragment, {
    children: [eZ && (0, n.jsx)("div", {
      className: q.backdrop,
      onClick: eJ,
      "aria-hidden": !0
    }), (0, n.jsx)(m.FocusRing, {
      children: (0, n.jsx)(m.Shakeable, {
        className: l()({
          [q.shaker]: eZ
        }),
        ref: ei,
        children: (0, n.jsxs)("div", {
          className: l()(q.overflowContainer, {
            [q.lightningCheckout]: eZ
          }),
          style: e4,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, n.jsx)(i.O_, {
            ref: ej,
            className: q.confettiCanvas,
            environment: eP.current
          }), (0, n.jsxs)(m.Clickable, {
            innerRef: el,
            className: l()(q.shopCard, q.shopCardAnimation),
            onBlur: () => ed(!1),
            onClick: eW,
            style: e1,
            id: "shop-item-".concat(s.skuId),
            "aria-hidden": !0,
            children: [eZ && (0, n.jsx)(m.Button, {
              className: q.closeButton,
              "aria-label": X.Z.Messages.CLOSE,
              look: m.Button.Looks.BLANK,
              size: m.Button.Sizes.NONE,
              onClick: eJ,
              children: (0, n.jsx)(m.CloseSmallIcon, {
                size: "xs",
                color: ev ? S.Z.WHITE : S.Z.BLACK
              })
            }), eF && !eZ && (0, n.jsx)("div", {
              className: q.checkmarkWrapper,
              children: (0, n.jsx)(m.CheckmarkBoldIcon, {
                size: "custom",
                color: "currentColor",
                width: 38,
                height: 38,
                className: q.checkmark
              })
            }), eq(), eQ(), !eZ && (0, n.jsx)(w.Z, {
              category: r,
              className: q.limitedTimeBadge,
              display: "card"
            }), eO && !eZ && (0, n.jsx)(m.TextBadge, {
              text: X.Z.Messages.NEW,
              disableColor: !0,
              className: q.newBadge
            })]
          })]
        })
      })
    })]
  })
}