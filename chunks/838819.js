"use strict";
a.r(t), a("47120");
var s = a("735250"),
  r = a("470079"),
  n = a("120356"),
  l = a.n(n),
  o = a("392711"),
  i = a("979554"),
  c = a("399606"),
  u = a("524437"),
  d = a("952265"),
  f = a("481060"),
  C = a("150063"),
  p = a("425493"),
  m = a("434650"),
  g = a("410030"),
  E = a("100527"),
  b = a("906732"),
  h = a("702486"),
  S = a("580747"),
  T = a("605236"),
  v = a("984370"),
  y = a("329067"),
  x = a("51855"),
  _ = a("479446"),
  I = a("981632"),
  L = a("290026"),
  A = a("819640"),
  N = a("594174"),
  P = a("292665"),
  R = a("682864"),
  O = a("471731"),
  k = a("486620"),
  M = a("626135"),
  j = a("74538"),
  B = a("792125"),
  D = a("335131"),
  F = a("328347"),
  w = a("280773"),
  H = a("617452"),
  U = a("223143"),
  G = a("298228"),
  W = a("937510"),
  Y = a("853748"),
  V = a("426171"),
  K = a("823941"),
  z = a("752053"),
  Z = a("128185"),
  X = a("861746"),
  q = a("508498"),
  Q = a("38900"),
  J = a("709999"),
  $ = a("373113"),
  ee = a("994896"),
  et = a("141594"),
  ea = a("302800"),
  es = a("981631"),
  er = a("921944"),
  en = a("420212"),
  el = a("474936"),
  eo = a("689938"),
  ei = a("425734");

function ec(e) {
  var t, a;
  let {
    category: n,
    initialItemCardRef: l,
    lightningCheckoutEnabled: u,
    isPremiumUser: d,
    isGiftEasterEggEnabled: C
  } = e, p = (0, W.usePurchasedProductsSort)(n.products), m = (0, o.groupBy)(p, "type"), g = (0, c.useStateFromStores)([F.default], () => F.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: E
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), b = u ? X.default : J.default, h = r.useCallback(e => t => {
    e.skuId === g && (l.current = t.current)
  }, [g, l]), S = (e, t) => 0 === e.length ? null : (0, s.jsxs)("div", {
    children: [null != t ? (0, s.jsx)(f.Text, {
      className: ei.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }) : (0, s.jsx)(R.default, {
      size: 24
    }), (0, s.jsx)("div", {
      className: ei.cardsContainer,
      children: e.map(e => (0, s.jsx)(b, {
        onMount: h(e),
        isPremiumUser: d,
        category: n,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return E ? S(p) : (0, s.jsxs)(s.Fragment, {
    children: [S(null !== (t = m[i.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], eo.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), S(null !== (a = m[i.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], eo.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function eu(e) {
  let {
    category: t,
    isPremiumUser: a,
    initialItemCardRef: n,
    isGiftEasterEggEnabled: o,
    setIsGiftEasterEggEnabled: i,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: C
  } = e, p = r.useRef(10 + 70 * Math.random()), [g, E] = r.useState(!1), b = (0, ea.getCountdownDisplayOptions)(t.skuId), h = (0, m.useIsVisible)(e => {
    E(e && null != b)
  }, u ? .13 : .15);
  return (0, s.jsxs)("div", {
    className: ei.categoryWrapper,
    ref: h,
    children: [c && (0, s.jsx)(f.Clickable, {
      className: l()(ei.hiddenWumpus, {
        [ei.hiddenWumpusEnabled]: o
      }),
      onClick: () => i(!0),
      style: {
        left: "".concat(p.current, "%")
      },
      children: (0, s.jsx)(I.default, {
        idleAnimationState: _.AnimationState.IDLE,
        giftStyle: el.PremiumGiftStyles.BOX
      })
    }), (0, s.jsx)(K.default, {
      category: t,
      hideLimitedTimeBadge: null != b,
      index: C
    }), (0, s.jsx)(ec, {
      category: t,
      initialItemCardRef: n,
      isPremiumUser: a,
      isGiftEasterEggEnabled: o,
      lightningCheckoutEnabled: d
    }), null != b && null != t.unpublishedAt && (0, s.jsx)(Y.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: g,
      displayOptions: b,
      isFullScreen: u
    })]
  })
}

function ed(e) {
  let {
    isFullScreen: t,
    isLayer: a,
    onClose: r
  } = e, {
    condensedBannersEnabled: n
  } = (0, ee.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), o = (0, g.default)();
  return t ? (0, s.jsx)("div", {
    className: ei.closeWrapper,
    children: (0, s.jsx)(p.default, {
      className: ei.close,
      closeAction: a ? D.closeCollectiblesShop : r,
      keybind: "ESC"
    })
  }) : n ? (0, s.jsx)(v.default, {
    className: l()((0, B.getThemeClass)(o), ei.headerBar),
    innerClassname: ei.shopLogoContainer,
    toolbar: !0,
    children: (0, s.jsx)(k.default, {
      className: ei.shopLogo
    })
  }) : (0, s.jsxs)(v.default, {
    className: l()((0, B.getThemeClass)(o)),
    toolbar: !0,
    children: [(0, s.jsx)(O.default, {
      className: ei.logo
    }), (0, s.jsx)(v.default.Title, {
      className: ei.title,
      children: eo.default.Messages.COLLECTIBLES_SHOP
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: n
  } = (0, c.useStateFromStoresObject)([F.default], () => F.default.getAnalytics()), {
    analyticsLocations: o
  } = (0, b.default)([...n, E.default.COLLECTIBLES_SHOP]), p = (0, c.useStateFromStores)([A.default], () => A.default.getLayers().includes(es.Layers.COLLECTIBLES_SHOP)), m = (0, d.useHasAnyModalOpen)(), {
    onClose: g
  } = (0, q.useCollectiblesShopRouting)(), v = (0, c.useStateFromStores)([N.default], () => N.default.getCurrentUser()), _ = j.default.canUseCollectibles(v), I = (0, S.default)("shop_disable_cache"), R = (0, S.default)("shop_include_unpublished"), {
    categories: O,
    isFetchingCategories: k,
    error: B
  } = (0, U.default)({
    noCache: I,
    includeUnpublished: R
  });
  (0, L.useReloadProfileEffectWhenConfigsAreMissing)();
  let w = (0, G.usePurchasedCategoriesSort)(O),
    W = x.default.useExperiment({
      location: E.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: Y
    } = (0, y.useLightningCheckoutEligibility)(),
    K = W.enabled && Y,
    X = (0, H.useShopBundleEnabled)("CollectiblesShop"),
    J = r.useRef(null),
    [ea, ec] = r.useState(!1);
  (0, V.useProductDetailsDeepLinking)({
    categories: O,
    isFetchingCategories: k,
    isLayer: p,
    initialItemCardRef: J
  });
  let {
    sessionId: ef,
    scrollerRef: eC,
    scrollHandler: ep
  } = (0, h.usePageScrollPosition)(es.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  r.useEffect(() => {
    M.default.track(es.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: ef
    }), !_ && M.default.track(es.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: el.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [_, o, a, ef]);
  let {
    dismissCollectiblesShopTabNewBadge: em
  } = (0, et.default)();
  r.useEffect(() => {
    em(), !(0, T.isDismissibleContentDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: er.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [em]), r.useEffect(() => {
    !t && (0, C.setHomeLink)(es.Routes.COLLECTIBLES_SHOP)
  }, [t]), r.useEffect(() => () => {
    (0, D.setCollectiblesCategoryItemsViewed)({
      categories: [...O.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [O]), r.useEffect(() => {
    if (!t || p || m) return;
    let e = e => {
      e.key === en.KeyboardEventKey.Escape && g()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, m, g]), r.useEffect(() => {
    Y && x.default.trackExposure({
      location: E.default.COLLECTIBLES_SHOP
    })
  }, [Y]);
  let eg = r.useCallback(() => {
      (0, D.fetchCollectiblesCategories)({
        noCache: I,
        includeUnpublished: R,
        includeBundles: X
      })
    }, [I, R, X]),
    {
      containerRef: eE,
      returnRef: eb
    } = function() {
      let e = r.useRef(null),
        t = r.useRef(null);
      return (0, f.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }(),
    {
      setCategoryRef: eh,
      handleScrollToCategory: eS
    } = (0, V.useCategoryDeepLinking)(),
    {
      condensedBannersAndDynamicHeadersEnabled: eT
    } = (0, ee.useCollectiblesCondensedBannersExperiment)({
      location: "CollectiblesShop"
    });
  return (0, s.jsxs)(b.AnalyticsLocationProvider, {
    value: o,
    children: [(0, s.jsxs)("div", {
      className: ei.shop,
      ref: t ? eE : void 0,
      children: [(0, s.jsx)(ed, {
        isFullScreen: t,
        isLayer: p,
        onClose: g
      }), (0, s.jsx)(f.AdvancedScroller, {
        className: ei.shopScroll,
        ref: eC,
        onScroll: ep,
        children: (0, s.jsx)("div", {
          className: l()(ei.pageWrapper, {
            [ei.pageWrapperFullscreen]: t
          }),
          children: (0, s.jsxs)("main", {
            className: l()(ei.page, {
              [ei.pageWithShopBannerHidden]: !t
            }),
            children: [eT && (0, s.jsx)(Z.CollectiblesShopHeaderCarousel, {
              categories: w,
              handleScrollToCategory: eS
            }), t ? (0, s.jsx)(P.default, {
              title: eo.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eb : void 0
            }) : null, k ? (0, s.jsx)(Q.default, {}) : B ? (0, s.jsx)(z.default, {
              onRetry: eg
            }) : (0, s.jsx)("div", {
              className: ei.categories,
              children: w.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, a) => (0, s.jsx)("div", {
                ref: t => eh(e.skuId, t),
                children: (0, s.jsx)(eu, {
                  isPremiumUser: _,
                  category: e,
                  initialItemCardRef: J,
                  setIsGiftEasterEggEnabled: ec,
                  isGiftEasterEggEnabled: ea,
                  isFullScreen: t,
                  lightningCheckoutEnabled: K,
                  index: a
                })
              }, e.skuId))
            })]
          })
        })
      })]
    }), ea && (0, s.jsx)($.default, {})]
  })
}