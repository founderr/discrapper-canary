var r = n(47120);
var i = n(442837),
    a = n(348326),
    o = n(570140),
    s = n(314897),
    l = n(261875);
function u(e, t, n) {
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
a.Ds.KvCache, a.Ds.KvCache;
class c extends i.yh {
    initialize() {
        this.waitFor(s.default);
    }
    constructor(...e) {
        super(...e),
            u(this, 'database', (e) => l.Z.database(null != e ? e : s.default.getId())),
            u(
                this,
                'channels',
                d((e) => new a.Np('guild_channels', a.Ds.KvCache, e))
            ),
            u(
                this,
                'channelsTemp',
                d((e) => new a.Bx('guild_channels_temp', a.Ds.KvCache, e))
            ),
            u(
                this,
                'basicChannels',
                d((e) => new a.Nq('basic_channels', a.Ds.KvCache, e))
            ),
            u(
                this,
                'syncedBasicChannels',
                d((e) => new a.Nq('basic_channels_synced', a.Ds.KvCache, e))
            ),
            u(
                this,
                'cache',
                d((e) => new a.Nq('cache', a.Ds.KvCache, e))
            ),
            u(
                this,
                'forceResyncVersion',
                d((e) => new a.Nq('force_resync_version', a.Ds.KvCache, e))
            ),
            u(
                this,
                'emojis',
                d((e) => new a.Np('guild_emojis', a.Ds.KvCache, e))
            ),
            u(
                this,
                'guilds',
                d((e) => new a.L5('guilds', a.Ds.KvCache, e))
            ),
            u(
                this,
                'guildsRequiringDeletedIdsSync',
                d((e) => new a.L5('guilds_requiring_deleted_ids_sync', a.Ds.KvCache, e))
            ),
            u(
                this,
                'messages',
                d((e) => new a.uC('messages', a.Ds.Messages, e))
            ),
            u(
                this,
                'stickers',
                d((e) => new a.Np('guild_stickers', a.Ds.KvCache, e))
            ),
            u(
                this,
                'guildVersions',
                d((e) => new a.L5('guild_versions', a.Ds.KvCache, e))
            ),
            u(
                this,
                'nonGuildVersions',
                d((e) => new a.L5('non_guild_versions', a.Ds.KvCache, e))
            ),
            u(
                this,
                'userSettings',
                d((e) => new a.L5('user_settings', a.Ds.KvCache, e))
            ),
            u(
                this,
                'readStates',
                d((e) => new a.Nq('read_states', a.Ds.KvCache, e))
            ),
            u(
                this,
                'userGuildSettings',
                d((e) => new a.Nq('user_guild_settings', a.Ds.KvCache, e))
            ),
            u(
                this,
                'userSearchItems',
                d((e) => new a.L5('user_search_items', a.Ds.KvCache, e))
            ),
            u(this, 'channelsTransaction', (e) => this.channels(e.database).upgradeTransaction(e)),
            u(this, 'channelsTempTransaction', (e) => this.channelsTemp(e.database).upgradeTransaction(e)),
            u(this, 'basicChannelsTransaction', (e) => this.basicChannels(e.database).upgradeTransaction(e)),
            u(this, 'syncedBasicChannelsTransaction', (e) => this.syncedBasicChannels(e.database).upgradeTransaction(e)),
            u(this, 'cacheTransaction', (e) => this.cache(e.database).upgradeTransaction(e)),
            u(this, 'forceResyncVersionTransaction', (e) => this.forceResyncVersion(e.database).upgradeTransaction(e)),
            u(this, 'emojisTransaction', (e) => this.emojis(e.database).upgradeTransaction(e)),
            u(this, 'guildsTransaction', (e) => this.guilds(e.database).upgradeTransaction(e)),
            u(this, 'messagesTransaction', (e) => this.messages(e.database).upgradeTransaction(e)),
            u(this, 'stickersTransaction', (e) => this.stickers(e.database).upgradeTransaction(e)),
            u(this, 'guildVersionsTransaction', (e) => this.guildVersions(e.database).upgradeTransaction(e)),
            u(this, 'nonGuildVersionsTransaction', (e) => this.nonGuildVersions(e.database).upgradeTransaction(e)),
            u(this, 'userSettingsTransaction', (e) => this.userSettings(e.database).upgradeTransaction(e)),
            u(this, 'readStatesTransaction', (e) => this.readStates(e.database).upgradeTransaction(e)),
            u(this, 'userGuildSettingsTransaction', (e) => this.userGuildSettings(e.database).upgradeTransaction(e)),
            u(this, 'guildsRequiringDeletedIdsSyncTransaction', (e) => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)),
            u(this, 'userSearchItemsTransaction', (e) => this.userSearchItems(e.database).upgradeTransaction(e));
    }
}
function d(e) {
    return function (t) {
        let n = null != t ? t : l.Z.database(s.default.getId());
        return null == n ? null : e(n);
    };
}
t.Z = new c(o.Z, {});
