"use strict";
t.d(s, {
  Z: function() {
    return S
  }
});
var n = t(735250);
t(470079);
var i = t(852229),
  l = t(481060),
  a = t(724598),
  r = t(674180),
  o = t(495437),
  c = t(267101),
  d = t(863663),
  u = t(676651),
  E = t(613810),
  _ = t(391181),
  I = t(689938),
  T = t(460316);
let N = "guild-product-listings-header";

function m(e) {
  let {
    guildId: s,
    handleCreateOrEditProduct: u
  } = e, m = (0, c.ue)(s, {
    publishedOnly: !1
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: S
  } = (0, r.gX)(s), h = e => {
    (0, o.Je)(s, e, {
      published: !1
    })
  }, g = (e, i) => {
    (0, l.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([t.e("99387"), t.e("95925")]).then(t.bind(t, 673078));
      return t => (0, n.jsx)(l, {
        guildId: s,
        productId: e,
        productName: i,
        ...t
      })
    })
  }, C = (e, s) => {
    (0, i.J)((0, d.ar)(e, s))
  }, x = m.length > 0;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.FormTitle, {
      className: T.productListingsHeader,
      id: N,
      children: x ? I.Z.Messages.GUILD_PRODUCTS_YOUR_PRODUCTS_HEADER : I.Z.Messages.GUILD_PRODUCTS_NO_PRODUCTS_HEADER
    }), x ? (0, n.jsx)("ul", {
      className: T.productListings,
      "aria-labelledby": N,
      children: m.map(e => (0, n.jsx)("li", {
        children: (0, n.jsx)(_.Z, {
          guildId: s,
          product: e,
          onEditProduct: () => u(e.id),
          onUnpublishProduct: () => h(e.id),
          onDeleteProduct: () => g(e.id, e.name),
          onCopyProductLink: () => C(s, e.id),
          onTestDownload: () => E.Z.open({
            guildId: s,
            productId: e.id
          }),
          onReportProduct: () => {},
          disabled: S
        })
      }, e.id))
    }) : (0, n.jsx)(a.Z, {
      guildId: s,
      showCTA: !1,
      responsive: !1
    })]
  })
}

function S(e) {
  let {
    guildId: s
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: t
  } = (0, r.gX)(s), i = e => {
    u.h(s, e)
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.Button, {
      className: T.addButton,
      innerClassName: T.addButtonInner,
      onClick: () => i(null),
      disabled: t,
      children: [(0, n.jsx)(l.PlusSmallIcon, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        "aria-hidden": !0
      }), (0, n.jsx)(l.Spacer, {
        size: 6,
        horizontal: !0
      }), I.Z.Messages.GUILD_PRODUCTS_CREATE_PRODUCT_BUTTON]
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(m, {
      guildId: s,
      handleCreateOrEditProduct: i
    })]
  })
}