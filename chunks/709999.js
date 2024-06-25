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
  g = s(37234),
  E = s(727637),
  m = s(607070),
  h = s(100527),
  x = s(906732),
  I = s(1585),
  _ = s(333867),
  T = s(197115),
  L = s(300284),
  N = s(876917),
  S = s(642619),
  b = s(210887),
  v = s(74538),
  O = s(335131),
  Z = s(1870),
  A = s(884697),
  R = s(724994),
  j = s(624377),
  P = s(390698),
  M = s(813083),
  k = s(680942),
  y = s(558060),
  B = s(237031),
  F = s(616066),
  D = s(216541),
  U = s(832149),
  H = s(474936),
  w = s(689938),
  G = s(246318);
let W = e => {
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
  V = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, n.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: i()(G.previewButton, t),
      innerClassName: G.previewButtonInner,
      "aria-label": w.Z.Messages.PREVIEW,
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
    isGiftEasterEggEnabled: Y
  } = e, {
    analyticsLocations: z
  } = (0, x.ZP)(h.Z.COLLECTIBLES_SHOP_CARD), K = r.useRef(null), X = (0, E.Z)(K), [q, Q] = r.useState(!1), $ = X || q, [J] = t.items, ee = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), {
    backgroundColors: et
  } = (0, j.Z)(t.styles), es = v.ZP.canUseCollectibles(s), en = (0, A.XM)(t, es, !1), er = r.useMemo(() => (0, A.BH)(t, es), [t, es]), ea = (0, A.G1)(t), ei = (0, A.rN)(t), {
    isPurchased: el,
    isPartiallyPurchased: eo
  } = (0, R.L)(t), [ec, eu] = (0, d.Wu)([Z.Z], () => [Z.Z.isClaiming === t.skuId, null != Z.Z.isClaiming && Z.Z.isClaiming !== t.skuId]), ed = (0, d.e7)([b.Z], () => (0, f.w)(b.Z.theme)), eC = (0, A.Yq)(t.skuId);
  r.useEffect(() => {
    let {
      current: e
    } = K;
    if (null == e) return;
    let t = () => Q(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), r.useEffect(() => {
    null == l || l(K)
  }, [l]);
  let ef = (0, L.Z)({
      analyticsLocations: z
    }),
    ep = r.useRef(null),
    eg = () => {
      if ((0, g.xf)(), ef(), t.type === u.Z.AVATAR_DECORATION && null != J) {
        o()(J.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, I.ps)({
          initialSelectedDecoration: J,
          analyticsLocations: z
        });
        return
      }
      t.type === u.Z.PROFILE_EFFECT && (0, S.H)({
        initialSelectedEffectId: J.id,
        analyticsLocations: z
      })
    },
    eE = e => s => {
      ep.current = s.currentTarget, (0, B.T)({
        product: t,
        category: a,
        analyticsLocations: z,
        analyticsSource: e,
        returnRef: ep
      })
    },
    em = eE(h.Z.COLLECTIBLES_SHOP_CARD),
    eh = eE(h.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ex = () => (0, n.jsx)("div", {
      className: G.hoverUpsellContainer,
      children: (0, n.jsx)(T.Z, {
        fullWidth: !0,
        className: G.__invalid_premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: w.Z.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: H.Si.TIER_2
      })
    }),
    eI = () => el || eo ? (0, n.jsx)(P.U, {
      className: G.priceTag,
      isPartiallyPurchased: eo
    }) : ea ? (0, n.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: G.priceTag,
      children: w.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(y.Z, {
      product: t,
      discount: er,
      isPremiumUser: es,
      className: G.priceTag
    }),
    e_ = () => ea ? null : ei ? (0, n.jsx)(V, {
      onClick: eh
    }) : (0, n.jsx)(k.Z, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: Y,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eT = () => {
      if (ea && !es && !ei) return ex();
      let e = ea ? {
        submitting: ec,
        submittingStartedLabel: w.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: w.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, O.fK)(t.skuId), (0, U.Z)({
            product: t,
            analyticsLocations: z
          })
        }
      } : {
        onClick: () => (0, _.Z)({
          skuId: t.skuId,
          analyticsLocations: z,
          returnRef: K
        })
      };
      return (0, n.jsxs)("div", {
        className: G.buttonsContainer,
        children: [eo ? null : el ? (0, n.jsx)(W, {
          disabled: eu,
          onClick: eg,
          children: w.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(W, {
          disabled: eu,
          className: G.purchaseButton,
          ...e,
          children: ea ? w.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : w.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: en
          })
        }), e_()]
      })
    },
    eL = ed ? "0 0 15px 1px ".concat(C.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, A.x6)(t) && null != er && er.discountPercentage < 0 ? null : (0, n.jsx)(p.FocusRing, {
    children: (0, n.jsxs)(p.Clickable, {
      innerRef: K,
      className: i()(G.shopCard, {
        [G.partiallyOwned]: eo,
        [G.shopCardAnimation]: !ee
      }),
      onBlur: () => Q(!1),
      onClick: em,
      style: null != et ? {
        backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: $ ? eL : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [ea && (0, n.jsx)(p.Tooltip, {
        tooltipContentClassName: G.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: w.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(p.TextBadge, {
          ...e,
          className: G.premiumWheelBadge,
          text: (0, n.jsx)(p.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: G.premiumWheel
          })
        })
      }), (0, n.jsx)("div", {
        className: G.preview,
        children: (0, c.EQ)(t.type).with(u.Z.PROFILE_EFFECT, () => (0, n.jsx)("div", {
          className: G.profileEffectShopPreview,
          children: (0, n.jsx)(N.Z, {
            isHovering: $,
            profileEffectId: J.id,
            isPurchased: el,
            removeSetHeight: !0
          })
        })).with(u.Z.AVATAR_DECORATION, () => (o()(J.type === u.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, n.jsx)("div", {
          className: G.avatarContainer,
          children: (0, n.jsx)(F.R, {
            item: J,
            user: s,
            isPurchased: el,
            isHighlighted: $
          })
        }))).with(u.Z.BUNDLE, () => (0, n.jsx)(D.d, {
          product: t,
          user: s,
          isPurchased: el,
          isHighlighted: $
        })).otherwise(() => null)
      }), el ? (0, n.jsx)("div", {
        className: G.checkmarkWrapper,
        children: (0, n.jsx)(p.CheckmarkBoldIcon, {
          size: "custom",
          color: "currentColor",
          width: 38,
          height: 38,
          className: G.checkmark
        })
      }) : null, (0, n.jsxs)("div", {
        className: i()(G.cardText, {
          [G.cardTextBlur]: (null == J ? void 0 : J.type) === u.Z.PROFILE_EFFECT
        }),
        children: [(0, n.jsx)("div", {
          className: i()(G.cardBackground, ed ? G.darkCardBackground : G.lightCardBackground, (null == J ? void 0 : J.type) === u.Z.PROFILE_EFFECT ? G.cardLowOpacity : null)
        }), (0, n.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: G.productName,
          children: t.name
        }), (0, n.jsxs)("div", {
          className: G.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: eo ? void 0 : G.innerBlur,
            children: eI()
          }), (0, n.jsx)("div", {
            className: G.innerHover,
            children: eT()
          })]
        })]
      }), (0, n.jsx)(M.Z, {
        category: a,
        className: G.limitedTimeBadge,
        display: "card"
      }), eC && !eo && !el && (0, n.jsx)(p.TextBadge, {
        text: w.Z.Messages.NEW,
        disableColor: !0,
        className: G.newBadge
      })]
    })
  })
}