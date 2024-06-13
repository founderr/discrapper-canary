"use strict";
n.r(t), n.d(t, {
  isGamingLikeEntry: function() {
    return s
  }
});
var r = n("876215");

function s(e) {
  return e.content_type === r.ContentInventoryEntryType.PLAYED_GAME || e.content_type === r.ContentInventoryEntryType.TOP_GAME
}