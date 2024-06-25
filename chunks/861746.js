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
  T = s(1585),
  L = s(125988),
  S = s(377171),
  N = s(74179),
  b = s(107091),
  v = s(197115),
  O = s(300284),
  Z = s(876917),
  A = s(642619),
  R = s(210887),
  j = s(626135),
  P = s(74538),
  M = s(998502),
  k = s(335131),
  y = s(1870),
  B = s(884697),
  D = s(266386),
  F = s(724994),
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
  et = (0, T.y9)(J),
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
  } = (0, _.ZP)(I.Z.COLLECTIBLES_SHOP_CARD), ei = r.useRef(null), el = r.useRef(null), eo = (0, h.Z)(ei), ec = (0, C.e7)([x.Z], () => x.Z.useReducedMotion), {
    defaultPaymentSource: eu
  } = (0, N.Z)({
    isGift: !1,
    activeSubscription: null
  }), [ed, eC] = r.useState(!1), ef = eo || ed, [ep] = t.items, {
    avatarDecorationSrc: eE,
    eventHandlers: eg,
    avatarPlaceholderSrc: em
  } = (0, L.Z)({
    user: s,
    avatarDecorationOverride: (null == ep ? void 0 : ep.type) === d.Z.AVATAR_DECORATION ? ep : void 0,
    size: et,
    onlyAnimateOnHover: !ef
  }), {
    backgroundColors: eh,
    buttonColors: ex
  } = (0, U.Z)(t.styles), eI = r.useMemo(() => P.ZP.canUseCollectibles(s), [s]), e_ = (0, B.XM)(t, eI, !1), eT = r.useMemo(() => (0, B.BH)(t, eI), [t, eI]), eL = (0, B.G1)(t), eS = (0, B.rN)(t), {
    isPurchased: eN
  } = (0, F.L)(t), [eb, ev] = (0, C.Wu)([y.Z], () => [y.Z.isClaiming === t.skuId, null != y.Z.isClaiming && y.Z.isClaiming !== t.skuId]), eO = (0, C.e7)([R.Z], () => (0, p.w)(R.Z.theme)), eZ = (0, B.Yq)(t.skuId), eA = (0, D.c)("CollectiblesShopTallCard"), [eR, ej] = r.useState(!1), eP = r.useRef(null), eM = r.useRef(new l.qA), [ek, ey] = r.useState(!1), [eB, eD] = r.useState(null), eF = eN || ek, eU = (0, O.Z)({
    analyticsLocations: ea
  }), eH = r.useRef(null), ew = r.useMemo(() => ({
    sku_id: t.skuId,
    location: z.Sbl.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [t]), eG = () => {
    if ((0, m.xf)(), eU(), (null == ep ? void 0 : ep.type) === d.Z.AVATAR_DECORATION) {
      (0, T.ps)({
        initialSelectedDecoration: ep,
        analyticsLocations: ea
      });
      return
    }(null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT && (0, A.H)({
      initialSelectedEffectId: ep.id,
      analyticsLocations: ea
    })
  }, eW = e => {
    if (!eR) return s => {
      eH.current = s.currentTarget, (0, V.T)({
        product: t,
        category: a,
        analyticsLocations: ea,
        analyticsSource: e,
        returnRef: eH
      })
    }
  }, eV = eW(I.Z.COLLECTIBLES_SHOP_CARD), eY = eW(I.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), ez = () => (0, n.jsx)("div", {
    className: q.hoverUpsellContainer,
    children: (0, n.jsx)(v.Z, {
      fullWidth: !0,
      className: q.__invalid_premiumSubscribeButton,
      disabled: ev,
      onClick: e => e.stopPropagation(),
      buttonText: X.Z.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: K.Si.TIER_2
    })
  });
  r.useEffect(() => {
    null == o || o(ei)
  }, [o]), r.useEffect(() => {
    if (!ec && null !== eB) {
      let {
        current: e
      } = el;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [ec, eB]);
  let eK = () => eF ? (0, n.jsx)(H.U, {
      className: q.priceTag,
      isPartiallyPurchased: !1
    }) : eL ? (0, n.jsx)(E.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: X.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(W.Z, {
      product: t,
      discount: eT,
      isPremiumUser: eI,
      className: q.priceTag
    }),
    eX = () => eL ? null : eS ? (0, n.jsx)(en, {
      onClick: eY
    }) : (0, n.jsx)(G.Z, {
      product: t,
      returnRef: ei,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eq = () => {
      if (eL && !eI && !eS) return ez();
      let e = eL ? {
        submitting: eb,
        submittingStartedLabel: X.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: X.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, k.fK)(t.skuId), (0, Y.Z)({
            product: t,
            analyticsLocations: ea
          })
        }
      } : {
        onClick: eJ
      };
      return (0, n.jsxs)("div", {
        className: q.buttonsContainer,
        children: [eF ? (0, n.jsx)(es, {
          disabled: ev,
          onClick: eG,
          children: X.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(es, {
          disabled: ev,
          className: q.purchaseButton,
          ...e,
          children: eL ? X.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : X.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: e_
          })
        }), eX()]
      })
    },
    eQ = () => eR && null !== eB ? (0, n.jsx)("div", {
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
      }), (null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT && (0, n.jsx)("div", {
        className: q.profileEffectShopPreview,
        children: (0, n.jsx)(Z.Z, {
          isHovering: ef,
          profileEffectId: ep.id,
          isPurchased: eF,
          removeSetHeight: !0
        })
      }), (null == ep ? void 0 : ep.type) === d.Z.AVATAR_DECORATION && (0, n.jsx)("div", {
        className: q.avatarContainer,
        children: (0, n.jsx)($, {
          ...eg,
          avatarDecoration: eE,
          src: eA && ef ? null == s ? void 0 : s.getAvatarURL(void 0, 152, !0) : em,
          imageClassName: eA && ef ? q.fadeInAvatarImg : void 0,
          className: i()(q.avatar, {
            [q.avatarPurchased]: eF && !eR
          }),
          size: eR ? ee : J,
          "aria-label": X.Z.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e$ = () => (c()(null != eu, "default payment source must be set"), (0, n.jsxs)("div", {
      className: i()(q.cardText, {
        [q.cardTextBlur]: (null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT
      }),
      children: [(0, n.jsx)("div", {
        className: i()(q.cardBackground, eO ? q.darkCardBackground : q.lightCardBackground, (null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT ? q.cardLowOpacity : null)
      }), eR ? (0, n.jsx)(b.Z, {
        product: t,
        paymentSource: eu,
        itemPreview: eQ(),
        onPurchaseComplete: () => {
          ey(!0), j.default.track(z.rMx.PAYMENT_FLOW_SUCCEEDED, {
            ...ew,
            load_id: er.current
          })
        },
        onUse: e0,
        onError: e => {
          eD(e), j.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
            ...ew,
            load_id: er.current
          })
        },
        onReviewPurchase: e0,
        confettiCanvas: eP.current,
        loadId: er.current,
        baseAnalyticsData: ew
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(E.Text, {
          variant: "text-lg/bold",
          className: q.productName,
          children: t.name
        }), (0, n.jsxs)("div", {
          className: q.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: q.innerBlur,
            children: eK()
          }), (0, n.jsx)("div", {
            className: q.innerHover,
            children: eq()
          })]
        })]
      })]
    })),
    eJ = () => {
      er.current = (0, u.Z)(), eD(null), ej(!0), eC(!0), g.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), j.default.track(z.rMx.PAYMENT_FLOW_STARTED, {
        ...ew,
        load_id: er.current
      })
    },
    e0 = r.useCallback(() => {
      ej(!1), eC(!1), g.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), j.default.track(z.rMx.PAYMENT_FLOW_CANCELED, {
        ...ew,
        load_id: er.current
      })
    }, [ej, ew]),
    e1 = eO ? "0 0 15px 1px ".concat(f.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e7 = null != eh ? {
      backgroundColor: eO ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: ef ? e1 : "none"
    } : void 0,
    e4 = null != ex && eR ? {
      boxShadow: "0px 4px 50px 0px " + ex.primary.toHexString()
    } : {},
    e2 = eR && eB ? {
      boxShadow: "0px 4px 50px 0px " + (eO ? S.Z.WHITE : S.Z.BLACK)
    } : e4;
  return r.useEffect(() => {
    if (eR) {
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
          "Escape" === e.key && e0()
        };
      return e.addEventListener("keydown", r), e.addEventListener("keydown", a), () => {
        e.removeEventListener("keydown", r), e.removeEventListener("keydown", a)
      }
    }
  }, [eR, e0]), (0, n.jsxs)(n.Fragment, {
    children: [eR && (0, n.jsx)("div", {
      className: q.backdrop,
      onClick: e0,
      "aria-hidden": !0
    }), (0, n.jsx)(E.FocusRing, {
      children: (0, n.jsx)(E.Shakeable, {
        className: i()({
          [q.shaker]: eR
        }),
        ref: el,
        children: (0, n.jsxs)("div", {
          className: i()(q.overflowContainer, {
            [q.lightningCheckout]: eR
          }),
          style: e2,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, n.jsx)(l.O_, {
            ref: eP,
            className: q.confettiCanvas,
            environment: eM.current
          }), (0, n.jsxs)(E.Clickable, {
            innerRef: ei,
            className: i()(q.shopCard, {
              [q.shopCardAnimation]: !ec
            }),
            onBlur: () => eC(!1),
            onClick: eV,
            style: e7,
            id: "shop-item-".concat(t.skuId),
            "aria-hidden": !0,
            children: [eR && (0, n.jsx)(E.Button, {
              className: q.closeButton,
              "aria-label": X.Z.Messages.CLOSE,
              look: E.Button.Looks.BLANK,
              size: E.Button.Sizes.NONE,
              onClick: e0,
              children: (0, n.jsx)(E.CloseSmallIcon, {
                size: "xs",
                color: eO ? S.Z.WHITE : S.Z.BLACK
              })
            }), eF && !eR && (0, n.jsx)("div", {
              className: q.checkmarkWrapper,
              children: (0, n.jsx)(E.CheckmarkBoldIcon, {
                size: "custom",
                color: "currentColor",
                width: 38,
                height: 38,
                className: q.checkmark
              })
            }), eQ(), e$(), !eR && (0, n.jsx)(w.Z, {
              category: a,
              className: q.limitedTimeBadge,
              display: "card"
            }), eZ && !eR && (0, n.jsx)(E.TextBadge, {
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