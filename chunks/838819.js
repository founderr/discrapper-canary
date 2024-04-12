"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("803997"),
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
  L = a("479446"),
  v = a("981632"),
  I = a("290026"),
  N = a("819640"),
  _ = a("594174"),
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
  Y = a("709999"),
  K = a("373113"),
  X = a("302800"),
  Z = a("981631"),
  q = a("921944"),
  $ = a("420212"),
  J = a("474936"),
  Q = a("689938"),
  ee = a("116162");

function et(e) {
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
  }), N = I ? Y.default : W.default, _ = s.useCallback(e => t => {
    e.skuId === x && (m.current = t.current)
  }, [x, m]), [y, O] = s.useState(!1), k = (0, X.getCountdownDisplayOptions)(r.skuId), A = (0, p.useIsVisible)(e => {
    O(e && null != k)
  }, E ? .13 : .15), R = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(f.Text, {
      className: n()(ee.itemTypeTitle, {
        [ee.itemTypeTitleForTallerCard]: I
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n()(ee.cardsContainer, I ? ee.tallerShopCard : ee.regularShopCard, c),
      children: e.map(e => (0, l.jsx)(N, {
        onMount: _(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return (0, l.jsxs)("div", {
    className: ee.categoryWrapper,
    ref: A,
    children: [g && (0, l.jsx)(f.Clickable, {
      className: n()(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: C
      }),
      onClick: () => h(!0),
      style: {
        left: "".concat(b.current, "%")
      },
      children: (0, l.jsx)(v.default, {
        idleAnimationState: L.AnimationState.IDLE,
        giftStyle: J.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(U.default, {
      category: r,
      className: I ? ee.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != k
    }), R(null !== (t = T[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], Q.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), R(null !== (a = T[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], Q.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE), null != k && null != r.unpublishedAt && (0, l.jsx)(w.CollectiblesCountdown, {
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
  } = (0, E.default)([...r, g.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([N.default], () => N.default.getLayers().includes(Z.Layers.COLLECTIBLES_SHOP)), L = (0, d.useHasAnyModalOpen)(), {
    onClose: v
  } = (0, V.useCollectiblesShopRouting)(), D = (0, u.useStateFromStores)([_.default], () => _.default.getCurrentUser()), w = A.default.canUseCollectibles(D), U = (0, S.default)("shop_disable_cache"), W = (0, S.default)("shop_include_unpublished"), {
    categories: Y,
    isFetchingCategories: X,
    error: ea
  } = (0, F.default)({
    noCache: U,
    includeUnpublished: W
  });
  (0, I.useReloadProfileEffectWhenConfigsAreMissing)();
  let el = (0, M.usePurchasedCategoriesSort)(Y),
    {
      tallerCardsEnabled: es
    } = (0, B.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    er = s.useRef(null),
    [en, ei] = s.useState(!1);
  (0, H.useProductDetailsDeepLinking)({
    categories: Y,
    isFetchingCategories: X,
    isLayer: p,
    initialItemCardRef: er
  });
  let {
    sessionId: eo,
    scrollerRef: eu,
    scrollHandler: ec
  } = (0, b.usePageScrollPosition)(Z.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    k.default.track(Z.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: eo
    }), !w && k.default.track(Z.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: J.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [w, i, a, eo]), s.useEffect(() => {
    !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: q.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, m.setHomeLink)(Z.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...Y.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [Y]), s.useEffect(() => {
    if (!t || p || L) return;
    let e = e => {
      e.key === $.KeyboardEventKey.Escape && v()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, L, v]);
  let ed = s.useCallback(() => {
      (0, j.fetchCollectiblesCategories)({
        noCache: U,
        includeUnpublished: W
      })
    }, [U, W]),
    ef = (0, h.default)(),
    {
      containerRef: em,
      returnRef: eC
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
      className: ee.shop,
      ref: t ? em : void 0,
      children: [t ? null : (0, l.jsxs)(x.default, {
        className: n()((0, R.getThemeClass)(ef), ee.__invalid_headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(O.default, {
          className: ee.logo
        }), (0, l.jsx)(x.default.Title, {
          className: ee.title,
          children: Q.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: ee.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: ee.close,
          closeAction: p ? j.closeCollectiblesShop : v,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: n()(ee.shopScroll, {
          [ee.shopScrollBackgroundPrimary]: es
        }),
        ref: eu,
        onScroll: ec,
        children: (0, l.jsx)("div", {
          className: n()(ee.pageWrapper, {
            [ee.pageWrapperFullscreen]: t,
            [ee.pageWrapperBackgroundPrimary]: es
          }),
          children: (0, l.jsxs)("main", {
            className: n()(ee.page, {
              [ee.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(y.default, {
              title: Q.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eC : void 0
            }) : null, X ? (0, l.jsx)(z.default, {}) : ea ? (0, l.jsx)(G.default, {
              onRetry: ed
            }) : (0, l.jsx)("div", {
              className: ee.categories,
              children: el.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(et, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: er,
                setIsGiftEasterEggEnabled: ei,
                isGiftEasterEggEnabled: en,
                isFullScreen: t
              }, e.skuId))
            })]
          })
        })
      })]
    }), en && (0, l.jsx)(K.default, {})]
  })
}