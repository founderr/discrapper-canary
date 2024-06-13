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
  g = s("605236"),
  h = s("51855"),
  I = s("479446"),
  _ = s("981632"),
  T = s("290026"),
  x = s("819640"),
  L = s("594174"),
  N = s("626135"),
  b = s("74538"),
  A = s("335131"),
  v = s("328347"),
  R = s("280773"),
  P = s("884697"),
  O = s("617452"),
  y = s("223143"),
  j = s("298228"),
  M = s("937510"),
  k = s("853748"),
  B = s("426171"),
  D = s("823941"),
  F = s("752053"),
  U = s("963102"),
  H = s("128185"),
  w = s("861746"),
  G = s("508498"),
  W = s("38900"),
  V = s("709999"),
  Y = s("373113"),
  K = s("994896"),
  z = s("141594"),
  Z = s("302800"),
  X = s("981631"),
  q = s("921944"),
  Q = s("420212"),
  $ = s("474936"),
  J = s("689938"),
  ee = s("425734");

function et(e) {
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
      className: ee.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, a.jsx)(f.Spacer, {
      size: 24
    }), (0, a.jsx)("div", {
      className: ee.cardsContainer,
      children: t.map(e => {
        var t;
        let l = (t = e, !o || (0, P.isBundleProduct)(t) ? V.default : w.default);
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

function es(e) {
  let {
    category: t,
    initialItemCardRef: s,
    includeBundles: n = !1,
    ...r
  } = e, c = (0, M.usePurchasedProductsSort)(t.products), d = (0, u.useStateFromStores)([v.default], () => v.default.initialProductSkuId), f = l.useCallback(e => t => {
    e.skuId === d && (s.current = t.current)
  }, [d, s]), {
    unifiedProductCatalogEnabled: C
  } = (0, R.useCollectiblesUnifiedProductCatalogExperiment)("CollectiblesShop");
  if (C || n) return (0, a.jsx)(et, {
    products: c,
    handleShopCardMount: f,
    category: t,
    ...r
  });
  {
    var E, m;
    let e = (0, i.groupBy)(c, "type");
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(et, {
        products: null !== (E = e[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== E ? E : [],
        handleShopCardMount: f,
        category: t,
        header: J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...r
      }), (0, a.jsx)(et, {
        products: null !== (m = e[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== m ? m : [],
        handleShopCardMount: f,
        category: t,
        header: J.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...r
      })]
    })
  }
}

function ea(e) {
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
  } = e, p = l.useRef(10 + 70 * Math.random()), [S, g] = l.useState(!1), h = (0, Z.getCountdownDisplayOptions)(t.skuId), T = (0, E.useIsVisible)(e => {
    g(e && null != h)
  }, c ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: ee.categoryWrapper,
    ref: T,
    children: [u && (0, a.jsx)(f.Clickable, {
      className: r()(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(p.current, "%")
      },
      children: (0, a.jsx)(_.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: $.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(D.default, {
      category: t,
      hideLimitedTimeBadge: null != h,
      index: C
    }), (0, a.jsx)(es, {
      category: t,
      initialItemCardRef: n,
      isPremiumUser: s,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d,
      includeBundles: m
    }), null != h && null != t.unpublishedAt && (0, a.jsx)(k.CollectiblesCountdown, {
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
  } = (0, u.useStateFromStoresObject)([v.default], () => v.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, p.default)([...n, m.default.COLLECTIBLES_SHOP]), E = (0, u.useStateFromStores)([x.default], () => x.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)), I = (0, d.useHasAnyModalOpen)(), {
    onClose: _
  } = (0, G.useCollectiblesShopRouting)(), R = (0, u.useStateFromStores)([L.default], () => L.default.getCurrentUser()), P = b.default.canUseCollectibles(R), {
    categories: M,
    isFetchingCategories: k,
    error: D,
    refreshCategories: w
  } = (0, y.default)();
  (0, T.useReloadProfileEffectWhenConfigsAreMissing)();
  let V = (0, j.usePurchasedCategoriesSort)(M),
    Z = (0, h.useLightningCheckoutExperimentEnabled)(),
    J = (0, O.useShopBundleEnabled)("CollectiblesShop"),
    et = l.useRef(null),
    [es, el] = l.useState(!1);
  (0, B.useProductDetailsDeepLinking)({
    categories: M,
    isFetchingCategories: k,
    isLayer: E,
    initialItemCardRef: et
  });
  let {
    sessionId: en,
    scrollerRef: er,
    scrollHandler: ei
  } = (0, S.usePageScrollPosition)(X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, s);
  l.useEffect(() => {
    N.default.track(X.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: s,
      page_session_id: en
    }), !P && N.default.track(X.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: $.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [P, i, s, en]);
  let {
    dismissCollectiblesShopTabNewBadge: eo
  } = (0, z.default)();
  l.useEffect(() => {
    eo(), !(0, g.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, g.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: q.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eo]), l.useEffect(() => {
    !t && (0, C.setHomeLink)(X.Routes.COLLECTIBLES_SHOP)
  }, [t]), l.useEffect(() => () => {
    (0, A.setCollectiblesCategoryItemsViewed)({
      categories: [...M.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [M]), l.useEffect(() => {
    if (!t || E || I) return;
    let e = e => {
      e.key === Q.KeyboardEventKey.Escape && _()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, E, I, _]);
  let eu = l.useCallback(() => {
      w()
    }, [w]),
    {
      containerRef: ec
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
      setCategoryRef: ed,
      handleScrollToCategory: ef
    } = (0, B.useCategoryDeepLinking)(er.current),
    {
      condensedBannersAndDynamicHeadersEnabled: eC
    } = (0, K.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, a.jsxs)(p.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsx)("div", {
      className: ee.shop,
      ref: t ? ec : void 0,
      children: (0, a.jsxs)(f.AdvancedScroller, {
        className: ee.shopScroll,
        ref: er,
        onScroll: ei,
        children: [(0, a.jsx)(U.CollectiblesShopHeaderBar, {
          isFullScreen: t,
          isLayer: E,
          onClose: _
        }), (0, a.jsx)("div", {
          className: ee.pageWrapper,
          children: (0, a.jsxs)("main", {
            className: r()(ee.page, {
              [ee.pageFullscreen]: t
            }),
            children: [eC && (0, a.jsx)(H.CollectiblesShopHeaderCarousel, {
              categories: V,
              handleScrollToCategory: ef
            }), k ? (0, a.jsx)(W.default, {}) : D ? (0, a.jsx)(F.default, {
              onRetry: eu
            }) : (0, a.jsx)("div", {
              className: ee.categories,
              children: V.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, s) => (0, a.jsx)("div", {
                ref: t => ed(e.skuId, t),
                children: (0, a.jsx)(ea, {
                  isPremiumUser: P,
                  category: e,
                  initialItemCardRef: et,
                  setIsGiftEasterEggEnabled: el,
                  isGiftEasterEggEnabled: es,
                  isFullScreen: t,
                  lightningCheckoutEnabled: Z,
                  includeBundles: J,
                  index: s
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), es && (0, a.jsx)(Y.default, {})]
  })
}