"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250");
s("470079");
var l = s("852229"),
  n = s("481060"),
  i = s("724598"),
  r = s("674180"),
  o = s("729285"),
  d = s("495437"),
  u = s("267101"),
  c = s("863663"),
  E = s("676651"),
  _ = s("613810"),
  I = s("391181"),
  T = s("689938"),
  S = s("460316");
let f = "guild-product-listings-header";

function m(e) {
  let {
    guildId: t,
    handleCreateOrEditProduct: o
  } = e, E = (0, u.useGuildProductsForGuild)(t, {
    publishedOnly: !1
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: m
  } = (0, r.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), N = e => {
    (0, d.updateGuildProductListing)(t, e, {
      published: !1
    })
  }, g = (e, l) => {
    (0, n.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([s.e("99387"), s.e("95925")]).then(s.bind(s, "673078"));
      return s => (0, a.jsx)(n, {
        guildId: t,
        productId: e,
        productName: l,
        ...s
      })
    })
  }, h = (e, t) => {
    (0, l.copy)((0, c.getGuildProductListingUrl)(e, t))
  }, C = E.length > 0;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.FormTitle, {
      className: S.productListingsHeader,
      id: f,
      children: C ? T.default.Messages.GUILD_PRODUCTS_YOUR_PRODUCTS_HEADER : T.default.Messages.GUILD_PRODUCTS_NO_PRODUCTS_HEADER
    }), C ? (0, a.jsx)("ul", {
      className: S.productListings,
      "aria-labelledby": f,
      children: E.map(e => (0, a.jsx)("li", {
        children: (0, a.jsx)(I.default, {
          guildId: t,
          product: e,
          onEditProduct: () => o(e.id),
          onUnpublishProduct: () => N(e.id),
          onDeleteProduct: () => g(e.id, e.name),
          onCopyProductLink: () => h(t, e.id),
          onTestDownload: () => _.default.open({
            guildId: t,
            productId: e.id
          }),
          onReportProduct: () => {},
          disabled: m
        })
      }, e.id))
    }) : (0, a.jsx)(i.default, {
      guildId: t,
      showCTA: !1,
      responsive: !1
    })]
  })
}

function N(e) {
  let {
    guildId: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: s
  } = (0, r.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), l = e => {
    E.openModal(t, e)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(n.Button, {
      className: S.addButton,
      innerClassName: S.addButtonInner,
      onClick: () => l(null),
      disabled: s,
      children: [(0, a.jsx)(o.default, {
        width: 20,
        height: 20,
        "aria-hidden": !0
      }), (0, a.jsx)(n.Spacer, {
        size: 6,
        horizontal: !0
      }), T.default.Messages.GUILD_PRODUCTS_CREATE_PRODUCT_BUTTON]
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsx)(m, {
      guildId: t,
      handleCreateOrEditProduct: l
    })]
  })
}