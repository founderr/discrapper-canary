"use strict";
u.r(e), u.d(e, {
  deleteGuildProductListing: function() {
    return a
  },
  getGuildProductListing: function() {
    return c
  },
  getGuildProductListingsForGuild: function() {
    return o
  },
  requestDownloadUrl: function() {
    return s
  },
  updateGuildProductListing: function() {
    return d
  }
});
var r = u("544891"),
  n = u("881052"),
  i = u("73346"),
  l = u("981631");
let d = async (t, e, u) => {
  let {
    priceTier: i,
    imageName: d,
    createNewRole: a,
    unlinkRole: o,
    ...c
  } = u;
  try {
    return (await r.HTTP.patch({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
      body: {
        ...c,
        image_name: d,
        price_tier: i,
        create_new_role: a,
        unlink_role: o
      }
    })).body
  } catch (t) {
    throw new n.APIError(t)
  }
}, a = async (t, e) => {
  try {
    await r.HTTP.del({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    })
  } catch (t) {
    throw new n.APIError(t)
  }
}, o = async t => {
  try {
    return (await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t)
    })).body.listings
  } catch (t) {
    throw new n.APIError(t)
  }
}, c = async (t, e) => {
  try {
    return (await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    })).body
  } catch (t) {
    throw new n.APIError(t)
  }
}, s = async t => {
  let {
    guildId: e,
    productId: u,
    attachmentId: i
  } = t;
  try {
    return (await r.HTTP.post({
      url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, u, i)
    })).body
  } catch (t) {
    throw new n.APIError(t)
  }
}