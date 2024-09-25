var r = n(47120);
var i = n(348326),
    a = n(710845),
    o = n(38618),
    s = n(592125),
    l = n(287328),
    u = n(59480),
    c = n(40455),
    d = n(989263),
    _ = n(513418);
function E(e, t, n) {
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
let f = new a.Z('Messages');
class h {
    static computeUsersAndMembers(e) {
        (0, _.Z)(e);
        let t = new Map(),
            n = new Map();
        for (let r of e) this.addIntoMap(t, r.users, (e) => e.id), this.addIntoMap(n, r.members, (e) => e.userId);
        return [Array.from(t.values()), Array.from(n.values())];
    }
    static addIntoMap(e, t, n) {
        for (let r of t) {
            let t = n(r),
                i = e.get(t);
            (null == i || (i.incomplete && !r.incomplete)) && e.set(t, r);
        }
    }
    constructor(e) {
        if ((E(this, 'connectionId', null), E(this, 'users', []), E(this, 'members', []), E(this, 'messages', []), e.length > 0)) {
            var t;
            let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                [r, i] = h.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === n) && (this.connectionId = n), (this.users = r), (this.members = i), (this.messages = e.map((e) => e.message));
        }
    }
}
class p {
    async startupLoad(e, t, n, r) {
        let i = l.Z.messages(e);
        return new h(await i.getLatest(t, n, r));
    }
    async load(e, t, n) {
        let r = s.Z.getBasicChannel(t);
        if (null == t || null == r || !(0, d.v)(r)) return new h([]);
        {
            let i = l.Z.messages(e);
            return new h(await i.getLatest(r.guild_id, t, n));
        }
    }
    handleMessageCreate(e, t) {
        if (!e.optimistic && !e.isPushNotification && null == e.sendMessageOptions) (0, d.$)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t);
    }
    handleMessageUpdate(e, t) {
        if (null != e.message.id && null != e.message.channel_id && !!(0, d.$)(e.message.channel_id)) m(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t);
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, d.$)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = s.Z.getBasicChannel(e.channelId);
        null != n && (0, d.$)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t);
    }
    handleMessageDelete(e, t) {
        if (null != e.id) this.deleteOne(e.guildId, e.channelId, e.id, t);
    }
    handleMessageDeleteBulk(e, t) {
        for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t);
    }
    handleChannelDelete(e, t) {
        this.deleteChannel(e.channel.guild_id, e.channel.id, t);
    }
    handleGuildDelete(e, t) {
        !e.guild.unavailable && this.deleteGuild(e.guild.id, t);
    }
    resetInMemoryState() {}
    insertStale(e, t, n, r) {
        let a = l.Z.messagesTransaction(r),
            s = o.Z.lastTimeConnectedChanged();
        a.put(e, t, u.a.fromMessage(e, t, n, s), i.Sn.Skip);
    }
    upsertOne(e, t, n, r) {
        let a = l.Z.messagesTransaction(r),
            s = o.Z.lastTimeConnectedChanged();
        a.put(e, t, u.a.fromMessage(e, t, n, s), i.Sn.Replace), a.trimChannel(e, t, c.ZP.saveLimit(t));
    }
    upsertMany(e, t, n, r) {
        let i = l.Z.messagesTransaction(r),
            a = o.Z.lastTimeConnectedChanged();
        for (let r of n) i.put(e, t, u.a.fromMessage(e, t, r, a));
        i.trimChannel(e, t, c.ZP.saveLimit(t));
    }
    async updateOne(e, t, n, r) {
        if (null == n.id) {
            f.warn('updateOne: message.id is null; cannot update a message if we do not know its id.');
            return;
        }
        let i = l.Z.messages(r.database),
            a = await i.get(e, t, n.id),
            s = o.Z.lastTimeConnectedChanged();
        null != a &&
            i.put(
                e,
                t,
                u.a.fromMessage(
                    e,
                    t,
                    {
                        ...a.message,
                        ...n
                    },
                    s
                )
            );
    }
    deleteOne(e, t, n, r) {
        l.Z.messagesTransaction(r).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        l.Z.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        l.Z.messagesTransaction(t).deleteGuild(e);
    }
    constructor() {
        E(this, 'actions', {
            CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
            MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
            MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
            MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
            MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
            MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
        });
    }
}
function m(e) {
    return null != e.author && null != e.content && null != e.mentions && null != e.timestamp;
}
t.ZP = new p();
