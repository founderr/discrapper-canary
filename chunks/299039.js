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
    compare: i.default.compare,
    atPreviousMillisecond: function(e) {
      return i.default.atPreviousMillisecond(e)
    },
    fromTimestamp: function(e) {
      return i.default.fromTimestamp(e)
    },
    keys: function(e) {
      return Object.keys(e)
    },
    forEachKey: function(e, t) {
      for (let n in e) t(n)
    },
    entries: function(e) {
      return Object.entries(e)
    },
    castChannelIdAsMessageId: function(e) {
      return e
    },
    castMessageIdAsChannelId: function(e) {
      return e
    }
  }