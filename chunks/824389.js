"use strict";
u.r(e), u.d(e, {
  deleteGuildProductListing: function() {
    return c
  },
  getGuildProductListing: function() {
    return d
  },
  getGuildProductListingsForGuild: function() {
    return a
  },
  requestDownloadUrl: function() {
    return s
  },
  updateGuildProductListing: function() {
    return o
  }
});
var r = u("544891"),
  n = u("881052"),
  i = u("73346"),
  l = u("981631");
let o = async (t, e, u) => {
  let {
    priceTier: i,
    imageName: o,
    createNewRole: c,
    unlinkRole: a,
    ...d
  } = u;
  try {
    return (await r.HTTP.patch({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
      body: {
        ...d,
        image_name: o,
        price_tier: i,
        create_new_role: c,
        unlink_role: a
      }
    })).body
  } catch (t) {
    throw new n.APIError(t)
  }
}, c = async (t, e) => {
  try {
    await r.HTTP.del({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    })
  } catch (t) {
    throw new n.APIError(t)
  }
}, a = async t => {
  try {
    return (await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t)
    })).body.listings
  } catch (t) {
    throw new n.APIError(t)
  }
}, d = async (t, e) => {
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