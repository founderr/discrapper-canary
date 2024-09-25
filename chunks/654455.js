n.d(t, {
    LU: function () {
        return T;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(911969),
    d = n(704907),
    _ = n(581883);
n(689079);
var E = n(674563),
    f = n(526761);
function h(e, t, n) {
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
let p = [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT],
    m = { pendingUsages: [] },
    I = new d.ZP({
        computeBonus: () => 1,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: E.yP
    });
function T(e, t) {
    return e
        .filter((e) => {
            if (e.includes(':')) return null != t.guild && t.guild.id === e.split(':')[1];
            return !0;
        })
        .map((e) => e.split(':')[0]);
}
function g(e, t) {
    return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? ''.concat(t.id, ':').concat(e.guild.id) : t.id;
}
function S(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    m.pendingUsages = [];
}
function A(e) {
    let { command: t, context: n } = e;
    if (!p.includes(t.type)) return !1;
    let r = g(n, t);
    m.pendingUsages.push({
        key: r,
        timestamp: Date.now()
    }),
        I.track(r),
        I.compute();
}
function v() {
    var e, t;
    let n = null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
    I.overwriteHistory(
        s().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        m.pendingUsages
    );
}
class N extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (m = e), this.syncWith([_.Z], v);
    }
    getState() {
        return m;
    }
    hasPendingUsage() {
        return m.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return I;
    }
    getScoreWithoutLoadingLatest(e, t) {
        var n;
        return null !== (n = I.getScore(g(e, t))) && void 0 !== n ? n : 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return I.frequently;
    }
}
h(N, 'displayName', 'ApplicationCommandFrecencyStore'),
    h(N, 'persistKey', 'ApplicationCommandFrecencyV2'),
    (t.ZP = new N(u.Z, {
        APPLICATION_COMMAND_USED: A,
        USER_SETTINGS_PROTO_UPDATE: S
    }));
