var i = r(47120);
var a = r(433517),
    s = r(570140),
    o = r(317770),
    l = r(314897),
    u = r(944486),
    c = r(105372),
    d = r(88751),
    f = r(157925);
function _(e, n, r) {
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
class h extends o.Z {
    _initialize() {
        s.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        s.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: n } = e;
                n.forEach((e) => {
                    if (null == e.channelId || e.userId !== l.default.getId()) return;
                    if ((this.terminate(), a.K.get(f.$z, !1))) return;
                    let n = u.Z.getVoiceChannelId();
                    if (null != n && e.channelId === n) d.ZP.isAudienceMember(e.userId, n) && (a.K.set(f.$z, !0), c.$(n));
                });
            });
    }
}
n.Z = new h();
