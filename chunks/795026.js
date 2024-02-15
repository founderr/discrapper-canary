"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("374014"),
  a = n("223913"),
  s = n("49111"),
  i = n("782340");

function r(e, t, n, r) {
  return null == t || t.state === s.ApplicationStreamStates.ENDED || (0, l.encodeStreamKey)(t) !== (0, l.encodeStreamKey)(e) ? (0, a.getStreamCTAString)(r) : t.ownerId === n ? i.default.Messages.WATCH_STREAM_STREAMING : i.default.Messages.WATCH_STREAM_WATCHING
}