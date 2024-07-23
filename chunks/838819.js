n.r(t), n(47120);
var s = n(735250),
  r = n(470079),
  a = n(120356),
  i = n.n(a),
  o = n(392711),
  c = n(979554),
  l = n(399606),
  d = n(704215),
  u = n(952265),
  f = n(780384),
  p = n(481060),
  g = n(150063),
  C = n(434650),
  _ = n(100527),
  m = n(906732),
  b = n(702486),
  h = n(514361),
  x = n(605236),
  I = n(479446),
  E = n(981632),
  v = n(290026),
  L = n(210887),
  S = n(819640),
  T = n(594174),
  N = n(626135),
  O = n(74538),
  j = n(335131),
  k = n(372047),
  R = n(328347),
  B = n(280773),
  A = n(617452),
  Z = n(223143),
  P = n(675052),
  M = n(298228),
  y = n(937510),
  w = n(853748),
  F = n(426171),
  D = n(823941),
  H = n(752053),
  U = n(963102),
  G = n(128185),
  W = n(508498),
  V = n(38900),
  z = n(709999),
  Y = n(373113),
  K = n(399033),
  X = n(994896),
  q = n(141594),
  $ = n(302800),
  J = n(981631),
  Q = n(921944),
  ee = n(420212),
  et = n(474936),
  en = n(689938),
  es = n(53824);

function er(e) {
  let {
products: t,
handleShopCardMount: n,
header: r,
category: a,
isPremiumUser: i,
isGiftEasterEggEnabled: o
  } = e, c = (0, l.e7)([T.default], () => T.default.getCurrentUser());
  return null == c || 0 === t.length ? null : (0, s.jsxs)('div', {
children: [
  null != r ? (0, s.jsx)(p.Text, {
    className: es.itemTypeTitle,
    color: 'header-secondary',
    variant: 'text-sm/bold',
    children: r
  }) : (0, s.jsx)(p.Spacer, {
    size: 24
  }),
  (0, s.jsx)('div', {
    className: es.cardsContainer,
    children: t.map(e => (0, s.jsx)(z.Z, {
      onMount: n(e),
      isPremiumUser: i,
      category: a,
      product: e,
      user: c,
      isGiftEasterEggEnabled: o
    }, e.skuId))
  })
]
  });
}

function ea(e) {
  let {
category: t,
initialItemCardRef: n,
includeBundles: a = !1,
...i
  } = e, d = (0, y.l)(t.products), u = (0, l.e7)([R.Z], () => R.Z.initialProductSkuId), f = r.useCallback(e => t => {
e.skuId === u && (n.current = t.current);
  }, [
u,
n
  ]), {
unifiedProductCatalogEnabled: p
  } = (0, B.n)('CollectiblesShop');
  if (p || a)
return (0, s.jsx)(er, {
  products: d,
  handleShopCardMount: f,
  category: t,
  ...i
});
  {
var g, C;
let e = (0, o.groupBy)(d, 'type');
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(er, {
      products: null !== (g = e[c.Z.AVATAR_DECORATION]) && void 0 !== g ? g : [],
      handleShopCardMount: f,
      category: t,
      header: en.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
      ...i
    }),
    (0, s.jsx)(er, {
      products: null !== (C = e[c.Z.PROFILE_EFFECT]) && void 0 !== C ? C : [],
      handleShopCardMount: f,
      category: t,
      header: en.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      ...i
    })
  ]
});
  }
}

function ei(e) {
  let {
category: t,
isPremiumUser: n,
initialItemCardRef: a,
isGiftEasterEggEnabled: o,
setIsGiftEasterEggEnabled: c,
showEasterEggToggle: l,
isFullScreen: d,
index: u,
includeBundles: f = !1
  } = e, g = r.useRef(10 + 70 * Math.random()), [_, m] = r.useState(!1), b = (0, $.M7)(t.skuId), h = (0, C.O)(e => {
m(e && null != b);
  }, d ? 0.13 : 0.15);
  return (0, s.jsxs)('div', {
className: es.categoryWrapper,
ref: h,
children: [
  l && (0, s.jsx)(p.Clickable, {
    className: i()(es.hiddenWumpus, {
      [es.hiddenWumpusEnabled]: o
    }),
    onClick: () => c(!0),
    style: {
      left: ''.concat(g.current, '%')
    },
    children: (0, s.jsx)(E.Z, {
      idleAnimationState: I.S.IDLE,
      giftStyle: et.Cj.BOX
    })
  }),
  (0, s.jsx)(D.Z, {
    category: t,
    hideLimitedTimeBadge: null != b,
    index: u
  }),
  (0, s.jsx)(ea, {
    category: t,
    initialItemCardRef: a,
    isPremiumUser: n,
    isGiftEasterEggEnabled: o,
    includeBundles: f
  }),
  null != b && null != t.unpublishedAt && (0, s.jsx)(w.$, {
    unpublishedAt: t.unpublishedAt,
    isVisible: _,
    displayOptions: b,
    isFullScreen: d
  })
]
  });
}
t.default = function(e) {
  let {
isFullScreen: t = !0
  } = e, {
analyticsSource: n,
analyticsLocations: a
  } = (0, l.cj)([R.Z], () => R.Z.getAnalytics()), {
analyticsLocations: o
  } = (0, m.ZP)([
...a,
_.Z.COLLECTIBLES_SHOP
  ]), C = (0, l.e7)([S.Z], () => S.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)), I = (0, u.f9)(), {
onClose: E
  } = (0, W.Db)(), B = (0, l.e7)([T.default], () => T.default.getCurrentUser()), y = O.ZP.canUseCollectibles(B), {
categories: w,
isFetchingCategories: D,
error: z,
refreshCategories: $
  } = (0, Z.Z)();
  (0, v.P)();
  let er = (0, M.O)(w),
{
  sortedPopularPickProducts: ea,
  popularProductToCategoryMap: eo
} = (0, P.a)(w),
ec = (0, A.e)('CollectiblesShop'),
el = r.useRef(null),
[ed, eu] = r.useState(!1);
  (0, F.Kp)({
categories: w,
isFetchingCategories: D,
isLayer: C,
initialItemCardRef: el
  });
  let {
sessionId: ef,
scrollerRef: ep,
scrollHandler: eg
  } = (0, b._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
  r.useEffect(() => {
N.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
  location_stack: o,
  source: n,
  page_session_id: ef
}), !y && N.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
  type: et.cd.COLLECTIBLES_SHOP,
  location_stack: o
});
  }, [
y,
o,
n,
ef
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
!t && (0, g.Y)(J.Z5c.COLLECTIBLES_SHOP);
  }, [t]), r.useEffect(() => () => {
(0, j.K$)({
  categories: [...w.values()],
  itemTypes: [
    c.Z.AVATAR_DECORATION,
    c.Z.PROFILE_EFFECT
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
  let e_ = r.useCallback(() => {
  $();
}, [$]),
{
  containerRef: em
} = function() {
  let e = r.useRef(null),
    t = r.useRef(null);
  return (0, p.useFocusLock)(e, {
    returnRef: t
  }), {
    containerRef: e,
    returnRef: t
  };
}(),
{
  setCategoryRef: eb,
  handleScrollToCategory: eh
} = (0, F.xV)(ep.current),
{
  condensedBannersAndDynamicHeadersEnabled: ex
} = (0, X.O)({
  location: 'CollectiblesShop'
}),
{
  enabled: eI
} = (0, k.Z)({
  location: 'CollectiblesShop'
}),
eE = (0, l.e7)([h.Z], () => h.Z.gradientPreset),
ev = !(0, l.e7)([L.Z], () => (0, f.wj)(L.Z.theme)) && null == eE;
  return (0, s.jsxs)(m.Gt, {
value: o,
children: [
  (0, s.jsx)('div', {
    className: es.shop,
    ref: t ? em : void 0,
    children: (0, s.jsxs)(p.AdvancedScroller, {
      className: es.shopScroll,
      ref: ep,
      onScroll: eg,
      children: [
        (0, s.jsx)(U.I, {
          isFullScreen: t,
          isLayer: C,
          onClose: E
        }),
        (0, s.jsx)('div', {
          className: es.pageWrapper,
          children: (0, s.jsxs)('main', {
            className: i()(es.page, {
              [es.pageFullscreen]: t
            }),
            children: [
              ex && er.length > 0 && (0, s.jsx)(G.h, {
                categories: er,
                handleScrollToCategory: eh
              }),
              eI && (0, s.jsxs)('div', {
                className: i()(es.popularPicksContainer, ev ? es.defaultLightModeCustomGradient : es.popularPicksGradient),
                children: [
                  (0, s.jsx)(p.Text, {
                    className: es.popularPicksHeader,
                    variant: 'text-lg/medium',
                    children: en.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                  }),
                  (0, s.jsx)(K.Z, {
                    products: ea,
                    user: B,
                    productToCategoryMap: eo
                  })
                ]
              }),
              D ? (0, s.jsx)(V.Z, {}) : z ? (0, s.jsx)(H.Z, {
                onRetry: e_
              }) : (0, s.jsx)('div', {
                className: es.categories,
                children: er.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date()).filter(e => {
                  let {
                    products: t
                  } = e;
                  return t.length > 0;
                }).map((e, n) => (0, s.jsx)('div', {
                  ref: t => eb(e.skuId, t),
                  children: (0, s.jsx)(ei, {
                    isPremiumUser: y,
                    category: e,
                    initialItemCardRef: el,
                    setIsGiftEasterEggEnabled: eu,
                    isGiftEasterEggEnabled: ed,
                    isFullScreen: t,
                    includeBundles: ec,
                    index: n
                  })
                }, e.skuId))
              })
            ]
          })
        })
      ]
    })
  }),
  ed && (0, s.jsx)(Y.Z, {})
]
  });
};