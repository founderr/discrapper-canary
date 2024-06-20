"use strict";
t.r(s), t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(392711),
  o = t(979554),
  c = t(399606),
  u = t(704215),
  d = t(952265),
  C = t(481060),
  f = t(150063),
  E = t(434650),
  p = t(100527),
  g = t(906732),
  m = t(702486),
  x = t(605236),
  h = t(51855),
  I = t(479446),
  _ = t(981632),
  T = t(290026),
  N = t(819640),
  L = t(594174),
  S = t(626135),
  b = t(74538),
  v = t(335131),
  O = t(328347),
  A = t(280773),
  Z = t(884697),
  R = t(617452),
  j = t(223143),
  P = t(298228),
  M = t(937510),
  k = t(853748),
  B = t(426171),
  y = t(823941),
  F = t(752053),
  D = t(963102),
  U = t(128185),
  H = t(861746),
  w = t(508498),
  G = t(38900),
  W = t(709999),
  V = t(373113),
  Y = t(994896),
  z = t(141594),
  K = t(302800),
  X = t(981631),
  q = t(921944),
  Q = t(420212),
  $ = t(474936),
  J = t(689938),
  ee = t(4477);

function es(e) {
  let {
    products: s,
    handleShopCardMount: t,
    header: a,
    category: r,
    isPremiumUser: i,
    isGiftEasterEggEnabled: l,
    lightningCheckoutEnabled: o
  } = e, u = (0, c.e7)([L.default], () => L.default.getCurrentUser());
  return null == u || 0 === s.length ? null : (0, n.jsxs)("div", {
    children: [null != a ? (0, n.jsx)(C.Text, {
      className: ee.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: a
    }) : (0, n.jsx)(C.Spacer, {
      size: 24
    }), (0, n.jsx)("div", {
      className: ee.cardsContainer,
      children: s.map(e => {
        var s;
        let a = (s = e, !o || (0, Z.x6)(s) ? W.Z : H.Z);
        return (0, n.jsx)(a, {
          onMount: t(e),
          isPremiumUser: i,
          category: r,
          product: e,
          user: u,
          isGiftEasterEggEnabled: l
        }, e.skuId)
      })
    })]
  })
}

function et(e) {
  let {
    category: s,
    initialItemCardRef: t,
    includeBundles: r = !1,
    ...i
  } = e, u = (0, M.l)(s.products), d = (0, c.e7)([O.Z], () => O.Z.initialProductSkuId), C = a.useCallback(e => s => {
    e.skuId === d && (t.current = s.current)
  }, [d, t]), {
    unifiedProductCatalogEnabled: f
  } = (0, A.n)("CollectiblesShop");
  if (f || r) return (0, n.jsx)(es, {
    products: u,
    handleShopCardMount: C,
    category: s,
    ...i
  });
  {
    var E, p;
    let e = (0, l.groupBy)(u, "type");
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(es, {
        products: null !== (E = e[o.Z.AVATAR_DECORATION]) && void 0 !== E ? E : [],
        handleShopCardMount: C,
        category: s,
        header: J.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...i
      }), (0, n.jsx)(es, {
        products: null !== (p = e[o.Z.PROFILE_EFFECT]) && void 0 !== p ? p : [],
        handleShopCardMount: C,
        category: s,
        header: J.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...i
      })]
    })
  }
}

function en(e) {
  let {
    category: s,
    isPremiumUser: t,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: l,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: f,
    includeBundles: p = !1
  } = e, g = a.useRef(10 + 70 * Math.random()), [m, x] = a.useState(!1), h = (0, K.M7)(s.skuId), T = (0, E.O)(e => {
    x(e && null != h)
  }, u ? .13 : .15);
  return (0, n.jsxs)("div", {
    className: ee.categoryWrapper,
    ref: T,
    children: [c && (0, n.jsx)(C.Clickable, {
      className: i()(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: l
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, n.jsx)(_.Z, {
        idleAnimationState: I.S.IDLE,
        giftStyle: $.Cj.BOX
      })
    }), (0, n.jsx)(y.Z, {
      category: s,
      hideLimitedTimeBadge: null != h,
      index: f
    }), (0, n.jsx)(et, {
      category: s,
      initialItemCardRef: r,
      isPremiumUser: t,
      isGiftEasterEggEnabled: l,
      lightningCheckoutEnabled: d,
      includeBundles: p
    }), null != h && null != s.unpublishedAt && (0, n.jsx)(k.$, {
      unpublishedAt: s.unpublishedAt,
      isVisible: m,
      displayOptions: h,
      isFullScreen: u
    })]
  })
}
s.default = function(e) {
  let {
    isFullScreen: s = !0
  } = e, {
    analyticsSource: t,
    analyticsLocations: r
  } = (0, c.cj)([O.Z], () => O.Z.getAnalytics()), {
    analyticsLocations: l
  } = (0, g.ZP)([...r, p.Z.COLLECTIBLES_SHOP]), E = (0, c.e7)([N.Z], () => N.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)), I = (0, d.f9)(), {
    onClose: _
  } = (0, w.Db)(), A = (0, c.e7)([L.default], () => L.default.getCurrentUser()), Z = b.ZP.canUseCollectibles(A), {
    categories: M,
    isFetchingCategories: k,
    error: y,
    refreshCategories: H
  } = (0, j.Z)();
  (0, T.P)();
  let W = (0, P.O)(M),
    K = (0, h.Q)(),
    J = (0, R.e)("CollectiblesShop"),
    es = a.useRef(null),
    [et, ea] = a.useState(!1);
  (0, B.Kp)({
    categories: M,
    isFetchingCategories: k,
    isLayer: E,
    initialItemCardRef: es
  });
  let {
    sessionId: er,
    scrollerRef: ei,
    scrollHandler: el
  } = (0, m._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, t);
  a.useEffect(() => {
    S.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: l,
      source: t,
      page_session_id: er
    }), !Z && S.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
      type: $.cd.COLLECTIBLES_SHOP,
      location_stack: l
    })
  }, [Z, l, t, er]);
  let {
    dismissCollectiblesShopTabNewBadge: eo
  } = (0, z.Z)();
  a.useEffect(() => {
    if (eo(), !(0, x.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK))(0, x.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: q.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eo]), a.useEffect(() => {
    !s && (0, f.Y)(X.Z5c.COLLECTIBLES_SHOP)
  }, [s]), a.useEffect(() => () => {
    (0, v.K$)({
      categories: [...M.values()],
      itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
    })
  }, [M]), a.useEffect(() => {
    if (!s || E || I) return;
    let e = e => {
      if (e.key === Q.mR.Escape) _()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [s, E, I, _]);
  let ec = a.useCallback(() => {
      H()
    }, [H]),
    {
      containerRef: eu
    } = function() {
      let e = a.useRef(null),
        s = a.useRef(null);
      return (0, C.useFocusLock)(e, {
        returnRef: s
      }), {
        containerRef: e,
        returnRef: s
      }
    }(),
    {
      setCategoryRef: ed,
      handleScrollToCategory: eC
    } = (0, B.xV)(ei.current),
    {
      condensedBannersAndDynamicHeadersEnabled: ef
    } = (0, Y.O)({
      location: "CollectiblesShop"
    });
  return (0, n.jsxs)(g.Gt, {
    value: l,
    children: [(0, n.jsx)("div", {
      className: ee.shop,
      ref: s ? eu : void 0,
      children: (0, n.jsxs)(C.AdvancedScroller, {
        className: ee.shopScroll,
        ref: ei,
        onScroll: el,
        children: [(0, n.jsx)(D.I, {
          isFullScreen: s,
          isLayer: E,
          onClose: _
        }), (0, n.jsx)("div", {
          className: ee.pageWrapper,
          children: (0, n.jsxs)("main", {
            className: i()(ee.page, {
              [ee.pageFullscreen]: s
            }),
            children: [ef && (0, n.jsx)(U.h, {
              categories: W,
              handleScrollToCategory: eC
            }), k ? (0, n.jsx)(G.Z, {}) : y ? (0, n.jsx)(F.Z, {
              onRetry: ec
            }) : (0, n.jsx)("div", {
              className: ee.categories,
              children: W.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: s
                } = e;
                return s.length > 0
              }).map((e, t) => (0, n.jsx)("div", {
                ref: s => ed(e.skuId, s),
                children: (0, n.jsx)(en, {
                  isPremiumUser: Z,
                  category: e,
                  initialItemCardRef: es,
                  setIsGiftEasterEggEnabled: ea,
                  isGiftEasterEggEnabled: et,
                  isFullScreen: s,
                  lightningCheckoutEnabled: K,
                  includeBundles: J,
                  index: t
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), et && (0, n.jsx)(V.Z, {})]
  })
}