n.d(t, {
    U5: function () {
        return I;
    },
    pp: function () {
        return v;
    }
}),
    n(47120);
var r = n(442837),
    i = n(147913),
    a = n(592125),
    s = n(131951),
    o = n(944486),
    l = n(979651),
    u = n(557177),
    c = n(565799),
    d = n(431328),
    f = n(501655),
    _ = n(427679),
    p = n(754277);
let h = (e) => e / 400,
    m = !1,
    g = (0, u.tu)('stage_waiting', 'stage_waiting', h(s.Z.getOutputVolume()));
function E() {
    let e = o.Z.getVoiceChannelId();
    if (null == e) {
        g.stop(), (m = !1);
        return;
    }
    let t = a.Z.getChannel(e);
    if (!(null == t ? void 0 : t.isGuildStageVoice()) || s.Z.isSelfDeaf()) {
        g.stop(), (m = !1);
        return;
    }
    if (p.Z.shouldPlay()) {
        (g.volume = h(s.Z.getOutputVolume())), g.loop(), (m = !0);
        return;
    }
    if (_.Z.isLive(e)) {
        g.stop(), (m = !1);
        return;
    }
    if (p.Z.isMuted()) {
        g.pause(), (m = !1);
        return;
    }
    let n = null != Object.values(l.Z.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || m ? n && (g.pause(), (m = !1)) : ((g.volume = h(s.Z.getOutputVolume())), g.loop(), (m = !0));
}
function v(e) {
    let t = (0, r.e7)([o.Z], () => o.Z.getVoiceChannelId() === e),
        n = null != (0, d.w8)(e, f.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, r.e7)([_.Z], () => _.Z.getStageInstanceByChannel(e));
    return t && null == i && !n;
}
function I(e) {
    let t = o.Z.getVoiceChannelId() === e,
        n = null != c.Z.getMutableParticipants(e, f.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = _.Z.getStageInstanceByChannel(e);
    return t && null == r && !n;
}
class T extends i.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (null != t) {
            let e = a.Z.getChannel(t);
            (null == e ? void 0 : e.isGuildStageVoice()) ? E() : (g.stop(), (m = !1));
        } else g.stop(), (m = !1);
    }
    handleLogout() {
        g.stop(), (m = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? E() : (g.pause(), (m = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (g.pause(), (m = !1)) : E();
    }
    handleVoiceStateUpdates() {
        E();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        g.volume = h(t);
    }
    handleToggleSelfDeaf() {
        E();
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                LOGOUT: this.handleLogout,
                STAGE_MUSIC_MUTE: this.handleMute,
                STAGE_MUSIC_PLAY: this.handlePlay,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.ZP = new T();
