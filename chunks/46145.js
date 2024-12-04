n(47120), n(733860);
var r,
    l = n(442837),
    i = n(570140),
    a = n(592125),
    o = n(271383),
    u = n(430824);
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
let s = [],
    d = new Set();
class f extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(o.ZP, u.Z, a.Z), (d = new Set([...(s = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: s };
    }
    getChannelHistory() {
        return s;
    }
}
c(f, 'displayName', 'RecentVoiceChannelStore'), c(f, 'persistKey', 'RecentVoiceChannelStore');
let _ = new f(i.Z, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...s]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: r } = e;
        return !(null == r || !(null !== (n = null === (t = a.Z.getChannel(r)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || d.has(r)) && (s.unshift(r), d.add(r), s.length > 10 && ((s.length = 10), (d = new Set([...s]))), !0);
    }
});
t.Z = _;
