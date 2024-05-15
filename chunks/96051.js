"use strict";
n.r(t);
var a = n("570140"),
  s = n("317770"),
  i = n("117984");

function l(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  (0, i.removeFavoriteChannel)(t)
}
class r extends s.default {
  _initialize() {
    a.default.subscribe("CHANNEL_DELETE", l)
  }
  _terminate() {
    a.default.unsubscribe("CHANNEL_DELETE", l)
  }
}
t.default = new r