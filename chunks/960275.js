n(47120);
var i = n(570140),
  s = n(317770),
  l = n(314897),
  a = n(57562),
  r = n(882029),
  o = n(955204),
  c = n(351780),
  u = n(843693);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = new Set;
class h extends s.Z {
  _initialize() {
    i.Z.subscribe("MESSAGE_CREATE", this.handleMessageCreate), i.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  _terminate() {
    i.Z.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), i.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  constructor(...e) {
    super(...e), d(this, "handleSettingsUpdate", e => {
      let {
        settings: t
      } = e;
      t.enabled ? (0, a.T)(o.hn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, a.T)(o.hn.DISABLE_POGGERMODE), Object.keys(t).some(e => e.startsWith("confetti")) && (0, a.T)(o.hn.CUSTOMIZE_CONFETTI)
    }), d(this, "handleMessageCreate", e => {
      var t;
      let {
        channelId: n,
        message: {
          author: i,
          nonce: s,
          mentions: d
        }
      } = e;
      if (!c.Z.isEnabled()) return !1;
      let h = l.default.getId();
      if ((null == d ? void 0 : d.find(e => e.id === h)) != null ? (0, a.T)(o.hn.PING_ME) : (null !== (t = null == d ? void 0 : d.length) && void 0 !== t ? t : 0) > 0 && (null == i ? void 0 : i.id) === h && (0, a.T)(o.hn.PING_SOMEONE), !(0, u.wU)(null == i ? void 0 : i.id, h, s, E)) return !1;
      let _ = u.ZP.getMostRecentMessageCombo(n),
        {
          combo: I
        } = null != _ ? _ : {};
      if (null == I) return !1;
      Object.values(o.hn).forEach(e => {
        if (null != r.Z.getUnlocked(e)) return;
        let t = (0, o.oX)(e),
          n = null == t ? void 0 : t.checkUnlock;
        if (null != n && !1 !== n(I))(0, a.T)(e)
      })
    })
  }
}
t.Z = new h