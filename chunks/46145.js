n(47120), n(733860);
var i,
    r = n(442837),
    l = n(570140),
    o = n(592125),
    a = n(271383),
    s = n(430824);
function u(e, t, n) {
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
let c = [],
    d = new Set();
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(a.ZP, s.Z, o.Z), (d = new Set([...(c = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: c };
    }
    getChannelHistory() {
        return c;
    }
}
u(h, 'displayName', 'RecentVoiceChannelStore'), u(h, 'persistKey', 'RecentVoiceChannelStore');
let f = new h(l.Z, {
    CONNECTION_OPEN: function () {
        d = new Set([...c]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: i } = e;
        return !(null == i || !(null !== (n = null === (t = o.Z.getChannel(i)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || d.has(i)) && (c.unshift(i), d.add(i), c.length > 10 && ((c.length = 10), (d = new Set([...c]))), !0);
    }
});
t.Z = f;
