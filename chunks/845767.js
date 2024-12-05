n(47120);
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
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = l.default.getCurrentUser();
        if ((null == e ? void 0 : e.email) == null || e.isStaff()) return;
        let [t] = e.email.split('@'),
            n = t.includes('+'),
            i = e.username.startsWith('mtcls');
        n && i ? window.DiscordDevSession.start() : window.DiscordDevSession.stop();
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
t.Z = new a();
