let n;
r(47120), r(653041);
var i,
    a = r(442837),
    o = r(570140);
function l(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let s = { guildNoticeDismissed: [] },
    c = new Map(),
    u = new Set();
class d extends (i = a.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        n = e;
    }
    getState() {
        return n;
    }
    shouldShowChannelNotice(e) {
        var t, r;
        return !n.guildNoticeDismissed.includes(e) && (null !== (r = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== r ? r : 0) > 0;
    }
    canShowOverviewTooltip(e, t) {
        var r;
        return (null === (r = c.get(e)) || void 0 === r ? void 0 : r.has(t)) === !0;
    }
    canShowToggleTooltip(e) {
        return u.has(e);
    }
}
l(d, 'displayName', 'CommandsMigrationStore'),
    l(d, 'persistKey', 'CommandsMigrationStore'),
    (t.Z = new d(o.Z, {
        COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
            let { guildId: t, integrationIdsWithAppCommands: r } = e;
            return c.set(t, new Set(r)), !0;
        },
        COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
            let { guildId: t } = e;
            n.guildNoticeDismissed.push(t);
        },
        COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
            var t;
            let { guildId: r, integrationId: n } = e;
            null === (t = c.get(r)) || void 0 === t || t.clear(), u.add(n);
        },
        COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
            let { integrationId: t } = e;
            u.delete(t);
        }
    }));
