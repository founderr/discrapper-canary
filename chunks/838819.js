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
  m = a("425493"),
  p = a("434650"),
  g = a("410030"),
  E = a("100527"),
  h = a("906732"),
  b = a("702486"),
  x = a("580747"),
  v = a("605236"),
  S = a("984370"),
  I = a("329067"),
  L = a("51855"),
  T = a("479446"),
  N = a("981632"),
  _ = a("290026"),
  y = a("819640"),
  A = a("594174"),
  j = a("292665"),
  O = a("682864"),
  P = a("471731"),
  R = a("486620"),
  k = a("626135"),
  B = a("74538"),
  M = a("792125"),
  D = a("335131"),
  F = a("328347"),
  H = a("280773"),
  w = a("617452"),
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
  var t, a;
  let {
    category: r,
    initialItemCardRef: n,
    lightningCheckoutEnabled: u,
    isPremiumUser: d,
    isGiftEasterEggEnabled: C
  } = e, m = (0, G.usePurchasedProductsSort)(r.products), p = (0, i.groupBy)(m, "type"), g = (0, c.useStateFromStores)([F.default], () => F.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: E
  } = (0, H.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), h = u ? X.default : $.default, b = s.useCallback(e => t => {
    e.skuId === g && (n.current = t.current)
  }, [g, n]), x = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [null != t ? (0, l.jsx)(f.Text, {
      className: eo.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }) : (0, l.jsx)(O.default, {
      size: 24
    }), (0, l.jsx)("div", {
      className: eo.cardsContainer,
      children: e.map(e => (0, l.jsx)(h, {
        onMount: b(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return E ? x(m) : (0, l.jsxs)(l.Fragment, {
    children: [x(null !== (t = p[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], ei.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), x(null !== (a = p[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], ei.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function eu(e) {
  let {
    category: t,
    isPremiumUser: a,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: C
  } = e, m = s.useRef(10 + 70 * Math.random()), [g, E] = s.useState(!1), h = (0, ea.getCountdownDisplayOptions)(t.skuId), b = (0, p.useIsVisible)(e => {
    E(e && null != h)
  }, u ? .13 : .15);
  return (0, l.jsxs)("div", {
    className: eo.categoryWrapper,
    ref: b,
    children: [c && (0, l.jsx)(f.Clickable, {
      className: n()(eo.hiddenWumpus, {
        [eo.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, l.jsx)(N.default, {
        idleAnimationState: T.AnimationState.IDLE,
        giftStyle: en.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(z.default, {
      category: t,
      hideLimitedTimeBadge: null != h,
      index: C
    }), (0, l.jsx)(ec, {
      category: t,
      initialItemCardRef: r,
      isPremiumUser: a,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d
    }), null != h && null != t.unpublishedAt && (0, l.jsx)(V.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: g,
      displayOptions: h,
      isFullScreen: u
    })]
  })
}

function ed(e) {
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
    children: (0, l.jsx)(m.default, {
      className: eo.close,
      closeAction: a ? D.closeCollectiblesShop : s,
      keybind: "ESC"
    })
  }) : r ? (0, l.jsx)(S.default, {
    className: n()((0, M.getThemeClass)(i), eo.headerBar),
    innerClassname: eo.shopLogoContainer,
    toolbar: !0,
    children: (0, l.jsx)(R.default, {
      className: eo.shopLogo
    })
  }) : (0, l.jsxs)(S.default, {
    className: n()((0, M.getThemeClass)(i)),
    toolbar: !0,
    children: [(0, l.jsx)(P.default, {
      className: eo.logo
    }), (0, l.jsx)(S.default.Title, {
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
  } = (0, c.useStateFromStoresObject)([F.default], () => F.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, h.default)([...r, E.default.COLLECTIBLES_SHOP]), m = (0, c.useStateFromStores)([y.default], () => y.default.getLayers().includes(el.Layers.COLLECTIBLES_SHOP)), p = (0, d.useHasAnyModalOpen)(), {
    onClose: g
  } = (0, q.useCollectiblesShopRouting)(), S = (0, c.useStateFromStores)([A.default], () => A.default.getCurrentUser()), T = B.default.canUseCollectibles(S), N = (0, x.default)("shop_disable_cache"), O = (0, x.default)("shop_include_unpublished"), {
    categories: P,
    isFetchingCategories: R,
    error: M
  } = (0, U.default)({
    noCache: N,
    includeUnpublished: O
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let H = (0, W.usePurchasedCategoriesSort)(P),
    G = L.default.useExperiment({
      location: E.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: V
    } = (0, I.useLightningCheckoutEligibility)(),
    z = G.enabled && V,
    X = (0, w.useShopBundleEnabled)("CollectiblesShop"),
    $ = s.useRef(null),
    [ea, ec] = s.useState(!1);
  (0, K.useProductDetailsDeepLinking)({
    categories: P,
    isFetchingCategories: R,
    isLayer: m,
    initialItemCardRef: $
  });
  let {
    sessionId: ef,
    scrollerRef: eC,
    scrollHandler: em
  } = (0, b.usePageScrollPosition)(el.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    k.default.track(el.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: ef
    }), !T && k.default.track(el.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: en.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [T, i, a, ef]);
  let {
    dismissCollectiblesShopTabNewBadge: ep
  } = (0, et.default)();
  s.useEffect(() => {
    ep(), !(0, v.isDismissibleContentDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: es.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [ep]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(el.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, D.setCollectiblesCategoryItemsViewed)({
      categories: [...P.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [P]), s.useEffect(() => {
    if (!t || m || p) return;
    let e = e => {
      e.key === er.KeyboardEventKey.Escape && g()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, m, p, g]), s.useEffect(() => {
    V && L.default.trackExposure({
      location: E.default.COLLECTIBLES_SHOP
    })
  }, [V]);
  let eg = s.useCallback(() => {
      (0, D.fetchCollectiblesCategories)({
        noCache: N,
        includeUnpublished: O,
        includeBundles: X
      })
    }, [N, O, X]),
    {
      containerRef: eE,
      returnRef: eh
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
      setCategoryRef: eb,
      handleScrollToCategory: ex
    } = (0, K.useCategoryDeepLinking)(),
    {
      condensedBannersAndDynamicHeadersEnabled: ev
    } = (0, ee.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, l.jsxs)(h.AnalyticsLocationProvider, {
    value: i,
    children: [(0, l.jsxs)("div", {
      className: eo.shop,
      ref: t ? eE : void 0,
      children: [(0, l.jsx)(ed, {
        isFullScreen: t,
        isLayer: m,
        onClose: g
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: eo.shopScroll,
        ref: eC,
        onScroll: em,
        children: (0, l.jsx)("div", {
          className: n()(eo.pageWrapper, {
            [eo.pageWrapperFullscreen]: t
          }),
          children: (0, l.jsxs)("main", {
            className: n()(eo.page, {
              [eo.pageWithShopBannerHidden]: !t
            }),
            children: [ev && (0, l.jsx)(Z.CollectiblesShopHeaderCarousel, {
              categories: H,
              handleScrollToCategory: ex
            }), t ? (0, l.jsx)(j.default, {
              title: ei.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eh : void 0
            }) : null, R ? (0, l.jsx)(Q.default, {}) : M ? (0, l.jsx)(Y.default, {
              onRetry: eg
            }) : (0, l.jsx)("div", {
              className: eo.categories,
              children: H.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, a) => (0, l.jsx)("div", {
                ref: t => eb(e.skuId, t),
                children: (0, l.jsx)(eu, {
                  isPremiumUser: T,
                  category: e,
                  initialItemCardRef: $,
                  setIsGiftEasterEggEnabled: ec,
                  isGiftEasterEggEnabled: ea,
                  isFullScreen: t,
                  lightningCheckoutEnabled: z,
                  index: a
                })
              }, e.skuId))
            })]
          })
        })
      })]
    }), ea && (0, l.jsx)(J.default, {})]
  })
}