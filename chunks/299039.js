"use strict";
n.r(t), n.d(t, {
  DISCORD_EPOCH: function() {
    return i.DISCORD_EPOCH
  },
  default: function() {
    return r
  }
});
var i = n("249654"),
  r = {
    age: i.default.age,
    extractTimestamp: i.default.extractTimestamp,
    fromTimestamp: i.default.fromTimestamp,
    atPreviousMillisecond: i.default.atPreviousMillisecond,
    compare: i.default.compare,
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