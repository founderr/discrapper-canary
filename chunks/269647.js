var r,
    i = n(442837),
    a = n(570140),
    o = n(314897),
    s = n(592125),
    l = n(131951),
    u = n(496675),
    c = n(19780),
    d = n(979651),
    _ = n(981631);
function E(e, t, n) {
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
let f = !0,
    h = !0;
function p(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp || !1;
}
function m() {
    let e;
    let t = c.Z.getChannelId();
    if (null == t) e = !0;
    else {
        let n = s.Z.getChannel(t),
            r = d.Z.getVoiceState(null == n ? void 0 : n.getGuildId(), o.default.getId());
        e = l.Z.getMode() !== _.pM4.VOICE_ACTIVITY || null == n || n.isPrivate() || n.isGuildStageVoice() || u.Z.can(_.Plq.USE_VAD, n) || p(r);
    }
    if (f === e) return !1;
    (h = e),
        (f = e),
        a.Z.dispatch({
            type: 'SET_VAD_PERMISSION',
            hasPermission: f
        });
}
function I(e) {
    let { voiceStates: t } = e;
    return t.some((e) => {
        let { userId: t } = e;
        return t === o.default.getId() && m();
    });
}
function T() {
    h = !0;
}
function g() {
    h = f;
}
class S extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, l.Z, c.Z, d.Z);
    }
    shouldShowWarning() {
        return !h;
    }
    canUseVoiceActivity() {
        return f;
    }
}
E(S, 'displayName', 'PermissionVADStore'),
    (t.Z = new S(a.Z, {
        RTC_CONNECTION_STATE: m,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: m,
        AUDIO_SET_MODE: m,
        CHANNEL_UPDATES: m,
        THREAD_UPDATE: m,
        GUILD_ROLE_UPDATE: m,
        GUILD_MEMBER_UPDATE: m,
        IMPERSONATE_UPDATE: m,
        IMPERSONATE_STOP: m,
        VOICE_STATE_UPDATES: I,
        AUDIO_TOGGLE_SELF_MUTE: g,
        PERMISSION_CLEAR_VAD_WARNING: T
    }));
