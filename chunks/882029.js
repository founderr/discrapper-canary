"use strict";
s.r(t);
var n, a = s("442837"),
  l = s("570140"),
  i = s("314897"),
  r = s("57562"),
  o = s("351780"),
  u = s("843693");

function d(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let c = {
    unlockedAchievements: {}
  },
  E = {
    ...c
  };
class f extends(n = a.default.PersistedStore) {
  initialize(e) {
    this.waitFor(i.default, u.default);
    let t = null != e ? e : {
      ...c
    };
    for (let e in t) E[e] = t[e]
  }
  getState() {
    return E
  }
  getAllUnlockedAchievements() {
    return E.unlockedAchievements
  }
  getUnlocked(e) {
    var t;
    return null !== (t = E.unlockedAchievements[e]) && void 0 !== t ? t : null
  }
}
d(f, "displayName", "PoggermodeAchievementStore"), d(f, "persistKey", "PoggermodeAchievementStore"), t.default = new f(l.default, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t;
    let {
      achievementId: s
    } = e;
    if (!o.default.isEnabled()) return !1;
    t = s, null != E.unlockedAchievements[t] || (E.unlockedAchievements = {
      ...E.unlockedAchievements,
      [t]: {
        achievementId: t,
        dateUnlocked: Date.now()
      }
    }, setTimeout(() => {
      (0, r.showAchievementToast)(t, !0)
    }, 2e3))
  }
})