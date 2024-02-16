"use strict";
r.r(t), r.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return a
  },
  default: function() {
    return s
  }
});
var s, n = r("376556"),
  i = r("653047"),
  l = r("782340");
let a = "twitch:";
s = class extends i.default {
  getIconURL() {
    return n.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}