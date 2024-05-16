"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("392711"),
  o = l("979554"),
  u = l("399606"),
  c = l("524437"),
  d = l("952265"),
  f = l("481060"),
  C = l("150063"),
  m = l("425493"),
  p = l("434650"),
  E = l("410030"),
  h = l("100527"),
  g = l("906732"),
  x = l("702486"),
  b = l("580747"),
  T = l("605236"),
  L = l("984370"),
  v = l("329067"),
  S = l("51855"),
  I = l("479446"),
  N = l("981632"),
  _ = l("290026"),
  O = l("819640"),
  y = l("594174"),
  A = l("292665"),
  k = l("682864"),
  j = l("471731"),
  R = l("486620"),
  P = l("626135"),
  B = l("74538"),
  M = l("792125"),
  D = l("335131"),
  F = l("328347"),
  H = l("186711"),
  w = l("280773"),
  U = l("223143"),
  W = l("298228"),
  G = l("937510"),
  V = l("853748"),
  z = l("426171"),
  K = l("823941"),
  Y = l("732329"),
  Z = l("752053"),
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

function eu(e) {
  var t, l;
  let {
    category: r,
    initialItemCardRef: c,
    tallerCardsEnabled: d,
    lightningCheckoutEnabled: C,
    isPremiumUser: m,
    isGiftEasterEggEnabled: p
  } = e, E = (0, G.usePurchasedProductsSort)(r.products), h = (0, i.groupBy)(E, "type"), g = (0, u.useStateFromStores)([F.default], () => F.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: x
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), b = Y.default;
  d && C ? b = X.default : d && (b = $.default);
  let T = s.useCallback(e => t => {
      e.skuId === g && (c.current = t.current)
    }, [g, c]),
    L = (e, t) => 0 === e.length ? null : (0, a.jsxs)("div", {
      children: [null != t ? (0, a.jsx)(f.Text, {
        className: n()(eo.itemTypeTitle, {
          [eo.itemTypeTitleForTallerCard]: d
        }),
        color: "header-secondary",
        variant: "text-sm/bold",
        children: t
      }) : (0, a.jsx)(k.default, {
        size: 24
      }), (0, a.jsx)("div", {
        className: n()(eo.cardsContainer, d ? eo.tallerShopCard : eo.regularShopCard),
        children: e.map(e => (0, a.jsx)(b, {
          onMount: T(e),
          isPremiumUser: m,
          category: r,
          product: e,
          isGiftEasterEggEnabled: p
        }, e.skuId))
      })]
    });
  return x ? L(E) : (0, a.jsxs)(a.Fragment, {
    children: [L(null !== (t = h[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], ei.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), L(null !== (l = h[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== l ? l : [], ei.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function ec(e) {
  let {
    category: t,
    isPremiumUser: l,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: u,
    isFullScreen: c,
    lightningCheckoutEnabled: d,
    index: C
  } = e, m = s.useRef(10 + 70 * Math.random()), {
    tallerCardsEnabled: E
  } = (0, H.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), [h, g] = s.useState(!1), x = (0, el.getCountdownDisplayOptions)(t.skuId), b = (0, p.useIsVisible)(e => {
    g(e && null != x)
  }, c ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: eo.categoryWrapper,
    ref: b,
    children: [u && (0, a.jsx)(f.Clickable, {
      className: n()(eo.hiddenWumpus, {
        [eo.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, a.jsx)(N.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: en.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(K.default, {
      category: t,
      className: E ? eo.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != x,
      index: C
    }), (0, a.jsx)(eu, {
      category: t,
      initialItemCardRef: r,
      tallerCardsEnabled: E,
      isPremiumUser: l,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d
    }), null != x && null != t.unpublishedAt && (0, a.jsx)(V.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: h,
      displayOptions: x,
      isFullScreen: c
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
  }), i = (0, E.default)();
  return t ? (0, a.jsx)("div", {
    className: eo.closeWrapper,
    children: (0, a.jsx)(m.default, {
      className: eo.close,
      closeAction: l ? D.closeCollectiblesShop : s,
      keybind: "ESC"
    })
  }) : r ? (0, a.jsx)(L.default, {
    className: n()((0, M.getThemeClass)(i), eo.headerBar),
    innerClassname: eo.shopLogoContainer,
    toolbar: !0,
    children: (0, a.jsx)(R.default, {
      className: eo.shopLogo
    })
  }) : (0, a.jsxs)(L.default, {
    className: n()((0, M.getThemeClass)(i)),
    toolbar: !0,
    children: [(0, a.jsx)(j.default, {
      className: eo.logo
    }), (0, a.jsx)(L.default.Title, {
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
  } = (0, u.useStateFromStoresObject)([F.default], () => F.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, g.default)([...r, h.default.COLLECTIBLES_SHOP]), m = (0, u.useStateFromStores)([O.default], () => O.default.getLayers().includes(ea.Layers.COLLECTIBLES_SHOP)), p = (0, d.useHasAnyModalOpen)(), {
    onClose: E
  } = (0, q.useCollectiblesShopRouting)(), L = (0, u.useStateFromStores)([y.default], () => y.default.getCurrentUser()), I = B.default.canUseCollectibles(L), N = (0, b.default)("shop_disable_cache"), k = (0, b.default)("shop_include_unpublished"), {
    categories: j,
    isFetchingCategories: R,
    error: M
  } = (0, U.default)({
    noCache: N,
    includeUnpublished: k
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let w = (0, W.usePurchasedCategoriesSort)(j),
    {
      tallerCardsEnabled: G
    } = (0, H.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    V = S.default.useExperiment({
      location: h.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: K
    } = (0, v.useLightningCheckoutEligibility)(),
    Y = V.enabled && K,
    X = s.useRef(null),
    [$, ee] = s.useState(!1);
  (0, z.useProductDetailsDeepLinking)({
    categories: j,
    isFetchingCategories: R,
    isLayer: m,
    initialItemCardRef: X
  });
  let {
    sessionId: el,
    scrollerRef: eu,
    scrollHandler: ef
  } = (0, x.usePageScrollPosition)(ea.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
  s.useEffect(() => {
    P.default.track(ea.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: l,
      page_session_id: el
    }), !I && P.default.track(ea.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: en.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [I, i, l, el]);
  let {
    dismissCollectiblesShopTabNewBadge: eC
  } = (0, et.default)();
  s.useEffect(() => {
    eC(), !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: es.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eC]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(ea.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, D.setCollectiblesCategoryItemsViewed)({
      categories: [...j.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [j]), s.useEffect(() => {
    if (!t || m || p) return;
    let e = e => {
      e.key === er.KeyboardEventKey.Escape && E()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, m, p, E]), s.useEffect(() => {
    K && S.default.trackExposure({
      location: h.default.COLLECTIBLES_SHOP
    })
  }, [K]);
  let em = s.useCallback(() => {
      (0, D.fetchCollectiblesCategories)({
        noCache: N,
        includeUnpublished: k
      })
    }, [N, k]),
    {
      containerRef: ep,
      returnRef: eE
    } = function() {
      let e = s.useRef(null),
        t = s.useRef(null);
      return (0, f.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }();
  return (0, a.jsxs)(g.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsxs)("div", {
      className: eo.shop,
      ref: t ? ep : void 0,
      children: [(0, a.jsx)(ed, {
        isFullScreen: t,
        isLayer: m,
        onClose: E
      }), (0, a.jsx)(f.AdvancedScroller, {
        className: n()(eo.shopScroll, {
          [eo.shopScrollBackgroundPrimary]: G
        }),
        ref: eu,
        onScroll: ef,
        children: (0, a.jsx)("div", {
          className: n()(eo.pageWrapper, {
            [eo.pageWrapperFullscreen]: t,
            [eo.pageWrapperBackgroundPrimary]: G
          }),
          children: (0, a.jsxs)("main", {
            className: n()(eo.page, {
              [eo.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, a.jsx)(A.default, {
              title: ei.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eE : void 0
            }) : null, R ? (0, a.jsx)(Q.default, {}) : M ? (0, a.jsx)(Z.default, {
              onRetry: em
            }) : (0, a.jsx)("div", {
              className: eo.categories,
              children: w.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, l) => (0, a.jsx)(ec, {
                isPremiumUser: I,
                category: e,
                initialItemCardRef: X,
                setIsGiftEasterEggEnabled: ee,
                isGiftEasterEggEnabled: $,
                isFullScreen: t,
                lightningCheckoutEnabled: Y,
                index: l
              }, e.skuId))
            })]
          })
        })
      })]
    }), $ && (0, a.jsx)(J.default, {})]
  })
}