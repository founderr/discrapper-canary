"use strict";
n.r(t), n.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return s
  },
  default: function() {
    return l
  }
});
var r = n("726542"),
  i = n("973616"),
  a = n("689938");
let s = "twitch:";
class l extends i.default {
  getIconURL() {
    return r.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(s).concat(e.url), this.name = a.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}