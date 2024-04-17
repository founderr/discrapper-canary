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
  g = a("100527"),
  E = a("906732"),
  b = a("702486"),
  S = a("580747"),
  T = a("605236"),
  x = a("984370"),
  v = a("479446"),
  L = a("981632"),
  I = a("290026"),
  _ = a("819640"),
  N = a("594174"),
  y = a("292665"),
  O = a("471731"),
  k = a("626135"),
  A = a("74538"),
  R = a("792125"),
  j = a("335131"),
  P = a("328347"),
  B = a("186711"),
  F = a("223143"),
  M = a("298228"),
  D = a("971815"),
  w = a("853748"),
  H = a("426171"),
  U = a("823941"),
  W = a("732329"),
  G = a("752053"),
  V = a("508498"),
  z = a("38900"),
  K = a("709999"),
  Y = a("373113"),
  X = a("141594"),
  Z = a("302800"),
  q = a("981631"),
  $ = a("921944"),
  J = a("420212"),
  Q = a("474936"),
  ee = a("689938"),
  et = a("116162");

function ea(e) {
  var t, a;
  let {
    category: r,
    className: c,
    isPremiumUser: d,
    initialItemCardRef: m,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: h,
    showEasterEggToggle: g,
    isFullScreen: E
  } = e, b = s.useRef(10 + 70 * Math.random()), S = (0, D.usePurchasedProductsSort)(r.products), T = (0, i.groupBy)(S, "type"), x = (0, u.useStateFromStores)([P.default], () => P.default.initialProductSkuId), {
    tallerCardsEnabled: I
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), _ = I ? K.default : W.default, N = s.useCallback(e => t => {
    e.skuId === x && (m.current = t.current)
  }, [x, m]), [y, O] = s.useState(!1), k = (0, Z.getCountdownDisplayOptions)(r.skuId), A = (0, p.useIsVisible)(e => {
    O(e && null != k)
  }, E ? .13 : .15), R = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(f.Text, {
      className: n()(et.itemTypeTitle, {
        [et.itemTypeTitleForTallerCard]: I
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n()(et.cardsContainer, I ? et.tallerShopCard : et.regularShopCard, c),
      children: e.map(e => (0, l.jsx)(_, {
        onMount: N(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return (0, l.jsxs)("div", {
    className: et.categoryWrapper,
    ref: A,
    children: [g && (0, l.jsx)(f.Clickable, {
      className: n()(et.hiddenWumpus, {
        [et.hiddenWumpusEnabled]: C
      }),
      onClick: () => h(!0),
      style: {
        left: "".concat(b.current, "%")
      },
      children: (0, l.jsx)(L.default, {
        idleAnimationState: v.AnimationState.IDLE,
        giftStyle: Q.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(U.default, {
      category: r,
      className: I ? et.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != k
    }), R(null !== (t = T[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), R(null !== (a = T[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], ee.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE), null != k && null != r.unpublishedAt && (0, l.jsx)(w.CollectiblesCountdown, {
      unpublishedAt: r.unpublishedAt,
      isVisible: y,
      displayOptions: k,
      isFullScreen: E
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([P.default], () => P.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, E.default)([...r, g.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([_.default], () => _.default.getLayers().includes(q.Layers.COLLECTIBLES_SHOP)), v = (0, d.useHasAnyModalOpen)(), {
    onClose: L
  } = (0, V.useCollectiblesShopRouting)(), D = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser()), w = A.default.canUseCollectibles(D), U = (0, S.default)("shop_disable_cache"), W = (0, S.default)("shop_include_unpublished"), {
    categories: K,
    isFetchingCategories: Z,
    error: el
  } = (0, F.default)({
    noCache: U,
    includeUnpublished: W
  });
  (0, I.useReloadProfileEffectWhenConfigsAreMissing)();
  let es = (0, M.usePurchasedCategoriesSort)(K),
    {
      tallerCardsEnabled: er
    } = (0, B.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    en = s.useRef(null),
    [ei, eo] = s.useState(!1);
  (0, H.useProductDetailsDeepLinking)({
    categories: K,
    isFetchingCategories: Z,
    isLayer: p,
    initialItemCardRef: en
  });
  let {
    sessionId: eu,
    scrollerRef: ec,
    scrollHandler: ed
  } = (0, b.usePageScrollPosition)(q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    k.default.track(q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: eu
    }), !w && k.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: Q.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [w, i, a, eu]);
  let {
    dismissCollectiblesShopTabNewBadge: ef
  } = (0, X.default)();
  s.useEffect(() => {
    ef(), !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [ef]), s.useEffect(() => {
    !t && (0, m.setHomeLink)(q.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...K.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [K]), s.useEffect(() => {
    if (!t || p || v) return;
    let e = e => {
      e.key === J.KeyboardEventKey.Escape && L()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, v, L]);
  let em = s.useCallback(() => {
      (0, j.fetchCollectiblesCategories)({
        noCache: U,
        includeUnpublished: W
      })
    }, [U, W]),
    eC = (0, h.default)(),
    {
      containerRef: ep,
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
    }();
  return (0, l.jsxs)(E.AnalyticsLocationProvider, {
    value: i,
    children: [(0, l.jsxs)("div", {
      className: et.shop,
      ref: t ? ep : void 0,
      children: [t ? null : (0, l.jsxs)(x.default, {
        className: n()((0, R.getThemeClass)(eC), et.__invalid_headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(O.default, {
          className: et.logo
        }), (0, l.jsx)(x.default.Title, {
          className: et.title,
          children: ee.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: et.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: et.close,
          closeAction: p ? j.closeCollectiblesShop : L,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: n()(et.shopScroll, {
          [et.shopScrollBackgroundPrimary]: er
        }),
        ref: ec,
        onScroll: ed,
        children: (0, l.jsx)("div", {
          className: n()(et.pageWrapper, {
            [et.pageWrapperFullscreen]: t,
            [et.pageWrapperBackgroundPrimary]: er
          }),
          children: (0, l.jsxs)("main", {
            className: n()(et.page, {
              [et.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(y.default, {
              title: ee.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eh : void 0
            }) : null, Z ? (0, l.jsx)(z.default, {}) : el ? (0, l.jsx)(G.default, {
              onRetry: em
            }) : (0, l.jsx)("div", {
              className: et.categories,
              children: es.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(ea, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: en,
                setIsGiftEasterEggEnabled: eo,
                isGiftEasterEggEnabled: ei,
                isFullScreen: t
              }, e.skuId))
            })]
          })
        })
      })]
    }), ei && (0, l.jsx)(Y.default, {})]
  })
}