n.d(t, {
    C: function () {
        return g;
    }
}),
    n(653041);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(704907),
    u = n(581883),
    c = n(592125),
    d = n(430824),
    f = n(944486),
    _ = n(914010),
    p = n(981631),
    h = n(526761);
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
let g = 100,
    E = new l.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return 0 === e ? (t = 100) : e >= 1 && e < 2 ? (t = 70) : e >= 2 && e < 4 ? (t = 50) : e >= 4 && e < 7 ? (t = 30) : e >= 7 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t, n;
            return null !== (n = null !== (t = d.Z.getGuild(e)) && void 0 !== t ? t : c.Z.getChannel(e)) && void 0 !== n ? n : c.Z.getChannel(c.Z.getDMFromUserId(e));
        },
        afterCompute: () => {},
        numFrequentlyItems: g,
        maxSamples: 10
    }),
    v = null,
    b = null;
function I(e) {
    let { guildId: t, channelId: n } = e,
        r = !1;
    return (
        n !== v &&
            ((v = null != n ? n : null),
            null != n &&
                p.Xyh.test(n) &&
                ((r = !0),
                E.track(n),
                T.pendingUsages.push({
                    key: n,
                    timestamp: Date.now()
                }))),
        t !== b &&
            ((b = null != t ? t : null),
            null != t &&
                p.Xyh.test(t) &&
                ((r = !0),
                E.track(t),
                T.pendingUsages.push({
                    key: t,
                    timestamp: Date.now()
                }))),
        r
    );
}
function S() {
    var e;
    let t = null === (e = u.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
    if (null == t) return !1;
    E.overwriteHistory(
        a().mapValues(t, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        T.pendingUsages
    );
}
let T = { pendingUsages: [] };
class y extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.Z, f.Z), null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && p.Xyh.test(e.key))), (T = e)), this.syncWith([u.Z], S);
    }
    getState() {
        return T;
    }
    hasPendingUsage() {
        return T.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return E;
    }
    getFrequentlyWithoutFetchingLatest() {
        return E.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        var t;
        return null !== (t = E.getFrecency(e)) && void 0 !== t ? t : 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = c.Z.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return 10 * g;
    }
    getBonusScore() {
        return 100;
    }
}
m(y, 'displayName', 'FrecencyStore'),
    m(y, 'persistKey', 'FrecencyStore'),
    (t.Z = new y(o.Z, {
        CHANNEL_SELECT: I,
        VOICE_CHANNEL_SELECT: I,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                wasSaved: n
            } = e;
            return t === h.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((T.pendingUsages = []), !0);
        }
    }));
