var s, a = n(442837),
  i = n(570140),
  l = n(314897),
  r = n(57562),
  o = n(351780),
  c = n(843693);

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
class _ extends(s = a.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(l.default, c.ZP);
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
d(_, "displayName", "PoggermodeAchievementStore"), d(_, "persistKey", "PoggermodeAchievementStore"), t.Z = new _(i.Z, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t;
    let {
      achievementId: n
    } = e;
    if (!o.Z.isEnabled()) return !1;
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