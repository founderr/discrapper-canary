var i,
    l = n(442837),
    a = n(570140);
function r(e, t, n) {
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
let s = {};
class o extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (s = e);
    }
    getState() {
        return s;
    }
    getCountForGuild(e) {
        return s[e];
    }
}
r(o, 'displayName', 'GuildBoostingProgressBarPersistedStore'),
    r(o, 'persistKey', 'PremiumGuildProgressBarPersistedStore'),
    (t.Z = new o(a.Z, {
        APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
            let { guildId: t, premiumCount: n } = e;
            s = {
                ...s,
                [t]: n
            };
        }
    }));
