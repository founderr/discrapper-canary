t.d(s, {
  z: function() {
    return j
  }
});
var n = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  l = t(399606),
  o = t(433517),
  a = t(481060),
  c = t(607070),
  d = t(357352),
  C = t(703656),
  u = t(652515),
  _ = t(847033),
  x = t(544978),
  I = t(307537),
  h = t(987513),
  L = t(895737),
  E = t(629481),
  m = t(981631),
  S = t(176505),
  p = t(689938),
  R = t(965729);

function T(e) {
  let {
    icon: s,
    title: t,
    body: r,
    selected: l,
    disabled: o = !1,
    onClick: c,
    onPreviewDismiss: d,
    isNew: C = !1
  } = e;
  return (0, n.jsxs)(a.ClickableContainer, {
    onClick: o ? void 0 : c,
    "aria-disabled": o,
    className: i()(R.tab, {
      [R.selected]: l,
      [R.tabDisabled]: o,
      [R.preview]: !l && null != d
    }),
    "aria-label": t,
    children: [(0, n.jsx)("div", {
      className: R.iconContainer,
      children: s
    }), (0, n.jsx)(a.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: l ? "always-white" : "header-primary",
        children: t
      }), (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: l ? "always-white" : o ? "text-muted" : "header-primary",
        children: r
      })]
    }), C && (0, n.jsx)(a.TextBadge, {
      color: a.tokens.unsafe_rawColors.BRAND_260.css,
      className: R.newBadge,
      text: p.Z.Messages.NEW
    }), null != d && (0, n.jsx)(a.Clickable, {
      className: R.tabPreviewClose,
      onClick: d,
      "aria-label": p.Z.Messages.DISMISS,
      children: (0, n.jsx)(a.CircleXIcon, {
        size: "xs",
        color: "currentColor"
      })
    })]
  })
}

function j(e) {
  let {
    guild: s
  } = e, t = (0, u.RF)(s.id, "guild_shop_category_selector"), {
    selectedTab: r,
    setSelectedTab: i,
    categoryTabs: j,
    handlePreviewDismiss: g
  } = (0, _.m)(), v = "false" === o.K.get(E.Hr, "false"), P = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), O = j.map(e => {
    switch (e) {
      case x.y.GUILD_PRODUCTS:
        return (0, n.jsx)(T, {
          icon: (0, n.jsx)(I.Z, {
            width: 20,
            height: 20
          }),
          title: p.Z.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: p.Z.Messages.GUILD_SHOP_PRODUCT_TYPE_BODY,
          selected: r === x.y.GUILD_PRODUCTS,
          onClick: () => i(x.y.GUILD_PRODUCTS)
        }, e);
      case x.y.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, n.jsx)(T, {
          icon: (0, n.jsx)(h.Z, {
            width: 20,
            height: 20
          }),
          title: p.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          body: t ? p.Z.Messages.GUILD_ROLE_SUB_TYPE_BODY_AFTER_CONSOLIDATION : p.Z.Messages.GUILD_ROLE_SUB_TYPE_BODY.format({
            openRoleSubPage: () => (0, C.uL)(m.Z5c.CHANNEL(s.id, S.oC.ROLE_SUBSCRIPTIONS))
          }),
          disabled: !t,
          selected: r === x.y.GUILD_ROLE_SUBSCRIPTIONS,
          onClick: () => i(x.y.GUILD_ROLE_SUBSCRIPTIONS)
        }, e);
      case x.y.GUILD_PRODUCTS_PREVIEW:
        return (0, n.jsx)(T, {
          icon: v ? (0, n.jsx)("img", {
            src: P ? (0, d.b)("server_products/storefront/question-mark.png") : (0, d.b)("server_products/storefront/question-mark.gif"),
            className: R.questionMark,
            alt: ""
          }) : (0, n.jsx)(a.GiftIcon, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }),
          title: p.Z.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: p.Z.Messages.GUILD_STORE_PREVIEW_TAB_SELECTOR_BODY,
          selected: r === x.y.GUILD_PRODUCTS_PREVIEW,
          onClick: () => {
            i(x.y.GUILD_PRODUCTS_PREVIEW), o.K.set(E.Hr, "true")
          },
          onPreviewDismiss: g,
          isNew: v
        }, e);
      default:
        return null
    }
  });
  return (0, n.jsxs)("div", {
    className: R.container,
    children: [(0, n.jsx)(a.Heading, {
      variant: "heading-sm/bold",
      className: R.header,
      children: p.Z.Messages.GUILD_SHOP_SUPPORT_SERVER_HEADER
    }), (0, n.jsx)(a.Spacer, {
      size: 12
    }), (0, n.jsxs)("div", {
      className: R.filters,
      children: [(0, n.jsx)("div", {
        className: R.tabs,
        children: O
      }), r === x.y.GUILD_PRODUCTS && (0, n.jsx)(L.Z, {})]
    })]
  })
}