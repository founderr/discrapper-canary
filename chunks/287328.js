var i = r(47120);
var a = r(442837),
    s = r(348326),
    o = r(570140),
    l = r(314897),
    u = r(261875);
function c(e, n, r) {
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
s.Ds.KvCache, s.Ds.KvCache;
class d extends a.ZP.Store {
    initialize() {
        this.waitFor(l.default);
    }
    constructor(...e) {
        super(...e),
            c(this, 'database', (e) => u.Z.database(null != e ? e : l.default.getId())),
            c(
                this,
                'channels',
                f((e) => new s.Np('guild_channels', s.Ds.KvCache, e))
            ),
            c(
                this,
                'channelsTemp',
                f((e) => new s.Bx('guild_channels_temp', s.Ds.KvCache, e))
            ),
            c(
                this,
                'basicChannels',
                f((e) => new s.Nq('basic_channels', s.Ds.KvCache, e))
            ),
            c(
                this,
                'syncedBasicChannels',
                f((e) => new s.Nq('basic_channels_synced', s.Ds.KvCache, e))
            ),
            c(
                this,
                'cache',
                f((e) => new s.Nq('cache', s.Ds.KvCache, e))
            ),
            c(
                this,
                'forceResyncVersion',
                f((e) => new s.Nq('force_resync_version', s.Ds.KvCache, e))
            ),
            c(
                this,
                'emojis',
                f((e) => new s.Np('guild_emojis', s.Ds.KvCache, e))
            ),
            c(
                this,
                'guilds',
                f((e) => new s.L5('guilds', s.Ds.KvCache, e))
            ),
            c(
                this,
                'guildsRequiringDeletedIdsSync',
                f((e) => new s.L5('guilds_requiring_deleted_ids_sync', s.Ds.KvCache, e))
            ),
            c(
                this,
                'guildsRequiringChannelSync',
                f((e) => new s.L5('guilds_requiring_channel_sync', s.Ds.KvCache, e))
            ),
            c(
                this,
                'messages',
                f((e) => new s.uC('messages', s.Ds.Messages, e))
            ),
            c(
                this,
                'stickers',
                f((e) => new s.Np('guild_stickers', s.Ds.KvCache, e))
            ),
            c(
                this,
                'guildVersions',
                f((e) => new s.L5('guild_versions', s.Ds.KvCache, e))
            ),
            c(
                this,
                'nonGuildVersions',
                f((e) => new s.L5('non_guild_versions', s.Ds.KvCache, e))
            ),
            c(
                this,
                'userSettings',
                f((e) => new s.L5('user_settings', s.Ds.KvCache, e))
            ),
            c(
                this,
                'readStates',
                f((e) => new s.Nq('read_states', s.Ds.KvCache, e))
            ),
            c(
                this,
                'userGuildSettings',
                f((e) => new s.Nq('user_guild_settings', s.Ds.KvCache, e))
            ),
            c(
                this,
                'userSearchItems',
                f((e) => new s.L5('user_search_items', s.Ds.KvCache, e))
            ),
            c(this, 'channelsTransaction', (e) => this.channels(e.database).upgradeTransaction(e)),
            c(this, 'channelsTempTransaction', (e) => this.channelsTemp(e.database).upgradeTransaction(e)),
            c(this, 'basicChannelsTransaction', (e) => this.basicChannels(e.database).upgradeTransaction(e)),
            c(this, 'syncedBasicChannelsTransaction', (e) => this.syncedBasicChannels(e.database).upgradeTransaction(e)),
            c(this, 'cacheTransaction', (e) => this.cache(e.database).upgradeTransaction(e)),
            c(this, 'forceResyncVersionTransaction', (e) => this.forceResyncVersion(e.database).upgradeTransaction(e)),
            c(this, 'emojisTransaction', (e) => this.emojis(e.database).upgradeTransaction(e)),
            c(this, 'guildsTransaction', (e) => this.guilds(e.database).upgradeTransaction(e)),
            c(this, 'messagesTransaction', (e) => this.messages(e.database).upgradeTransaction(e)),
            c(this, 'stickersTransaction', (e) => this.stickers(e.database).upgradeTransaction(e)),
            c(this, 'guildVersionsTransaction', (e) => this.guildVersions(e.database).upgradeTransaction(e)),
            c(this, 'nonGuildVersionsTransaction', (e) => this.nonGuildVersions(e.database).upgradeTransaction(e)),
            c(this, 'userSettingsTransaction', (e) => this.userSettings(e.database).upgradeTransaction(e)),
            c(this, 'readStatesTransaction', (e) => this.readStates(e.database).upgradeTransaction(e)),
            c(this, 'userGuildSettingsTransaction', (e) => this.userGuildSettings(e.database).upgradeTransaction(e)),
            c(this, 'guildsRequiringDeletedIdsSyncTransaction', (e) => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)),
            c(this, 'guildsRequiringChannelSyncTransaction', (e) => this.guildsRequiringChannelSync(e.database).upgradeTransaction(e)),
            c(this, 'userSearchItemsTransaction', (e) => this.userSearchItems(e.database).upgradeTransaction(e));
    }
}
function f(e) {
    return function (n) {
        let r = null != n ? n : u.Z.database(l.default.getId());
        return null == r ? null : e(r);
    };
}
n.Z = new d(o.Z, {});
