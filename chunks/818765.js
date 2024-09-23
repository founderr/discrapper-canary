n(47120), n(653041);
var s = n(570140),
    a = n(317770),
    r = n(474873),
    i = n(314897),
    o = n(19780),
    l = n(944486),
    c = n(111583),
    d = n(557177),
    _ = n(351780),
    u = n(843693),
    E = n(981631);
let T = (0, d.uk)('poggermode_applause', r.Z.getSoundpack()),
    I = !1,
    R = !1,
    m = [],
    g = null,
    N = () => {
        if (!I) T.loop(), (I = !0);
    },
    C = () => {
        T.stop(), (I = !1);
    },
    p = () => {
        let e = _.Z.isEnabled(),
            t = _.Z.comboSoundsEnabled;
        return (!!e && !!t && null != l.Z.getChannelId()) || !1;
    },
    f = () => {
        if (0 === m.length || !p() || R) return;
        R = !0;
        let [e, t] = m[m.length - 1];
        (0, d.GN)(e, t), (g = setTimeout(A, 1000));
    },
    A = () => {
        m.pop(), (R = !1), f();
    },
    S = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.Z.isConnected();
        m.push([e, t * (n ? 0.1 : 1)]), f();
    };
class h extends a.Z {
    _initialize() {
        u.ZP.addChangeListener(this.startAudio), s.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), s.Z.subscribe('TYPING_STOP', this.stopAudio), s.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), s.Z.subscribe('CHANNEL_SELECT', this.stopAudio), s.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        u.ZP.removeChangeListener(this.startAudio), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), s.Z.unsubscribe('TYPING_STOP', this.stopAudio), s.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), s.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), s.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(g);
    }
    setVolume(e) {
        let { state: t } = e;
        t === E.hes.RTC_CONNECTED ? (T.volume = 0.1) : (T.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        i.default.getId() === t && C();
    }
    stopAudio() {
        C();
    }
    startAudio() {
        var e;
        if (!p()) return;
        let t = l.Z.getChannelId();
        if (null == t) return;
        let n = i.default.getId(),
            s = c.Z.isTyping(t, n),
            a = u.ZP.getUserCombo(n, t),
            r = null !== (e = null == a ? void 0 : a.multiplier) && void 0 !== e ? e : 1;
        s && r >= 7 ? N() : C();
    }
    playAchievementUnlockSound() {
        if (!!p()) S('poggermode_achievement_unlock');
    }
}
t.Z = new h();
