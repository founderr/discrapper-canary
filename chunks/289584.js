t.d(n, {
  Z: function() {
    return E
  }
}), t(47120);
var s = t(470079),
  l = t(749210),
  a = t(287734),
  i = t(881052),
  r = t(142497),
  o = t(570188),
  c = t(471253),
  d = t(427679),
  u = t(190378);

function E(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    [E, _] = s.useState(!1),
    [T, N] = s.useState(null),
    h = s.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
    I = (0, o.J)(e);
  return {
    loading: E,
    error: T,
    onSave: async s => {
      let {
        topic: o,
        privacyLevel: d,
        sendStartNotification: E
      } = s;
      if (null != e && "" !== o && null != d) {
        _(!0), N(null), null != t && (l.Z.selectGuild(t), a.default.selectVoiceChannel(e.id));
        try {
          let t;
          null != h ? t = await c.Ef(e, o, d) : (t = await c.HO(e, o, d, null != E && E), I && r.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), n(t)
        } catch (e) {
          N(new i.Hx(e)), _(!1)
        }
      }
    }
  }
}