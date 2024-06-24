var s, i = n(442837),
  a = n(570140),
  l = n(314897),
  r = n(57562),
  c = n(351780),
  o = n(843693);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {
    unlockedAchievements: {}
  },
  E = {
    ...u
  };
class _ extends(s = i.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(l.default, o.ZP);
    let t = null != e ? e : {
      ...u
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
d(_, "displayName", "PoggermodeAchievementStore"), d(_, "persistKey", "PoggermodeAchievementStore"), t.Z = new _(a.Z, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t;
    let {
      achievementId: n
    } = e;
    if (!c.Z.isEnabled()) return !1;
    t = n, null != E.unlockedAchievements[t] || (E.unlockedAchievements = {
      ...E.unlockedAchievements,
      [t]: {
        achievementId: t,
        dateUnlocked: Date.now()
      }
    }, setTimeout(() => {
      (0, r.D)(t, !0)
    }, 2e3))
  }
})