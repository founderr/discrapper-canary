"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("392711"),
  o = a("979554"),
  u = a("399606"),
  c = a("524437"),
  d = a("952265"),
  f = a("481060"),
  m = a("150063"),
  C = a("425493"),
  p = a("434650"),
  h = a("410030"),
  E = a("100527"),
  g = a("906732"),
  S = a("702486"),
  b = a("580747"),
  x = a("605236"),
  T = a("984370"),
  L = a("74179"),
  v = a("51855"),
  I = a("479446"),
  N = a("981632"),
  _ = a("290026"),
  y = a("819640"),
  O = a("594174"),
  k = a("292665"),
  A = a("471731"),
  j = a("626135"),
  R = a("74538"),
  P = a("792125"),
  B = a("335131"),
  F = a("328347"),
  D = a("186711"),
  M = a("223143"),
  w = a("298228"),
  H = a("971815"),
  U = a("853748"),
  W = a("426171"),
  G = a("823941"),
  V = a("732329"),
  z = a("752053"),
  K = a("861746"),
  Y = a("508498"),
  X = a("38900"),
  Z = a("709999"),
  q = a("373113"),
  $ = a("141594"),
  J = a("302800"),
  Q = a("981631"),
  ee = a("921944"),
  et = a("420212"),
  ea = a("474936"),
  el = a("689938"),
  es = a("116162");

function er(e) {
  var t, a;
  let {
    category: r,
    className: c,
    isPremiumUser: d,
    initialItemCardRef: m,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: h,
    showEasterEggToggle: E,
    isFullScreen: g,
    lightningCheckoutEnabled: S
  } = e, b = s.useRef(10 + 70 * Math.random()), x = (0, H.usePurchasedProductsSort)(r.products), T = (0, i.groupBy)(x, "type"), L = (0, u.useStateFromStores)([F.default], () => F.default.initialProductSkuId), {
    tallerCardsEnabled: v
  } = (0, D.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), _ = V.default;
  v && S ? _ = K.default : v && (_ = Z.default);
  let y = s.useCallback(e => t => {
      e.skuId === L && (m.current = t.current)
    }, [L, m]),
    [O, k] = s.useState(!1),
    A = (0, J.getCountdownDisplayOptions)(r.skuId),
    j = (0, p.useIsVisible)(e => {
      k(e && null != A)
    }, g ? .13 : .15),
    R = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
      children: [(0, l.jsx)(f.Text, {
        className: n()(es.itemTypeTitle, {
          [es.itemTypeTitleForTallerCard]: v
        }),
        color: "header-secondary",
        variant: "text-sm/bold",
        children: t
      }), (0, l.jsx)("div", {
        className: n()(es.cardsContainer, v ? es.tallerShopCard : es.regularShopCard, c),
        children: e.map(e => (0, l.jsx)(_, {
          onMount: y(e),
          isPremiumUser: d,
          category: r,
          product: e,
          isGiftEasterEggEnabled: C
        }, e.skuId))
      })]
    });
  return (0, l.jsxs)("div", {
    className: es.categoryWrapper,
    ref: j,
    children: [E && (0, l.jsx)(f.Clickable, {
      className: n()(es.hiddenWumpus, {
        [es.hiddenWumpusEnabled]: C
      }),
      onClick: () => h(!0),
      style: {
        left: "".concat(b.current, "%")
      },
      children: (0, l.jsx)(N.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: ea.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(G.default, {
      category: r,
      className: v ? es.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != A
    }), R(null !== (t = T[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], el.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), R(null !== (a = T[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], el.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE), null != A && null != r.unpublishedAt && (0, l.jsx)(U.CollectiblesCountdown, {
      unpublishedAt: r.unpublishedAt,
      isVisible: O,
      displayOptions: A,
      isFullScreen: g
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([F.default], () => F.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, g.default)([...r, E.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([y.default], () => y.default.getLayers().includes(Q.Layers.COLLECTIBLES_SHOP)), I = (0, d.useHasAnyModalOpen)(), {
    onClose: N
  } = (0, Y.useCollectiblesShopRouting)(), H = (0, u.useStateFromStores)([O.default], () => O.default.getCurrentUser()), U = R.default.canUseCollectibles(H), G = (0, b.default)("shop_disable_cache"), V = (0, b.default)("shop_include_unpublished"), {
    categories: K,
    isFetchingCategories: Z,
    error: J
  } = (0, M.default)({
    noCache: G,
    includeUnpublished: V
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let en = (0, w.usePurchasedCategoriesSort)(K),
    {
      tallerCardsEnabled: ei
    } = (0, D.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    eo = v.default.useExperiment({
      location: E.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !0
    }),
    {
      defaultPaymentSource: eu
    } = (0, L.default)({
      isGift: !1,
      activeSubscription: null
    }),
    ec = s.useRef(null),
    [ed, ef] = s.useState(!1);
  (0, W.useProductDetailsDeepLinking)({
    categories: K,
    isFetchingCategories: Z,
    isLayer: p,
    initialItemCardRef: ec
  });
  let {
    sessionId: em,
    scrollerRef: eC,
    scrollHandler: ep
  } = (0, S.usePageScrollPosition)(Q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    j.default.track(Q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: em
    }), !U && j.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ea.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [U, i, a, em]);
  let {
    dismissCollectiblesShopTabNewBadge: eh
  } = (0, $.default)();
  s.useEffect(() => {
    eh(), !(0, x.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, x.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: ee.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eh]), s.useEffect(() => {
    !t && (0, m.setHomeLink)(Q.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, B.setCollectiblesCategoryItemsViewed)({
      categories: [...K.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [K]), s.useEffect(() => {
    if (!t || p || I) return;
    let e = e => {
      e.key === et.KeyboardEventKey.Escape && N()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, I, N]);
  let eE = s.useCallback(() => {
      (0, B.fetchCollectiblesCategories)({
        noCache: G,
        includeUnpublished: V
      })
    }, [G, V]),
    eg = (0, h.default)(),
    {
      containerRef: eS,
      returnRef: eb
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
    value: i,
    children: [(0, l.jsxs)("div", {
      className: es.shop,
      ref: t ? eS : void 0,
      children: [t ? null : (0, l.jsxs)(T.default, {
        className: n()((0, P.getThemeClass)(eg), es.__invalid_headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(A.default, {
          className: es.logo
        }), (0, l.jsx)(T.default.Title, {
          className: es.title,
          children: el.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: es.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: es.close,
          closeAction: p ? B.closeCollectiblesShop : N,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: n()(es.shopScroll, {
          [es.shopScrollBackgroundPrimary]: ei
        }),
        ref: eC,
        onScroll: ep,
        children: (0, l.jsx)("div", {
          className: n()(es.pageWrapper, {
            [es.pageWrapperFullscreen]: t,
            [es.pageWrapperBackgroundPrimary]: ei
          }),
          children: (0, l.jsxs)("main", {
            className: n()(es.page, {
              [es.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(k.default, {
              title: el.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eb : void 0
            }) : null, Z ? (0, l.jsx)(X.default, {}) : J ? (0, l.jsx)(z.default, {
              onRetry: eE
            }) : (0, l.jsx)("div", {
              className: es.categories,
              children: en.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(er, {
                isPremiumUser: U,
                category: e,
                initialItemCardRef: ec,
                setIsGiftEasterEggEnabled: ef,
                isGiftEasterEggEnabled: ed,
                isFullScreen: t,
                lightningCheckoutEnabled: eo.enabled && null !== eu
              }, e.skuId))
            })]
          })
        })
      })]
    }), ed && (0, l.jsx)(q.default, {})]
  })
}