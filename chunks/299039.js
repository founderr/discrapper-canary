"use strict";
n.r(t), n.d(t, {
  DISCORD_EPOCH: function() {
    return r.DISCORD_EPOCH
  },
  default: function() {
    return i
  }
});
var r = n("249654"),
  i = {
    age: r.default.age,
    extractTimestamp: r.default.extractTimestamp,
    fromTimestamp: r.default.fromTimestamp,
    atPreviousMillisecond: r.default.atPreviousMillisecond,
    compare: r.default.compare,
    keys: function(e) {
      return Object.keys(e)
    },
    forEachKey: function(e, t) {
      for (let n in e) t(n)
    },
    entries: function(e) {
      return Object.entries(e)
    }
  }