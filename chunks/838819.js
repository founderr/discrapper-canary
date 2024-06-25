"use strict";
n.r(t), n(47120);
var r = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  s = n(392711),
  c = n(979554),
  l = n(399606),
  d = n(704215),
  u = n(952265),
  p = n(481060),
  f = n(150063),
  g = n(434650),
  _ = n(100527),
  C = n(906732),
  b = n(702486),
  m = n(605236),
  h = n(479446),
  x = n(981632),
  I = n(290026),
  E = n(819640),
  v = n(594174),
  S = n(626135),
  T = n(74538),
  L = n(335131),
  N = n(328347),
  O = n(280773),
  j = n(617452),
  B = n(223143),
  R = n(298228),
  k = n(937510),
  A = n(853748),
  P = n(426171),
  Z = n(823941),
  y = n(752053),
  M = n(963102),
  w = n(128185),
  D = n(508498),
  F = n(38900),
  H = n(709999),
  U = n(373113),
  W = n(994896),
  G = n(141594),
  V = n(302800),
  z = n(981631),
  Y = n(921944),
  K = n(420212),
  X = n(474936),
  q = n(689938),
  $ = n(4477);

function J(e) {
  let {
    products: t,
    handleShopCardMount: n,
    header: a,
    category: i,
    isPremiumUser: o,
    isGiftEasterEggEnabled: s
  } = e, c = (0, l.e7)([v.default], () => v.default.getCurrentUser());
  return null == c || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != a ? (0, r.jsx)(p.Text, {
      className: $.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: a
    }) : (0, r.jsx)(p.Spacer, {
      size: 24
    }), (0, r.jsx)("div", {
      className: $.cardsContainer,
      children: t.map(e => (0, r.jsx)(H.Z, {
        onMount: n(e),
        isPremiumUser: o,
        category: i,
        product: e,
        user: c,
        isGiftEasterEggEnabled: s
      }, e.skuId))
    })]
  })
}

function Q(e) {
  let {
    category: t,
    initialItemCardRef: n,
    includeBundles: i = !1,
    ...o
  } = e, d = (0, k.l)(t.products), u = (0, l.e7)([N.Z], () => N.Z.initialProductSkuId), p = a.useCallback(e => t => {
    e.skuId === u && (n.current = t.current)
  }, [u, n]), {
    unifiedProductCatalogEnabled: f
  } = (0, O.n)("CollectiblesShop");
  if (f || i) return (0, r.jsx)(J, {
    products: d,
    handleShopCardMount: p,
    category: t,
    ...o
  });
  {
    var g, _;
    let e = (0, s.groupBy)(d, "type");
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(J, {
        products: null !== (g = e[c.Z.AVATAR_DECORATION]) && void 0 !== g ? g : [],
        handleShopCardMount: p,
        category: t,
        header: q.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...o
      }), (0, r.jsx)(J, {
        products: null !== (_ = e[c.Z.PROFILE_EFFECT]) && void 0 !== _ ? _ : [],
        handleShopCardMount: p,
        category: t,
        header: q.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...o
      })]
    })
  }
}

function ee(e) {
  let {
    category: t,
    isPremiumUser: n,
    initialItemCardRef: i,
    isGiftEasterEggEnabled: s,
    setIsGiftEasterEggEnabled: c,
    showEasterEggToggle: l,
    isFullScreen: d,
    index: u,
    includeBundles: f = !1
  } = e, _ = a.useRef(10 + 70 * Math.random()), [C, b] = a.useState(!1), m = (0, V.M7)(t.skuId), I = (0, g.O)(e => {
    b(e && null != m)
  }, d ? .13 : .15);
  return (0, r.jsxs)("div", {
    className: $.categoryWrapper,
    ref: I,
    children: [l && (0, r.jsx)(p.Clickable, {
      className: o()($.hiddenWumpus, {
        [$.hiddenWumpusEnabled]: s
      }),
      onClick: () => c(!0),
      style: {
        left: "".concat(_.current, "%")
      },
      children: (0, r.jsx)(x.Z, {
        idleAnimationState: h.S.IDLE,
        giftStyle: X.Cj.BOX
      })
    }), (0, r.jsx)(Z.Z, {
      category: t,
      hideLimitedTimeBadge: null != m,
      index: u
    }), (0, r.jsx)(Q, {
      category: t,
      initialItemCardRef: i,
      isPremiumUser: n,
      isGiftEasterEggEnabled: s,
      includeBundles: f
    }), null != m && null != t.unpublishedAt && (0, r.jsx)(A.$, {
      unpublishedAt: t.unpublishedAt,
      isVisible: C,
      displayOptions: m,
      isFullScreen: d
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: n,
    analyticsLocations: i
  } = (0, l.cj)([N.Z], () => N.Z.getAnalytics()), {
    analyticsLocations: s
  } = (0, C.ZP)([...i, _.Z.COLLECTIBLES_SHOP]), g = (0, l.e7)([E.Z], () => E.Z.getLayers().includes(z.S9g.COLLECTIBLES_SHOP)), h = (0, u.f9)(), {
    onClose: x
  } = (0, D.Db)(), O = (0, l.e7)([v.default], () => v.default.getCurrentUser()), k = T.ZP.canUseCollectibles(O), {
    categories: A,
    isFetchingCategories: Z,
    error: H,
    refreshCategories: V
  } = (0, B.Z)();
  (0, I.P)();
  let q = (0, R.O)(A),
    J = (0, j.e)("CollectiblesShop"),
    Q = a.useRef(null),
    [et, en] = a.useState(!1);
  (0, P.Kp)({
    categories: A,
    isFetchingCategories: Z,
    isLayer: g,
    initialItemCardRef: Q
  });
  let {
    sessionId: er,
    scrollerRef: ea,
    scrollHandler: ei
  } = (0, b._)(z.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
  a.useEffect(() => {
    S.default.track(z.rMx.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: s,
      source: n,
      page_session_id: er
    }), !k && S.default.track(z.rMx.PREMIUM_UPSELL_VIEWED, {
      type: X.cd.COLLECTIBLES_SHOP,
      location_stack: s
    })
  }, [k, s, n, er]);
  let {
    dismissCollectiblesShopTabNewBadge: eo
  } = (0, G.Z)();
  a.useEffect(() => {
    if (eo(), !(0, m.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK))(0, m.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: Y.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eo]), a.useEffect(() => {
    !t && (0, f.Y)(z.Z5c.COLLECTIBLES_SHOP)
  }, [t]), a.useEffect(() => () => {
    (0, L.K$)({
      categories: [...A.values()],
      itemTypes: [c.Z.AVATAR_DECORATION, c.Z.PROFILE_EFFECT]
    })
  }, [A]), a.useEffect(() => {
    if (!t || g || h) return;
    let e = e => {
      if (e.key === K.mR.Escape) x()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, g, h, x]);
  let es = a.useCallback(() => {
      V()
    }, [V]),
    {
      containerRef: ec
    } = function() {
      let e = a.useRef(null),
        t = a.useRef(null);
      return (0, p.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }(),
    {
      setCategoryRef: el,
      handleScrollToCategory: ed
    } = (0, P.xV)(ea.current),
    {
      condensedBannersAndDynamicHeadersEnabled: eu
    } = (0, W.O)({
      location: "CollectiblesShop"
    });
  return (0, r.jsxs)(C.Gt, {
    value: s,
    children: [(0, r.jsx)("div", {
      className: $.shop,
      ref: t ? ec : void 0,
      children: (0, r.jsxs)(p.AdvancedScroller, {
        className: $.shopScroll,
        ref: ea,
        onScroll: ei,
        children: [(0, r.jsx)(M.I, {
          isFullScreen: t,
          isLayer: g,
          onClose: x
        }), (0, r.jsx)("div", {
          className: $.pageWrapper,
          children: (0, r.jsxs)("main", {
            className: o()($.page, {
              [$.pageFullscreen]: t
            }),
            children: [eu && (0, r.jsx)(w.h, {
              categories: q,
              handleScrollToCategory: ed
            }), Z ? (0, r.jsx)(F.Z, {}) : H ? (0, r.jsx)(y.Z, {
              onRetry: es
            }) : (0, r.jsx)("div", {
              className: $.categories,
              children: q.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, n) => (0, r.jsx)("div", {
                ref: t => el(e.skuId, t),
                children: (0, r.jsx)(ee, {
                  isPremiumUser: k,
                  category: e,
                  initialItemCardRef: Q,
                  setIsGiftEasterEggEnabled: en,
                  isGiftEasterEggEnabled: et,
                  isFullScreen: t,
                  includeBundles: J,
                  index: n
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), et && (0, r.jsx)(U.Z, {})]
  })
}