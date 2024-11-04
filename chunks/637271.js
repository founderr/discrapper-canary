var i,
    l = n(442837),
    r = n(570140),
    s = n(592125),
    a = n(176505);
function o(e, t, n) {
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
let c = {},
    u = {};
class d extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        var t;
        c = null !== (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) && void 0 !== t ? t : {};
    }
    getState() {
        return { selectedResourceChannelIdByGuildId: c };
    }
    getSelectedResourceChannelId(e) {
        return null == e ? null : c[e];
    }
    getHomeNavigationChannelId(e) {
        var t;
        return null == e ? null : null !== (t = c[e]) && void 0 !== t ? t : u[e];
    }
}
o(d, 'displayName', 'GuildOnboardingHomeNavigationStore'),
    o(d, 'persistKey', 'GuildOnboardingHomeNavigationStore'),
    (t.Z = new d(r.Z, {
        CHANNEL_SELECT: function (e) {
            let { channelId: t, guildId: n } = e;
            if (null == n || t === a.oC.GUILD_HOME) return;
            let i = s.Z.getChannel(t),
                l = c[n],
                r = u[n];
            if (!((null == i ? void 0 : i.isThread()) && (null == i ? void 0 : i.parent_id) != null && [r, l].includes(null == i ? void 0 : i.parent_id))) t !== l && delete c[n], t !== r && delete u[n];
        },
        SELECT_HOME_RESOURCE_CHANNEL: function (e) {
            let { channelId: t, guildId: n } = e;
            null == t ? delete u[n] : (c[n] = t), delete u[n];
        },
        SELECT_NEW_MEMBER_ACTION_CHANNEL: function (e) {
            let { channelId: t, guildId: n } = e;
            delete c[n], (u[n] = t);
        }
    }));
