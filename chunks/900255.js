"use strict";
n.r(t), n.d(t, {
  sortChannelIds: function() {
    return a
  }
});
var l = n("709054");

function a(e) {
  return e.sort((e, t) => l.default.compare(e.lastMessageId, t.lastMessageId)).reverse()
}