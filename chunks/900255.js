"use strict";
a.r(t), a.d(t, {
  sortChannelIds: function() {
    return s
  }
});
var n = a("709054");

function s(e) {
  return e.sort((e, t) => n.default.compare(e.lastMessageId, t.lastMessageId)).reverse()
}