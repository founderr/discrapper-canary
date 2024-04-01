"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  },
  useGuildShopDisplayContext: function() {
    return M
  }
}), n("653041"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("399606"),
  o = n("524437"),
  u = n("367907"),
  d = n("605236"),
  c = n("584825"),
  E = n("994592"),
  f = n("160404"),
  _ = n("703656"),
  T = n("984933"),
  I = n("430824"),
  m = n("626135"),
  N = n("652515"),
  p = n("550951"),
  S = n("544978"),
  C = n("333866"),
  A = n("629481"),
  h = n("981631");
let g = a.createContext(void 0);

function M() {
  let e = a.useContext(g);
  return i()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function O(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: i
  } = e, M = (0, r.useStateFromStores)([I.default], () => I.default.getGuild(i)), O = (0, r.useStateFromStores)([f.default], () => f.default.isViewingServerShop(i)), R = (0, p.useGuildShopPreviewVisible)(M, "guild_shop_page"), L = (0, N.useIsEligibleForSubscriptionsInGuildShop)(i, "guild_shop_page"), v = (null == M ? void 0 : M.hasFeature(h.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, P = (0, E.useRoleSubscriptionsVisibleInGuild)(null == M ? void 0 : M.id), D = null === (t = (0, c.useSubscriptionsSettings)(i)) || void 0 === t ? void 0 : t.server_shop_tab_order, x = [], y = S.GuildShopTab.GUILD_SHOP_FULL_PREVIEW;
  O || v && P ? (x.push(D === C.ServerShopTabOrder.PRODUCTS_FIRST ? S.GuildShopTab.GUILD_PRODUCTS : S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), x.push(D === C.ServerShopTabOrder.PRODUCTS_FIRST ? S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS : S.GuildShopTab.GUILD_PRODUCTS), y = x[0]) : v && !P ? (x.push(S.GuildShopTab.GUILD_PRODUCTS), y = S.GuildShopTab.GUILD_PRODUCTS) : !v && P && (x.push(S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), y = S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS, R && x.push(S.GuildShopTab.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : y;
  let [U, j] = a.useState(l), b = R && !(P && L) || U === S.GuildShopTab.GUILD_PRODUCTS_PREVIEW;
  return a.useEffect(() => {
    j(l)
  }, [l]), (0, s.jsx)(g.Provider, {
    value: {
      selectedTab: U,
      setSelectedTab: j,
      categoryTabs: x,
      isPhantomPreview: b,
      handlePreviewDismiss: e => {
        (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, u.collectGuildAnalyticsMetadata)(i)
        };
        if (U === S.GuildShopTab.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = A.GuildShopPreviewClickActions.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, _.replaceWith)(h.Routes.CHANNEL(i, null === (n = T.default.getDefaultChannel(i)) || void 0 === n ? void 0 : n.id)), t.action_taken = A.GuildShopPreviewClickActions.DISMISS_FULL_PREVIEW
        }
        m.default.track(h.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}