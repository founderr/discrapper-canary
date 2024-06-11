"use strict";
s.r(t), s.d(t, {
  default: function() {
    return V
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
  S = s("623299"),
  h = s("984370"),
  x = s("430824"),
  I = s("76535"),
  p = s("423000"),
  L = s("891561"),
  E = s("847033"),
  T = s("544978"),
  g = s("154522"),
  P = s("935554"),
  R = s("340529"),
  m = s("175390"),
  O = s("64685"),
  j = s("866104"),
  G = s("886176"),
  v = s("333866"),
  D = s("176505"),
  U = s("20281"),
  N = s("689938"),
  M = s("807923"),
  A = s("19340");

function w(e) {
  var t;
  let {
    guildId: s,
    productId: l
  } = e, {
    loaded: r,
    subscriptionsSettings: a
  } = (0, I.useMonetizationSettings)(s), n = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(s)), {
    selectedTab: u,
    isPhantomPreview: c,
    categoryTabs: C
  } = (0, E.useGuildShopDisplayContext)(), _ = !r || null == a;
  return null == n || !c && _ ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(L.default, {
    defaultSortOption: null !== (t = null == a ? void 0 : a.store_page_guild_products_default_sort) && void 0 !== t ? t : v.GuildProductSortOptions.NAME,
    children: (0, i.jsxs)("div", {
      className: M.contentContainer,
      children: [(0, i.jsx)(j.default, {
        guild: n,
        subscriptionsSettings: a
      }), (0, i.jsx)(o.Spacer, {
        size: 32
      }), C.length > 0 && (0, i.jsx)(R.GuildShopCategorySelector, {
        guild: n
      }), (0, i.jsxs)("div", {
        className: M.tabContainer,
        children: [(0, i.jsx)(o.Spacer, {
          size: 32
        }), c && (0, i.jsx)(m.default, {
          guildId: s
        }), u === T.GuildShopTab.GUILD_PRODUCTS && (0, i.jsx)(g.GuildProductCardGrid, {
          guildId: s,
          productId: l
        }), u === T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS && (0, i.jsx)(P.default, {
          guildId: s
        })]
      })]
    })
  })
}

function b(e) {
  let {
    guildId: t,
    productId: s
  } = e, r = (0, d.useStateFromStores)([_.default], () => _.default.isConnected()), I = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(t)), {
    shouldHideGuildPurchaseEntryPoints: L,
    restrictionsLoading: T
  } = (0, C.useShouldHideGuildPurchaseEntryPoints)(t), {
    selectedTab: g,
    isPhantomPreview: P,
    categoryTabs: R
  } = (0, E.useGuildShopDisplayContext)(), m = r && (null == I || 0 === R.length && !P || L && !T);
  return l.useEffect(() => {
    m && (0, p.handleInaccessiblePage)(t, D.StaticChannelRoute.GUILD_SHOP)
  }, [t, m]), (0, u.default)({
    type: U.ImpressionTypes.PAGE,
    name: n.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: s,
      tab: g
    }
  }, {
    disableTrack: m
  }), (0, i.jsxs)("div", {
    className: a()(A.chat, M.container),
    children: [(0, i.jsxs)(h.default, {
      children: [(0, i.jsx)(h.default.Icon, {
        icon: G.default,
        "aria-hidden": !0,
        color: c.default.INTERACTIVE_ACTIVE
      }), (0, i.jsx)(h.default.Title, {
        children: N.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      }), (0, i.jsx)(O.default, {})]
    }), (0, i.jsx)(o.ScrollerNone, {
      className: M.content,
      children: r ? (0, i.jsx)(w, {
        guildId: t,
        productId: s
      }) : (0, i.jsx)(o.Spinner, {})
    }), (0, i.jsx)(S.default, {
      className: M.sparkleCloudTop
    }), (0, i.jsx)(f.default, {
      className: M.sparkleCloudBottom
    })]
  })
}

function V(e) {
  let {
    guildId: t,
    productId: s,
    initialTab: l
  } = e;
  return null == l && null != s && (l = T.GuildShopTab.GUILD_PRODUCTS), (0, i.jsx)(E.default, {
    initialTab: l,
    guildId: t,
    children: (0, i.jsx)(b, {
      initialTab: l,
      productId: s,
      guildId: t
    })
  })
}