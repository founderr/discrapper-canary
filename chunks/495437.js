n.d(e, {
  EB: function() {
    return l
  },
  Je: function() {
    return a
  },
  cf: function() {
    return c
  },
  mh: function() {
    return o
  }
});
var r = n(570140),
  u = n(881052),
  i = n(824389);
let l = async t => {
  r.Z.dispatch({
    type: "GUILD_PRODUCTS_FETCH",
    guildId: t
  });
  try {
    let e = await i.uV(t);
    r.Z.dispatch({
      type: "GUILD_PRODUCTS_FETCH_SUCCESS",
      guildId: t,
      products: e
    })
  } catch (e) {
    r.Z.dispatch({
      type: "GUILD_PRODUCTS_FETCH_FAILURE",
      guildId: t
    })
  }
}, c = async (t, e) => {
  r.Z.dispatch({
    type: "GUILD_PRODUCT_FETCH",
    productId: e
  });
  try {
    let n = await i.p9(t, e);
    return r.Z.dispatch({
      type: "GUILD_PRODUCT_FETCH_SUCCESS",
      product: n
    }), n
  } catch (t) {
    throw r.Z.dispatch({
      type: "GUILD_PRODUCT_FETCH_FAILURE",
      productId: e,
      error: new u.Hx(t)
    }), t
  }
};
async function a(t, e, n) {
  let u = await i.Je(t, e, n);
  return r.Z.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: u
  }), u
}
async function o(t, e) {
  return await i.mh(t, e), r.Z.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: e
  }), !0
}