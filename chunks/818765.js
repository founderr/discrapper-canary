n(47120), n(653041);
var s = n(570140),
    a = n(317770),
    r = n(474873),
    i = n(314897),
    l = n(19780),
    o = n(944486),
    c = n(111583),
    _ = n(557177),
    d = n(351780),
    E = n(843693),
    u = n(981631);
let T = (0, _.uk)('poggermode_applause', r.Z.getSoundpack()),
    I = !1,
    R = !1,
    g = [],
    N = null,
    C = () => {
        if (!I) T.loop(), (I = !0);
    },
    m = () => {
        T.stop(), (I = !1);
    },
    A = () => {
        let e = d.Z.isEnabled(),
            t = d.Z.comboSoundsEnabled;
        return (!!e && !!t && null != o.Z.getChannelId()) || !1;
    },
    f = () => {
        if (0 === g.length || !A() || R) return;
        R = !0;
        let [e, t] = g[g.length - 1];
        (0, _.GN)(e, t), (N = setTimeout(p, 1000));
    },
    p = () => {
        g.pop(), (R = !1), f();
    },
    M = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = l.Z.isConnected();
        g.push([e, t * (n ? 0.1 : 1)]), f();
    };
class S extends a.Z {
    _initialize() {
        E.ZP.addChangeListener(this.startAudio), s.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), s.Z.subscribe('TYPING_STOP', this.stopAudio), s.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), s.Z.subscribe('CHANNEL_SELECT', this.stopAudio), s.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        E.ZP.removeChangeListener(this.startAudio), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), s.Z.unsubscribe('TYPING_STOP', this.stopAudio), s.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), s.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), s.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(N);
    }
    setVolume(e) {
        let { state: t } = e;
        t === u.hes.RTC_CONNECTED ? (T.volume = 0.1) : (T.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        i.default.getId() === t && m();
    }
    stopAudio() {
        m();
    }
    startAudio() {
        var e;
        if (!A()) return;
        let t = o.Z.getChannelId();
        if (null == t) return;
        let n = i.default.getId(),
            s = c.Z.isTyping(t, n),
            a = E.ZP.getUserCombo(n, t),
            r = null !== (e = null == a ? void 0 : a.multiplier) && void 0 !== e ? e : 1;
        s && r >= 7 ? C() : m();
    }
    playAchievementUnlockSound() {
        if (!!A()) M('poggermode_achievement_unlock');
    }
}
t.Z = new S();
