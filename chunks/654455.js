n.d(t, {
    LU: function () {
        return g;
    }
}),
    n(47120),
    n(653041);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(911969),
    u = n(704907),
    c = n(581883);
n(689079);
var d = n(674563),
    f = n(526761);
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
let h = [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT],
    p = { pendingUsages: [] },
    m = new u.ZP({
        computeBonus: () => 1,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: d.yP
    });
function g(e, t) {
    return e
        .filter((e) => {
            if (e.includes(':')) return (null == t ? void 0 : t.guild) != null && t.guild.id === e.split(':')[1];
            return !0;
        })
        .map((e) => e.split(':')[0]);
}
function E(e, t) {
    return 0 > Number(t.id) ? t.id : (null == e ? void 0 : e.guild) != null && null != t.guildId ? ''.concat(t.id, ':').concat(e.guild.id) : t.id;
}
function v() {
    var e, t;
    let n = null !== (t = null === (e = c.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
    m.overwriteHistory(
        a().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        p.pendingUsages
    );
}
class I extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (p = e), this.syncWith([c.Z], v);
    }
    getState() {
        return p;
    }
    hasPendingUsage() {
        return p.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return m;
    }
    getScoreWithoutLoadingLatest(e, t) {
        var n;
        return null !== (n = m.getScore(E(e, t))) && void 0 !== n ? n : 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return m.frequently;
    }
}
_(I, 'displayName', 'ApplicationCommandFrecencyStore'),
    _(I, 'persistKey', 'ApplicationCommandFrecencyV2'),
    (t.ZP = new I(o.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            let { command: t, context: n } = e;
            if (!h.includes(t.type)) return !1;
            let r = E(n, t);
            p.pendingUsages.push({
                key: r,
                timestamp: Date.now()
            }),
                m.track(r),
                m.compute();
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                wasSaved: n
            } = e;
            if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            p.pendingUsages = [];
        }
    }));
