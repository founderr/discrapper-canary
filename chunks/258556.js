"use strict";
a.r(t), a.d(t, {
  default: function() {
    return el
  }
}), a("794252"), a("222007");
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("917351"),
  o = a("506838"),
  c = a("265586"),
  u = a("65597"),
  d = a("151426"),
  f = a("551042"),
  m = a("77078"),
  p = a("939488"),
  C = a("304580"),
  g = a("841098"),
  E = a("812204"),
  h = a("685665"),
  b = a("481120"),
  T = a("890503"),
  x = a("10641"),
  L = a("539938"),
  S = a("210721"),
  v = a("65324"),
  I = a("778588"),
  N = a("697218"),
  _ = a("764490"),
  y = a("29557"),
  k = a("599110"),
  O = a("719923"),
  A = a("439932"),
  j = a("21526"),
  R = a("411691"),
  P = a("216719"),
  B = a("702953"),
  D = a("235898"),
  F = a("296304"),
  M = a("334820"),
  w = a("89569"),
  H = a("419513"),
  U = a("434393"),
  W = a("571464"),
  G = a("43525"),
  z = a("798235"),
  V = a("931262"),
  K = a("695824"),
  Y = a("518907"),
  X = a("368560"),
  Z = a("49111"),
  q = a("994428"),
  $ = a("894282"),
  J = a("646718"),
  Q = a("782340"),
  ee = a("922063");

function et(e) {
  let {
    isFullScreen: t
  } = e, a = (0, R.default)("CollectiblesShop");
  return (0, o.match)(a).with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, l.jsx)(z.default, {
    isFullScreen: t
  })).otherwise(() => (0, l.jsx)(G.default, {
    isFullScreen: t
  }))
}

function ea(e) {
  var t, a;
  let {
    category: r,
    className: o,
    isPremiumUser: d,
    initialItemCardRef: f,
    isGiftEasterEggEnabled: p,
    setIsGiftEasterEggEnabled: C,
    showEasterEggToggle: g
  } = e, E = s.useRef(10 + 70 * Math.random()), h = (0, M.usePurchasedProductsSort)(r.products), b = (0, i.groupBy)(h, "type"), T = (0, u.default)([P.default], () => P.default.initialProductSkuId), {
    tallerCardsEnabled: x
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), L = x ? Y.default : U.default, I = s.useCallback(e => t => {
    e.skuId === T && (f.current = t.current)
  }, [T, f]), N = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(m.Text, {
      className: n(ee.itemTypeTitle, {
        [ee.itemTypeTitleForTallerCard]: x
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n(ee.cardsContainer, x ? ee.tallerShopCard : ee.regularShopCard, o),
      children: e.map(e => (0, l.jsx)(L, {
        onMount: I(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: p
      }, e.skuId))
    })]
  });
  return (0, l.jsxs)("div", {
    className: ee.categoryWrapper,
    children: [g && (0, l.jsx)(m.Clickable, {
      className: n(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: p
      }),
      onClick: () => C(!0),
      style: {
        left: "".concat(E.current, "%")
      },
      children: (0, l.jsx)(v.default, {
        idleAnimationState: S.AnimationState.IDLE,
        giftStyle: J.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(H.default, {
      category: r,
      className: x ? ee.tallerShopCardBanner : void 0
    }), N(null !== (t = b[c.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], Q.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = b[c.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], Q.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var el = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([P.default], () => P.default.getAnalytics()), {
    AnalyticsLocationProvider: i,
    analyticsLocations: o
  } = (0, h.default)([...r, E.default.COLLECTIBLES_SHOP]), S = (0, u.default)([I.default], () => I.default.getLayers().includes(Z.Layers.COLLECTIBLES_SHOP)), v = (0, f.useHasAnyModalOpen)(), {
    onClose: R
  } = (0, V.useCollectiblesShopRouting)(), M = (0, u.default)([N.default], () => N.default.getCurrentUser()), H = O.default.canUseCollectibles(M), U = (0, T.default)("shop_disable_cache"), G = (0, T.default)("shop_include_unpublished"), {
    categories: z,
    isFetchingCategories: Y,
    error: el
  } = (0, D.default)({
    noCache: U,
    includeUnpublished: G
  }), es = (0, F.usePurchasedCategoriesSort)(z), {
    tallerCardsEnabled: er
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), en = s.useRef(null), [ei, eo] = s.useState(!1);
  (0, w.useProductDetailsDeepLinking)({
    categories: z,
    isFetchingCategories: Y,
    isLayer: S,
    initialItemCardRef: en
  });
  let {
    sessionId: ec,
    scrollerRef: eu,
    scrollHandler: ed
  } = (0, b.usePageScrollPosition)(Z.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    k.default.track(Z.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: ec
    }), !H && k.default.track(Z.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: J.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [H, o, a, ec]), s.useEffect(() => {
    !(0, x.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, x.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: q.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, p.setHomeLink)(Z.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...z.values()],
      itemTypes: [c.CollectiblesItemType.AVATAR_DECORATION, c.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [z]), s.useEffect(() => {
    if (!t || S || v) return;
    let e = e => {
      e.key === $.KeyboardEventKey.Escape && R()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, S, v, R]);
  let ef = s.useCallback(() => {
      (0, j.fetchCollectiblesCategories)({
        noCache: U,
        includeUnpublished: G
      })
    }, [U, G]),
    em = (0, g.default)();
  return (0, l.jsxs)(i, {
    children: [(0, l.jsxs)("div", {
      className: ee.shop,
      children: [t ? null : (0, l.jsxs)(L.default, {
        className: n((0, A.getThemeClass)(em), ee.headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(y.default, {
          className: ee.logo
        }), (0, l.jsx)(L.default.Title, {
          className: ee.title,
          children: Q.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: ee.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: ee.close,
          closeAction: S ? j.closeCollectiblesShop : R,
          keybind: "ESC"
        })
      }), (0, l.jsx)(m.AdvancedScroller, {
        className: n(ee.shopScroll, {
          [ee.shopScrollBackgroundPrimary]: er
        }),
        ref: eu,
        onScroll: ed,
        children: (0, l.jsx)("div", {
          className: n(ee.pageWrapper, {
            [ee.pageWrapperFullscreen]: t,
            [ee.pageWrapperBackgroundPrimary]: er
          }),
          children: (0, l.jsxs)("main", {
            className: ee.page,
            children: [t ? (0, l.jsx)(_.default, {
              title: Q.default.Messages.COLLECTIBLES_SHOP
            }) : null, (0, l.jsx)(et, {
              isFullScreen: t
            }), Y ? (0, l.jsx)(K.default, {}) : el ? (0, l.jsx)(W.default, {
              onRetry: ef
            }) : (0, l.jsx)("div", {
              className: ee.categories,
              children: es.filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(ea, {
                isPremiumUser: H,
                category: e,
                initialItemCardRef: en,
                setIsGiftEasterEggEnabled: eo,
                isGiftEasterEggEnabled: ei
              }, e.skuId))
            })]
          })
        })
      })]
    }), ei && (0, l.jsx)(X.default, {})]
  })
}