"use strict";
n.r(t), n.d(t, {
  fetchPriceTiers: function() {
    return l
  }
});
var i = n("570140"),
  r = n("155414");
async function l(e, t) {
  i.default.dispatch({
    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
    guildId: e,
    priceTierType: t
  });
  try {
    let n = await r.getPriceTiers(e, t);
    i.default.dispatch({
      type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
      guildId: e,
      priceTierType: t,
      priceTiers: n
    })
  } catch (n) {
    i.default.dispatch({
      type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
      guildId: e,
      priceTierType: t
    })
  }
}