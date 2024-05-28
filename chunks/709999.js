"use strict";
a.r(t), a("47120"), a("627341");
var s = a("735250"),
  r = a("470079"),
  n = a("120356"),
  l = a.n(n),
  o = a("512722"),
  i = a.n(o),
  c = a("278074"),
  u = a("979554"),
  d = a("399606"),
  f = a("692547"),
  C = a("663002"),
  p = a("481060"),
  m = a("37234"),
  g = a("727637"),
  E = a("100527"),
  b = a("906732"),
  h = a("1585"),
  S = a("333867"),
  T = a("197115"),
  v = a("300284"),
  y = a("876917"),
  x = a("642619"),
  _ = a("210887"),
  I = a("594174"),
  L = a("725808"),
  A = a("794358"),
  N = a("466111"),
  P = a("26290"),
  R = a("335131"),
  O = a("1870"),
  k = a("884697"),
  M = a("724994"),
  j = a("624377"),
  B = a("390698"),
  D = a("813083"),
  F = a("680942"),
  w = a("558060"),
  H = a("237031"),
  U = a("616066"),
  G = a("216541"),
  W = a("832149"),
  Y = a("474936"),
  V = a("689938"),
  K = a("775087");
let z = e => {
    let {
      children: t,
      onClick: a,
      ...r
    } = e;
    return (0, s.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...r,
      children: t
    })
  },
  Z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, s.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: l()(K.previewButton, t),
      innerClassName: K.previewButtonInner,
      "aria-label": V.default.Messages.PREVIEW,
      ...a,
      children: (0, s.jsx)(A.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    category: a,
    onMount: n,
    isPremiumUser: o = !1,
    isGiftEasterEggEnabled: A
  } = e, {
    analyticsLocations: X
  } = (0, b.default)(E.default.COLLECTIBLES_SHOP_CARD), q = r.useRef(null), Q = (0, g.default)(q), [J, $] = r.useState(!1), ee = Q || J, et = (0, d.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [ea] = t.items, {
    backgroundColors: es
  } = (0, j.default)(t.styles), er = (0, k.getFormattedPriceForCollectiblesProduct)(t, o, !1), en = (0, k.isPremiumCollectiblesProduct)(t), el = (0, k.isFreeCollectiblesProduct)(t), {
    isPurchased: eo,
    isPartiallyPurchased: ei
  } = (0, M.useProductPurchaseState)(t), [ec, eu] = (0, d.useStateFromStoresArray)([O.default], () => [O.default.isClaiming === t.skuId, null != O.default.isClaiming && O.default.isClaiming !== t.skuId]), ed = (0, d.useStateFromStores)([_.default], () => (0, C.isThemeDark)(_.default.theme)), ef = (0, k.isProductNew)(t.skuId);
  r.useEffect(() => {
    let {
      current: e
    } = q;
    if (null == e) return;
    let t = () => $(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), r.useEffect(() => {
    null == n || n(q)
  }, [n]);
  let eC = (0, v.default)({
      analyticsLocations: X
    }),
    ep = r.useRef(null),
    em = () => {
      if ((0, m.popLayer)(), eC(), t.type === u.CollectiblesItemType.AVATAR_DECORATION && null != ea) {
        i()(ea.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: ea,
          analyticsLocations: X
        });
        return
      }
      t.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, x.openProfileEffectModal)({
        initialSelectedEffectId: ea.id,
        analyticsLocations: X
      })
    },
    eg = e => s => {
      ep.current = s.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: X,
        analyticsSource: e,
        returnRef: ep
      })
    },
    eE = eg(E.default.COLLECTIBLES_SHOP_CARD),
    eb = eg(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eh = () => (0, s.jsx)("div", {
      className: K.hoverUpsellContainer,
      children: (0, s.jsx)(T.default, {
        fullWidth: !0,
        className: K.__invalid_premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: V.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    eS = () => eo || ei ? (0, s.jsx)(B.AlreadyOwned, {
      className: K.priceTag,
      isPartiallyPurchased: ei
    }) : en ? (0, s.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: K.priceTag,
      children: V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, s.jsx)(w.default, {
      product: t,
      className: K.priceTag
    }),
    eT = () => en ? null : el ? (0, s.jsx)(Z, {
      onClick: eb
    }) : (0, s.jsx)(F.default, {
      product: t,
      returnRef: q,
      isGiftEasterEggEnabled: A,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    ev = () => {
      if (en && !o && !el) return eh();
      let e = en ? {
        submitting: ec,
        submittingStartedLabel: V.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: V.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, R.claimPremiumCollectiblesProduct)(t.skuId), (0, W.default)({
            product: t,
            analyticsLocations: X
          })
        }
      } : {
        onClick: () => (0, S.default)({
          skuId: t.skuId,
          analyticsLocations: X,
          returnRef: q
        })
      };
      return (0, s.jsxs)("div", {
        className: K.buttonsContainer,
        children: [ei ? null : eo ? (0, s.jsx)(z, {
          disabled: eu,
          onClick: em,
          children: V.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, s.jsx)(z, {
          disabled: eu,
          className: K.purchaseButton,
          ...e,
          children: en ? V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: er
          })
        }), eT()]
      })
    },
    ey = ed ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, s.jsx)(p.FocusRing, {
    children: (0, s.jsxs)(p.Clickable, {
      innerRef: q,
      className: l()(K.shopCard, K.shopCardAnimation),
      onBlur: () => $(!1),
      onClick: eE,
      style: null != es ? {
        backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: ee ? ey : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [en && (0, s.jsx)(p.Tooltip, {
        tooltipContentClassName: K.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: V.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, s.jsx)(P.TextBadge, {
          ...e,
          className: K.premiumWheelBadge,
          text: (0, s.jsx)(N.default, {
            className: K.premiumWheel
          })
        })
      }), (0, c.match)(t.type).with(u.CollectiblesItemType.PROFILE_EFFECT, () => (0, s.jsx)("div", {
        className: K.profileEffectShopPreview,
        children: (0, s.jsx)(y.default, {
          isHovering: ee,
          profileEffectId: ea.id,
          isPurchased: eo,
          removeSetHeight: !0
        })
      })).with(u.CollectiblesItemType.AVATAR_DECORATION, () => (i()(ea.type === u.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, s.jsx)("div", {
        className: K.avatarContainer,
        children: (0, s.jsx)(U.AvatarDecorationPreview, {
          item: ea,
          user: et,
          isPurchased: eo,
          isHighlighted: ee
        })
      }))).with(u.CollectiblesItemType.BUNDLE, () => (0, s.jsx)(G.BundlePreview, {
        product: t,
        user: et,
        isPurchased: eo,
        isHighlighted: ee
      })).otherwise(() => null), eo ? (0, s.jsx)("div", {
        className: K.checkmarkWrapper,
        children: (0, s.jsx)(L.default, {
          width: 38,
          height: 38,
          className: K.checkmark
        })
      }) : null, (0, s.jsxs)("div", {
        className: l()(K.cardText, {
          [K.cardTextBlur]: (null == ea ? void 0 : ea.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, s.jsx)("div", {
          className: l()(K.cardBackground, ed ? K.darkCardBackground : K.lightCardBackground, (null == ea ? void 0 : ea.type) === u.CollectiblesItemType.PROFILE_EFFECT ? K.cardLowOpacity : null)
        }), (0, s.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: K.productName,
          children: t.name
        }), (0, s.jsxs)("div", {
          className: K.detailsWrapper,
          children: [(0, s.jsx)("div", {
            className: ei ? void 0 : K.innerBlur,
            children: eS()
          }), (0, s.jsx)("div", {
            className: K.innerHover,
            children: ev()
          })]
        })]
      }), (0, s.jsx)(D.default, {
        category: a,
        className: K.limitedTimeBadge,
        display: "card"
      }), ef && (0, s.jsx)(P.TextBadge, {
        text: V.default.Messages.NEW,
        disableColor: !0,
        className: K.newBadge
      })]
    })
  })
}