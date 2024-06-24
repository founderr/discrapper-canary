"use strict";
s(47120), s(627341);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  l = s(512722),
  o = s.n(l),
  c = s(278074),
  u = s(979554),
  d = s(399606),
  C = s(692547),
  f = s(663002),
  p = s(481060),
  E = s(37234),
  g = s(727637),
  m = s(100527),
  h = s(906732),
  x = s(1585),
  I = s(333867),
  _ = s(197115),
  L = s(300284),
  T = s(876917),
  S = s(642619),
  N = s(210887),
  b = s(74538),
  v = s(335131),
  O = s(1870),
  A = s(884697),
  Z = s(724994),
  R = s(624377),
  j = s(390698),
  P = s(813083),
  M = s(680942),
  k = s(558060),
  B = s(237031),
  y = s(616066),
  F = s(216541),
  D = s(832149),
  U = s(474936),
  H = s(689938),
  w = s(246318);
let G = e => {
    let {
      children: t,
      onClick: s,
      ...r
    } = e;
    return (0, n.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), s()
      },
      ...r,
      children: t
    })
  },
  W = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, n.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: i()(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": H.Z.Messages.PREVIEW,
      ...s,
      children: (0, n.jsx)(p.EyeIcon, {
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
    onMount: l,
    isGiftEasterEggEnabled: V
  } = e, {
    analyticsLocations: Y
  } = (0, h.ZP)(m.Z.COLLECTIBLES_SHOP_CARD), z = r.useRef(null), K = (0, g.Z)(z), [X, q] = r.useState(!1), Q = K || X, [$] = t.items, {
    backgroundColors: J
  } = (0, R.Z)(t.styles), ee = b.ZP.canUseCollectibles(s), et = (0, A.XM)(t, ee, !1), es = r.useMemo(() => (0, A.BH)(t, ee), [t, ee]), en = (0, A.G1)(t), er = (0, A.rN)(t), {
    isPurchased: ea,
    isPartiallyPurchased: ei
  } = (0, Z.L)(t), [el, eo] = (0, d.Wu)([O.Z], () => [O.Z.isClaiming === t.skuId, null != O.Z.isClaiming && O.Z.isClaiming !== t.skuId]), ec = (0, d.e7)([N.Z], () => (0, f.w)(N.Z.theme)), eu = (0, A.Yq)(t.skuId);
  r.useEffect(() => {
    let {
      current: e
    } = z;
    if (null == e) return;
    let t = () => q(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), r.useEffect(() => {
    null == l || l(z)
  }, [l]);
  let ed = (0, L.Z)({
      analyticsLocations: Y
    }),
    eC = r.useRef(null),
    ef = () => {
      if ((0, E.xf)(), ed(), t.type === u.Z.AVATAR_DECORATION && null != $) {
        o()($.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, x.ps)({
          initialSelectedDecoration: $,
          analyticsLocations: Y
        });
        return
      }
      t.type === u.Z.PROFILE_EFFECT && (0, S.H)({
        initialSelectedEffectId: $.id,
        analyticsLocations: Y
      })
    },
    ep = e => s => {
      eC.current = s.currentTarget, (0, B.T)({
        product: t,
        category: a,
        analyticsLocations: Y,
        analyticsSource: e,
        returnRef: eC
      })
    },
    eE = ep(m.Z.COLLECTIBLES_SHOP_CARD),
    eg = ep(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
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
    eh = () => ea || ei ? (0, n.jsx)(j.U, {
      className: w.priceTag,
      isPartiallyPurchased: ei
    }) : en ? (0, n.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: w.priceTag,
      children: H.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(k.Z, {
      product: t,
      discount: es,
      isPremiumUser: ee,
      className: w.priceTag
    }),
    ex = () => en ? null : er ? (0, n.jsx)(W, {
      onClick: eg
    }) : (0, n.jsx)(M.Z, {
      product: t,
      returnRef: z,
      isGiftEasterEggEnabled: V,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eI = () => {
      if (en && !ee && !er) return em();
      let e = en ? {
        submitting: el,
        submittingStartedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, v.fK)(t.skuId), (0, D.Z)({
            product: t,
            analyticsLocations: Y
          })
        }
      } : {
        onClick: () => (0, I.Z)({
          skuId: t.skuId,
          analyticsLocations: Y,
          returnRef: z
        })
      };
      return (0, n.jsxs)("div", {
        className: w.buttonsContainer,
        children: [ei ? null : ea ? (0, n.jsx)(G, {
          disabled: eo,
          onClick: ef,
          children: H.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(G, {
          disabled: eo,
          className: w.purchaseButton,
          ...e,
          children: en ? H.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : H.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: et
          })
        }), ex()]
      })
    },
    e_ = ec ? "0 0 15px 1px ".concat(C.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, A.x6)(t) && null != es && es.discountPercentage < 0 ? null : (0, n.jsx)(p.FocusRing, {
    children: (0, n.jsxs)(p.Clickable, {
      innerRef: z,
      className: i()(w.shopCard, w.shopCardAnimation, {
        [w.partiallyOwned]: ei
      }),
      onBlur: () => q(!1),
      onClick: eE,
      style: null != J ? {
        backgroundColor: ec ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: Q ? e_ : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [en && (0, n.jsx)(p.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: H.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(p.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, n.jsx)(p.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: w.premiumWheel
          })
        })
      }), (0, n.jsx)("div", {
        className: w.preview,
        children: (0, c.EQ)(t.type).with(u.Z.PROFILE_EFFECT, () => (0, n.jsx)("div", {
          className: w.profileEffectShopPreview,
          children: (0, n.jsx)(T.Z, {
            isHovering: Q,
            profileEffectId: $.id,
            isPurchased: ea,
            removeSetHeight: !0
          })
        })).with(u.Z.AVATAR_DECORATION, () => (o()($.type === u.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, n.jsx)("div", {
          className: w.avatarContainer,
          children: (0, n.jsx)(y.R, {
            item: $,
            user: s,
            isPurchased: ea,
            isHighlighted: Q
          })
        }))).with(u.Z.BUNDLE, () => (0, n.jsx)(F.d, {
          product: t,
          user: s,
          isPurchased: ea,
          isHighlighted: Q
        })).otherwise(() => null)
      }), ea ? (0, n.jsx)("div", {
        className: w.checkmarkWrapper,
        children: (0, n.jsx)(p.CheckmarkBoldIcon, {
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
        }), (0, n.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: w.productName,
          children: t.name
        }), (0, n.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: ei ? void 0 : w.innerBlur,
            children: eh()
          }), (0, n.jsx)("div", {
            className: w.innerHover,
            children: eI()
          })]
        })]
      }), (0, n.jsx)(P.Z, {
        category: a,
        className: w.limitedTimeBadge,
        display: "card"
      }), eu && !ei && !ea && (0, n.jsx)(p.TextBadge, {
        text: H.Z.Messages.NEW,
        disableColor: !0,
        className: w.newBadge
      })]
    })
  })
}