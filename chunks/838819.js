"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("392711"),
  o = a("979554"),
  c = a("399606"),
  u = a("524437"),
  d = a("952265"),
  f = a("481060"),
  C = a("150063"),
  p = a("425493"),
  m = a("434650"),
  g = a("410030"),
  E = a("100527"),
  h = a("906732"),
  b = a("702486"),
  x = a("580747"),
  S = a("605236"),
  v = a("984370"),
  I = a("51855"),
  L = a("479446"),
  T = a("981632"),
  N = a("290026"),
  _ = a("819640"),
  y = a("594174"),
  A = a("292665"),
  j = a("682864"),
  O = a("471731"),
  k = a("486620"),
  P = a("626135"),
  R = a("74538"),
  B = a("792125"),
  M = a("335131"),
  D = a("328347"),
  w = a("280773"),
  F = a("884697"),
  H = a("617452"),
  U = a("223143"),
  W = a("298228"),
  G = a("937510"),
  V = a("853748"),
  K = a("426171"),
  z = a("823941"),
  Y = a("752053"),
  Z = a("128185"),
  X = a("861746"),
  q = a("508498"),
  Q = a("38900"),
  $ = a("709999"),
  J = a("373113"),
  ee = a("994896"),
  et = a("141594"),
  ea = a("302800"),
  el = a("981631"),
  es = a("921944"),
  er = a("420212"),
  en = a("474936"),
  ei = a("689938"),
  eo = a("425734");

function ec(e) {
  let {
    products: t,
    handleShopCardMount: a,
    header: s,
    category: r,
    isPremiumUser: n,
    isGiftEasterEggEnabled: i,
    lightningCheckoutEnabled: o
  } = e;
  return 0 === t.length ? null : (0, l.jsxs)("div", {
    children: [null != s ? (0, l.jsx)(f.Text, {
      className: eo.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: s
    }) : (0, l.jsx)(j.default, {
      size: 24
    }), (0, l.jsx)("div", {
      className: eo.cardsContainer,
      children: t.map(e => {
        var t;
        let s = (t = e, !o || (0, F.isBundleProduct)(t) ? $.default : X.default);
        return (0, l.jsx)(s, {
          onMount: a(e),
          isPremiumUser: n,
          category: r,
          product: e,
          isGiftEasterEggEnabled: i
        }, e.skuId)
      })
    })]
  })
}

function eu(e) {
  let {
    category: t,
    initialItemCardRef: a,
    includeBundles: r = !1,
    ...n
  } = e, u = (0, G.usePurchasedProductsSort)(t.products), d = (0, c.useStateFromStores)([D.default], () => D.default.initialProductSkuId), f = s.useCallback(e => t => {
    e.skuId === d && (a.current = t.current)
  }, [d, a]), {
    unifiedProductCatalogEnabled: C
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)("CollectiblesShop");
  if (C || r) return (0, l.jsx)(ec, {
    products: u,
    handleShopCardMount: f,
    category: t,
    ...n
  });
  {
    var p, m;
    let e = (0, i.groupBy)(u, "type");
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(ec, {
        products: null !== (p = e[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== p ? p : [],
        handleShopCardMount: f,
        category: t,
        header: ei.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...n
      }), (0, l.jsx)(ec, {
        products: null !== (m = e[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== m ? m : [],
        handleShopCardMount: f,
        category: t,
        header: ei.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...n
      })]
    })
  }
}

function ed(e) {
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
    includeBundles: p = !1
  } = e, g = s.useRef(10 + 70 * Math.random()), [E, h] = s.useState(!1), b = (0, ea.getCountdownDisplayOptions)(t.skuId), x = (0, m.useIsVisible)(e => {
    h(e && null != b)
  }, u ? .13 : .15);
  return (0, l.jsxs)("div", {
    className: eo.categoryWrapper,
    ref: x,
    children: [c && (0, l.jsx)(f.Clickable, {
      className: n()(eo.hiddenWumpus, {
        [eo.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, l.jsx)(T.default, {
        idleAnimationState: L.AnimationState.IDLE,
        giftStyle: en.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(z.default, {
      category: t,
      hideLimitedTimeBadge: null != b,
      index: C
    }), (0, l.jsx)(eu, {
      category: t,
      initialItemCardRef: r,
      isPremiumUser: a,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d,
      includeBundles: p
    }), null != b && null != t.unpublishedAt && (0, l.jsx)(V.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: E,
      displayOptions: b,
      isFullScreen: u
    })]
  })
}

function ef(e) {
  let {
    isFullScreen: t,
    isLayer: a,
    onClose: s
  } = e, {
    condensedBannersEnabled: r
  } = (0, ee.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), i = (0, g.default)();
  return t ? (0, l.jsx)("div", {
    className: eo.closeWrapper,
    children: (0, l.jsx)(p.default, {
      className: eo.close,
      closeAction: a ? M.closeCollectiblesShop : s,
      keybind: "ESC"
    })
  }) : r ? (0, l.jsx)(v.default, {
    className: n()((0, B.getThemeClass)(i), eo.headerBar),
    innerClassname: eo.shopLogoContainer,
    toolbar: !0,
    children: (0, l.jsx)(k.default, {
      className: eo.shopLogo
    })
  }) : (0, l.jsxs)(v.default, {
    className: n()((0, B.getThemeClass)(i)),
    toolbar: !0,
    children: [(0, l.jsx)(O.default, {
      className: eo.logo
    }), (0, l.jsx)(v.default.Title, {
      className: eo.title,
      children: ei.default.Messages.COLLECTIBLES_SHOP
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, c.useStateFromStoresObject)([D.default], () => D.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, h.default)([...r, E.default.COLLECTIBLES_SHOP]), p = (0, c.useStateFromStores)([_.default], () => _.default.getLayers().includes(el.Layers.COLLECTIBLES_SHOP)), m = (0, d.useHasAnyModalOpen)(), {
    onClose: g
  } = (0, q.useCollectiblesShopRouting)(), v = (0, c.useStateFromStores)([y.default], () => y.default.getCurrentUser()), L = R.default.canUseCollectibles(v), T = (0, x.default)("shop_disable_cache"), j = (0, x.default)("shop_include_unpublished"), {
    categories: O,
    isFetchingCategories: k,
    error: B
  } = (0, U.default)({
    noCache: T,
    includeUnpublished: j
  });
  (0, N.useReloadProfileEffectWhenConfigsAreMissing)();
  let w = (0, W.usePurchasedCategoriesSort)(O),
    F = (0, I.useLightningCheckoutExperimentEnabled)(),
    G = (0, H.useShopBundleEnabled)("CollectiblesShop"),
    V = s.useRef(null),
    [z, X] = s.useState(!1);
  (0, K.useProductDetailsDeepLinking)({
    categories: O,
    isFetchingCategories: k,
    isLayer: p,
    initialItemCardRef: V
  });
  let {
    sessionId: $,
    scrollerRef: ea,
    scrollHandler: ec
  } = (0, b.usePageScrollPosition)(el.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    P.default.track(el.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: $
    }), !L && P.default.track(el.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: en.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [L, i, a, $]);
  let {
    dismissCollectiblesShopTabNewBadge: eu
  } = (0, et.default)();
  s.useEffect(() => {
    eu(), !(0, S.isDismissibleContentDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, S.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: es.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eu]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(el.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, M.setCollectiblesCategoryItemsViewed)({
      categories: [...O.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [O]), s.useEffect(() => {
    if (!t || p || m) return;
    let e = e => {
      e.key === er.KeyboardEventKey.Escape && g()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, m, g]);
  let eC = s.useCallback(() => {
      (0, M.fetchCollectiblesCategories)({
        noCache: T,
        includeUnpublished: j,
        includeBundles: G
      })
    }, [T, j, G]),
    {
      containerRef: ep,
      returnRef: em
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
      setCategoryRef: eg,
      handleScrollToCategory: eE
    } = (0, K.useCategoryDeepLinking)(),
    {
      condensedBannersAndDynamicHeadersEnabled: eh
    } = (0, ee.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, l.jsxs)(h.AnalyticsLocationProvider, {
    value: i,
    children: [(0, l.jsxs)("div", {
      className: eo.shop,
      ref: t ? ep : void 0,
      children: [(0, l.jsx)(ef, {
        isFullScreen: t,
        isLayer: p,
        onClose: g
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: eo.shopScroll,
        ref: ea,
        onScroll: ec,
        children: (0, l.jsx)("div", {
          className: n()(eo.pageWrapper, {
            [eo.pageWrapperFullscreen]: t
          }),
          children: (0, l.jsxs)("main", {
            className: n()(eo.page, {
              [eo.pageWithShopBannerHidden]: !t
            }),
            children: [eh && (0, l.jsx)(Z.CollectiblesShopHeaderCarousel, {
              categories: w,
              handleScrollToCategory: eE
            }), t ? (0, l.jsx)(A.default, {
              title: ei.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? em : void 0
            }) : null, k ? (0, l.jsx)(Q.default, {}) : B ? (0, l.jsx)(Y.default, {
              onRetry: eC
            }) : (0, l.jsx)("div", {
              className: eo.categories,
              children: w.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, a) => (0, l.jsx)("div", {
                ref: t => eg(e.skuId, t),
                children: (0, l.jsx)(ed, {
                  isPremiumUser: L,
                  category: e,
                  initialItemCardRef: V,
                  setIsGiftEasterEggEnabled: X,
                  isGiftEasterEggEnabled: z,
                  isFullScreen: t,
                  lightningCheckoutEnabled: F,
                  includeBundles: G,
                  index: a
                })
              }, e.skuId))
            })]
          })
        })
      })]
    }), z && (0, l.jsx)(J.default, {})]
  })
}