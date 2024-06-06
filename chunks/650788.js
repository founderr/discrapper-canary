"use strict";
s.r(t), s.d(t, {
  default: function() {
    return H
  }
});
var i = s("735250"),
  l = s("470079"),
  r = s("120356"),
  a = s.n(r),
  n = s("990547"),
  d = s("442837"),
  o = s("481060"),
  u = s("213609"),
  c = s("377171"),
  C = s("674180"),
  _ = s("38618"),
  f = s("312217"),
  h = s("623299"),
  S = s("984370"),
  x = s("430824"),
  I = s("682864"),
  L = s("76535"),
  p = s("423000"),
  E = s("891561"),
  T = s("847033"),
  g = s("544978"),
  P = s("154522"),
  R = s("935554"),
  m = s("340529"),
  O = s("175390"),
  j = s("64685"),
  G = s("866104"),
  v = s("886176"),
  D = s("333866"),
  U = s("176505"),
  N = s("20281"),
  M = s("689938"),
  A = s("807923"),
  w = s("19340");

function b(e) {
  var t;
  let {
    guildId: s,
    productId: l
  } = e, {
    loaded: r,
    subscriptionsSettings: a
  } = (0, L.useMonetizationSettings)(s), n = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(s)), {
    selectedTab: u,
    isPhantomPreview: c,
    categoryTabs: C
  } = (0, T.useGuildShopDisplayContext)(), _ = !r || null == a;
  return null == n || !c && _ ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(E.default, {
    defaultSortOption: null !== (t = null == a ? void 0 : a.store_page_guild_products_default_sort) && void 0 !== t ? t : D.GuildProductSortOptions.NAME,
    children: (0, i.jsxs)("div", {
      className: A.contentContainer,
      children: [(0, i.jsx)(G.default, {
        guild: n,
        subscriptionsSettings: a
      }), (0, i.jsx)(I.default, {
        size: 32
      }), C.length > 0 && (0, i.jsx)(m.GuildShopCategorySelector, {
        guild: n
      }), (0, i.jsxs)("div", {
        className: A.tabContainer,
        children: [(0, i.jsx)(I.default, {
          size: 32
        }), c && (0, i.jsx)(O.default, {
          guildId: s
        }), u === g.GuildShopTab.GUILD_PRODUCTS && (0, i.jsx)(P.GuildProductCardGrid, {
          guildId: s,
          productId: l
        }), u === g.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS && (0, i.jsx)(R.default, {
          guildId: s
        })]
      })]
    })
  })
}

function V(e) {
  let {
    guildId: t,
    productId: s
  } = e, r = (0, d.useStateFromStores)([_.default], () => _.default.isConnected()), I = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(t)), {
    shouldHideGuildPurchaseEntryPoints: L,
    restrictionsLoading: E
  } = (0, C.useShouldHideGuildPurchaseEntryPoints)(t), {
    selectedTab: g,
    isPhantomPreview: P,
    categoryTabs: R
  } = (0, T.useGuildShopDisplayContext)(), m = r && (null == I || 0 === R.length && !P || L && !E);
  return l.useEffect(() => {
    m && (0, p.handleInaccessiblePage)(t, U.StaticChannelRoute.GUILD_SHOP)
  }, [t, m]), (0, u.default)({
    type: N.ImpressionTypes.PAGE,
    name: n.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: s,
      tab: g
    }
  }, {
    disableTrack: m
  }), (0, i.jsxs)("div", {
    className: a()(w.chat, A.container),
    children: [(0, i.jsxs)(S.default, {
      children: [(0, i.jsx)(S.default.Icon, {
        icon: v.default,
        "aria-hidden": !0,
        color: c.default.INTERACTIVE_ACTIVE
      }), (0, i.jsx)(S.default.Title, {
        children: M.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      }), (0, i.jsx)(j.default, {})]
    }), (0, i.jsx)(o.ScrollerNone, {
      className: A.content,
      children: r ? (0, i.jsx)(b, {
        guildId: t,
        productId: s
      }) : (0, i.jsx)(o.Spinner, {})
    }), (0, i.jsx)(h.default, {
      className: A.sparkleCloudTop
    }), (0, i.jsx)(f.default, {
      className: A.sparkleCloudBottom
    })]
  })
}

function H(e) {
  let {
    guildId: t,
    productId: s,
    initialTab: l
  } = e;
  return null == l && null != s && (l = g.GuildShopTab.GUILD_PRODUCTS), (0, i.jsx)(T.default, {
    initialTab: l,
    guildId: t,
    children: (0, i.jsx)(V, {
      initialTab: l,
      productId: s,
      guildId: t
    })
  })
}