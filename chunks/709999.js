"use strict";
n(47120), n(627341);
var r = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  s = n(512722),
  c = n.n(s),
  l = n(278074),
  d = n(979554),
  u = n(399606),
  p = n(692547),
  f = n(663002),
  g = n(481060),
  _ = n(37234),
  C = n(727637),
  b = n(607070),
  m = n(100527),
  h = n(906732),
  x = n(1585),
  I = n(333867),
  E = n(197115),
  v = n(300284),
  S = n(876917),
  T = n(642619),
  L = n(210887),
  N = n(74538),
  O = n(335131),
  j = n(1870),
  B = n(884697),
  R = n(724994),
  k = n(624377),
  A = n(390698),
  P = n(813083),
  Z = n(680942),
  y = n(558060),
  M = n(237031),
  w = n(616066),
  D = n(216541),
  F = n(832149),
  H = n(474936),
  U = n(689938),
  W = n(246318);
let G = e => {
    let {
      children: t,
      onClick: n,
      ...a
    } = e;
    return (0, r.jsx)(g.Button, {
      fullWidth: !0,
      look: g.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), n()
      },
      ...a,
      children: t
    })
  },
  V = e => {
    let {
      className: t,
      ...n
    } = e;
    return (0, r.jsx)(g.Button, {
      color: g.ButtonColors.BRAND,
      look: g.Button.Looks.FILLED,
      size: g.ButtonSizes.ICON,
      className: o()(W.previewButton, t),
      innerClassName: W.previewButtonInner,
      "aria-label": U.Z.Messages.PREVIEW,
      ...n,
      children: (0, r.jsx)(g.EyeIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  };
t.Z = function(e) {
  let {
    product: t,
    user: n,
    category: i,
    onMount: s,
    isGiftEasterEggEnabled: z
  } = e, {
    analyticsLocations: Y
  } = (0, h.ZP)(m.Z.COLLECTIBLES_SHOP_CARD), K = a.useRef(null), X = (0, C.Z)(K), [q, $] = a.useState(!1), J = X || q, [Q] = t.items, ee = (0, u.e7)([b.Z], () => b.Z.useReducedMotion), {
    backgroundColors: et
  } = (0, k.Z)(t.styles), en = N.ZP.canUseCollectibles(n), er = (0, B.XM)(t, en, !1), ea = a.useMemo(() => (0, B.BH)(t, en), [t, en]), ei = (0, B.G1)(t), eo = (0, B.rN)(t), {
    isPurchased: es,
    isPartiallyPurchased: ec
  } = (0, R.L)(t), [el, ed] = (0, u.Wu)([j.Z], () => [j.Z.isClaiming === t.skuId, null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId]), eu = (0, u.e7)([L.Z], () => (0, f.w)(L.Z.theme)), ep = (0, B.Yq)(t.skuId);
  a.useEffect(() => {
    let {
      current: e
    } = K;
    if (null == e) return;
    let t = () => $(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), a.useEffect(() => {
    null == s || s(K)
  }, [s]);
  let ef = (0, v.Z)({
      analyticsLocations: Y
    }),
    eg = a.useRef(null),
    e_ = () => {
      if ((0, _.xf)(), ef(), t.type === d.Z.AVATAR_DECORATION && null != Q) {
        c()(Q.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, x.ps)({
          initialSelectedDecoration: Q,
          analyticsLocations: Y
        });
        return
      }
      t.type === d.Z.PROFILE_EFFECT && (0, T.H)({
        initialSelectedEffectId: Q.id,
        analyticsLocations: Y
      })
    },
    eC = e => n => {
      eg.current = n.currentTarget, (0, M.T)({
        product: t,
        category: i,
        analyticsLocations: Y,
        analyticsSource: e,
        returnRef: eg
      })
    },
    eb = eC(m.Z.COLLECTIBLES_SHOP_CARD),
    em = eC(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eh = () => (0, r.jsx)("div", {
      className: W.hoverUpsellContainer,
      children: (0, r.jsx)(E.Z, {
        fullWidth: !0,
        className: W.__invalid_premiumSubscribeButton,
        disabled: ed,
        onClick: e => e.stopPropagation(),
        buttonText: U.Z.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: H.Si.TIER_2
      })
    }),
    ex = () => es || ec ? (0, r.jsx)(A.U, {
      className: W.priceTag,
      isPartiallyPurchased: ec
    }) : ei ? (0, r.jsx)(g.Text, {
      variant: "text-md/semibold",
      className: W.priceTag,
      children: U.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, r.jsx)(y.Z, {
      product: t,
      discount: ea,
      isPremiumUser: en,
      className: W.priceTag
    }),
    eI = () => ei ? null : eo ? (0, r.jsx)(V, {
      onClick: em
    }) : (0, r.jsx)(Z.Z, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: z,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eE = () => {
      if (ei && !en && !eo) return eh();
      let e = ei ? {
        submitting: el,
        submittingStartedLabel: U.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: U.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, O.fK)(t.skuId), (0, F.Z)({
            product: t,
            analyticsLocations: Y
          })
        }
      } : {
        onClick: () => (0, I.Z)({
          skuId: t.skuId,
          analyticsLocations: Y,
          returnRef: K
        })
      };
      return (0, r.jsxs)("div", {
        className: W.buttonsContainer,
        children: [ec ? null : es ? (0, r.jsx)(G, {
          disabled: ed,
          onClick: e_,
          children: U.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, r.jsx)(G, {
          disabled: ed,
          className: W.purchaseButton,
          ...e,
          children: ei ? U.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : U.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: er
          })
        }), eI()]
      })
    },
    ev = eu ? "0 0 15px 1px ".concat(p.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, B.x6)(t) && null != ea && ea.discountPercentage < 0 ? null : (0, r.jsx)(g.FocusRing, {
    children: (0, r.jsxs)(g.Clickable, {
      innerRef: K,
      className: o()(W.shopCard, {
        [W.partiallyOwned]: ec,
        [W.shopCardAnimation]: !ee
      }),
      onBlur: () => $(!1),
      onClick: eb,
      style: null != et ? {
        backgroundColor: eu ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: J ? ev : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [ei && (0, r.jsx)(g.Tooltip, {
        tooltipContentClassName: W.premiumWheelTooltipContent,
        color: g.Tooltip.Colors.PRIMARY,
        text: U.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, r.jsx)(g.TextBadge, {
          ...e,
          className: W.premiumWheelBadge,
          text: (0, r.jsx)(g.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: W.premiumWheel
          })
        })
      }), (0, r.jsx)("div", {
        className: W.preview,
        children: (0, l.EQ)(t.type).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
          className: W.profileEffectShopPreview,
          children: (0, r.jsx)(S.Z, {
            isHovering: J,
            profileEffectId: Q.id,
            isPurchased: es,
            removeSetHeight: !0
          })
        })).with(d.Z.AVATAR_DECORATION, () => (c()(Q.type === d.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, r.jsx)("div", {
          className: W.avatarContainer,
          children: (0, r.jsx)(w.R, {
            item: Q,
            user: n,
            isPurchased: es,
            isHighlighted: J
          })
        }))).with(d.Z.BUNDLE, () => (0, r.jsx)(D.d, {
          product: t,
          user: n,
          isPurchased: es,
          isHighlighted: J
        })).otherwise(() => null)
      }), es ? (0, r.jsx)("div", {
        className: W.checkmarkWrapper,
        children: (0, r.jsx)(g.CheckmarkBoldIcon, {
          size: "custom",
          color: "currentColor",
          width: 38,
          height: 38,
          className: W.checkmark
        })
      }) : null, (0, r.jsxs)("div", {
        className: o()(W.cardText, {
          [W.cardTextBlur]: (null == Q ? void 0 : Q.type) === d.Z.PROFILE_EFFECT
        }),
        children: [(0, r.jsx)("div", {
          className: o()(W.cardBackground, eu ? W.darkCardBackground : W.lightCardBackground, (null == Q ? void 0 : Q.type) === d.Z.PROFILE_EFFECT ? W.cardLowOpacity : null)
        }), (0, r.jsx)(g.Text, {
          variant: "text-lg/bold",
          className: W.productName,
          children: t.name
        }), (0, r.jsxs)("div", {
          className: W.detailsWrapper,
          children: [(0, r.jsx)("div", {
            className: ec ? void 0 : W.innerBlur,
            children: ex()
          }), (0, r.jsx)("div", {
            className: W.innerHover,
            children: eE()
          })]
        })]
      }), (0, r.jsx)(P.Z, {
        category: i,
        className: W.limitedTimeBadge,
        display: "card"
      }), ep && !ec && !es && (0, r.jsx)(g.TextBadge, {
        text: U.Z.Messages.NEW,
        disableColor: !0,
        className: W.newBadge
      })]
    })
  })
}