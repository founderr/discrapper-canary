var r = n(47120);
var i = n(570140),
    a = n(147913),
    o = n(314897),
    s = n(967368),
    l = n(592125),
    u = n(944486),
    c = n(631768),
    d = n(981631);
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
function E() {
    let e = u.Z.getVoiceChannelId(),
        t = s.Z.bitrate;
    if (null == e) return;
    let n = l.Z.getChannel(e);
    if (null != n)
        t !== n.bitrate &&
            i.Z.dispatch({
                type: 'SET_CHANNEL_BITRATE',
                bitrate: n.bitrate
            });
}
function f() {
    var e;
    let t = u.Z.getVoiceChannelId(),
        n = c.Z.mode;
    if (null == t) return;
    let r = l.Z.getChannel(t);
    if (null == r) return;
    let a = null !== (e = r.videoQualityMode) && void 0 !== e ? e : d.Ucd.AUTO;
    n !== a &&
        i.Z.dispatch({
            type: 'SET_CHANNEL_VIDEO_QUALITY_MODE',
            mode: a
        });
}
function h() {
    E(), f();
}
function p(e) {
    let { channels: t } = e;
    for (let e of t) u.Z.getVoiceChannelId() === e.id && h();
}
function m(e) {
    let { voiceStates: t } = e;
    t.forEach((e) => {
        o.default.getSessionId() === e.sessionId && h();
    });
}
class I extends a.Z {
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                CHANNEL_UPDATES: p,
                VOICE_STATE_UPDATES: m
            });
    }
}
t.Z = new I();
