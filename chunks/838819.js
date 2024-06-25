"use strict";
s.r(t), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  l = s(392711),
  o = s(979554),
  c = s(399606),
  u = s(704215),
  d = s(952265),
  C = s(481060),
  f = s(150063),
  p = s(434650),
  E = s(100527),
  g = s(906732),
  m = s(702486),
  h = s(605236),
  x = s(51855),
  I = s(479446),
  _ = s(981632),
  T = s(290026),
  L = s(819640),
  S = s(594174),
  N = s(626135),
  b = s(74538),
  v = s(335131),
  O = s(328347),
  Z = s(280773),
  A = s(884697),
  R = s(617452),
  j = s(223143),
  P = s(298228),
  M = s(937510),
  k = s(853748),
  y = s(426171),
  B = s(823941),
  D = s(752053),
  F = s(963102),
  U = s(128185),
  H = s(861746),
  w = s(508498),
  G = s(38900),
  W = s(709999),
  V = s(373113),
  Y = s(994896),
  z = s(141594),
  K = s(302800),
  X = s(981631),
  q = s(921944),
  Q = s(420212),
  $ = s(474936),
  J = s(689938),
  ee = s(4477);

function et(e) {
  let {
    products: t,
    handleShopCardMount: s,
    header: r,
    category: a,
    isPremiumUser: i,
    isGiftEasterEggEnabled: l,
    lightningCheckoutEnabled: o
  } = e, u = (0, c.e7)([S.default], () => S.default.getCurrentUser());
  return null == u || 0 === t.length ? null : (0, n.jsxs)("div", {
    children: [null != r ? (0, n.jsx)(C.Text, {
      className: ee.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: r
    }) : (0, n.jsx)(C.Spacer, {
      size: 24
    }), (0, n.jsx)("div", {
      className: ee.cardsContainer,
      children: t.map(e => {
        var t;
        let r = (t = e, !o || (0, A.x6)(t) ? W.Z : H.Z);
        return (0, n.jsx)(r, {
          onMount: s(e),
          isPremiumUser: i,
          category: a,
          product: e,
          user: u,
          isGiftEasterEggEnabled: l
        }, e.skuId)
      })
    })]
  })
}

function es(e) {
  let {
    category: t,
    initialItemCardRef: s,
    includeBundles: a = !1,
    ...i
  } = e, u = (0, M.l)(t.products), d = (0, c.e7)([O.Z], () => O.Z.initialProductSkuId), C = r.useCallback(e => t => {
    e.skuId === d && (s.current = t.current)
  }, [d, s]), {
    unifiedProductCatalogEnabled: f
  } = (0, Z.n)("CollectiblesShop");
  if (f || a) return (0, n.jsx)(et, {
    products: u,
    handleShopCardMount: C,
    category: t,
    ...i
  });
  {
    var p, E;
    let e = (0, l.groupBy)(u, "type");
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(et, {
        products: null !== (p = e[o.Z.AVATAR_DECORATION]) && void 0 !== p ? p : [],
        handleShopCardMount: C,
        category: t,
        header: J.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...i
      }), (0, n.jsx)(et, {
        products: null !== (E = e[o.Z.PROFILE_EFFECT]) && void 0 !== E ? E : [],
        handleShopCardMount: C,
        category: t,
        header: J.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...i
      })]
    })
  }
}

function en(e) {
  let {
    category: t,
    isPremiumUser: s,
    initialItemCardRef: a,
    isGiftEasterEggEnabled: l,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: f,
    includeBundles: E = !1
  } = e, g = r.useRef(10 + 70 * Math.random()), [m, h] = r.useState(!1), x = (0, K.M7)(t.skuId), T = (0, p.O)(e => {
    h(e && null != x)
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
    }), (0, n.jsx)(B.Z, {
      category: t,
      hideLimitedTimeBadge: null != x,
      index: f
    }), (0, n.jsx)(es, {
      category: t,
      initialItemCardRef: a,
      isPremiumUser: s,
      isGiftEasterEggEnabled: l,
      lightningCheckoutEnabled: d,
      includeBundles: E
    }), null != x && null != t.unpublishedAt && (0, n.jsx)(k.$, {
      unpublishedAt: t.unpublishedAt,
      isVisible: m,
      displayOptions: x,
      isFullScreen: u
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: s,
    analyticsLocations: a
  } = (0, c.cj)([O.Z], () => O.Z.getAnalytics()), {
    analyticsLocations: l
  } = (0, g.ZP)([...a, E.Z.COLLECTIBLES_SHOP]), p = (0, c.e7)([L.Z], () => L.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)), I = (0, d.f9)(), {
    onClose: _
  } = (0, w.Db)(), Z = (0, c.e7)([S.default], () => S.default.getCurrentUser()), A = b.ZP.canUseCollectibles(Z), {
    categories: M,
    isFetchingCategories: k,
    error: B,
    refreshCategories: H
  } = (0, j.Z)();
  (0, T.P)();
  let W = (0, P.O)(M),
    K = (0, x.Q)(),
    J = (0, R.e)("CollectiblesShop"),
    et = r.useRef(null),
    [es, er] = r.useState(!1);
  (0, y.Kp)({
    categories: M,
    isFetchingCategories: k,
    isLayer: p,
    initialItemCardRef: et
  });
  let {
    sessionId: ea,
    scrollerRef: ei,
    scrollHandler: el
  } = (0, m._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, s);
  r.useEffect(() => {
    N.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: l,
      source: s,
      page_session_id: ea
    }), !A && N.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
      type: $.cd.COLLECTIBLES_SHOP,
      location_stack: l
    })
  }, [A, l, s, ea]);
  let {
    dismissCollectiblesShopTabNewBadge: eo
  } = (0, z.Z)();
  r.useEffect(() => {
    if (eo(), !(0, h.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK))(0, h.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: q.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eo]), r.useEffect(() => {
    !t && (0, f.Y)(X.Z5c.COLLECTIBLES_SHOP)
  }, [t]), r.useEffect(() => () => {
    (0, v.K$)({
      categories: [...M.values()],
      itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
    })
  }, [M]), r.useEffect(() => {
    if (!t || p || I) return;
    let e = e => {
      if (e.key === Q.mR.Escape) _()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, I, _]);
  let ec = r.useCallback(() => {
      H()
    }, [H]),
    {
      containerRef: eu
    } = function() {
      let e = r.useRef(null),
        t = r.useRef(null);
      return (0, C.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }(),
    {
      setCategoryRef: ed,
      handleScrollToCategory: eC
    } = (0, y.xV)(ei.current),
    {
      condensedBannersAndDynamicHeadersEnabled: ef
    } = (0, Y.O)({
      location: "CollectiblesShop"
    });
  return (0, n.jsxs)(g.Gt, {
    value: l,
    children: [(0, n.jsx)("div", {
      className: ee.shop,
      ref: t ? eu : void 0,
      children: (0, n.jsxs)(C.AdvancedScroller, {
        className: ee.shopScroll,
        ref: ei,
        onScroll: el,
        children: [(0, n.jsx)(F.I, {
          isFullScreen: t,
          isLayer: p,
          onClose: _
        }), (0, n.jsx)("div", {
          className: ee.pageWrapper,
          children: (0, n.jsxs)("main", {
            className: i()(ee.page, {
              [ee.pageFullscreen]: t
            }),
            children: [ef && (0, n.jsx)(U.h, {
              categories: W,
              handleScrollToCategory: eC
            }), k ? (0, n.jsx)(G.Z, {}) : B ? (0, n.jsx)(D.Z, {
              onRetry: ec
            }) : (0, n.jsx)("div", {
              className: ee.categories,
              children: W.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, s) => (0, n.jsx)("div", {
                ref: t => ed(e.skuId, t),
                children: (0, n.jsx)(en, {
                  isPremiumUser: A,
                  category: e,
                  initialItemCardRef: et,
                  setIsGiftEasterEggEnabled: er,
                  isGiftEasterEggEnabled: es,
                  isFullScreen: t,
                  lightningCheckoutEnabled: K,
                  includeBundles: J,
                  index: s
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), es && (0, n.jsx)(V.Z, {})]
  })
}