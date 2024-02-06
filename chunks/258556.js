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
  u = a("265586"),
  c = a("65597"),
  d = a("151426"),
  f = a("551042"),
  m = a("77078"),
  C = a("939488"),
  E = a("304580"),
  h = a("841098"),
  g = a("812204"),
  p = a("685665"),
  T = a("481120"),
  L = a("10641"),
  x = a("539938"),
  b = a("210721"),
  v = a("78345"),
  S = a("65324"),
  I = a("778588"),
  _ = a("697218"),
  N = a("764490"),
  y = a("29557"),
  O = a("599110"),
  k = a("719923"),
  j = a("439932"),
  A = a("21526"),
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
  ee = a("451594");

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
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: E,
    showEasterEggToggle: h
  } = e, g = s.useRef(10 + 70 * Math.random()), p = (0, M.usePurchasedProductsSort)(r.products), T = (0, i.groupBy)(p, "type"), L = (0, c.default)([P.default], () => P.default.initialProductSkuId), {
    tallerCardsEnabled: x
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), I = x ? Y.default : U.default, _ = s.useCallback(e => t => {
    e.skuId === L && (f.current = t.current)
  }, [L, f]), N = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(m.Text, {
      className: n(ee.itemTypeTitle, {
        [ee.itemTypeTitleForTallerCard]: x
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n(ee.cardsContainer, x ? ee.tallerShopCard : ee.regularShopCard, o),
      children: e.map(e => (0, l.jsx)(I, {
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
    children: [h && (0, l.jsx)(m.Clickable, {
      className: n(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: C
      }),
      onClick: () => E(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, l.jsx)(S.default, {
        idleAnimationState: b.AnimationState.IDLE,
        giftStyle: v.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(H.default, {
      category: r,
      className: x ? ee.tallerShopCardBanner : void 0
    }), N(null !== (t = T[u.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], Q.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = T[u.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], Q.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var el = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, c.useStateFromStoresObject)([P.default], () => P.default.getAnalytics()), {
    AnalyticsLocationProvider: i,
    analyticsLocations: o
  } = (0, p.default)([...r, g.default.COLLECTIBLES_SHOP]), b = (0, c.default)([I.default], () => I.default.getLayers().includes(Z.Layers.COLLECTIBLES_SHOP)), v = (0, f.useHasAnyModalOpen)(), {
    onClose: S
  } = (0, V.useCollectiblesShopRouting)(), R = (0, c.default)([_.default], () => _.default.getCurrentUser()), M = k.default.canUseCollectibles(R), {
    categories: H,
    isFetchingCategories: U,
    error: G
  } = (0, D.default)(), z = (0, F.usePurchasedCategoriesSort)(H), Y = s.useRef(Math.random()), {
    tallerCardsEnabled: el
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), es = s.useRef(null), [er, en] = s.useState(!1);
  (0, w.useProductDetailsDeepLinking)({
    categories: H,
    isFetchingCategories: U,
    isLayer: b,
    initialItemCardRef: es
  });
  let {
    sessionId: ei,
    scrollerRef: eo,
    scrollHandler: eu
  } = (0, T.usePageScrollPosition)(Z.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    O.default.track(Z.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: ei
    }), !M && O.default.track(Z.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: J.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [M, o, a, ei]), s.useEffect(() => {
    !(0, L.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, L.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: q.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, C.setHomeLink)(Z.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, A.setCollectiblesCategoryItemsViewed)({
      categories: [...H.values()],
      itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION, u.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [H]), s.useEffect(() => {
    if (!t || b || v) return;
    let e = e => {
      e.key === $.KeyboardEventKey.Escape && S()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, b, v, S]);
  let ec = () => {
      (0, A.fetchCollectiblesCategories)()
    },
    ed = (0, h.default)();
  return (0, l.jsxs)(i, {
    children: [(0, l.jsxs)("div", {
      className: ee.shop,
      children: [t ? null : (0, l.jsxs)(x.default, {
        className: n((0, j.getThemeClass)(ed), ee.headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(y.default, {
          className: ee.logo
        }), (0, l.jsx)(x.default.Title, {
          className: ee.title,
          children: Q.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: ee.closeWrapper,
        children: (0, l.jsx)(E.default, {
          className: ee.close,
          closeAction: b ? A.closeCollectiblesShop : S,
          keybind: "ESC"
        })
      }), (0, l.jsx)(m.AdvancedScroller, {
        className: n(ee.shopScroll, {
          [ee.shopScrollBackgroundPrimary]: el
        }),
        ref: eo,
        onScroll: eu,
        children: (0, l.jsx)("div", {
          className: n(ee.pageWrapper, {
            [ee.pageWrapperFullscreen]: t,
            [ee.pageWrapperBackgroundPrimary]: el
          }),
          children: (0, l.jsxs)("main", {
            className: ee.page,
            children: [t ? (0, l.jsx)(N.default, {
              title: Q.default.Messages.COLLECTIBLES_SHOP
            }) : null, (0, l.jsx)(et, {
              isFullScreen: t
            }), U ? (0, l.jsx)(K.default, {}) : G ? (0, l.jsx)(W.default, {
              onRetry: ec
            }) : (0, l.jsx)("div", {
              className: ee.categories,
              children: z.filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, t) => (0, l.jsx)(ea, {
                isPremiumUser: M,
                category: e,
                initialItemCardRef: es,
                setIsGiftEasterEggEnabled: en,
                isGiftEasterEggEnabled: er,
                showEasterEggToggle: t === Math.floor(Y.current * z.length)
              }, e.skuId))
            })]
          })
        })
      })]
    }), er && (0, l.jsx)(X.default, {})]
  })
}