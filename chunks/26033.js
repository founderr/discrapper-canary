"use strict";
n.r(e), n.d(e, {
  isGamingLikeEntry: function() {
    return i
  }
});
var r = n("876215");

function i(t) {
  return t.content_type === r.ContentInventoryEntryType.PLAYED_GAME || t.content_type === r.ContentInventoryEntryType.TOP_GAME
}