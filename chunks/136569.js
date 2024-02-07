"use strict";
n.r(t), n.d(t, {
  useFavoritesTooltipStore: function() {
    return a
  }
});
var i = n("308503");
let a = (0, i.default)(e => ({
  favoriteAdded: !1,
  notifyFavoriteAdded: () => e({
    favoriteAdded: !0
  }),
  clearFavoriteAdded: () => e({
    favoriteAdded: !1
  })
}))