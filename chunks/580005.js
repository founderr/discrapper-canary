n.d(t, {
    C: function () {
        return g;
    }
});
var r,
    i = n(653041);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(704907),
    c = n(581883),
    d = n(592125),
    _ = n(430824),
    E = n(944486),
    f = n(914010),
    h = n(981631),
    p = n(526761);
function m(e, t, n) {
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
let I = 10,
    T = 100,
    g = 100,
    S = new u.ZP({
        computeBonus: () => T,
        computeWeight: (e) => {
            let t = 1;
            return 0 === e ? (t = 100) : e >= 1 && e < 2 ? (t = 70) : e >= 2 && e < 4 ? (t = 50) : e >= 4 && e < 7 ? (t = 30) : e >= 7 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t, n;
            return null !== (n = null !== (t = _.Z.getGuild(e)) && void 0 !== t ? t : d.Z.getChannel(e)) && void 0 !== n ? n : d.Z.getChannel(d.Z.getDMFromUserId(e));
        },
        afterCompute: () => {},
        numFrequentlyItems: g,
        maxSamples: I
    }),
    A = null,
    v = null;
function N(e) {
    let { guildId: t, channelId: n } = e,
        r = !1;
    return (
        n !== A &&
            ((A = null != n ? n : null),
            null != n &&
                h.Xyh.test(n) &&
                ((r = !0),
                S.track(n),
                C.pendingUsages.push({
                    key: n,
                    timestamp: Date.now()
                }))),
        t !== v &&
            ((v = null != t ? t : null),
            null != t &&
                h.Xyh.test(t) &&
                ((r = !0),
                S.track(t),
                C.pendingUsages.push({
                    key: t,
                    timestamp: Date.now()
                }))),
        r
    );
}
function O(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    return t === p.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((C.pendingUsages = []), !0);
}
function R() {
    var e;
    let t = null === (e = c.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
    if (null == t) return !1;
    S.overwriteHistory(
        o().mapValues(t, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        C.pendingUsages
    );
}
let C = { pendingUsages: [] };
class y extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.Z, E.Z), null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && h.Xyh.test(e.key))), (C = e)), this.syncWith([c.Z], R);
    }
    getState() {
        return C;
    }
    hasPendingUsage() {
        return C.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return S;
    }
    getFrequentlyWithoutFetchingLatest() {
        return S.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        var t;
        return null !== (t = S.getFrecency(e)) && void 0 !== t ? t : 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = d.Z.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return g * I;
    }
    getBonusScore() {
        return T;
    }
}
m(y, 'displayName', 'FrecencyStore'),
    m(y, 'persistKey', 'FrecencyStore'),
    (t.Z = new y(l.Z, {
        CHANNEL_SELECT: N,
        VOICE_CHANNEL_SELECT: N,
        USER_SETTINGS_PROTO_UPDATE: O
    }));
