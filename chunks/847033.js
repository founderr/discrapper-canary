"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
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
  o = n("704215"),
  u = n("367907"),
  d = n("605236"),
  c = n("584825"),
  f = n("994592"),
  E = n("160404"),
  _ = n("703656"),
  T = n("984933"),
  m = n("430824"),
  I = n("626135"),
  N = n("652515"),
  p = n("550951"),
  h = n("544978"),
  S = n("333866"),
  C = n("629481"),
  A = n("981631");
let g = a.createContext(void 0);

function M() {
  let e = a.useContext(g);
  return i()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function R(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: i
  } = e, M = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(i)), R = (0, r.useStateFromStores)([E.default], () => E.default.isViewingServerShop(i)), O = (0, p.useGuildShopPreviewVisible)(M, "guild_shop_page"), v = (0, N.useIsEligibleForSubscriptionsInGuildShop)(i, "guild_shop_page"), x = (null == M ? void 0 : M.hasFeature(A.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, f.useRoleSubscriptionsVisibleInGuild)(null == M ? void 0 : M.id), P = null === (t = (0, c.useSubscriptionsSettings)(i)) || void 0 === t ? void 0 : t.server_shop_tab_order, D = [], y = h.GuildShopTab.GUILD_SHOP_FULL_PREVIEW;
  R || x && L ? (D.push(P === S.ServerShopTabOrder.PRODUCTS_FIRST ? h.GuildShopTab.GUILD_PRODUCTS : h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), D.push(P === S.ServerShopTabOrder.PRODUCTS_FIRST ? h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS : h.GuildShopTab.GUILD_PRODUCTS), y = D[0]) : x && !L ? (D.push(h.GuildShopTab.GUILD_PRODUCTS), y = h.GuildShopTab.GUILD_PRODUCTS) : !x && L && (D.push(h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), y = h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS, O && D.push(h.GuildShopTab.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : y;
  let [U, j] = a.useState(l), b = O && !(L && v) || U === h.GuildShopTab.GUILD_PRODUCTS_PREVIEW;
  return a.useEffect(() => {
    j(l)
  }, [l]), (0, s.jsx)(g.Provider, {
    value: {
      selectedTab: U,
      setSelectedTab: j,
      categoryTabs: D,
      isPhantomPreview: b,
      handlePreviewDismiss: e => {
        (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, u.collectGuildAnalyticsMetadata)(i)
        };
        if (U === h.GuildShopTab.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, _.replaceWith)(A.Routes.CHANNEL(i, null === (n = T.default.getDefaultChannel(i)) || void 0 === n ? void 0 : n.id)), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_FULL_PREVIEW
        }
        I.default.track(A.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}