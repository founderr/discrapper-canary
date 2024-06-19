t.r(s), t.d(s, {
  default: function() {
    return H
  }
});
var n = t(735250),
  r = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(990547),
  a = t(442837),
  c = t(481060),
  d = t(213609),
  C = t(377171),
  u = t(674180),
  _ = t(38618),
  x = t(312217),
  I = t(623299),
  h = t(984370),
  L = t(430824),
  E = t(76535),
  m = t(423e3),
  S = t(891561),
  p = t(847033),
  R = t(544978),
  T = t(154522),
  j = t(935554),
  g = t(340529),
  v = t(175390),
  P = t(64685),
  O = t(866104),
  Z = t(886176),
  f = t(333866),
  D = t(176505),
  M = t(20281),
  U = t(689938),
  N = t(235699),
  G = t(175803);

function w(e) {
  var s;
  let {
    guildId: t,
    productId: r
  } = e, {
    loaded: i,
    subscriptionsSettings: l
  } = (0, E.H)(t), o = (0, a.e7)([L.Z], () => L.Z.getGuild(t)), {
    selectedTab: d,
    isPhantomPreview: C,
    categoryTabs: u
  } = (0, p.m)(), _ = !i || null == l;
  return null == o || !C && _ ? (0, n.jsx)(c.Spinner, {}) : (0, n.jsx)(S.Z, {
    defaultSortOption: null !== (s = null == l ? void 0 : l.store_page_guild_products_default_sort) && void 0 !== s ? s : f.zJ.NAME,
    children: (0, n.jsxs)("div", {
      className: N.contentContainer,
      children: [(0, n.jsx)(O.C, {
        guild: o,
        subscriptionsSettings: l
      }), (0, n.jsx)(c.Spacer, {
        size: 32
      }), u.length > 0 && (0, n.jsx)(g.z, {
        guild: o
      }), (0, n.jsxs)("div", {
        className: N.tabContainer,
        children: [(0, n.jsx)(c.Spacer, {
          size: 32
        }), C && (0, n.jsx)(v.Z, {
          guildId: t
        }), d === R.y.GUILD_PRODUCTS && (0, n.jsx)(T.Q, {
          guildId: t,
          productId: r
        }), d === R.y.GUILD_ROLE_SUBSCRIPTIONS && (0, n.jsx)(j.Z, {
          guildId: t
        })]
      })]
    })
  })
}

function V(e) {
  let {
    guildId: s,
    productId: t
  } = e, i = (0, a.e7)([_.Z], () => _.Z.isConnected()), E = (0, a.e7)([L.Z], () => L.Z.getGuild(s)), {
    shouldHideGuildPurchaseEntryPoints: S,
    restrictionsLoading: R
  } = (0, u.uP)(s), {
    selectedTab: T,
    isPhantomPreview: j,
    categoryTabs: g
  } = (0, p.m)(), v = i && (null == E || 0 === g.length && !j || S && !R);
  return r.useEffect(() => {
    v && (0, m.M)(s, D.oC.GUILD_SHOP)
  }, [s, v]), (0, d.Z)({
    type: M.n.PAGE,
    name: o.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: t,
      tab: T
    }
  }, {
    disableTrack: v
  }), (0, n.jsxs)("div", {
    className: l()(G.chat, N.container),
    children: [(0, n.jsxs)(h.Z, {
      children: [(0, n.jsx)(h.Z.Icon, {
        icon: (0, c.makeIconCompat)(Z.Z),
        "aria-hidden": !0,
        color: C.Z.INTERACTIVE_ACTIVE
      }), (0, n.jsx)(h.Z.Title, {
        children: U.Z.Messages.GUILD_SHOP_CHANNEL_LABEL
      }), (0, n.jsx)(P.Z, {})]
    }), (0, n.jsx)(c.ScrollerNone, {
      className: N.content,
      children: i ? (0, n.jsx)(w, {
        guildId: s,
        productId: t
      }) : (0, n.jsx)(c.Spinner, {})
    }), (0, n.jsx)(I.Z, {
      className: N.sparkleCloudTop
    }), (0, n.jsx)(x.Z, {
      className: N.sparkleCloudBottom
    })]
  })
}

function H(e) {
  let {
    guildId: s,
    productId: t,
    initialTab: r
  } = e;
  return null == r && null != t && (r = R.y.GUILD_PRODUCTS), (0, n.jsx)(p.Z, {
    initialTab: r,
    guildId: s,
    children: (0, n.jsx)(V, {
      initialTab: r,
      productId: t,
      guildId: s
    })
  })
}