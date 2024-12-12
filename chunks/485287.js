r.d(n, {
    U5: function () {
        return y;
    },
    pp: function () {
        return b;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(147913),
    o = r(592125),
    l = r(131951),
    u = r(944486),
    c = r(979651),
    d = r(557177),
    f = r(565799),
    _ = r(431328),
    h = r(501655),
    p = r(427679),
    m = r(754277);
function g(e, n, r) {
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
let E = (e) => e / 400,
    v = !1,
    I = (0, d.tu)('stage_waiting', 'stage_waiting', E(l.Z.getOutputVolume()));
function T() {
    let e = u.Z.getVoiceChannelId();
    if (null == e) {
        I.stop(), (v = !1);
        return;
    }
    let n = o.Z.getChannel(e);
    if (!(null == n ? void 0 : n.isGuildStageVoice()) || l.Z.isSelfDeaf()) {
        I.stop(), (v = !1);
        return;
    }
    if (m.Z.shouldPlay()) {
        (I.volume = E(l.Z.getOutputVolume())), I.loop(), (v = !0);
        return;
    }
    if (p.Z.isLive(e)) {
        I.stop(), (v = !1);
        return;
    }
    if (m.Z.isMuted()) {
        I.pause(), (v = !1);
        return;
    }
    let r = null != Object.values(c.Z.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    r || v ? r && (I.pause(), (v = !1)) : ((I.volume = E(l.Z.getOutputVolume())), I.loop(), (v = !0));
}
function b(e) {
    let n = (0, a.e7)([u.Z], () => u.Z.getVoiceChannelId() === e),
        r = null != (0, _.w8)(e, h.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, a.e7)([p.Z], () => p.Z.getStageInstanceByChannel(e));
    return n && null == i && !r;
}
function y(e) {
    let n = u.Z.getVoiceChannelId() === e,
        r = null != f.Z.getMutableParticipants(e, h.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = p.Z.getStageInstanceByChannel(e);
    return n && null == i && !r;
}
class S extends s.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: n } = e;
        if (null != n) {
            let e = o.Z.getChannel(n);
            (null == e ? void 0 : e.isGuildStageVoice()) ? T() : (I.stop(), (v = !1));
        } else I.stop(), (v = !1);
    }
    handleLogout() {
        I.stop(), (v = !1);
    }
    handlePlay(e) {
        let { play: n } = e;
        n ? T() : (I.pause(), (v = !1));
    }
    handleMute(e) {
        let { muted: n } = e;
        n ? (I.pause(), (v = !1)) : T();
    }
    handleVoiceStateUpdates() {
        T();
    }
    handleSetOutputVolume(e) {
        let { volume: n } = e;
        I.volume = E(n);
    }
    handleToggleSelfDeaf() {
        T();
    }
    constructor(...e) {
        super(...e),
            g(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                LOGOUT: this.handleLogout,
                STAGE_MUSIC_MUTE: this.handleMute,
                STAGE_MUSIC_PLAY: this.handlePlay,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
            });
    }
}
n.ZP = new S();
