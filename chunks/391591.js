"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("781738");
var a = n("984519");
let r = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

function i(e) {
  return a.HIGH_FIVE_EMOJIS.has(e.replace(r, ""))
}