"use strict";
s.r(t), s.d(t, {
  GuildShopCategorySelector: function() {
    return m
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
  C = s("696202"),
  _ = s("559629"),
  f = s("652515"),
  S = s("847033"),
  h = s("544978"),
  x = s("307537"),
  I = s("987513"),
  p = s("895737"),
  L = s("629481"),
  E = s("981631"),
  T = s("176505"),
  g = s("689938"),
  P = s("685852");

function R(e) {
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
    className: r()(P.tab, {
      [P.selected]: a,
      [P.tabDisabled]: n,
      [P.preview]: !a && null != u
    }),
    "aria-label": s,
    children: [(0, i.jsx)("div", {
      className: P.iconContainer,
      children: t
    }), (0, i.jsx)(d.Spacer, {
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
    }), c && (0, i.jsx)(d.TextBadge, {
      color: d.tokens.unsafe_rawColors.BRAND_260.css,
      className: P.newBadge,
      text: g.default.Messages.NEW
    }), null != u && (0, i.jsx)(d.Clickable, {
      className: P.tabPreviewClose,
      onClick: u,
      "aria-label": g.default.Messages.DISMISS,
      children: (0, i.jsx)(C.default, {
        width: 16,
        height: 16
      })
    })]
  })
}

function m(e) {
  let {
    guild: t
  } = e, s = (0, f.useIsEligibleForSubscriptionsInGuildShop)(t.id, "guild_shop_category_selector"), {
    selectedTab: l,
    setSelectedTab: r,
    categoryTabs: C,
    handlePreviewDismiss: m
  } = (0, S.useGuildShopDisplayContext)(), O = "false" === n.Storage.get(L.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "false"), j = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion), G = C.map(e => {
    switch (e) {
      case h.GuildShopTab.GUILD_PRODUCTS:
        return (0, i.jsx)(R, {
          icon: (0, i.jsx)(x.default, {
            width: 20,
            height: 20
          }),
          title: g.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: g.default.Messages.GUILD_SHOP_PRODUCT_TYPE_BODY,
          selected: l === h.GuildShopTab.GUILD_PRODUCTS,
          onClick: () => r(h.GuildShopTab.GUILD_PRODUCTS)
        }, e);
      case h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, i.jsx)(R, {
          icon: (0, i.jsx)(I.default, {
            width: 20,
            height: 20
          }),
          title: g.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          body: s ? g.default.Messages.GUILD_ROLE_SUB_TYPE_BODY_AFTER_CONSOLIDATION : g.default.Messages.GUILD_ROLE_SUB_TYPE_BODY.format({
            openRoleSubPage: () => (0, c.transitionTo)(E.Routes.CHANNEL(t.id, T.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
          }),
          disabled: !s,
          selected: l === h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS,
          onClick: () => r(h.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS)
        }, e);
      case h.GuildShopTab.GUILD_PRODUCTS_PREVIEW:
        return (0, i.jsx)(R, {
          icon: O ? (0, i.jsx)("img", {
            src: j ? (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.png") : (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.gif"),
            className: P.questionMark,
            alt: ""
          }) : (0, i.jsx)(_.default, {
            width: 20,
            height: 20
          }),
          title: g.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: g.default.Messages.GUILD_STORE_PREVIEW_TAB_SELECTOR_BODY,
          selected: l === h.GuildShopTab.GUILD_PRODUCTS_PREVIEW,
          onClick: () => {
            r(h.GuildShopTab.GUILD_PRODUCTS_PREVIEW), n.Storage.set(L.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "true")
          },
          onPreviewDismiss: m,
          isNew: O
        }, e);
      default:
        return null
    }
  });
  return (0, i.jsxs)("div", {
    className: P.container,
    children: [(0, i.jsx)(d.Heading, {
      variant: "heading-sm/bold",
      className: P.header,
      children: g.default.Messages.GUILD_SHOP_SUPPORT_SERVER_HEADER
    }), (0, i.jsx)(d.Spacer, {
      size: 12
    }), (0, i.jsxs)("div", {
      className: P.filters,
      children: [(0, i.jsx)("div", {
        className: P.tabs,
        children: G
      }), l === h.GuildShopTab.GUILD_PRODUCTS && (0, i.jsx)(p.default, {})]
    })]
  })
}