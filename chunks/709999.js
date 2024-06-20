"use strict";
t(47120), t(627341);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(512722),
  o = t.n(l),
  c = t(278074),
  u = t(979554),
  d = t(399606),
  C = t(692547),
  f = t(663002),
  E = t(481060),
  p = t(37234),
  g = t(727637),
  m = t(100527),
  x = t(906732),
  h = t(1585),
  I = t(333867),
  _ = t(197115),
  T = t(300284),
  N = t(876917),
  L = t(642619),
  S = t(210887),
  b = t(74538),
  v = t(335131),
  O = t(1870),
  A = t(884697),
  Z = t(724994),
  R = t(624377),
  j = t(390698),
  P = t(813083),
  M = t(680942),
  k = t(558060),
  B = t(237031),
  y = t(616066),
  F = t(216541),
  D = t(832149),
  U = t(474936),
  H = t(689938),
  w = t(246318);
let G = e => {
    let {
      children: s,
      onClick: t,
      ...a
    } = e;
    return (0, n.jsx)(E.Button, {
      fullWidth: !0,
      look: E.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), t()
      },
      ...a,
      children: s
    })
  },
  W = e => {
    let {
      className: s,
      ...t
    } = e;
    return (0, n.jsx)(E.Button, {
      color: E.ButtonColors.BRAND,
      look: E.Button.Looks.FILLED,
      size: E.ButtonSizes.ICON,
      className: i()(w.previewButton, s),
      innerClassName: w.previewButtonInner,
      "aria-label": H.Z.Messages.PREVIEW,
      ...t,
      children: (0, n.jsx)(E.EyeIcon, {
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
    onMount: l,
    isGiftEasterEggEnabled: V
  } = e, {
    analyticsLocations: Y
  } = (0, x.ZP)(m.Z.COLLECTIBLES_SHOP_CARD), z = a.useRef(null), K = (0, g.Z)(z), [X, q] = a.useState(!1), Q = K || X, [$] = s.items, {
    backgroundColors: J
  } = (0, R.Z)(s.styles), ee = b.ZP.canUseCollectibles(t), es = (0, A.XM)(s, ee, !1), et = a.useMemo(() => (0, A.BH)(s, ee), [s, ee]), en = (0, A.G1)(s), ea = (0, A.rN)(s), {
    isPurchased: er,
    isPartiallyPurchased: ei
  } = (0, Z.L)(s), [el, eo] = (0, d.Wu)([O.Z], () => [O.Z.isClaiming === s.skuId, null != O.Z.isClaiming && O.Z.isClaiming !== s.skuId]), ec = (0, d.e7)([S.Z], () => (0, f.w)(S.Z.theme)), eu = (0, A.Yq)(s.skuId);
  a.useEffect(() => {
    let {
      current: e
    } = z;
    if (null == e) return;
    let s = () => q(!0);
    return e.addEventListener("focusin", s), e.blur(), () => {
      e.removeEventListener("focusin", s)
    }
  }, []), a.useEffect(() => {
    null == l || l(z)
  }, [l]);
  let ed = (0, T.Z)({
      analyticsLocations: Y
    }),
    eC = a.useRef(null),
    ef = () => {
      if ((0, p.xf)(), ed(), s.type === u.Z.AVATAR_DECORATION && null != $) {
        o()($.type === s.type, "product type is equivlant to first item's check for avatar deco"), (0, h.ps)({
          initialSelectedDecoration: $,
          analyticsLocations: Y
        });
        return
      }
      s.type === u.Z.PROFILE_EFFECT && (0, L.H)({
        initialSelectedEffectId: $.id,
        analyticsLocations: Y
      })
    },
    eE = e => t => {
      eC.current = t.currentTarget, (0, B.T)({
        product: s,
        category: r,
        analyticsLocations: Y,
        analyticsSource: e,
        returnRef: eC
      })
    },
    ep = eE(m.Z.COLLECTIBLES_SHOP_CARD),
    eg = eE(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    em = () => (0, n.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, n.jsx)(_.Z, {
        fullWidth: !0,
        className: w.__invalid_premiumSubscribeButton,
        disabled: eo,
        onClick: e => e.stopPropagation(),
        buttonText: H.Z.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: U.Si.TIER_2
      })
    }),
    ex = () => er || ei ? (0, n.jsx)(j.U, {
      className: w.priceTag,
      isPartiallyPurchased: ei
    }) : en ? (0, n.jsx)(E.Text, {
      variant: "text-md/semibold",
      className: w.priceTag,
      children: H.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(k.Z, {
      product: s,
      discount: et,
      isPremiumUser: ee,
      className: w.priceTag
    }),
    eh = () => en ? null : ea ? (0, n.jsx)(W, {
      onClick: eg
    }) : (0, n.jsx)(M.Z, {
      product: s,
      returnRef: z,
      isGiftEasterEggEnabled: V,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eI = () => {
      if (en && !ee && !ea) return em();
      let e = en ? {
        submitting: el,
        submittingStartedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, v.fK)(s.skuId), (0, D.Z)({
            product: s,
            analyticsLocations: Y
          })
        }
      } : {
        onClick: () => (0, I.Z)({
          skuId: s.skuId,
          analyticsLocations: Y,
          returnRef: z
        })
      };
      return (0, n.jsxs)("div", {
        className: w.buttonsContainer,
        children: [ei ? null : er ? (0, n.jsx)(G, {
          disabled: eo,
          onClick: ef,
          children: H.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(G, {
          disabled: eo,
          className: w.purchaseButton,
          ...e,
          children: en ? H.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : H.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }), eh()]
      })
    },
    e_ = ec ? "0 0 15px 1px ".concat(C.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, A.x6)(s) && null != et && et.discountPercentage < 0 ? null : (0, n.jsx)(E.FocusRing, {
    children: (0, n.jsxs)(E.Clickable, {
      innerRef: z,
      className: i()(w.shopCard, w.shopCardAnimation, {
        [w.partiallyOwned]: ei
      }),
      onBlur: () => q(!1),
      onClick: ep,
      style: null != J ? {
        backgroundColor: ec ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: Q ? e_ : "none"
      } : void 0,
      id: "shop-item-".concat(s.skuId),
      children: [en && (0, n.jsx)(E.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: E.Tooltip.Colors.PRIMARY,
        text: H.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(E.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, n.jsx)(E.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: w.premiumWheel
          })
        })
      }), (0, n.jsx)("div", {
        className: w.preview,
        children: (0, c.EQ)(s.type).with(u.Z.PROFILE_EFFECT, () => (0, n.jsx)("div", {
          className: w.profileEffectShopPreview,
          children: (0, n.jsx)(N.Z, {
            isHovering: Q,
            profileEffectId: $.id,
            isPurchased: er,
            removeSetHeight: !0
          })
        })).with(u.Z.AVATAR_DECORATION, () => (o()($.type === u.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, n.jsx)("div", {
          className: w.avatarContainer,
          children: (0, n.jsx)(y.R, {
            item: $,
            user: t,
            isPurchased: er,
            isHighlighted: Q
          })
        }))).with(u.Z.BUNDLE, () => (0, n.jsx)(F.d, {
          product: s,
          user: t,
          isPurchased: er,
          isHighlighted: Q
        })).otherwise(() => null)
      }), er ? (0, n.jsx)("div", {
        className: w.checkmarkWrapper,
        children: (0, n.jsx)(E.CheckmarkBoldIcon, {
          size: "custom",
          color: "currentColor",
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, n.jsxs)("div", {
        className: i()(w.cardText, {
          [w.cardTextBlur]: (null == $ ? void 0 : $.type) === u.Z.PROFILE_EFFECT
        }),
        children: [(0, n.jsx)("div", {
          className: i()(w.cardBackground, ec ? w.darkCardBackground : w.lightCardBackground, (null == $ ? void 0 : $.type) === u.Z.PROFILE_EFFECT ? w.cardLowOpacity : null)
        }), (0, n.jsx)(E.Text, {
          variant: "text-lg/bold",
          className: w.productName,
          children: s.name
        }), (0, n.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: ei ? void 0 : w.innerBlur,
            children: ex()
          }), (0, n.jsx)("div", {
            className: w.innerHover,
            children: eI()
          })]
        })]
      }), (0, n.jsx)(P.Z, {
        category: r,
        className: w.limitedTimeBadge,
        display: "card"
      }), eu && !ei && !er && (0, n.jsx)(E.TextBadge, {
        text: H.Z.Messages.NEW,
        disableColor: !0,
        className: w.newBadge
      })]
    })
  })
}