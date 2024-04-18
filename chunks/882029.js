"use strict";
a.r(t);
var n, s = a("442837"),
  l = a("570140"),
  i = a("314897"),
  r = a("57562"),
  o = a("351780"),
  u = a("843693");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let c = {
    unlockedAchievements: {}
  },
  f = {
    ...c
  };
class E extends(n = s.default.PersistedStore) {
  initialize(e) {
    this.waitFor(i.default, u.default);
    let t = null != e ? e : {
      ...c
    };
    for (let e in t) f[e] = t[e]
  }
  getState() {
    return f
  }
  getAllUnlockedAchievements() {
    return f.unlockedAchievements
  }
  getUnlocked(e) {
    var t;
    return null !== (t = f.unlockedAchievements[e]) && void 0 !== t ? t : null
  }
}
d(E, "displayName", "PoggermodeAchievementStore"), d(E, "persistKey", "PoggermodeAchievementStore"), t.default = new E(l.default, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t;
    let {
      achievementId: a
    } = e;
    if (!o.default.isEnabled()) return !1;
    t = a, null != f.unlockedAchievements[t] || (f.unlockedAchievements = {
      ...f.unlockedAchievements,
      [t]: {
        achievementId: t,
        dateUnlocked: Date.now()
      }
    }, setTimeout(() => {
      (0, r.showAchievementToast)(t, !0)
    }, 2e3))
  }
})