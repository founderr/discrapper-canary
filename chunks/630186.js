"use strict";
n.r(t), n.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return i
  },
  default: function() {
    return r
  }
});
var a = n("726542"),
  l = n("973616"),
  s = n("689938");
let i = "twitch:";
class r extends l.default {
  getIconURL() {
    return a.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(i).concat(e.url), this.name = s.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}