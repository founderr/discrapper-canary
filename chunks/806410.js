"use strict";
r.r(t), r.d(t, {
  isProfileEffectRecord: function() {
    return i
  },
  default: function() {
    return a
  }
});
var a, n = r("265586"),
  u = r("200410");
let i = e => e instanceof a;
a = class e extends u.default {
  static fromServer(t) {
    return new e({
      ...super.fromServer(t),
      ...t
    })
  }
  constructor(e) {
    super(e), this.type = n.CollectiblesItemType.PROFILE_EFFECT
  }
}