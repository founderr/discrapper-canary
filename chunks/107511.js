var r = n(47120);
var i = n(433517),
    a = n(570140),
    o = n(317770),
    s = n(314897),
    l = n(944486),
    u = n(105372),
    c = n(88751),
    d = n(157925);
function _(e, t, n) {
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
class E extends o.Z {
    _initialize() {
        a.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        a.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    if (null == e.channelId || e.userId !== s.default.getId()) return;
                    if ((this.terminate(), i.K.get(d.$z, !1))) return;
                    let t = l.Z.getVoiceChannelId();
                    if (null != t && e.channelId === t) c.ZP.isAudienceMember(e.userId, t) && (i.K.set(d.$z, !0), u.$(t));
                });
            });
    }
}
t.Z = new E();
