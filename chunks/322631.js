"use strict";
s.r(t), s.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return a
  },
  default: function() {
    return r
  }
});
var r, n = s("376556"),
  i = s("653047"),
  l = s("782340");
let a = "twitch:";
r = class extends i.default {
  getIconURL() {
    return n.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}