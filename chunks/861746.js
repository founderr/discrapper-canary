"use strict";
s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  l = s(887024),
  o = s(512722),
  c = s.n(o),
  u = s(772848),
  d = s(979554),
  C = s(399606),
  f = s(692547),
  p = s(663002),
  E = s(481060),
  g = s(570140),
  m = s(37234),
  h = s(727637),
  x = s(607070),
  I = s(100527),
  _ = s(906732),
  L = s(1585),
  T = s(125988),
  S = s(377171),
  N = s(74179),
  b = s(107091),
  v = s(197115),
  O = s(300284),
  A = s(876917),
  Z = s(642619),
  R = s(210887),
  j = s(626135),
  P = s(74538),
  M = s(998502),
  k = s(335131),
  B = s(1870),
  y = s(884697),
  F = s(266386),
  D = s(724994),
  U = s(624377),
  H = s(390698),
  w = s(813083),
  G = s(680942),
  W = s(558060),
  V = s(237031),
  Y = s(832149),
  z = s(981631),
  K = s(474936),
  X = s(689938),
  q = s(582922),
  Q = s(42615);
let $ = M.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
  J = E.AvatarSizes.SIZE_152,
  ee = E.AvatarSizes.SIZE_120,
  et = (0, L.y9)(J),
  es = e => {
    let {
      children: t,
      onClick: s,
      ...r
    } = e;
    return (0, n.jsx)(E.Button, {
      fullWidth: !0,
      look: E.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), s()
      },
      ...r,
      children: t
    })
  },
  en = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, n.jsx)(E.Button, {
      color: E.ButtonColors.BRAND,
      look: E.Button.Looks.FILLED,
      size: E.ButtonSizes.ICON,
      className: i()(q.previewButton, t),
      innerClassName: q.previewButtonInner,
      "aria-label": X.Z.Messages.PREVIEW,
      ...s,
      children: (0, n.jsx)(E.EyeIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  };
t.Z = function(e) {
  let {
    product: t,
    user: s,
    category: a,
    onMount: o,
    isGiftEasterEggEnabled: M
  } = e, er = r.useRef(null), {
    analyticsLocations: ea
  } = (0, _.ZP)(I.Z.COLLECTIBLES_SHOP_CARD), ei = r.useRef(null), el = r.useRef(null), eo = (0, h.Z)(ei), {
    defaultPaymentSource: ec
  } = (0, N.Z)({
    isGift: !1,
    activeSubscription: null
  }), [eu, ed] = r.useState(!1), eC = eo || eu, [ef] = t.items, {
    avatarDecorationSrc: ep,
    eventHandlers: eE,
    avatarPlaceholderSrc: eg
  } = (0, T.Z)({
    user: s,
    avatarDecorationOverride: (null == ef ? void 0 : ef.type) === d.Z.AVATAR_DECORATION ? ef : void 0,
    size: et,
    animateOnHover: !eC
  }), {
    backgroundColors: em,
    buttonColors: eh
  } = (0, U.Z)(t.styles), ex = r.useMemo(() => P.ZP.canUseCollectibles(s), [s]), eI = (0, y.XM)(t, ex, !1), e_ = r.useMemo(() => (0, y.BH)(t, ex), [t, ex]), eL = (0, y.G1)(t), eT = (0, y.rN)(t), {
    isPurchased: eS
  } = (0, D.L)(t), [eN, eb] = (0, C.Wu)([B.Z], () => [B.Z.isClaiming === t.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId]), ev = (0, C.e7)([R.Z], () => (0, p.w)(R.Z.theme)), eO = (0, y.Yq)(t.skuId), eA = (0, F.c)("CollectiblesShopTallCard"), [eZ, eR] = r.useState(!1), ej = r.useRef(null), eP = r.useRef(new l.qA), [eM, ek] = r.useState(!1), [eB, ey] = r.useState(null), eF = eS || eM, eD = (0, O.Z)({
    analyticsLocations: ea
  }), eU = r.useRef(null), eH = r.useMemo(() => ({
    sku_id: t.skuId,
    location: z.Sbl.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), ew = () => {
    if ((0, m.xf)(), eD(), (null == ef ? void 0 : ef.type) === d.Z.AVATAR_DECORATION) {
      (0, L.ps)({
        initialSelectedDecoration: ef,
        analyticsLocations: ea
      });
      return
    }(null == ef ? void 0 : ef.type) === d.Z.PROFILE_EFFECT && (0, Z.H)({
      initialSelectedEffectId: ef.id,
      analyticsLocations: ea
    })
  }, eG = e => {
    if (!eZ) return s => {
      eU.current = s.currentTarget, (0, V.T)({
        product: t,
        category: a,
        analyticsLocations: ea,
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
  r.useEffect(() => {
    null == o || o(ei)
  }, [o]), r.useEffect(() => {
    if (!x.Z.useReducedMotion && null !== eB) {
      let {
        current: e
      } = el;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eB]);
  let ez = () => eF ? (0, n.jsx)(H.U, {
      className: q.priceTag,
      isPartiallyPurchased: !1
    }) : eL ? (0, n.jsx)(E.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: X.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(W.Z, {
      product: t,
      discount: e_,
      isPremiumUser: ex,
      className: q.priceTag
    }),
    eK = () => eL ? null : eT ? (0, n.jsx)(en, {
      onClick: eV
    }) : (0, n.jsx)(G.Z, {
      product: t,
      returnRef: ei,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eX = () => {
      if (eL && !ex && !eT) return eY();
      let e = eL ? {
        submitting: eN,
        submittingStartedLabel: X.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: X.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, k.fK)(t.skuId), (0, Y.Z)({
            product: t,
            analyticsLocations: ea
          })
        }
      } : {
        onClick: e$
      };
      return (0, n.jsxs)("div", {
        className: q.buttonsContainer,
        children: [eF ? (0, n.jsx)(es, {
          disabled: eb,
          onClick: ew,
          children: X.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(es, {
          disabled: eb,
          className: q.purchaseButton,
          ...e,
          children: eL ? X.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : X.Z.Messages.COLLECTIBLES_PURCHASE.format({
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
      children: [eL && (0, n.jsx)(E.Tooltip, {
        tooltipContentClassName: q.premiumWheelTooltipContent,
        color: E.Tooltip.Colors.PRIMARY,
        text: X.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(E.TextBadge, {
          ...e,
          className: q.premiumWheelBadge,
          text: (0, n.jsx)(E.NitroWheelIcon, {
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
          ...eE,
          avatarDecoration: ep,
          src: eA && eC ? null == s ? void 0 : s.getAvatarURL(void 0, 152, !0) : eg,
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
        product: t,
        paymentSource: ec,
        itemPreview: eq(),
        onPurchaseComplete: () => {
          ek(!0), j.default.track(z.rMx.PAYMENT_FLOW_SUCCEEDED, {
            ...eH,
            load_id: er.current
          })
        },
        onUse: eJ,
        onError: e => {
          ey(e), j.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
            ...eH,
            load_id: er.current
          })
        },
        onReviewPurchase: eJ,
        confettiCanvas: ej.current,
        loadId: er.current,
        baseAnalyticsData: eH
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(E.Text, {
          variant: "text-lg/bold",
          className: q.productName,
          children: t.name
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
      er.current = (0, u.Z)(), ey(null), eR(!0), ed(!0), g.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), j.default.track(z.rMx.PAYMENT_FLOW_STARTED, {
        ...eH,
        load_id: er.current
      })
    },
    eJ = r.useCallback(() => {
      eR(!1), ed(!1), g.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), j.default.track(z.rMx.PAYMENT_FLOW_CANCELED, {
        ...eH,
        load_id: er.current
      })
    }, [eR, eH]),
    e0 = ev ? "0 0 15px 1px ".concat(f.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e1 = null != em ? {
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
  return r.useEffect(() => {
    if (eZ) {
      c()(null !== ei.current, "cardRef can not be null");
      let e = ei.current,
        t = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (t.length < 1) return;
      let s = t[0],
        n = t[t.length - 1],
        r = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === s ? (e.preventDefault(), null == n || n.focus()) : !e.shiftKey && document.activeElement === n && (e.preventDefault(), null == s || s.focus()))
        },
        a = e => {
          "Escape" === e.key && eJ()
        };
      return e.addEventListener("keydown", r), e.addEventListener("keydown", a), () => {
        e.removeEventListener("keydown", r), e.removeEventListener("keydown", a)
      }
    }
  }, [eZ, eJ]), (0, n.jsxs)(n.Fragment, {
    children: [eZ && (0, n.jsx)("div", {
      className: q.backdrop,
      onClick: eJ,
      "aria-hidden": !0
    }), (0, n.jsx)(E.FocusRing, {
      children: (0, n.jsx)(E.Shakeable, {
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
          }), (0, n.jsxs)(E.Clickable, {
            innerRef: ei,
            className: i()(q.shopCard, q.shopCardAnimation),
            onBlur: () => ed(!1),
            onClick: eW,
            style: e1,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eZ && (0, n.jsx)(E.Button, {
              className: q.closeButton,
              "aria-label": X.Z.Messages.CLOSE,
              look: E.Button.Looks.BLANK,
              size: E.Button.Sizes.NONE,
              onClick: eJ,
              children: (0, n.jsx)(E.CloseSmallIcon, {
                size: "xs",
                color: ev ? S.Z.WHITE : S.Z.BLACK
              })
            }), eF && !eZ && (0, n.jsx)("div", {
              className: q.checkmarkWrapper,
              children: (0, n.jsx)(E.CheckmarkBoldIcon, {
                size: "custom",
                color: "currentColor",
                width: 38,
                height: 38,
                className: q.checkmark
              })
            }), eq(), eQ(), !eZ && (0, n.jsx)(w.Z, {
              category: a,
              className: q.limitedTimeBadge,
              display: "card"
            }), eO && !eZ && (0, n.jsx)(E.TextBadge, {
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