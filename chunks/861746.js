"use strict";
t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(887024),
  o = t(512722),
  c = t.n(o),
  u = t(772848),
  d = t(979554),
  C = t(399606),
  f = t(692547),
  E = t(663002),
  p = t(481060),
  g = t(570140),
  m = t(37234),
  x = t(727637),
  h = t(607070),
  I = t(100527),
  _ = t(906732),
  T = t(1585),
  N = t(125988),
  L = t(377171),
  S = t(74179),
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
  q = t(582922),
  Q = t(42615);
let $ = M.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  J = p.AvatarSizes.SIZE_152,
  ee = p.AvatarSizes.SIZE_120,
  es = (0, T.y9)(J),
  et = e => {
    let {
      children: s,
      onClick: t,
      ...a
    } = e;
    return (0, n.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
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
    return (0, n.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: i()(q.previewButton, s),
      innerClassName: q.previewButtonInner,
      "aria-label": X.Z.Messages.PREVIEW,
      ...t,
      children: (0, n.jsx)(p.EyeIcon, {
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
  } = (0, _.ZP)(I.Z.COLLECTIBLES_SHOP_CARD), ei = a.useRef(null), el = a.useRef(null), eo = (0, x.Z)(ei), {
    defaultPaymentSource: ec
  } = (0, S.Z)({
    isGift: !1,
    activeSubscription: null
  }), [eu, ed] = a.useState(!1), eC = eo || eu, [ef] = s.items, {
    avatarDecorationSrc: eE,
    eventHandlers: ep,
    avatarPlaceholderSrc: eg
  } = (0, N.Z)({
    user: t,
    avatarDecorationOverride: (null == ef ? void 0 : ef.type) === d.Z.AVATAR_DECORATION ? ef : void 0,
    size: es,
    animateOnHover: !eC
  }), {
    backgroundColors: em,
    buttonColors: ex
  } = (0, U.Z)(s.styles), eh = a.useMemo(() => P.ZP.canUseCollectibles(t), [t]), eI = (0, y.XM)(s, eh, !1), e_ = a.useMemo(() => (0, y.BH)(s, eh), [s, eh]), eT = (0, y.G1)(s), eN = (0, y.rN)(s), {
    isPurchased: eL
  } = (0, D.L)(s), [eS, eb] = (0, C.Wu)([B.Z], () => [B.Z.isClaiming === s.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== s.skuId]), ev = (0, C.e7)([R.Z], () => (0, E.w)(R.Z.theme)), eO = (0, y.Yq)(s.skuId), eA = (0, F.c)("CollectiblesShopTallCard"), [eZ, eR] = a.useState(!1), ej = a.useRef(null), eP = a.useRef(new l.qA), [eM, ek] = a.useState(!1), [eB, ey] = a.useState(null), eF = eL || eM, eD = (0, O.Z)({
    analyticsLocations: er
  }), eU = a.useRef(null), eH = a.useMemo(() => ({
    sku_id: s.skuId,
    location: z.Sbl.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [s]), ew = () => {
    if ((0, m.xf)(), eD(), (null == ef ? void 0 : ef.type) === d.Z.AVATAR_DECORATION) {
      (0, T.ps)({
        initialSelectedDecoration: ef,
        analyticsLocations: er
      });
      return
    }(null == ef ? void 0 : ef.type) === d.Z.PROFILE_EFFECT && (0, Z.H)({
      initialSelectedEffectId: ef.id,
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
  }, eW = eG(I.Z.COLLECTIBLES_SHOP_CARD), eV = eG(I.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eY = () => (0, n.jsx)("div", {
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
    null == o || o(ei)
  }, [o]), a.useEffect(() => {
    if (!h.Z.useReducedMotion && null !== eB) {
      let {
        current: e
      } = el;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eB]);
  let ez = () => eF ? (0, n.jsx)(H.U, {
      className: q.priceTag,
      isPartiallyPurchased: !1
    }) : eT ? (0, n.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: X.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(W.Z, {
      product: s,
      discount: e_,
      isPremiumUser: eh,
      className: q.priceTag
    }),
    eK = () => eT ? null : eN ? (0, n.jsx)(en, {
      onClick: eV
    }) : (0, n.jsx)(G.Z, {
      product: s,
      returnRef: ei,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eX = () => {
      if (eT && !eh && !eN) return eY();
      let e = eT ? {
        submitting: eS,
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
            price: eI
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
      children: [eT && (0, n.jsx)(p.Tooltip, {
        tooltipContentClassName: q.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: X.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(p.TextBadge, {
          ...e,
          className: q.premiumWheelBadge,
          text: (0, n.jsx)(p.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: q.premiumWheel
          })
        })
      }), (null == ef ? void 0 : ef.type) === d.Z.PROFILE_EFFECT && (0, n.jsx)("div", {
        className: q.profileEffectShopPreview,
        children: (0, n.jsx)(A.Z, {
          isHovering: eC,
          profileEffectId: ef.id,
          isPurchased: eF,
          removeSetHeight: !0
        })
      }), (null == ef ? void 0 : ef.type) === d.Z.AVATAR_DECORATION && (0, n.jsx)("div", {
        className: q.avatarContainer,
        children: (0, n.jsx)($, {
          ...ep,
          avatarDecoration: eE,
          src: eA && eC ? null == t ? void 0 : t.getAvatarURL(void 0, 152, !0) : eg,
          imageClassName: eA && eC ? q.fadeInAvatarImg : void 0,
          className: i()(q.avatar, {
            [q.avatarPurchased]: eF && !eZ
          }),
          size: eZ ? ee : J,
          "aria-label": X.Z.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    eQ = () => (c()(null != ec, "default payment source must be set"), (0, n.jsxs)("div", {
      className: i()(q.cardText, {
        [q.cardTextBlur]: (null == ef ? void 0 : ef.type) === d.Z.PROFILE_EFFECT
      }),
      children: [(0, n.jsx)("div", {
        className: i()(q.cardBackground, ev ? q.darkCardBackground : q.lightCardBackground, (null == ef ? void 0 : ef.type) === d.Z.PROFILE_EFFECT ? q.cardLowOpacity : null)
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
        children: [(0, n.jsx)(p.Text, {
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
      ea.current = (0, u.Z)(), ey(null), eR(!0), ed(!0), g.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), j.default.track(z.rMx.PAYMENT_FLOW_STARTED, {
        ...eH,
        load_id: ea.current
      })
    },
    eJ = a.useCallback(() => {
      eR(!1), ed(!1), g.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), j.default.track(z.rMx.PAYMENT_FLOW_CANCELED, {
        ...eH,
        load_id: ea.current
      })
    }, [eR, eH]),
    e0 = ev ? "0 0 15px 1px ".concat(f.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e1 = null != em ? {
      backgroundColor: ev ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: eC ? e0 : "none"
    } : void 0,
    e7 = null != ex && eZ ? {
      boxShadow: "0px 4px 50px 0px " + ex.primary.toHexString()
    } : {},
    e4 = eZ && eB ? {
      boxShadow: "0px 4px 50px 0px " + (ev ? L.Z.WHITE : L.Z.BLACK)
    } : e7;
  return a.useEffect(() => {
    if (eZ) {
      c()(null !== ei.current, "cardRef can not be null");
      let e = ei.current,
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
    }), (0, n.jsx)(p.FocusRing, {
      children: (0, n.jsx)(p.Shakeable, {
        className: i()({
          [q.shaker]: eZ
        }),
        ref: el,
        children: (0, n.jsxs)("div", {
          className: i()(q.overflowContainer, {
            [q.lightningCheckout]: eZ
          }),
          style: e4,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, n.jsx)(l.O_, {
            ref: ej,
            className: q.confettiCanvas,
            environment: eP.current
          }), (0, n.jsxs)(p.Clickable, {
            innerRef: ei,
            className: i()(q.shopCard, q.shopCardAnimation),
            onBlur: () => ed(!1),
            onClick: eW,
            style: e1,
            id: "shop-item-".concat(s.skuId),
            "aria-hidden": !0,
            children: [eZ && (0, n.jsx)(p.Button, {
              className: q.closeButton,
              "aria-label": X.Z.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: eJ,
              children: (0, n.jsx)(p.CloseSmallIcon, {
                size: "xs",
                color: ev ? L.Z.WHITE : L.Z.BLACK
              })
            }), eF && !eZ && (0, n.jsx)("div", {
              className: q.checkmarkWrapper,
              children: (0, n.jsx)(p.CheckmarkBoldIcon, {
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
            }), eO && !eZ && (0, n.jsx)(p.TextBadge, {
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