n.d(t, {
    U5: function () {
        return A;
    },
    pp: function () {
        return S;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(147913),
    o = n(592125),
    s = n(131951),
    l = n(944486),
    u = n(979651),
    c = n(557177),
    d = n(565799),
    _ = n(431328),
    E = n(501655),
    f = n(427679),
    h = n(754277);
function p(e, t, n) {
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
let m = (e) => e / 400,
    I = !1,
    T = (0, c.tu)('stage_waiting', 'stage_waiting', m(s.Z.getOutputVolume()));
function g() {
    let e = l.Z.getVoiceChannelId();
    if (null == e) {
        T.stop(), (I = !1);
        return;
    }
    let t = o.Z.getChannel(e);
    if (!(null == t ? void 0 : t.isGuildStageVoice()) || s.Z.isSelfDeaf()) {
        T.stop(), (I = !1);
        return;
    }
    if (h.Z.shouldPlay()) {
        (T.volume = m(s.Z.getOutputVolume())), T.loop(), (I = !0);
        return;
    }
    if (f.Z.isLive(e)) {
        T.stop(), (I = !1);
        return;
    }
    if (h.Z.isMuted()) {
        T.pause(), (I = !1);
        return;
    }
    let n = null != Object.values(u.Z.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || I ? n && (T.pause(), (I = !1)) : ((T.volume = m(s.Z.getOutputVolume())), T.loop(), (I = !0));
}
function S(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getVoiceChannelId() === e),
        n = null != (0, _.w8)(e, E.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = (0, i.e7)([f.Z], () => f.Z.getStageInstanceByChannel(e));
    return t && null == r && !n;
}
function A(e) {
    let t = l.Z.getVoiceChannelId() === e,
        n = null != d.Z.getMutableParticipants(e, E.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = f.Z.getStageInstanceByChannel(e);
    return t && null == r && !n;
}
class v extends a.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (null != t) {
            let e = o.Z.getChannel(t);
            (null == e ? void 0 : e.isGuildStageVoice()) ? g() : (T.stop(), (I = !1));
        } else T.stop(), (I = !1);
    }
    handleLogout() {
        T.stop(), (I = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? g() : (T.pause(), (I = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (T.pause(), (I = !1)) : g();
    }
    handleVoiceStateUpdates() {
        g();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        T.volume = m(t);
    }
    handleToggleSelfDeaf() {
        g();
    }
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
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
t.ZP = new v();
