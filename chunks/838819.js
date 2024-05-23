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
  m = l("425493"),
  p = l("434650"),
  g = l("410030"),
  E = l("100527"),
  h = l("906732"),
  b = l("702486"),
  x = l("580747"),
  v = l("605236"),
  S = l("984370"),
  I = l("329067"),
  L = l("51855"),
  T = l("479446"),
  N = l("981632"),
  _ = l("290026"),
  y = l("819640"),
  A = l("594174"),
  j = l("292665"),
  O = l("682864"),
  k = l("471731"),
  R = l("486620"),
  P = l("626135"),
  B = l("74538"),
  M = l("792125"),
  D = l("335131"),
  F = l("328347"),
  H = l("280773"),
  w = l("617452"),
  U = l("223143"),
  W = l("298228"),
  G = l("937510"),
  V = l("853748"),
  K = l("426171"),
  z = l("823941"),
  Y = l("752053"),
  Z = l("128185"),
  X = l("861746"),
  q = l("508498"),
  Q = l("38900"),
  $ = l("709999"),
  J = l("373113"),
  ee = l("994896"),
  et = l("141594"),
  el = l("302800"),
  ea = l("981631"),
  es = l("921944"),
  er = l("420212"),
  en = l("474936"),
  ei = l("689938"),
  eo = l("425734");

function ec(e) {
  var t, l;
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
  }, [g, n]), x = (e, t) => 0 === e.length ? null : (0, a.jsxs)("div", {
    children: [null != t ? (0, a.jsx)(f.Text, {
      className: eo.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }) : (0, a.jsx)(O.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: eo.cardsContainer,
      children: e.map(e => (0, a.jsx)(h, {
        onMount: b(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return E ? x(m) : (0, a.jsxs)(a.Fragment, {
    children: [x(null !== (t = p[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], ei.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), x(null !== (l = p[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== l ? l : [], ei.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function eu(e) {
  let {
    category: t,
    isPremiumUser: l,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: C
  } = e, m = s.useRef(10 + 70 * Math.random()), [g, E] = s.useState(!1), h = (0, el.getCountdownDisplayOptions)(t.skuId), b = (0, p.useIsVisible)(e => {
    E(e && null != h)
  }, u ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: eo.categoryWrapper,
    ref: b,
    children: [c && (0, a.jsx)(f.Clickable, {
      className: n()(eo.hiddenWumpus, {
        [eo.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, a.jsx)(N.default, {
        idleAnimationState: T.AnimationState.IDLE,
        giftStyle: en.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(z.default, {
      category: t,
      hideLimitedTimeBadge: null != h,
      index: C
    }), (0, a.jsx)(ec, {
      category: t,
      initialItemCardRef: r,
      isPremiumUser: l,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d
    }), null != h && null != t.unpublishedAt && (0, a.jsx)(V.CollectiblesCountdown, {
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
    isLayer: l,
    onClose: s
  } = e, {
    condensedBannersEnabled: r
  } = (0, ee.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), i = (0, g.default)();
  return t ? (0, a.jsx)("div", {
    className: eo.closeWrapper,
    children: (0, a.jsx)(m.default, {
      className: eo.close,
      closeAction: l ? D.closeCollectiblesShop : s,
      keybind: "ESC"
    })
  }) : r ? (0, a.jsx)(S.default, {
    className: n()((0, M.getThemeClass)(i), eo.headerBar),
    innerClassname: eo.shopLogoContainer,
    toolbar: !0,
    children: (0, a.jsx)(R.default, {
      className: eo.shopLogo
    })
  }) : (0, a.jsxs)(S.default, {
    className: n()((0, M.getThemeClass)(i)),
    toolbar: !0,
    children: [(0, a.jsx)(k.default, {
      className: eo.logo
    }), (0, a.jsx)(S.default.Title, {
      className: eo.title,
      children: ei.default.Messages.COLLECTIBLES_SHOP
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: l,
    analyticsLocations: r
  } = (0, c.useStateFromStoresObject)([F.default], () => F.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, h.default)([...r, E.default.COLLECTIBLES_SHOP]), m = (0, c.useStateFromStores)([y.default], () => y.default.getLayers().includes(ea.Layers.COLLECTIBLES_SHOP)), p = (0, d.useHasAnyModalOpen)(), {
    onClose: g
  } = (0, q.useCollectiblesShopRouting)(), S = (0, c.useStateFromStores)([A.default], () => A.default.getCurrentUser()), T = B.default.canUseCollectibles(S), N = (0, x.default)("shop_disable_cache"), O = (0, x.default)("shop_include_unpublished"), {
    categories: k,
    isFetchingCategories: R,
    error: M
  } = (0, U.default)({
    noCache: N,
    includeUnpublished: O
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let H = (0, W.usePurchasedCategoriesSort)(k),
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
    [el, ec] = s.useState(!1);
  (0, K.useProductDetailsDeepLinking)({
    categories: k,
    isFetchingCategories: R,
    isLayer: m,
    initialItemCardRef: $
  });
  let {
    sessionId: ef,
    scrollerRef: eC,
    scrollHandler: em
  } = (0, b.usePageScrollPosition)(ea.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
  s.useEffect(() => {
    P.default.track(ea.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: l,
      page_session_id: ef
    }), !T && P.default.track(ea.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: en.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [T, i, l, ef]);
  let {
    dismissCollectiblesShopTabNewBadge: ep
  } = (0, et.default)();
  s.useEffect(() => {
    ep(), !(0, v.isDismissibleContentDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: es.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [ep]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(ea.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, D.setCollectiblesCategoryItemsViewed)({
      categories: [...k.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [k]), s.useEffect(() => {
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
  return (0, a.jsxs)(h.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsxs)("div", {
      className: eo.shop,
      ref: t ? eE : void 0,
      children: [(0, a.jsx)(ed, {
        isFullScreen: t,
        isLayer: m,
        onClose: g
      }), (0, a.jsx)(f.AdvancedScroller, {
        className: eo.shopScroll,
        ref: eC,
        onScroll: em,
        children: (0, a.jsx)("div", {
          className: n()(eo.pageWrapper, {
            [eo.pageWrapperFullscreen]: t
          }),
          children: (0, a.jsxs)("main", {
            className: n()(eo.page, {
              [eo.pageWithShopBannerHidden]: !t
            }),
            children: [ev && (0, a.jsx)(Z.CollectiblesShopHeaderCarousel, {
              categories: H,
              handleScrollToCategory: ex
            }), t ? (0, a.jsx)(j.default, {
              title: ei.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eh : void 0
            }) : null, R ? (0, a.jsx)(Q.default, {}) : M ? (0, a.jsx)(Y.default, {
              onRetry: eg
            }) : (0, a.jsx)("div", {
              className: eo.categories,
              children: H.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, l) => (0, a.jsx)("div", {
                ref: t => eb(e.skuId, t),
                children: (0, a.jsx)(eu, {
                  isPremiumUser: T,
                  category: e,
                  initialItemCardRef: $,
                  setIsGiftEasterEggEnabled: ec,
                  isGiftEasterEggEnabled: el,
                  isFullScreen: t,
                  lightningCheckoutEnabled: z,
                  index: l
                })
              }, e.skuId))
            })]
          })
        })
      })]
    }), el && (0, a.jsx)(J.default, {})]
  })
}