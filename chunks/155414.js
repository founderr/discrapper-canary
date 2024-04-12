"use strict";
n.r(t), n.d(t, {
  getPriceTiers: function() {
    return s
  }
});
var i = n("544891"),
  r = n("881052"),
  l = n("981631");
let s = async (e, t) => {
  try {
    return (await i.HTTP.get({
      url: l.Endpoints.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      }
    })).body
  } catch (e) {
    throw new r.APIError(e)
  }
}