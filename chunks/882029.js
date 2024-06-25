var n, a = s(442837),
  i = s(570140),
  r = s(314897),
  l = s(57562),
  o = s(351780),
  c = s(843693);

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let _ = {
    unlockedAchievements: {}
  },
  u = {
    ..._
  };
class d extends(n = a.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(r.default, c.ZP);
    let t = null != e ? e : {
      ..._
    };
    for (let e in t) u[e] = t[e]
  }
  getState() {
    return u
  }
  getAllUnlockedAchievements() {
    return u.unlockedAchievements
  }
  getUnlocked(e) {
    var t;
    return null !== (t = u.unlockedAchievements[e]) && void 0 !== t ? t : null
  }
}
E(d, "displayName", "PoggermodeAchievementStore"), E(d, "persistKey", "PoggermodeAchievementStore"), t.Z = new d(i.Z, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t;
    let {
      achievementId: s
    } = e;
    if (!o.Z.isEnabled()) return !1;
    t = s, null != u.unlockedAchievements[t] || (u.unlockedAchievements = {
      ...u.unlockedAchievements,
      [t]: {
        achievementId: t,
        dateUnlocked: Date.now()
      }
    }, setTimeout(() => {
      (0, l.D)(t, !0)
    }, 2e3))
  }
})