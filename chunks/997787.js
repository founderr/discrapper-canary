let r;
n(47120), n(653041);
var i,
    o = n(442837),
    a = n(570140);
function l(e, t, n) {
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
let s = { guildNoticeDismissed: [] },
    c = new Map(),
    u = new Set();
class d extends (i = o.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        r = e;
    }
    getState() {
        return r;
    }
    shouldShowChannelNotice(e) {
        var t, n;
        return !r.guildNoticeDismissed.includes(e) && (null !== (n = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0;
    }
    canShowOverviewTooltip(e, t) {
        var n;
        return (null === (n = c.get(e)) || void 0 === n ? void 0 : n.has(t)) === !0;
    }
    canShowToggleTooltip(e) {
        return u.has(e);
    }
}
l(d, 'displayName', 'CommandsMigrationStore'),
    l(d, 'persistKey', 'CommandsMigrationStore'),
    (t.Z = new d(a.Z, {
        COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
            let { guildId: t, integrationIdsWithAppCommands: n } = e;
            return c.set(t, new Set(n)), !0;
        },
        COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
            let { guildId: t } = e;
            r.guildNoticeDismissed.push(t);
        },
        COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
            var t;
            let { guildId: n, integrationId: r } = e;
            null === (t = c.get(n)) || void 0 === t || t.clear(), u.add(r);
        },
        COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
            let { integrationId: t } = e;
            u.delete(t);
        }
    }));
