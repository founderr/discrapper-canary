var i = r(570140),
    a = r(317770),
    s = r(358085),
    o = r(374023),
    l = r(761274),
    u = r(981631);
class c extends a.Z {
    isEnabled() {
        return (0, s.isDesktop)() && (0, s.isMac)() && !o.s.isDiscordTestSet();
    }
    _initialize() {
        this.isEnabled() && i.Z.subscribe('AUDIO_SET_MODE', this.handleAudioSetMode);
    }
    _terminate() {
        this.isEnabled() && i.Z.unsubscribe('AUDIO_SET_MODE', this.handleAudioSetMode);
    }
    handleAudioSetMode(e) {
        let { mode: n } = e;
        n === u.pM4.PUSH_TO_TALK && r(751571).Z.requestPermission(l.Eu.INPUT_MONITORING);
    }
}
n.Z = new c();
