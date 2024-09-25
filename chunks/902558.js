var r = n(47120);
var i = n(268146),
    a = n(46973),
    o = n(147913),
    s = n(314897),
    l = n(998502),
    u = n(981631);
function c(e, t, n) {
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
let d = new Set();
function _() {
    for (let e of [i.X4.HasRTCConnection, i.X4.IsSendingVideo, i.X4.IsSendingStream, i.X4.IsReceivingVideo, i.X4.IsReceivingStream]) l.ZP.setCrashInformation(e, 0);
}
function E(e) {
    switch (e) {
        case a.Yn.DEFAULT:
            return i.X4.VideoMediaSessionId;
        case a.Yn.STREAM:
            return i.X4.StreamMediaSessionId;
    }
}
function f(e) {
    var t;
    l.ZP.setCrashInformation(E(e.context), null !== (t = e.mediaSessionId) && void 0 !== t ? t : null);
}
function h(e) {
    var t;
    let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
    switch (e.state) {
        case u.hes.RTC_CONNECTED:
            d.add(n), l.ZP.setCrashInformation(i.X4.HasRTCConnection, 1);
            break;
        case u.hes.DISCONNECTED:
            l.ZP.setCrashInformation(E(e.context), null), d.delete(n), 0 === d.size && _();
    }
}
function p(e) {
    let t = e.userId === s.default.getId(),
        n = null != e.streamId,
        r = null;
    switch (e.context) {
        case a.Yn.DEFAULT:
            r = t ? i.X4.IsSendingVideo : i.X4.IsReceivingVideo;
            break;
        case a.Yn.STREAM:
            r = t ? i.X4.IsSendingStream : i.X4.IsReceivingStream;
    }
    l.ZP.setCrashInformation(r, n ? 1 : 0);
}
class m extends o.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                RTC_CONNECTION_STATE: h,
                RTC_CONNECTION_VIDEO: p,
                MEDIA_SESSION_JOINED: f
            });
    }
}
t.Z = new m();
