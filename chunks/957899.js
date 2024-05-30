"use strict";
n.r(t), n("47120");
var i = n("147913"),
  r = n("160462");
class s extends i.default {
  handleConnectionOpen() {
    r.ConnectionOpenTriggerPoint.trigger()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.handleConnectionOpen
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = new s