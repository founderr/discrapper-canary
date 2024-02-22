"use strict";
r.r(t), r.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return a
  },
  default: function() {
    return n
  }
});
var n, s = r("376556"),
  i = r("653047"),
  l = r("782340");
let a = "twitch:";
n = class extends i.default {
  getIconURL() {
    return s.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}