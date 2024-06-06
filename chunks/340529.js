"use strict";
s.r(t), s.d(t, {
  GuildShopCategorySelector: function() {
    return j
  }
});
var i = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  a = s("399606"),
  n = s("433517"),
  d = s("481060"),
  o = s("607070"),
  u = s("357352"),
  c = s("703656"),
  C = s("682864"),
  _ = s("696202"),
  f = s("559629"),
  h = s("26290"),
  S = s("652515"),
  x = s("847033"),
  I = s("544978"),
  L = s("307537"),
  p = s("987513"),
  E = s("895737"),
  T = s("629481"),
  g = s("981631"),
  P = s("176505"),
  R = s("689938"),
  m = s("685852");

function O(e) {
  let {
    icon: t,
    title: s,
    body: l,
    selected: a,
    disabled: n = !1,
    onClick: o,
    onPreviewDismiss: u,
    isNew: c = !1
  } = e;
  return (0, i.jsxs)(d.ClickableContainer, {
    onClick: n ? void 0 : o,
    "aria-disabled": n,
    className: r()(m.tab, {
      [m.selected]: a,
      [m.tabDisabled]: n,
      [m.preview]: !a && null != u
    }),
    "aria-label": s,
    children: [(0, i.jsx)("div", {
      className: m.iconContainer,
      children: t
    }), (0, i.jsx)(C.default, {
      size: 8,
      horizontal: !0
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(d.Text, {
        variant: "text-sm/semibold",
        color: a ? "always-white" : "header-primary",
        children: s
      }), (0, i.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: a ? "always-white" : n ? "text-muted" : "header-primary",
        children: l
      })]
    }), c && (0, i.jsx)(h.TextBadge, {
      color: d.tokens.unsafe_rawColors.BRAND_260.css,
      className: m.newBadge,
      text: R.default.Messages.NEW
    }), null != u && (0, i.jsx)(d.Clickable, {
      className: m.tabPreviewClose,
      onClick: u,
      "aria-label": R.default.Messages.DISMISS,
      children: (0, i.jsx)(_.default, {
        width: 16,
        height: 16
      })
    })]
  })
}

function j(e) {
  let {
    guild: t
  } = e, s = (0, S.useIsEligibleForSubscriptionsInGuildShop)(t.id, "guild_shop_category_selector"), {
    selectedTab: l,
    setSelectedTab: r,
    categoryTabs: _,
    handlePreviewDismiss: h
  } = (0, x.useGuildShopDisplayContext)(), j = "false" === n.Storage.get(T.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "false"), G = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion), v = _.map(e => {
    switch (e) {
      case I.GuildShopTab.GUILD_PRODUCTS:
        return (0, i.jsx)(O, {
          icon: (0, i.jsx)(L.default, {
            width: 20,
            height: 20
          }),
          title: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_BODY,
          selected: l === I.GuildShopTab.GUILD_PRODUCTS,
          onClick: () => r(I.GuildShopTab.GUILD_PRODUCTS)
        }, e);
      case I.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, i.jsx)(O, {
          icon: (0, i.jsx)(p.default, {
            width: 20,
            height: 20
          }),
          title: R.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          body: s ? R.default.Messages.GUILD_ROLE_SUB_TYPE_BODY_AFTER_CONSOLIDATION : R.default.Messages.GUILD_ROLE_SUB_TYPE_BODY.format({
            openRoleSubPage: () => (0, c.transitionTo)(g.Routes.CHANNEL(t.id, P.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
          }),
          disabled: !s,
          selected: l === I.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS,
          onClick: () => r(I.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS)
        }, e);
      case I.GuildShopTab.GUILD_PRODUCTS_PREVIEW:
        return (0, i.jsx)(O, {
          icon: j ? (0, i.jsx)("img", {
            src: G ? (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.png") : (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.gif"),
            className: m.questionMark,
            alt: ""
          }) : (0, i.jsx)(f.default, {
            width: 20,
            height: 20
          }),
          title: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: R.default.Messages.GUILD_STORE_PREVIEW_TAB_SELECTOR_BODY,
          selected: l === I.GuildShopTab.GUILD_PRODUCTS_PREVIEW,
          onClick: () => {
            r(I.GuildShopTab.GUILD_PRODUCTS_PREVIEW), n.Storage.set(T.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "true")
          },
          onPreviewDismiss: h,
          isNew: j
        }, e);
      default:
        return null
    }
  });
  return (0, i.jsxs)("div", {
    className: m.container,
    children: [(0, i.jsx)(d.Heading, {
      variant: "heading-sm/bold",
      className: m.header,
      children: R.default.Messages.GUILD_SHOP_SUPPORT_SERVER_HEADER
    }), (0, i.jsx)(C.default, {
      size: 12
    }), (0, i.jsxs)("div", {
      className: m.filters,
      children: [(0, i.jsx)("div", {
        className: m.tabs,
        children: v
      }), l === I.GuildShopTab.GUILD_PRODUCTS && (0, i.jsx)(E.default, {})]
    })]
  })
}