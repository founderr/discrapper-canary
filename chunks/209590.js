let r, i;
n(724458);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(433517),
    d = n(570140),
    f = n(592125),
    _ = n(430824);
let h = 'hideSuppressWarning',
    p = !1,
    m = !0,
    g = !1;
class E extends (a = u.ZP.Store) {
    initialize() {
        g = c.K.get(h) || g;
    }
    isAFKChannel() {
        let e = f.Z.getChannel(i);
        if (null == e) return !1;
        let t = _.Z.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        var e;
        return !(null === (e = f.Z.getChannel(i)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !m;
    }
}
(l = 'PermissionSpeakStore'),
    (o = 'displayName') in (s = E)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new E(d.Z, {
        CONNECTION_OPEN: function (e) {
            (r = e.sessionId), (p = !1);
        },
        CONNECTION_CLOSED: function () {
            (r = null), (i = null), (m = !0);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (r !== t.sessionId ? e : (p !== t.suppress && (m = !(p = t.suppress)), i !== t.channelId && ((i = t.channelId), (m = !p)), (g || null == t.channelId) && (m = !0), !0)), !1);
        },
        PERMISSION_CLEAR_SUPPRESS_WARNING: function (e) {
            let { forever: t } = e;
            (m = !0), t && ((g = !0), c.K.set(h, g));
        }
    }));
