"use strict";
a.r(t);
var n = a("570140"),
  s = a("317770"),
  l = a("117984");

function i(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  (0, l.removeFavoriteChannel)(t)
}
class r extends s.default {
  _initialize() {
    n.default.subscribe("CHANNEL_DELETE", i)
  }
  _terminate() {
    n.default.unsubscribe("CHANNEL_DELETE", i)
  }
}
t.default = new r