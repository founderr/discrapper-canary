"use strict";
n.r(t), n.d(t, {
  getPriceTiers: function() {
    return l
  }
});
var r = n("544891"),
  i = n("881052"),
  s = n("981631");
let l = async (e, t) => {
  try {
    return (await r.HTTP.get({
      url: s.Endpoints.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      }
    })).body
  } catch (e) {
    throw new i.APIError(e)
  }
}