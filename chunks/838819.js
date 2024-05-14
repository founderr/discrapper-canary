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
  g = l("100527"),
  h = l("906732"),
  b = l("702486"),
  x = l("580747"),
  v = l("605236"),
  T = l("984370"),
  L = l("329067"),
  S = l("51855"),
  I = l("479446"),
  N = l("981632"),
  _ = l("290026"),
  O = l("819640"),
  y = l("594174"),
  A = l("292665"),
  k = l("682864"),
  R = l("471731"),
  j = l("626135"),
  P = l("74538"),
  B = l("792125"),
  M = l("335131"),
  D = l("328347"),
  F = l("186711"),
  w = l("280773"),
  H = l("223143"),
  U = l("298228"),
  W = l("937510"),
  G = l("853748"),
  V = l("426171"),
  z = l("823941"),
  K = l("732329"),
  Y = l("752053"),
  Z = l("861746"),
  X = l("508498"),
  q = l("38900"),
  Q = l("709999"),
  $ = l("373113"),
  J = l("141594"),
  ee = l("302800"),
  et = l("981631"),
  el = l("921944"),
  ea = l("420212"),
  es = l("474936"),
  er = l("689938"),
  en = l("425734");

function ei(e) {
  var t, l;
  let {
    category: r,
    initialItemCardRef: c,
    tallerCardsEnabled: d,
    lightningCheckoutEnabled: C,
    isPremiumUser: m,
    isGiftEasterEggEnabled: p
  } = e, E = (0, W.usePurchasedProductsSort)(r.products), g = (0, i.groupBy)(E, "type"), h = (0, u.useStateFromStores)([D.default], () => D.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: b
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), x = K.default;
  d && C ? x = Z.default : d && (x = Q.default);
  let v = s.useCallback(e => t => {
      e.skuId === h && (c.current = t.current)
    }, [h, c]),
    T = (e, t) => 0 === e.length ? null : (0, a.jsxs)("div", {
      children: [null != t ? (0, a.jsx)(f.Text, {
        className: n()(en.itemTypeTitle, {
          [en.itemTypeTitleForTallerCard]: d
        }),
        color: "header-secondary",
        variant: "text-sm/bold",
        children: t
      }) : (0, a.jsx)(k.default, {
        size: 24
      }), (0, a.jsx)("div", {
        className: n()(en.cardsContainer, d ? en.tallerShopCard : en.regularShopCard),
        children: e.map(e => (0, a.jsx)(x, {
          onMount: v(e),
          isPremiumUser: m,
          category: r,
          product: e,
          isGiftEasterEggEnabled: p
        }, e.skuId))
      })]
    });
  return b ? T(E) : (0, a.jsxs)(a.Fragment, {
    children: [T(null !== (t = g[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], er.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), T(null !== (l = g[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== l ? l : [], er.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function eo(e) {
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
  } = (0, F.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), [g, h] = s.useState(!1), b = (0, ee.getCountdownDisplayOptions)(t.skuId), x = (0, p.useIsVisible)(e => {
    h(e && null != b)
  }, c ? .13 : .15);
  return (0, a.jsxs)("div", {
    className: en.categoryWrapper,
    ref: x,
    children: [u && (0, a.jsx)(f.Clickable, {
      className: n()(en.hiddenWumpus, {
        [en.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, a.jsx)(N.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: es.PremiumGiftStyles.BOX
      })
    }), (0, a.jsx)(z.default, {
      category: t,
      className: E ? en.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != b,
      index: C
    }), (0, a.jsx)(ei, {
      category: t,
      initialItemCardRef: r,
      tallerCardsEnabled: E,
      isPremiumUser: l,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d
    }), null != b && null != t.unpublishedAt && (0, a.jsx)(G.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: g,
      displayOptions: b,
      isFullScreen: c
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: l,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([D.default], () => D.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, h.default)([...r, g.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([O.default], () => O.default.getLayers().includes(et.Layers.COLLECTIBLES_SHOP)), I = (0, d.useHasAnyModalOpen)(), {
    onClose: N
  } = (0, X.useCollectiblesShopRouting)(), k = (0, u.useStateFromStores)([y.default], () => y.default.getCurrentUser()), w = P.default.canUseCollectibles(k), W = (0, x.default)("shop_disable_cache"), G = (0, x.default)("shop_include_unpublished"), {
    categories: z,
    isFetchingCategories: K,
    error: Z
  } = (0, H.default)({
    noCache: W,
    includeUnpublished: G
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let Q = (0, U.usePurchasedCategoriesSort)(z),
    {
      tallerCardsEnabled: ee
    } = (0, F.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    ei = S.default.useExperiment({
      location: g.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: eu
    } = (0, L.useLightningCheckoutEligibility)(),
    ec = ei.enabled && eu,
    ed = s.useRef(null),
    [ef, eC] = s.useState(!1);
  (0, V.useProductDetailsDeepLinking)({
    categories: z,
    isFetchingCategories: K,
    isLayer: p,
    initialItemCardRef: ed
  });
  let {
    sessionId: em,
    scrollerRef: ep,
    scrollHandler: eE
  } = (0, b.usePageScrollPosition)(et.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
  s.useEffect(() => {
    j.default.track(et.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: l,
      page_session_id: em
    }), !w && j.default.track(et.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: es.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [w, i, l, em]);
  let {
    dismissCollectiblesShopTabNewBadge: eg
  } = (0, J.default)();
  s.useEffect(() => {
    eg(), !(0, v.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, v.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: el.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eg]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(et.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, M.setCollectiblesCategoryItemsViewed)({
      categories: [...z.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [z]), s.useEffect(() => {
    if (!t || p || I) return;
    let e = e => {
      e.key === ea.KeyboardEventKey.Escape && N()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, I, N]), s.useEffect(() => {
    eu && S.default.trackExposure({
      location: g.default.COLLECTIBLES_SHOP
    })
  }, [eu]);
  let eh = s.useCallback(() => {
      (0, M.fetchCollectiblesCategories)({
        noCache: W,
        includeUnpublished: G
      })
    }, [W, G]),
    eb = (0, E.default)(),
    {
      containerRef: ex,
      returnRef: ev
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
  return (0, a.jsxs)(h.AnalyticsLocationProvider, {
    value: i,
    children: [(0, a.jsxs)("div", {
      className: en.shop,
      ref: t ? ex : void 0,
      children: [t ? null : (0, a.jsxs)(T.default, {
        className: n()((0, B.getThemeClass)(eb), en.__invalid_headerBar),
        toolbar: !0,
        children: [(0, a.jsx)(R.default, {
          className: en.logo
        }), (0, a.jsx)(T.default.Title, {
          className: en.title,
          children: er.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, a.jsx)("div", {
        className: en.closeWrapper,
        children: (0, a.jsx)(m.default, {
          className: en.close,
          closeAction: p ? M.closeCollectiblesShop : N,
          keybind: "ESC"
        })
      }), (0, a.jsx)(f.AdvancedScroller, {
        className: n()(en.shopScroll, {
          [en.shopScrollBackgroundPrimary]: ee
        }),
        ref: ep,
        onScroll: eE,
        children: (0, a.jsx)("div", {
          className: n()(en.pageWrapper, {
            [en.pageWrapperFullscreen]: t,
            [en.pageWrapperBackgroundPrimary]: ee
          }),
          children: (0, a.jsxs)("main", {
            className: n()(en.page, {
              [en.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, a.jsx)(A.default, {
              title: er.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? ev : void 0
            }) : null, K ? (0, a.jsx)(q.default, {}) : Z ? (0, a.jsx)(Y.default, {
              onRetry: eh
            }) : (0, a.jsx)("div", {
              className: en.categories,
              children: Q.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, l) => (0, a.jsx)(eo, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: ed,
                setIsGiftEasterEggEnabled: eC,
                isGiftEasterEggEnabled: ef,
                isFullScreen: t,
                lightningCheckoutEnabled: ec,
                index: l
              }, e.skuId))
            })]
          })
        })
      })]
    }), ef && (0, a.jsx)($.default, {})]
  })
}