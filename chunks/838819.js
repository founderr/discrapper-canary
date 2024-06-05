"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  r = s("120356"),
  n = s.n(r),
  i = s("392711"),
  o = s("979554"),
  c = s("399606"),
  u = s("704215"),
  d = s("952265"),
  f = s("481060"),
  C = s("150063"),
  p = s("434650"),
  m = s("100527"),
  g = s("906732"),
  E = s("702486"),
  h = s("580747"),
  b = s("605236"),
  x = s("51855"),
  S = s("479446"),
  v = s("981632"),
  I = s("290026"),
  L = s("819640"),
  T = s("594174"),
  N = s("682864"),
  _ = s("626135"),
  y = s("74538"),
  j = s("335131"),
  A = s("328347"),
  O = s("280773"),
  P = s("884697"),
  k = s("617452"),
  R = s("223143"),
  B = s("298228"),
  M = s("937510"),
  D = s("853748"),
  F = s("426171"),
  w = s("823941"),
  H = s("752053"),
  U = s("963102"),
  W = s("128185"),
  G = s("861746"),
  V = s("508498"),
  K = s("38900"),
  z = s("709999"),
  Y = s("373113"),
  Z = s("994896"),
  X = s("141594"),
  q = s("302800"),
  Q = s("981631"),
  $ = s("921944"),
  J = s("420212"),
  ee = s("474936"),
  et = s("689938"),
  es = s("425734");

function ea(e) {
  let {
    products: t,
    handleShopCardMount: s,
    header: l,
    category: r,
    isPremiumUser: n,
    isGiftEasterEggEnabled: i,
    lightningCheckoutEnabled: o
  } = e, u = (0, c.useStateFromStores)([T.default], () => T.default.getCurrentUser());
  return null == u || 0 === t.length ? null : (0, a.jsxs)("div", {
    children: [null != l ? (0, a.jsx)(f.Text, {
      className: es.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, a.jsx)(N.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: es.cardsContainer,
      children: t.map(e => {
        var t;
        let l = (t = e, !o || (0, P.isBundleProduct)(t) ? z.default : G.default);
        return (0, a.jsx)(l, {
          onMount: s(e),
          isPremiumUser: n,
          category: r,
          product: e,
          user: u,
          isGiftEasterEggEnabled: i
        }, e.skuId)
      })
    })]
  })
}

function el(e) {
  let {
    category: t,
    initialItemCardRef: s,
    includeBundles: r = !1,
    ...n
  } = e, u = (0, M.usePurchasedProductsSort)(t.products), d = (0, c.useStateFromStores)([A.default], () => A.default.initialProductSkuId), f = l.useCallback(e => t => {
    e.skuId === d && (s.current = t.current)
  }, [d, s]), {
    unifiedProductCatalogEnabled: C
  } = (0, O.useCollectiblesUnifiedProductCatalogExperiment)("CollectiblesShop");
  if (C || r) return (0, a.jsx)(ea, {
    products: u,
    handleShopCardMount: f,
    category: t,
    ...n
  });
  {
    var p, m;
    let e = (0, i.groupBy)(u, "type");
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(ea, {
        products: null !== (p = e[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== p ? p : [],
        handleShopCardMount: f,
        category: t,
        header: et.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...n
      }), (0, a.jsx)(ea, {
        products: null !== (m = e[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== m ? m : [],
        handleShopCardMount: f,
        category: t,
        header: et.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...n
      })]
    })
  }
}

function er(e) {
  let {
    category: t,
    isPremiumUser: s,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: C,
    includeBundles: m = !1
  } = e, g = l.useRef(10 + 70 * Math.random()), [E, h] = l.useState(!1), b = (0, q.getCountdownDisplayOptions)(t.skuId), x = (0, p.useIsVisible)(e => {
    h(e && null != b)
  }, u ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: es.categoryWrapper,
    ref: x,
    children: [c && (0, a.jsx)(f.Clickable, {
      className: n()(es.hiddenWumpus, {
        [es.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, a.jsx)(v.default, {
        idleAnimationState: S.AnimationState.IDLE,
        giftStyle: ee.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(w.default, {
      category: t,
      hideLimitedTimeBadge: null != b,
      index: C
    }), (0, a.jsx)(el, {
      category: t,
      initialItemCardRef: r,
      isPremiumUser: s,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d,
      includeBundles: m
    }), null != b && null != t.unpublishedAt && (0, a.jsx)(D.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: E,
      displayOptions: b,
      isFullScreen: u
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: s,
    analyticsLocations: r
  } = (0, c.useStateFromStoresObject)([A.default], () => A.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, g.default)([...r, m.default.COLLECTIBLES_SHOP]), p = (0, c.useStateFromStores)([L.default], () => L.default.getLayers().includes(Q.Layers.COLLECTIBLES_SHOP)), S = (0, d.useHasAnyModalOpen)(), {
    onClose: v
  } = (0, V.useCollectiblesShopRouting)(), N = (0, c.useStateFromStores)([T.default], () => T.default.getCurrentUser()), O = y.default.canUseCollectibles(N), P = (0, h.default)("shop_disable_cache"), M = (0, h.default)("shop_include_unpublished"), {
    categories: D,
    isFetchingCategories: w,
    error: G
  } = (0, R.default)({
    noCache: P,
    includeUnpublished: M
  });
  (0, I.useReloadProfileEffectWhenConfigsAreMissing)();
  let z = (0, B.usePurchasedCategoriesSort)(D),
    q = (0, x.useLightningCheckoutExperimentEnabled)(),
    et = (0, k.useShopBundleEnabled)("CollectiblesShop"),
    ea = l.useRef(null),
    [el, en] = l.useState(!1);
  (0, F.useProductDetailsDeepLinking)({
    categories: D,
    isFetchingCategories: w,
    isLayer: p,
    initialItemCardRef: ea
  });
  let {
    sessionId: ei,
    scrollerRef: eo,
    scrollHandler: ec
  } = (0, E.usePageScrollPosition)(Q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, s);
  l.useEffect(() => {
    _.default.track(Q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: s,
      page_session_id: ei
    }), !O && _.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [O, i, s, ei]);
  let {
    dismissCollectiblesShopTabNewBadge: eu
  } = (0, X.default)();
  l.useEffect(() => {
    eu(), !(0, b.isDismissibleContentDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eu]), l.useEffect(() => {
    !t && (0, C.setHomeLink)(Q.Routes.COLLECTIBLES_SHOP)
  }, [t]), l.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...D.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [D]), l.useEffect(() => {
    if (!t || p || S) return;
    let e = e => {
      e.key === J.KeyboardEventKey.Escape && v()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, S, v]);
  let ed = l.useCallback(() => {
      (0, j.fetchCollectiblesCategories)({
        noCache: P,
        includeUnpublished: M,
        includeBundles: et
      })
    }, [P, M, et]),
    {
      containerRef: ef
    } = function() {
      let e = l.useRef(null),
        t = l.useRef(null);
      return (0, f.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }(),
    {
      setCategoryRef: eC,
      handleScrollToCategory: ep
    } = (0, F.useCategoryDeepLinking)(),
    {
      condensedBannersAndDynamicHeadersEnabled: em
    } = (0, Z.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, a.jsxs)(g.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsx)("div", {
      className: es.shop,
      ref: t ? ef : void 0,
      children: (0, a.jsxs)(f.AdvancedScroller, {
        className: es.shopScroll,
        ref: eo,
        onScroll: ec,
        children: [(0, a.jsx)(U.CollectiblesShopHeaderBar, {
          isFullScreen: t,
          isLayer: p,
          onClose: v
        }), (0, a.jsx)("div", {
          className: es.pageWrapper,
          children: (0, a.jsxs)("main", {
            className: n()(es.page, {
              [es.pageFullscreen]: t
            }),
            children: [em && (0, a.jsx)(W.CollectiblesShopHeaderCarousel, {
              categories: z,
              handleScrollToCategory: ep
            }), w ? (0, a.jsx)(K.default, {}) : G ? (0, a.jsx)(H.default, {
              onRetry: ed
            }) : (0, a.jsx)("div", {
              className: es.categories,
              children: z.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, s) => (0, a.jsx)("div", {
                ref: t => eC(e.skuId, t),
                children: (0, a.jsx)(er, {
                  isPremiumUser: O,
                  category: e,
                  initialItemCardRef: ea,
                  setIsGiftEasterEggEnabled: en,
                  isGiftEasterEggEnabled: el,
                  isFullScreen: t,
                  lightningCheckoutEnabled: q,
                  includeBundles: et,
                  index: s
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), el && (0, a.jsx)(Y.default, {})]
  })
}