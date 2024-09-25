let r, i;
var a,
    o = n(724458);
var s = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(592125),
    d = n(430824);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = 'hideSuppressWarning',
    f = !1,
    h = !0,
    p = !1;
function m(e) {
    (r = e.sessionId), (f = !1);
}
function I() {
    (r = null), (i = null), (h = !0);
}
function T(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (r !== t.sessionId ? e : (f !== t.suppress && (h = !(f = t.suppress)), i !== t.channelId && ((i = t.channelId), (h = !f)), (p || null == t.channelId) && (h = !0), !0)), !1);
}
function g(e) {
    let { forever: t } = e;
    (h = !0), t && ((p = !0), l.K.set(E, p));
}
class S extends (a = s.ZP.Store) {
    initialize() {
        p = l.K.get(E) || p;
    }
    isAFKChannel() {
        let e = c.Z.getChannel(i);
        if (null == e) return !1;
        let t = d.Z.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        var e;
        return !(null === (e = c.Z.getChannel(i)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !h;
    }
}
_(S, 'displayName', 'PermissionSpeakStore'),
    (t.Z = new S(u.Z, {
        CONNECTION_OPEN: m,
        CONNECTION_CLOSED: I,
        VOICE_STATE_UPDATES: T,
        PERMISSION_CLEAR_SUPPRESS_WARNING: g
    }));
