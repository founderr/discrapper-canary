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
  u = a("265586"),
  c = a("65597"),
  d = a("151426"),
  f = a("551042"),
  m = a("77078"),
  C = a("939488"),
  E = a("304580"),
  h = a("841098"),
  p = a("812204"),
  g = a("685665"),
  T = a("481120"),
  L = a("10641"),
  x = a("539938"),
  b = a("210721"),
  v = a("65324"),
  S = a("778588"),
  I = a("697218"),
  _ = a("764490"),
  N = a("29557"),
  y = a("599110"),
  O = a("719923"),
  k = a("439932"),
  j = a("21526"),
  A = a("411691"),
  R = a("216719"),
  P = a("702953"),
  B = a("235898"),
  D = a("296304"),
  F = a("334820"),
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
  } = e, a = (0, A.default)("CollectiblesShop");
  return (0, o.match)(a).with(A.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, l.jsx)(G.default, {
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
    setIsGiftEasterEggEnabled: E,
    showEasterEggToggle: h
  } = e, p = s.useRef(10 + 70 * Math.random()), g = (0, F.usePurchasedProductsSort)(r.products), T = (0, i.groupBy)(g, "type"), L = (0, c.default)([R.default], () => R.default.initialProductSkuId), {
    tallerCardsEnabled: x
  } = (0, P.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), S = x ? K.default : H.default, I = s.useCallback(e => t => {
    e.skuId === L && (f.current = t.current)
  }, [L, f]), _ = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(m.Text, {
      className: n(Q.itemTypeTitle, {
        [Q.itemTypeTitleForTallerCard]: x
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n(Q.cardsContainer, x ? Q.tallerShopCard : Q.regularShopCard, o),
      children: e.map(e => (0, l.jsx)(S, {
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
    children: [h && (0, l.jsx)(m.Clickable, {
      className: n(Q.hiddenWumpus, {
        [Q.hiddenWumpusEnabled]: C
      }),
      onClick: () => E(!0),
      style: {
        left: "".concat(p.current, "%")
      },
      children: (0, l.jsx)(v.default, {
        idleAnimationState: b.AnimationState.IDLE,
        giftStyle: $.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(w.default, {
      category: r,
      className: x ? Q.tallerShopCardBanner : void 0
    }), _(null !== (t = T[u.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), _(null !== (a = T[u.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], J.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var ea = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, c.useStateFromStoresObject)([R.default], () => R.default.getAnalytics()), {
    AnalyticsLocationProvider: i,
    analyticsLocations: o
  } = (0, g.default)([...r, p.default.COLLECTIBLES_SHOP]), b = (0, c.default)([S.default], () => S.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)), v = (0, f.useHasAnyModalOpen)(), {
    onClose: A
  } = (0, z.useCollectiblesShopRouting)(), F = (0, c.default)([I.default], () => I.default.getCurrentUser()), w = O.default.canUseCollectibles(F), {
    categories: H,
    isFetchingCategories: W,
    error: G
  } = (0, B.default)(), K = (0, D.usePurchasedCategoriesSort)(H), {
    tallerCardsEnabled: ea
  } = (0, P.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), el = s.useRef(null), [es, er] = s.useState(!1);
  (0, M.useProductDetailsDeepLinking)({
    categories: H,
    isFetchingCategories: W,
    isLayer: b,
    initialItemCardRef: el
  });
  let {
    sessionId: en,
    scrollerRef: ei,
    scrollHandler: eo
  } = (0, T.usePageScrollPosition)(X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
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
    !(0, L.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, L.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, C.setHomeLink)(X.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...H.values()],
      itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION, u.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [H]), s.useEffect(() => {
    if (!t || b || v) return;
    let e = e => {
      e.key === q.KeyboardEventKey.Escape && A()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, b, v, A]);
  let eu = () => {
      (0, j.fetchCollectiblesCategories)()
    },
    ec = (0, h.default)();
  return (0, l.jsxs)(i, {
    children: [(0, l.jsxs)("div", {
      className: Q.shop,
      children: [t ? null : (0, l.jsxs)(x.default, {
        className: n((0, k.getThemeClass)(ec), Q.headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(N.default, {
          className: Q.logo
        }), (0, l.jsx)(x.default.Title, {
          className: Q.title,
          children: J.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: Q.closeWrapper,
        children: (0, l.jsx)(E.default, {
          className: Q.close,
          closeAction: b ? j.closeCollectiblesShop : A,
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
            children: [t ? (0, l.jsx)(_.default, {
              title: J.default.Messages.COLLECTIBLES_SHOP
            }) : null, (0, l.jsx)(ee, {
              isFullScreen: t
            }), W ? (0, l.jsx)(V.default, {}) : G ? (0, l.jsx)(U.default, {
              onRetry: eu
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