"use strict";
r.r(e), r.d(e, {
  deleteGuildProductListing: function() {
    return a
  },
  fetchGuildProduct: function() {
    return o
  },
  fetchGuildProductsForGuild: function() {
    return l
  },
  updateGuildProductListing: function() {
    return c
  }
});
var u = r("570140"),
  n = r("881052"),
  i = r("824389");
let l = async t => {
  u.default.dispatch({
    type: "GUILD_PRODUCTS_FETCH",
    guildId: t
  });
  try {
    let e = await i.getGuildProductListingsForGuild(t);
    u.default.dispatch({
      type: "GUILD_PRODUCTS_FETCH_SUCCESS",
      guildId: t,
      products: e
    })
  } catch (e) {
    u.default.dispatch({
      type: "GUILD_PRODUCTS_FETCH_FAILURE",
      guildId: t
    })
  }
}, o = async (t, e) => {
  u.default.dispatch({
    type: "GUILD_PRODUCT_FETCH",
    productId: e
  });
  try {
    let r = await i.getGuildProductListing(t, e);
    return u.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_SUCCESS",
      product: r
    }), r
  } catch (t) {
    throw u.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_FAILURE",
      productId: e,
      error: new n.APIError(t)
    }), t
  }
};
async function c(t, e, r) {
  let n = await i.updateGuildProductListing(t, e, r);
  return u.default.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: n
  }), n
}
async function a(t, e) {
  return await i.deleteGuildProductListing(t, e), u.default.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: e
  }), !0
}