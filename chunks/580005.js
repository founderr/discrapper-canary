r.d(n, {
    C: function () {
        return T;
    }
});
var i,
    a = r(653041);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(704907),
    d = r(581883),
    f = r(592125),
    _ = r(430824),
    h = r(944486),
    p = r(914010),
    m = r(981631),
    g = r(526761);
function E(e, n, r) {
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
let v = 10,
    I = 100,
    T = 100,
    b = new c.ZP({
        computeBonus: () => I,
        computeWeight: (e) => {
            let n = 1;
            return 0 === e ? (n = 100) : e >= 1 && e < 2 ? (n = 70) : e >= 2 && e < 4 ? (n = 50) : e >= 4 && e < 7 ? (n = 30) : e >= 7 && (n = 10), n;
        },
        lookupKey: (e) => {
            var n, r;
            return null !== (r = null !== (n = _.Z.getGuild(e)) && void 0 !== n ? n : f.Z.getChannel(e)) && void 0 !== r ? r : f.Z.getChannel(f.Z.getDMFromUserId(e));
        },
        afterCompute: () => {},
        numFrequentlyItems: T,
        maxSamples: v
    }),
    y = null,
    S = null;
function A(e) {
    let { guildId: n, channelId: r } = e,
        i = !1;
    return (
        r !== y &&
            ((y = null != r ? r : null),
            null != r &&
                m.Xyh.test(r) &&
                ((i = !0),
                b.track(r),
                R.pendingUsages.push({
                    key: r,
                    timestamp: Date.now()
                }))),
        n !== S &&
            ((S = null != n ? n : null),
            null != n &&
                m.Xyh.test(n) &&
                ((i = !0),
                b.track(n),
                R.pendingUsages.push({
                    key: n,
                    timestamp: Date.now()
                }))),
        i
    );
}
function N(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    return n === g.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!r && ((R.pendingUsages = []), !0);
}
function C() {
    var e;
    let n = null === (e = d.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
    if (null == n) return !1;
    b.overwriteHistory(
        o().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        R.pendingUsages
    );
}
let R = { pendingUsages: [] };
class O extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(p.Z, h.Z), null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && m.Xyh.test(e.key))), (R = e)), this.syncWith([d.Z], C);
    }
    getState() {
        return R;
    }
    hasPendingUsage() {
        return R.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return b;
    }
    getFrequentlyWithoutFetchingLatest() {
        return b.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        var n;
        return null !== (n = b.getFrecency(e)) && void 0 !== n ? n : 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let n = f.Z.getDMFromUserId(e);
        return null != n ? this.getScoreWithoutFetchingLatest(n) : 0;
    }
    getMaxScore() {
        return T * v;
    }
    getBonusScore() {
        return I;
    }
}
E(O, 'displayName', 'FrecencyStore'),
    E(O, 'persistKey', 'FrecencyStore'),
    (n.Z = new O(u.Z, {
        CHANNEL_SELECT: A,
        VOICE_CHANNEL_SELECT: A,
        USER_SETTINGS_PROTO_UPDATE: N
    }));
