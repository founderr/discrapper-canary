var i,
    a = r(442837),
    s = r(570140),
    o = r(314897),
    l = r(592125),
    u = r(131951),
    c = r(496675),
    d = r(19780),
    f = r(979651),
    _ = r(981631);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = !0,
    m = !0;
function g(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp || !1;
}
function E() {
    let e;
    let n = d.Z.getChannelId();
    if (null == n) e = !0;
    else {
        let r = l.Z.getChannel(n),
            i = f.Z.getVoiceState(null == r ? void 0 : r.getGuildId(), o.default.getId());
        e = u.Z.getMode() !== _.pM4.VOICE_ACTIVITY || null == r || r.isPrivate() || r.isGuildStageVoice() || c.Z.can(_.Plq.USE_VAD, r) || g(i);
    }
    if (p === e) return !1;
    (m = e),
        (p = e),
        s.Z.dispatch({
            type: 'SET_VAD_PERMISSION',
            hasPermission: p
        });
}
function v(e) {
    let { voiceStates: n } = e;
    return n.some((e) => {
        let { userId: n } = e;
        return n === o.default.getId() && E();
    });
}
function I() {
    m = !0;
}
function T() {
    m = p;
}
class b extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.Z, d.Z, f.Z);
    }
    shouldShowWarning() {
        return !m;
    }
    canUseVoiceActivity() {
        return p;
    }
}
h(b, 'displayName', 'PermissionVADStore'),
    (n.Z = new b(s.Z, {
        RTC_CONNECTION_STATE: E,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: E,
        AUDIO_SET_MODE: E,
        CHANNEL_UPDATES: E,
        THREAD_UPDATE: E,
        GUILD_ROLE_UPDATE: E,
        GUILD_MEMBER_UPDATE: E,
        IMPERSONATE_UPDATE: E,
        IMPERSONATE_STOP: E,
        VOICE_STATE_UPDATES: v,
        AUDIO_TOGGLE_SELF_MUTE: T,
        PERMISSION_CLEAR_VAD_WARNING: I
    }));
