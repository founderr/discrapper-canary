"use strict";
n.r(t), n.d(t, {
  getPriceTiers: function() {
    return l
  }
});
var i = n("544891"),
  r = n("881052"),
  s = n("981631");
let l = async (e, t) => {
  try {
    return (await i.HTTP.get({
      url: s.Endpoints.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      }
    })).body
  } catch (e) {
    throw new r.APIError(e)
  }
}