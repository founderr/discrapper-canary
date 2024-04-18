"use strict";
a.r(t), a.d(t, {
  searchQueryContainsBannedWord: function() {
    return s
  }
}), a("601964");
var n = a("231338");
let s = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  return e.split(" ").some(e => n.DiscoveryBannedSearchWords.includes(e.toLowerCase()))
}