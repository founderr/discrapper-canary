"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("823411"),
  a = n("568131"),
  l = n("689988"),
  s = n("686470"),
  r = n("773336");
class o extends l.default {
  handlePostConnectionOpen() {
    (0, r.isDesktop)() && (!s.default.fetched && (0, a.fetchLibrary)(), i.default.getDetectableGames())
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    }
  }
}
var u = new o