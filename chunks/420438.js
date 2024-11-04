n(47120);
var i,
    l = n(442837),
    r = n(570140);
function s(e, t, n) {
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
let a = {};
class o extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            a[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = a[t];
        return null != n && (!!n.has(e) || !1);
    }
    getState() {
        return a;
    }
}
s(o, 'displayName', 'GuildPromptsStore'),
    s(o, 'persistKey', 'GuildPromptsStore'),
    (t.Z = new o(r.Z, {
        GUILD_PROMPT_VIEWED: function (e) {
            let { prompt: t, guildId: n } = e,
                i = a[n];
            return null == i ? ((a[n] = new Set()), a[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return null != a[t.id] && !t.unavailable && (delete a[t.id], !0);
        }
    }));
