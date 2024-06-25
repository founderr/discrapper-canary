"use strict";
s.r(t), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  o = s(392711),
  l = s(979554),
  c = s(399606),
  u = s(704215),
  d = s(952265),
  p = s(481060),
  f = s(150063),
  C = s(434650),
  g = s(100527),
  m = s(906732),
  h = s(702486),
  x = s(605236),
  E = s(479446),
  I = s(981632),
  b = s(290026),
  _ = s(819640),
  S = s(594174),
  L = s(626135),
  v = s(74538),
  T = s(335131),
  N = s(328347),
  O = s(280773),
  j = s(617452),
  R = s(223143),
  Z = s(298228),
  A = s(937510),
  P = s(853748),
  M = s(426171),
  k = s(823941),
  B = s(752053),
  y = s(963102),
  F = s(128185),
  D = s(508498),
  H = s(38900),
  w = s(709999),
  U = s(373113),
  G = s(994896),
  V = s(141594),
  W = s(302800),
  z = s(981631),
  Y = s(921944),
  K = s(420212),
  X = s(474936),
  q = s(689938),
  $ = s(4477);

function J(e) {
  let {
    products: t,
    handleShopCardMount: s,
    header: r,
    category: a,
    isPremiumUser: i,
    isGiftEasterEggEnabled: o
  } = e, l = (0, c.e7)([S.default], () => S.default.getCurrentUser());
  return null == l || 0 === t.length ? null : (0, n.jsxs)("div", {
    children: [null != r ? (0, n.jsx)(p.Text, {
      className: $.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: r
    }) : (0, n.jsx)(p.Spacer, {
      size: 24
    }), (0, n.jsx)("div", {
      className: $.cardsContainer,
      children: t.map(e => (0, n.jsx)(w.Z, {
        onMount: s(e),
        isPremiumUser: i,
        category: a,
        product: e,
        user: l,
        isGiftEasterEggEnabled: o
      }, e.skuId))
    })]
  })
}

function Q(e) {
  let {
    category: t,
    initialItemCardRef: s,
    includeBundles: a = !1,
    ...i
  } = e, u = (0, A.l)(t.products), d = (0, c.e7)([N.Z], () => N.Z.initialProductSkuId), p = r.useCallback(e => t => {
    e.skuId === d && (s.current = t.current)
  }, [d, s]), {
    unifiedProductCatalogEnabled: f
  } = (0, O.n)("CollectiblesShop");
  if (f || a) return (0, n.jsx)(J, {
    products: u,
    handleShopCardMount: p,
    category: t,
    ...i
  });
  {
    var C, g;
    let e = (0, o.groupBy)(u, "type");
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(J, {
        products: null !== (C = e[l.Z.AVATAR_DECORATION]) && void 0 !== C ? C : [],
        handleShopCardMount: p,
        category: t,
        header: q.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...i
      }), (0, n.jsx)(J, {
        products: null !== (g = e[l.Z.PROFILE_EFFECT]) && void 0 !== g ? g : [],
        handleShopCardMount: p,
        category: t,
        header: q.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...i
      })]
    })
  }
}

function ee(e) {
  let {
    category: t,
    isPremiumUser: s,
    initialItemCardRef: a,
    isGiftEasterEggEnabled: o,
    setIsGiftEasterEggEnabled: l,
    showEasterEggToggle: c,
    isFullScreen: u,
    index: d,
    includeBundles: f = !1
  } = e, g = r.useRef(10 + 70 * Math.random()), [m, h] = r.useState(!1), x = (0, W.M7)(t.skuId), b = (0, C.O)(e => {
    h(e && null != x)
  }, u ? .13 : .15);
  return (0, n.jsxs)("div", {
    className: $.categoryWrapper,
    ref: b,
    children: [c && (0, n.jsx)(p.Clickable, {
      className: i()($.hiddenWumpus, {
        [$.hiddenWumpusEnabled]: o
      }),
      onClick: () => l(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, n.jsx)(I.Z, {
        idleAnimationState: E.S.IDLE,
        giftStyle: X.Cj.BOX
      })
    }), (0, n.jsx)(k.Z, {
      category: t,
      hideLimitedTimeBadge: null != x,
      index: d
    }), (0, n.jsx)(Q, {
      category: t,
      initialItemCardRef: a,
      isPremiumUser: s,
      isGiftEasterEggEnabled: o,
      includeBundles: f
    }), null != x && null != t.unpublishedAt && (0, n.jsx)(P.$, {
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
  } = (0, c.cj)([N.Z], () => N.Z.getAnalytics()), {
    analyticsLocations: o
  } = (0, m.ZP)([...a, g.Z.COLLECTIBLES_SHOP]), C = (0, c.e7)([_.Z], () => _.Z.getLayers().includes(z.S9g.COLLECTIBLES_SHOP)), E = (0, d.f9)(), {
    onClose: I
  } = (0, D.Db)(), O = (0, c.e7)([S.default], () => S.default.getCurrentUser()), A = v.ZP.canUseCollectibles(O), {
    categories: P,
    isFetchingCategories: k,
    error: w,
    refreshCategories: W
  } = (0, R.Z)();
  (0, b.P)();
  let q = (0, Z.O)(P),
    J = (0, j.e)("CollectiblesShop"),
    Q = r.useRef(null),
    [et, es] = r.useState(!1);
  (0, M.Kp)({
    categories: P,
    isFetchingCategories: k,
    isLayer: C,
    initialItemCardRef: Q
  });
  let {
    sessionId: en,
    scrollerRef: er,
    scrollHandler: ea
  } = (0, h._)(z.rMx.COLLECTIBLES_SHOP_SCROLLED, s);
  r.useEffect(() => {
    L.default.track(z.rMx.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: s,
      page_session_id: en
    }), !A && L.default.track(z.rMx.PREMIUM_UPSELL_VIEWED, {
      type: X.cd.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [A, o, s, en]);
  let {
    dismissCollectiblesShopTabNewBadge: ei
  } = (0, V.Z)();
  r.useEffect(() => {
    if (ei(), !(0, x.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK))(0, x.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: Y.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [ei]), r.useEffect(() => {
    !t && (0, f.Y)(z.Z5c.COLLECTIBLES_SHOP)
  }, [t]), r.useEffect(() => () => {
    (0, T.K$)({
      categories: [...P.values()],
      itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT]
    })
  }, [P]), r.useEffect(() => {
    if (!t || C || E) return;
    let e = e => {
      if (e.key === K.mR.Escape) I()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, C, E, I]);
  let eo = r.useCallback(() => {
      W()
    }, [W]),
    {
      containerRef: el
    } = function() {
      let e = r.useRef(null),
        t = r.useRef(null);
      return (0, p.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }(),
    {
      setCategoryRef: ec,
      handleScrollToCategory: eu
    } = (0, M.xV)(er.current),
    {
      condensedBannersAndDynamicHeadersEnabled: ed
    } = (0, G.O)({
      location: "CollectiblesShop"
    });
  return (0, n.jsxs)(m.Gt, {
    value: o,
    children: [(0, n.jsx)("div", {
      className: $.shop,
      ref: t ? el : void 0,
      children: (0, n.jsxs)(p.AdvancedScroller, {
        className: $.shopScroll,
        ref: er,
        onScroll: ea,
        children: [(0, n.jsx)(y.I, {
          isFullScreen: t,
          isLayer: C,
          onClose: I
        }), (0, n.jsx)("div", {
          className: $.pageWrapper,
          children: (0, n.jsxs)("main", {
            className: i()($.page, {
              [$.pageFullscreen]: t
            }),
            children: [ed && (0, n.jsx)(F.h, {
              categories: q,
              handleScrollToCategory: eu
            }), k ? (0, n.jsx)(H.Z, {}) : w ? (0, n.jsx)(B.Z, {
              onRetry: eo
            }) : (0, n.jsx)("div", {
              className: $.categories,
              children: q.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, s) => (0, n.jsx)("div", {
                ref: t => ec(e.skuId, t),
                children: (0, n.jsx)(ee, {
                  isPremiumUser: A,
                  category: e,
                  initialItemCardRef: Q,
                  setIsGiftEasterEggEnabled: es,
                  isGiftEasterEggEnabled: et,
                  isFullScreen: t,
                  includeBundles: J,
                  index: s
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), et && (0, n.jsx)(U.Z, {})]
  })
}