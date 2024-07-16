s.r(t), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(392711),
  l = s(979554),
  c = s(399606),
  d = s(704215),
  u = s(952265),
  p = s(780384),
  g = s(481060),
  f = s(150063),
  C = s(434650),
  m = s(100527),
  _ = s(906732),
  h = s(702486),
  b = s(514361),
  x = s(605236),
  I = s(479446),
  E = s(981632),
  L = s(290026),
  S = s(210887),
  v = s(819640),
  T = s(594174),
  N = s(626135),
  O = s(74538),
  j = s(335131),
  Z = s(372047),
  k = s(328347),
  R = s(280773),
  A = s(617452),
  P = s(223143),
  B = s(675052),
  M = s(298228),
  y = s(937510),
  w = s(853748),
  F = s(426171),
  D = s(823941),
  H = s(752053),
  U = s(963102),
  G = s(128185),
  W = s(508498),
  V = s(38900),
  z = s(709999),
  Y = s(373113),
  K = s(399033),
  X = s(994896),
  q = s(141594),
  $ = s(302800),
  J = s(981631),
  Q = s(921944),
  ee = s(420212),
  et = s(474936),
  es = s(689938),
  en = s(425391);

function er(e) {
  let {
products: t,
handleShopCardMount: s,
header: r,
category: a,
isPremiumUser: o,
isGiftEasterEggEnabled: i
  } = e, l = (0, c.e7)([T.default], () => T.default.getCurrentUser());
  return null == l || 0 === t.length ? null : (0, n.jsxs)('div', {
children: [
  null != r ? (0, n.jsx)(g.Text, {
    className: en.itemTypeTitle,
    color: 'header-secondary',
    variant: 'text-sm/bold',
    children: r
  }) : (0, n.jsx)(g.Spacer, {
    size: 24
  }),
  (0, n.jsx)('div', {
    className: en.cardsContainer,
    children: t.map(e => (0, n.jsx)(z.Z, {
      onMount: s(e),
      isPremiumUser: o,
      category: a,
      product: e,
      user: l,
      isGiftEasterEggEnabled: i
    }, e.skuId))
  })
]
  });
}

function ea(e) {
  let {
category: t,
initialItemCardRef: s,
includeBundles: a = !1,
...o
  } = e, d = (0, y.l)(t.products), u = (0, c.e7)([k.Z], () => k.Z.initialProductSkuId), p = r.useCallback(e => t => {
e.skuId === u && (s.current = t.current);
  }, [
u,
s
  ]), {
unifiedProductCatalogEnabled: g
  } = (0, R.n)('CollectiblesShop');
  if (g || a)
return (0, n.jsx)(er, {
  products: d,
  handleShopCardMount: p,
  category: t,
  ...o
});
  {
var f, C;
let e = (0, i.groupBy)(d, 'type');
return (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsx)(er, {
      products: null !== (f = e[l.Z.AVATAR_DECORATION]) && void 0 !== f ? f : [],
      handleShopCardMount: p,
      category: t,
      header: es.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
      ...o
    }),
    (0, n.jsx)(er, {
      products: null !== (C = e[l.Z.PROFILE_EFFECT]) && void 0 !== C ? C : [],
      handleShopCardMount: p,
      category: t,
      header: es.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      ...o
    })
  ]
});
  }
}

function eo(e) {
  let {
category: t,
isPremiumUser: s,
initialItemCardRef: a,
isGiftEasterEggEnabled: i,
setIsGiftEasterEggEnabled: l,
showEasterEggToggle: c,
isFullScreen: d,
index: u,
includeBundles: p = !1
  } = e, f = r.useRef(10 + 70 * Math.random()), [m, _] = r.useState(!1), h = (0, $.M7)(t.skuId), b = (0, C.O)(e => {
_(e && null != h);
  }, d ? 0.13 : 0.15);
  return (0, n.jsxs)('div', {
className: en.categoryWrapper,
ref: b,
children: [
  c && (0, n.jsx)(g.Clickable, {
    className: o()(en.hiddenWumpus, {
      [en.hiddenWumpusEnabled]: i
    }),
    onClick: () => l(!0),
    style: {
      left: ''.concat(f.current, '%')
    },
    children: (0, n.jsx)(E.Z, {
      idleAnimationState: I.S.IDLE,
      giftStyle: et.Cj.BOX
    })
  }),
  (0, n.jsx)(D.Z, {
    category: t,
    hideLimitedTimeBadge: null != h,
    index: u
  }),
  (0, n.jsx)(ea, {
    category: t,
    initialItemCardRef: a,
    isPremiumUser: s,
    isGiftEasterEggEnabled: i,
    includeBundles: p
  }),
  null != h && null != t.unpublishedAt && (0, n.jsx)(w.$, {
    unpublishedAt: t.unpublishedAt,
    isVisible: m,
    displayOptions: h,
    isFullScreen: d
  })
]
  });
}
t.default = function(e) {
  let {
isFullScreen: t = !0
  } = e, {
analyticsSource: s,
analyticsLocations: a
  } = (0, c.cj)([k.Z], () => k.Z.getAnalytics()), {
analyticsLocations: i
  } = (0, _.ZP)([
...a,
m.Z.COLLECTIBLES_SHOP
  ]), C = (0, c.e7)([v.Z], () => v.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)), I = (0, u.f9)(), {
onClose: E
  } = (0, W.Db)(), R = (0, c.e7)([T.default], () => T.default.getCurrentUser()), y = O.ZP.canUseCollectibles(R), {
categories: w,
isFetchingCategories: D,
error: z,
refreshCategories: $
  } = (0, P.Z)();
  (0, L.P)();
  let er = (0, M.O)(w),
{
  sortedPopularPickProducts: ea,
  popularProductToCategoryMap: ei
} = (0, B.a)(w),
el = (0, A.e)('CollectiblesShop'),
ec = r.useRef(null),
[ed, eu] = r.useState(!1);
  (0, F.Kp)({
categories: w,
isFetchingCategories: D,
isLayer: C,
initialItemCardRef: ec
  });
  let {
sessionId: ep,
scrollerRef: eg,
scrollHandler: ef
  } = (0, h._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, s);
  r.useEffect(() => {
N.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
  location_stack: i,
  source: s,
  page_session_id: ep
}), !y && N.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
  type: et.cd.COLLECTIBLES_SHOP,
  location_stack: i
});
  }, [
y,
i,
s,
ep
  ]);
  let {
dismissCollectiblesShopTabNewBadge: eC
  } = (0, q.Z)();
  r.useEffect(() => {
if (eC(), !(0, x.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK))
  (0, x.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
    dismissAction: Q.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [eC]), r.useEffect(() => {
!t && (0, f.Y)(J.Z5c.COLLECTIBLES_SHOP);
  }, [t]), r.useEffect(() => () => {
(0, j.K$)({
  categories: [...w.values()],
  itemTypes: [
    l.Z.AVATAR_DECORATION,
    l.Z.PROFILE_EFFECT
  ]
});
  }, [w]), r.useEffect(() => {
if (!t || C || I)
  return;
let e = e => {
  if (e.key === ee.mR.Escape)
    E();
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, [
t,
C,
I,
E
  ]);
  let em = r.useCallback(() => {
  $();
}, [$]),
{
  containerRef: e_
} = function() {
  let e = r.useRef(null),
    t = r.useRef(null);
  return (0, g.useFocusLock)(e, {
    returnRef: t
  }), {
    containerRef: e,
    returnRef: t
  };
}(),
{
  setCategoryRef: eh,
  handleScrollToCategory: eb
} = (0, F.xV)(eg.current),
{
  condensedBannersAndDynamicHeadersEnabled: ex
} = (0, X.O)({
  location: 'CollectiblesShop'
}),
{
  enabled: eI
} = (0, Z.Z)({
  location: 'CollectiblesShop'
}),
eE = (0, c.e7)([b.Z], () => b.Z.gradientPreset),
eL = !(0, c.e7)([S.Z], () => (0, p.wj)(S.Z.theme)) && null == eE;
  return (0, n.jsxs)(_.Gt, {
value: i,
children: [
  (0, n.jsx)('div', {
    className: en.shop,
    ref: t ? e_ : void 0,
    children: (0, n.jsxs)(g.AdvancedScroller, {
      className: en.shopScroll,
      ref: eg,
      onScroll: ef,
      children: [
        (0, n.jsx)(U.I, {
          isFullScreen: t,
          isLayer: C,
          onClose: E
        }),
        (0, n.jsx)('div', {
          className: en.pageWrapper,
          children: (0, n.jsxs)('main', {
            className: o()(en.page, {
              [en.pageFullscreen]: t
            }),
            children: [
              ex && er.length > 0 && (0, n.jsx)(G.h, {
                categories: er,
                handleScrollToCategory: eb
              }),
              eI && (0, n.jsxs)('div', {
                className: o()(en.popularPicksContainer, eL ? en.defaultLightModeCustomGradient : en.popularPicksGradient),
                children: [
                  (0, n.jsx)(g.Text, {
                    className: en.popularPicksHeader,
                    variant: 'text-lg/medium',
                    children: es.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                  }),
                  (0, n.jsx)(K.Z, {
                    products: ea,
                    user: R,
                    productToCategoryMap: ei
                  })
                ]
              }),
              D ? (0, n.jsx)(V.Z, {}) : z ? (0, n.jsx)(H.Z, {
                onRetry: em
              }) : (0, n.jsx)('div', {
                className: en.categories,
                children: er.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date()).filter(e => {
                  let {
                    products: t
                  } = e;
                  return t.length > 0;
                }).map((e, s) => (0, n.jsx)('div', {
                  ref: t => eh(e.skuId, t),
                  children: (0, n.jsx)(eo, {
                    isPremiumUser: y,
                    category: e,
                    initialItemCardRef: ec,
                    setIsGiftEasterEggEnabled: eu,
                    isGiftEasterEggEnabled: ed,
                    isFullScreen: t,
                    includeBundles: el,
                    index: s
                  })
                }, e.skuId))
              })
            ]
          })
        })
      ]
    })
  }),
  ed && (0, n.jsx)(Y.Z, {})
]
  });
};