var i = n(570140),
    r = n(317770),
    l = n(594174);
class a extends r.Z {
    _initialize() {
        i.Z.subscribe('POST_CONNECTION_OPEN', this._maybeStartDevSession), i.Z.subscribe('LOGOUT', this._maybeStopDevSession);
    }
    _terminate() {
        i.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeStartDevSession), i.Z.unsubscribe('LOGOUT', this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession) return;
        let e = l.default.getCurrentUser();
        !(null == e || e.isStaff()) && !window.DiscordDevSession.started && window.DiscordDevSession.start();
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
t.Z = new a();
