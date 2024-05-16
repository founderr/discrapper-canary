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
  U = l("617452"),
  W = l("223143"),
  G = l("298228"),
  V = l("937510"),
  z = l("853748"),
  K = l("426171"),
  Y = l("823941"),
  Z = l("732329"),
  X = l("752053"),
  q = l("861746"),
  Q = l("508498"),
  $ = l("38900"),
  J = l("709999"),
  ee = l("373113"),
  et = l("994896"),
  el = l("141594"),
  ea = l("302800"),
  es = l("981631"),
  er = l("921944"),
  en = l("420212"),
  ei = l("474936"),
  eo = l("689938"),
  eu = l("425734");

function ec(e) {
  var t, l;
  let {
    category: r,
    initialItemCardRef: c,
    tallerCardsEnabled: d,
    lightningCheckoutEnabled: C,
    isPremiumUser: m,
    isGiftEasterEggEnabled: p
  } = e, E = (0, V.usePurchasedProductsSort)(r.products), h = (0, i.groupBy)(E, "type"), g = (0, u.useStateFromStores)([F.default], () => F.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: x
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), b = Z.default;
  d && C ? b = q.default : d && (b = J.default);
  let T = s.useCallback(e => t => {
      e.skuId === g && (c.current = t.current)
    }, [g, c]),
    L = (e, t) => 0 === e.length ? null : (0, a.jsxs)("div", {
      children: [null != t ? (0, a.jsx)(f.Text, {
        className: n()(eu.itemTypeTitle, {
          [eu.itemTypeTitleForTallerCard]: d
        }),
        color: "header-secondary",
        variant: "text-sm/bold",
        children: t
      }) : (0, a.jsx)(k.default, {
        size: 24
      }), (0, a.jsx)("div", {
        className: n()(eu.cardsContainer, d ? eu.tallerShopCard : eu.regularShopCard),
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
    children: [L(null !== (t = h[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], eo.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), L(null !== (l = h[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== l ? l : [], eo.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function ed(e) {
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
  }), [h, g] = s.useState(!1), x = (0, ea.getCountdownDisplayOptions)(t.skuId), b = (0, p.useIsVisible)(e => {
    g(e && null != x)
  }, c ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: eu.categoryWrapper,
    ref: b,
    children: [u && (0, a.jsx)(f.Clickable, {
      className: n()(eu.hiddenWumpus, {
        [eu.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, a.jsx)(N.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: ei.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(Y.default, {
      category: t,
      className: E ? eu.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != x,
      index: C
    }), (0, a.jsx)(ec, {
      category: t,
      initialItemCardRef: r,
      tallerCardsEnabled: E,
      isPremiumUser: l,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d
    }), null != x && null != t.unpublishedAt && (0, a.jsx)(z.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: h,
      displayOptions: x,
      isFullScreen: c
    })]
  })
}

function ef(e) {
  let {
    isFullScreen: t,
    isLayer: l,
    onClose: s
  } = e, {
    condensedBannersEnabled: r
  } = (0, et.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), i = (0, E.default)();
  return t ? (0, a.jsx)("div", {
    className: eu.closeWrapper,
    children: (0, a.jsx)(m.default, {
      className: eu.close,
      closeAction: l ? D.closeCollectiblesShop : s,
      keybind: "ESC"
    })
  }) : r ? (0, a.jsx)(L.default, {
    className: n()((0, M.getThemeClass)(i), eu.headerBar),
    innerClassname: eu.shopLogoContainer,
    toolbar: !0,
    children: (0, a.jsx)(R.default, {
      className: eu.shopLogo
    })
  }) : (0, a.jsxs)(L.default, {
    className: n()((0, M.getThemeClass)(i)),
    toolbar: !0,
    children: [(0, a.jsx)(j.default, {
      className: eu.logo
    }), (0, a.jsx)(L.default.Title, {
      className: eu.title,
      children: eo.default.Messages.COLLECTIBLES_SHOP
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
  } = (0, g.default)([...r, h.default.COLLECTIBLES_SHOP]), m = (0, u.useStateFromStores)([O.default], () => O.default.getLayers().includes(es.Layers.COLLECTIBLES_SHOP)), p = (0, d.useHasAnyModalOpen)(), {
    onClose: E
  } = (0, Q.useCollectiblesShopRouting)(), L = (0, u.useStateFromStores)([y.default], () => y.default.getCurrentUser()), I = B.default.canUseCollectibles(L), N = (0, b.default)("shop_disable_cache"), k = (0, b.default)("shop_include_unpublished"), {
    categories: j,
    isFetchingCategories: R,
    error: M
  } = (0, W.default)({
    noCache: N,
    includeUnpublished: k
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let w = (0, G.usePurchasedCategoriesSort)(j),
    {
      tallerCardsEnabled: V
    } = (0, H.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    z = S.default.useExperiment({
      location: h.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: Y
    } = (0, v.useLightningCheckoutEligibility)(),
    Z = z.enabled && Y,
    q = (0, U.useShopBundleEnabled)("CollectiblesShop"),
    J = s.useRef(null),
    [et, ea] = s.useState(!1);
  (0, K.useProductDetailsDeepLinking)({
    categories: j,
    isFetchingCategories: R,
    isLayer: m,
    initialItemCardRef: J
  });
  let {
    sessionId: ec,
    scrollerRef: eC,
    scrollHandler: em
  } = (0, x.usePageScrollPosition)(es.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
  s.useEffect(() => {
    P.default.track(es.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: l,
      page_session_id: ec
    }), !I && P.default.track(es.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ei.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [I, i, l, ec]);
  let {
    dismissCollectiblesShopTabNewBadge: ep
  } = (0, el.default)();
  s.useEffect(() => {
    ep(), !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: er.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [ep]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(es.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, D.setCollectiblesCategoryItemsViewed)({
      categories: [...j.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [j]), s.useEffect(() => {
    if (!t || m || p) return;
    let e = e => {
      e.key === en.KeyboardEventKey.Escape && E()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, m, p, E]), s.useEffect(() => {
    Y && S.default.trackExposure({
      location: h.default.COLLECTIBLES_SHOP
    })
  }, [Y]);
  let eE = s.useCallback(() => {
      (0, D.fetchCollectiblesCategories)({
        noCache: N,
        includeUnpublished: k,
        includeBundles: q
      })
    }, [N, k, q]),
    {
      containerRef: eh,
      returnRef: eg
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
      className: eu.shop,
      ref: t ? eh : void 0,
      children: [(0, a.jsx)(ef, {
        isFullScreen: t,
        isLayer: m,
        onClose: E
      }), (0, a.jsx)(f.AdvancedScroller, {
        className: n()(eu.shopScroll, {
          [eu.shopScrollBackgroundPrimary]: V
        }),
        ref: eC,
        onScroll: em,
        children: (0, a.jsx)("div", {
          className: n()(eu.pageWrapper, {
            [eu.pageWrapperFullscreen]: t,
            [eu.pageWrapperBackgroundPrimary]: V
          }),
          children: (0, a.jsxs)("main", {
            className: n()(eu.page, {
              [eu.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, a.jsx)(A.default, {
              title: eo.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eg : void 0
            }) : null, R ? (0, a.jsx)($.default, {}) : M ? (0, a.jsx)(X.default, {
              onRetry: eE
            }) : (0, a.jsx)("div", {
              className: eu.categories,
              children: w.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, l) => (0, a.jsx)(ed, {
                isPremiumUser: I,
                category: e,
                initialItemCardRef: J,
                setIsGiftEasterEggEnabled: ea,
                isGiftEasterEggEnabled: et,
                isFullScreen: t,
                lightningCheckoutEnabled: Z,
                index: l
              }, e.skuId))
            })]
          })
        })
      })]
    }), et && (0, a.jsx)(ee.default, {})]
  })
}