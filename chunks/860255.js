"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var i, s = n("605250"),
  r = n("802493");
let a = new s.default("ChannelReader");
i = class {
  static getSync(e, t) {
    let n = performance.now(),
      i = r.default.channels(e).getManySyncUnsafe(t),
      s = performance.now() - n;
    return a.log("synchronously loaded in ".concat(s, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), [i, s]
  }
  static async getAsync(e, t) {
    let n = performance.now(),
      i = await r.default.channels(e).getMany(t),
      s = performance.now() - n;
    return a.verbose("loaded in ".concat(s, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), i
  }
  static getGuildIdsSync() {
    try {
      var e, t;
      let n = null !== (t = null === (e = r.default.channels()) || void 0 === e ? void 0 : e.getGuildIdsSyncUnsafe()) && void 0 !== t ? t : [],
        i = n.filter(e => null !== e && "string" == typeof e);
      return new Set(i)
    } catch (e) {
      return a.warn("couldn't get guild ids", e), new Set
    }
  }
}