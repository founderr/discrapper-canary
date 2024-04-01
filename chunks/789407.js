"use strict";
n.r(t), n.d(t, {
  SPOTIFY_APPLICATION_ID: function() {
    return a
  },
  SpotifyApplication: function() {
    return o
  },
  default: function() {
    return r
  }
});
var s = n("726542"),
  l = n("973616");
let a = "spotify",
  i = s.default.get(a);
class r extends l.default {
  getIconURL(e) {
    return i.icon.lightPNG
  }
  constructor() {
    super({}), this.id = a, this.name = i.name
  }
}
let o = new r