"use strict";
r.r(e), r.d(e, {
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
var u = r("544891"),
  n = r("881052"),
  i = r("73346"),
  l = r("981631");
let o = async (t, e, r) => {
  let {
    priceTier: i,
    imageName: o,
    createNewRole: c,
    unlinkRole: a,
    ...d
  } = r;
  try {
    return (await u.HTTP.patch({
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
    await u.HTTP.del({
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
    productId: r,
    attachmentId: i
  } = t;
  try {
    return (await u.HTTP.post({
      url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, r, i)
    })).body
  } catch (t) {
    throw new n.APIError(t)
  }
}