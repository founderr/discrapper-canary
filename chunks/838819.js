"use strict";
a.r(t), a("47120");
var s = a("735250"),
  l = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("392711"),
  o = a("979554"),
  c = a("399606"),
  u = a("704215"),
  d = a("952265"),
  f = a("481060"),
  C = a("150063"),
  p = a("434650"),
  m = a("100527"),
  g = a("906732"),
  E = a("702486"),
  h = a("580747"),
  b = a("605236"),
  x = a("51855"),
  S = a("479446"),
  v = a("981632"),
  I = a("290026"),
  L = a("819640"),
  T = a("594174"),
  N = a("682864"),
  _ = a("626135"),
  y = a("74538"),
  j = a("335131"),
  A = a("328347"),
  O = a("280773"),
  k = a("884697"),
  P = a("617452"),
  R = a("223143"),
  B = a("298228"),
  M = a("937510"),
  D = a("853748"),
  w = a("426171"),
  F = a("823941"),
  H = a("752053"),
  U = a("963102"),
  W = a("128185"),
  G = a("861746"),
  V = a("508498"),
  K = a("38900"),
  z = a("709999"),
  Y = a("373113"),
  Z = a("994896"),
  X = a("141594"),
  q = a("302800"),
  Q = a("981631"),
  $ = a("921944"),
  J = a("420212"),
  ee = a("474936"),
  et = a("689938"),
  ea = a("425734");

function es(e) {
  let {
    products: t,
    handleShopCardMount: a,
    header: l,
    category: r,
    isPremiumUser: n,
    isGiftEasterEggEnabled: i,
    lightningCheckoutEnabled: o
  } = e, u = (0, c.useStateFromStores)([T.default], () => T.default.getCurrentUser());
  return null == u || 0 === t.length ? null : (0, s.jsxs)("div", {
    children: [null != l ? (0, s.jsx)(f.Text, {
      className: ea.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, s.jsx)(N.default, {
      size: 24
    }), (0, s.jsx)("div", {
      className: ea.cardsContainer,
      children: t.map(e => {
        var t;
        let l = (t = e, !o || (0, k.isBundleProduct)(t) ? z.default : G.default);
        return (0, s.jsx)(l, {
          onMount: a(e),
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
    initialItemCardRef: a,
    includeBundles: r = !1,
    ...n
  } = e, u = (0, M.usePurchasedProductsSort)(t.products), d = (0, c.useStateFromStores)([A.default], () => A.default.initialProductSkuId), f = l.useCallback(e => t => {
    e.skuId === d && (a.current = t.current)
  }, [d, a]), {
    unifiedProductCatalogEnabled: C
  } = (0, O.useCollectiblesUnifiedProductCatalogExperiment)("CollectiblesShop");
  if (C || r) return (0, s.jsx)(es, {
    products: u,
    handleShopCardMount: f,
    category: t,
    ...n
  });
  {
    var p, m;
    let e = (0, i.groupBy)(u, "type");
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(es, {
        products: null !== (p = e[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== p ? p : [],
        handleShopCardMount: f,
        category: t,
        header: et.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...n
      }), (0, s.jsx)(es, {
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
    isPremiumUser: a,
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
  return (0, s.jsxs)("div", {
    className: ea.categoryWrapper,
    ref: x,
    children: [c && (0, s.jsx)(f.Clickable, {
      className: n()(ea.hiddenWumpus, {
        [ea.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, s.jsx)(v.default, {
        idleAnimationState: S.AnimationState.IDLE,
        giftStyle: ee.PremiumGiftStyles.BOX
      })
    }), (0, s.jsx)(F.default, {
      category: t,
      hideLimitedTimeBadge: null != b,
      index: C
    }), (0, s.jsx)(el, {
      category: t,
      initialItemCardRef: r,
      isPremiumUser: a,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d,
      includeBundles: m
    }), null != b && null != t.unpublishedAt && (0, s.jsx)(D.CollectiblesCountdown, {
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
    analyticsSource: a,
    analyticsLocations: r
  } = (0, c.useStateFromStoresObject)([A.default], () => A.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, g.default)([...r, m.default.COLLECTIBLES_SHOP]), p = (0, c.useStateFromStores)([L.default], () => L.default.getLayers().includes(Q.Layers.COLLECTIBLES_SHOP)), S = (0, d.useHasAnyModalOpen)(), {
    onClose: v
  } = (0, V.useCollectiblesShopRouting)(), N = (0, c.useStateFromStores)([T.default], () => T.default.getCurrentUser()), O = y.default.canUseCollectibles(N), k = (0, h.default)("shop_disable_cache"), M = (0, h.default)("shop_include_unpublished"), {
    categories: D,
    isFetchingCategories: F,
    error: G
  } = (0, R.default)({
    noCache: k,
    includeUnpublished: M
  });
  (0, I.useReloadProfileEffectWhenConfigsAreMissing)();
  let z = (0, B.usePurchasedCategoriesSort)(D),
    q = (0, x.useLightningCheckoutExperimentEnabled)(),
    et = (0, P.useShopBundleEnabled)("CollectiblesShop"),
    es = l.useRef(null),
    [el, en] = l.useState(!1);
  (0, w.useProductDetailsDeepLinking)({
    categories: D,
    isFetchingCategories: F,
    isLayer: p,
    initialItemCardRef: es
  });
  let {
    sessionId: ei,
    scrollerRef: eo,
    scrollHandler: ec
  } = (0, E.usePageScrollPosition)(Q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  l.useEffect(() => {
    _.default.track(Q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: ei
    }), !O && _.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [O, i, a, ei]);
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
        noCache: k,
        includeUnpublished: M,
        includeBundles: et
      })
    }, [k, M, et]),
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
    } = (0, w.useCategoryDeepLinking)(),
    {
      condensedBannersAndDynamicHeadersEnabled: em
    } = (0, Z.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, s.jsxs)(g.AnalyticsLocationProvider, {
    value: i,
    children: [(0, s.jsx)("div", {
      className: ea.shop,
      ref: t ? ef : void 0,
      children: (0, s.jsxs)(f.AdvancedScroller, {
        className: ea.shopScroll,
        ref: eo,
        onScroll: ec,
        children: [(0, s.jsx)(U.CollectiblesShopHeaderBar, {
          isFullScreen: t,
          isLayer: p,
          onClose: v
        }), (0, s.jsx)("div", {
          className: ea.pageWrapper,
          children: (0, s.jsxs)("main", {
            className: n()(ea.page, {
              [ea.pageFullscreen]: t
            }),
            children: [em && (0, s.jsx)(W.CollectiblesShopHeaderCarousel, {
              categories: z,
              handleScrollToCategory: ep
            }), F ? (0, s.jsx)(K.default, {}) : G ? (0, s.jsx)(H.default, {
              onRetry: ed
            }) : (0, s.jsx)("div", {
              className: ea.categories,
              children: z.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, a) => (0, s.jsx)("div", {
                ref: t => eC(e.skuId, t),
                children: (0, s.jsx)(er, {
                  isPremiumUser: O,
                  category: e,
                  initialItemCardRef: es,
                  setIsGiftEasterEggEnabled: en,
                  isGiftEasterEggEnabled: el,
                  isFullScreen: t,
                  lightningCheckoutEnabled: q,
                  includeBundles: et,
                  index: a
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), el && (0, s.jsx)(Y.default, {})]
  })
}