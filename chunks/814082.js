"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("981631");

function l(e, t) {
  var n;
  return !a.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(e.type) && (null === (n = e.author) || void 0 === n ? void 0 : n.id) === t
}