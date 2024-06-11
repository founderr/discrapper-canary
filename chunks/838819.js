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
  m = s("100527"),
  p = s("906732"),
  S = s("702486"),
  g = s("580747"),
  h = s("605236"),
  I = s("51855"),
  _ = s("479446"),
  T = s("981632"),
  x = s("290026"),
  L = s("819640"),
  N = s("594174"),
  b = s("626135"),
  A = s("74538"),
  v = s("335131"),
  R = s("328347"),
  P = s("280773"),
  O = s("884697"),
  y = s("617452"),
  j = s("223143"),
  M = s("298228"),
  k = s("937510"),
  B = s("853748"),
  D = s("426171"),
  F = s("823941"),
  U = s("752053"),
  H = s("963102"),
  w = s("128185"),
  G = s("861746"),
  W = s("508498"),
  V = s("38900"),
  Y = s("709999"),
  K = s("373113"),
  z = s("994896"),
  Z = s("141594"),
  X = s("302800"),
  q = s("981631"),
  Q = s("921944"),
  $ = s("420212"),
  J = s("474936"),
  ee = s("689938"),
  et = s("425734");

function es(e) {
  let {
    products: t,
    handleShopCardMount: s,
    header: l,
    category: n,
    isPremiumUser: r,
    isGiftEasterEggEnabled: i,
    lightningCheckoutEnabled: o
  } = e, c = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser());
  return null == c || 0 === t.length ? null : (0, a.jsxs)("div", {
    children: [null != l ? (0, a.jsx)(f.Text, {
      className: et.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, a.jsx)(f.Spacer, {
      size: 24
    }), (0, a.jsx)("div", {
      className: et.cardsContainer,
      children: t.map(e => {
        var t;
        let l = (t = e, !o || (0, O.isBundleProduct)(t) ? Y.default : G.default);
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

function ea(e) {
  let {
    category: t,
    initialItemCardRef: s,
    includeBundles: n = !1,
    ...r
  } = e, c = (0, k.usePurchasedProductsSort)(t.products), d = (0, u.useStateFromStores)([R.default], () => R.default.initialProductSkuId), f = l.useCallback(e => t => {
    e.skuId === d && (s.current = t.current)
  }, [d, s]), {
    unifiedProductCatalogEnabled: C
  } = (0, P.useCollectiblesUnifiedProductCatalogExperiment)("CollectiblesShop");
  if (C || n) return (0, a.jsx)(es, {
    products: c,
    handleShopCardMount: f,
    category: t,
    ...r
  });
  {
    var E, m;
    let e = (0, i.groupBy)(c, "type");
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(es, {
        products: null !== (E = e[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== E ? E : [],
        handleShopCardMount: f,
        category: t,
        header: ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...r
      }), (0, a.jsx)(es, {
        products: null !== (m = e[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== m ? m : [],
        handleShopCardMount: f,
        category: t,
        header: ee.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...r
      })]
    })
  }
}

function el(e) {
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
    includeBundles: m = !1
  } = e, p = l.useRef(10 + 70 * Math.random()), [S, g] = l.useState(!1), h = (0, X.getCountdownDisplayOptions)(t.skuId), I = (0, E.useIsVisible)(e => {
    g(e && null != h)
  }, c ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: et.categoryWrapper,
    ref: I,
    children: [u && (0, a.jsx)(f.Clickable, {
      className: r()(et.hiddenWumpus, {
        [et.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(p.current, "%")
      },
      children: (0, a.jsx)(T.default, {
        idleAnimationState: _.AnimationState.IDLE,
        giftStyle: J.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(F.default, {
      category: t,
      hideLimitedTimeBadge: null != h,
      index: C
    }), (0, a.jsx)(ea, {
      category: t,
      initialItemCardRef: n,
      isPremiumUser: s,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d,
      includeBundles: m
    }), null != h && null != t.unpublishedAt && (0, a.jsx)(B.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: S,
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
  } = (0, u.useStateFromStoresObject)([R.default], () => R.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, p.default)([...n, m.default.COLLECTIBLES_SHOP]), E = (0, u.useStateFromStores)([L.default], () => L.default.getLayers().includes(q.Layers.COLLECTIBLES_SHOP)), _ = (0, d.useHasAnyModalOpen)(), {
    onClose: T
  } = (0, W.useCollectiblesShopRouting)(), P = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser()), O = A.default.canUseCollectibles(P), k = (0, g.default)("shop_disable_cache"), B = (0, g.default)("shop_include_unpublished"), {
    categories: F,
    isFetchingCategories: G,
    error: Y
  } = (0, j.default)({
    noCache: k,
    includeUnpublished: B
  });
  (0, x.useReloadProfileEffectWhenConfigsAreMissing)();
  let X = (0, M.usePurchasedCategoriesSort)(F),
    ee = (0, I.useLightningCheckoutExperimentEnabled)(),
    es = (0, y.useShopBundleEnabled)("CollectiblesShop"),
    ea = l.useRef(null),
    [en, er] = l.useState(!1);
  (0, D.useProductDetailsDeepLinking)({
    categories: F,
    isFetchingCategories: G,
    isLayer: E,
    initialItemCardRef: ea
  });
  let {
    sessionId: ei,
    scrollerRef: eo,
    scrollHandler: eu
  } = (0, S.usePageScrollPosition)(q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, s);
  l.useEffect(() => {
    b.default.track(q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: s,
      page_session_id: ei
    }), !O && b.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: J.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [O, i, s, ei]);
  let {
    dismissCollectiblesShopTabNewBadge: ec
  } = (0, Z.default)();
  l.useEffect(() => {
    ec(), !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, h.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: Q.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [ec]), l.useEffect(() => {
    !t && (0, C.setHomeLink)(q.Routes.COLLECTIBLES_SHOP)
  }, [t]), l.useEffect(() => () => {
    (0, v.setCollectiblesCategoryItemsViewed)({
      categories: [...F.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [F]), l.useEffect(() => {
    if (!t || E || _) return;
    let e = e => {
      e.key === $.KeyboardEventKey.Escape && T()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, E, _, T]);
  let ed = l.useCallback(() => {
      (0, v.fetchCollectiblesCategories)({
        noCache: k,
        includeUnpublished: B,
        includeBundles: es
      })
    }, [k, B, es]),
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
      condensedBannersAndDynamicHeadersEnabled: em
    } = (0, z.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, a.jsxs)(p.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsx)("div", {
      className: et.shop,
      ref: t ? ef : void 0,
      children: (0, a.jsxs)(f.AdvancedScroller, {
        className: et.shopScroll,
        ref: eo,
        onScroll: eu,
        children: [(0, a.jsx)(H.CollectiblesShopHeaderBar, {
          isFullScreen: t,
          isLayer: E,
          onClose: T
        }), (0, a.jsx)("div", {
          className: et.pageWrapper,
          children: (0, a.jsxs)("main", {
            className: r()(et.page, {
              [et.pageFullscreen]: t
            }),
            children: [em && (0, a.jsx)(w.CollectiblesShopHeaderCarousel, {
              categories: X,
              handleScrollToCategory: eE
            }), G ? (0, a.jsx)(V.default, {}) : Y ? (0, a.jsx)(U.default, {
              onRetry: ed
            }) : (0, a.jsx)("div", {
              className: et.categories,
              children: X.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, s) => (0, a.jsx)("div", {
                ref: t => eC(e.skuId, t),
                children: (0, a.jsx)(el, {
                  isPremiumUser: O,
                  category: e,
                  initialItemCardRef: ea,
                  setIsGiftEasterEggEnabled: er,
                  isGiftEasterEggEnabled: en,
                  isFullScreen: t,
                  lightningCheckoutEnabled: ee,
                  includeBundles: es,
                  index: s
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), en && (0, a.jsx)(K.default, {})]
  })
}