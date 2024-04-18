"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("317770"),
  l = a("314897"),
  i = a("57562"),
  r = a("882029"),
  o = a("955204"),
  u = a("351780"),
  d = a("843693");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = new Set;
class E extends s.default {
  _initialize() {
    n.default.subscribe("MESSAGE_CREATE", this.handleMessageCreate), n.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  _terminate() {
    n.default.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), n.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  constructor(...e) {
    super(...e), c(this, "handleSettingsUpdate", e => {
      let {
        settings: t
      } = e;
      t.enabled ? (0, i.unlockAchievement)(o.PoggermodeAchievementId.ENABLE_POGGERMODE) : !1 === t.enabled && (0, i.unlockAchievement)(o.PoggermodeAchievementId.DISABLE_POGGERMODE), Object.keys(t).some(e => e.startsWith("confetti")) && (0, i.unlockAchievement)(o.PoggermodeAchievementId.CUSTOMIZE_CONFETTI)
    }), c(this, "handleMessageCreate", e => {
      var t;
      let {
        channelId: a,
        message: {
          author: n,
          nonce: s,
          mentions: c
        }
      } = e;
      if (!u.default.isEnabled()) return !1;
      let E = l.default.getId();
      if ((null == c ? void 0 : c.find(e => e.id === E)) != null ? (0, i.unlockAchievement)(o.PoggermodeAchievementId.PING_ME) : (null !== (t = null == c ? void 0 : c.length) && void 0 !== t ? t : 0) > 0 && (null == n ? void 0 : n.id) === E && (0, i.unlockAchievement)(o.PoggermodeAchievementId.PING_SOMEONE), !(0, d.shouldTrackMessage)(null == n ? void 0 : n.id, E, s, f)) return !1;
      let h = d.default.getMostRecentMessageCombo(a),
        {
          combo: _
        } = null != h ? h : {};
      if (null == _) return !1;
      Object.values(o.PoggermodeAchievementId).forEach(e => {
        if (null != r.default.getUnlocked(e)) return;
        let t = (0, o.getPoggermodeAchievementData)(e),
          a = null == t ? void 0 : t.checkUnlock;
        if (null != a) !1 !== a(_) && (0, i.unlockAchievement)(e)
      })
    })
  }
}
t.default = new E