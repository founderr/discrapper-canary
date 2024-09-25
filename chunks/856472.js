var r = n(47120);
var i = n(757143);
var a = n(653041);
var o = n(627494);
var s = n(710845),
    l = n(287328);
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
let c = new s.Z('GuildStickers');
class d {
    async getAsync(e) {
        let t = performance.now(),
            n = await l.Z.stickers(e).getMapEntries(),
            r = performance.now();
        return c.log('asynchronously loaded in '.concat(r - t, 'ms (guilds: ').concat(n.length, ')')), n;
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleGuildUpdate(e, t) {
        this.replace(e.guild.id, e.guild.stickers, t);
    }
    handleGuildDelete(e, t) {
        this.delete(e.guild.id, t);
    }
    handleGuildStickersUpdate(e, t) {
        this.replace(e.guildId, e.stickers, t);
    }
    handleBackgroundSync(e, t) {
        e.promisesForBackgroundSyncToWaitOn.push(
            Promise.all(
                e.stickers.map((e) => {
                    if ('unavailable' === e.dataMode) return Promise.resolve();
                    'full' === e.dataMode ? (c.verbose('Replacing '.concat(e.entities.length, ' stickers for ').concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (c.verbose('Updating '.concat(e.updatedEntities.length, ' and deleting ').concat(e.deletedEntityIds.length, ' stickers for ').concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t));
                })
            )
        );
    }
    handleOneGuildCreate(e, t) {
        null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t);
    }
    resetInMemoryState() {}
    replace(e, t, n) {
        l.Z.stickersTransaction(n).replaceAll(e, t);
    }
    delete(e, t) {
        l.Z.stickersTransaction(t).delete(e);
    }
    update(e, t, n, r) {
        let i = l.Z.stickersTransaction(r);
        for (let r of (i.putAll(e, t), n)) i.delete(e, r);
    }
    constructor() {
        u(this, 'actions', {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
            GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
        });
    }
}
t.Z = new d();
