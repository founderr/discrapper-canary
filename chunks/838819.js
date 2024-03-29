"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("803997"),
  n = a.n(r),
  o = a("392711"),
  i = a("979554"),
  u = a("399606"),
  c = a("524437"),
  d = a("952265"),
  f = a("481060"),
  m = a("150063"),
  C = a("425493"),
  p = a("434650"),
  g = a("410030"),
  h = a("100527"),
  E = a("906732"),
  b = a("702486"),
  S = a("580747"),
  T = a("605236"),
  x = a("984370"),
  v = a("479446"),
  L = a("981632"),
  I = a("25251"),
  _ = a("996678"),
  N = a("819640"),
  y = a("594174"),
  O = a("292665"),
  k = a("471731"),
  A = a("626135"),
  P = a("74538"),
  R = a("792125"),
  j = a("335131"),
  F = a("597688"),
  D = a("328347"),
  B = a("186711"),
  M = a("223143"),
  w = a("298228"),
  H = a("971815"),
  U = a("853748"),
  W = a("426171"),
  G = a("823941"),
  V = a("732329"),
  z = a("752053"),
  Y = a("508498"),
  K = a("38900"),
  X = a("709999"),
  Z = a("373113"),
  q = a("302800"),
  $ = a("981631"),
  J = a("921944"),
  Q = a("420212"),
  ee = a("474936"),
  et = a("689938"),
  ea = a("116162");

function el(e) {
  var t, a;
  let {
    category: r,
    className: c,
    isPremiumUser: d,
    initialItemCardRef: m,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: g,
    showEasterEggToggle: h,
    isFullScreen: E
  } = e, b = s.useRef(10 + 70 * Math.random()), S = (0, H.usePurchasedProductsSort)(r.products), T = (0, o.groupBy)(S, "type"), x = (0, u.useStateFromStores)([D.default], () => D.default.initialProductSkuId), {
    tallerCardsEnabled: I
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), _ = I ? X.default : V.default, N = s.useCallback(e => t => {
    e.skuId === x && (m.current = t.current)
  }, [x, m]), [y, O] = s.useState(!1), k = (0, q.getCountdownDisplayOptions)(r.skuId), A = (0, p.useIsVisible)(e => {
    O(e && null != k)
  }, E ? .13 : .15), P = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(f.Text, {
      className: n()(ea.itemTypeTitle, {
        [ea.itemTypeTitleForTallerCard]: I
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n()(ea.cardsContainer, I ? ea.tallerShopCard : ea.regularShopCard, c),
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
    className: ea.categoryWrapper,
    ref: A,
    children: [h && (0, l.jsx)(f.Clickable, {
      className: n()(ea.hiddenWumpus, {
        [ea.hiddenWumpusEnabled]: C
      }),
      onClick: () => g(!0),
      style: {
        left: "".concat(b.current, "%")
      },
      children: (0, l.jsx)(L.default, {
        idleAnimationState: v.AnimationState.IDLE,
        giftStyle: ee.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(G.default, {
      category: r,
      className: I ? ea.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != k
    }), P(null !== (t = T[i.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], et.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), P(null !== (a = T[i.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], et.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE), null != k && null != r.unpublishedAt && (0, l.jsx)(U.CollectiblesCountdown, {
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
  } = (0, u.useStateFromStoresObject)([D.default], () => D.default.getAnalytics()), {
    analyticsLocations: o
  } = (0, E.default)([...r, h.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([N.default], () => N.default.getLayers().includes($.Layers.COLLECTIBLES_SHOP)), v = (0, d.useHasAnyModalOpen)(), {
    onClose: L
  } = (0, Y.useCollectiblesShopRouting)(), H = (0, u.useStateFromStores)([y.default], () => y.default.getCurrentUser()), U = P.default.canUseCollectibles(H), G = (0, S.default)("shop_disable_cache"), V = (0, S.default)("shop_include_unpublished"), {
    categories: X,
    isFetchingCategories: q,
    error: es
  } = (0, M.default)({
    noCache: G,
    includeUnpublished: V
  }), er = (0, u.useStateFromStores)([F.default], () => F.default.products), en = s.useMemo(() => [...er.values()].filter(e => e.type === i.CollectiblesItemType.PROFILE_EFFECT).some(e => null == I.default.getProfileEffectById(e.items[0].id)), [er]);
  (0, _.default)(en);
  let eo = (0, w.usePurchasedCategoriesSort)(X),
    {
      tallerCardsEnabled: ei
    } = (0, B.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    eu = s.useRef(null),
    [ec, ed] = s.useState(!1);
  (0, W.useProductDetailsDeepLinking)({
    categories: X,
    isFetchingCategories: q,
    isLayer: p,
    initialItemCardRef: eu
  });
  let {
    sessionId: ef,
    scrollerRef: em,
    scrollHandler: eC
  } = (0, b.usePageScrollPosition)($.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    A.default.track($.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: ef
    }), !U && A.default.track($.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [U, o, a, ef]), s.useEffect(() => {
    !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: J.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, m.setHomeLink)($.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...X.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [X]), s.useEffect(() => {
    if (!t || p || v) return;
    let e = e => {
      e.key === Q.KeyboardEventKey.Escape && L()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, v, L]);
  let ep = s.useCallback(() => {
      (0, j.fetchCollectiblesCategories)({
        noCache: G,
        includeUnpublished: V
      })
    }, [G, V]),
    eg = (0, g.default)(),
    {
      containerRef: eh,
      returnRef: eE
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
    value: o,
    children: [(0, l.jsxs)("div", {
      className: ea.shop,
      ref: t ? eh : void 0,
      children: [t ? null : (0, l.jsxs)(x.default, {
        className: n()((0, R.getThemeClass)(eg), ea.__invalid_headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(k.default, {
          className: ea.logo
        }), (0, l.jsx)(x.default.Title, {
          className: ea.title,
          children: et.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: ea.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: ea.close,
          closeAction: p ? j.closeCollectiblesShop : L,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: n()(ea.shopScroll, {
          [ea.shopScrollBackgroundPrimary]: ei
        }),
        ref: em,
        onScroll: eC,
        children: (0, l.jsx)("div", {
          className: n()(ea.pageWrapper, {
            [ea.pageWrapperFullscreen]: t,
            [ea.pageWrapperBackgroundPrimary]: ei
          }),
          children: (0, l.jsxs)("main", {
            className: n()(ea.page, {
              [ea.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(O.default, {
              title: et.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eE : void 0
            }) : null, q ? (0, l.jsx)(K.default, {}) : es ? (0, l.jsx)(z.default, {
              onRetry: ep
            }) : (0, l.jsx)("div", {
              className: ea.categories,
              children: eo.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(el, {
                isPremiumUser: U,
                category: e,
                initialItemCardRef: eu,
                setIsGiftEasterEggEnabled: ed,
                isGiftEasterEggEnabled: ec,
                isFullScreen: t
              }, e.skuId))
            })]
          })
        })
      })]
    }), ec && (0, l.jsx)(Z.default, {})]
  })
}