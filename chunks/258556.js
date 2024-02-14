"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ea
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
  C = a("939488"),
  p = a("304580"),
  g = a("841098"),
  E = a("812204"),
  h = a("685665"),
  b = a("481120"),
  T = a("10641"),
  x = a("539938"),
  L = a("210721"),
  S = a("65324"),
  v = a("778588"),
  I = a("697218"),
  N = a("764490"),
  _ = a("29557"),
  y = a("599110"),
  k = a("719923"),
  O = a("439932"),
  A = a("21526"),
  j = a("411691"),
  R = a("216719"),
  P = a("702953"),
  B = a("235898"),
  F = a("296304"),
  D = a("334820"),
  M = a("89569"),
  w = a("419513"),
  H = a("434393"),
  U = a("571464"),
  W = a("43525"),
  G = a("798235"),
  z = a("931262"),
  V = a("695824"),
  K = a("518907"),
  Y = a("368560"),
  X = a("49111"),
  Z = a("994428"),
  q = a("894282"),
  $ = a("646718"),
  J = a("782340"),
  Q = a("922063");

function ee(e) {
  let {
    isFullScreen: t
  } = e, a = (0, j.default)("CollectiblesShop");
  return (0, o.match)(a).with(j.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, l.jsx)(G.default, {
    isFullScreen: t
  })).otherwise(() => (0, l.jsx)(W.default, {
    isFullScreen: t
  }))
}

function et(e) {
  var t, a;
  let {
    category: r,
    className: o,
    isPremiumUser: d,
    initialItemCardRef: f,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: p,
    showEasterEggToggle: g
  } = e, E = s.useRef(10 + 70 * Math.random()), h = (0, D.usePurchasedProductsSort)(r.products), b = (0, i.groupBy)(h, "type"), T = (0, u.default)([R.default], () => R.default.initialProductSkuId), {
    tallerCardsEnabled: x
  } = (0, P.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), v = x ? K.default : H.default, I = s.useCallback(e => t => {
    e.skuId === T && (f.current = t.current)
  }, [T, f]), N = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(m.Text, {
      className: n(Q.itemTypeTitle, {
        [Q.itemTypeTitleForTallerCard]: x
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n(Q.cardsContainer, x ? Q.tallerShopCard : Q.regularShopCard, o),
      children: e.map(e => (0, l.jsx)(v, {
        onMount: I(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return (0, l.jsxs)("div", {
    className: Q.categoryWrapper,
    children: [g && (0, l.jsx)(m.Clickable, {
      className: n(Q.hiddenWumpus, {
        [Q.hiddenWumpusEnabled]: C
      }),
      onClick: () => p(!0),
      style: {
        left: "".concat(E.current, "%")
      },
      children: (0, l.jsx)(S.default, {
        idleAnimationState: L.AnimationState.IDLE,
        giftStyle: $.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(w.default, {
      category: r,
      className: x ? Q.tallerShopCardBanner : void 0
    }), N(null !== (t = b[c.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = b[c.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], J.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var ea = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([R.default], () => R.default.getAnalytics()), {
    AnalyticsLocationProvider: i,
    analyticsLocations: o
  } = (0, h.default)([...r, E.default.COLLECTIBLES_SHOP]), L = (0, u.default)([v.default], () => v.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)), S = (0, f.useHasAnyModalOpen)(), {
    onClose: j
  } = (0, z.useCollectiblesShopRouting)(), D = (0, u.default)([I.default], () => I.default.getCurrentUser()), w = k.default.canUseCollectibles(D), {
    categories: H,
    isFetchingCategories: W,
    error: G
  } = (0, B.default)(), K = (0, F.usePurchasedCategoriesSort)(H), {
    tallerCardsEnabled: ea
  } = (0, P.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), el = s.useRef(null), [es, er] = s.useState(!1);
  (0, M.useProductDetailsDeepLinking)({
    categories: H,
    isFetchingCategories: W,
    isLayer: L,
    initialItemCardRef: el
  });
  let {
    sessionId: en,
    scrollerRef: ei,
    scrollHandler: eo
  } = (0, b.usePageScrollPosition)(X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    y.default.track(X.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: en
    }), !w && y.default.track(X.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: $.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [w, o, a, en]), s.useEffect(() => {
    !(0, T.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, C.setHomeLink)(X.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, A.setCollectiblesCategoryItemsViewed)({
      categories: [...H.values()],
      itemTypes: [c.CollectiblesItemType.AVATAR_DECORATION, c.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [H]), s.useEffect(() => {
    if (!t || L || S) return;
    let e = e => {
      e.key === q.KeyboardEventKey.Escape && j()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, L, S, j]);
  let ec = () => {
      (0, A.fetchCollectiblesCategories)()
    },
    eu = (0, g.default)();
  return (0, l.jsxs)(i, {
    children: [(0, l.jsxs)("div", {
      className: Q.shop,
      children: [t ? null : (0, l.jsxs)(x.default, {
        className: n((0, O.getThemeClass)(eu), Q.headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(_.default, {
          className: Q.logo
        }), (0, l.jsx)(x.default.Title, {
          className: Q.title,
          children: J.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: Q.closeWrapper,
        children: (0, l.jsx)(p.default, {
          className: Q.close,
          closeAction: L ? A.closeCollectiblesShop : j,
          keybind: "ESC"
        })
      }), (0, l.jsx)(m.AdvancedScroller, {
        className: n(Q.shopScroll, {
          [Q.shopScrollBackgroundPrimary]: ea
        }),
        ref: ei,
        onScroll: eo,
        children: (0, l.jsx)("div", {
          className: n(Q.pageWrapper, {
            [Q.pageWrapperFullscreen]: t,
            [Q.pageWrapperBackgroundPrimary]: ea
          }),
          children: (0, l.jsxs)("main", {
            className: Q.page,
            children: [t ? (0, l.jsx)(N.default, {
              title: J.default.Messages.COLLECTIBLES_SHOP
            }) : null, (0, l.jsx)(ee, {
              isFullScreen: t
            }), W ? (0, l.jsx)(V.default, {}) : G ? (0, l.jsx)(U.default, {
              onRetry: ec
            }) : (0, l.jsx)("div", {
              className: Q.categories,
              children: K.filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(et, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: el,
                setIsGiftEasterEggEnabled: er,
                isGiftEasterEggEnabled: es
              }, e.skuId))
            })]
          })
        })
      })]
    }), es && (0, l.jsx)(Y.default, {})]
  })
}