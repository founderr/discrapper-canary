"use strict";
n.r(t), n.d(t, {
  useFavoritesTooltipStore: function() {
    return a
  }
});
let a = (0, n("652874").default)(e => ({
  favoriteAdded: !1,
  notifyFavoriteAdded: () => e({
    favoriteAdded: !0
  }),
  clearFavoriteAdded: () => e({
    favoriteAdded: !1
  })
}))