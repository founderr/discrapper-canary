"use strict";
u.r(e), u.d(e, {
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
var r = u("570140"),
  n = u("881052"),
  i = u("824389");
let l = async t => {
  r.default.dispatch({
    type: "GUILD_PRODUCTS_FETCH",
    guildId: t
  });
  try {
    let e = await i.getGuildProductListingsForGuild(t);
    r.default.dispatch({
      type: "GUILD_PRODUCTS_FETCH_SUCCESS",
      guildId: t,
      products: e
    })
  } catch (e) {
    r.default.dispatch({
      type: "GUILD_PRODUCTS_FETCH_FAILURE",
      guildId: t
    })
  }
}, o = async (t, e) => {
  r.default.dispatch({
    type: "GUILD_PRODUCT_FETCH",
    productId: e
  });
  try {
    let u = await i.getGuildProductListing(t, e);
    return r.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_SUCCESS",
      product: u
    }), u
  } catch (t) {
    throw r.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_FAILURE",
      productId: e,
      error: new n.APIError(t)
    }), t
  }
};
async function c(t, e, u) {
  let n = await i.updateGuildProductListing(t, e, u);
  return r.default.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: n
  }), n
}
async function a(t, e) {
  return await i.deleteGuildProductListing(t, e), r.default.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: e
  }), !0
}