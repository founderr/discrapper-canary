"use strict";
s.r(t), s.d(t, {
  GuildProductsSettingsOverview: function() {
    return D
  }
}), s("222007"), s("794252");
var a, l, n = s("37983"),
  i = s("884691"),
  r = s("506838"),
  o = s("65597"),
  d = s("77078"),
  u = s("741515"),
  c = s("218567"),
  E = s("97031"),
  _ = s("283962"),
  I = s("258984"),
  T = s("592407"),
  f = s("479756"),
  S = s("507950"),
  m = s("393414"),
  N = s("305961"),
  g = s("697218"),
  h = s("701909"),
  C = s("442379"),
  R = s("533161"),
  x = s("166364"),
  L = s("691659"),
  O = s("49111"),
  p = s("724210"),
  A = s("782340"),
  M = s("384600");

function D(e) {
  let {
    guildId: t,
    hasValidApplication: s
  } = e, {
    listingsLoaded: a
  } = (0, C.useFetchGuildProductListingsForGuild)(t), l = (0, o.default)([N.default], () => N.default.getGuild(t)), D = (0, o.default)([g.default], () => g.default.getCurrentUser()), v = (null == l ? void 0 : l.isOwner(D)) === !0, {
    loading: j
  } = (0, u.useMonetizationSettings)(t), [G, U] = i.useState(s ? "manage_listings" : "payment");
  (0, _.useNewOwnerOnboardingRequired)(l);
  let P = i.useCallback(() => {
    if (null == l) return;
    let e = l.roles[l.getEveryoneRoleId()];
    T.default.close();
    let t = {
      [e.id]: e
    };
    (0, f.startImpersonating)(l.id, {
      type: S.ImpersonateType.SERVER_SHOP,
      roles: t,
      initialTab: "guild_products",
      returnToSection: O.GuildSettingsSections.GUILD_PRODUCTS
    }), (0, m.transitionTo)(O.Routes.CHANNEL(l.id, p.StaticChannelRoute.GUILD_SHOP))
  }, [l]);
  if (!a || j) return (0, n.jsx)(d.Spinner, {});
  if (null == l) return null;
  let b = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H1,
        children: A.default.Messages.GUILD_PRODUCTS_TITLE
      }), (0, n.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        children: A.default.Messages.GUILD_PRODUCTS_SETTINGS_DESCRIPTION.format({
          monetizationPolicyLink: h.default.getArticleURL(O.HelpdeskArticles.CREATOR_POLICY),
          serverProductsSupportLink: h.default.getCreatorSupportArticleURL(O.HelpdeskArticles.SERVER_PRODUCTS)
        })
      })]
    }),
    B = (0, n.jsxs)(d.TabBar, {
      type: "top",
      look: "brand",
      className: M.tabBar,
      "aria-label": A.default.Messages.GUILD_PRODUCTS_TITLE,
      selectedItem: G,
      onItemSelect: U,
      children: [(0, n.jsx)(E.default, {
        id: "basic_info",
        disabledTooltip: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: A.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SECTION
      }), (0, n.jsx)(E.default, {
        id: "manage_listings",
        disabledTooltip: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: A.default.Messages.GUILD_PRODUCTS_LISTINGS_SECTION
      }), v ? (0, n.jsx)(d.TabBar.Item, {
        id: "payment",
        className: M.tabBarItem,
        children: A.default.Messages.GUILD_PRODUCTS_PAYMENT_SECTION
      }) : null, s ? (0, n.jsx)("div", {
        className: M.previewButton,
        children: (0, n.jsx)(d.Button, {
          onClick: P,
          color: d.Button.Colors.PRIMARY,
          size: d.Button.Sizes.SMALL,
          look: d.Button.Looks.OUTLINED,
          children: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
        })
      }) : null]
    }),
    y = (0, r.match)(G).with("basic_info", () => (0, n.jsx)(R.default, {
      guildId: t
    })).with("manage_listings", () => (0, n.jsx)(x.default, {
      guildId: t
    })).with("payment", () => (0, n.jsx)(L.default, {
      guildId: t
    })).exhaustive(),
    F = a ? (0, n.jsx)(d.TabBar.Panel, {
      id: G,
      children: y
    }) : (0, n.jsx)(d.Spinner, {});
  return (0, n.jsxs)(c.CreatorMonetizationSettingsDisabledContextProvider, {
    guildId: t,
    children: [b, (0, n.jsx)(I.default, {
      guild: l
    }), (0, n.jsx)("div", {
      className: M.tabBarContainer,
      children: B
    }), F]
  })
}(l = a || (a = {})).MANAGE_LISTINGS = "manage_listings", l.PAYMENT = "payment", l.BASIC_INFO = "basic_info"