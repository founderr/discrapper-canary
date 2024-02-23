"use strict";
n.r(t), n.d(t, {
  isProfileEffectRecord: function() {
    return l
  },
  default: function() {
    return i
  }
});
var i, a = n("265586"),
  r = n("200410");
let l = e => e instanceof i;
i = class e extends r.default {
  static fromServer(t) {
    return new e({
      ...super.fromServer(t),
      ...t
    })
  }
  constructor(e) {
    super(e), this.type = a.CollectiblesItemType.PROFILE_EFFECT
  }
}