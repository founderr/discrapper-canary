"use strict";
t(47120), t(627341);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  l = t.n(r),
  i = t(512722),
  o = t.n(i),
  c = t(278074),
  u = t(979554),
  d = t(399606),
  C = t(692547),
  E = t(663002),
  f = t(481060),
  m = t(37234),
  p = t(727637),
  g = t(100527),
  h = t(906732),
  I = t(1585),
  _ = t(333867),
  x = t(197115),
  T = t(300284),
  N = t(876917),
  S = t(642619),
  L = t(210887),
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
    return (0, n.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
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
    return (0, n.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: l()(w.previewButton, s),
      innerClassName: w.previewButtonInner,
      "aria-label": H.Z.Messages.PREVIEW,
      ...t,
      children: (0, n.jsx)(f.EyeIcon, {
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
    onMount: i,
    isGiftEasterEggEnabled: V
  } = e, {
    analyticsLocations: Y
  } = (0, h.ZP)(g.Z.COLLECTIBLES_SHOP_CARD), z = a.useRef(null), K = (0, p.Z)(z), [X, q] = a.useState(!1), Q = K || X, [$] = s.items, {
    backgroundColors: J
  } = (0, R.Z)(s.styles), ee = b.ZP.canUseCollectibles(t), es = (0, A.XM)(s, ee, !1), et = a.useMemo(() => (0, A.BH)(s, ee), [s, ee]), en = (0, A.G1)(s), ea = (0, A.rN)(s), {
    isPurchased: er,
    isPartiallyPurchased: el
  } = (0, Z.L)(s), [ei, eo] = (0, d.Wu)([O.Z], () => [O.Z.isClaiming === s.skuId, null != O.Z.isClaiming && O.Z.isClaiming !== s.skuId]), ec = (0, d.e7)([L.Z], () => (0, E.w)(L.Z.theme)), eu = (0, A.Yq)(s.skuId);
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
    null == i || i(z)
  }, [i]);
  let ed = (0, T.Z)({
      analyticsLocations: Y
    }),
    eC = a.useRef(null),
    eE = () => {
      if ((0, m.xf)(), ed(), s.type === u.Z.AVATAR_DECORATION && null != $) {
        o()($.type === s.type, "product type is equivlant to first item's check for avatar deco"), (0, I.ps)({
          initialSelectedDecoration: $,
          analyticsLocations: Y
        });
        return
      }
      s.type === u.Z.PROFILE_EFFECT && (0, S.H)({
        initialSelectedEffectId: $.id,
        analyticsLocations: Y
      })
    },
    ef = e => t => {
      eC.current = t.currentTarget, (0, B.T)({
        product: s,
        category: r,
        analyticsLocations: Y,
        analyticsSource: e,
        returnRef: eC
      })
    },
    em = ef(g.Z.COLLECTIBLES_SHOP_CARD),
    ep = ef(g.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eg = () => (0, n.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, n.jsx)(x.Z, {
        fullWidth: !0,
        className: w.__invalid_premiumSubscribeButton,
        disabled: eo,
        onClick: e => e.stopPropagation(),
        buttonText: H.Z.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: U.Si.TIER_2
      })
    }),
    eh = () => er || el ? (0, n.jsx)(j.U, {
      className: w.priceTag,
      isPartiallyPurchased: el
    }) : en ? (0, n.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: w.priceTag,
      children: H.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(k.Z, {
      product: s,
      discount: et,
      isPremiumUser: ee,
      className: w.priceTag
    }),
    eI = () => en ? null : ea ? (0, n.jsx)(W, {
      onClick: ep
    }) : (0, n.jsx)(M.Z, {
      product: s,
      returnRef: z,
      isGiftEasterEggEnabled: V,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e_ = () => {
      if (en && !ee && !ea) return eg();
      let e = en ? {
        submitting: ei,
        submittingStartedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, v.fK)(s.skuId), (0, D.Z)({
            product: s,
            analyticsLocations: Y
          })
        }
      } : {
        onClick: () => (0, _.Z)({
          skuId: s.skuId,
          analyticsLocations: Y,
          returnRef: z
        })
      };
      return (0, n.jsxs)("div", {
        className: w.buttonsContainer,
        children: [el ? null : er ? (0, n.jsx)(G, {
          disabled: eo,
          onClick: eE,
          children: H.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(G, {
          disabled: eo,
          className: w.purchaseButton,
          ...e,
          children: en ? H.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : H.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }), eI()]
      })
    },
    ex = ec ? "0 0 15px 1px ".concat(C.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, A.x6)(s) && null != et && et.discountPercentage < 0 ? null : (0, n.jsx)(f.FocusRing, {
    children: (0, n.jsxs)(f.Clickable, {
      innerRef: z,
      className: l()(w.shopCard, w.shopCardAnimation, {
        [w.partiallyOwned]: el
      }),
      onBlur: () => q(!1),
      onClick: em,
      style: null != J ? {
        backgroundColor: ec ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: Q ? ex : "none"
      } : void 0,
      id: "shop-item-".concat(s.skuId),
      children: [en && (0, n.jsx)(f.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: H.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(f.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, n.jsx)(f.NitroWheelIcon, {
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
        children: (0, n.jsx)(f.CheckmarkBoldIcon, {
          size: "custom",
          color: "currentColor",
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, n.jsxs)("div", {
        className: l()(w.cardText, {
          [w.cardTextBlur]: (null == $ ? void 0 : $.type) === u.Z.PROFILE_EFFECT
        }),
        children: [(0, n.jsx)("div", {
          className: l()(w.cardBackground, ec ? w.darkCardBackground : w.lightCardBackground, (null == $ ? void 0 : $.type) === u.Z.PROFILE_EFFECT ? w.cardLowOpacity : null)
        }), (0, n.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: w.productName,
          children: s.name
        }), (0, n.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: el ? void 0 : w.innerBlur,
            children: eh()
          }), (0, n.jsx)("div", {
            className: w.innerHover,
            children: e_()
          })]
        })]
      }), (0, n.jsx)(P.Z, {
        category: r,
        className: w.limitedTimeBadge,
        display: "card"
      }), eu && !el && !er && (0, n.jsx)(f.TextBadge, {
        text: H.Z.Messages.NEW,
        disableColor: !0,
        className: w.newBadge
      })]
    })
  })
}