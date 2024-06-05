"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  r = s.n(n),
  i = s("392711"),
  o = s("979554"),
  u = s("399606"),
  c = s("704215"),
  d = s("952265"),
  f = s("481060"),
  C = s("150063"),
  E = s("434650"),
  p = s("100527"),
  m = s("906732"),
  g = s("702486"),
  S = s("580747"),
  h = s("605236"),
  I = s("51855"),
  T = s("479446"),
  x = s("981632"),
  _ = s("290026"),
  N = s("819640"),
  L = s("594174"),
  b = s("682864"),
  R = s("626135"),
  v = s("74538"),
  A = s("335131"),
  P = s("328347"),
  O = s("280773"),
  j = s("884697"),
  y = s("617452"),
  M = s("223143"),
  k = s("298228"),
  B = s("937510"),
  F = s("853748"),
  D = s("426171"),
  U = s("823941"),
  H = s("752053"),
  w = s("963102"),
  G = s("128185"),
  W = s("861746"),
  Y = s("508498"),
  V = s("38900"),
  K = s("709999"),
  z = s("373113"),
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
    category: n,
    isPremiumUser: r,
    isGiftEasterEggEnabled: i,
    lightningCheckoutEnabled: o
  } = e, c = (0, u.useStateFromStores)([L.default], () => L.default.getCurrentUser());
  return null == c || 0 === t.length ? null : (0, a.jsxs)("div", {
    children: [null != l ? (0, a.jsx)(f.Text, {
      className: es.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, a.jsx)(b.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: es.cardsContainer,
      children: t.map(e => {
        var t;
        let l = (t = e, !o || (0, j.isBundleProduct)(t) ? K.default : W.default);
        return (0, a.jsx)(l, {
          onMount: s(e),
          isPremiumUser: r,
          category: n,
          product: e,
          user: c,
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
    includeBundles: n = !1,
    ...r
  } = e, c = (0, B.usePurchasedProductsSort)(t.products), d = (0, u.useStateFromStores)([P.default], () => P.default.initialProductSkuId), f = l.useCallback(e => t => {
    e.skuId === d && (s.current = t.current)
  }, [d, s]), {
    unifiedProductCatalogEnabled: C
  } = (0, O.useCollectiblesUnifiedProductCatalogExperiment)("CollectiblesShop");
  if (C || n) return (0, a.jsx)(ea, {
    products: c,
    handleShopCardMount: f,
    category: t,
    ...r
  });
  {
    var E, p;
    let e = (0, i.groupBy)(c, "type");
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(ea, {
        products: null !== (E = e[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== E ? E : [],
        handleShopCardMount: f,
        category: t,
        header: et.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...r
      }), (0, a.jsx)(ea, {
        products: null !== (p = e[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== p ? p : [],
        handleShopCardMount: f,
        category: t,
        header: et.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...r
      })]
    })
  }
}

function en(e) {
  let {
    category: t,
    isPremiumUser: s,
    initialItemCardRef: n,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: u,
    isFullScreen: c,
    lightningCheckoutEnabled: d,
    index: C,
    includeBundles: p = !1
  } = e, m = l.useRef(10 + 70 * Math.random()), [g, S] = l.useState(!1), h = (0, q.getCountdownDisplayOptions)(t.skuId), I = (0, E.useIsVisible)(e => {
    S(e && null != h)
  }, c ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: es.categoryWrapper,
    ref: I,
    children: [u && (0, a.jsx)(f.Clickable, {
      className: r()(es.hiddenWumpus, {
        [es.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, a.jsx)(x.default, {
        idleAnimationState: T.AnimationState.IDLE,
        giftStyle: ee.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(U.default, {
      category: t,
      hideLimitedTimeBadge: null != h,
      index: C
    }), (0, a.jsx)(el, {
      category: t,
      initialItemCardRef: n,
      isPremiumUser: s,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d,
      includeBundles: p
    }), null != h && null != t.unpublishedAt && (0, a.jsx)(F.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: g,
      displayOptions: h,
      isFullScreen: c
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: s,
    analyticsLocations: n
  } = (0, u.useStateFromStoresObject)([P.default], () => P.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, m.default)([...n, p.default.COLLECTIBLES_SHOP]), E = (0, u.useStateFromStores)([N.default], () => N.default.getLayers().includes(Q.Layers.COLLECTIBLES_SHOP)), T = (0, d.useHasAnyModalOpen)(), {
    onClose: x
  } = (0, Y.useCollectiblesShopRouting)(), b = (0, u.useStateFromStores)([L.default], () => L.default.getCurrentUser()), O = v.default.canUseCollectibles(b), j = (0, S.default)("shop_disable_cache"), B = (0, S.default)("shop_include_unpublished"), {
    categories: F,
    isFetchingCategories: U,
    error: W
  } = (0, M.default)({
    noCache: j,
    includeUnpublished: B
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let K = (0, k.usePurchasedCategoriesSort)(F),
    q = (0, I.useLightningCheckoutExperimentEnabled)(),
    et = (0, y.useShopBundleEnabled)("CollectiblesShop"),
    ea = l.useRef(null),
    [el, er] = l.useState(!1);
  (0, D.useProductDetailsDeepLinking)({
    categories: F,
    isFetchingCategories: U,
    isLayer: E,
    initialItemCardRef: ea
  });
  let {
    sessionId: ei,
    scrollerRef: eo,
    scrollHandler: eu
  } = (0, g.usePageScrollPosition)(Q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, s);
  l.useEffect(() => {
    R.default.track(Q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: s,
      page_session_id: ei
    }), !O && R.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [O, i, s, ei]);
  let {
    dismissCollectiblesShopTabNewBadge: ec
  } = (0, X.default)();
  l.useEffect(() => {
    ec(), !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, h.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [ec]), l.useEffect(() => {
    !t && (0, C.setHomeLink)(Q.Routes.COLLECTIBLES_SHOP)
  }, [t]), l.useEffect(() => () => {
    (0, A.setCollectiblesCategoryItemsViewed)({
      categories: [...F.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [F]), l.useEffect(() => {
    if (!t || E || T) return;
    let e = e => {
      e.key === J.KeyboardEventKey.Escape && x()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, E, T, x]);
  let ed = l.useCallback(() => {
      (0, A.fetchCollectiblesCategories)({
        noCache: j,
        includeUnpublished: B,
        includeBundles: et
      })
    }, [j, B, et]),
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
      handleScrollToCategory: eE
    } = (0, D.useCategoryDeepLinking)(eo.current),
    {
      condensedBannersAndDynamicHeadersEnabled: ep
    } = (0, Z.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, a.jsxs)(m.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsx)("div", {
      className: es.shop,
      ref: t ? ef : void 0,
      children: (0, a.jsxs)(f.AdvancedScroller, {
        className: es.shopScroll,
        ref: eo,
        onScroll: eu,
        children: [(0, a.jsx)(w.CollectiblesShopHeaderBar, {
          isFullScreen: t,
          isLayer: E,
          onClose: x
        }), (0, a.jsx)("div", {
          className: es.pageWrapper,
          children: (0, a.jsxs)("main", {
            className: r()(es.page, {
              [es.pageFullscreen]: t
            }),
            children: [ep && (0, a.jsx)(G.CollectiblesShopHeaderCarousel, {
              categories: K,
              handleScrollToCategory: eE
            }), U ? (0, a.jsx)(V.default, {}) : W ? (0, a.jsx)(H.default, {
              onRetry: ed
            }) : (0, a.jsx)("div", {
              className: es.categories,
              children: K.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, s) => (0, a.jsx)("div", {
                ref: t => eC(e.skuId, t),
                children: (0, a.jsx)(en, {
                  isPremiumUser: O,
                  category: e,
                  initialItemCardRef: ea,
                  setIsGiftEasterEggEnabled: er,
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
    }), el && (0, a.jsx)(z.default, {})]
  })
}