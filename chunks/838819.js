"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("392711"),
  o = l("979554"),
  c = l("399606"),
  u = l("524437"),
  d = l("952265"),
  f = l("481060"),
  C = l("150063"),
  p = l("434650"),
  m = l("100527"),
  g = l("906732"),
  E = l("702486"),
  h = l("580747"),
  b = l("605236"),
  x = l("51855"),
  S = l("479446"),
  v = l("981632"),
  I = l("290026"),
  L = l("819640"),
  T = l("594174"),
  N = l("682864"),
  _ = l("626135"),
  y = l("74538"),
  A = l("335131"),
  j = l("328347"),
  k = l("280773"),
  O = l("884697"),
  P = l("617452"),
  R = l("223143"),
  B = l("298228"),
  M = l("937510"),
  D = l("853748"),
  w = l("426171"),
  F = l("823941"),
  H = l("752053"),
  U = l("963102"),
  W = l("128185"),
  G = l("861746"),
  V = l("508498"),
  K = l("38900"),
  z = l("709999"),
  Y = l("373113"),
  Z = l("994896"),
  X = l("141594"),
  q = l("302800"),
  Q = l("981631"),
  $ = l("921944"),
  J = l("420212"),
  ee = l("474936"),
  et = l("689938"),
  el = l("425734");

function ea(e) {
  let {
    products: t,
    handleShopCardMount: l,
    header: s,
    category: r,
    isPremiumUser: n,
    isGiftEasterEggEnabled: i,
    lightningCheckoutEnabled: o
  } = e, u = (0, c.useStateFromStores)([T.default], () => T.default.getCurrentUser());
  return null == u || 0 === t.length ? null : (0, a.jsxs)("div", {
    children: [null != s ? (0, a.jsx)(f.Text, {
      className: el.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: s
    }) : (0, a.jsx)(N.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: el.cardsContainer,
      children: t.map(e => {
        var t;
        let s = (t = e, !o || (0, O.isBundleProduct)(t) ? z.default : G.default);
        return (0, a.jsx)(s, {
          onMount: l(e),
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

function es(e) {
  let {
    category: t,
    initialItemCardRef: l,
    includeBundles: r = !1,
    ...n
  } = e, u = (0, M.usePurchasedProductsSort)(t.products), d = (0, c.useStateFromStores)([j.default], () => j.default.initialProductSkuId), f = s.useCallback(e => t => {
    e.skuId === d && (l.current = t.current)
  }, [d, l]), {
    unifiedProductCatalogEnabled: C
  } = (0, k.useCollectiblesUnifiedProductCatalogExperiment)("CollectiblesShop");
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
    isPremiumUser: l,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: C,
    includeBundles: m = !1
  } = e, g = s.useRef(10 + 70 * Math.random()), [E, h] = s.useState(!1), b = (0, q.getCountdownDisplayOptions)(t.skuId), x = (0, p.useIsVisible)(e => {
    h(e && null != b)
  }, u ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: el.categoryWrapper,
    ref: x,
    children: [c && (0, a.jsx)(f.Clickable, {
      className: n()(el.hiddenWumpus, {
        [el.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, a.jsx)(v.default, {
        idleAnimationState: S.AnimationState.IDLE,
        giftStyle: ee.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(F.default, {
      category: t,
      hideLimitedTimeBadge: null != b,
      index: C
    }), (0, a.jsx)(es, {
      category: t,
      initialItemCardRef: r,
      isPremiumUser: l,
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
    analyticsSource: l,
    analyticsLocations: r
  } = (0, c.useStateFromStoresObject)([j.default], () => j.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, g.default)([...r, m.default.COLLECTIBLES_SHOP]), p = (0, c.useStateFromStores)([L.default], () => L.default.getLayers().includes(Q.Layers.COLLECTIBLES_SHOP)), S = (0, d.useHasAnyModalOpen)(), {
    onClose: v
  } = (0, V.useCollectiblesShopRouting)(), N = (0, c.useStateFromStores)([T.default], () => T.default.getCurrentUser()), k = y.default.canUseCollectibles(N), O = (0, h.default)("shop_disable_cache"), M = (0, h.default)("shop_include_unpublished"), {
    categories: D,
    isFetchingCategories: F,
    error: G
  } = (0, R.default)({
    noCache: O,
    includeUnpublished: M
  });
  (0, I.useReloadProfileEffectWhenConfigsAreMissing)();
  let z = (0, B.usePurchasedCategoriesSort)(D),
    q = (0, x.useLightningCheckoutExperimentEnabled)(),
    et = (0, P.useShopBundleEnabled)("CollectiblesShop"),
    ea = s.useRef(null),
    [es, en] = s.useState(!1);
  (0, w.useProductDetailsDeepLinking)({
    categories: D,
    isFetchingCategories: F,
    isLayer: p,
    initialItemCardRef: ea
  });
  let {
    sessionId: ei,
    scrollerRef: eo,
    scrollHandler: ec
  } = (0, E.usePageScrollPosition)(Q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
  s.useEffect(() => {
    _.default.track(Q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: l,
      page_session_id: ei
    }), !k && _.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [k, i, l, ei]);
  let {
    dismissCollectiblesShopTabNewBadge: eu
  } = (0, X.default)();
  s.useEffect(() => {
    eu(), !(0, b.isDismissibleContentDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eu]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(Q.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, A.setCollectiblesCategoryItemsViewed)({
      categories: [...D.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [D]), s.useEffect(() => {
    if (!t || p || S) return;
    let e = e => {
      e.key === J.KeyboardEventKey.Escape && v()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, S, v]);
  let ed = s.useCallback(() => {
      (0, A.fetchCollectiblesCategories)({
        noCache: O,
        includeUnpublished: M,
        includeBundles: et
      })
    }, [O, M, et]),
    {
      containerRef: ef
    } = function() {
      let e = s.useRef(null),
        t = s.useRef(null);
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
  return (0, a.jsxs)(g.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsx)("div", {
      className: el.shop,
      ref: t ? ef : void 0,
      children: (0, a.jsxs)(f.AdvancedScroller, {
        className: el.shopScroll,
        ref: eo,
        onScroll: ec,
        children: [(0, a.jsx)(U.CollectiblesShopHeaderBar, {
          isFullScreen: t,
          isLayer: p,
          onClose: v
        }), (0, a.jsx)("div", {
          className: el.pageWrapper,
          children: (0, a.jsxs)("main", {
            className: n()(el.page, {
              [el.pageFullscreen]: t
            }),
            children: [em && (0, a.jsx)(W.CollectiblesShopHeaderCarousel, {
              categories: z,
              handleScrollToCategory: ep
            }), F ? (0, a.jsx)(K.default, {}) : G ? (0, a.jsx)(H.default, {
              onRetry: ed
            }) : (0, a.jsx)("div", {
              className: el.categories,
              children: z.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, l) => (0, a.jsx)("div", {
                ref: t => eC(e.skuId, t),
                children: (0, a.jsx)(er, {
                  isPremiumUser: k,
                  category: e,
                  initialItemCardRef: ea,
                  setIsGiftEasterEggEnabled: en,
                  isGiftEasterEggEnabled: es,
                  isFullScreen: t,
                  lightningCheckoutEnabled: q,
                  includeBundles: et,
                  index: l
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), es && (0, a.jsx)(Y.default, {})]
  })
}