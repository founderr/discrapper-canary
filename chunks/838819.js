"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  i = a.n(r),
  n = a("392711"),
  o = a("979554"),
  u = a("399606"),
  c = a("524437"),
  d = a("952265"),
  f = a("481060"),
  m = a("150063"),
  C = a("425493"),
  p = a("434650"),
  E = a("410030"),
  h = a("100527"),
  g = a("906732"),
  x = a("702486"),
  b = a("580747"),
  T = a("605236"),
  S = a("984370"),
  L = a("329067"),
  v = a("51855"),
  I = a("479446"),
  N = a("981632"),
  _ = a("290026"),
  O = a("819640"),
  y = a("594174"),
  R = a("292665"),
  A = a("682864"),
  k = a("471731"),
  j = a("626135"),
  P = a("74538"),
  B = a("792125"),
  M = a("335131"),
  D = a("328347"),
  F = a("186711"),
  w = a("280773"),
  H = a("223143"),
  U = a("298228"),
  W = a("937510"),
  G = a("853748"),
  V = a("426171"),
  z = a("823941"),
  K = a("732329"),
  Y = a("752053"),
  X = a("861746"),
  Z = a("508498"),
  Q = a("38900"),
  q = a("709999"),
  $ = a("373113"),
  J = a("141594"),
  ee = a("302800"),
  et = a("981631"),
  ea = a("921944"),
  el = a("420212"),
  es = a("474936"),
  er = a("689938"),
  ei = a("425734");

function en(e) {
  var t, a;
  let {
    category: r,
    initialItemCardRef: c,
    tallerCardsEnabled: d,
    lightningCheckoutEnabled: m,
    isPremiumUser: C,
    isGiftEasterEggEnabled: p
  } = e, E = (0, W.usePurchasedProductsSort)(r.products), h = (0, n.groupBy)(E, "type"), g = (0, u.useStateFromStores)([D.default], () => D.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: x
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), b = K.default;
  d && m ? b = X.default : d && (b = q.default);
  let T = s.useCallback(e => t => {
      e.skuId === g && (c.current = t.current)
    }, [g, c]),
    S = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
      children: [null != t ? (0, l.jsx)(f.Text, {
        className: i()(ei.itemTypeTitle, {
          [ei.itemTypeTitleForTallerCard]: d
        }),
        color: "header-secondary",
        variant: "text-sm/bold",
        children: t
      }) : (0, l.jsx)(A.default, {
        size: 24
      }), (0, l.jsx)("div", {
        className: i()(ei.cardsContainer, d ? ei.tallerShopCard : ei.regularShopCard),
        children: e.map(e => (0, l.jsx)(b, {
          onMount: T(e),
          isPremiumUser: C,
          category: r,
          product: e,
          isGiftEasterEggEnabled: p
        }, e.skuId))
      })]
    });
  return x ? S(E) : (0, l.jsxs)(l.Fragment, {
    children: [S(null !== (t = h[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], er.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), S(null !== (a = h[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], er.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function eo(e) {
  let {
    category: t,
    isPremiumUser: a,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: n,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: u,
    isFullScreen: c,
    lightningCheckoutEnabled: d
  } = e, m = s.useRef(10 + 70 * Math.random()), {
    tallerCardsEnabled: C
  } = (0, F.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), [E, h] = s.useState(!1), g = (0, ee.getCountdownDisplayOptions)(t.skuId), x = (0, p.useIsVisible)(e => {
    h(e && null != g)
  }, c ? .13 : .15);
  return (0, l.jsxs)("div", {
    className: ei.categoryWrapper,
    ref: x,
    children: [u && (0, l.jsx)(f.Clickable, {
      className: i()(ei.hiddenWumpus, {
        [ei.hiddenWumpusEnabled]: n
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, l.jsx)(N.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: es.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(z.default, {
      category: t,
      className: C ? ei.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != g
    }), (0, l.jsx)(en, {
      category: t,
      initialItemCardRef: r,
      tallerCardsEnabled: C,
      isPremiumUser: a,
      isGiftEasterEggEnabled: n,
      lightningCheckoutEnabled: d
    }), null != g && null != t.unpublishedAt && (0, l.jsx)(G.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: E,
      displayOptions: g,
      isFullScreen: c
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([D.default], () => D.default.getAnalytics()), {
    analyticsLocations: n
  } = (0, g.default)([...r, h.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([O.default], () => O.default.getLayers().includes(et.Layers.COLLECTIBLES_SHOP)), I = (0, d.useHasAnyModalOpen)(), {
    onClose: N
  } = (0, Z.useCollectiblesShopRouting)(), A = (0, u.useStateFromStores)([y.default], () => y.default.getCurrentUser()), w = P.default.canUseCollectibles(A), W = (0, b.default)("shop_disable_cache"), G = (0, b.default)("shop_include_unpublished"), {
    categories: z,
    isFetchingCategories: K,
    error: X
  } = (0, H.default)({
    noCache: W,
    includeUnpublished: G
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let q = (0, U.usePurchasedCategoriesSort)(z),
    {
      tallerCardsEnabled: ee
    } = (0, F.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    en = v.default.useExperiment({
      location: h.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: eu
    } = (0, L.useLightningCheckoutEligibility)(),
    ec = en.enabled && eu,
    ed = s.useRef(null),
    [ef, em] = s.useState(!1);
  (0, V.useProductDetailsDeepLinking)({
    categories: z,
    isFetchingCategories: K,
    isLayer: p,
    initialItemCardRef: ed
  });
  let {
    sessionId: eC,
    scrollerRef: ep,
    scrollHandler: eE
  } = (0, x.usePageScrollPosition)(et.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    j.default.track(et.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: n,
      source: a,
      page_session_id: eC
    }), !w && j.default.track(et.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: es.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: n
    })
  }, [w, n, a, eC]);
  let {
    dismissCollectiblesShopTabNewBadge: eh
  } = (0, J.default)();
  s.useEffect(() => {
    eh(), !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: ea.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eh]), s.useEffect(() => {
    !t && (0, m.setHomeLink)(et.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, M.setCollectiblesCategoryItemsViewed)({
      categories: [...z.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [z]), s.useEffect(() => {
    if (!t || p || I) return;
    let e = e => {
      e.key === el.KeyboardEventKey.Escape && N()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, I, N]), s.useEffect(() => {
    eu && v.default.trackExposure({
      location: h.default.COLLECTIBLES_SHOP
    })
  }, [eu]);
  let eg = s.useCallback(() => {
      (0, M.fetchCollectiblesCategories)({
        noCache: W,
        includeUnpublished: G
      })
    }, [W, G]),
    ex = (0, E.default)(),
    {
      containerRef: eb,
      returnRef: eT
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
  return (0, l.jsxs)(g.AnalyticsLocationProvider, {
    value: n,
    children: [(0, l.jsxs)("div", {
      className: ei.shop,
      ref: t ? eb : void 0,
      children: [t ? null : (0, l.jsxs)(S.default, {
        className: i()((0, B.getThemeClass)(ex), ei.__invalid_headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(k.default, {
          className: ei.logo
        }), (0, l.jsx)(S.default.Title, {
          className: ei.title,
          children: er.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: ei.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: ei.close,
          closeAction: p ? M.closeCollectiblesShop : N,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: i()(ei.shopScroll, {
          [ei.shopScrollBackgroundPrimary]: ee
        }),
        ref: ep,
        onScroll: eE,
        children: (0, l.jsx)("div", {
          className: i()(ei.pageWrapper, {
            [ei.pageWrapperFullscreen]: t,
            [ei.pageWrapperBackgroundPrimary]: ee
          }),
          children: (0, l.jsxs)("main", {
            className: i()(ei.page, {
              [ei.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(R.default, {
              title: er.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eT : void 0
            }) : null, K ? (0, l.jsx)(Q.default, {}) : X ? (0, l.jsx)(Y.default, {
              onRetry: eg
            }) : (0, l.jsx)("div", {
              className: ei.categories,
              children: q.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(eo, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: ed,
                setIsGiftEasterEggEnabled: em,
                isGiftEasterEggEnabled: ef,
                isFullScreen: t,
                lightningCheckoutEnabled: ec
              }, e.skuId))
            })]
          })
        })
      })]
    }), ef && (0, l.jsx)($.default, {})]
  })
}