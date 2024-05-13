"use strict";
n.r(t), n.d(t, {
  DISPLAYED_SORT_OPTIONS: function() {
    return a
  },
  GuildProductSortOptions: function() {
    return s
  },
  ServerShopTabOrder: function() {
    return l
  },
  getGuildProductSortOptionLabel: function() {
    return o
  }
});
var r, i, s, l, u = n("689938");

function o(e) {
  return ({
    4: u.default.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
    2: u.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
    3: u.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
    1: u.default.Messages.GUILD_STORE_SORT_OPTION_NAME
  })[e]
}(r = s || (s = {}))[r.NAME = 1] = "NAME", r[r.PRICE_ASC = 2] = "PRICE_ASC", r[r.PRICE_DESC = 3] = "PRICE_DESC", r[r.NEWEST_ARRIVALS = 4] = "NEWEST_ARRIVALS", (i = l || (l = {}))[i.SUBS_FIRST = 1] = "SUBS_FIRST", i[i.PRODUCTS_FIRST = 2] = "PRODUCTS_FIRST";
let a = [4, 2, 3, 1]