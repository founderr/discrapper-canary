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
  i = s("653047"),
  r = s("782340");
let l = "twitch:";
a = class extends i.default {
  getIconURL() {
    return n.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(l).concat(e.url), this.name = r.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}