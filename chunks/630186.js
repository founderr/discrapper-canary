"use strict";
s.r(t), s.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return u
  },
  default: function() {
    return i
  }
});
var n = s("726542"),
  r = s("973616"),
  a = s("689938");
let u = "twitch:";
class i extends r.default {
  getIconURL() {
    return n.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(u).concat(e.url), this.name = a.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}