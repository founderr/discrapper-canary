s(47120), s(627341);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(512722),
  l = s.n(i),
  c = s(278074),
  d = s(873546),
  u = s(979554),
  p = s(399606),
  g = s(692547),
  f = s(663002),
  C = s(481060),
  m = s(37234),
  _ = s(727637),
  h = s(607070),
  b = s(100527),
  x = s(906732),
  I = s(1585),
  E = s(333867),
  L = s(197115),
  S = s(300284),
  v = s(876917),
  T = s(642619),
  N = s(210887),
  O = s(74538),
  j = s(335131),
  Z = s(1870),
  k = s(884697),
  R = s(890249),
  A = s(635552),
  P = s(724994),
  B = s(624377),
  M = s(390698),
  y = s(813083),
  w = s(680942),
  F = s(558060),
  D = s(237031),
  H = s(616066),
  U = s(216541),
  G = s(832149),
  W = s(474936),
  V = s(689938),
  z = s(445968);
let Y = e => {
let {
  children: t,
  onClick: s,
  ...r
} = e;
return (0, n.jsx)(C.Button, {
  fullWidth: !0,
  look: C.Button.Looks.FILLED,
  onClick: e => {
    e.stopPropagation(), s();
  },
  ...r,
  children: t
});
  },
  K = e => {
let {
  className: t,
  ...s
} = e;
return (0, n.jsx)(C.Button, {
  color: C.ButtonColors.BRAND,
  look: C.Button.Looks.FILLED,
  size: C.ButtonSizes.ICON,
  className: o()(z.previewButton, t),
  innerClassName: z.previewButtonInner,
  'aria-label': V.Z.Messages.PREVIEW,
  ...s,
  children: (0, n.jsx)(C.EyeIcon, {
    size: 'md',
    color: 'currentColor'
  })
});
  };
t.Z = function(e) {
  let {
product: t,
user: s,
category: a,
onMount: i,
isGiftEasterEggEnabled: X,
isPopularPicksRow: q
  } = e, {
analyticsLocations: $
  } = (0, x.ZP)([
...q ? [b.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : [],
b.Z.COLLECTIBLES_SHOP_CARD
  ]), J = r.useRef(null), Q = (0, _.Z)(J), [ee, et] = r.useState(!1), es = Q || ee, [en] = t.items, er = (0, p.e7)([h.Z], () => h.Z.useReducedMotion), {
backgroundColors: ea
  } = (0, B.Z)(t.styles), eo = O.ZP.canUseCollectibles(s), ei = (0, k.XM)(t, eo, !1), el = r.useMemo(() => (0, k.BH)(t, eo), [
t,
eo
  ]), ec = (0, k.G1)(t), ed = (0, k.rN)(t), {
isPurchased: eu,
isPartiallyPurchased: ep
  } = (0, P.L)(t), [eg, ef] = (0, p.Wu)([Z.Z], () => [
Z.Z.isClaiming === t.skuId,
null != Z.Z.isClaiming && Z.Z.isClaiming !== t.skuId
  ]), eC = (0, p.e7)([N.Z], () => (0, f.w)(N.Z.theme)), em = (0, R.m)('CollectiblesCollectedModal'), e_ = (0, k.x6)(t) || em, eh = (0, k.Yq)(t.skuId);
  r.useEffect(() => {
let {
  current: e
} = J;
if (null == e)
  return;
let t = () => et(!0);
return e.addEventListener('focusin', t), e.blur(), () => {
  e.removeEventListener('focusin', t);
};
  }, []), r.useEffect(() => {
null == i || i(J);
  }, [i]);
  let eb = (0, S.Z)({
  analyticsLocations: $
}),
ex = r.useRef(null),
{
  handleUseNow: eI,
  isApplying: eE
} = (0, A.W)({
  product: t
}),
eL = () => {
  if ((0, m.xf)(), eb(), t.type === u.Z.AVATAR_DECORATION && null != en) {
    l()(en.type === t.type, 'product type is equivlant to first item\'s check for avatar deco'), (0, I.ps)({
      initialSelectedDecoration: en,
      analyticsLocations: $
    });
    return;
  }
  t.type === u.Z.PROFILE_EFFECT && (0, T.H)({
    initialSelectedEffectId: en.id,
    analyticsLocations: $
  });
},
eS = e => s => {
  ex.current = s.currentTarget, (0, D.T)({
    product: t,
    category: a,
    analyticsLocations: $,
    analyticsSource: e,
    returnRef: ex
  });
},
ev = eS(b.Z.COLLECTIBLES_SHOP_CARD),
eT = eS(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
eN = () => (0, n.jsx)('div', {
  className: z.hoverUpsellContainer,
  children: (0, n.jsx)(L.Z, {
    fullWidth: !0,
    className: z.__invalid_premiumSubscribeButton,
    disabled: ef,
    onClick: e => e.stopPropagation(),
    buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
    subscriptionTier: W.Si.TIER_2
  })
}),
eO = () => eu || ep ? (0, n.jsx)(M.U, {
  className: z.priceTag,
  isPartiallyPurchased: ep
}) : ec ? (0, n.jsx)(C.Text, {
  variant: 'text-md/semibold',
  className: z.priceTag,
  children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
}) : (0, n.jsx)(F.Z, {
  product: t,
  discount: el,
  isPremiumUser: eo,
  className: z.priceTag
}),
ej = () => ec || d.tq ? null : ed ? (0, n.jsx)(K, {
  onClick: eT
}) : (0, n.jsx)(w.Z, {
  product: t,
  returnRef: J,
  isGiftEasterEggEnabled: X,
  disableCustomColor: !0,
  tooltipDelay: 250
}),
eZ = () => {
  if (ec && !eo && !ed)
    return eN();
  let e = ec ? {
    submitting: eg,
    submittingStartedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING,
    submittingFinishedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
    onClick: async () => {
      await (0, j.fK)(t.skuId), (0, G.Z)({
        product: t,
        analyticsLocations: $
      });
    }
  } : {
    onClick: () => (0, E.Z)({
      skuId: t.skuId,
      analyticsLocations: $,
      returnRef: J
    })
  };
  return (0, n.jsxs)('div', {
    className: z.buttonsContainer,
    children: [
      ep ? null : eu ? (0, n.jsx)(Y, {
        disabled: ef,
        onClick: e_ ? eI : eL,
        submitting: eE,
        children: V.Z.Messages.COLLECTIBLES_USE_NOW
      }) : (0, n.jsx)(Y, {
        disabled: ef,
        className: z.purchaseButton,
        ...e,
        children: ec ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({
          price: ei
        })
      }),
      ej()
    ]
  });
},
ek = eC ? '0 0 15px 1px '.concat(g.Z.unsafe_rawColors.PRIMARY_700.css) : 'var(--elevation-high)';
  return (0, k.x6)(t) && null != el && el.discountPercentage < 0 ? null : (0, n.jsx)(C.FocusRing, {
children: (0, n.jsxs)(C.Clickable, {
  innerRef: J,
  className: o()(z.shopCard, {
    [z.partiallyOwned]: ep,
    [z.shopCardAnimation]: !er
  }),
  onBlur: () => et(!1),
  onClick: ev,
  style: null != ea ? {
    backgroundColor: eC ? 'var(--background-floating)' : 'var(--background-secondary)',
    borderColor: 'var(--chat-border)',
    boxShadow: es ? ek : 'none'
  } : void 0,
  id: 'shop-item-'.concat(t.skuId),
  children: [
    ec && (0, n.jsx)(C.Tooltip, {
      tooltipContentClassName: z.premiumWheelTooltipContent,
      color: C.Tooltip.Colors.PRIMARY,
      text: V.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
      children: e => (0, n.jsx)(C.TextBadge, {
        ...e,
        className: z.premiumWheelBadge,
        text: (0, n.jsx)(C.NitroWheelIcon, {
          size: 'md',
          color: 'currentColor',
          className: z.premiumWheel
        })
      })
    }),
    (0, n.jsx)('div', {
      className: z.preview,
      children: (0, c.EQ)(t.type).with(u.Z.PROFILE_EFFECT, () => (0, n.jsx)('div', {
        className: z.profileEffectShopPreview,
        children: (0, n.jsx)(v.Z, {
          isHovering: es,
          profileEffectId: en.id,
          isPurchased: eu,
          removeSetHeight: !0
        })
      })).with(u.Z.AVATAR_DECORATION, () => (l()(en.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, n.jsx)('div', {
        className: z.avatarContainer,
        children: (0, n.jsx)(H.R, {
          item: en,
          user: s,
          isPurchased: eu,
          isHighlighted: es
        })
      }))).with(u.Z.BUNDLE, () => (0, n.jsx)(U.d, {
        product: t,
        user: s,
        isPurchased: eu,
        isHighlighted: es
      })).otherwise(() => null)
    }),
    eu ? (0, n.jsx)('div', {
      className: z.checkmarkWrapper,
      children: (0, n.jsx)(C.CheckmarkBoldIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 38,
        height: 38,
        className: z.checkmark
      })
    }) : null,
    (0, n.jsxs)('div', {
      className: o()(z.cardText, {
        [z.cardTextBlur]: (null == en ? void 0 : en.type) === u.Z.PROFILE_EFFECT
      }),
      children: [
        (0, n.jsx)('div', {
          className: o()(z.cardBackground, eC ? z.darkCardBackground : z.lightCardBackground, (null == en ? void 0 : en.type) === u.Z.PROFILE_EFFECT ? z.cardLowOpacity : null)
        }),
        (0, n.jsx)(C.Text, {
          variant: 'text-lg/bold',
          className: z.productName,
          children: t.name
        }),
        (0, n.jsxs)('div', {
          className: z.detailsWrapper,
          children: [
            (0, n.jsx)('div', {
              className: ep ? void 0 : z.innerBlur,
              children: eO()
            }),
            (0, n.jsx)('div', {
              className: z.innerHover,
              children: eZ()
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(y.Z, {
      category: a,
      className: z.limitedTimeBadge,
      display: 'card'
    }),
    eh && !ep && !eu && (0, n.jsx)(C.TextBadge, {
      text: V.Z.Messages.NEW,
      disableColor: !0,
      className: z.newBadge
    })
  ]
})
  });
};