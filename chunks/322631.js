"use strict";
s.r(t), s.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return l
  },
  default: function() {
    return a
  }
});
var a, n = s("376556"),
  r = s("653047"),
  i = s("782340");
let l = "twitch:";
a = class extends r.default {
  getIconURL() {
    return n.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(l).concat(e.url), this.name = i.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}