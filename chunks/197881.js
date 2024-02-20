"use strict";
n.r(t), n.d(t, {
  ProcessArgs: function() {
    return i
  }
});
var r = n("49671");
class i {
  static get() {
    if (null == i.cached) {
      var e, t;
      let n = null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
      null != n && n.length > 1 && n.shift(), i.cached = null != n ? n : []
    }
    return i.cached
  }
  static contains(e) {
    return i.get().includes(e)
  }
  static isEnvVariableTrue(e) {
    var t, n;
    if (void 0 === r.default) return !1;
    switch (null === r.default || void 0 === r.default ? void 0 : null === (n = r.default.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
      case "1":
      case "true":
        return !0
    }
    return !1
  }
  static isDisallowPopupsSet() {
    return i.contains("--disallow-popups") || i.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
  }
  static isDiscordTestSet() {
    return i.isEnvVariableTrue("DISCORD_TEST")
  }
  static isDiscordGatewayPlaintextSet() {
    return !1
  }
}