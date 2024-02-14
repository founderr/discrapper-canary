"use strict";
i.r(t), i.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return a
  },
  default: function() {
    return r
  }
});
var r, s = i("376556"),
  n = i("653047"),
  l = i("782340");
let a = "twitch:";
r = class extends n.default {
  getIconURL() {
    return s.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}